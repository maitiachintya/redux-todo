import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'
import TodoView from '../components/redux/todos/view/TodoView'
import AddItem from '../components/redux/todos/view/AddItem'
import EditItem from '../components/redux/todos/view/EditItem'

const Routing = () => {
    return (
        <div>
            <Router future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
                <Header />
                <Routes>
                    <Route path='' element={<Home />}></Route>
                    <Route path='todo-page' element={<TodoView />}></Route>
                    <Route path='/add' element={<AddItem />}></Route>
                    <Route path='/edit/:id' element={<EditItem />}></Route>
                    <Route path='*' element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routing