import Main from './Main';
import {connect} from 'react-redux'
import {POST} from '../proptypes'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../redux/actions'
import { Dispatch } from 'redux';

function mapStateToProps(state:[string,POST[],string,string,string]) {
    return {
        posts: state
    }
}

function mapDispachToProps(dispatch:Dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main)

export default App;