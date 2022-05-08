const checkApi = (req, res) => {
  res.status(200).json({
    message: '🚗 /api route 🚗',
  });
};

module.exports = {
  checkApi,
};
