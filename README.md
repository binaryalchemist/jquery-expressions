
# [jQuery Expressions Library]

## Description
LINQ Style jQuery DOM and Collection Methods 

## Usage

### DOM Elements
	//Return items where expression is true
	jQuery(".selector").where(function(elem) {
		return parseInt(elem.id) > 30;
	});

	//Return first item where expression is true
	jQuery(".selector").first(function(elem) {
		return parseInt(elem.id) > 30;
	});

	//Return last item where expression is true
	jQuery(".selector").last(function(elem) {
		return parseInt(elem.id) > 30;
	});

	//Do all items match the expression
	jQuery(".selector").all(function(elem) {
		return parseInt(elem.id) > 30;
	});

	//Do any items match the expression
	jQuery(".selector").any(function(elem) {
		return parseInt(elem.id) > 30;
	});

### Collections
	//Return items where expression is true
	jQuery(".selector").where(function(item) {
		return item.accountId  > 40 && item.Name != 'Ted';
	}, 
	[
		{name:"Bob", accountId:5}, 
		{name:"John", accountId:81}, 
		{name:"Jake", accountId:26},
		{name:"Ted", accountId:124},
		{name:"Jill", accountId:72},
		{name:"Sarah", accountId:14}
	]);

	//Return first item where expression is true
	jQuery(".selector").first(function(item) {
		return item.accountId  > 40 && item.Name != 'Ted';
	},
	[
		{name:"Bob", accountId:5}, 
		{name:"John", accountId:81}, 
		{name:"Jake", accountId:26},
		{name:"Ted", accountId:124},
		{name:"Jill", accountId:72},
		{name:"Sarah", accountId:14}
	]);
	
	//Return last item where expression is true
	$.last(function(item) {
		return item.accountId  > 40 && item.Name != 'Ted';
	}, 
		[
		{name:"Bob", accountId:5}, 
		{name:"John", accountId:81}, 
		{name:"Jake", accountId:26},
		{name:"Ted", accountId:124},
		{name:"Jill", accountId:72},
		{name:"Sarah", accountId:14}
	]);

	//Do all items match the expression
	$.all(function(item) {
		return item.accountId  > 40 && item.Name != 'Ted';
	},
	[
		{name:"Bob", accountId:5}, 
		{name:"John", accountId:81}, 
		{name:"Jake", accountId:26},
		{name:"Ted", accountId:124},
		{name:"Jill", accountId:72},
		{name:"Sarah", accountId:14}
	]);

	//Do any items match the expression
	$.any(function(item) {
		return item.accountId  > 40 && item.Name != 'Ted';
	}, 
	[
		{name:"Bob", accountId:5}, 
		{name:"John", accountId:81}, 
		{name:"Jake", accountId:26},
		{name:"Ted", accountId:124},
		{name:"Jill", accountId:72},
		{name:"Sarah", accountId:14}
	]);

## License

Copyright (c) 2013 Kristopher Alexander

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
