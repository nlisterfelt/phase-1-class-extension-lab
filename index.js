class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        let sum = 0
        this.array.forEach(element=>sum+=element)
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        return this.array[0]+this.array[1]>this.array[2] && this.array[0]+this.array[2]>this.array[1] && this.array[1]+this.array[2]>this.array[0]  
    }
}

class Square extends Polygon{
    get isValid(){
        return this.array[0]===this.array[1]&&this.array[1]===this.array[2]&&this.array[2]===this.array[3]
    }
    get area(){
        if(this.isValid){
            return this.array[0]**2
        } else {
            return 'not a square'
        }
    }
}

const mySquare = new Square([3,2,3,3])
console.log(mySquare.isValid)
console.log(mySquare.area)