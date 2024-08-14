import { Route, Routes } from "react-router-dom";
import routItems from "../utils/routes";
import Main from "../pages/Main";
import Saidbar from "../components/Saidbar";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";

export const Root = () => {
    return (
        <div>
            <Routes>
                {/* USER */}
                <Route element={<Main />}>
                    {routItems.map((routeItem) => {
                        const ElementParent = routeItem.element;
                        return (
                            !routeItem.isPrivate && (
                                <Route
                                    key={routeItem.id}
                                    path={routeItem.path}
                                    element={<ElementParent />}
                                />
                            )
                        );
                    })}
                </Route>
                {/* ADMIN */}
                <Route element={<Saidbar />}>
                    {routItems.map((routeItem) => {
                        const ElementParent = routeItem.element;
                        return (
                            routeItem.isPrivate && (
                                <Route
                                    key={routeItem.id}
                                    path={routeItem.path}
                                    element={<ElementParent />}
                                />
                            )
                        );
                    })}
                </Route>
                <Route element={<Login />} path="/login" />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default Root;
