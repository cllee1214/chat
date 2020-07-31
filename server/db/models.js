var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let models = {}

function upperCaseFrist(value) {
    return value.replace(/(\w)(.+)/, function(originStr, target, restStr) {
        return `${target.toUpperCase()}${restStr}`
    })
}

const config = {
    user: {
        user: {
            type: 'String',
            validate: {
                validator: function(value) {
                    return /[a-zA-Z]{1}[a-zA-Z0-9]{5,10}/.test(value)
                },
                message: '{VALUE}应为字符开头的6-10位的字母/数字'
            },
            required: [true, '请填写用户名']
        },
        pwd: {
            type: 'String',
            validate: {
                validator:  function(value) {
                    return /[0-9A-Za-z]{6,10}/.test(value)
                },
                message: '密码应为6-10位的数字/字母'
            }
           
        },
        nickname: {
            type: 'String',
            minlength: 1,
            maxlength: 10
        },
        avatar: 'string',
        declaration: 'string',
        friends: [{}],
        groups: [{}]
    }
}

for (let k in config) {
    models[k] = mongoose.model(upperCaseFrist(k), new Schema(config[k]))
}

module.exports = models