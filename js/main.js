
fetchToday()

document.querySelector('.prevMedia').addEventListener('click', fetchPrev)
document.querySelector('.getMedia').addEventListener('click', getFetch)
document.querySelector('.nextMedia').addEventListener('click', fetchNext)

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
    document.querySelector('.prevMedia').style.visibility = 'hidden';
    document.querySelector('.nextMedia').style.visibility = 'hidden';

  
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
    const convStrDate = document.querySelector('input').value.split('-')
    const convArrDate = convStrDate.map(number)
    let dateNum = convArrDate[0]*365.25 + convArrDate[1]*30.4375 + convArrDate[2]
    console.log(dateNum)
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
    let prevDate = new Date(2022, 4, 10)
    prevDate.setDate(prevDate.setDate()-1)
    const url = `https://api.nasa.gov/planetary/apod?api_key=0Cgc2Xy7xAmaWHlG3pGwrrwDvtCVzbHNqgkY14v5&date=${prevDate}`
  
    console.log(prevDate)
  
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