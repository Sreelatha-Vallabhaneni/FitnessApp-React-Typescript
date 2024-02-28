import { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Bars2Icon, XMarkIcon  } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/utils/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "../ActionButton";
import MenuItems from "./MenuItems";

type Props = {
    isTopOfPage : boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const isMobile = useMediaQuery("(max-width: 639px)")
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16 sm:gap-10`}>
                    <img src={Logo} alt="Evo fitness logo" />
                    {!isMobile ? 
                        <div className={`${flexBetween} w-full`}>
                            <MenuItems selectedPage={selectedPage} setSelectedPage={setSelectedPage} flexBetween={flexBetween} />
                            <div className={`${flexBetween} gap-8 sm:gap-6 sm:ml-8`}>
                                <p>Sign In</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                            </div>
                        </div>
                        :
                        <div>
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars2Icon className="h-6 w-6 text-white" />
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
        {/* MOBILE MENU MODAL */}
        {isMobile && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <MenuItems selectedPage={selectedPage} setSelectedPage={setSelectedPage} flexBetween={flexBetween} />
            </div>
        )}
    </nav>
  )
}

export default Navbar;