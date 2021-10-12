import "./watch.scss"
import { ArrowBackOutlined } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom"


export default function Watch() {
          const location = useLocation()
          const movie = location.movie

          
          return (
                    <div className="watch">
                              <Link to="/">
                              <div className="back"> 
                                                  <ArrowBackOutlined className ="icon" />
                                                  Home
                                        </div>

                                        <video 
                                                  src= {movie.video}
                                                  className="video"
                                                  
                                                  autoPlay
                                                  progress
                                                  controls
                                        />
                              </Link>
                    </div>
          )
}
