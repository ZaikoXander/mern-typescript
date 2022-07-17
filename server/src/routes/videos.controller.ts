import { RequestHandler } from "express";
import Video from "./Video";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    return res.json(videos)
  }
  catch (error) {
    res.json(error)
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id)
  if (videoFound) return res.json(videoFound)
  return res.status(204).json()
}

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({url: req.body.url})
  if (videoFound) return res.status(301).json({message: "The URL already exists"})

  const video = new Video(req.body)
  const savedVideo = await video.save()
  res.status(201).json(savedVideo)
}

export const deleteVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id)
  if (videoFound) return res.json(videoFound)
  return res.status(204).json()
}

export const updateVideo: RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (videoUpdated) res.json(videoUpdated)
  res.status(204).json()
}
