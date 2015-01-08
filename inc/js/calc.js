$('#form_calories').submit(function(e) {
	//console.log('testing');
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

	var fat 	= $('#grams_fat').val()*9,
		protein = $('#grams_pro').val()*4,
		carbs	= $('#grams_carb').val()*4;

		//console.log(f.grams_fat, grams_fat);
	//console.log(fat, protein, carbs);


	$('#calories_total').text(fat + protein + carbs);

	e.preventDefault(); // this will prevent submitting the form.
});

$('#form_calories').bind("reset", function(e) {
	// set calculated calories back to zero
	$('#calories_total').text(0);
});
