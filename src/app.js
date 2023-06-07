const Service = require('./service/service.js');

const service = new Service();

const message = service.helloService();
console.log(message); // Output: "Hello from Service!"
