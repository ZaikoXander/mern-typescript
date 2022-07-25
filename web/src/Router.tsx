import { Route, Routes } from "react-router-dom";

import VideoForm from "./components/Videos/VideoForm";
import VideoList from "./components/Videos/VideoList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<VideoList />} />
      <Route path="/new-video" element={<VideoForm />} />
      <Route path="/update/:id" element={<VideoForm />} />
    </Routes>
  )
}
