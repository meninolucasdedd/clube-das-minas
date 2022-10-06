import { ArrowRightOutlined } from '@ant-design/icons';
import { Button as ButtonAntd } from 'antd';
import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="button">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>SOBRE</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ESCRITORAS</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>CONTATO</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Clube das minas</span>
          </>
        }
        description="Você já se perguntou por que
        lemos mais homens que mulheres?"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <ButtonAntd
                type="primary"
                size="large"
                shape="round"
                style={{
                  backgroundColor: '#FC4726',
                  borderColor: ' #FC4726',
                  width: '283px',
                  height: '61px',
                }}
              >
                Saiba mais
                <ArrowRightOutlined />
              </ButtonAntd>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
