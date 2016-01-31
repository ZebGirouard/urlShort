'use strict';

function URLShortHandler () {
	
	this.getURL = function (req, res) {
	    var URL = req.params.URL;
		var urlValid = true;
		if (urlValid) {
		    res.json({original_url: URL, short_url: "testest"});
		}
		else {
		    res.json({error:"URL invalid"});
		}
	};
}

module.exports = URLShortHandler;
