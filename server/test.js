
const identifier = '110e7649dgrsgv-a0f2-4ac4-8393-c866d813b8d1'
const arr = identifier.split('-')
const strArr = arr.join('')
const charArr = strArr.split('')
const intArr = charArr.map((el, index) => {
    if(1* el < 10){
        el = el + 65
    }
    else {
        el = el.charCodeAt(0)
    }
    return el
})

intArr.forEach((el, index) => {
    if(el < 65 || (el > 90 && el < 97)){
        el = 0
    }
    else {
        return el;
    }
})

const finalArr = intArr.map((el) => {
        if(el != 0){
                    if(el >= 97) {
                        const newChar = String.fromCharCode(el)
                        return newChar
                    }
                }
            }
        )

    const finId = finalArr.join('')
