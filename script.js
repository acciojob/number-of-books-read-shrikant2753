const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	var count=0;
	for(i=0; i<library.length; i++){
		library[i].readingStatus && count++
			}
	return count
};

// Do not change the code below

alert(numberOfBooksRead());
