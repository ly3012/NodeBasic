import { render } from 'ejs';
import express from 'express'
import configViewEngine from './configs/viewEngine'
const app = express()
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
    // res.send('Hello World voi hoi dan IT va Eric!')
    // res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/about', (req, res) => {
    res.send(`I'm Ly`)
})

app.get('/a', (req, res) => {
    res.sendFile(path.join(__dirname, '../src', 'index.html'));
    // res.sendFile(path.join(__dirname, '../public', 'index1.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})