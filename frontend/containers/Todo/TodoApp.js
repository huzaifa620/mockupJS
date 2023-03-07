import React, { useState, useContext, Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Plus } from 'baseui/icon';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { TodoList } from './TodoList';
import { AddListWrapper, AddButton } from './Todo.styled';
import { TodoContext } from './TodoContext';
import { Block } from 'baseui/block';

const reorder = ( list, startIndex, endIndex ) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};


function AddTodo({ addTodo }) {
  const [value, setValue] = React.useState('Hello');
  return (
    <Block
      overrides={{
        Block: { style: { display: 'flex', alignItems: 'center' } },
      }}
    >
      <Input
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
        placeholder="Enter Your Todo"
        overrides={{ Root: { style: { minHeight: '54px' } } }}
      />
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.font250,
                minWidth: '80px',
                minHeight: '54px',
                '@media only screen and (min-width: 481px)': {
                  minWidth: '130px',
                },
              };
            },
          },
        }}
        onClick={() => addTodo(value)}
      >
        Add
      </Button>
    </Block>
  );
}

function TodoApp({ status }) {
  const { todos, setTodos, addTodo } = useContext(TodoContext);
  const [showInput, setShowInput] = useState(false);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const todosOrder = reorder(
      todos,
      result.source.index,
      result.destination.index
    );
    setTodos(todosOrder);
  };

  let statusTodoList = [];
  if (status === 'all') {
    statusTodoList = todos;
  } else {
    statusTodoList = todos.filter((todo) => todo.status === status);
  }
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <TodoList todos={statusTodoList} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddListWrapper>
        <AddButton
          onClick={e => {
            e.preventDefault();
            setShowInput(!showInput);
          }}
        >
          <Plus size={24} />
          <Block as="span" paddingLeft="7px" paddingRight="7px">
            Add To Do List
          </Block>
        </AddButton>
        {showInput ? <AddTodo addTodo={addTodo} /> : null}
      </AddListWrapper>
    </Fragment>
  );
}

export default TodoApp;
