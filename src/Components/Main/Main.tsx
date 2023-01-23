import { FC } from 'react'
import { Container } from '../Container/Container'
import style from './Main.module.scss'

interface propsMain {
    children: React.ReactNode;
}

export const Main: FC<propsMain> = ({ children }) => {
    return (
        <main className={style.main}>
            <Container>
                {children}
            </Container>
        </main>
    )
}