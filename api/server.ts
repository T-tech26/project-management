import "dotenv/config";
import app from "./app";

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});