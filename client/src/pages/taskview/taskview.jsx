import React, { Component } from 'react'
import './taskview.scss'

export class TaskView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // hardcoded tasks
      user1: props.user1 || {},
      user2: props.user2 || {}
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck (e) {
    const task = e.target.getAttribute('id')
    console.log(task)
    const oldUser2 = this.state.user2
    oldUser2[task] = !oldUser2[task]
    this.setState({
      user2: oldUser2
    })
  }

  getProg (user) {
    let completed = 0
    Object.keys(user).forEach(task => {
      if (user[task]) {
        completed++
      }
    })
    return Math.ceil(completed * 100 / Object.keys(user).length).toString()
  }

  render () {
    return (
      <div className='task-view-container'>
        <div className='task-view'>
          <div className='header'>
            <h1>Tasks to Complete</h1>
          </div>
          <div className='task-content'>
            <div className='task-left'>
              <h2>User2's tasks</h2>
              <progress id='buddy-prog' value={this.getProg(this.state.user2)} max='100' />
              {Object.keys(this.state.user2).map((task, index) =>
                <div className='checkbox-div' key={index}>
                  <input type="checkbox" checked={this.state.user2[task]} onClick={this.handleCheck} name={task} id={task} />
                  <label htmlFor={task}>{task}</label>
                </div>
              )}
            </div>
            <div className='task-right'>
              <h2>My tasks</h2>
              <progress id='my-prog' value='0' max='100' />
              {Object.keys(this.state.user1).map((task, index) =>
                <div className='checkbox-div' key={index}>
                  <input type="checkbox" disabled checked={this.state.user1[task]} name={task} id={task} />
                  <label htmlFor={task}>{task}</label>
                </div>
              )}
              <br />
              <p><em>only your study buddy can check off your tasks</em></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskView
