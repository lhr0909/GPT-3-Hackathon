const cheerio = require('cheerio')
const request = require('request')
request(
  {
    method: 'GET',
    // url: "https://www.techstars.com/accelerators/colliers-proptech",
    // url: 'https://www.nextgrid.ai/seed/',
    url: 'https://www.annualreports.com/Company/tesla-motors',
  },
  (err, res, body) => {
    if (err) return console.error(err)
    // Fetch webstite
    const $ = cheerio.load(body)
    const links = $('a')
    console.log(JSON.stringify(links.map((i, el) => $(el).attr('href')).get().filter(href => href.endsWith('pdf'))))
    // Remove <footer>*</footer> content
    // $('footer').remove()
    // const contentBuffer = $('*')
    // // Return the text
    // let content = contentBuffer.text()
    // // Remove all new lines from content
    // content = content.replace(/(\r\n|\n|\r)/gm, '')
    // // Log output
    // console.log(console.log(content))
  }
)
