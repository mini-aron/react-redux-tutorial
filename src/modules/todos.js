const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경함
const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})