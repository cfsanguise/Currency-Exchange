import { connect } from 'react-redux';
import { changeCurrency } from '../../redux/currencyReducer';
import Board from './Board';

const mapStateToProps = (state) => {
    return {
        result: state.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (from, to, amount) => {dispatch(changeCurrency(from, to, amount))}
    }    
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);