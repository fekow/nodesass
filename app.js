const express = require('express');

const app = express();
const pug = require('pug');
const sassMiddleware = require('node-sass-middleware');

const pugTemplatePath = __dirname + '/views/index.pug';
const compiledTemplate = pug.compileFile(pugTemplatePath, { pretty: true });

app.use(
	sassMiddleware({
		src: __dirname + '/public', // where the sass files are
		dest: __dirname + '/public', // where css should go
		// debug: true,
		// force: true,
	}),
);
app.get('/', (req,res)=> {
  const locals = {
    
  }
  const html = compiledTemplate(locals);
  return res.send(html);
})

app.listen('1337', (req,res) => {
  console.log('running on port 1337')
})