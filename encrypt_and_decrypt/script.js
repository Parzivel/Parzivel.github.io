function encrypt(){
    let encrypt_message = document.getElementById("encrypt_message").value;
    let encrypt_secret_phrase = document.getElementById("encrypt_secret_phrase").value;
    let encrypted_output = document.getElementById("encrypted_output").value;
    let encrypted_result = CryptoJS.AES.encrypt(encrypt_message, encrypt_secret_phrase);
    
    document.getElementById("encrypted_output").innerHTML = encrypted_result;
}

function decrypt(){
    let decrypt_message = document.getElementById("decrypt_message").value;
    let decrypt_secret_phrase = document.getElementById("decrypt_secret_phrase").value;
    let decrypted_output = document.getElementById("decrypted_output").value;
    let decrypted_result = CryptoJS.AES.decrypt(decrypt_message, decrypt_secret_phrase).toString(CryptoJS.enc.Utf8);


    if(!decrypted_result){
        document.getElementById("decrypted_output").innerHTML = "Incorrect password.";
    } else {
        document.getElementById("decrypted_output").innerHTML = decrypted_result;
    }
}