import React from 'react';
import Item from '../../components/Item/Item';
import './TaskList.css';
import { FcTodoList } from "react-icons/fc";


class TaskList extends React.Component {
        render() {
            return (
                <div className="to-do-list">
                <h2 className="table-title" style={{ color: this.props.isDark ? 'white' : 'black'}} >List  <FcTodoList /></h2>
                {this.props.items.map(item => (
                    <Item handleRemove={() => this.props.handleRemove(item.id)} 
                    toggleComplete={() => this.props.toggleComplete(item.id)} 
                    submittingStatus={this.props.submittingStatus} key={item.id} item={item} />
                    ))}
            </div>
        )
    }
}

export default TaskList;