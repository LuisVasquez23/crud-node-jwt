const User = require('./user');
const Post = require('./post');

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Post };
