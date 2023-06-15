const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const userLinks = sequelize.define(
  "peserta",
  {
    // createdat: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   field: "createdat",
    //   defaultValue: Sequelize.fn("now"),
    // },
    // updatedat: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   field: "updatedat",
    //   defaultValue: Sequelize.fn("now"),
    // },
    nomorpendaftaran: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    namalengkap: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    nomorjulus: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    lajnah: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    namaarab: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    jeniskelamin: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    tempatlahir: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    tanggallahir: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statuspernikahan: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    riwayatpenyakit: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    nomorhp: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    nomorwa: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    alamatrumah: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    kodepos: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    namaprovinsi: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namakota: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namakecamatan: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namaayah: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namaayaharab: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namaibu: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namaibuarab: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namakakek: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    namakakekarab: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    nomorhportu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pekerjaanortu: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    penghasilanortu: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    sekolahsd: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    tahunlulussd: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sekolahsmp: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    tahunlulussmp: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    sekolahma: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tahunlulusma: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fotoijazah: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    fotoskl: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    fotoktp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statusbayar: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    jurusan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    berangkatmelalui: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opsiberangkatlainnya: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kolom4: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    kolom5: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    kolom6: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "peserta",
    timestamps: true,
    
  }
);

// const registLinks = new Registlinks();
module.exports = userLinks;
