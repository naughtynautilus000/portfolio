interface Props {
  file: Record<string, any>
  index: number
}

const Feature = ({file, index}: Props) => {
  const isEven = index % 2 == 0
  const textAlign = isEven ? "text-end" : "text-start"
  const colStartContent = isEven ? "col-start-6" : "col-start-1"
  const colStartImage = !isEven ? "col-start-6" : "col-start-1"
  const justifyContent = isEven ? "justify-end" : "justify-start"

  return (
    <li key={index} className={`grid grid-cols-12 h-[250px] gap-[10px] w-full ${textAlign}`}>
      <div className={`${colStartContent} col-span-7 row-start-1 row-span-full`}>
        <h5 className="text-highlight text-lg font-extralight gap-[10px]">Featured Project</h5>
        <h4 className="text-white text-2xl font-bold">{file.title}</h4>
        <p className="bg-dark-blue h-fit p-[15px] rounded-lg shadow-[0_2px_5px_rgb(0,0,0)] my-4">{file.description}</p>
        <ul className={`flex ${justifyContent} gap-[10px] text-white`}>
          {file.tech.map((t: string, index: number) => 
            <li key={index} >{t}</li>
          )}
        </ul>
      </div>
      <div className={`-z-10 ${colStartImage} col-span-7 row-start-1 row-span-full bg-gray-300`}></div>
    </li>
  )
}

export default Feature
