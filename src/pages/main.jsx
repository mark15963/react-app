import { fetchInstance } from "../utils/axios"
import Button from "../components/button"

//import { UserName } from '../components/user'
/*
const Content = () => {
    return (
        <>
            <div className="container">
                <header>
                    <UserName name="Mark" />
                    <Button text="Button" />
                </header>
                <MainBlock />
            </div>
        </>
    )
}
*/

export const Main = ({ onClick }) => {
    return (
        <div>Это главная
            <button style={{ marginLeft: "5px" }} onClick={onClick}>переход к списку</button>

            <button style={{ marginLeft: "5px" }} onClick={async () => {
                const response = await fetchInstance({
                    methode: 'GET',
                    url: '/days',
                    params: {
                        // Сайт.ру/api/days?date=2025-03-01
                        // date: '2025-03-01'
                    }
                })
                console.log(response);
            }}>Получить</button>
            <br />
            <Button background="red" title="test" />

            <Button background="blue" title="test2" />
        </div>
    )
}

/*
export const Main = ({ onClick }) => {
    return <div>Это Главная
        <button onClick={onClick}>переход к списку</button>
    </div>
}
*/