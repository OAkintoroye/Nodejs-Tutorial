//async  code and promises
//below is async code. It takes time before executing


const fetchData = ()=>{
    const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Finished!!');

    },1500);
});
    return promise;
};
setTimeout(() => {
    console.log('Timer is done');
    fetchData()
        .then(text =>{
            console.log(text);
            return fetchData();
        })
        .then(text2=>{
            console.log(text2);
        });
},2000);



