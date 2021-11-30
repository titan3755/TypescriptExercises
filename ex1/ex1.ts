export function solution(roman: string): number {
    let romanMap: {romanChar: string, value: number}[] = [
        {romanChar: 'I', value: 1},
        {romanChar: 'V', value: 5},
        {romanChar: 'X', value: 10},
        {romanChar: 'L', value: 50},
        {romanChar: 'C', value: 100},
        {romanChar: 'D', value: 500},
        {romanChar: 'M', value: 1000}
    ]
    let translated: number = 0
    roman.split('').forEach((value, index) => {
        for (let x = 0; x < romanMap.length; x++) {
            if (roman.split('')[index] === 'I' && roman.split('')[index + 1] === 'V' && roman.includes('IV')) {
                for (let x of roman.matchAll(RegExp('IV', 'g'))) {
                    translated += 4
                }
            }
            else if (romanMap[x].romanChar === value) {
                translated += romanMap[x].value
            }
        }
    })
    return translated
}

console.log(solution('IV'))