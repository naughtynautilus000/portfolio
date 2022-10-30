interface Props {
  file: Record<string, any>
  index: number
}

const ProjectCard = ({file, index}: Props) => {
  return (
    <li key={index} className="aspect-square w-[30%] min-w-[250px] bg-dark-blue p-3 grid">
      <h4 className=" text-blue font-bold text-md text-xl">{file.title}</h4>
      <p>{file.description}</p>
      <ul className="flex flex-row self-end gap-2">
        {file.tags.map((t: string, index: number) => <li key={index}>{t}</li>)}
      </ul>
    </li>
  )
}

export default ProjectCard

