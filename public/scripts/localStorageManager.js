const setLocalStorage =  (key, value, expTime) =>{
    const now = new Date()
    const item = {
        value: value,
        expires: now.getTime() + expTime
    }
    localStorage.setItem(key, JSON.stringify(item))
}

const getLocalStorage =  (key)=>{
    const storadValue = localStorage.getItem(key)
    if(!storadValue){
        return false
    }
    const item = JSON.parse(storadValue)
    const now = new Date()
    if(now.getTime() > item.expires){
        localStorage.removeItem(key)
        return false
    }
    return item.value
}

const main = () =>{
    const value = getLocalStorage('isUser')
    if(!value){
        setLocalStorage('isUser', true, 86400)
        console.log('LocalStorage upadated:' + localStorage.getItem('isUser'))
    }
}
main()

