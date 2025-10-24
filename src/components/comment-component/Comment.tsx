import type {FC} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";

type PropType = {comment:CommentModel}


export const Comment:FC<PropType> = ({comment: {name, body}}) => {
    return (
        <div>

            <h3>{name}</h3>
                <p>{body}</p>


        </div>
    );
};