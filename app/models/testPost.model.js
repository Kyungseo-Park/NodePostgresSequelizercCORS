module.exports = (sequelize, Sequelize) => {
    const TestPost = sequelize.define("testPost", {
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return TestPost;
  };