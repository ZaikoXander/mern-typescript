import IVideo from "./Video"
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom"

import { deleteVideo } from "./VideoService"

import "./VideoItem.css"

interface VideoItemProps {
  video: IVideo
  loadVideos: () => Promise<void>
}

export default function VideoItem({video, loadVideos }: VideoItemProps) {
  const navigate = useNavigate()

  async function handleDelete(id: string) {
    await deleteVideo(id)
    loadVideos()
  }

  return (
    <div key={video._id} className="col-md-4">
      <div
        className="card card-body video-card"
        style={{cursor: "pointer"}}
      >
        <div className="d-flex justify-content-between">
          <h1
            onClick={() => navigate(`/update/${video._id}`)}
          >
            {video.title}
          </h1>
          <span className="text-danger" onClick={() => video._id && handleDelete(video._id)}>
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="ratio ratio-16x9">
          <ReactPlayer width={"100%"} height={"100%"} url={video.url} />
        </div>
      </div>
    </div>
  )
}
