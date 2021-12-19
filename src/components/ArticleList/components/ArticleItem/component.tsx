import { FC } from 'react';
import { ArticleItemContainer, VR, ArticleItemTitle, ArticleItemImage } from './styles';
import { AuthorInfo, MoreInfo } from '../index';
import { Props } from './types';

const Component: FC<Props> = ({ headerImageURL, title, themes, temps, authorProps }: Props) => {
  return (
    <ArticleItemContainer>
      <ArticleItemImage src={headerImageURL} alt="article header" />
      <div className="info-content">
        <ArticleItemTitle>{title}</ArticleItemTitle>
        <div className="info">
          <AuthorInfo {...authorProps} />
          <VR />
          <MoreInfo description={themes} title="THEMES" />
          <VR />
          <MoreInfo description={temps} title="TEMPS" />
        </div>
      </div>
    </ArticleItemContainer>
  );
};

export default Component;
