//Task 

function Task(){
    function callfun(){
        alert("Called function");
    }
    return(
        <div>
            <h1>Mansi Malik Todos</h1>
            <img  src="https://picsum.photos/seed/picsum/500/300" alt="Mansi" class="photo" />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>        
            </ul>
            <button onClick={callfun}>Click ME</button>
        </div>
    )
}

export default Task

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Home</title>
// </head>
// <body>
// <h1>Anil Sidhu Todos</h1>
// <img 
//     src="https://picsum.photos/" 
//     alt="Anil Sidhu" 
//     class="photo"
//   />
 
//   <ul>
// <li>Invent new traffic lights</li>
// <li>Rehearse a movie scene</li>
// <li>Improve the spectrum technology</li>
// </ul>
 
//   <button onclick="callFun()">Click Me</button>
 
//   <script>
//     function callFun() {
//       alert("function called");
//     }
// </script>
// </body>
// </html>