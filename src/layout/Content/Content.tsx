import { Breadcrumbs } from "@/components";
import Header from "../Header/Header";
import { useAppSelector } from "@/hooks";

interface Props {
  children: JSX.Element | JSX.Element[];
  bg: string;
}
const Content = ({ children, bg }: Props) => {
  const { _token } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className={`${bg} sticky top-0 z-20 transition-colors ease-linear`}>
        <Header />
      </div>
      <pre>Token {_token}</pre>
      <div className="p-4 z-5">
        <Breadcrumbs />
        {children}
      </div>
    </>
  );
};
export default Content;
