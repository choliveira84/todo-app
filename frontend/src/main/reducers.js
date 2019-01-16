import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [
            { id: 1, description: 'Pagar a fatura do cartão.', done: false },
            { id: 2, description: 'Agendar médico.', done: true }
        ]
    })
})

export default rootReducer