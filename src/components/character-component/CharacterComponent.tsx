import type {ICharacter} from "../../models/ICharacter.ts";
import {type ReactNode} from "react";
interface CharacterComponentProps{
    item: ICharacter
    children: ReactNode

}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <p>{children}</p>
        </div>
    );
};