const Hall =
  require("../models/Hall");

exports.getHalls = async (
  req,
  res
) => {
  const halls =
    await Hall.find();

  res.json(halls);
};

exports.addHall = async (
  req,
  res
) => {
  try {
    const hall =
      await Hall.create(
        req.body
      );

    res.status(201).json(hall);
  } catch (error) {
    res.status(500).json(error);
  }
};