module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          username: String,
          name: String,
          surname: String,
          email: String,
          status: Boolean
        },
        { timestamps: true }
      )
    );
  
    return User;
  };