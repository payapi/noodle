--- 
category: reference
heading: Multiple extract rules
---

It is also possible to request multiple properties to extract in one query via
array.

Query:

    {
      "url": "http://chrisnewtn.com",
      "selector": "ul.social li a",
      "extract": ["href", "text"]
    }

Response:

    {
        "results": [
            {
                "href": "http://twitter.com/chrisnewtn",
                "text": "Twitter"
            },
            {
                "href": "http://plus.google.com/u/0/111845796843095584341",
                "text": "Google+"
            }
        ],
        "created": "2012-08-01T16:23:41.913Z"
    }