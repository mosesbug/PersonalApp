// create a class for complex numbers
// create a constructor with 2 field; real and imaginary

function ComplexNumber(re, im){
	this.re = re;
	this.im = im;
}

ComplexNumber.prototype.double = function(){
	this.re = 2*this.re;
	this.im = 2*this.im;
}

ComplexNumber.prototype.square = function(){
	const re_temp = this.re
	this.re = (this.re*this.re)-(this.im*this.im)
	this.im = (2*re_temp*this.im)
}

const nums = new ComplexNumber(1,2);
nums.double();
nums.square();
console.dir(nums);
console.dir(ComplexNumber);

Template.testing.helpers({
	nums: function(){return nums;}
})