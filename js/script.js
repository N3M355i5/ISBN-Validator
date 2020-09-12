function isValidISBN() {
	var result = false;
	var isbn = document.getElementById("isbn").value;
	
	if ( isbn != null ) {
		
		isbn = isbn.replace( /-/g, "" ); // remove '-' symbols
		isbn = isbn.replace( / /g, "" ); // remove whiteSpace
		alert(isbn);
		switch ( isbn.length ) {
			
			case 10 :
				result = isValidISBN10( isbn );
				break;
			case 13 :
				result = isValidISBN13( isbn );
				break;
		}
	}
	if (!result) {
		document.getElementById('demo').innerHTML = "The ISBN Code is Invalid!";
	}
	else {
		document.getElementById('demo').innerHTML = "The ISBN Code is Valid!";
	}
	return result;
}

function isValidISBN10( isbn ) {
	
	var result = false;
	var regex = new RegExp( /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/ );
	
	if ( regex.test( isbn ) ) {
		
		var sum = 0;
		
/*
* result = (isbn[0] * 1 + isbn[1] * 2 + isbn[2] * 3 + isbn[3] * 4 + ... + isbn[9] * 10) mod 11 == 0
*/		
		for ( var i = 0; i < 9; i++ ) {
			
			sum += isbn[ i ] * ( i + 1 );
		}
		sum += isbn[ 9 ] == 'X' ? 10 : isbn[ 9 ] * 10;
		
		result = sum % 11 == 0;
	}
	alert(result);
	return result;
}

function isValidISBN13( isbn ) {
	
	var result = false;

	if ( !isNaN( isbn ) ) { // isNaN - is Not a Number, !isNaN - is a number
		
		var index = 0;
		var sum = 0;
		
/*
* result = (isbn[0] * 1 + isbn[1] * 3 + isbn[2] * 1 + isbn[3] * 3 + ... + isbn[12] * 1) mod 10 == 0
*/		
		for ( var i = 0; i < isbn.length; i++ ) {
			
			sum += isbn[ i ] * ( isOddNumber( index++ ) ? 3 : 1 );
		}
		
		result = sum % 10 == 0;
		alert(result);
	}

	return result;
}

function isOddNumber ( value ) {
	
	return value % 2 != 0;
}
$(document).ready(function() {
	$('#subbtn').click(function() {
		function blink_text() {
    		$('.blink').fadeOut(500);
    		$('.blink').fadeIn(500);
		}
		setInterval(blink_text, 1000);
	});
	$('#resbtn').click(function() {
		$('#demo').fadeOut(500);
	})
});