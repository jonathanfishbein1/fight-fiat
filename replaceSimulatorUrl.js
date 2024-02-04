const {
    readFile
    , writeFile
} = require('fs')

readFile('./assets/js/binary.js', 'utf-8', (err, contents) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(process.argv[2])
    let replacementString
    if (process.argv[2] === 'develop')
        replacementString = 'https://simulator-mobile.starcada.io/"'
    else if (process.argv[2] === 'main-desktop')
        replacementString = 'https://simulator-desktop.starcada.io/"'
    else
        replacementString = 'https://simulator-mobile.starcada.io/"'
    const url = contents.match('("simUrl":)"([^A-Z\n]*)(,)')
    console.log('url ', url)
    const replaced = contents.replace(
        url[2],
        replacementString
    )
    
    writeFile('./assets/js/binary.js', replaced, 'utf-8', err =>
    {
        console.log(err)
    }
    )
})