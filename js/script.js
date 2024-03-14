const form = document.querySelector('form');
const sex = document.querySelector('#sex');
const thn = document.querySelector('#thn');
const result = document.querySelector('#result')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const bb = parseInt(document.querySelector('#bb').value);
    const tb = parseInt(document.querySelector('#tb').value);

    // Rumus BMI
    const BMI = ((bb*10000)/(tb*tb)).toFixed(1); // tofixed = membulatkan string ke sejumlah desimal tertentu

    // Display BMI
    result.innerHTML = `<span>${BMI}</span>`;

    var tipe;
    var text;

    if(BMI>30.0){
        tipe = "obs"; // obesitas
        text = "Kegemukan (Obesitas)";
    } else if (BMI>=25.0 && BMI<=29.9){
        tipe = "ovw"; // overweight
        text = "Kelebihan berat badan";
    } else if (BMI>=18.5 && BMI<=24.9){
        tipe = "normal"; // normal
        text = "Normal (ideal)";
    } else { // 18.4 (kurang dari 18.5)
        tipe = "udw"; // underweight
        text = "Kekurangan berat badan";
    }
    
    // Display
    document.querySelector('#kategori').textContent = text;
    document.querySelector('#status').textContent = 'Bentuk tubuh Anda ' + text.toLowerCase();
    document.querySelector('#text-result').textContent = 'Hasil BMI ' + (tipe === 'udw' ? 'kurang dari 18.5.' : (tipe === 'normal' ? 'antara 18.5 - 24.9.' : (tipe === 'ovw' ? 'antara 25 - 29.9.' : 'lebih dari 29.9.')));
    document.querySelector('#saran').textContent = (tipe === 'udw' ? 'Anda berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makan-makanan yang kaya nutrisi seperti daging, ikan, telur, kacang-kacangan, susu, dan produk olahannya. Selain itu, Anda dapat makan lebih sering dengan porsi sedikit untuk meningkatkan asupan kalori harian. Jika diperlukan, Anda juga dapat minum suplemen nutrisi jika diperlukan, seperti protein shake atau minyak ikan. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.' : (tipe === 'normal' ? 'Anda berada dalam kategori berat badan normal. Walaupun berat badan anda sudah termasuk dalam kategori normal, tetapi anda diharapkan untuk tetap menjaga pola makan serta olahraga dengan secukupnya.' : (tipe === 'ovw' ? 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.' : 'Anda berada dalam kategori obesitas atau kegemukan. Anda harus memperhatikan pola makan dengan mengatur jumlah kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.')))
});