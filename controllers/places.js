const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    /* let places = [{
        name: 'Chipotle',
        city: 'Durham',
        state: 'NC',
        cuisines: 'Mexican Grill',
        pic: '/images/Chipotle.jpg'
      }, {
        name: 'Bar Taco',
        city: 'Chapel Hill',
        state: 'NC',
        cuisines: 'Great Food',
        pic: '/images/bartaco.jpg'
      }] */
      
    res.render('places/index', {places })
})

//Create
router.post('/', (req, res) => {
  // console.log(req.body)
  if (!req.body.pic) {
    req.body.pic = '/images/bartaco.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }

  places.push(req.body)
  res.redirect('/places')
})

//New
router.get('/new', (req, res) => {
  res.render('places/new')
})


//Show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', { place: places[id], id})
  }
})

//Create
router.post('/', (req, res) => {
  // console.log(req.body)
  if (!req.body.pic) {
    req.body.pic = '/images/bartaco.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }

  places.push(req.body)
  res.redirect('/places')
})

//Edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})



//DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})




module.exports = router

