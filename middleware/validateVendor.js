const validateVendor = (req, res, next) => {
  const { name, type, criticality, status } = req.body;
  if (!name || !type || !criticality || !status) {
    return res.status(400).json({ error: "Required fields are missing" });
  }
  next();
};

module.exports = validateVendor;
