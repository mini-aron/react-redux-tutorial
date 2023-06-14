import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';

const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋값을 변경함
const INSERT = "todos/INSERT"; //새로운 todo를 등록함
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 1;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
//초기 상태 및 리듀서 함수
const initialState = {
  input: "",
  todos: [],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
