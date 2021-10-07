import "./Home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featrued/Featured"

const Home = () => {


          return (
                    <div className="home">
                              <Navbar />

                              {/* <div className="container"> */}
                                        <Featured />
                              {/* </div> */}
                    </div>
          )
}

export default Home
