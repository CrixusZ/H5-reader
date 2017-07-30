//const koa = require('koa')
//const app = new koa()
//const Router  = require('koa-router')
//const router = new Router()
//const render = require('koa-ejs')
//const bodyParser = require('koa-bodyparser')
//const views = require('co-views')
//
//app.use(router(app));
//
//app.get('/route_test', function *(ctx,next) {
//ctx.set('Cache-Control','no-cache');//设置http头默认不缓存
//ctx.body = 'hello koa!';
//});
////render(app, {
////	root:path.join(__dirname, './view'),
////	layout: 'template',
////viewExt: 'html',
////cache: false,
////debug: true,
////locals: locals,
////filters: filters
////});
//
////app.use(router.get('ejs_test', function(ctx,next){
////	ctx.set('Cache-Control','no-cache');//设置http头默认不缓存
////	ctx.body = 'hello koa!';
////}))
//app.use(router.get('/ejs_test', function(ctx,next){
//	ctx.set('Cache-Control','no-cache');//设置http头默认不缓存
//	ctx.body = yield render('test',{ title: 'title_test' });
//}))
//
