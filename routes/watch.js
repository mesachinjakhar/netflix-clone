const express = require('express');
const router = express.Router();


// Route to render the video page
router.get('/', (req, res) => {
  const videoUrl = 'https://cloneprojects.blob.core.windows.net/netflix/Netflix%20New%20Logo%20Animation%202019.mp4';
  res.render('watch', { videoUrl });
});

module.exports = router;
