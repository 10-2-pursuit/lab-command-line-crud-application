//Lifted read/write from json lab becuase it applies to this one
const {
    writeFileSync,
    readFileSync,
} = require("node:fs")

function writeJSON(path,fileName,data){
    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`,data,{encoding: "utf-8"})
}

function readJSON(path, fileName) {
    const list = readfileSync(`./${path}/${fileName}`, "utf8")
    return list ? JSON.parse(list) : []
}

module.exports = {
    writeJSON,
    readJSON
}