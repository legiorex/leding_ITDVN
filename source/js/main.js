(function () {


    var openFormButton = document.querySelector('.btn-down');
    var form = document.querySelector('.form');
    console.log(openFormButton);
        if (openFormButton){
            openFormButton.addEventListener('click', function () {
                ITVDN.form.open();
            })
        }

    if(form){
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                if(ITVDN.form.isValid()) {
                    console.log('All good!');
                }
                else {
                    console.log('Is not valid');
                }
            })
    }
}());