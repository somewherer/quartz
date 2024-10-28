import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const sayings: Array<string> = ["What's most valuable is not your time. It's how you spend your attention.","Ultimately, I'm just too fascinated by what everyone is thinking.","We need to take over the world, with all our life. Even if your goal isn't to take over the world, it's still a goal; and if you die, you need to look back and say: I tried.","A friend, I believe, is someone you can meet in a park and invite to your picnic blanket.","Carrot smoothies are very yum.","Imagine not having AI and having to write everything yourself.","Your body is your only home.","There's plenty of beauty here too."];
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {sayings[Math.floor(Math.random() * sayings.length)]}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
