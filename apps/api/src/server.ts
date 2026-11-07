import app from "./app.js";

const port = Number(process.env.PORT) || 3000;

app.listen(port, (error) => {
  if (error) {
    console.error(`Error listening on port ${port}:`, error);
  } else {
    console.log(`Listening on port ${port}`);
  }
});