import {useEffect, useState} from "react";
import type {IUser} from "../../model/IUser.ts";
import type {IUserResponseModel} from "../../model/IUserResponseModel.ts";

export const UsersComponent = () => {
    const [users, setUsers]=useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(({users}:IUserResponseModel) => {
                setUsers(users);

            })
    }, []);
    return (
        <div>
            {}
        </div>
    );
};