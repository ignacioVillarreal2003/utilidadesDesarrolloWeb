import express from 'express'
import cardRouter from './routes/cards'


const app = express()
app.use(express.json()) //middleware

const PORT = 3000

app.get('/test', (req, res) => {    
    console.log("hello world");
    res.send('V 1.1')
})

app.post('/test', (req, res) => {
    console.log("Hello world - POST request");
    // Puedes acceder a los datos del cuerpo usando req.body
    res.json({ message: 'POST request received', data: req.body });
});

app.put('/test', (req, res) => {
    console.log("Hello world - PUT request");
    // Puedes acceder a los datos del cuerpo usando req.body
    res.json({ message: 'PUT request received', data: req.body });
});

app.delete('/test/:id', (req, res) => {
    console.log("Hello world - DELETE request");
    // Puedes acceder a los datos del phat usando req.params
    res.send('DELETE request received');
});

app.use('/api/cards', cardRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
