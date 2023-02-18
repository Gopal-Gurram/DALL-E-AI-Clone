"use strict";

var _express = _interopRequireDefault(require("express"));
var dotenv = _interopRequireWildcard(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _connect = _interopRequireDefault(require("./mongodb/connect.js"));
var _postRoutes = _interopRequireDefault(require("./routes/postRoutes.js"));
var _dalleRoutes = _interopRequireDefault(require("./routes/dalleRoutes.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
dotenv.config();
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json({
  limit: "50mb"
}));
app.use("/api/v1/post", _postRoutes.default);
app.use("/api/v1/dalle", _dalleRoutes.default);
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL-E!"
  });
});
const startServer = async () => {
  try {
    (0, _connect.default)(process.env.MONGODB_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.log(error);
  }
};
startServer();