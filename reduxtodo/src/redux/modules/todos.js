// 액션값 설정 (상수화)
const Add_TODO = "ADD_TODO";

// Action Creator 만들기 payload로 입력값을 받아서 넘겨줄 수 있음.
export const addTodo = (payload) => {
    return{
        // return값은 type으로 Add_TODO라고 자동완성이 되게끔(오타방지) 값을 리턴해주고
        // 사용자의 입력값을 동시에 넘겨준다. payload: payload -> ES6이후 축약가능
        type: Add_TODO,
        payload
    }
}

// 초기값 설정하기. 안해도 무관// 대신 안하게되면 map뒤에 ? 붙혀줘야함
const init = {
    todos:[
        {
            id:1,
            title: "react를 배워봅시다."
        },
        {
            id:2,
            title: "redux를 배워봅시다."
        }
    ]
}

// Reducer 생성하기
const todos = (state=init, action) => {
    // state는 초기값이고, action에는 payload가 포함된 Action Creator를 받아온다.
    switch(action.type){
        case Add_TODO:
            return{
                ...state, // 기존 state(현재에선 리스트) 복사
                todos: [...state.todos, action.payload] 
                // 현재리스트도 복사해오고, 추가로 사용자한테 입력받은 action.payload값 추가
            }
        default:
            return state;
    }
}

export default todos