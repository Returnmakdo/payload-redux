import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "./redux/modules/counter";
import { minusNumber } from "./redux/modules/counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (e) => {
    const {value} = e.target
    // e.target.value는 문자열이고 숫자로 형변환 하기위해 + 사용
    setNumber(+value)
  }
  console.log(number)

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number))
  }

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number))
  }
  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler} >더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
	  </div>
  );
};

export default App;