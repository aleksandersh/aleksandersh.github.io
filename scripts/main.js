let base64Input = document.getElementById("base64-in");
let base64Output = document.getElementById("base64-out");
let base64Encode = document.getElementById("base64-encode");
let base64Decode = document.getElementById("base64-decode");

base64Encode.onclick = () => {
    try {
        base64Output.innerText = btoa(base64Input.value);
    } catch (error) {
        console.error(error, error.stack);
        base64Output.innerText = "";
    }
}
base64Decode.onclick = () => {
    try {
        base64Output.innerText = atob(base64Input.value);
    } catch (error) {
        console.error(error, error.stack);
        base64Output.innerText = "";
    }
}

let decimalToHexIn = document.getElementById("decimal-to-hex-in");
let decimalToHexOut = document.getElementById("decimal-to-hex-out");
decimalToHexIn.addEventListener('input', (event) => {
    let value = event.target.value
    if (value) {
        decimalToHexOut.innerText = parseInt(value, 10).toString(16)
    } else {
        decimalToHexOut.innerText = null
    }
})
