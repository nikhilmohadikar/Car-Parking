const Entry = document.querySelector("#entry");
const Exit = document.querySelector("#exit");
const SectionOne = document.querySelector("#sectionOne");
const SectionTwo = document.querySelector("#sectionTwo");

Entry.addEventListener("click", ()=>{
    console.log("Entry")
    SectionTwo.classList.remove("active")
    SectionOne.classList.remove("active")
})

Exit.addEventListener("click", ()=>{
    console.log("Exit")
    SectionTwo.classList.add("active")
    SectionOne.classList.add("active")
})