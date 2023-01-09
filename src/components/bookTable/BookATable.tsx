import styled from "styled-components";
import {
  accentColors,
  Container,
  ReservationSvg,
  SectionHeader,
} from "../../assets";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  @media (max-width: 992px) {
    display: block;
  }
`;

const Collg4 = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;

  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-image: url(${ReservationSvg});
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const Collg8 = styled.div`
  flex: 0 0 auto;
  width: 66.66666667%;
  display: flex;
  align-items: center;
  background: rgba(55, 55, 63, 0.04);
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Form = styled.form`
  padding: 40px;
  @media (max-width: 575px) {
    padding: 20px;
  }
`;

const Rowgy4 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Collg4colmd6 = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Input = styled.input`
  display: block;
  width: 75%;
  margin-top: 20px;
  padding: 6px 15px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: ${accentColors.white};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 12px 15px;
  @media (max-width: 992px) {
    width: 83%;
  }
  @media (max-width: 768px) {
    width: 91.5%;
  }
  :hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }
  :hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  [type="file"] {
    overflow: hidden;
  }
  [type="file"]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  :focus {
    color: #212529;
    background-color: ${accentColors.white};
    border-color: red;
    outline: 0;
  }
`;
const Formgroupmt3 = styled.div`
  margin-top: 20px !important;
`;

const Textarea = styled.textarea`
  display: block;
  width: 91.5%;
  padding: 6px 15px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: ${accentColors.white};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 6px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0;
  font-family: inherit;
  border-radius: 0;
  height: 100px;
  box-shadow: none;
  font-size: 14px;
  border-radius: 0;
  padding: 12px 15px;
  resize: vertical;
  border-color: red;
  :focus {
    outline: none;
    border-color: ${accentColors.primary};
  }
`;

const TextCenter = styled.div`
  text-align: center !important;
  button {
    background: ${accentColors.primary};
    border: 0;
    padding: 12px 40px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
    font-size: 18px;
    margin-top: 20px;
    :hover {
      background: #ec2727;
    }
  }
`;

const BookATable = () => {
  return (
    <section id="book-a-table">
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>Book A Table</h2>
          <p>
            Book <span>Your Stay</span> With Us
          </p>
        </SectionHeader>
        <Row>
          <Collg4 data-aos="zoom-out" data-aos-delay="200" />
          <Collg8>
            <Form
              method="post"
              role="form"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Rowgy4>
                <Collg4colmd6>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  ></Input>
                </Collg4colmd6>
                <Collg4colmd6>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  ></Input>
                </Collg4colmd6>
                <Collg4colmd6>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  ></Input>
                </Collg4colmd6>
                <Collg4colmd6>
                  <Input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  ></Input>
                </Collg4colmd6>
                <Collg4colmd6>
                  <Input
                    type="text"
                    name="time"
                    id="time"
                    placeholder="Time"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  ></Input>
                </Collg4colmd6>
                <Collg4colmd6>
                  <Input
                    type="number"
                    name="people"
                    id="people"
                    placeholder="# of people"
                    data-rule="minlen:1"
                    data-msg="Please enter at least 1 chars"
                  ></Input>
                </Collg4colmd6>
              </Rowgy4>
              <Formgroupmt3>
                <Textarea name="message" placeholder="Message"></Textarea>
              </Formgroupmt3>
              <TextCenter>
                <button type="submit">Book a Table</button>
              </TextCenter>
            </Form>
          </Collg8>
        </Row>
      </Container>
    </section>
  );
};

export default BookATable;
