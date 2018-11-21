
const Mock = require('mockjs')
module.exports = {
    // 'GET /api/users': { users: [1,2] },
    'GET /api/users': (req, res) => {res.status(200).json({users: Mock.mock({
        'email|10': [
            '@email'
        ]
        })
    }) 
    },
    
}