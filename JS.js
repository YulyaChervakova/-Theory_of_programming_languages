function verify() {
    var input = document.getElementById('sequence').value;
    var output = document.getElementById('out2');
    var CS = 'H';
    var k = 0;
    output.innerHTML = '';
    for (var i = 0; i < input.length; i++) {
        switch (CS) {
            case 'H':
                if (input[i] == '%' && i != input.length - 1) {
                    output.innerHTML = output.innerHTML + '<p>% &rarr;B</p>';
                    CS = 'B';
                  
                } else {
                    k = 1;
                    break;
                }
                break;
            case 'B':
                if (input[i] == '1' && i != input.length - 1) {
                    output.innerHTML = output.innerHTML + '<p>1 &rarr;C</p>';
                    CS = 'C';
                } else {
                    if (input[i] == '0' && i != input.length - 1) {
                        output.innerHTML = output.innerHTML + '<p>0 &rarr;A</p>';
                        CS = 'A';
                    } else {
                        k = 1;
                        break;
                    }
                }
                break;
            case 'A':
                if (input[i] == '1') {
                    if (i == input.length - 1) {
                        output.innerHTML = output.innerHTML + '<p>1 &rarr;CS</p>' + '<h3>Цепочка  принадлежит <br>данному языку!</h3>';
                        CS = 'CS';
                    } else {
                        output.innerHTML = output.innerHTML + '<p>1 &rarr;CS</p>';
                        CS = 'CS';
                    }
                } else {
                    k = 1;
                    break;

                }
                break;
            case 'C':
                if (input[i] == '0') {
                    output.innerHTML = output.innerHTML + '<p>0 &rarr;S</p>' + '<h3>Цепочка принадлежит <br>данному языку!</h3>';
                    CS = 'S';
                    break;
                } else {
                    k = 1;
                    break;
                }

                case 'CS':
                    if (input[i] == '0') {
                        output.innerHTML = output.innerHTML + '<p>0 &rarr;S</p>' + '<h3>Цепочка принадлежит <br>данному языку!</h3>';
                        CS = 'S';
                    } else {
                            k = 1;
                            CS = 'M';
                            break;
                    }
                    break;
                case 'S':
                    CS = 'M';
                    k = 1;
                    break;
        }
        
    }
    if (k == 1) {
            output.innerHTML = '<h3>Цепочка не принадлежит <br>данному языку!</h3>';
        }
}