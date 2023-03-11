function bookPurchasing(buku, diskon, pajak)
{
    let hasil = 0;
    if(buku && buku.harga)
    {
        const harga = buku.harga;
        const totalDiskon = harga *(diskon/100);
        const hargaSetelahDiskon = harga - totalDiskon;
        const Tpajak = hargaSetelahDiskon * (pajak/100);
        const hargaSetelahPajak = hargaSetelahDiskon - Tpajak;
        

        console.group();
        console.log('Harga Buku : RP.', harga);
        console.log(`Presentase Diskon : `, diskon,'%');
        console.log('Presentase Pajak : ', pajak,'%');
        console.log('Harga Setelah Diskon : Rp.', hargaSetelahDiskon);
        console.log(`Harga Pajak : Rp. `, Tpajak);
        console.log('Total Setelah Pajak : Rp.', hargaSetelahPajak);

        console.groupEnd();

    }
    return hasil;
}
bookPurchasing(
    {
        judul : 'Teras Rumah', 
        harga : "200000",
        printing_status: false
    },
        30,                   // diskon
        4                    // pajak
);