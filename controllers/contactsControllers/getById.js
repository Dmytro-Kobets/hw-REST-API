exports.getById = async (req, res) => {
  const { contact } = req;

  res.status(200).json({
    contact,
  });
};
