import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getTheme } from '../../redux/selectors/themeSelector';

export default function De() {
  const themeMode = useTypedSelector(getTheme);

  console.log(themeMode);

  return <div>De</div>;
}
