
fetchToday()

document.querySelector('.prevMedia').addEventListener('click', getFetch)
document.querySelector('.getMedia').addEventListener('click', getFetch)
document.querySelector('.nextMedia').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=0Cgc2Xy7xAmaWHlG3pGwrrwDvtCVzbHNqgkY14v5&date=${choice}`

  console.log(choice)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if( data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').style.display = 'none';
            document.querySelector('img').style.display = "";


        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
            document.querySelector('img').style.display = 'none';
            document.querySelector('iframe').style.display = '';
        }


        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function fetchToday(){
    let currentDate = new Date();

    let todayDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;
    console.log(todayDate)
    const url = `https://api.nasa.gov/planetary/apod?api_key=0Cgc2Xy7xAmaWHlG3pGwrrwDvtCVzbHNqgkY14v5&date=${todayDate}`
  

  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
  
          if( data.media_type === 'image'){
              document.querySelector('img').src = data.hdurl
              document.querySelector('iframe').style.display = 'none';
              document.querySelector('img').style.display = "";
  
  
          }else if(data.media_type === 'video'){
              document.querySelector('iframe').src = data.url
              document.querySelector('img').style.display = 'none';
              document.querySelector('iframe').style.display = '';
          }
  
  
          document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

  function fetchNext(){
    const choice = document.querySelector('input').value.toLowerCase()+1
    const url = `https://api.nasa.gov/planetary/apod?api_key=0Cgc2Xy7xAmaWHlG3pGwrrwDvtCVzbHNqgkY14v5&date=${choice}`
  
    console.log(choice)
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
  
          if( data.media_type === 'image'){
              document.querySelector('img').src = data.hdurl
              document.querySelector('iframe').style.display = 'none';
              document.querySelector('img').style.display = "";
  
  
          }else if(data.media_type === 'video'){
              document.querySelector('iframe').src = data.url
              document.querySelector('img').style.display = 'none';
              document.querySelector('iframe').style.display = '';
          }
  
  
          document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
  
  function fetchPrev(){
    const choice = document.querySelector('input').value.toLowerCase()-1
    const url = `https://api.nasa.gov/planetary/apod?api_key=0Cgc2Xy7xAmaWHlG3pGwrrwDvtCVzbHNqgkY14v5&date=${choice}`
  
    console.log(choice)
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
  
          if( data.media_type === 'image'){
              document.querySelector('img').src = data.hdurl
              document.querySelector('iframe').style.display = 'none';
              document.querySelector('img').style.display = "";
  
  
          }else if(data.media_type === 'video'){
              document.querySelector('iframe').src = data.url
              document.querySelector('img').style.display = 'none';
              document.querySelector('iframe').style.display = '';
          }
  
  
          document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }