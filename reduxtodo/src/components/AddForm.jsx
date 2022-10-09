import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components"

function AddForm (){
    // title은 input값을 가져오고, setTitle은 해당 값을 변경하는 함수
    const [title, setTitle] = useState("")
    // 추가하기 버튼 누르기전까지는 계속 원래 있던 배열을 가져오고, 추가하기 버튼을 누르면 해당 요소가 추가된 배열이 todos에 저장된다.
    const todos = useSelector((state) => state.todos.todos) 
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(title==="") return alert('내용을 입력해주세요')
        // dispatch를 통해 action객체로 addTodo객체의 값을 전달함 id와 title
        dispatch(addTodo({
            id: todos.length + 1,
            title // title: title
        }))
        setTitle("")
    }

    return (
        <StFormContainer>
          <form onSubmit={onSubmitHandler}>
            <label>Todos의 제목을 입력하세요</label>
            <StInput
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <StButton>추가하기</StButton>
          </form>
        </StFormContainer>
      );
}

export default AddForm

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;