import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Favorites } from "./pages/Favorites";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/favorites' element={<Favorites />} />
            </Route>
        </Routes>
    )
}