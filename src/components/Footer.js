import { socialLinks } from "../data";
import { Pagelinks, SocialLinks } from "./Links";

export function Footer({ }) {
    return <footer className="section footer">

        <Pagelinks parentClass="footer-links" linkClass="footer-link" />
        <SocialLinks parentClass="footer-icons" linkClass="footer-icon" />

        <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>;
}
