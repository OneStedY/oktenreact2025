import {useNavigate} from "react-router";
import type {FC} from "react";
import type {IUser} from "../../model/IUser.ts";


type Props = {
    user: IUser,

}
export const UserComponent: FC<Props> = ({user}) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return <div>
        {user.username}: {user.email}


        <button  onClick={onButtonClickNavigate}>User Cart
        </button>
    </div>;
}