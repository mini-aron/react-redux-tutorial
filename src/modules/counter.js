import { act } from "react-dom/test-utils";
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션타입은 대문자로 정의, 문자열 내용은 '모듈이름/액션이름'과 같은 형태로 작성 -> 문자열 안에 모듈이름을 넣어주므로써 액션의 이름이 충돌되지 않게 해줌

//액션생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//export를 사용하는 이유는 나중에 다른 파일에서 이 함수를 불러와 사용할 수 있게 하기 위함임

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1}),
    [DECREASE]: (state, action) => ({ number: state.number - 1}),
  },
  initialState,
);


export default counter;