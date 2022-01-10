import { FC } from 'react';
import { MdCancel, MdAddCircleOutline } from 'react-icons/md';
import { ThemeSelectorContainer, ThemesContainer, Theme } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ themes }: Props) => {
  return (
    <ThemeSelectorContainer>
      <h5>Themes</h5>
      <ThemesContainer>
        {themes.map(({ name, handleOnClickDeleteTheme }) => (
          <Theme>
            <p>{name}</p>
            <MdCancel onClick={handleOnClickDeleteTheme} color="#00000099" />
          </Theme>
        ))}
        <MdAddCircleOutline size={20} />
      </ThemesContainer>
    </ThemeSelectorContainer>
  );
};

export default Component;
