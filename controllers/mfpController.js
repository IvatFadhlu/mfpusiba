const Madinatulfusha = require("../models/mfp");

class mfpController {
  static showMfp(req, res) {
    res.render("dataMF");
  }

  static async cariNomor(req, res) {
    try {
      const { nomorjulus } = req.query; // Mendapatkan nomor julus dari query parameter
      let dataMF;

      if (nomorjulus) {
        dataMF = await Madinatulfusha.findAll({
          where: { nomorjulus: nomorjulus },
        }); // Mengambil data pengguna berdasarkan nomor julus
      } else {
        dataMF = await Madinatulfusha.findAll(); // Jika nomor julus tidak ada, ambil semua data pengguna
      }

      res.render("dataMF", {
        data: dataMF.map((mf) => mf.toJSON()),
      });
    } catch (error) {
      console.error("Error occurred", error);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

module.exports = mfpController;
