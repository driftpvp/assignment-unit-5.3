console.log('***** Music Collection *****')
let collection = [];

function addToCollection(titleIn, artistIn, yearPublishedIn) {
    let albumInfo = {
        title: titleIn,
        artist: artistIn,
        yearPublished: yearPublishedIn,
    }
    collection.push (albumInfo);
    return albumInfo;
}

addToCollection( 'Ten' , 'Pearl Jam' , 1991 );
addToCollection( 'Nevermind' , 'Nirvana' , 1991 );
addToCollection( 'Superunknown' , 'Soundgarden' , 1994 );
addToCollection( 'Blood Sugar Sex Magik' , 'Red Hot Chili Peppers' , 1991 );
addToCollection( 'Dirt' , 'Alice in Chains' , 1992 );
addToCollection( 'Siamese Dream' , 'Smashing Pumpkins' , 1993 );

console.table(collection);


function showCollection (arrayInput) {
    console.log('Array length: ', collection.length);
    for (let i=0; i < collection.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist}, published: ${collection[i].yearPublished}`);
    }
}
showCollection();

function findByArtist(artist) {
    let band = [];
    for ( let i=0; i< collection.length; i++) {
        if (artist === collection[i].artist){
            band.push(collection[i])
        }
    }
    return band;
}

console.log(findByArtist('Nirvana'));
console.log(findByArtist('No Doubt'));