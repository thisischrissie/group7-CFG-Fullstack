import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import dogProfilePic from "../images/dog-pic.avif";
import styled from "styled-components";

export default function SmallProfilePic({ url, src, alt, name }) {
  return (
    <>
      <span>
        <Image
          className="profilePicBioImg"
          href={url}
          src={src}
          alt={alt}
          roundedCircle
        />
        <h2 className="pup-name"> {pupName}</h2>
      </span>
    </>
  );
}

//component css
const DogProfilePic = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Dog Profile Pic",
}))`
  width: 70px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const SmallProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: transparent;
`;

const DogName = styled.h2`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
`;
