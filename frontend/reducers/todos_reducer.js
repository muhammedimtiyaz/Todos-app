import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TODO_ERROR } from '../actions/todo_actions';
import {merge} from "lodash";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export default function todosReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      return merge ({}, state, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      const nextState = merge ({}, state);
      delete nextState[action.todo.id];
      return nextState;
    case TODO_ERROR:
      return alert(action.error);
    default:
      return state;
  }
}


