let fs = require('fs');
const { exit } = require('process');
const ncp = require('ncp').ncp;
var SRC_PATH = __dirname + '/../../@ros-cdk/services';
var GENERATED_PATH = './generatedPackages';

main();

function main() {
    if(!fs.existsSync(SRC_PATH)) {
        console.log(`No related folder was found for cdk core lib.\n 
            You can find the 'generatedFiles' in current folder.`);
        exit();
    }
    deleteRelatedFolders(SRC_PATH);
    copyRelatedFolders(GENERATED_PATH);
}

function deleteRelatedFolders(path){
    let arr = fs.readdirSync(path);
    let not_empty = false
    for(let i in arr){
        let stats = fs.statSync(path + '/' + arr[i]);
        if (arr[i] === 'node_modules') {
            not_empty = true
            continue;
        }
        if(stats.isFile()){
            fs.unlinkSync(path + '/' + arr[i]);
        } else{
            if (deleteRelatedFolders(path + '/' + arr[i])) {
                not_empty = true
            }
        }
    }
    if(!not_empty && path !== SRC_PATH)
        fs.rmdirSync(path);
    return not_empty
}

function copyRelatedFolders(path){
    let arr = fs.readdirSync(path);
    for(let i in arr){
        ncp(path + '/' + arr[i], SRC_PATH + '/' + arr[i],function (err) {
            if (err) {
                return console.error(err);
            }
        });
    }
    console.log('Copy all resources files successfully!');
}



