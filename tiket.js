import { launch } from "puppeteer";
// import { readline } from "readline-sync";
import pkg from 'readline-sync';
const { readline } = pkg;
let isLoggedIn = false; // Variabel untuk menyimpan status login

(async () => {
  const browser = await launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", // Sesuaikan jalur dengan lokasi instalasi Chrome Anda
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
  });
  const page = await browser.newPage();

  await page.goto(
    "https://en.tiket.com/login?ref=https%3A%2F%2Fen.tiket.com%2Fto-do%2Ftwice-ready-to-be-in-jakarta"
  );

  try {

    
    await page.type("#mobile-number-or-email", "caulmardy@gmail.com");
   
    await page.click(

      "#__next > div.login_wrapper__l2hBa > div > div.layout_card_form__hPnMM > div.login_login_form__5x5I_ > div.login_form_content__8xMKl > button"
    );

    // page.waitForNavigation();
    await page.waitForSelector("#password");
    await page.type("#password", "Tarikjon1.");

    await page.click(
      "#__next > div.login_wrapper__l2hBa > div > div.layout_card_form__hPnMM > div.login_login_form__5x5I_ > div.login_form_content__8xMKl > div.LoginForm_form__WssZE > div.LoginForm_form_text__rhGsM > button"
    );
    console.log("Masuk Ke Halaman OTP ... ");

    // await page.waitForSelector("#modal-root");
    // const otp = readline.question("Masukkan kode OTP yang Anda terima: ");
    // await page.type("#modal-root input[type='text']", otp);
    // #__next > main > div.productSlug_responsive_wrapper__e8KzT > div > div:nth-child(4) > div.SectionPackage_section_package__3zqwa > div.PackageSelection_package_wrapper__fpdG1 > div:nth-child(3) > div > div:nth-child(3) > div.PackageSelection_package_footer__Pvm5B > div > button

    await page.click(
        "#__next > main > div.productSlug_responsive_wrapper__e8KzT > div > div:nth-child(4) > div.SectionPackage_section_package__3zqwa > div.PackageSelection_package_wrapper__fpdG1 > div:nth-child(3) > div > div:nth-child(3) > div.PackageSelection_package_footer__Pvm5B > div > button"
      );


  } catch (error) {
    // Jika terjadi error, tampilkan pesan error di terminal
    console.error(error.message);
  }
})();

// run node tiket.js

// import { launch } from "puppeteer";

// (async () => {
//   const browser = await launch({
//     executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", // Sesuaikan jalur dengan lokasi instalasi Chrome Anda
//     headless: false,
//     defaultViewport: false,
//     userDataDir: "./tmp",
//   });
//   const page = await browser.newPage();

//   await page.goto(
//     "https://en.tiket.com/login?ref=https%3A%2F%2Fen.tiket.com%2Fto-do%2Ftwice-ready-to-be-in-jakarta"
//   );

//   // Tunggu dan cek apakah halaman Cloudflare muncul
// //   const isCloudflarePage = await page.evaluate(() => {
// //     return document.getElementById("challenge-running") !== null; // Ganti dengan elemen unik Cloudflare
// //   });

// //   if (isCloudflarePage) {
// //     console.log("Halaman dilindungi oleh Cloudflare");

// //     // Tambahkan baris ini untuk menunggu iframe muncul
// //     await page.waitForSelector("iframe[src*='challenge-platform']");

// //     // Ubah baris ini untuk mendapatkan iframe berdasarkan atribut src
// //     const frame = page
// //       .frames()
// //       .find((frame) =>
// //         frame
// //           .url()
// //           .includes(
// //             "https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/if/ov2/av0/rcv0/0/rg4nw/0x4AAAAAAADnPIDROrmt1Wwj/dark/normal"
// //           )
// //       );

// //     if (frame) {
// //       // Lakukan operasi di dalam iframe
// //       await frame.click("#challenge-stage > div > label"); // Misalnya, klik tombol dalam iframe
// //     } else {
// //       console.log("Iframe tidak ditemukan");
// //     }

// //     // Jika perlu, lakukan interaksi manusia untuk menyelesaikan verifikasi
// //     // Misalnya, menunggu beberapa detik untuk Cloudflare menyelesaikan verifikasi manusia
// //     await page.waitForTimeout(10000); // Tunggu selama 10 detik, bisa disesuaikan

// //     // Setelah verifikasi selesai, coba lanjutkan interaksi seperti mencentang checkbox
// //     // Tambahkan baris ini untuk menunggu iframe muncul lagi
// //     await page.waitForSelector("iframe[src*='challenge-platform']");

// //     console.log(
// //       "Centang checkbox berhasil dilakukan setelah verifikasi Cloudflare"
// //     );
// //   } else {
// //     console.log("Halaman tidak dilindungi oleh Cloudflare");
// //   }

//   // Pilih kotak centang berdasarkan selector yang sesuai
//   //   await page.click('input[type="checkbox"]');

//     await page.type("#mobile-number-or-email", "adtyaantem@gmail.com");

//     await page.click('#__next > div.login_wrapper__l2hBa > div > div.layout_card_form__hPnMM > div.login_login_form__5x5I_ > div.login_form_content__8xMKl > button');

//     // page.waitForNavigation();

//     await page.type("#password", "Aingsaha1.");

//     await page.click('#__next > div.login_wrapper__l2hBa > div > div.layout_card_form__hPnMM > div.login_login_form__5x5I_ > div.login_form_content__8xMKl > div.LoginForm_form__WssZE > div.LoginForm_form_text__rhGsM > button');

//     console.log("Berhasil Masuk Ke Halaman Web");

//     // await page.click('#__next');

//     // console.log("Berhasil Klik Select Ticket");
// })();
