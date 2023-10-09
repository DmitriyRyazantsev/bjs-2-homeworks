function parseCount(something) {
    const result = Number.parseFloat(something);
    if (isNaN(result)) {
        throw new Error("Невалидное значение")
    }
    return result;

}

function validateCount(something) {
    try {
        return parseCount(something);
    } catch (error) {
        return error;
    }
}


class Triangle {
    constructor (a,b,c) {
        if (a > 0 & b > 0 & c > 0 & a + b < c || b + c < a || a + c < b) {
            throw new Error ("Треугольник с такими сторонами не существует")
        }
        this.a = a
        this.b = b
        this.c = c
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area () {
        const p = this.perimeter * 0.5;
        return +Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);

    }
}

    
function getTriangle(a, b ,c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }    
    }

}
