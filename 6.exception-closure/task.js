function parseCount(parseString) {
    let result = Number.parseFloat(parseString);
    if ( isNaN(result)) {
        throw new Error("Невалидное значение")
    }
    return result;
}

function validateCount(parseString) {
    let result;
    try {
        result = parseCount(parseString);
    } catch (error) {
        return error;
    } 
    return result;
}

class Triangle{
    constructor(...sides){
        sides.sort( (a, b) => a - b );
        if ( sides[2] >= sides[0] + sides[1]) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.sides = sides;
	}
    get perimeter() {
        return this.sides.reduce((acc, side) => (acc + side), 0);
    }

    get area() {
        let halfP = this.perimeter / 2;
        let square = Math.sqrt (this.sides.reduce((acc, side) => acc *(halfP - side), halfP));
        return +square.toFixed(3);
    }

}

function getTriangle(...args) {
    try {
        return new Triangle(...args);
    } catch (error) {
        return Object.freeze({
            "perimeter": "Ошибка! Треугольник не существует",
            "area": "Ошибка! Треугольник не существует"
        });
    } 
}