import inquirer from "inquirer"
import chalk from "chalk"


// user Details
let cond = true
let userDetails = await inquirer.prompt([{
    name: 'name',
    type: 'input',
    message: 'wrtie your name'
}])
// if user dont enter name
if (userDetails.name == '') {
    console.log(`${chalk.red.bold(`welcom champ`)}
${chalk.blue.bold(`Your HP is ${100}
Enemy HP is ${100}
You have Killed ${0} enemy`)}`);
} else {
    console.log(`${chalk.red(`Welcom ${userDetails.name}`)}
${chalk.blue.bold(`Your HP is ${100}
Enemy HP is ${100}
You have Killed ${0}`)}`);
}

// User And Enemy HP 
let playerHP = 100
let enemyHP = 100
let portion = 3
let killedEnemy = 0

while (cond) {
    //  user alert if hp of userr is less than 40 
    if (playerHP <= 40) {
        console.log(chalk.red(`
alert (your HP is ${playerHP} drink portion to increase health)
    `));
    }

    // user choce method 
    let userChoices = await inquirer.prompt(
        {
            name: 'action',
            type: 'list',
            message: 'what would you like todo',
            choices: ['attack', 'drnik portion', "run"]
        })

    let choice = userChoices.action
    // random attcak of enemy and player
    let attackOfPlayer = Math.floor(Math.random() * 20 + 1);;
    let attackOfEnemy = Math.floor(Math.random() * 4 + 1);;

    // if user select run  to
    if (choice == "run") {
        cond = false
    }
    // if user attackx run  to
    else if (choice == "attack") {
        // user kill enemy if enemy hp <0
        if (enemyHP < 1) {
            console.log(
                chalk.blue.bold(`
Your killed the enemy
your score ${killedEnemy += 1}
`));
            //  continue or exit condition
            let continueOrExit = await inquirer.prompt(
                {
                    name: 'exitOrContinue',
                    type: 'list',
                    message: 'continue or exit',
                    choices: ['continue', 'exit',]
                })
            // user want to  continue or  exit
            if (continueOrExit.exitOrContinue == "continue") {
                enemyHP = 100
            } else {
                cond = false
            }

        } else {
            console.log(
                chalk.blue.bold(`
Your damge to enmey is ${attackOfPlayer}    
Enemy damge to you is ${attackOfEnemy}     
Your Hp ${playerHP -= attackOfEnemy}
Enemy HP ${enemyHP -= attackOfPlayer} 
`))
        }
        //  player hekth is less than 0 killed player
        if (playerHP <= 0) {
            cond = false
            console.log(chalk.red(`you have killed by the enemy`));
            console.log(chalk.blue(`
you killed ${killedEnemy} enemy 
`));
        }
    }
    //    drink portion to increase health
    else {
        if (portion <= 0) {
            console.log(chalk.red(`
 portion finished 
            `))
        } else {
            console.log(
                chalk.blue.bold(`
your HP  ${playerHP += 30}    
now you have ${portion -= 1} portion
                `))
        }
    }
}