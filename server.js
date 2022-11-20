const express = require('express')
const path = require('path')
const multer  = require('multer')
const {mergePDFs}  = require('./merge')
const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000
app.use('/static', express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"Frontend/index.html"))
})

app.post('/merge', upload.array('pdf', 2), async (req, res, next) =>{
  console.log(req.files)
try {
  const d  = await mergePDFs(path.join(__dirname , req.files[0].path) , path.join(__dirname , req.files[1].path))

  // res.send({data:req.files})
  res.redirect(`http://localhost:3000/static/${d}merged.pdf`)
} catch (error) {
  console.log(error)
}

  
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})