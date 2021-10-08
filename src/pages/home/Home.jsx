import "./Home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featrued/Featured"
import List from "../../components/list/List"


const Home = () => {


          return (
                    <div className="home">
                              <Navbar />

                              <Featured />

                              <List />
                              <List />
                              
                    </div>
          )
}

export default Home
