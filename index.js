// Accessing Sliders
var loanSlider = document.getElementById("loanRange");
var tenureSlider = document.getElementById("tenureRange");

var loan = document.getElementById("loanAmount");
var tenure = document.getElementById("tenurePeriod");

var installment = document.getElementById("installment");
loan.innerHTML = loanSlider.value; // Display the default slider value
tenure.innerHTML = tenureSlider.value; 

// Accessing Buttons
var loanMinus = document.getElementById("button1");
var loanPlus = document.getElementById("button2");
var tenureMinus = document.getElementById("button3");
var tenurePlus = document.getElementById("button4");

// Update the current slider value (each time you drag the slider handle)
loanSlider.oninput = function() {
    loan.innerHTML = '<span> $'+this.value*1000+'</span>';
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #44bc4b 0%, #44bc4b ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)'
    // loanSlider.value and tenureSlider.value gives numeric value w/ realtime updates.
    installment.innerHTML = '<span> $'+'<span style="color:#44bc4b;font-size:30px;font-weight:600">' + Math.round((loanSlider.value*1000)/tenureSlider.value*1.07) +'</span>'+'</span>';
}

tenureSlider.oninput = function() {
    tenure.innerHTML = '<span>'+this.value+' months</span>';
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #44bc4b 0%, #44bc4b ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)'
    installment.innerHTML = '<span> $'+'<span style="color:#44bc4b;font-size:30px;font-weight:600">' + Math.round((loanSlider.value*1000)/tenureSlider.value*1.07) +'</span>'+'</span>';
}

$('.button1,.button2').click(function(){
    var value = parseInt($('#loanRange').val());
    console.log($(this).hasClass('button2'));
		switch($(this).hasClass('button2')){
    	case true:
      	value = value === 200 ? value : value +1;
      	break;
      case false:
      	value = value === 0 ? value : value -1;
      	break;
    
    }
    
    $('#loanRange').val(value).trigger('change');
});

$('#loanRange').change(function(e){
	e.preventDefault();
	var current_value = parseInt($('input#loanRange.slider').val());
    $('#loanAmount').html("$" + current_value*1000); 
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #44bc4b 0%, #44bc4b ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)'
    installment.innerHTML = '<span> $'+'<span style="color:#44bc4b;font-size:30px;font-weight:600">' + Math.round((loanSlider.value*1000)/tenureSlider.value*1.07) +'</span>'+'</span>';
})

$('.button3,.button4').click(function(){
    var value2 = parseInt($('#tenureRange').val());
    console.log($(this).hasClass('button4'));
		switch($(this).hasClass('button4')){
    	case true:
      	value2 = value2 === 72 ? value2 : value2 +1;
      	break;
      case false:
      	value2 = value2 === 3 ? value2 : value2 -1;
      	break;
    
    }
    
    $('#tenureRange').val(value2).trigger('change');
});

$('#tenureRange').change(function(e){
	e.preventDefault();
	var current_value2 = parseInt($('input#tenureRange.slider').val());
    $('#tenurePeriod').html(current_value2+" months"); 
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #44bc4b 0%, #44bc4b ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)'
    installment.innerHTML = '<span> $'+'<span style="color:#44bc4b;font-size:30px;font-weight:600">' + Math.round((loanSlider.value*1000)/tenureSlider.value*1.07) +'</span>'+'</span>';
})