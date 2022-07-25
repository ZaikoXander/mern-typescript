import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import IVideo from "./Video"

import { createVideo, getVideo, updateVideo } from "./VideoService"

type TInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type Params = {
  id: string
}

export default function VideoForm() {

  const navigate = useNavigate()
  const params = useParams<Params>()

  /* const initialVideoState = {
    title: "",
    description: "",
    url: ""
  } */
  const [video, setVideo] = useState<IVideo>({title: "", description: "", url: ""}/* initialVideoState */)

  function handleInputChange(event: TInputChange) {
    setVideo({...video, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!params.id) {
      await createVideo(video)
      toast.success("New video added")
    }
    else {
      await updateVideo(params.id, video)
    }

    // setVideo(initialVideoState)
    navigate("/")
  }

  const getVideoById = async (id: string) => {
    const res = await getVideo(id)
    const { title, description, url } = res.data
    setVideo({title, description, url})
  }

  useEffect(() => {
    if (params.id) getVideoById(params.id)
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>New Video</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="description" 
                  rows={3} 
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                >  
                </textarea>
              </div>

              {
                params.id
                  ?
                  <button className="btn btn-info">
                    Update Video
                  </button>
                  :
                  <button className="btn btn-primary">
                    Create Video
                  </button>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}