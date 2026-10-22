
document.addEventListener("DOMContentLoaded", function () {

    // Nomor WhatsApp bengkel
    const nomorWhatsApp = "6288983492771";

    // Tombol WhatsApp mengambang
    const tombolWhatsApp = document.querySelector(".whatsapp-float");

    if (tombolWhatsApp) {
        tombolWhatsApp.href =
            `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
                "Halo, saya ingin bertanya mengenai layanan bengkel."
            )}`;

        tombolWhatsApp.target = "_blank";
    }

    // Status jam operasional bengkel
    const sekarang = new Date();
    const hari = sekarang.getDay();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();

    const waktuSekarang = jam * 60 + menit;
    const jamBuka = 8 * 60;
    const jamTutup = 16 * 60 + 30;

    let statusBengkel;

    if (hari === 5){
        statusBengkel = "Bengkel sedang tutup";
    } else if (waktuSekarang >= jamBuka && waktuSekarang < jamTutup){
        statusBengkel = "Bengkel sedang buka";
    } else {
        statusBengkel = "Bengkel sedang tutup";
    }

    // Tampilkan status bengkel
    const jamOperasional = document.querySelector(
        ".contact-item:nth-child(4) p"
    );

    if (jamOperasional) {
        jamOperasional.innerHTML =
            "Senin - Kamis, Sabtu - Minggu Pkl. 08.00 - 16.30<br>" + "Jum'at tutup<br><strong>" + statusBengkel + "</strong>";
    }

});
