import { FC } from 'react'
import { ListCatsProducts } from '../ListCatsProducts/ListCatsProducts'
import style from './Cats.module.scss'

export const Cats: FC = () => {
    return (
        <section className={style.sectionCats}>
            <h1 className={style.sectionCats__title}>Ты сегодня покормил кота ?</h1>
            <ListCatsProducts />
        </section>
    )
}