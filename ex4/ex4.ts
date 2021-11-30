export function findNb(m: number): number {
    return (- 1 + Math.sqrt(Math.pow(1, 2) - 4 * 1 * -(Math.sqrt(m) * 2))) / (2 * 1) % 1 === 0 ? (- 1 + Math.sqrt(Math.pow(1, 2) - 4 * 1 * -(Math.sqrt(m) * 2))) / (2 * 1) : -1
}

console.log(findNb(1071225))