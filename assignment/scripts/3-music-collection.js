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

function showCollection ([]) {
    let result = "";
    console.log([].length);
    for (let i = 1; i < [].length; i++) {
        result += [i];
       }
    return result;
}
showCollection(collection, `${addToCollection.title} ', by ' ${addToCollection.artist} ", pulished in " ${addToCollection.yearPublished}`);


function findByArtist(artist) {
    let string = '';
    for (let i = 1; i < collection.length; i++) {
        string = collection [i] + artist; 
    }
    return string;
}
console.log(findByArtist('Nirvana'));