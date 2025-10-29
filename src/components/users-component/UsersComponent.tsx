import {useEffect, useState} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import type {IUser} from "../../model/IUser.ts";
import type {IUserResponseModel} from "../../model/IUserResponseModel.ts";
import {userService} from "../../service/api.service.ts";



export const UsersComponent = () => {


    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            });

    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};