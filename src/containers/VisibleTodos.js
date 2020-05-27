import {connect } from 'react-redux'
import {Filters, toggleTodo} from '../redux/actions/index'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case Filters.SHOW_ALL:
        return todos
      case Filters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case Filters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos,state.visibilityFilters)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)