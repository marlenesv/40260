console.log("inicio")

const boton = document.getElementById("enviar")

boton.addEventListener("click",
    () => {
        console.log("los parametros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        CloseEvent.log(user.value)
        

    }
)