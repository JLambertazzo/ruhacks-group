import React, { Component } from 'react'
import './taskview.scss'

export class TaskView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // hardcoded tasks
      user1: {},
      user2: {},
      u1Ready: false,
      u2Ready: false
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleReady = this.handleReady.bind(this)
  }

  handleCheck (e) {
    const task = e.target.getAttribute('id')
    const oldUser2 = this.state.user2
    oldUser2[task] = !oldUser2[task]
    this.setState({
      user2: oldUser2
    })
  }

  handleReady (e) {
    if (e.target.nextSibling) {
      const prev = this.state.u1Ready
      this.setState({
        u1Ready: !prev
      })
    } else {
      const prev = this.state.u2Ready
      this.setState({
        u2Ready: !prev
      })
    }
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
          </div>
          <div className='button-container'>
            <button className={this.state.u1Ready ? 'ready' : 'unready'} onClick={this.handleReady}>Ready</button>
            <button className={this.state.u2Ready ? 'ready' : 'unready'} onClick={this.handleReady}>Ready</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskView
