// scraper.js
import websiteScraper from 'website-scraper';

//const websiteScraper =require('website-scraper')

// Define the website to scrape
const url = 'https://www.thezebra.com/'; // Replace with the URL of the website you want to scrape

//
let path =["insurance/car/prefill/start/","insurance/car/prefill/start/details/"]


let all =[{
  url:"https://www.thezebra.com/",
  dir:"./home"
},
{
  url:"https://www.thezebra.com/insurance/car/prefill/start/",
  dir:"./start"
},
{
  url:"https://www.thezebra.com/insurance/car/prefill/start/details/",
  dir:"./details"},
  {
    url:"https://www.thezebra.com/insurance/car/vehicles/select",
    dir:"./details"},{
      url:"https://www.thezebra.com/insurance/car/prefill/start/details/",
      dir:"./details"},
      {
        url:"https://www.thezebra.com/insurance/car/prefill/start/details/",
        dir:"./details"},
        {
          url:"https://www.thezebra.com/insurance/car/prefill/start/details/",
          dir:"./details"}

]
"/car/prefill/vehicles/select/": false,
                                "/car/prefill/vehicles/details/": false,
                                "/car/prefill/drivers/details/": false,
                                "/car/prefill/coverage-selection/"




for (let i=0;i<all.length;i++){
// Start the scraping process

// Configure options for website-scraper
const options = {
  urls: [all[i].url],
  directory:`./${all[i].dir}`, // The directory where the downloaded content will be saved
  subdirectories: [
    { directory: 'img', extensions: ['.jpg', '.png', '.svg', '.gif'] },
    { directory: 'js', extensions: ['.js'] },
    { directory: 'css', extensions: ['.css'] },
    { directory: 'fonts', extensions: ['.ttf', '.eot', 'woff', 'woff2'] },
  ],
};

websiteScraper(options)
  .then(() => console.log('Website successfully scraped and downloaded!'))
  .catch((err) => console.error('An error occurred:', err));
}
