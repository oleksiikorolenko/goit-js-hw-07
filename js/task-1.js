


const listWithClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${listWithClass.length}`);



listWithClass.forEach((li, index) => {
    console.log(`Category: ${li.querySelector("h2").textContent}`), console.log(`Elements: ${li.querySelectorAll("li").length}`)
});
