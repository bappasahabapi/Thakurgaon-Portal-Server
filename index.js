const express =require('express')
const app = express();
const cors =require('cors')

const port = process.env.port || 5000

app.use(cors());


const catagories =require('./database/categories.json');
const news =require('./database/news.json');


app.get('/',(req, res)=>{
    res.send('Server is Running ... ')
});

app.get('/news-categories',(req,res)=>{
    res.send(catagories)
});

app.get('/news',(req,res)=>{
    res.send(news)
});


app.get('/news/:id',(req,res)=>{
    // console.log(req.params)
    // console.log(req.params.id)
    const id =req.params.id;
    const selectedNews =news.find(newsId=>newsId._id==id)
    res.send(selectedNews);
});

app.get('/category/:id',(req, res)=>{
    const id =req.params.id;

    if(id === '08' ){
        res.send(news)
    }
    else{
        const category_news =news.filter(catId=>catId.category_id===id);
         res.send(category_news);
    }
    

})










app.listen(port, () => {
    console.log(`Server is  listening on port ${port}`)
  })