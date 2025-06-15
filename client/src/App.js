
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Post from './Post';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CraetePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider>
   <BrowserRouter>
  
   <Routes>
    <Route path="/" element={
      <Layout />
    }>   
     <Route index element={     
    <IndexPage />
      } />
      <Route path="/login" element={
        <LoginPage />
      } />
      <Route path="/register" element={
        <RegisterPage />
      } />
       <Route path="/create" element={
        <CraetePost />
      } />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/edit/:id" element={<EditPost />} />
      </Route>
     
      </Routes>
     
  </BrowserRouter>
  </UserContextProvider>
  );
}

export default App;
