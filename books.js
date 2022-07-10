
const books={
    "GameOfThrones":"The plot, at its most basic, is a power struggle: who has it, who wants it and how they plan to get it. Interwoven are themes of honor, justice, revenge and redemption layered between issues of ethics, morality and familial bonds.",
    "HarryPotter": "Throughout the series, Harry is described as having his father's perpetually untidy black hair, his mother's bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as 'small and skinny for his age' with 'a thin face' and 'knobbly knees', and he wears Windsor glasses",
}
function allBooks(req,res,next){
console.log("Fetching all books");
next();
}
function getBooks(req,res){
    res.status(200).send(books)
}

function getBook(req,res){
    let book = req.params.name;
    if(books[book]){
        res.status(200).send({[book]:books[book]});
    }
    else{
        res.status(404).send("Book not found!");
    }
}

module.exports={allBooks,getBooks,getBook}