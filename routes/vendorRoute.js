const express = require("express");
const router = express.Router();
const VendorController = require("../controllers/vendorController");

// POST: Create a new vendor
router.post("/vendors", VendorController.createVendor);

// GET: Get all vendors
router.get("/vendors", VendorController.getAllVendors);

// GET: Get a single vendor by ID
router.get("/vendors/:id", VendorController.getVendorById);

// PUT: Update a vendor by ID
router.put("/vendors/:id", VendorController.updateVendor);

// DELETE: Delete a vendor by ID
router.delete("/vendors/:id", VendorController.deleteVendor);

module.exports = router;
