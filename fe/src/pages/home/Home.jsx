import "./Home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featrued/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = ( { type } ) => {
          const [ lists, setLists ] = useState([])
          const [ genre, setGenre ] = useState(null)


          useEffect (() => {
                    const getLists =  async () => {
                              try {
                                        const res = await axios.get(
                                                  `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,

                                                  {
                                                            headers: {
                                                                      token: 
                                                                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjIwN2MxMDM1ZGJlMzdlYjQxNGEzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzkzMzU5OCwiZXhwIjoxNjM0MzY1NTk4fQ.YYHEqnKPo5fTdfTqLZZj6H3ioBjDxuT64AlULcRHGiY" 
                                                            }
                                                  }
                                        )

                                        setLists(res.data)

                              } catch (err) {
                                        console.log(err)
                              }
                    }

                    getLists()
          }, [genre, type])

          console.log(genre)

          return (
                    <div className="home">
                              <Navbar />

                              <Featured 
                                        type = {type}
                                        setGenre = {setGenre}
                              />

                              {
                                        lists.map(list => (
                                                  <List list = {list} />
                                        ))
                              }
                    </div>
          )
}

export default Home
