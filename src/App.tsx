import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdminProvider } from './context/AdminContext';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <ChatProvider>
          <Layout />
        </ChatProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;