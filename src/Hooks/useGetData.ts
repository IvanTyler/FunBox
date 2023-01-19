import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDataFetchProduct } from "../Redux/Action/dataAction"
import { useTypeSelector } from "./useTypeSelector"

export const useGetData = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataFetchProduct())
    }, [])

    const {
        error,
        isloading,
        products
    } = useTypeSelector(state => state.dataReducer)

    return { products, error, isloading }
}