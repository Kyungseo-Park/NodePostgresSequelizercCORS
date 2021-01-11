module.exports = app => {
    const testPosts = require("../controllers/testPost.controller.js");
  
    var router = require("express").Router();
  
    // 데이터생성
    router.post("/", testPosts.create);
  
    // 모든 게시글 읽기
    router.get("/", testPosts.findAll);
  
    // 공개된 데이터 조회  => is_show와 같은 원리
    router.get("/published", testPosts.findAllPublished);
  
    // ID값으로 데이터 검색
    router.get("/:id", testPosts.findOne);
  
    // ID값으로 데이터 수정
    router.put("/:id", testPosts.update);
  
    // ID값으로 데이터 삭제
    router.delete("/:id", testPosts.delete);
  
    // 모든 데이터 삭제
    router.delete("/", testPosts.deleteAll);
  
    // 라우터에 뭐 건다해야하지..
    app.use('/api/testPosts', router);
  };