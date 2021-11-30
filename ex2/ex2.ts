export class Kata {
    static highAndLow(numbers: string): string {
        let numberList: number[] = []
        let highestNumber: number = -(Number.MAX_VALUE)
        let lowestNumber: number = Number.MAX_VALUE
        numbers.split(' ').forEach(value => {
            numberList.push(parseInt(value))
        })
        if (numberList.every(v => v === numberList[0])) {
            lowestNumber = highestNumber = numberList[0]
        }
        else {
            numberList.forEach(value => {
                if (highestNumber < value) {
                    highestNumber = value
                }
                if (lowestNumber > value) {
                    lowestNumber = value
                }
            })
        }
        return `${highestNumber} ${lowestNumber}`
    }
}

console.log(Kata.highAndLow("-2994 -3032 -666 -3764 84673 67723 -847 746 874 -7237"))