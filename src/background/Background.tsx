import { ReactNode } from 'react';

type IBackgroundProps = {
  color?: string;
  yPadding?: string;
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <>
    {/* <img
      src="https://i.ibb.co/82ZJJNY/background.png"
      style={{
        position: 'absolute',
      }}
      className={`max-w-screen-lg mx-auto px-3 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
      alt="background"
    /> */}
    <div className={props.color || '#1D1534'}>{props.children}</div>
  </>
);

export { Background };
