import { useEffect, useState } from "react"

import IVideo from "./Video"

import VideoItem from "./VideoItem"
import { getVideos } from "./VideoService"

export default function VideoList() {

  const [videos, setVideos] = useState<IVideo[]>([])

  // function that call the api to get the videos in the database
  async function loadVideos() {
    const res = await getVideos()

    const formattedVideos = res.data.map(video => {
      return {
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
      }
    })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

    setVideos(formattedVideos) 
  }

  // it is automatically executed when page load
  useEffect(() => {
    loadVideos()
  }, [])

  return (
    <div className="row">
      {videos.map(video => (
        <VideoItem key={video._id} video={video} loadVideos={loadVideos} />
      ))}
    </div>
  )
}
