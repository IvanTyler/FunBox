import { FC } from 'react'
import { IProducts } from '../../Interfaces/interface'
import style from './ListCatsProductsItem.module.scss'

interface IListCatsProductsItemProps {
    item: IProducts;
}

export const ListCatsProductsItem: FC<IListCatsProductsItemProps> = ({ item }) => {
    return (
        <li className={style.ListCatsProductsItem}>
            <article className={style.ListCatsProductsItem__article}>
                <h2 className={style.ListCatsProductsItem__title}>Сказочное заморское яство</h2>
                <h2 className={style.ListCatsProductsItem__SubTitle}>
                    <span className={style.ListCatsProductsItem__subTitleNyamushka}>
                        Нямушка
                    </span>
                    {item.title}
                </h2>
                <p className={style.ListCatsProductsItem__numberServings}>
                    {item.numberServings}
                </p>
                <div className={style.ListCatsProductsItem__countKilogram}>
                    <span className={style.ListCatsProductsItem__kilogram}>
                        {item.kilogram}
                    </span>
                    кг
                </div>
            </article>
            <p className={style.ListCatsProductsItem__signature}>
                {item.description}
            </p>
        </li>
    )
}