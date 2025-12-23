# Script untuk cek typo antara nama file di folder vs expected dari slugify

# Slugify function (sama kayak di WisataData.js)
function Get-Slugified {
    param([string]$text)
    
    $result = $text.ToLower()
    $result = $result -replace '\s+', '-'
    $result = $result -replace '[^\w\-]+', ''
    $result = $result -replace '\-\-+', '-'
    $result = $result.Trim()
    
    return $result
}

# Daftar nama wisata dari WisataData.js
$destinationNames = @(
    "Kawah Putih", "Tangkuban Perahu", "Pantai Pangandaran", "Situ Patenggang",
    "Curug Cimahi", "Gunung Papandayan", "Pantai Santolo", "Stone Garden",
    "Saung Angklung Udjo", "Alun-Alun Bandung", "Candi Borobudur", "Candi Prambanan",
    "Keraton Yogyakarta", "Taman Sari", "Pantai Parangtritis", "Pantai Indrayanti",
    "Goa Pindul", "Hutan Pinus Mangunan", "Tebing Breksi", "Malioboro",
    "Lawang Sewu", "Dieng Plateau", "Umbul Ponggok", "Pantai Menganti",
    "Candi Gedong Songo", "Brown Canyon", "Bukit Sikunir", "Keraton Surakarta",
    "Museum Sangiran", "Alun-Alun Kidul Solo", "Gunung Bromo", "Kawah Ijen",
    "Pantai Papuma", "Tumpak Sewu", "Museum Angkut", "Jatim Park 1",
    "Pantai Klayar", "Candi Penataran", "Makam Sunan Ampel", "Alun-Alun Kota Batu",
    "Monas", "Museum Nasional", "Kota Tua Jakarta", "Pantai Ancol",
    "Dufan", "TMII", "Ragunan", "Hutan Kota GBK",
    "Jakarta Aquarium", "Pulau Tidung", "Pantai Anyer", "Pantai Carita",
    "Pantai Tanjung Lesung", "Pantai Sawarna", "Ujung Kulon", "Baduy Luar",
    "Masjid Banten Lama", "Keraton Kaibon", "Pantai Bagedur", "Ocean Park BSD",
    "Pantai Senggigi", "Pantai Kuta Mandalika", "Gili Trawangan", "Gili Air",
    "Gunung Rinjani", "Air Terjun Sendang Gila", "Bukit Pergasingan", "Desa Sade",
    "Pura Lingsar", "Pulau Moyo", "Masjid Raya Baiturrahman", "Museum Tsunami Aceh",
    "Pantai Lampuuk", "Pantai Lhoknga", "Pulau Weh", "Pantai Iboih",
    "Danau Laut Tawar", "Air Terjun Suhom", "Benteng Indra Patra", "Tugu KM Nol",
    "Taman Nasional Komodo", "Pulau Padar", "Pink Beach", "Danau Kelimutu",
    "Pantai Lasiana", "Bukit Cinta", "Pulau Kanawa", "Goa Rangko",
    "Pantai Kolbano", "Kampung Adat Bena", "Pantai Panjang", "Benteng Marlborough",
    "Danau Dendam Tak Sudah", "Pantai Tapak Paderi", "Air Terjun Curug Embun", "Pantai Sungai Suci",
    "Bukit Kandis", "Danau Mas Harun Bastari", "Rumah Pengasingan Bung Karno", "Pantai Jakat",
    "Pantai Olele", "Benteng Otanaha", "Pulau Saronde", "Pantai Botutonuo",
    "Danau Limboto", "Bukit Layang", "Pulau Cinta", "Pantai Ratu",
    "Air Terjun Taludaa", "Museum Purbakala Gorontalo", "Pantai Manakarra", "Pulau Karampuang",
    "Pantai Dato", "Air Terjun Limbong Kamandang", "Pegunungan Quarles", "Danau Tanralili",
    "Pantai Palippis", "Pulau Gusung Toraja", "Air Terjun Tamasapi", "Pantai Malunda",
    "Pantai Kuta", "Pantai Sanur", "Pantai Pandawa", "Pantai Melasti",
    "Pura Besakih", "Pura Tanah Lot", "Tegallalang Rice Terrace", "Air Terjun Tegenungan",
    "Monkey Forest", "Nusa Penida", "Pulau Bokori", "Pantai Nambo",
    "Pulau Labengki", "Pulau Sombori", "Pantai Toronipa", "Danau Biru Napabale",
    "Benteng Keraton Buton", "Pantai Lakeba", "Air Terjun Moramo", "Pulau Hoga",
    "Danau Poso", "Air Terjun Saluopa", "Pantai Tanjung Karang", "Pantai Talise",
    "Danau Tambing", "Lembah Bada", "Pantai Pusat Laut", "Air Terjun Wera",
    "Pulau Togean", "Pantai Malino", "Bunaken", "Pantai Malalayang",
    "Pulau Siladen", "Danau Tondano", "Gunung Lokon", "Bukit Kasih Kanonang",
    "Pantai Paal", "Pulau Lihaga", "Taman Laut Tumbak", "Museum Negeri Sulut",
    "Pantai Losari", "Benteng Rotterdam", "Pantai Tanjung Bira", "Pulau Samalona",
    "Pulau Kodingareng Keke", "Rammang-Rammang", "Taman Nasional Bantimurung", "Toraja Land",
    "Kuburan Batu Lemo", "Pantai Akkarena", "Danau Gunung Tujuh", "Gunung Kerinci",
    "Taman Nasional Kerinci Seblat", "Candi Muaro Jambi", "Danau Sipin", "Jembatan Gentala Arasy",
    "Air Terjun Telun Berasap", "Bukit Khayangan", "Museum Negeri Jambi", "Hutan Pinus Jantho",
    "Pantai Mutun", "Pantai Pahawang", "Pantai Sari Ringgung", "Taman Nasional Way Kambas",
    "Bukit Sakura Kemiling", "Danau Ranau", "Pantai Tanjung Setia", "Pulau Tangkil",
    "Museum Lampung", "Pantai Duta Wisata", "Pantai Natsepa", "Pantai Liang",
    "Pulau Pombo", "Pulau Ora", "Gunung Binaiya", "Benteng Amsterdam",
    "Benteng Victoria", "Danau Rana", "Pantai Pintu Kota", "Museum Siwalima",
    "Pantai Trikora", "Pulau Penyengat", "Pantai Lagoi", "Pulau Beralas Pasir",
    "Pantai Nongsa", "Jembatan Barelang", "Pantai Melayu", "Pulau Abang",
    "Bukit Senyum", "Museum Raja Ali Haji", "Pantai Tanjung Tinggi", "Pantai Tanjung Kelayang",
    "Pulau Lengkuas", "Danau Kaolin", "Pantai Parai Tenggiri", "Bukit Menumbing",
    "Pantai Tikus Emas", "Museum Timah Indonesia", "Pantai Batu Bedaun", "Pantai Rambak",
    "Danau Sentarum", "Pantai Temajuk", "Tugu Khatulistiwa", "Istana Kadriah",
    "Gunung Palung", "Taman Nasional Tanjung Puting", "Bukit Tangkiling", "Danau Tahai",
    "Rumah Betang", "Sungai Kahayan", "Derawan", "Pulau Kakaban",
    "Danau Labuan Cermin", "Pantai Lamaru", "Museum Mulawarman", "Pantai Amal",
    "Hutan Mangrove Tarakan", "Air Terjun Gunung Rian", "Gunung Putih", "Museum Kesultanan Bulungan",
    "Pasar Terapung Lok Baintan", "Gunung Meratus", "Pulau Samber Gelap", "Pantai Angsana",
    "Museum Wasaka", "Bukit Kaba", "Taman Wisata Mangrove Bhadrika",
    "Benteng Tolukko", "Danau Tolire Besar", "Pantai Sulamadaha", "Gunung Gamalama",
    "Pulau Maitara", "Benteng Oranje", "Pantai Jikomalamo", "Danau Tolire Kecil",
    "Pulau Dodola", "Museum Kedaton Sultan Ternate", "Pantai Base-G", "Danau Sentani",
    "Bukit Teletubbies", "Museum Loka Budaya", "Pantai Hamadi", "Pantai Pasir Putih",
    "Pulau Mansinam", "Danau Anggi Giji", "Pegunungan Arfak", "Pantai Bakaro",
    "Pantai Tanjung Kasuari", "Hutan Mangrove Klawalu", "Pantai Saoka", "Pulau Doom",
    "Pantai Mailan Makbon", "Lembah Baliem", "Festival Lembah Baliem", "Gunung Trikora",
    "Desa Wisata Wamena", "Bukit Habema", "Pantai Lampu Satu", "Taman Nasional Wasur",
    "Monumen Kapsul Waktu", "Pantai Payum", "Rawa Biru", "Pantai Deiyai",
    "Danau Tigi", "Bukit Kamu", "Danau Paniai", "Desa Adat Mee",
    "Istana Siak Sri Indrapura", "Danau Raja", "Air Terjun Batang Koban", "Pantai Selat Baru",
    "Taman Rekreasi Alam Mayang", "Pantai Losari", "Benteng Rotterdam", "Tana Toraja", 
    "Pantai Bira", "Air Terjun Bantimurung", "Danau Poso", "Pantai Tanjung Karang",
    "Air Terjun Saluopa", "Pulau Dua", "Museum Sulawesi Tengah", "Pulau Labengki",
    "Pulau Bokori", "Pantai Nambo", "Air Terjun Moramo", "Benteng Keraton Buton",
    "Taman Nasional Bunaken", "Pantai Malalayang", "Danau Tondano", "Bukit Kasih Kanonang",
    "Pulau Siladen", "Jembatan Ampera", "Benteng Kuto Besak", "Pulau Kemaro",
    "Danau Ranau", "Air Terjun Bidadari", "Danau Toba", "Pulau Samosir",
    "Air Terjun Sipiso-piso", "Istana Maimun", "Pantai Pandan"
)

