const cats  =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
}
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
function destructivelyRemoveLastCat()
{
    cats.pop();
}
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
function appendCat(name)
{
    const cpCats = [...cats];
    cpCats.push(name);
    return cpCats;
}
function prependCat(name)
{
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}
function removeLastCat()
{
    const delCats = [...cats];
    delCats.pop();
    return delCats;
}
function removeFirstCat()
{
    const removedCats = [...cats];
    removedCats.shift();
    return removedCats;
} 