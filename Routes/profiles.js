const Router = require('express');
const router = Router();
const puppeteer = require('puppeteer')

router.get('/facebook/:{userName}', (req, res)=> {
  const {userName} = req.params
  const browser = await puppeteer.launch({
    //headless: false,
    headless: 'new',
    slowMo: 500
  });
  const page = await browser.newPage();
  await page.goto(`https://www.facebook.com/${idUser}/`);
  await page.click('div[class="x1i10hfl x6umtig x1b1mbwd xaqea5y xav7gou x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x87ps6o x1lku1pv x1a2a7pz x6s0dn4 x14yjl9h xudhj91 x18nykt9 xww2gxu x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xl56j7k xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xc9qbxq x14qfxbe x1qhmfi1"]')
  const result = await page.evaluate(() => {
    const fullName = document.querySelector('h1[class="x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz"]')?.innerText;
    const lastName = fullName?.split(" ")[1];
    const name = fullName?.split(" ")[0];
    const imgUrl = document.querySelector('svg[class="x3ajldb"] g image')?.getAttribute('xlink:href');
    return { fullName, lastName, name, imgUrl };
  })
  console.log(result);
  await browser.close();
  res.json(result).status(200);
});

router.get('/instagram', (req, res)=> {

});

router.get('/twitter', (req, res)=> {

});

module.exports = router;