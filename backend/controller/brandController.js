import Brand from "../model/brand.js";

export const getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBrand = async (req, res) => {
  try {
    const id = req.params.id;
    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putBrand = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const brand = await Brand.findByIdAndUpdate(id, body, { new: true });

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    const id = req.params.id;

    const brand = await Brand.findByIdAndDelete(id);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json({
      message: "Brand deleted successfully",
      brand,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
