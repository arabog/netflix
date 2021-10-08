import "./List.scss"
import ListItem from "../listItem/ListItem"
import { 
          ArrowBackIosOutlined,
          ArrowForwardIosOutlined
} from "@material-ui/icons"
import { useRef, useState } from "react"


export default function List() {
          const [ isMoved, setIsMoved ] = useState(false)
          const [ slideNumber, setSlideNumber ] = useState(0)

          const listRef = useRef()


          const handleClick = (arrow) => {
                    setIsMoved(true)

                    let distance = listRef.current.getBoundingClientRect().x - 50
                    

                    if(arrow === "left"  && slideNumber > 0 ) {
                              setSlideNumber(slideNumber - 1)

                              listRef.current.style.transform = `translateX(${230 + distance}px)`
                    }

                    if(arrow === "right"  && slideNumber < 5) {
                              setSlideNumber(slideNumber + 1)

                              listRef.current.style.transform = `translateX(${-230 + distance}px)`
                    }

                    console.log(distance )
          } 


          return (
                    <div className="list">
                              <span className="listTitle"> Continue to watch</span>
                              
                              <div className="wrapper">
                                        <ArrowBackIosOutlined 
                                                  className="sliderArrow left"
                                                  onClick = { () => handleClick("left")}
                                                  style = { { display: !isMoved && "none"}}
                                        />

                                                  <div 
                                                            className="container"
                                                            ref={listRef}
                                                  >
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                            <ListItem />
                                                  </div>

                                        <ArrowForwardIosOutlined 
                                                  className="sliderArrow right"
                                                  onClick = { () => handleClick("right")}
                                        />
                              </div>

                    </div>
          )
}
