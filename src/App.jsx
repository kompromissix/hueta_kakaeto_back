import "./App.css"
import Main from "./main/main"
import {Router, Route, Routes} from 'react-router-dom'
import User from "./User/User"

export default function App(){
    return(
        <>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/User' element={<User/>}/>
            </Routes>
        </>
    )
} 