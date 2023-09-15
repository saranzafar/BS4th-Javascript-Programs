const fs = require('fs');
const replaceThis = 'harry'
const replaceWith = 'john'
const preview = false
try {
    fs.readdir('data', (err, data) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i]
            let newFile = 'data/' + item.replaceAll(replaceThis, replaceWith)
            if (!preview) {
                fs.rename('data/' + item, newFile, () => {
                    console.log('Rename Success');
                });

            }
            else {
                if ('data/' + item !== newFile) {
                    console.log('data/' + item + ' Will be renamed to', newFile);
                }
            }
        }
    })
} catch (err) {
    console.error(err);
}
