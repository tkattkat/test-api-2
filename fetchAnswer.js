
//var data = 'Jorge is an associate for a large retailer. Sometimes Jorge works alone answering customer questions or moving inventory. Other times, he works with other associates to rearrange displays or complete large orders. Jorge is probably a(n)';

document.querySelector('#search').addEventListener('click', () => {
    const data = document.querySelector("#textInput").value;
    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://homework-api.herokuapp.com/',
        headers: { 
          'Content-Type': 'text/plain'
        },
        data : data
      };

       //console.log(question)
      axios(config).then((result) => {
          console.log(result.data[0].answer)
          document.querySelector('#questionText').innerText = `Answer: ${result.data[0].answer}`;
          document.querySelector('#answerText').innerText = `Question: ${result.data[0].question}`;
      }).catch((err) => {
          
      });
    }
)

const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    document.querySelector('#questionText').innerText = '';
    document.querySelector('#answerText').innerText = '';
    input.value = "";
 
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);