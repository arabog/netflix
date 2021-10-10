const jwt = require("jsonwebtoken")


function verify(req, res, next) {
          const authHeader = req.headers.token

          if(authHeader) {
                    const token = authHeader.split(" ")[1]


                    jwt.verify( 
                              token, 
                              
                              process.env.SECRET_KEY, 
                              
                              // userAuth is coming from accesstoken in auth.js
                              (err, userAuth) => {
                                        if(err) res.status(403).json("Token is not valid!")

                                        req.user = userAuth

                                        next()
                              }          
                    )
          }else {
                    return res.status(401).json("You are not authenticated")
          }
}


module.exports = verify