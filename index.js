require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const SERVER_PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/jqJs', (req, res) =>
{
    res.sendFile(path.join(__dirname, './js/jquery.min.js'));
})

app.get('/pJs', (req, res) =>
{
    res.sendFile(path.join(__dirname, './js/parallax.min.js'));
})

app.get('/allCss', (req, res) =>
{
    res.sendFile(path.join(__dirname, './css/all.min.css'));
})

app.get('/bootstrapCss', (req, res) =>
{
    res.sendFile(path.join(__dirname, './css/bootstrap.min.css'));
})

app.get('/template', (req, res) =>
{
    res.sendFile(path.join(__dirname, './css/templatemo-style.css'));
})


app.listen(SERVER_PORT, () =>
{
    console.log(`server running on port ${SERVER_PORT}`);
});