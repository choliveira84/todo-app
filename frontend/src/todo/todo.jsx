import React from 'react'
import PageHeader from '../template/pageHeader'

import TodoForm from './todoForm'
import TodoList from './todoList';

export default () => (
    <div className='container'>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
    </div>
)