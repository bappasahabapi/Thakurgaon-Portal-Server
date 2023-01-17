const express =require('express')
const app = express()
const port = process.env.port || 9000


const catagories =require('./database/catagories.json')

app.get('/',(req, res)=>{
    res.send('Server is Running ... ')
})

app.listen(port, () => {
    console.log(`Server is  listening on port ${port}`)
  })