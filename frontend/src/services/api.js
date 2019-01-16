import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api/'
})

const ENDPOINT = 'todos'

// sort=createdAt&_order=desc&description_like=co

export const getTodos = (search) => api.get(ENDPOINT + '?_sort=createdAt&_order=desc' + search)
export const postTodo = (description) => api.post(ENDPOINT, { description: description, done: false, createdAt: new Date() })
export const deleteTodo = (id) => api.delete(ENDPOINT + '/' + id)
export const updateStatus = (todo, status) => api.put(ENDPOINT + '/' + todo.id, { ...todo, done: status })


// export const loadGenres = () => api.get('genres')
// export const saveSeries = (newSeries) => api.post('series', newSeries)
// export const updateSeries = (series) => api.put('series/' + series.id, series)
// export const loadSeriesByGenre = (genre) => api.get('series?genre=' + genre)
// export const deleteSeries = (id) => api.delete('series/' + id)
// export const loadSeriesById = (id) => api.get('series/' + id)

const apis = {
    getTodos,
    postTodo,
    deleteTodo,
    updateStatus
}

export default apis