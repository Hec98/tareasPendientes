require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')
console.clear()

const main = async() => {
  let opt = '';

  do {
    // opt = await inquirerMenu();
    // console.log({opt})
    
    const tarea = new Tarea('Comprar comida');
    // console.log(tarea)
    const tareas = new Tareas();
    tareas._listado[tarea.id] = tarea;
    console.log(tareas)

    await pausa();
  } while(opt !== '0');
}

main();
