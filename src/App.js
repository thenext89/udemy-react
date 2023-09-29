
// import { Container, Row } from 'react-bootstrap';
// import './App.scss';
// import Header from './component/Header';
// import TableUsers from './component/TableUsers';
// import ModalAddNew from './component/ModalAddNew';

import { useState, useMemo, useRef, useReducer } from 'react'; //useMemo: Tranhs tinh toan lai nhung thu k can thiet (Tangw hieu nang) useMemo() || // useRef: giong ref ben vue
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const orders = [100, 200, 500];

// useReducer
// initState
// Action
// Reducer
// Dispatch
//--------------------
// initState
const initState = 0;
// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION: 
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default: 
      throw new Error('Invalid state');
  }
}
// Dispatch


function App() {
// Ex Counter
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur);
//     console.log(total);
//     return total;
//   })
//     const handleIncrease = () => {

//         // setCounter(counter+1);
//         setCounter(preState => preState + 1);
//     }
// Ex Change 
    // const [info, setInfo] = useState({
    //     name: 'Tiep',
    //     age: '12',
    //     job: 'Coder'
    // });
    // const handleChange = () => {
    //     setInfo(prev => (
    //         {   
    //             ...prev,
    //             bio: 'yellow'
    //         }
    //         )
    //     )
    // }
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [products, setProduct] = useState([]);
    const base1Ref = useRef();
    const base2Ref = useRef();
    const number1Ref = useRef();
    const number2Ref = useRef();
    const [count, dispatch] = useReducer(reducer, initState);
    const pow = (a, b) => {
      return a ** b;
    };
    const hexToOctal = (hexNumber) => {
       // Chuyển đổi số hex thành số decimal
      const decimalNumber = parseInt(hexNumber, 16);

      if (isNaN(decimalNumber)) {
        return null; // Nếu không thể chuyển đổi từ hex sang decimal
      }

      // Sử dụng hàm chuyển đổi decimal to octal đã được định nghĩa ở trước
      return decimalToX(decimalNumber, 8);
    }
    const hexToBinary = (hexNumber) => {
      // Đảm bảo chuỗi hexNumber bắt đầu bằng "0x" và loại bỏ nó nếu có
      if (hexNumber.startsWith("0x")) {
        hexNumber = hexNumber.substring(2);
      }
    
      let binaryResult = "";
      for (let i = 0; i < hexNumber.length; i++) {
        const hexDigit = parseInt(hexNumber[i], 16); // Chuyển đổi ký tự hex thành số thập phân
        const binaryDigit = hexDigit.toString(2); // Chuyển số thập phân thành số nhị phân
        // Đảm bảo rằng kết quả có độ dài 4 ký tự bằng cách thêm số 0 đầu tiên nếu cần
        binaryResult += binaryDigit.padStart(4, "0");
      }
    
      return binaryResult;
    }
    const octalToHexadecimal = (octalNumber) => {
      const decimalNumber = parseInt(octalNumber, 8); // Chuyển đổi từ cơ số 8 sang cơ số 10
      const hexadecimalNumber = decimalNumber.toString(16).toUpperCase(); // Chuyển đổi từ cơ số 10 sang cơ số 16 và chuyển thành chữ hoa
    
      return hexadecimalNumber;
    }
    const octalToBinary = (octalNumber) => {
      if (!/^[0-7]+$/.test(octalNumber)) {
        return null; // Trả về null nếu chuỗi không phải là số ở cơ số 8 hợp lệ
      }
    

        const decimalNumber = parseInt(octalNumber, 8); // Convert octal to decimal
        const binaryNumber = decimalNumber.toString(2); // Convert decimal to binary
        return binaryNumber;
    }
    
    const decimalToX = (decimalNumber, base) => {
      if (decimalNumber < 0) {
        return null; // Không hỗ trợ số âm trong cơ số 8
      }
    
      if (decimalNumber === 0) {
        return "0"; // Trường hợp số 0
      }
    
      let result = "";
      while (decimalNumber > 0) {
        if(base == 16) {
          const remainder = decimalNumber % 16; // Lấy phần dư khi chia cho 16
          const hexDigit = remainder < 10 ? remainder.toString() : String.fromCharCode(87 + remainder); // Chuyển đổi thành chữ số hex hoặc ký tự
          result = hexDigit + result; // Thêm chữ số hex vào kết quả ở phía trước
          decimalNumber = Math.floor(decimalNumber / 16); // Lấy phần nguyên của phép chia cho 16
        }
        else {
          const remainder = decimalNumber % base; // Lấy phần dư khi chia cho base
          result = remainder.toString() + result; // Thêm phần dư vào kết quả ở phía trước
          decimalNumber = Math.floor(decimalNumber / base); // Lấy phần nguyên của phép chia cho 8
        }

      }
    
      return result;
    }
    const binaryToOctal = (binaryNumber) => {
      // Hãy đảm bảo rằng chuỗi đầu vào là chuỗi nhị phân hợp lệ
      if (!/^[01]+$/.test(binaryNumber)) {
        return null;
      }
    
      // Bước 1: Thêm số 0 vào đầu chuỗi để đảm bảo độ dài của nó chia hết cho 3
      while (binaryNumber.length % 3 !== 0) {
        binaryNumber = '0' + binaryNumber;
      }
    
      // Bước 2: Chia chuỗi thành các khối có 3 ký tự và chuyển đổi từng khối sang cơ số 8
      let octalResult = '';
      for (let i = 0; i < binaryNumber.length; i += 3) {
        const binaryBlock = binaryNumber.substr(i, 3);
        const octalBlock = parseInt(binaryBlock, 2).toString(8);
        octalResult += octalBlock;
      }
    
      return octalResult;
    }
    const binaryToHexadecimal = (binaryNumber) => {
      const binaryRegex = /^[01]+$/;
      
      // Kiểm tra xem đầu vào có phải là số nhị phân hợp lệ không
      if (!binaryRegex.test(binaryNumber)) {
        return null; // Nếu không phải số nhị phân, trả về null
      }
    
      // Thực hiện chuyển đổi
      const decimalNumber = parseInt(binaryNumber, 2); // Chuyển đổi sang cơ số 10
      const hexadecimalNumber = decimalNumber.toString(16).toUpperCase(); // Chuyển đổi sang cơ số 16 và viết hoa
    
      return hexadecimalNumber;
    }
    const handlerConvert = (event) => {
      console.log('GGGGG', pow(10,2));
      let newNumber1 = number1Ref.current.value
      let newBase1 = base1Ref.current.value
      let newBase2 = base2Ref.current.value
      switch(newBase1) {
        case '8': 
          switch(newBase2) {
            case '16': 
             number2Ref.current.value = octalToHexadecimal(newNumber1);
              break;
            case '2': 
              number2Ref.current.value = octalToBinary(newNumber1)
              break;
            case '10':
              let val = 0, p = newNumber1.length - 1;
              for(let i = 0; i < newNumber1.length; i++) {
                val = val + newNumber1[i] * pow(8, p);
                p = p - 1;
              }
              number2Ref.current.value = val;
              break;
            default: break;
          }
          break;
        case '10': 
        console.log('case: 10');
          switch(newBase2) {
            case '8':
            case '2':
            case '16':
              number2Ref.current.value = decimalToX(newNumber1, parseInt(newBase2));
              break;
            default: break;
          }
          break;
        case '2': 
          switch(newBase2) {
            case '8':
              number2Ref.current.value = binaryToOctal(newNumber1);
              break;
            case '10':
              number2Ref.current.value = parseInt(newNumber1, 2);
              break;
            case '16':
              number2Ref.current.value = binaryToHexadecimal(newNumber1);
              break;
            default: break;
          }
        break;
        case '16': 
          switch(newBase2) {
            case '8':
              number2Ref.current.value = hexToOctal(newNumber1);
              break;
            case '2':
              number2Ref.current.value = hexToBinary(newNumber1);
              break;
            case '10':
              number2Ref.current.value = parseInt(newNumber1, 16);
              break;
            default: break;
          }
        break;
          
        default: break;
      }
      
    }
    // const handleSubmit = () => {
      
    //   setProduct([...products,{
    //     name,
    //     price: Number(price)
    //   }])
    // }
    // const total = products.reduce((result, pord) => result + pord.price, 0);
    // const total = useMemo(() => {
    //   console.log('runnnnnn');
    //   const result = products.reduce((result, pord) => result + pord.price, 0);
    //   setName('');
    //   setPrice('');
    //   console.log(nameRef.current);
    //   nameRef.current && nameRef.current.focus();
    //   return result;
    // }, [products])
  return (
    <div className='app-container'>
      <div style={{padding: '20px', display:'flex'}}>
        {/* <h1>{count}</h1>
        <button 
          onClick={() => dispatch(UP_ACTION)}
        >
          Up
        </button>
        <button 
          onClick={() => dispatch(DOWN_ACTION)}
          >
          Down
        </button> */}
        <div className='wrapper'>
          <div>
            He so: 
            <select name="" id="" ref={base1Ref} onChange={handlerConvert}>
              <option value="2">2</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="16">16</option>
            </select>
          </div>
          <input type="text" ref={number1Ref}  onChange={handlerConvert}/>

        </div>
        <div className='wrapper'>
          <div>
            He so: 
            <select name="" id="" ref={base2Ref} onChange={handlerConvert}>
              <option value="2">2</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="16">16</option>
            </select>
          </div>
          <input type="text" ref={number2Ref} disabled/>

        </div>
        
        {/* <input value={name}
              ref={nameRef}
              placeholder='Enter name...'
              onChange={e => setName(e.target.value)}
        />
        <br></br>
        <input value={price}
              placeholder='Enter price...'
              onChange={e => setPrice(e.target.value)}
        />
        <br></br>
        <button onClick={handleSubmit}>
          Add
        </button>
        <h1>
          Total: {total}
        </h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name} - {product.price}</li>
          ))}
        </ul> */}
      </div>
      {/* </div> */}
        {/* <h1 style={{padding: "10px"}}>
            {JSON.stringify(info)}
        </h1> */}
        {/* <button onClick={handleChange}>Increase</button>  */}
        {/* Ex counter  */}
        {/* <h1 style={{padding: "10px"}}>
            {counter}
        </h1>
        <button onClick={handleIncrease}>Increase</button> */}    
      
      {/* <Container>
        <Row>
          <Header/>
          <TableUsers/>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        /> */}
    </div>
  );
}

export default App;
