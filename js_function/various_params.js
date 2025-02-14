function evenSizedString(str) {
    const size = str.length;
    // return size;
    if (size % 2 === 0) {
        console.log('Even');
        return true;
    } else {
        console.log('odd');
        return false;
    }
}
console.log(evenSizedString('Dhaka'));

