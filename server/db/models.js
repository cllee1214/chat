var mongoose = require('./connect.js').mongoose;
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
                    return /[a-zA-Z]{1}[a-zA-Z0-9]{2,10}/.test(value)
                },
                message: '用户名应为字符开头的3-10位的字母/数字'
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
            },
            required: [true, '请填写密码']
        },
        nickname: {
            type: 'String',
            minlength: 0,
            maxlength: 10
        },
        avatar: 'string',
        declaration: 'string',
        friends: [{}],
        groups: [{}]
    },
    group: {
        name: {
            type: 'String',
            minlength: 0,
            maxlength: 10
        },
        needValidate: 'Boolean',
        createBy: 'String',
        users:[{}],
        id: 'string'
    }
}

for (let k in config) {
    models[k] = mongoose.model(upperCaseFrist(k), new Schema(config[k]))
}

module.exports = models