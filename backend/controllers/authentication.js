const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

  
  
router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: { 
            email: 'amna@google.com',        
        },
    })

    if (false || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        res.json({ user })
    }
}),


  


module.exports = router
