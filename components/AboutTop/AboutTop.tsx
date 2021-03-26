import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YHeading from '@/components/YHeading';

interface Props {
  title: string;
  description: string;
}

const AboutTop: React.FC<Props> = ({ title, description }) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  return (
    <section className="container">
      <YHeading
        {...titleProps[screenSize]}
        className="text-primary mt-21 md:mt-68.5"
      >
        {title}
      </YHeading>
      <YHeading
        {...subtitleProps[screenSize]}
        className="mt-5 mb-49 w-70 md:mb-130.5 md:w-200"
      >
        {description}
      </YHeading>
    </section>
  );
};

const titleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XS,
    fontWeight: FontWeight.Regular,
    as: 'h1',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.LG,
    fontWeight: FontWeight.Regular,
    as: 'h1',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const subtitleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    lineHeight: FontLineHeight.Loose,
    fontWeight: FontWeight.SemiBold,
    as: 'p',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize['4XL'],
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

export default AboutTop;