const inputs = document.querySelectorAll('.code');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function() {
                if (this.value.length === 1 && i < inputs.length - 1) {
                    inputs[i + 1].focus();
                }
            });

            inputs[i].addEventListener('keydown', function(event) {
                if (event.key === 'Backspace' && this.value.length === 0 && i > 0) {
                    inputs[i - 1].focus();
                }
            });
        }