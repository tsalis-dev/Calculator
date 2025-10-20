const display = document.getElementById('output');
const semuaTombol = document.querySelectorAll('button');

let input = '';

semuaTombol.forEach(tombol => {
    tombol.addEventListener('click', function () {
        const nilaiTombol = this.textContent;

        if (nilaiTombol === 'C') {
            input = '';
            display.textContent = '0';
        }
        else if (nilaiTombol === '=') {

            try {
                const hasil = eval(input);
                display.textContent = hasil;
                input = hasil.toString();
            } catch (error) {
                display.textContent = 'Error';
                input = '';
            }
        }

        else {
            if (display.textContent === '0' && nilaiTombol !== '.') {
                input = nilaiTombol;
            } else {
                input += nilaiTombol;
            }
            display.textContent = input;
        }
    });
});
const display = document.getElementById('output');
const semuaTombol = document.querySelectorAll('button');

let input = '';

semuaTombol.forEach(tombol => {
    tombol.addEventListener('click', function () {
        const nilaiTombol = this.textContent;

        if (nilaiTombol === 'C') {
            input = '';
            display.textContent = '0';
        }
        else if (nilaiTombol === '=') {

            try {
                const hasil = eval(input);
                display.textContent = hasil;
                input = hasil.toString();
            } catch (error) {
                display.textContent = 'Error';
                input = '';
            }
        }

        else {
            if (display.textContent === '0' && nilaiTombol !== '.') {
                input = nilaiTombol;
            } else {
                input += nilaiTombol;
            }
            display.textContent = input;
        }
    });
});