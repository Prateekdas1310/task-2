document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
async function fetchUserData(){
    fetch('https://www.anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(users => {
            let output = '<h2><u>display 5 characters for each book</u></h2>';
            output += '<ul>';
            users.forEach(function(user) {
                output += `
                    <li>
                        <p>Name : ${user.name}</P>  
                        <p> isbn : ${user.isbn}</p> 
                        <p> numberOfPages : ${user.numberOfPages} </p>  
                        <p>Authors : ${user.authors}</p>  
                        <p>publisher name :${user.publisher}  and the release date : ${user.released}</p> 
                        <p>Character : ${user.characters[0]}</p>
                        <p>Character : ${user.characters[1]}</p>
                        <p>Character : ${user.characters[2]}</p>
                        <p>Character : ${user.characters[3]}</p>
                        <p>Character : ${user.characters[4]}</p>
                    </li>
                `;
            });
            output += '</ul>'
            try{
            document.getElementById("response").innerHTML = output;
            }
        
        catch(err) {
            document.getElementById("demo").innerHTML = err.message;
          }  
        }); 
}