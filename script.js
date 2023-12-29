const mass = []

for (let i = 0; i = Infinity; i++){
    const command = prompt('Введите команду')
    command == command ? mass.push(command) : 0
    for (const key in mass) {
        mass[key] == 'del ' + [key] ? mass.splice(key, 1) : 0
    }
    if (command == 'stop'){    
        break
    }

}

console.log(mass)
