export function isTriangle(a: number, b: number, c: number): boolean {
    if (a + b > c && b + c > a && a + c > b) {
        return true
    }
    else {
        return false
    }
}