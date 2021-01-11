const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// 통신 요청을 HTTP로 
app.use(bodyParser.json());

// content-type 인코딩 : application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 루트 라우팅 테스트
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// 라우터 추가
require("./app/routes/testPost.routes")(app);


// 포트 설정
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`서버실행 ${PORT}.`);
});

const db = require("./app/models");   // 모델 읽기
db.sequelize.sync();                  // 테이블 없을경우 생성
