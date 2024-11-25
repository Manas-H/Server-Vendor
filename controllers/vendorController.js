const Vendor = require("../models/Vendor"); // Assuming your model is in the models folder

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res
      .status(201)
      .json({ message: "Vendor created successfully", vendor: newVendor });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error creating vendor" });
  }
};

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching vendors" });
  }
};

// Get a single vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }
    res.status(200).json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching vendor" });
  }
};

// Update a vendor by ID
exports.updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the updated fields
    });

    if (!vendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    res.status(200).json({ message: "Vendor updated successfully", vendor });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error updating vendor" });
  }
};

// Delete a vendor by ID
exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting vendor" });
  }
};
