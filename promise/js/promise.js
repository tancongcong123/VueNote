const STATE_DEFAULT = 'pending';
const STATE_OK = 'fulfilled';
const STATE_FAILED = 'rejected';
class Promise{
    constructor(exector){
        this.PromiseState = STATE_DEFAULT;
        this.PromiseResult = null;
        const self = this;
        // promise回调方法集合 promise可以设置多个then方法 会在任务结束时依次调用
        this.callbacks = [];
    
        function resolve(data){
            if(self.PromiseState!==STATE_DEFAULT) return;
            // 1 修改对象的状态
            self.PromiseState = STATE_OK;
            // 2 设置对象的结果值
            self.PromiseResult = data;
            // 处理异步任务时候在此处调用then方法实现结果回调
            setTimeout(()=>{
                self.callbacks.forEach(item=>{
                    item.onResolved()
                })
            })
        }
    
        function reject(data){
            if(self.PromiseState!==STATE_DEFAULT) return;
            // 1 修改对象的状态
            self.PromiseState = STATE_FAILED;
            // 2 设置对象的结果值
            self.PromiseResult = data;
            setTimeout(()=>{
                self.callbacks.forEach(item=>{
                    item.onRejected();
                })
            })
        }
    
        try{
            // 同步调用【执行器函数】
            exector(resolve, reject);
        }catch(e){
            reject(e);
        }
    }

    then(onResolved, onRejected){
        const self = this;
        if(typeof onResolved !== 'function'){
            onResolved = val => val;
        }
        // 实现then方法可以不传onResolved
        if(typeof onRejected !== 'function'){
            onRejected = reason=>{
                throw reason
            }
        }
        // then方法的返回对象是一个promise
        return new Promise((resolve, reject) => {
    
            // 封装函数
            function callback(type){
                let reslut = type(self.PromiseResult);
                if(reslut instanceof Promise){
                    reslut.then(v=>{
                        resolve(v)
                    }, r=>{
                        reject(r)
                    })
                }else {
                    // 结果对象状态为【成功】
                    resolve(reslut)
                }
            }
    
            // 同步任务处理
            if(this.PromiseState === STATE_OK){
                // setTimeOut(()=>{})保证此处代码加入队列，在同步代码执行之后才会执行
                setTimeout(()=>{callback(onResolved)})
            }
            if(this.PromiseState === STATE_FAILED){
                setTimeout(()=>{callback(onRejected)})
            }
            // 异步任务处理
            if(this.PromiseState === STATE_DEFAULT){
                // console.log('异步执行then');
                // 保存回调函数到promise中 等待异步任务结束时候调用
                this.callbacks.push({
                    onResolved: ()=>{
                        try{
                            callback(onResolved)
                        }catch(e){
                            reject(e)
                        }
                    }, 
                    onRejected: ()=>{
                        try{
                            callback(onRejected)
                        }catch(e){
                            reject(e)
                        }
                    }
                })
            }
        })
    }

    catch(onRejected){
        return this.then(undefined, onRejected);
    }
    
    static resolve(val){
        if(val instanceof Promise){
            return val
        }else {
            // 结果对象状态为【成功】
            return new Promise((resolve, reject)=>{
                resolve(val)
            })
        }
    }
    
    static reject(error){
        return new Promise((resolve, reject)=>{
            if(error instanceof Promise){
                error.then(val=>{ reject(val) },
                    err=>{ reject(err) })
            }else {
                // 结果对象状态为【失败】
                reject(error)
            }
        })
    }
    
    static all(promises){
        return new Promise((resolve, reject)=>{
            let res = [];
            let count = 0;
            console.log(res.length+"//");
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    count++
                    // res.push(v); // 存在结果顺序错乱问题
                    res[i] = v 
                    console.log(count+"//"+promises.length+"//"+res);
                    if(count === promises.length){
                        resolve(res)
                    }
                }, r=>{
                    reject(r)
                })
            }
        })
    }
    
    static race(promises){
        return new Promise((resolve, reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    resolve(v)
                }, r=>{
                    reject(r)
                })
            }
        })
    }
}