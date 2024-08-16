import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import B7_UserList from './B7_UserList'
import B7_UserDetail from './B7_UserDetail'
import B7_UserPosts from './B7_UserPosts'

export default function Bai7() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<B7_UserList />} />
        <Route path="/users/:id" element={<B7_UserDetail />}>
          <Route path="posts" element={<B7_UserPosts />} />
        </Route>
      </Routes>
    </Router>
  )
}