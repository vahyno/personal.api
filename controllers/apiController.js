// controllers/apiController.js
function index(req, res) {
  res.json({
    message: 'Welcome to Touch of Grey!',
    // documentation_url: '#',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
