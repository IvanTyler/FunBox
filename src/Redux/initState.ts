import { IProducts } from "../Interfaces/interface";

export interface IGetData {
    products: IProducts[];
    isloading: boolean;
    error: null | string;
}

export const initialState: IGetData = {
    products: [],
    isloading: false,
    error: '',
}