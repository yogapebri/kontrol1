document.addEventListener('DOMContentLoaded', () => {
    const ledSwitch = document.getElementById('ledSwitch');
    const ledStatus = document.getElementById('ledStatus');
    const espIp = 'http://192.168.245.48'; // Ganti dengan IP ESP8266 Anda

    function sendCommand(state) {
        fetch(`${espIp}/${state}`)
            .then(response => response.text())
            .then(text => console.log(text))
            .catch(error => console.error('Error:', error));
    }

    ledSwitch.addEventListener('click', () => {
        ledSwitch.classList.toggle('on');
        const isOn = ledSwitch.classList.contains('on');
        ledStatus.textContent = `LED: ${isOn ? 'ON' : 'OFF'}`;
        sendCommand(isOn ? 'LED_ON' : 'LED_OFF');
    });
});
