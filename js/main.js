
document.addEventListener('DOMContentLoaded', function() {

    const message = document.getElementById('message');
    const mnemonicTextArea = document.getElementById('mnemonic');

    document.getElementById('cypher').onclick = () => {
        message.innerText = "Message ciphered!"
        const plain = document.getElementById('plain').value;
        const password = document.getElementById('password').value;
        const cipheredMessage = core.cipher(plain, password)
        mnemonicTextArea.value = cipheredMessage;
    };

    document.getElementById('generate-mnemonic').onclick = () => {
        message.innerText = "Mnemonic generated!"
        const mnemonic = core.generateMnemonic()
        mnemonicTextArea.value = mnemonic;
    };
    
    document.getElementById('clear').addEventListener('click', function () {
        document.getElementById('mnemonic').value = '';
        document.getElementById('plain').value = '';
        document.getElementById('password').value = '';
        document.getElementById('message').value = '';
        location.reload();
    });

});
