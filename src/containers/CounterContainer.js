import { useSelector, useDispatch } from 'react-redux';
import Counter from "../components/Counter";
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number); // connect 함수를 사용하지 않고도 리덕스의 한태를 조회할 수 있게 해주는 훅이다..
    const dispatch = useDispatch();
    return (<Counter
         number={number}
         onIncrease={() => dispatch(increase())}
         onDecrease={() => dispatch(decrease())}
         />);
}
export default CounterContainer;