Write-Host "🔍 Checking for typos between actual files and expected names..." -ForegroundColor Cyan
Write-Host ""

# Get actual files
$actualFiles = Get-ChildItem "public\images" -Filter "*.jpg" | Select-Object -ExpandProperty Name

Write-Host "📁 Found $($actualFiles.Count) .jpg files in public\images\" -ForegroundColor Green
Write-Host ""

# Check each destination
$typos = @()
$missing = @()
$found = 0

foreach ($name in $destinationNames) {
    $expectedFile = "$(Get-Slugified $name).jpg"
    
    if ($actualFiles -contains $expectedFile) {
        $found++
    } else {
        # Find similar files (possible typos)
        $slugBase = (Get-Slugified $name).Substring(0, [Math]::Min(10, (Get-Slugified $name).Length))
        $similar = $actualFiles | Where-Object { $_ -like "*$slugBase*" }
        
        if ($similar) {
            $typos += [PSCustomObject]@{
                Destination = $name
                Expected = $expectedFile
                Actual = $similar -join ", "
            }
        } else {
            $missing += [PSCustomObject]@{
                Destination = $name
                Expected = $expectedFile
            }
        }
    }
}

Write-Host "📊 SUMMARY:" -ForegroundColor Yellow
Write-Host "  ✅ Found & Match: $found files" -ForegroundColor Green
Write-Host "  ⚠️  Possible Typos: $($typos.Count) files" -ForegroundColor Yellow
Write-Host "  ❌ Completely Missing: $($missing.Count) files" -ForegroundColor Red
Write-Host ""

if ($typos.Count -gt 0) {
    Write-Host "⚠️  POSSIBLE TYPOS (file hampir sama tapi beda dikit):" -ForegroundColor Yellow
    Write-Host "=" * 100
    $typos | Format-Table -AutoSize -Wrap
    
    Write-Host ""
    Write-Host "💡 FIX: Rename file 'Actual' jadi 'Expected'" -ForegroundColor Cyan
}

if ($missing.Count -gt 0 -and $missing.Count -le 20) {
    Write-Host ""
    Write-Host "❌ COMPLETELY MISSING FILES:" -ForegroundColor Red
    Write-Host "=" * 100
    $missing | Format-Table -AutoSize
    
    Write-Host ""
    Write-Host "💡 FIX: File ini ga ada sama sekali, mungkin lupa upload atau nama destinasi salah" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🚀 CARA RENAME:" -ForegroundColor Green
Write-Host "   Di PowerShell, dari folder public\images:" -ForegroundColor Gray
Write-Host '   Rename-Item "nama-lama.jpg" "nama-baru.jpg"' -ForegroundColor Gray
