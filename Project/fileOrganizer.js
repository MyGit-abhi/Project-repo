// let fs = require("fs");
// let path = require("path");
// let folderPath = process.argv[2];

// //console.log(folderPath);


// let folderExist  = fs.existsSync(folderPath);

// let Module = {
//     Audio:[".mp3"],
//     video:[".mp4"],
//     Document:[".doc",".slxs",".pdf",".txt"],
//     Image:[".jpeg",".jpg",".png",".gif"],
//     Software:[".exe"]
// };


// if(folderExist){
//  //   console.log("folder path is valid")
//    let files = fs.readdirSync(folderPath);
//    for(let i=0; i<files.length;i++){
//     let ext = path.extname(files[i]);
//     let nameOfFolder = giveFolderName(ext); // this is a function actually which we call
//     //console.log("Ext--",ext,"Folder--",nameOfFolder);
//     let pathOfFolder = path.join(folderPath,nameOfFolder);
//     let exist = fs.existsSync(pathOfFolder);
//     if(exist){
//         moveFile(folderPath,pathOfFolder,files[i]);
//     }else{
//         fs.mkdirSync(pathOfFolder);
//         moveFile(folderPath,pathOfFolder,files[i]);
//     }
   
//    }

// }
// else{
//     console.log("Please give the valid path!!!!");
// }



//      function giveFolderName(ext){

//     for(let key in Module){
//         let extArr = Module[key];
//         for(let i=0; i<extArr.length; i++){
//             if(extArr[i] == ext){
//                 return key;
//             }
//         }
//     }
//     return 'others'

// }

// function moveFile(folderPath,pathOfFolder,fileName){
//     let sourcePath = path.join(folderPath,fileName);
//     let destinationPath = path.join(pathOfFolder,fileName);
//     fs.copyFileSync(sourcePath,destinationPath);
//     fs.unlinkSync(sourcePath);
// }