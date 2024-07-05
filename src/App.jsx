import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BookNowPage from "./pages/BookNowPage";
import RoomsFeaturesPage from "./pages/RoomsFeaturesPage";
import SendUsAMessagePage from "./pages/SendUsAMessagePage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookNow" element={<BookNowPage />} />
        <Route path="/roomsFeatures" element={<RoomsFeaturesPage />} />
        <Route path="/sendUsAMessage" element={<SendUsAMessagePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
