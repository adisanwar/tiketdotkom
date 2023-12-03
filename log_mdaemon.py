import time
import asyncio
from telegram import Bot

# Fungsi untuk membaca file log MDaemon
def read_log_file(file_path):
    try:
        with open(file_path, 'r') as file:
            log_content = file.read()
            return log_content
    except FileNotFoundError:
        return "File log tidak ditemukan"
    except Exception as e:
        return f"Terjadi kesalahan: {str(e)}"

# Fungsi untuk mengirim pesan ke bot Telegram
async def send_telegram_message(bot_token, chat_id, message):
    bot = Bot(token=bot_token)
    await bot.send_message(chat_id=chat_id, text=message)  # Menggunakan await di sini

if __name__ == "__main__":
    # Token bot Telegram Anda
    bot_token = '6928082358:AAFSUlaqzZTj8IHhRrDohNa4bVyvnafVp68'
    
    # ID obrolan (chat) tempat Anda ingin mengirim log
    chat_id = '6928082358'

    # Path file log MDaemon
    log_file_path = 'D:/log_coba.log'  # Gunakan forward slash (/) untuk path

    # Menjalankan loop secara asinkron untuk pengiriman pesan
    async def send_log_periodically():
        while True:
            # Membaca log dari MDaemon setiap detik
            log_content = read_log_file(log_file_path)

            # Mengirim log ke bot Telegram
            await send_telegram_message(bot_token, chat_id, log_content)

            # Menunggu 1 detik sebelum membaca log lagi
            await asyncio.sleep(1)

    # Menjalankan loop secara asinkron
    asyncio.run(send_log_periodically())
