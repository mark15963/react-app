import { Main } from './pages/main'
import { List } from './pages/list'
import { Item } from './pages/item'
import { Route, Routes, useNavigate } from 'react-router-dom';

export const App = () => {
    let navigate = useNavigate();
    return (
        <Routes>
            <Route path='/' element={< Main onClick={() => navigate("/list")} />} />
            <Route path='/list' element={<List onClick={() => navigate("/item")} />} />
            <Route path='/item' element={< Item onClick={() => navigate("/")} />} />
        </Routes>
    )
}




