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
        replacementString = 'colossal-park-low.on-fleek.app/'
    else if (process.argv[2] === 'main-desktop')
        replacementString = 'loud-forest-shallow.on-fleek.app/'
    else
        replacementString = 'https://early-lizard-shrilling.on-fleek.app/'

    const replaced = contents.replace(
        'https://trg-arcade.userpxt.io/v1.12.46/---simulator',
        replacementString
    )
    
    writeFile('./assets/js/binary.js', replaced, 'utf-8', err =>
    {
        console.log(err)
    }
    )
})