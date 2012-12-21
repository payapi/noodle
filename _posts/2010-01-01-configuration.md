---
category: reference
heading: Configuration
---

Various settings are exposed and can be edited in `lib/config.json`.

    {
      "resultsCacheMaxTime":   3600000,
      "resultsCachePurgeTime": 60480000,
      "resultsCacheMaxSize":   124,

      "pageCacheMaxTime":      3600000,
      "pageCachePurgeTime":    60480000,
      "pageCacheMaxSize":      32,

      // If no query type option is supplied then 
      // what should noodle assume

      "defaultDocumentType":  "html",

      // How the noodle scraper identifies itself 
      // to scrape targets
      
      "userAgent":            ""
    }