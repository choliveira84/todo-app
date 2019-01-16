import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

import Api from '../services/api'
import TodoForm from './todoForm'
import TodoList from './todoList';

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    refresh(description = '') {
        //title_like=server
        const search = description ? '&description_like=' + description : ''
        Api.getTodos(search).then((res) => this.setState({ ...this.state, description, list: res.data }))
    }

    handleAdd() {
        const description = this.state.description
        Api.postTodo(description).then((res) => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        Api.deleteTodo(todo.id).then((res) => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Api.updateStatus(todo, true).then((res) => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        Api.updateStatus(todo, false).then((res) => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div className='container'>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    description={this.state.description}></TodoForm>
                <TodoList
                    list={this.state.list}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleRemove={this.handleRemove}></TodoList>
            </div>
        )
    }
}