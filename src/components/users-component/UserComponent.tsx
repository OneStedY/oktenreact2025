import type {IUser} from "../../model/IUser.ts";


interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>{user.username}</div>
    );
};