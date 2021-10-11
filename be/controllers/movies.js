const Movie = require("../models/Movie")


module.exports = {
          // cr8 movie
          createMovie: async(req, res) => {
                    if(req.user.isAdmin) {
                              const newMovie = new Movie(req.body)

                              try {
                                        const savedMovie = await newMovie.save()

                                        res.status(200).json(savedMovie)
                              } catch (err) {
                                        res.status(500).json(err)
                                        console.log(err)
                              }
                    }else {
                              res.status(403).json("You are not allowed!")
                    }
          },


          // update movie
          updateMovie: async(req, res) => {
                    if(req.user.isAdmin) {
                              try {
                                        const updatedMovies = await Movie.findByIdAndUpdate(
                                                  req.params.id,

                                                  {$set: req.body},

                                                  {new: true}
                                        )

                                        res.status(200).json(updatedMovies)

                              } catch (err) {
                                        res.status(500).json(err)
                                        console.log(err)
                              }
                    }else {
                              res.status(403).json("You are not allowed")
                    }
          },


          // delete movie
          delMovie: async (req, res) => {
                    if(req.user.isAdmin) {
                              try {
                                        await Movie.findByIdAndDelete(req.params.id)

                                        res.status(200).json("The movie has been deleted....")

                              } catch (err) {
                                        res.status(500).json(err)
                                        console.log(err)
                              }
                    }else {
                              res.status(403).json("You are not allowed!")
                    }
          },


          // get a movie
          getAMovie: async(req, res) => {
                    try {
                              const movie = await Movie.findById(req.params.id)

                              res.status(200).json(movie)         
                    } catch (err) {
                              res.status(500).json(err)
                              console.log(err)
                    }          
          },


          // get random movie
          getRandomMovie: async(req, res) => {
                    const type = req.query.type
                    let movie


                    try {
                              if(type === "series") {
                                        movie = await Movie.aggregate(
                                                  [
                                                            {$match: {isSeries: true}},

                                                            {$sample: {size: 1}}
                                                  ]
                                        )
                              }else {
                                        movie = await Movie.aggregate(
                                                  [
                                                            {$match: {isSeries: false}},
                                                            {$sample: {size: 1}}
                                                  ]
                                        )
                              }


                    } catch (err) {
                              
                    }
          },


          // get all movies
          getAllMovies: async(req, res) => {
                    if(req.user.isAdmin) {
                              try {
                                        const movies = await Movie.find()

                                        res.status(200).json(movies.reverse())

                              } catch (err) {
                                        res.status(500).json(err)
                              }                    
                    }else {
                              res.status(403).json("You are not allowed!")
                    }
          }
}