import { Suspense, lazy } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { AuthGuard } from "./guards"
import { persistor, store } from "./redux/store"
import { RoutesWithNotFound } from "./utilities"
import { PrivateRoutes, PublicRoutes } from "./models"
import "@/assets/css/tailwind.css";

const Login = lazy(() => import("./pages/Auth/Login"));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Loanding...</>}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
