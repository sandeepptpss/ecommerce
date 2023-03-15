const express=require('express');

const app= express();


app.get('/',(req, res)=>{
    res.send('commerce app is Working')
})

app.listen('8000');