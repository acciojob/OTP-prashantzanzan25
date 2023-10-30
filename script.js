//your JS code here. If required.
document.querySelectorAll(*'.code').forEach((input, index, inputs)=>{
	input.addEventListener('input', (e)=>{
		if(e.target.value){
			if(index<inputs.length-1){
				inputs[index+1].focus();
			}
		}
	});
	input.addEventListener('keydown', (e)=>{
		if(e.key === 'Backspace' && index > 0){
			inputs[index-1].focus();
		}
	});
});