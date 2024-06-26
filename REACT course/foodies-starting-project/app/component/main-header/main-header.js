import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
    usePathname();
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals" className="">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );

}