const url = 'https://data.calgary.ca/resource/m9y7-ui7j.json'
const name = document.querySelector('.library-name')
const postalCode = document.querySelector('.postalcode')
const phone = document.querySelector('.phone')
const hours = document.querySelector('.hours')
const buttonForward = document.querySelector('#button-forward')
const buttonBackward = document.querySelector('#button-backward')


/* -------- Data that was not included in API -------- */

const separateData = [
  {
    img: 'https://api.time.com/wp-content/uploads/2019/08/central-library-calgary-canada.jpg?h=580',
    libraryLocation: '800 3 St SE, Calgary, AB',
    libraryMap: 'assets/central-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/Locations/giuffre1800x700__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '3223 14 St SW, Calgary, AB',
    libraryMap: 'assets/alexander-library.png'
  },
  {
    img: 'https://static1.squarespace.com/static/55f0d3a0e4b021b43f87a494/5653ec3be4b0a689b3fb1bc5/59e024d064b05f417c51c665/1522270544177/bowness+library.jpg?format=1500w',
    libraryLocation: '6532 Bowness Rd NW, Calgary, AB',
    libraryMap: 'assets/bowness-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/Fish-Creek-Carousel-1__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '11161 Bonaventure Dr SE, Calgary, AB',
    libraryMap: 'assets/fishcreek-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/Forest-Carousel-3__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '4807 8 Ave SE, Calgary, AB',
    libraryMap: 'assets/forestlawn-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/Quarry-Park-Carousel-1__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '108 Quarry Park Rd, Calgary, AB',
    libraryMap: 'assets/glenmore-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/Riley-Carousel-1-v2__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation:'1904 14 Ave NW, Calgary, AB',
    libraryMap: 'assets/louiseriley-library.png'
  },
  {
    img: 'https://historicplacesday-ksiu6qbsd.netdna-ssl.com/wp-content/uploads/2017/06/Memorial231498576678.jpg',
    libraryLocation: '1221 2 Street Southwest, Calgary, AB',
    libraryMap: 'assets/memorial-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/Heroes/Nose-HIll-Banner-1440-x-475__ScaleMaxHeightWzQwMF0.jpg',
    libraryLocation: '1530 Northmount Dr NW, Calgary, AB',
    libraryMap: 'assets/nosehill-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/Heroes/Shawnessy-Banner-1440-x-475__ScaleMaxHeightWzQwMF0.jpg',
    libraryLocation: '333 Shawville Blvd SE, Calgary, AB',
    libraryMap: 'assets/shawnessy-library.png'
  },
  {
    img: 'https://www.cityofsignalhill.org/ImageRepository/Document?documentID=7618',
    libraryLocation: '5994 Signal Hill Centre SW, Calgary, AB',
    libraryMap: 'assets/signalhill-library.png'
  },
  {
    img: 'https://sss.wrdsb.ca/files/2013/12/DSC_0009-945x630.jpg',
    libraryLocation: '924 Southland Dr SW, Calgary, AB',
    libraryMap: 'assets/southwood-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/Judith-Umbach-Carousel-2__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '6617 Centre St N, Calgary, AB ',
    libraryMap: 'assets/judith-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/Village-Carousel-4__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '2623 56 St NE, Calgary, AB ',
    libraryMap: 'assets/village-library.png'
  },
  {
    img: 'http://www.canaconstruction.com/wp-content/uploads/2015/03/cpl-crowfoot-1-826x536.jpg',
    libraryLocation: '8665 Nose Hill Dr NW, Calgary, AB',
    libraryMap: 'assets/crowfoot-library.png'
  },
  {
    img: 'https://calgarylibrary.ca/assets/carousel/CHill-Carousel-3__ScaleMaxHeightWzU1MF0.jpg',
    libraryLocation: '11950 Country Village Link NE, Calgary, AB',
    libraryMap: 'assets/countryhills-library.png'
  },
  {
    img: 'https://www.calgaryherald.com/cms/binary/10202842.jpg',
    libraryLocation: '7555 Falconridge Blvd NE, Calgary, AB',
    libraryMap: 'assets/saddletowne-library.png'
  },
  {
    img: 'https://static.wixstatic.com/media/ef6de2_d7235c166300453ab3b488c1f1281bf9.png/v1/fill/w_548,h_507,al_c,q_85,usm_0.66_1.00_0.01/ef6de2_d7235c166300453ab3b488c1f1281bf9.webp',
    libraryLocation: '1413 33 St SW, Calgary, AB',
    libraryMap: 'assets/westbrook-library.png'
  },
]


/* -------- Functions for arrow buttons -------- */

let counter = 0 

buttonBackward.addEventListener('click', function() {
  getData()
  counter--
})

buttonForward.addEventListener('click', function() {
  getData()
  counter++
})


/* -------- Data from API -------- */

function getData() {
fetch(url)
.then(x => x.json())
.then(data => {
    name.innerHTML = data[counter].library
    postalCode.innerHTML = data[counter].postal_code
    phone.innerHTML = data[counter].phone_number
    hours.innerHTML = `
      <div>
        <p>Monday: ${data[counter].monday_open} - ${data[counter].monday_close}</p>
        <p>Tuesday: ${data[counter].tuesday_open} - ${data[counter].tuesday_close}</p>
        <p>Wednesday: ${data[counter].wednesday_open} - ${data[counter].wednesday_close}</p>
        <p>Thursday: ${data[counter].thursday_open} - ${data[counter].thursday_close}</p>
        <p>Friday: ${data[counter].friday_open} - ${data[counter].friday_close}</p>
        <p>Saturday: ${data[counter].saturday_open} - ${data[counter].saturday_close}</p>
        <p>Sunday: ${data[counter].sunday_open} - ${data[counter].sunday_close}</p>
      </div>
    `
    document.getElementById('library-image').src = separateData[counter].img;
    debugger
    document.getElementById("location-of-library").innerHTML = separateData[counter].libraryLocation;
    document.getElementById('mock-map').src = separateData[counter].libraryMap;


    console.log(data)
})
}

getData()




  