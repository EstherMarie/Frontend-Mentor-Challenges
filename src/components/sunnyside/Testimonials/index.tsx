import { Container } from '../Container';
import { TestimonialCard } from './TestimonialCard';
import * as S from './Testimonials.styled';

export function Testimonials() {
  return (
    <S.TestimonialsSection>
      <Container>
        <S.Wrapper>
          <h2>Client Testimonials</h2>

          <S.CardWrapper>
            {testimonialList.map(({ image, text, name, occupation }) => (
              <TestimonialCard
                key={name.replaceAll(' ', '-').toLocaleLowerCase()}
                image={image}
                text={text}
                name={name}
                occupation={occupation}
              />
            ))}
          </S.CardWrapper>
        </S.Wrapper>
      </Container>
    </S.TestimonialsSection>
  );
}

interface TestimonialCardProps {
  image: string;
  text: string;
  name: string;
  occupation: string;
}

const testimonialList: TestimonialCardProps[] = [
  {
    image: '/images/sunnyside/image-emily.jpg',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    occupation: 'Marketing Director',
  },
  {
    image: '/images/sunnyside/image-thomas.jpg',
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: 'Thomas S.',
    occupation: 'Chief Operating Officer',
  },
  {
    image: '/images/sunnyside/image-jennie.jpg',
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    occupation: 'Business Owner',
  },
];
