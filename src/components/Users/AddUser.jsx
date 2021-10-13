import React from 'react';

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form>
            <label htmlFor="username" onSubmit={addUserHandler}>Username:</label>
            <input type="text" id="username"></input>
            <label htmlFor="age">Age(years):</label>
            <input type="number" id="age"></input>
            <button type="submit">Add User</button>
        </form>

    )
};

export default AddUser;