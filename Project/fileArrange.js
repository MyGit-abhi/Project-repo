let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

//console.log(folderPath);


let folderExist = fs.existsSync(folderPath);

let Module = {
   Audio:[".mp3"],
   video:[".mp4"],
   Document:[".doc",".slxs",".pdf",".txt"], 
   Image:[".jpeg",".jpg",".png",".gif"],
   Software:[".exe"],

};

if(folderExist){
//console.log("folder path is valid");
let files = fs.readdirSync(folderPath);
for(let i=0; i<files.length; i++){
    let ext = path.extname(files[i]) // this is to get the extesion of the file 
    let nameOfFolder = giveFolderName(ext); // this is a function actually which call here
    
    let pathOfFolder = path.join(folderPath,nameOfFolder);
    let exist = fs.existsSync(pathOfFolder);
    if(exist){
        moveFile(folderPath,pathOfFolder,files[i]);
    }else{
        fs.mkdirSync(pathOfFolder) // if not created then create here 
        moveFile(folderPath,pathOfFolder,files[i]);
    }
}
    
}else{
    console.log("folder path is not valid!!!");
}

// create a function which we call in above of code

function giveFolderName(ext){
    for(let key in Module){ // here for each loop is applying 
   let extArr = Module[key];
   for(let i=0; i<extArr.length; i++){
       if(extArr[i] == ext){
      return key;
       }
   }
    }
    return 'others' 
}

// now we are creating a function here for moving the file from source folder to destination

function moveFile(folderPath, pathOfFolder, fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath); // copy file from source to destination
    fs.unlinkSync(sourcePath) // remove file from source folder
}


//Now the files in download folder is not arranged in organized manner but after creating this the file organixed in respective ext folder let us see 


// Thanks for watching the video