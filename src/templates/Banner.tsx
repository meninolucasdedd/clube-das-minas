import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Conheca mais sobre o clube das minhas"
      subtitle="Acesse a seção sobre"
      button={
        <Link href="/">
          <a>
            <Button>Iniciar</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
