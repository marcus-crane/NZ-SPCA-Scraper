### NZ SPCA Scraper

##### What is it for?

I was talking with <a href="https://github.com/cam-shotter">Cam</a> who was having issues with how to go about scraping the SPCA site.

##### How does it work?

I assumed this was going to be pretty straight forward but interestingly enough, they use lazy loading because of how wonky the site design is.

It makes a XMLHttpRequest to fetch more data once you scroll to the bottom of the page so I slapped that URL into Postman along with my browsers cookie and a JSON object which gave me back a successful result!

All I had to do then was post off the data and traverse the response to pluck out the data.

##### What about using X thing instead?

This implementation is pretty messy since it was a quick practice exercise and it doesn't resolve all of the issues with scraping all of the animal types.

Check out the continued development by Cam over at <a href="http://github.com/cam-shotter/NZ-SPCA-Scraper">his fork</a> since it is his project after all!
