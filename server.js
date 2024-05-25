const buttons = document.getElementById('calculateButton');
        const resultDiv = document.getElementById('results');

        buttons.addEventListener("click", function(){
            var height = Number(document.getElementById('height').value);
            var weight = Number(document.getElementById('weight').value);

            if(height === '' || height<0 || isNaN(height)){
                resultDiv.innerHTML=`PLEASE ENTER A VALID HEIGHT ${height}`;
            }
            else if(weight === '' || weight<0 || isNaN(weight)){
                resultDiv.innerHTML=`PLEASE ENTER A VALID WEIGHT ${weight}`;
            }
            else{const BMI = calculateBMI(height, weight);

            if (BMI < 18.6) {
                resultDiv.innerHTML = `Your BMI is ${BMI.toFixed(2)} - You are Underweight`;
            } else if (BMI >= 18.6 && BMI < 24.9) {
                resultDiv.innerHTML = `Your BMI is ${BMI.toFixed(2)} - You are FIT!`;
            } else if (BMI >= 24.9) {
                resultDiv.innerHTML = `Your BMI is ${BMI.toFixed(2)} - You are OVERweight`;
            }}
            
        });

        function calculateBMI(height, weight){
            height = height / 100; // convert height to meters
            var heightSquare = height * height;
            var BMI = weight / heightSquare;
            return BMI;
        }

