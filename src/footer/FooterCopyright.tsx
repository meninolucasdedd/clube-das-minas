import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Feito com amor{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    por{' '}
    <a
      href="https://www.linkedin.com/in/karlalves/"
      target="_blank"
      rel="noreferrer"
    >
      Karla Alves
    </a>
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
