import React, {useState} from 'react'
import './Todo.css';
import {addTodo, removeTodo, removeAllTodo} from '../actions/index';
import { useDispatch, useSelector } from 'react-redux'; 

const Todo = () => {

    const [inputData, setInputData] = useState('');

    const dispatch = useDispatch();
    const list = useSelector((state)=> state.todoReducers.list)
    console.log(list);

  return (
    <>
        <div className='main-div'>
            <div className="child-div">
                <figure>
                    <figcaption>
                        Add Your List here ✌️
                    </figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder='✍️ Add Items...'
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}
                    />
                    <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                </div>
                <div className="showItems">
                    {
                        list.map((elem) => {
                            return(
                                <div className="eachItem" key={elem.id}>
                                    <h3> {elem.data} </h3>
                                    <i className='far fa-trash-alt add-btnn' title="Delete Item" onClick={()=>dispatch(removeTodo(elem.id))}></i>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="showItems">
                   <button className='remove-btn' onClick={() => dispatch(removeAllTodo())}>Remove List</button>
                </div>
            </div>
            </div> 
    </>
  )
}

export default Todo;
