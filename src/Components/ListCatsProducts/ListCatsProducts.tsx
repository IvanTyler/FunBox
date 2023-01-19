import { FC } from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { IProducts } from '../../Interfaces/interface'
import List from '../List/List'
import { ListCatsProductsItem } from '../ListCatsProductsItem/ListCatsProductsItem'
import style from './ListCatsProducts.module.scss'

export const ListCatsProducts: FC = () => {
    const { products } = useGetData()

    return (
        <ul className={style.ListCatsProducts}>
            <List
                items={products}
                renderItem={(item: IProducts) => <ListCatsProductsItem key={item.id} item={item} />}
            />
        </ul>
    )
}