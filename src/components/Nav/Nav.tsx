import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../../atoms';
import ModeChangeBtn from '../ModeChangeBtn/ModeChangeBtn';
import * as S from './style';

const Nav = () => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <S.Header>
      <S.Logo>
        <Link to='/'>{`{ COIN$ TICKER }`}</Link>
      </S.Logo>
      <ModeChangeBtn onClick={toggleDarkAtom}>
        {isDark ? 'Light' : 'Dark'}
      </ModeChangeBtn>
    </S.Header>
  );
};

export default Nav;
