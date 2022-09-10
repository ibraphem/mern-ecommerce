import express from "express"
import data from "./mock/data.js"

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/product/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug)
    if(product){
        res.send(product)
    }else {
        res.status(404).send({message: "Product not found"})
    }
    
})

app.get('/api/product/:_id', (req, res) => {
    const product = data.products.find(x => x._id === Number(req.params._id))
    // console.log('product', req.params._id);
    if(product){
        res.send(product)
    }else {
        res.status(404).send({message: "Product not found"})
    }
    
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`serve at http:localhost:${port}`);
})