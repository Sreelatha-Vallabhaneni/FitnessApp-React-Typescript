import useMediaQuery from '@/hooks/useMediaQuery';
import Link from './Link'
import { SelectedPage } from '@/utils/types';

type Props = {
    //isTopOfPage : boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    flexBetween: string
}

const MenuItems = ({selectedPage, setSelectedPage, flexBetween}: Props) => {
    const isMobile = useMediaQuery("(max-width: 639px)")
  return (
    <div className={`${flexBetween} ${isMobile ? 'ml-[33%] flex flex-col gap-10 text-2xl' : 'gap-8 sm:gap-6 text-sm'}`}>
        <Link
            page= "Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            page= "Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            page= "Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            page= "Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
    </div>
  )
}

export default MenuItems