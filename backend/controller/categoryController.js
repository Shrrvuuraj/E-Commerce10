import Category from "../model/category.js";


export const createCategory = async (req, res) => {
  try {
    const body = req.body;
    const category = await Category.create(body);
    res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Failed",
      error: error.message,
    });
  }
};


export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Failed",
      error: error.message,
    });
  }
};


export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).json({
      success: true,
      message: `Category with id ${id} fetched successfully`,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Failed",
      error: error.message,
    });
  }
};


export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await Category.findByIdAndUpdate(id, body, { new: true });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).json({
      success: true,
      message: `Category with id ${id} updated successfully`,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Failed",
      error: error.message,
    });
  }
};


export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).json({
      success: true,
      message: `Category with id ${id} deleted successfully`,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Failed",
      error: error.message,
    });
  }
};
