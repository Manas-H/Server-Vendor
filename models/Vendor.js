const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  criticality: { type: String, required: true },
  status: { type: String, required: true },
  primaryContactName: String,
  primaryContactEmail: String,
  primaryContactPhone: String,
  companyRegistrationNumber: String,
  taxId: String,
  yearEstablished: String,
  servicesProvided: [String],
  contractStartDate: Date,
  contractEndDate: Date,
  annualRevenue: String,
  paymentTerms: String,
  complianceCertifications: [String],
  insuranceCoverage: String,
  onTimeDeliveryRate: String,
  qualityScore: String,
  notes: String,
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
