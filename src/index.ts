import { AppDataSource, ensureDbExists } from "./_helpers/db"
import express from 'express'
import { userRouter } from './users/users.routes'
import errorHandler from './_middlewares/error-handler'
import * as dotevnv from "dotenv"

const app = express()
dotevnv.config();

if (!process.env.PORT) {
  console.log(`No port value specified...`);
}
const PORT = parseInt(process.env.PORT as string, 10);

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//db initilization
ensureDbExists()
  .then(() => {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database connected")
      })
      .catch(error => console.log(error))
  })

// Routes
app.use('/api/users', userRouter);

// Catch 404 errors and forward to error handler
app.use((req, res, next) => {
  next("Not Found");
});

// Global error handler (must be last!)
app.use(errorHandler);


//start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})