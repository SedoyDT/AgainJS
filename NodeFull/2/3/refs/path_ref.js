const path = require('path')

console.log(__filename) // аюсолютный путь 
console.log(path.basename(__filename)) // имя файла
console.log(path.dirname(__filename)) // адрес папки с файлом
console.log(path.extname(__filename)) // расширение данного файла 

console.log(path.parse(__filename))  // выведет объект { root: 'D:\\',
                                      // dir:  'D:\\Projects-Folder\\september\\againjs\\nodefull\\2\\3\\refs',
                                         // base: 'path_ref.js',
                                          // ext: '.js',
                                             // name: 'path_ref' }

 console.log(path.join(__dirname, 'test', 'second.html'))
// console.log(path.resolve(__dirname, './test', '/second.html'))