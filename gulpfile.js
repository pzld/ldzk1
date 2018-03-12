var gulp = require('gulp');
var webserver = require('gulp-webserver')
gulp.task('mockServer', function() {
    gulp.src('.')
        .pipe(webserver({
            prot: 8888,
            middleware: function(req, res, next) {
                res.setHeader('content-type', 'apllication/json;charset=utf-8');
                var data = [{
                    'img': 'img/1.jpg',
                    'name': '德圣苑',
                    'pri': '￥2200 <span>可月付</span>',
                    'p': '7户 丨 朝东-次卧 丨 15M²',
                    'add': '浦东-北蔡',
                    'sub': ['新上架', '独卫', '独立厨房'],
                    'time': '今日上架',
                    'pj': ['img/heart.jpg', 'img/heart.jpg', 'img/heart.jpg', 'img/heart.jpg', 'img/heart-h.jpg'],
                    'score': '4.6分'
                }, {
                    'img': 'img/2.jpg',
                    'name': '德圣苑',
                    'pri': '￥2200 <span>可月付</span>',
                    'p': '7户 丨 朝东-次卧 丨 15M²',
                    'add': '浦东-北蔡',
                    'sub': ['新上架', '独卫', '独立厨房'],
                    'time': '今日上架',
                    'pj': ['img/heart.jpg', 'img/heart.jpg', 'img/heart.jpg', 'img/heart.jpg', 'img/heart-h.jpg'],
                    'score': '4.6分'
                }, {
                    'img': 'img/3.jpg',
                    'name': '德圣苑',
                    'pri': '￥2200 <span>可月付</span>',
                    'p': '7户 丨 朝东-次卧 丨 15M²',
                    'add': '浦东-北蔡',
                    'sub': ['新上架', '独卫', '独立厨房'],
                    'time': '今日上架',
                    'pj': ['img/heart.jpg', 'img/heart.jpg', 'img/heart.jpg', 'img/heart.jpg', 'img/heart-h.jpg'],
                    'score': '4.6分'
                }]
                res.end(JSON.stringify(data))
            }
        }))
})