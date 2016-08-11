### NZ SPCA Scraper

I was talking with <a href="https://github.com/cam-shotter">Cam</a> who was having issues with how to go about scraping the SPCA site.

I assumed this was going to be pretty straight forward but interestingly enough, they use lazy loading because of how wonky the site design is.

It makes a XMLHttpRequest to fetch more data once you scroll to the bottom of the page so I slapped that URL into Postman along with my browsers cookie and a JSON object which gave me back a successful result!

All I had to do them was post off the data and traverse the response to pluck out the data.

This implementation is pretty messy since it was a quick practice exercise but I'll probably revisit it in the future and implement it with streams or something interesting.
