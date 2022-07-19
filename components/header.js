import Link from 'next/link'

export default function Header(props) {
    return(
        <>{!props.user ? <>Login</>: <>Logout</>}
    <Link href="/"><a><div class="w-full h-16 bg-black text-white flex items-center">AquariumML</div></a></Link>
    <Link href="/auth/login"><a>Login</a></Link>
    </>
    )
}
