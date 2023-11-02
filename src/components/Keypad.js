// Code Keypad Component Here

function change(e) {
    e.preventDfault
    console.log('Entering password...')
    
}


function Keypad (){
    return (
        <div>
            <input type="password" onChange={change} />
        </div>
    )
}

export default Keypad;