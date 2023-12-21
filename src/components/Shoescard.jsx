import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import redshoes from "../assets/images/redshoes.png";
import gryshoes from "../assets/images/gryshoes.png";

const commoncard = [
  {
    image: redshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: gryshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: redshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: gryshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: redshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: gryshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: redshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
  {
    image: gryshoes,
    heading: "Quickiins Mens Shoes",
    para: "$90.00",
    paragraph: "$70.00",
  },
];

const Shoescard = () => {
  const list = commoncard.map((commoncard) => (
    <Col xl={3} lg={4} md={6} className="mb-5 justify-content-center d-flex">
      <Card className="commoncard position-relative z-1 overflow-hidden br-20">
        <div className="card-border position-relative overflow-hidden">
            <img src={commoncard.image} alt="img-1" className="w-100" />
        </div>
        <div className="pe-2 ps-2 pt-4">
          <div className="d-flex align-content-center justify-content-between">
            <div>
              <Card.Title className="ff-poppins fw-medium  lh-188  fs-sm color-grey mb-0 text-nowrap ">
                {commoncard.heading}
              </Card.Title>
              <div className="d-flex gap-1 ">
                <Card.Title className="ff-poppins fw-medium fs-sm color-offwhite pt-3 lh-188  mb-0">
                  {commoncard.para}
                </Card.Title>
                <Card.Title className="ff-poppins fw-medium fs-sm color-red pt-3 lh-188  mb-0">
                  {commoncard.paragraph}
                </Card.Title>
              </div>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
              >
                <g clip-path="url(#clip0_776_387)">
                  <path
                    d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z"
                    fill="#28A745"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_776_387">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.5 0.386963)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <span className=" ps-2 pt-3 pb-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="21"
            viewBox="0 0 100 21"
            fill="none"
          >
            <path
              d="M10.1705 2.99229C10.4884 2.11172 11.7338 2.11172 12.0517 2.99229L13.3673 6.63636C13.5104 7.03268 13.8865 7.29679 14.3079 7.29679H18.3219C19.3159 7.29679 19.7011 8.58975 18.8691 9.13375L15.8093 11.1345C15.4214 11.3882 15.2586 11.8751 15.416 12.3111L16.6263 15.6635C16.9523 16.5666 15.942 17.3655 15.1384 16.84L11.6584 14.5645C11.3259 14.3471 10.8963 14.3471 10.5638 14.5645L7.0838 16.84C6.28021 17.3655 5.26991 16.5666 5.59594 15.6635L6.80625 12.3111C6.96363 11.8751 6.80084 11.3882 6.41294 11.1345L3.35309 9.13375C2.52115 8.58975 2.90635 7.29679 3.90037 7.29679H7.91436C8.33571 7.29679 8.71186 7.03268 8.85494 6.63636L10.1705 2.99229Z"
              fill="#555555"
            />
            <path
              d="M29.6149 2.99229C29.9328 2.11172 31.1781 2.11172 31.496 2.99229L32.8116 6.63636C32.9547 7.03268 33.3308 7.29679 33.7522 7.29679H37.7662C38.7602 7.29679 39.1454 8.58975 38.3135 9.13375L35.2536 11.1345C34.8657 11.3882 34.7029 11.8751 34.8603 12.3111L36.0706 15.6635C36.3966 16.5666 35.3863 17.3655 34.5828 16.84L31.1027 14.5645C30.7703 14.3471 30.3406 14.3471 30.0082 14.5645L26.5281 16.84C25.7245 17.3655 24.7142 16.5666 25.0403 15.6635L26.2506 12.3111C26.408 11.8751 26.2452 11.3882 25.8573 11.1345L22.7974 9.13375C21.9655 8.58975 22.3507 7.29679 23.3447 7.29679H27.3587C27.78 7.29679 28.1562 7.03268 28.2993 6.63636L29.6149 2.99229Z"
              fill="#555555"
            />
            <path
              d="M49.0592 2.99229C49.3771 2.11172 50.6225 2.11172 50.9404 2.99229L52.256 6.63636C52.399 7.03268 52.7752 7.29679 53.1965 7.29679H57.2105C58.2045 7.29679 58.5897 8.58975 57.7578 9.13375L54.698 11.1345C54.31 11.3882 54.1473 11.8751 54.3046 12.3111L55.515 15.6635C55.841 16.5666 54.8307 17.3655 54.0271 16.84L50.5471 14.5645C50.2146 14.3471 49.785 14.3471 49.4525 14.5645L45.9725 16.84C45.1689 17.3655 44.1586 16.5666 44.4846 15.6635L45.6949 12.3111C45.8523 11.8751 45.6895 11.3882 45.3016 11.1345L42.2418 9.13375C41.4098 8.58975 41.795 7.29679 42.789 7.29679H46.803C47.2244 7.29679 47.6005 7.03268 47.7436 6.63636L49.0592 2.99229Z"
              fill="#555555"
            />
            <path
              d="M68.5035 2.99229C68.8214 2.11172 70.0668 2.11172 70.3847 2.99229L71.7003 6.63636C71.8434 7.03268 72.2195 7.29679 72.6409 7.29679H76.6549C77.6489 7.29679 78.0341 8.58975 77.2021 9.13375L74.1423 11.1345C73.7544 11.3882 73.5916 11.8751 73.749 12.3111L74.9593 15.6635C75.2853 16.5666 74.275 17.3655 73.4714 16.84L69.9914 14.5645C69.6589 14.3471 69.2293 14.3471 68.8968 14.5645L65.4168 16.84C64.6132 17.3655 63.6029 16.5666 63.9289 15.6635L65.1393 12.3111C65.2966 11.8751 65.1339 11.3882 64.7459 11.1345L61.6861 9.13375C60.8542 8.58975 61.2394 7.29679 62.2334 7.29679H66.2474C66.6687 7.29679 67.0449 7.03268 67.1879 6.63636L68.5035 2.99229Z"
              fill="#555555"
            />
            <path
              d="M87.9479 2.99229C88.2658 2.11172 89.5111 2.11172 89.829 2.99229L91.1446 6.63636C91.2877 7.03268 91.6639 7.29679 92.0852 7.29679H96.0992C97.0932 7.29679 97.4784 8.58975 96.6465 9.13375L93.5866 11.1345C93.1987 11.3882 93.0359 11.8751 93.1933 12.3111L94.4036 15.6635C94.7297 16.5666 93.7194 17.3655 92.9158 16.84L89.4357 14.5645C89.1033 14.3471 88.6736 14.3471 88.3412 14.5645L84.8611 16.84C84.0576 17.3655 83.0473 16.5666 83.3733 15.6635L84.5836 12.3111C84.741 11.8751 84.5782 11.3882 84.1903 11.1345L81.1304 9.13375C80.2985 8.58975 80.6837 7.29679 81.6777 7.29679H85.6917C86.1131 7.29679 86.4892 7.03268 86.6323 6.63636L87.9479 2.99229Z"
              fill="#555555"
            />
          </svg>
        </span>
        <div class="text-box d-flex align-items-center justify-content-center">
          <p class="ff-poppins color-white fs-xs fw-light lh-242 mb-0">
            -10% OFF
          </p>
        </div>
        <div class="new-box">
          <p class="ff-poppins color-white fs-xs fw-normal lh-242 mb-0">NEW</p>
        </div>
      </Card>
    </Col>
  ));
  return (
    <div>
      <Row className="pt-5 justify-content-center">{list}</Row>
    </div>
  );
};
export default Shoescard;
