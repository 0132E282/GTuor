import './global-styles.scss';
type Props = {
    children: JSX.Element;
}

const GlobalStyles = ({children}: Props) => {
  return (
    <>{children}</>
  )
}

export default GlobalStyles