// scraper.js
import websiteScraper from 'website-scraper';

//const websiteScraper =require('website-scraper')

// Define the website to scrape
const url = 'https://www.thezebra.com/'; // Replace with the URL of the website you want to scrape

//
//let path =["auto-insurance",]

// Configure options for website-scraper
const options = {
  urls: [url],
  directory: './home', // The directory where the downloaded content will be saved
  subdirectories: [
    { directory: 'img', extensions: ['.jpg', '.png', '.svg', '.gif'] },
    { directory: 'js', extensions: ['.js'] },
    { directory: 'css', extensions: ['.css'] },
    { directory: 'fonts', extensions: ['.ttf', '.eot', 'woff', 'woff2'] },
  ],
};

// Start the scraping process
websiteScraper(options)
  .then(() => console.log('Website successfully scraped and downloaded!'))
  .catch((err) => console.error('An error occurred:', err));