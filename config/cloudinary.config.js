
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'MenuGenerator',
    format: async (req, file) => {
       'jpg', 'png'
    }, 
    public_id: (req, file) => (
      new Date().toISOString().replace(/:/g, "-") + file.originalname
    ),
  },
});

const fileParser = multer({ storage });
module.exports = fileParser;