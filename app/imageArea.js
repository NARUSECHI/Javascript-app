window.addEventListener('DOMContentLoaded', e => {
    const elImgA = document.querySelector('#imageArea');
    const elNoView = document.querySelector('noView');
    const elFile = document.querySelector('#file');

    const canvas = document.querySelector('#view');
    const context = canvas.getContext('2d');

    elImgA.addEventListener('dragover',e => {
        e.preventDefault();
    });
    elImgA.addEventListener('dragleave', e => {
        e.preventDefault();
    });
    // move file from user to browser
    elImgA.addEventListener('drop', e => {
        e.preventDefault();
        uiReadImage(e.dataTransfer.files[0]);
    });

    elImgA.addEventListener('click', e => {
        elFile.click();
    });
    elFile.addEventListener('change', e => {
        uiReadImage(e.target.files[0]);
    });

    //function

    async function uiReadImage(file){
        try {
            const dtURL = await uiReadImage(file);
            await drawImage(dtURL, canvas, context);
        }catch(e) {
            return;
        }
    }

})