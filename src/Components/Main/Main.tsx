import { FC } from 'react'
import { Container } from '../Container/Container'
import style from './Main.module.scss'

export const Main: FC = () => {
    return (
        <main className={style.main}>
            <Container>
            </Container>
        </main>
    )
}