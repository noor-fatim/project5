const submitForm = document.querySelector(".todo-add");
const text = document.querySelector(".todo-text");
const unorder = document.querySelector(".todo-list");
// console.log(submitlist);
// console.log(text);

submitForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const newtodoText = text.value;
	const newlist = document.createElement("li");
	const newinnerhtml = `<span>${newtodoText}</span>
					<span>
					<button class="done">Done</button>
					<button class="remove">Remove</button>
				</span>`;
	newlist.innerHTML = newinnerhtml;			

	unorder.appendChild(newlist);
	text.value = "";
});

unorder.addEventListener("click" , (e) =>{
	// console.log(e.target);
	if(e.target.classList.contains("done")){
		const lispan = e.target.parentNode.previousElementSibling;
		lispan.style.textDecoration = "line-through";
	}
	if(e.target.classList.contains("remove")){
		const targetli = e.target.parentNode.parentNode;
		targetli.remove();
	}

});