import indexm from "../models/indexModle" 
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index.html',{
                title: "点赞+"
            })
        }
    },
    updata() {
        return async(ctx, next) => {
            const indexMod = new indexm();
            ctx.body = await indexMod.updateNum();
        }
    }
}
export default indexController