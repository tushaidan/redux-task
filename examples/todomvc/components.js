import React from 'react'
import {ACTION_ADD,ACTION_ADD_ASYNC} from './reducer'
import {connect} from 'react-redux'
import {monitor} from 'redux-event-bus/util'
import {PROMISE_ADDING} from './listener'



export const Input = connect(state=>{
  return {count:state.count}
})(
  (props)=>{
    console.log( props)
    return <div>
      <input value={props.count} />
      <button onClick={e=>props.dispatch({type:ACTION_ADD})} >add</button>
      <button onClick={e=>props.dispatch({type:ACTION_ADD_ASYNC})} >add(async action)</button>
      <button onClick={e=>props.dispatch({type:ACTION_ADD_ASYNC})} >add(async listener)</button>
    </div>
  }
)

export const Message = connect()(
  (props)=>{
    return <div>message from reducer : {props.message}</div>
  }
)


function mapPromiseToState(promises){
  return {
    p : promises[PROMISE_ADDING]
  }
}

export const Indicator = monitor(mapPromiseToState)(
  (props)=>{
    return <div>current promise state:{props.p.status}</div>
  }
)



