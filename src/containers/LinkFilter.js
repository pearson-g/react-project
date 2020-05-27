import {connect} from 'react-redux'
import {setVisibilityFilter} from '../redux/actions/index'
import Lilnk from '../components/Link';

const mapStateToProps = (state,ownProps) => ({
    active: state.visibilityFilters === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })


export default connect(mapStateToProps, mapDispatchToProps)(Lilnk)