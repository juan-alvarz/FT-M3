//Promesas => new Promise

/* 
{
  status: pending => fulfilled || rejected
  value: ?
}

cuando se determina el valor ? cuando se deja de estar pendiente => value or reason


var nuevaPromesa = new Promise ((resolve,reject) => {
    if (rodrigo trae alfajores) resolve('alfajores')
    
    else reject('se los saco un ovni')
})

*/

//el executor debe recibir dos parametros
function executor(resolve, reject) {
    resolve({name:'Rodrigo', comida:'Alfajores'})
    //var data = get 'api'
    //if (data) => resolve(data)
    //else => reject('404 not found')

}

var nuevaPromesa = new Promise(executor); //=> {status:fulfilled, value:'alfajores'}

class $Promise {
  constructor(executor) {
    this.executor = executor;
  }

  //this.promise = {status: pending}

  this.resolve(){} // mirar el estado de la promesa si status === pending ? fullfilled : nada
  this.reject(){} //mira el estado de la promesa si status === pending ? rejected : nada

  this.executor(resolve, reject)
  // this.then(succesHandler, errorHandler)
  // this.catch(null, errorHandler)
  // this.all(){}
  this.then(succesHandler, errorHandler){

  }
}


//1
//{name:'Rodrigo', comida:'Alfajores'}
nuevaPromesa.then((e) => e.name) //si .then devuelve un valor {status:'fulfilled', value:'rodrigo'}
//trajo algajores => los comemos
// fetch(url).then(r => r.json())
promiseA = fetch(url)
promiseB = promiseA.then(r => r.json())

promiseB2 = promiseA.then(null, (e) => e)


//2
nuevaPromesa.then((e) => new Promise(cb)) //pending
.then()
//rodrigo trae alf => te prometo que no voy a comer todos
// fetch(url).then(r => post(server,r))

//3
nuevaPromesa.then(e => new Error(e))
// .then
// Promise.resolve()
promiseA // {status:'rejected', reason: 'no me alcanzó la plata'}
.then(() => console.log('comemos los alfajores'))

//en caso de rechazar y teneder handleError
promiseA // {status:'rejected', reason: 'no me alcanzó la plata'}
.then(() => console.log('comemos los alfajores'), (err) => err + '(mentira)')
