import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const routeToNextPage = ({ pageRoute }: { pageRoute: string }) => {
    router.push(pageRoute, undefined, { shallow: false });
  };
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
            action={routeToNextPage}
            pageRoute="/signin"
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
            action={routeToNextPage}
            pageRoute="/signup"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
