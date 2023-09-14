import '@/assets/css/tailwind.css';
import 'devextreme/dist/css/dx.material.orange.light.compact.css';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { AplicationContextProvider } from './context';
import { persistor, store } from './redux/store';
import Router from './router/router';

function App() {
    return (
        <div className="App min-h-screen grid grid-cols-1 overflow-hidden">
            <Suspense fallback={<>Loanding...</>}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AplicationContextProvider>
                            <Router />
                        </AplicationContextProvider>
                    </PersistGate>
                </Provider>
            </Suspense>
        </div>
    );
}

export default App;
