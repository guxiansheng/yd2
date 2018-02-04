import rp from 'request-promise';

class indexModle{
    constructor(ctx) {
        console.log(ctx)
        this.ctx = ctx;
    }
    updateNum() {
        const options = {
            uri : "http://localhost/thumb/thumb.php",
            method: "GET"
        }
        return new Promise((resolve, reject)=>{
            rp(options).then(function(result) {
                console.log(result)
                const info = result;
                if (info) {
                    resolve({data: info.result});
                } else {
                    reject({});
                }
            })
        })
    }
}
export default indexModle;