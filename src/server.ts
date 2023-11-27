import express from 'express';
import UserRoute from './routes/UserRoute';
import LanceRoute from './routes/LanceRoute';
import LeilaoRoute from './routes/LeilaoRoute';

const app = express();
const serverPort = 3000; //Se a 3000 n for, muda pra 8080 ou 5050, as duas tavam bugando na prova.

app.listen(serverPort, () => console.log('Server na porta: ' + serverPort));

app.use("/user", UserRoute)
app.use("/lance", LanceRoute)
app.use("/leilao", LeilaoRoute)