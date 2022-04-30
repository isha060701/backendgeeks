import * as koa from "koa";
import * as dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config();

const app = new koa();

const pool = new Pool({
    connectionString: process.env.DATABASE,
    ssl:{
        rejectUnauthorized:false
    }
})

app.use(async ctx => {
    await pool.connect();
    const output = pool.query("select * from hotels_csv");
    ctx.response.body = output;
})

app.listen(process.env.PORT || 3000, () => console.log("koadbsql is running"));