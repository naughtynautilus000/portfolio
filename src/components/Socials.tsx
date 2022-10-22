const Socials = () => {
  return (
    <div className="fixed w-fit flex flex-col justify-center items-center left-[100px] bottom-0 gap-2">
      <ul className="flex flex-col gap-[10px]">
        {[
          ["https://github.com/NathanAndrews20", "src/static/github.svg", "github icon"],
          ["https://www.linkedin.com/in/nathan-andrews-72ba29190", "src/static/linkedin.svg", "linkedin icon"]
        ].map(([link, icon, altText]) => (
          <li className="socials-filter hover:translate-y-[-5px] transition-all">
            <a href={link}>
              <img src={icon} alt={altText} className="h-[40px]"/>
            </a>
          </li>
        ))}
      </ul>
      <div className="h-[125px] w-[2px] mr-[5px] bg-blue"></div>
    </div>
  )
}

export default Socials
