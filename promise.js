let myPromise=new Promise( function(resolve,reject)
{
    const a=3;
    const b=3;
    setTimeout(()=>{
        if(a==b)
        {
            resolve("The values are equal");
        }
        else
        {
            reject("The values are not equal");
        } 

    },2000)
}

)

myPromise.then(function(result){
    console.log(result);
})

myPromise.catch(function(result){
    console.log(result);
})
