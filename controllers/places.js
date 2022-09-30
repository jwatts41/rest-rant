const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
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
      }]
      
    res.render('places/index', {places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



module.exports = router

