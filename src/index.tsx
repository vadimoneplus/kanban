import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        {/* <Link to="about">About Us</Link> */}
      </>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>

  
);


