import express from 'express'
import UserModel from '../Model/UserModel.js'
const router = express.Router()


// POST Requests ------------------

router.post(
    '/upload/user',
    async(req,res)=>{
        const data = {
            name: req.body.name,
            email: req.body.email,
            lists: req.body.lists
        }
        const user = new UserModel(data);
        try {
            await user.save();
            res.send(`Uploaded data...`)
        } catch (error) {
            console.log(error)
        }
    }
)

router.post(
    '/upload/list/:id',
    async (req, res) => {
        
    }
)

router.post(
    '/upload/card/:id',
    async (req, res) => {

    }
)

router.post(
    '/upload/bg/:id',
    async (req, res) => {

    }
)



// GET Requests ------------------


router.get(
    '/users',
    async (req, res) => {
        UserModel.find({}, (error, result) => {
            if (error) res.send(error)
            else res.send(result)
        })
    }
)


router.get(
    '/users/:email',
    async (req, res) => {

        const email = req.params.email;

        UserModel.find({email}, (error, result) => {
            if (!error) res.send(result[0])
        })
    }
)





export default router