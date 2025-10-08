class Frame{
    constructor(rolls){
        this.rolls=rolls;
        
    }
   score(){
     return this.rolls=rolls[0]+(this.rolls=rolls[1]);
    }

 isSpare(){
        return this.rolls.length ===2 && this.rolls[0]+this.rolls[1] ===10;
    }

    isStrike(){
        return this.rolls[0]===10;
    }
}
//SrrikeFrame child class of frame
class StrikeFrame extends Frame{
    constructor(rolls, nextTwoRolls){
        super(rolls);
        this.nextTwoRolls=nextTwoRolls;
    }
    score(){
        return 10 +(this.nextTwoRolls[0]|| 0)+(this.nextTwoRolls[1]||0);
    }
}

//spare frame child class of frame
class SpareFrame extends Frame{
    constructor(rolls, nextRoll){
        super(rolls);
        this.nextRoll=nextRoll;
        
    }
    score(){
        return 10+(this.nextRoll||0);
    }    
    
}






// test classes frames//

const strikeTry= new StrikeFrame([10], [7, 0]);
console.log( strikeTry.score());

const spareTry= new SpareFrame([5, 5], 5);
console.log( spareTry.score());










