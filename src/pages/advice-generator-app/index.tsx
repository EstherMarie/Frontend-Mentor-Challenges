import Head from 'next/head';
import Card from '../../components/Card';
import * as S from './styles';

export default function AdviceGeneratorApp() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
      </Head>
      <S.Main>
        <h1 className='sr-only'>Advice Generator App</h1>
        <div className='container'>
          <Card />
        </div>
      </S.Main>
    </>
  );
}
