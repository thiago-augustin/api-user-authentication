export default {
  port: process.env.PORT || 8080,
  DB: {
    URI:
      process.env.MONGO_URI ||
      "mongodb+srv://root:123@node.uxznkns.mongodb.net/node"
  },
  secretKey:
    process.env.SECRET_KEY || "senhasecreta123",
};
