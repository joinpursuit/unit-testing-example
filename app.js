const express = require('express')
const bodyParser = require('body-parser')

const { isRequiredsNeeded, } = require('./utils')

const app = express();

app.use(bodyParser.json())

app.post('/buyer', (req, res) => {
    if (isRequiredsNeeded(req.body)) {
        res.status(400)
        res.send({
            "msg": "some required values are missing",
        })
    }

    res.status(204)
    res.send()
})

module.exports = {
    app,
};
