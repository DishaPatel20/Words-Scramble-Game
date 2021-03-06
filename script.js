
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let words = ['python','javascript','c++','php','java','c#',
	'html','css','reactjs','angular','swift','android','sql'];

const createNewWords = () => {
		let ranNum = Math.floor(Math.random() * words.length);
		//console.log(ranNum);
		let newTempWords = words[ranNum];
		console.log(newTempWords.split(""));
		return newTempWords;
}

const scrambleWords = (arr) => {
	for(let i = arr.length-1; i>0; i--){
		let temp = arr[i];
		//console.log(temp);
		let j =Math.floor(Math.random()*(i+1));
		// console.log(i);
		// console.log(j);

		arr[i] = arr[j];
		arr[j] = temp;

	}
	return arr;
}


btn.addEventListener('click', function() {
	if(!play){
		play = true;
		btn.innerHTML = "Guess";
		guess.classList.toggle('hidden');

		//word generate
		newWords = createNewWords();
// if u want to convert any string into array use split method
		randWords =  scrambleWords(newWords.split("")).join("");
		//console.log(randWords);
		msg.innerHTML = `Guess The Word: ${randWords}`;
	}else {
		let tempWord = guess.value;
		if(tempWord === newWords) {
			//console.log('Correct');
			play = false;
			msg.innerHTML = `Awesome It's Correct. 
			It is ${newWords}`;
			btn.innerHTML = "Start Again";
			guess.classList.toggle('hidden');
			guess.value = "";
		}else{
			//console.log('incorrect');
			msg.innerHTML = `Sorry Dude It's InCorrect. 
			Please Try Again ${randWords}`;
		}
	}
})
