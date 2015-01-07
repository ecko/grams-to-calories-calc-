$('#form_calories').submit(function(e) {
	console.log('testing');
		//function calculateCalories()
		//{
			// get all the inputs into an array.
			//var inputs = $('#form_calories :input');

			//var values = {};
			//$inputs.each(function() {
			//    values[this.name] = $(this).val();
			//});
			//console.log('testing');
			//console.log(inputs);

	/*
	to-do: add some stuff for BMR calculator, http://www.calculator.net/calorie-calculator.html

			This Calorie Calculator is based on the Mifflin - St Jeor equation. With this equation, the Basal Metabolic Rate (BMR) is calculated by using the following formula:

	BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5         (man)
	BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161     (woman)
	*/


			var f = form_calories;

			var grams_fat = f.grams_fat.value;
			var grams_pro = f.grams_pro.value;
			var grams_carb = f.grams_carb.value;

			//console.log(f.grams_fat, grams_fat);


			$('#calories_total').val(grams_fat*9 + grams_pro*4 + grams_carb*4);

			e.preventDefault(); // this will prevent from submitting the form.
		//}
		});