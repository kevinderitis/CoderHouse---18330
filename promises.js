const fs = require('fs');

async function readFile(){
    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf-8');
        const infoData = JSON.parse(contenido).contenidoObj;
        const info = {
            name: infoData.name,
            version: infoData.version,
            description: infoData.description,
            main: infoData.main,
            scripts: infoData.scripts,
            keywords: infoData.keywords,
            author: infoData.author,
            license: infoData.license
        }

        console.log(info);
        info.author = 'CoderHouse';
        console.log(info);
    } catch (error) {
        console.log(error);
    }
}

readFile();