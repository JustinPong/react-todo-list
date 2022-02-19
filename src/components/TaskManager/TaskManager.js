import React, { useState, useEffect } from 'react';
import { useLocalStorage } from "../useLocalStorage";
import { Button } from 'react-bootstrap'
import './TaskManager.css';
import shortid from 'shortid';
import { API_GET_TASK } from '../../global/constants';
import { TiArrowRepeatOutline } from "react-icons/ti";
import { CgPlayListAdd } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { BsFillPenFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";

// async function fetchTask(setTask) {
//     const res = await fetch(API_GET_TASK)
//     const { task } = await res.json()
//     return task
// }

const TaskManager = (props) => {

    const [task, setTask] = useState ({
        // saved: localStorage.getItem("task"),
        id: shortid.generate(),
        name: '',
        description: '',
        assignedTo: '',
        date: '',
        isChecked: false,
        nameError: false,
        descriptionError: false
    })

    // useEffect(() => {
    //     fetchTask(setTask)
    // }, [])

    // Create the save method
    // save(() => {
    //     // Create a JSON string of the tasks
    //     const taskJson = JSON.stringify(task);

    //     // Store the JSON string in localStorage
    //     localStorage.setItem('tasks', taskJson);

    //     // Convert the currentId to a string;
    //     const currentId = String(task.currentId);

    //     // Store the currentId in localStorage
    //     localStorage.setItem('currentId', currentId);
    // })

    // // Create the load method
    // load(() => {
    //     // Check if any tasks are saved in localStorage
    //     if (localStorage.getItem('task')) {
    //         // Get the JSON string of tasks in localStorage
    //         const taskJson = localStorage.getItem('task');

    //         // Convert it to an array and store it in our TaskManager
    //         task = JSON.parse(taskJson);
    //     }

    //     // Check if the currentId is saved in localStorage
    //     if (localStorage.getItem('currentId')) {
    //         // Get the currentId string in localStorage
    //         const currentId = localStorage.getItem('currentId');

    //         // Convert the currentId to a number and store it in our TaskManager
    //         task.currentId = Number(currentId);
    //     }
    // })



    //system past event into event handling function as first input, 
    //first input= first argument
    //destructing method
    //const (target) = event 


    const handleChange = ({ target }) => {
        // alert(target.name);
        const { name, value } = target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }
        )
        )
    }


    const handleSubmit = (event) => {
        if (task.name === '' || task.description === '' || task.assignedTo === '') {
            if (task.name === '') {
                setTask(prevTask => ({...prevTask, nameError: true}))
            } else {
                setTask(prevTask => ({...prevTask, nameError: false}))
            }
            if (task.description === '') {
               setTask(prevTask => ({...prevTask, descriptionError: true}))
            } else {
                setTask(prevTask => ({...prevTask, descriptionError: false}))
            }
        } else if(task.name && task.description && task.assignedTo) {
             props.onSubmit(task)
               setTask({
                    id: shortid.generate(),
                    name: "",
                    description: "",
                    assignedTo: "",
                    date: "",
                    nameError: false,
                    descriptionError: false
                });
        }
    }
    return (
        <div className="new-task col">
            <h2 className="new-task-title" style={{ color: props.isDark ? 'white' : 'black'}}>
                <TiArrowRepeatOutline style={{ color: props.isDark ? 'white' : 'black'}} />
                </h2>
            <form onSubmit={handleSubmit} id="new-task-form">
                <div className="form-group">
                    <label htmlFor="name-input" style={{ color: props.isDark ? 'white' : 'black'}} >Task name <CgRename/> </label>
                    <div className="errorMessage">{task.nameError ? '(Please enter a task name)' : ''}</div>
                    <input style={{ border: task.nameError ? '2px red solid' : '' }} name="name" value={task.name} onChange={handleChange} className="col-12" id="name-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description-input1" style={{ color: props.isDark ? 'white' : 'black'}}>Description <BsFillPenFill/> </label>
                    <div className="errorMessage">{task.descriptionError ? '(Please enter a description)' : ''}</div>
                    <textarea style={{ border: task.descriptionError ? '2px red solid' : '' }} name="description" value={task.description} onChange={handleChange} className="col-12" type="text"></textarea>
                </div>
                <div className="row-form row">
                    <div className="form-group2 col-6">
                        <label htmlFor="assignedTo-input" style={{ color: props.isDark ? 'white' : 'black'}} >Venue <MdLocationPin/> </label>
                        <input name="assignedTo" value={task.assignedTo} onChange={handleChange} className="col-12" id="assignedTo-input" />
                    </div>
                    <div className="form-group2 col-6">
                        <label htmlFor="date-input" style={{ color: props.isDark ? 'white' : 'black'}} >Date <BsCalendar2Date/> </label>
                        <input name="date" onChange={handleChange} className="col-12" type="date" id="date-input" />
                    </div>
                </div>
                <div className="add-task-btn">
                    <Button onClick={handleSubmit} className="btn-warning col-12">Add</Button>
                </div>
            </form>
        </div>
    )
}

export default TaskManager;