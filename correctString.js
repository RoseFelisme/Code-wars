// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

const correct = (string) => string.split('').map(i => {
    if (i == '0'){
    return 'O'
    }else if (i == '5'){
    return 'S'
    }else if (i == '1'){
    return 'I'}
    else {return i}
    }).join('');
    