var messages = 0;

module.exports = function (noodle) {
  var events = noodle.events,
      config = noodle.config;
      
  function toTerminal(message) {
    if (config.debug) {
      console.log('\n noodle log   #' + ++messages);
      console.log(new Date());
      console.log(message + '\n');
    }
  }

  // Called when a page is cached
  events.on('cache/page', function (cachePage) {
    toTerminal('Cache: Page has been cached');
  });

  // Called when a result is cached
  events.on('cache/result', function (cacheResult) {
    toTerminal('Cache: Result has been cached');
  });

  // Called when the cache is purged
  events.on('cache/purge', function (when, next) {
    toTerminal('Cache: Purge @ ' + when + ' next in ' + next);
  });

  // Called when a cached item has expired from the cache
  events.on('cache/expire', function (item, next) {
    toTerminal('Cache: An item expired from cache, next in ' + next);
  });

};