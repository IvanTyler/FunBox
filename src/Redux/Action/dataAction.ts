import { mockData } from "../../MockData/MockData";
import { getDataFetchReducer, getDataFetching, getDataFetchError } from "../Reducers/SliceReducers";
import { AppDispatch } from '../Store/Store';

export const getDataFetchProduct = () => (dispath: AppDispatch) => {
    try {
        dispath(getDataFetching())
        setInterval(() => {
            const response = mockData
            dispath(getDataFetchReducer(response))
        }, 0)
    } catch (error) {
        dispath(getDataFetchError('ошибка, данных нет'))
    }
}
