"use strict";

Parse.initialize("HSYcfLCkOCucC0sVDztsyZgKGOwX22jvlfNQJsWZ", "Nak1IiZvGSUHhDzqf2FNAcslInz2hX8fyaRrwl2s");

//model

var View = Parse.Object.extend('view');

//collection 

var ViewColl = Parse.Collection.extend({
	model: View
});

