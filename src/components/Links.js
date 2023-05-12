import { pageLinks, socialLinks } from "../data"



export function Pagelinks({ parentClass, linkClass }) {
    return <ul className={parentClass}>
        {pageLinks.map((link) => {
            return (
                <li key={link.id}>
                    <a href={link.href} className={linkClass}>{link.text}</a>
                </li>
            )
        })}
    </ul>
}

export function SocialLinks({ parentClass, linkClass }) {
    return (
        <ul className={parentClass}>
            {socialLinks.map((social) => {
                return (
                    <li key={social.id}>
                        <a href={social.href} target="_blank" className={linkClass}><i className={social.icon}></i></a>
                    </li>
                )
            })}
        </ul>
    )
}
