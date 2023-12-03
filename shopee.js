import { launch } from 'puppeteer';

(async () => {
  const browser = await launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();

  await page.goto('https://shopee.co.id/ERHA-Acneact-Acne-Spot-Gel-BHA-Sulfur-10g-Obat-Totol-Jerawat-i.129153987.1981545194');
    console.log("Berhasil Masuk Ke Halaman Web");

    const element = await page.waitForSelector('div > .p+UZsF');

    await element.click();
       
    // Klik tombol "beli sekarang"
    await page.click(".btn btn-solid-primary btn--l iFo-rx");
    console.log("Berhasil klik tombol 'beli sekarang'");
    
    // Tambahkan kode selanjutnya setelah melakukan klik

})();

// // Panggil fungsi untuk menjalankan Puppeteer
// runPuppeteer();
