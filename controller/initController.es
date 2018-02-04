import index from "./indexController";
const controllerInit = {
    init(app, router){
        app.use(router(_ => {
            _.get('/index/index', index.index())
            _.get('/index/updata', index.updata())
        }))
    }
}

export default controllerInit