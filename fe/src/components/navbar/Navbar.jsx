import "./navbar.scss"

import { 
          ArrowDropDown, 
          Notifications, 
          Search, 
          ArrowDropUp 
} from "@material-ui/icons"
import { useState } from "react"
import { Link } from "react-router-dom"



const Navbar = () => {
          const [isScrolled, setIsScrolled] =  useState(false)

          window.onscroll = () => {
                    setIsScrolled(window.pageYOffset === 0 ? false : true )

                    return () => (window.onscroll = null)
          }


          return (
                    <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
                              <div className="container">

                                        <div className="left">
                                                  <img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
					/>

                                                  <Link className="link" to="/">
                                                            <span> Home </span>
                                                  </Link>

                                                  <Link className="link" to="/series">
                                                            <span> Series </span>
                                                  </Link>

                                                  <Link className="link" to="/movies">
                                                            <span> Movies </span>
                                                  </Link>

                                                  <Link className="link" to="/new">
                                                            <span> New and Popular </span>
                                                  </Link>

                                                  <Link className="link" to="/list">
                                                            <span> My List </span>
                                                  </Link>
                                                  
                                        </div>


                                        <div className="right">
                                                  <Search className="icon" />

                                                  <Link className="link" to="/kid">
                                                            <span> KID </span>
                                                  </Link>

                                                  <Notifications className="icon" />

                                                  <img
						src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
					/>

                                                  <div className="profile">
                                                            <ArrowDropDown className="icon" />

                                                            <div className="options">
                                                                      <ArrowDropUp className="icon up" />

                                                                      <Link className="link" to="/profile">
                                                                                <span> Your profile </span>
                                                                      </Link>

                                                                      <Link className="link" to="/repos">
                                                                                <span> Your repositories </span>
                                                                      </Link>
                                                                      
                                                                      <Link className="link" to="/code">
                                                                                <span> Your codespaces </span>
                                                                      </Link>
                                                                      
                                                                      <Link className="link" to="/proj">
                                                                                <span> Your projects </span>
                                                                      </Link>
                                                                      
                                                                      <Link className="link" to="/stars">
                                                                                <span> Your stars </span>
                                                                      </Link>
                                                                      
                                                                      <Link className="link" to="/gists">
                                                                                <span> Your gists </span>
                                                                      </Link>

                                                                      <hr />
                                                                      <Link className="link" to="/settings">
                                                                                <span> Settings </span>
                                                                      </Link>

                                                                      <hr />
                                                                      <Link className="link" to="/logout">
                                                                                <span> Logout </span>
                                                                      </Link>
                                                            </div>
                                                  </div>
                                        </div>

                              </div>
                    </div>
          )
}


export default Navbar