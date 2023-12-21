import React from "react";
import { Container } from "react-bootstrap";
import Shoescard from "./Shoescard";

const Section4 = () => {
  return (
    <div>
      <Container className="py-">
        <p className="color-black fs-2xl fw-semibold ff-poppins mb-0 text-center text-lg-start">RELATED PRODUCT</p>
        <Shoescard />
        <div class="d-flex justify-content-end align-items-center gap-3 pt-4 pb-5">
                <a href="" class="common-btn fs-lg ff-poppins light-black lh-125 fw-semibold">1</a>
                <a href="" class="common-btn fs-lg ff-poppins light-black lh-125 fw-semibold">2</a>
                <a href="" class="common-btn fs-lg ff-poppins light-black h-125 fw-semibold">3</a>
                <a href="" class="nxt-btn ff-poppins fs-s fw-normal color-grey">Next &gt;&gt; </a>
            </div>
      </Container>
    </div>
  );
};

export default Section4;
