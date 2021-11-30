function isValidIP(str) {
    var result = false;
    var iterator = str.split('.');
    if (iterator.length === 4) {
        return (iterator.every(function (ipSegment) {
            if (parseInt(ipSegment) <= 255 && parseInt(ipSegment) >= 0 && !ipSegment.startsWith('0')) {
                return true;
            }
            else {
                return false;
            }
        }));
    }
    else {
        return false;
    }
}
console.log(isValidIP('043.55.55.55'));
