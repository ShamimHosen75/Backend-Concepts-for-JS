const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("Success!");
  }, 1000);
})