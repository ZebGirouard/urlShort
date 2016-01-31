'use strict';

function URLShortHandler () {
	
	this.getURL = function (req, res) {
		var rawURL = req.url;
		var myRegEx = /new\/(.*)/;
		var originalURL = myRegEx.exec(rawURL)[1];
		console.log(originalURL);
	    var isURL = function (string) {
		  var pattern = /^http|https:\/\/.+\..+/
		  return pattern.test(string);
		}
		if (isURL(originalURL)) {
		    res.json({original_url: originalURL, short_url: "coming soon"});
		}
		else {
		    res.json({error:"URL invalid"});
		}
	};
}

module.exports = URLShortHandler;
