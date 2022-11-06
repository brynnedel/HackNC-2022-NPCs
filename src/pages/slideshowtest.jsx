//   const slideImages = [
//   "https://react-slideshow.herokuapp.com/images/slide_2.jpg",
//   "https://react-slideshow.herokuapp.com/images/slide_3.jpg",
//   "https://react-slideshow.herokuapp.com/images/slide_4.jpg"
// ];

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   pauseOnHover: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// };

// const SlideShow = () => {
//   return (
//     <>
//       <h2>SlideShow</h2>
//       <div className="slide-container">
//         <Slide {...properties}>
//           <div className="each-slide">
//             <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     </>
//   );

// }

        var imgArray = [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg'
        ];
        var curIndex = 0;
        var imgDuration = 5000;

        function slideShow() {
            document.getElementById('image1').src = imgArray[curIndex]
            curIndex++;
            if (curIndex == imgArray.length) { curIndex = 0; }
            setTimeout("slideShow()", imgDuration);
        }
        slideShow();
