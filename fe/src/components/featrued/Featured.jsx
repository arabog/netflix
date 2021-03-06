import "./featured.scss"
import { PlayArrow, InfoOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Featured( {type, setGenre } ) {
          const [content, setContent] = useState({})

          useEffect(() => {
                    const getRandomMovies = async () => {
                              try {
                                        const res = await axios.get(`/movies/random?type=${type}`,
                                                  {
                                                            headers: {
                                                                      token: 
                                                                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjIwN2MxMDM1ZGJlMzdlYjQxNGEzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzkzMzU5OCwiZXhwIjoxNjM0MzY1NTk4fQ.YYHEqnKPo5fTdfTqLZZj6H3ioBjDxuT64AlULcRHGiY" 
                                                            }
                                                  }
                                        )

                                        setContent(res.data[0])
                              } catch (err) {
                                        console.log(err)
                              }
                    }

                    getRandomMovies()
          }, [type])


          return (
                    <div className= "featured">
                              {
                                        type && (
                                                  <div className="category">
                                                            <span> { type === "movies" ? "Movies" : "Series" } </span>

                                                            <select name="genre" id="genre" onChange= {e => setGenre(e.target.value)}>
                                                                      <option> Genre </option>
                                                                      <option value="adventure"> Adventure </option>
                                                                      <option value="comedy"> Comedy </option>
                                                                      <option value="crime"> Crime </option>
                                                                      <option value="documentary"> Documentary </option>
                                                                      <option value="drama"> Drama </option>
                                                                      <option value="fantasy"> Fantasy </option>
                                                                      <option value="historical"> Historical </option>
                                                                      <option value="horror"> Horror </option>
                                                                      <option value="romance"> Romance </option>
                                                                      <option value="sci-fi"> Sci-fi </option>
                                                                      <option value="thriller"> Thriller </option>
                                                                      <option value="western"> Western </option>
                                                            </select>
                                                  </div>
                                        )
                              }

                              <img 
                                        src= {content.img}
                                        alt="" 
                              />

                              <div className="info">
                                        <img 
                                                  src= {content.imgTitle}
                                                  alt="" 
                                        />

                                        <span className="desc">
                                                  {content.desc}
                                        </span>

                                        <div className="buttons">
                                                  <button className="play">
                                                            <PlayArrow />
                                                            <span>Play</span>
                                                  </button>

                                                  <button className="more">
                                                            <InfoOutlined />
                                                            <span>Info</span>
                                                  </button>
                                        </div>
                              </div>
                    </div>
          )
}
