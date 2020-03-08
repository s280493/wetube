const express = require('express') // express라는 이름의 폴더를 node_modules에서 가져온다
const app = express() // 가져온 express를 실행하여 express application을 만든다
const PORT = 3000

app.get('/', (req, res) => res.send('Hello APP!'))

const handleListening = () => {
  console.log(`app listening on port ${PORT}!`)
}

app.listen(PORT, handleListening) // 우리가 만든 app에 