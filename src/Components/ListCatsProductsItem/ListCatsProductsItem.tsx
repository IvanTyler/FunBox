import { FC } from 'react'
import { IProducts } from '../../Interfaces/interface'
import style from './ListCatsProductsItem.module.scss'
import cat from '../../assets/images/common/cat.png'
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../../Redux/Reducers/SliceReducers';

interface IListCatsProductsItemProps {
    item: IProducts;
}

export const ListCatsProductsItem: FC<IListCatsProductsItemProps> = ({ item }) => {

    const dispath = useDispatch()

    const disabledLeftCorber = {
        borderLeft: '4px solid #B3B3B3'
    }

    const disabledPackage = {
        borderBottom: '4px solid #B3B3B3',
        borderRight: '4px solid #B3B3B3',
        opacity: 0.5,
    }

    const disabledBefore = {
        borderLeft: '4px solid #B3B3B3',
        borderBottom: '4px solid #B3B3B3',
    }

    const disabledAfter = {
        borderTop: '4px solid #B3B3B3',
        borderRight: '4px solid #B3B3B3',
    }

    const disabledCountKilogram = {
        backgroundColor: '#B3B3B3',
    }

    return (
        <li className={style.ListCatsProductsItem}>
            <div className={item.selected ?
                style.ListCatsProductsItem__before + ' ' + style.ListCatsProductsItem__beforeSelected :
                style.ListCatsProductsItem__before}
                style={item.disabled ? disabledBefore : {}}>
            </div>
            <div className={item.selected ?
                style.ListCatsProductsItem__after + ' ' + style.ListCatsProductsItem__afterSelected :
                style.ListCatsProductsItem__after}
                style={item.disabled ? disabledAfter : {}}>
            </div>
            <div className={item.selected ?
                style.ListCatsProductsItem__leftCorner + ' ' + style.ListCatsProductsItem__leftCornerSelected :
                style.ListCatsProductsItem__leftCorner
            } style={item.disabled ? disabledLeftCorber : {}}></div>
            <article className={item.selected ?
                style.ListCatsProductsItem__package + ' ' + style.ListCatsProductsItem__packageSelected :
                style.ListCatsProductsItem__package
            } style={item.disabled ? disabledPackage : {}}>
                <div
                    onClick={() => item.disabled ? (event: any) => event.stopPropagation() : dispath(selectedProduct(item.id))}
                    className={style.ListCatsProductsItem__coverPackage}>
                </div>
                <h2 className={style.ListCatsProductsItem__title + ' ' + style.ListCatsProductsItem__titleDefault}>Сказочное заморское яство</h2>
                <h2 className={style.ListCatsProductsItem__title + ' ' +
                    style.ListCatsProductsItem__titleSelected
                }>
                    Котэ не одобряет?
                </h2>

                <h2 className={style.ListCatsProductsItem__subTitle}>
                    <span className={style.ListCatsProductsItem__subTitleNyamushka}>
                        Нямушка
                    </span>
                    {item.title}
                </h2>
                <p className={style.ListCatsProductsItem__numberServings}>
                    {item.numberServings}
                </p>
                <div className={item.selected ?
                    style.ListCatsProductsItem__countKilogram + ' ' +
                    style.ListCatsProductsItem__countKilogramSelected :
                    style.ListCatsProductsItem__countKilogram}
                    style={item.disabled ? disabledCountKilogram : {}}>
                    <span className={style.ListCatsProductsItem__kilogram}>
                        {item.kilogram}
                    </span>
                    <span className={style.ListCatsProductsItem__text}>
                        кг
                    </span>
                </div>
                <img className={style.ListCatsProductsItem__cat} src={cat} alt="cat" />
            </article>
            {item.disabled ?
                <p className={style.ListCatsProductsItem__signature + ' ' + style.ListCatsProductsItem__signatureDisabled}>
                    {item.description.notProduct}
                </p> :
                <div className={style.ListCatsProductsItem__signature}>
                    {item.selected ? item.description.haveProduct :
                        <p className={style.ListCatsProductsItem__signatureContent}>
                            Чего сидишь? Порадуй котэ, <span className={style.ListCatsProductsItem__buy}>
                                <span
                                    onClick={() => item.disabled ? (event: any) => event.stopPropagation() : dispath(selectedProduct(item.id))}
                                    className={style.ListCatsProductsItem__buyText}
                                >купи</span>.
                            </span>
                        </p>
                    }
                </div>
            }
        </li>
    )
}