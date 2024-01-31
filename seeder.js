const mongoose = require('mongoose');
const Product = require('./app/models/index').products; // Sesuaikan dengan path yang benar

// Data yang akan di-insert
const productsToInsert = [
  {
    code: 'P001',
    name: 'Product 1',
    price: 19.99,
    description: 'Description of Product 1',
    imageUrl: 'https://example.com/product1.jpg',
    averageRating: 4.5,
  },
  {
    code: 'P002',
    name: 'Product 2',
    price: 29.99,
    description: 'Description of Product 2',
    imageUrl: 'https://example.com/product2.jpg',
    averageRating: 3.8,
  },
  // tambahkan data lain sesuai kebutuhan
];

// Fungsi untuk insert many
async function seedDatabase() {
  try {
    // Buat koneksi ke MongoDB
    await mongoose.connect(process.env.MONGODB_ADDON_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: process.env.MONGODB_ADDON_USER,
      pass: process.env.MONGODB_ADDON_PASSWORD,
      dbName: process.env.MONGODB_ADDON_DB,
    });

    // Hapus semua data yang ada sebelumnya (opsional)
    await Product.deleteMany();

    // Insert data baru
    await Product.insertMany(productsToInsert);

    console.log('Seeder berhasil dijalankan');
  } catch (error) {
    console.error('Seeder gagal:', error);
  } finally {
    // Tutup koneksi setelah selesai
    await mongoose.connection.close();
  }
}

// Jalankan seeder
seedDatabase();
