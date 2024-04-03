import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Menu from './components/ForLayout/Menu/Menu';
import Footer from './components/ForLayout/Footer/Footer';
import Header from './components/ForLayout/Header/Header';
import IndexPage from './pages/IndexPage/IndexPage';
import FormPage from './pages/FormPage/FormPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';



function App() {
   return (
      <Routes>
         <Route path={'/'} element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path={'form'} element={<FormPage />} />
            <Route path={'catalog'} element={<CatalogPage />} />
         </Route>
      </Routes >
   );
}
function Layout() {
   return (
      <div className='App'>
         <div className='container'>
            <Menu className='Menu' />
            <Header className='Header' />
            <main className='content'>
               <Outlet />
            </main>
            <Footer className='Footer' />
         </div>
      </div>
   )

}
export default App;
