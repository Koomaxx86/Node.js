const express = require('express');
const morgan = require('morgan');       // 임포트
const app = express();
const port = 3000;

// 'dev' 포맷을 사용하여 로그 생성
app.use(morgan('dev'));                 // 등록

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});