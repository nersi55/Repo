const { chromium } = require('playwright');

async function sendTweet() {
  const tweetText = process.argv[2] || 'این یک توییت تست است!';
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // کد ورود و ارسال توییت شما
    // ...
    await page.goto('https://x.com/login');
    // و بقیه کدها مثل بالا
    
    await page.fill('div[role="textbox"]', tweetText);
    // و ادامه کدها
    
    console.log('توییت با موفقیت ارسال شد');
  } catch (error) {
    console.error('خطا در ارسال توییت:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

sendTweet();
