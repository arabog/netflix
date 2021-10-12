import "./listItem.scss"
import {
        PlayArrow,
        Add,
        ThumbUpAltOutlined,
        ThumbDownOutlined,
}from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



export default function ListItem( { item, index } ) {
        const [isHovered, setIsHovered] = useState(false)
        const [movie, setMovie ] = useState({})


        useEffect(() => {
                try {
                        const getMovie = async () => {
                                const res = await axios.get("/movies/find/" + item, 

                                        {
                                                headers: {
                                                        token: 
                                                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjIwN2MxMDM1ZGJlMzdlYjQxNGEzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzkzMzU5OCwiZXhwIjoxNjM0MzY1NTk4fQ.YYHEqnKPo5fTdfTqLZZj6H3ioBjDxuT64AlULcRHGiY" 
                                                }
                                        }
                                
                                )

                                setMovie(res.data)
                        }

                        getMovie()
                } catch (err) {
                        console.log(err)
                }
        }, [item])


        return (
                <Link to={{pathname: "/watch", movie: movie}}>

                        <div 
                                className="listItem"
                                onMouseEnter = { () => setIsHovered(true)}
                                onMouseLeave = { () => setIsHovered(false)}

                                style = {
                                        {
                                                        left: isHovered &&
                                                        index * 225 - 50 + index * 2.5
                                                        /* 
                                                                listItem width = 225 
                                                                move to left: 50
                                                                margin/2 = 5px / 2 = 2.5
                                        */
                                        }
                                }
                        >
                                <img
                                        src= {movie.img}
                                        alt=""
                                />

                                {
                                        isHovered && (
                                                        <>
                                                                <video 
                                                                        src={movie.trailer} 
                                                                        autoPlay={true}
                                                                        loop
                                                                />

                                                                <div className="itemInfo">
                                                                        <div className="icons">
                                                                                <PlayArrow className="icon" />
                                                                                <Add className="icon" />
                                                                                <ThumbUpAltOutlined className="icon" />
                                                                                <ThumbDownOutlined className="icon" />
                                                                        </div>

                                                                        <div className="itemInfoTop">
                                                                                <span> {movie.duration} </span>
                                                                                <span className="limit">+{movie.limit} </span>
                                                                                <span>{ movie.year}</span>
                                                                        </div>

                                                                        <div className="desc"> {movie.desc} </div>
                                                                
                                                                        <div className="genre"> {movie.genre} </div>
                                                                </div>
                                                        </>
                                        )
                                }
                        </div>
                </Link>
        )
}
