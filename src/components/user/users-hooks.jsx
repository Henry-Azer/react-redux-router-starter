import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { userList } from "../../store/actions/users/users-actions";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(userList());
    }, [dispatch]);

    useEffect(() => {
        console.log(users);
    });

    return (
        <div>
            {users
                ? users.map((user) => <div key={user.id}>{user.name}</div>)
                : null}
        </div>
    );
};

export default Users;
