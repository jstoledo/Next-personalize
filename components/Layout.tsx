import SbEditable from 'storyblok-react';
import DynamicComponent from './DynamicComponent';
import { PostComponent } from '@/types/storyblok';

import Head, { MetaContent } from '@/components/Head';

interface Props extends MetaContent {
  headerContent?: PostComponent | undefined;
  footerContent?: PostComponent | undefined;
}

const Layout: React.FC<Props> = ({
  children,
  headerContent,
  footerContent,
  ...metaContent
}) => {
  return (
    <div className="relative bg-blue-300 text-white w-full overflow-hidden">
      <Head {...metaContent} />

      {headerContent && (
        <SbEditable content={headerContent}>
          <header>{<DynamicComponent blok={headerContent} />}</header>
        </SbEditable>
      )}

      {children}

      {footerContent && (
        <SbEditable content={footerContent}>
          <footer>
            <DynamicComponent blok={footerContent} />
          </footer>
        </SbEditable>
      )}
    </div>
  );
};

export default Layout;
