// Load the http module to create an http server.
const app=require('./app')
const port = process.env.PORT;
const path=require('path')


//Serve Static assets in production
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});