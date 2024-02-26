import Logo from "@/assets/Logo.png";
import { Bars2Icon, XMarkIcon  } from "@heroicons/react/24/solid";

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={Logo} alt="Evo fitness logo" />
                </div>
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our Classes</p>
                        <p>Contact Us</p>
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a member</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button
                        className="rounded-full bg-secondary-500 p-2"
                        //onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <Bars2Icon className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;