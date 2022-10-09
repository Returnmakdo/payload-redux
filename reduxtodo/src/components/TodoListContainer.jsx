import { useSelector } from "react-redux"
import styled from "styled-components"

function TodoListContainer(){
    // todos는 현재 배열을 가져온다. 그리고 추가(렌더링)되면 추가된 배열을 가져옴.
    const { todos } = useSelector((state)=> state.todos)

    return(
        <StTodos>
            {todos.map((todo)=>{
                return <StTodo key={todo.id}>{todo.title}</StTodo>
            })}
        </StTodos>
    )
}

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;