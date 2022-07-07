import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './Card.styled';
import { Container } from '../Container';

interface ApiData {
  slip: {
    id: number;
    advice: string;
  };
}

export default function Card() {
  const [data, setData] = useState<ApiData>({
    slip: { id: 1, advice: 'Loading Advice...' },
  });

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  }

  return (
    <S.Main>
      <h1 className="sr-only">Advice Generator App</h1>
      <Container>
        <S.Card>
          <div className="advice">ADVICE #{data?.slip.id}</div>

          <p className="quote">{data?.slip.advice}</p>

          <button type="submit" onClick={() => fetchData()} className="btn">
            <Image
              src="/images/advice-generator/icon-dice.svg"
              alt="New Advice"
              width={24}
              height={24}
            />
          </button>
        </S.Card>
      </Container>
    </S.Main>
  );
}
