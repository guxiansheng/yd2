import Koa from 'koa';
import router from 'koa-simple-router';
import controllerInit from "./controller/initController";
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import Config from './config/config';
const app = new Koa();

// 初始化路由
controllerInit.init(app, router);
// 渲染模板
app.context.render = co.wrap(render({
  root: Config.get('viewDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html'
}));

// 静态文件
app.use(serve(Config.get('staticDir')));
// 监听端口
app.listen(Config.get('port'));

export default app