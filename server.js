const express=require('express');
const app=express();
const DIST_FOLDER=process.cwd()+'/dist/angular-heroku';
const PORT=process.env.PORT||8080;
const rendertron=require('rendertron-middleware');

const BOTS=rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN=new RegExp(BOTS.join('|'),'i');

app.use(rendertron.makeMiddleware({
  proxyUrl:'https://angular-rendertron-server.herokuapp.com/render',
  userAgentPattern: BOT_UA_PATTERN
}))

//serve static assets
app.get('*',express.static(DIST_FOLDER));


//point all other urls to index.html for single page app
app.get('*',(req,res)=>{
  res.sendFile(DIST_FOLDER+'/index.html');
});


app.listen(PORT,()=>{
  console.log(`Node express server listening on http://localhost:${PORT} from ${DIST_FOLDER}`);
});