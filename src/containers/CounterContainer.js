import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from "../components/Counter";
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={ number } onIncrease={ increase } onDecrease={ decrease }/>
    );
};



export default connect(
    state => ({
        number: state.counter.number,
    }),
    {  //두번째 파라미터를 객체형태로 넣어주면 connect함수가 내부적으로 bindActionCreators 작업을 대신해 준다..
        increase,
        decrease,
    },
)(CounterContainer);
