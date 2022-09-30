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

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', { place: places[id]})
  }
})


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



module.exports = router

