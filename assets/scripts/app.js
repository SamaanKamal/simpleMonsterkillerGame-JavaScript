const input = prompt("Enter Life for both ou and monster" , "100")

let playerLife =parseInt(input)
if (isNaN(playerLife) || playerLife <= 0)
{
    playerLife = 100
}
const attack = 10
const StrongAttackValue = 15 
const MonsterAttackValue = 12
let monsterHealth = playerLife
let playerHealth = playerLife
const healValue = 5
let BonusLife = true
let playerAttackArray= []
let monsterAttackArray= []
let healArray =[]
adjustHealthBars(playerLife)

function Attack(mode)
{
    let Damage = mode ==='Attack'? attack : StrongAttackValue
    // if(mode=='Attack')
    // {
    //     Damage=attack
    // }
    // else if(mode=='Strong Attack')
    // {
    //     Damage=StrongAttackValue
    // }
    let damage = dealMonsterDamage(Damage)
    monsterHealth = monsterHealth - damage
    playerAttackArray.push(damage)
    let monsterDamage =dealPlayerDamage(MonsterAttackValue)
    playerHealth = playerHealth - monsterDamage
    monsterAttackArray.push(monsterDamage)

    if(playerHealth <= 0 && BonusLife)
    {
        BonusLife = false
        removeBonusLife()
        setPlayerHealth(monsterHealth)
        playerHealth = monsterHealth
    }
    if(monsterHealth <= 0 && playerHealth > 0)
    {
        alert("You have Won!")
    }
    else if(playerHealth <=0 && monsterHealth > 0)
    {
        alert("You have Lost!")
    }
    else if(playerHealth <=0 && monsterHealth <= 0)
    {
        alert("it is a draw!")
    }
    
    if(playerHealth <= 0 || monsterHealth <= 0)
    {
        reset()
    }
}

function normalAttack()
{
    Attack('Attack')
}

function StrongAttack()
{
    Attack('Strong Attack')
}

function Heal()
{
    let heal
    if(playerHealth >= playerLife - healValue )
    {
        alert("Only Can heal to your max health")
        heal = playerLife - playerHealth
    }
    else
    {
        heal = healValue
    }
    increasePlayerHealth(heal)
    playerHealth = playerHealth + heal
    healArray.push(heal)
}

function Logs()
{
    for (let index = 0; index < playerAttackArray.length; index++) {
        console.log( "the player attacked with damage " + playerAttackArray[index]); 
        console.log( "the monster attacked with damage " + monsterAttackArray[index]);  
    }

    for (let index = 0; index < healArray.length; index++) {
        console.log( "the player healed with " + array[index]);
        
    }
}

function reset()
{
    monsterHealth = playerLife
    playerHealth = playerLife
    resetGame(playerLife)
}
attackBtn.addEventListener('click',normalAttack)
strongAttackBtn.addEventListener('click',StrongAttack)
healBtn.addEventListener('click',Heal)
logBtn.addEventListener('click',Logs)