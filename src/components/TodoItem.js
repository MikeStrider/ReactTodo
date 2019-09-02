import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted'
            }
        } else {
            return {
                textDecoration: 'none',
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted'
            }
        }
    }

    render() {
        return (
            <div style={this.getStyle()}> 
            <input type='checkbox' />
                {this.props.todo.title}
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;