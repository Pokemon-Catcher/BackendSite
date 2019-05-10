document.addEventListener('DOMContentLoaded', init);

function init() {
	document.getElementById('contact-form').addEventListener('submit', onSubmit);

}

function onSubmit(e) {
	e.preventDefault();
	var formData = new FormData(document.querySelector('#contact-form'));

	var serverBody  = {};
	for (var[key, value] of formData.entries()) {
		serverBody[key] = value;
	}
	var pass=formData.get('form_passwd');
	var passrep=formData.get('form_passwd_repeat');
	
	if (pass===passrep) {
		var allInputs=document.querySelectorAll('#contact-form .form-group');
		for(var input of allInputs)
		{
			input.classList.remove('err');
			input.classList.add('suc');
			
		}
		// console.log(serverBody)
		// fetch('http://localhost:3050/reg', {
		// 	method: "POST",
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	  },
		// 	body: JSON.stringify(serverBody)
		// })
  		// 	.then(function(response) {
		// 		return response.json()
		// 	})
		// 	.then(function (body) {
		// 		console.log(body)
		// 	})
	}

	else {
		var passColor=document.querySelector('#password');
		var passrepColor=document.querySelector('#password_repeat');

		passColor.classList.remove('suc');
		passrepColor.classList.remove('suc');
		passColor.classList.add('err');
		passrepColor.classList.add('err');


	}
}

