const { User, Thought } = require('../models');

module.exports = {
  // Get all Users
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => 
        res.status(500).json(err));  
  },
  // Get a single User
  getSingleUser(req, res) {
    console.log("test");
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .populate("thoughts")
    .populate("friends")
    .then(user =>
        !user
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(user))

      .catch((err) => { 
        console.log(err);
        res.status(500).json(err)
      });

  },
  // create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a User
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  

 deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such User exists' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
              .then(() => res.json({ message: 'User deleted' }))
      )
      .catch((err) => res.status(500).json(err));
  },


  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

 deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
