const express = require('express')
const router = require('express').Router()
const db = require('../models/books')

router.get('/seed', (req, res) => {
    db.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


router.get('/', (req, res)=>{
    db.find()
    .then((book)=>{
        res.status(200).json(book)
    })
    .catch(err =>{
        console.log(err)
        res.status(400).json({message: 'Bad request books not found'})
    })
})
// or show page for a book
router.get('/:id', (req, res) =>{
    db.findById(req.params.id)
    .then(foundBook =>{
        res.status(200).json(foundBook)
    })
    .catch(err => {
        res.status(400).json({ message: 'Bad request book not found'})
    })
})

//update book route
router.put('/:id', (req, res) =>{
    db.findByIdAndUpdate(req.params.id, req.body)
    .then(updateBook =>{
        console.log(req.body)
        res.status(200).json(updateBook)
    })
    .catch(err =>{
        res.status(400).json({ message: 'something went wrong editing the book'})
    })
})

//delete a book route
router.delete('/:id', (req, res) =>{
    db.findByIdAndDelete(req.params.id)
    .then(deleteBook => {
        res.status(200).json({ message: 'Successful'})
    })
    .catch(err => {
        res.status(400).json({ message: 'an error has occurred while deleting'})
    })
})

//create route for a new book
router.post('/', (req, res) =>{
    db.create(req.body)
    .then(createdBook => {
        res.status(200).json(createdBook)
    })
    .catch(err => {
        res.status(400).json({ message: "error while creating book"})
    })
})
module.exports = router