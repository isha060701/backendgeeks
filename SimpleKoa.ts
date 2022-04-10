import * as koa from "koa";
import * as router from "koa-router"

const app = new koa();
const route = new router();

route.get("/a",ctx => {
    ctx.response.body="url a is invoked";
})
app.use(route.routes());
app.listen(process.env.PORT || 3005, () => console.log("koa server is running in 3005"));