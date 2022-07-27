import * as S from './WhyEasybank.styled';
import { Container } from '../Container';
import { Card } from './Card';
import { useId } from 'react';

export function WhyEasybank() {
  return (
    <S.WhyEasybank>
      <Container>
        <S.Wrapper>
          <div className="content">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="card_section">
            {cardList.map(({ icon, title, text }, index) => (
              <Card
                key={`${useId}-${index}`}
                icon={icon}
                title={title}
                text={text}
              />
            ))}
          </div>
        </S.Wrapper>
      </Container>
    </S.WhyEasybank>
  );
}

const cardList = [
  {
    icon: '/images/easybank-landing-page/icon-online.svg',
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: '/images/easybank-landing-page/icon-budgeting.svg',
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.',
  },
  {
    icon: '/images/easybank-landing-page/icon-onboarding.svg',
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: '/images/easybank-landing-page/icon-api.svg',
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];
