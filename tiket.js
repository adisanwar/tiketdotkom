import { launch } from "puppeteer";
import readlineSync from 'readline-sync';

(async () => {
  const url = readlineSync.question('Masukkan URL atau link: ');
  const username = readlineSync.question('Masukkan username/email: ');
  const password = readlineSync.question('Masukkan password: ', {
    hideEchoBack: true, // Untuk menyembunyikan input password
  });

  const browser = await launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
  });
  const page = await browser.newPage();

  await page.goto(url);

  try {
    // Periksa apakah selector #mobile-number-or-email ada di halaman
    const isSelectorExists = await page.$("#mobile-number-or-email");

    if (isSelectorExists !== null) {
      // Selector ditemukan, maka masukkan username/email
      await page.type("#mobile-number-or-email", username);
      
      // Klik tombol login
      await page.click("#__next > div.login_wrapper__l2hBa > div > div.layout_card_form__hPnMM > div.login_login_form__5x5I_ > div.login_form_content__8xMKl > button");
      
      // Tunggu hingga elemen untuk password muncul
      await page.waitForSelector("#password");
      
      // Masukkan password
      await page.type("#password", password);
      
      // Klik tombol login setelah memasukkan password
      await page.click("#__next > div.login_wrapper__l2hBa > div > div.layout_card_form__hPnMM > div.login_login_form__5x5I_ > div.login_form_content__8xMKl > div.LoginForm_form__WssZE > div.LoginForm_form_text__rhGsM > button");
      
      console.log("Masuk Ke Halaman OTP ... ");
      
      // Lakukan tindakan berikutnya setelah login (misalnya, melakukan klik tombol lain atau navigasi)
    } else {
      console.log("Selector #mobile-number-or-email tidak ditemukan.");
      await page.goto(url);
    }

  } catch (error) {
    console.error(error.message);
  } finally {
    await browser.close(); // Pastikan untuk menutup browser setelah selesai
  }
})();
