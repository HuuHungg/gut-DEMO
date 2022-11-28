var inputElement = document.querySelector('input[type="text"]')
    inputElement.oninput = function(e) {
        console.log(e.target.value)
    }

var checkElement = document.querySelector('input[type="checkbox"]')
    checkElement.onchange = function(e) {
        console.log(e.target.checked)
    }

let selectElement = document.querySelector('select')
    selectElement.oninput = function(e) {
        console.log(e.target.value)
    }

// keyborud
    document.onkeydown = function(e) {
        console.log(e.which)

        switch (e.which) {
            case 27 :
            console.log('I LOVE YOU SO MUCH')
            break

            case 65:
            console.log('I LOVE YOU TOO')
            break
        
        }

    }