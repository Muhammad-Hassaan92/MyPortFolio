import Slider from 'react-slick';
import Feedback from './Feedback';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const feedbackData = [
    { image: 'public\\assets\\feedback.png', name: 'Robert E. Wolf', occ: 'Director, Techso', feedback: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.' },
    { image: 'public\\assets\\feedback.png', name: 'Robert E. Wolf', occ: 'Director, Techso', feedback: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.' },
    { image: 'public\\assets\\feedback.png', name: 'Robert E. Wolf', occ: 'Director, Techso', feedback: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.' },
    { image: 'public\\assets\\feedback.png', name: 'Robert E. Wolf', occ: 'Director, Techso', feedback: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.' },
    { image: 'public\\assets\\feedback.png', name: 'Robert E. Wolf', occ: 'Director, Techso', feedback: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.' },
    { image: 'public\\assets\\feedback.png', name: 'Robert E. Wolf', occ: 'Director, Techso', feedback: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.' },
  ];

  return (
    <div className="container-fluid px-5 feedback-slider-wrapper">
      <Slider {...settings}>
        {feedbackData.map(index => (
          <Feedback
            name={index.name}
            feedback={index.feedback}
            occ={index.occ}
            image={index.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
