// Database sederhana berbasis array (data hilang saat aplikasi dihentikan).
const database = {
  users: [],

  tambahUser(nama, email) {
    const user = { id: this.users.length + 1, nama, email };
    this.users.push(user);
    return user;
  },

  semuaUser() {
    return this.users;
  },

  cariUser(id) {
    return this.users.find((user) => user.id === id);
  },

  ubahUser(id, data) {
    const user = this.cariUser(id);
    if (!user) return null;

    Object.assign(user, data);
    return user;
  },

  hapusUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  },
};

// Contoh penggunaan
database.tambahUser('Andi', 'andi@email.com');
database.tambahUser('Siti', 'siti@email.com');
console.log(database.semuaUser());

module.exports = database;