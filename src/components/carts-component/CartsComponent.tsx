import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {ICartResponseModel} from "../../model/ICartResponseModel.ts";
import type {ICart} from "../../model/ICart.ts";
import {cartService} from "../../service/api.service.ts";


export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);

    return (
        <div>
            {
                carts.map((cart: ICart) => (<div key={cart.id}>
                    {cart.total}
                </div>))
            }

        </div>
    );
};