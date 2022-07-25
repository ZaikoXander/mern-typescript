import axios from "axios"

import IVideo from "./Video"

const API: string = "http://localhost:3333"

export async function getVideos() {
  return await axios.get<IVideo[]>(`${API}/videos`)
}

export async function createVideo(video: IVideo) {
  return await axios.post(`${API}/videos`, video)
}

export async function getVideo(id: string) {
  return await axios.get<IVideo>(`${API}/videos/${id}`)
}

export async function updateVideo(id: string, video: IVideo) {
  return await axios.put<IVideo>(`${API}/videos/${id}`, video)
}

export async function deleteVideo(id: string) {
  return await axios.delete<IVideo>(`${API}/videos/${id}`)
}
