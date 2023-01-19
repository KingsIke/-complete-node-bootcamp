import app from "./app"

const port = process.env.PORT || 4010
app.listen(port, () => {
    console.log(`Server running on Port:${port}`)
})
