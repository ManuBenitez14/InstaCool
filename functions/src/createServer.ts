import * as express from 'express'
import * as admin from 'firebase-admin'


const db = admin.firestore()
const auth = admin.auth()
export default () =>{

    const app = express()

    app.use( async (req, res, next) => {
        try {
            const token = req.headers.authorization
            const { uid, email} = await auth.verifyIdToken(token)
            const snap = await db.collection('users').doc(uid).get()
            const user = snap.data()
                
            Object.assign(req, {
            user: {
                ...user,
                uid,
                email,
            }
            })
            next()
        } catch (e) {
            res.status(403).send('Error al autorizar')
            
        }
    })
    
    app.get('/posts', (req, res) => {
        res.send('Hola mundo!')
    })
    return app
}