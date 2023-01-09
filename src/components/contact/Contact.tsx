import Iframe from "react-iframe";
import styled from "styled-components";
import {
  accentColors,
  Container,
  EnvelopeFillSVG,
  MapSVG,
  SectionHeader,
  ShareFillSVG,
  TelephoneSVG,
} from "../../assets";




const Mb3 = styled.div`
  margin-bottom: 1rem !important;
`;

const Rowgy4 = styled.div`
  display: flex;
  flex-wrap: wrap;

`;
const Colmd6 = styled.div`
  flex: 0 0 auto;
  width: 49.1%;
  margin-bottom: 80px;
  margin-right: 20.5px;
  @media (max-width: 1200px) {
    width: 48.7%;
  }
  @media (max-width: 992px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Colmd7 = styled.div`
  flex: 0 0 auto;
  width: 49.1%;
  margin-bottom: 80px;
  @media (max-width: 1200px) {
    width: 48.7%;
  }
  @media (max-width: 992px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 30px;
  height: 100%;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    font-size: 24px;
    line-height: 0;
    color: #fff;
    background: ${accentColors.primary};
    border-radius: 50%;
    margin-right: 15px;
  }
  h3 {
    font-size: 20px;
    color: #6c757d;
    font-weight: 700;
    margin: 0 0 5px 0;
  }
  p {
    padding: 0;
    margin: 0;
    line-height: 24px;
    font-size: 14px;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-top: 30px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Colxl6 = styled.div`
  flex: 0 0 auto;
  width: 46%;
  padding-bottom: 20px;
  /* padding-top: 20px; */
  /* width: 520px; */
  margin-left: 33px;
  @media (max-width: 1200px) {
    width: 94.5%;
  }
  @media (max-width: 992px) {
    width: 92.5%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 390px) {
    width: 87%;
  }
`;

const Input = styled.input`
  display: block;
  width: 95%;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 12px 15px;
  @media (max-width: 768px) {
    margin-left: -10px;
    width: 95%;
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
    background-color: #fff;
    border-color: red;
    outline: 0;
  }
  ::-webkit-date-and-time-value {
    height: 1.5em;
  }
  ::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  ::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  :disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
  ::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      -webkit-transition: none;
      transition: none;
    }
  }
  ::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;

const FormGroup = styled.div`
  padding-bottom: 20px;
  margin-left: 30px;

  @media (max-width: 1200px) {
    padding-right: 20px;
  }
  @media (max-width: 992px) {
    padding-right: 18.5px;
  }
`;

const Textarea = styled.textarea`
  display: block;
  width: 95%;
  margin-top: 20px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 12px 15px;
  resize: vertical;
  @media (max-width: 992px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 95.5%;
    margin-left: -10px;
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
    background-color: #fff;
    border-color: red;
    outline: 0;
  }
  ::-webkit-date-and-time-value {
    height: 1.5em;
  }
  ::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  ::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  :disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
  ::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      -webkit-transition: none;
      transition: none;
    }
  }
  ::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
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
    margin-bottom: 20px;
    :hover {
      background: #ec2727;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <section id="contact">
        <Container data-aos="fade-up">
          <SectionHeader>
            <h2>Contact</h2>
            <p>
              Need Help? <span>Contact Us</span>
            </p>
          </SectionHeader>
          <Mb3>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171336.66382536982!2d35.01054171944616!3d47.856341458305636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e675cd9074d3f4a!2z0JfQsNC_0L7RgNC-0LbRjNC1LCDQl9Cw0L_QvtGA0L7QttGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2OTAwMA!5e0!3m2!1sru!2sua!4v1671030766428!5m2!1sru!2sua"
              width="100%"
              height="350px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </Mb3>
          <Rowgy4>
            <Colmd6>
              <InfoItem>
                <div className="icon">
                  <img src={MapSVG} />
                </div>

                <div>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </InfoItem>
            </Colmd6>
            <Colmd7>
              <InfoItem>
                <div className="icon">
                  <img src={EnvelopeFillSVG} />
                </div>

                <div>
                  <h3>Email Us</h3>
                  <p>contact@example.com</p>
                </div>
              </InfoItem>
            </Colmd7>
            <Colmd6>
              <InfoItem>
                <div className="icon">
                  <img src={TelephoneSVG} />
                </div>

                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </InfoItem>
            </Colmd6>
            <Colmd7>
              <InfoItem>
                <div className="icon">
                  <img src={ShareFillSVG} />
                </div>

                <div>
                  <h3>Opening Hours</h3>
                  <div>
                    <strong>Mon-Sat:</strong> 11AM - 23PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </InfoItem>
            </Colmd7>
          </Rowgy4>
          <Form>
            <Row>
              <Colxl6>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                ></Input>
              </Colxl6>
              <Colxl6>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                ></Input>
              </Colxl6>
            </Row>
            <FormGroup>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Textarea name="message" placeholder="Message"></Textarea>
            </FormGroup>
            <TextCenter>
              <button type="submit">Send Message</button>
            </TextCenter>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default Contact;
