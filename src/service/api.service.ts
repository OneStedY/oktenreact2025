import type {IUserResponseModel} from "../model/IUserResponseModel.ts";
import type {ICartResponseModel} from "../model/ICartResponseModel.ts";


const baseUrl = 'https://dummyjson.com';
export const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json());
    },

};
export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponseModel> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(res => res.json());

    },

};