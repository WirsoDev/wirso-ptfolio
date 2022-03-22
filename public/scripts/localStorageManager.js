const setLocalStorage =  (key, value, expTime) =>{
    const now = new Date()
    const item = {
        value: value,
        expires: now.getTime() + expTime
    }
    console.log(now.getTime())
    console.log(now.getTime() + expTime)
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

function sendNewView(){
    const options = {
        method: 'post',
        body:JSON.stringify({msg:true}),
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch('/', options)
}

const main = () =>{
    const value = getLocalStorage('isUser')
    if(!value){
        console.log('Add new view -- set localstorage')
        setLocalStorage('isUser', true, 86400000) // 86400000 = 1 day
        sendNewView()
    }
    console.log('Not new user')
    return null
}

main()

