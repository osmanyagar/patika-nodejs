const bookslist = [
    {id:0,name:"The Neverending Story",author:"Michael Ende"},
    {id:1,name:"Villette",author:"Charlotte Brontë"}
]

const getBooksList = (_case) => {
    return new Promise((resolve,reject)=>{
       if(_case){
            bookslist.map((book) => console.log(`ID: ${book.id} | Kitap Yazarı: ${book.author}  | Kitap İsmi: ${book.name} `))
            resolve("--Yeni Kitap Eklendi!");
        }else{
           reject("Kitaplar Gösterilemiyor!");
        };
    });
};

const setBooksList = (data, _case) =>{
    return new Promise((resolve,reject) =>{
        if(_case){
            bookslist.push(data);
             resolve("Yeni Kitap Eklendi!");
        }else{
            reject("Yeni Kitap Eklenemedi!");
        };
    });
};

async function bookslistOp(){
    try{
        await setBooksList({id:3,name:"The Master and Margarita",author:"Mikhail Bulgakov"},true);
        await getBooksList(true);
        
    }catch(err){
        console.log(err)
    }
}
bookslistOp();