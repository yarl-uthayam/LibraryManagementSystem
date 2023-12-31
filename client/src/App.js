import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookCardView from './components/Books/BookCardView';
import Users from './components/Users';
import BookList from './components/Books';
import BookBorrowerList from './components/BookBorrowers';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookCardView />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id/borrowers" element={<BookBorrowerList />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="*" element={<Navigate to="/" replace={true} />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
