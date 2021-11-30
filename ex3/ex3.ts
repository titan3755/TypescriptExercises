function isValidIP(str: string): boolean {
    let result: boolean = false
    let iterator: string[] = str.split('.')
    if (iterator.length === 4) {
        return (iterator.every(ipSegment => {
                    if (parseInt(ipSegment) <= 255 && parseInt(ipSegment) >= 0 && ipSegment === '0' ? true : !ipSegment.startsWith('0')) {
                        return true
                    }
                    else {
                        return false
                    }
                }))
    }
    else {
        return false
    }
}

console.log(isValidIP('45.3.45.45\n'))