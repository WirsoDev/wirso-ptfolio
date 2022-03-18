function logout(){
    const options = {
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch('/logout', options)
    document.location.reload(true)
}