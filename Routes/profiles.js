const Router = require('express');
const router = Router();
const puppeteer = require('puppeteer')

router.get('/', (req, res) => {
  res.send('Hola, esta es la ruta /posts');
});

router.get('/facebook/:userName', async(req, res)=> {

  const {userName} = req.params
  const browser = await puppeteer.launch({
    //headless: false,
    headless: 'new',
    slowMo: 500
  });
  const page = await browser.newPage();
  await page.goto(`https://www.facebook.com/${userName}/`);
  await page.click('i[class="x1b0d499 x1d69dk1"]')
  const result = await page.evaluate(() => {
    const fullName = document.querySelector('h1[class="x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz"]')?.innerText;
    const lastName = fullName?.split(" ")[1];
    const name = fullName?.split(" ")[0];
    const imgUrl = document.querySelector('svg[class="x3ajldb"] g image')?.getAttribute('xlink:href');
    return { fullName, lastName, name, imgUrl };
  });
  await browser.close();
  res.json(result).status(200);
});

router.get('/instagram/:userName', async(req, res)=> {
  const {userName} = req.params
  const browser = await puppeteer.launch({
    //headless: false,
    headless: 'new',
    slowMo: 1000
  });
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/${userName}/`);
  const result = await page.evaluate(() => {
    const userName = document.querySelector('h2[class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye x1ms8i2q xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj"]')?.innerText;
    const fullName = document.querySelector('span[class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp x1s688f x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj"]')?.innerText;
    const lastName = fullName?.split(" ")[1];
    const name = fullName?.split(" ")[0];
    const imgUrl = document.querySelector('img[class="xpdipgo x972fbf xcfux6l x1qhh985 xm0m39n xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xl1xv1r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3"]')?.getAttribute('src');
    return { userName, fullName, name, lastName, imgUrl };
  });
  await browser.close();
  res.json(result).status(200);
});

router.get('/twitter/:userName', async(req, res)=> {
  const {userName} = req.params
  const browser = await puppeteer.launch({
    //headless: false,
    headless: 'new',
    slowMo: 1600
  });
  const page = await browser.newPage();
  await page.goto(`https://twitter.com/${userName}/`);
  const result = await page.evaluate(() => {
    const fullName = document.querySelector('h2[class="css-1rynq56 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-37j5jr r-adyw6z r-135wba7 r-b88u0q r-1vvnge1"] div div div div span[class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3 r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q"] span span')?.innerText;
    const userName = document.querySelector('div[class="css-175oi2r"] div[class="css-175oi2r"] div div div div div[class="css-175oi2r r-6gpygo r-14gqq1x"] div div div[class="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2"] div div div span')?.innerText;
    const lastName = fullName?.split(" ")[1];
    const name = fullName?.split(" ")[0];
    const imgUrl = document.querySelector('div[class="css-175oi2r"] div[class="css-175oi2r r-ymttw5 r-ttdzmv r-1ifxtd0"] div div div[class="r-1p0dtai r-1pi2tsx r-u8s1d r-1d2f490 r-ipm5af r-13qz1uu"] div div[class="r-1p0dtai r-1pi2tsx r-u8s1d r-1d2f490 r-ipm5af r-13qz1uu"] div a div[class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-u8s1d r-1wyvozj r-1v2oles r-desppf"] div div[class="r-1p0dtai r-1pi2tsx r-u8s1d r-1d2f490 r-ipm5af r-13qz1uu"] div img')?.getAttribute('src');
    return { fullName, name, lastName, userName, imgUrl };
  });
  await browser.close();
  res.json(result).status(200);
});

router.get('/tictoc/:userName', async(req, res)=> {
  const {userName} = req.params
  const browser = await puppeteer.launch({
    //headless: false,
    headless: 'new',
    slowMo: 500
  });
  const page = await browser.newPage();
  await page.goto(`https://www.tiktok.com/@${userName}/`);
  await page.click('a[id="verify-bar-close"]')
  const result = await page.evaluate(() => {
    const userName = document.querySelector('h1[class="css-1xo9k5n-H1ShareTitle e1457k4r8"]')?.innerText;
    const fullName = document.querySelector('h2[class="css-10pb43i-H2ShareSubTitle ekmpd5l7"]')?.innerText;
    const lastName = fullName?.split(" ")[1];
    const name = fullName?.split(" ")[0];
    const imgUrl = document.querySelector('img[class="css-1zpj2q-ImgAvatar e1e9er4e1"]')?.getAttribute('src');
    return { userName, fullName, name, lastName, imgUrl };
  });
  await browser.close();
  res.json(result).status(200);
});

module.exports = router;