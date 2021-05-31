import React from 'react'
import { Todo } from './Todo';
import PropTypes from 'prop-types'


export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Things To Do</h3>
            {/* hod function in js */}

            {props.todos.length === 0 ? "No Todos to display" :

                    props.todos.map((todo) => {
                        return <Todo todo={todo} onDelete={props.onDelete} key={todo.sno} />


                    }
                    )
                }
          
          
        </div>
    )
}
