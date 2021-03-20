-- CreateTable
CREATE TABLE "Pengguna" (
    "id_pengguna" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "id_siswa" INTEGER NOT NULL,
    "id_guru" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id_siswa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nisn" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "no_tlp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "kewarganegaraan" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "pekerjaan_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Guru" (
    "id_guru" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nip" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "no_tlp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "ktp" TEXT NOT NULL,
    "kewarganegaraan" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "pekerjaan_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id_kelas" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "tahun_ajaran" TEXT NOT NULL,
    "id_guru" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Kelas_siswa" (
    "id_kelas_siswa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_siswa" INTEGER NOT NULL,
    "id_kelas" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Profile" (
    "id_profile" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bio" TEXT NOT NULL,
    "id_siswa" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "id_upload" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Upload" (
    "id_profile" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "id_siswa" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "id_upload" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Posting" (
    "id_posting" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "id_upload" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Comment" (
    "id_comment" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "id_posting" INTEGER NOT NULL,
    "id_upload" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Chatting_room" (
    "id_room" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "chatting_room_member" (
    "chatting_room_member" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_chatting_room" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "message" (
    "id_message" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "id_chatting_room" INTEGER NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Video_conference" (
    "id_video_conference" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kode_video" TEXT NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Conference_message" (
    "id_conference_message" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "id_pengguna" INTEGER NOT NULL,
    "id_video_conference" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Pengguna.username_unique" ON "Pengguna"("username");
