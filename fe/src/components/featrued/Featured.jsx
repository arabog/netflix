import "./featured.scss"
import { PlayArrow, InfoOutlined } from "@material-ui/icons"


export default function Featured() {


          return (
                    <div className= "featured">

                              <div className="category">
                                        <select name="genre" id="genre">
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

                              <img 
                                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                        alt="" 
                              />

                              <div className="info">
                                        <img 
                                                  src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" 
                                                  alt="" 
                                        />

                                        <span className="desc">
                                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                  Consequuntur sed atque saepe quaerat nemo magni quia 
                                                  suscipit corrupti quo pariatur?
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
