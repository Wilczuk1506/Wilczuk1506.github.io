import Skill from "../components/Skill";


const AboutMe = ({ sectionRef }) => {
    const skills = [
        {
            description: `I've been working with C# since 2022, used for small projects and game development.`,
            experience: 5,
            icon: "./icons/cs.png"
        },
        {
            description: "",
            experience: 4,
            icon: "./icons/html.png"
        },
        {
            description: "",
            experience: 4,
            icon: "./icons/cpp.png"
        },
        {
            description: "",
            experience: 1,
            icon: "./icons/python.png"
        }
    ];

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-center h-screen snap-start bg-gray-950">
            <div className="flex flex-wrap gap-10">
                {
                    skills.map((skill, index) => (
                        <Skill
                            key={index}
                            description={skill.description}
                            experience={skill.experience}
                            icon={skill.icon}
                        />
                    ))
                }
            </div>
            <div>
                The displayed experience is relative to each other skill.
            </div>
        </section>
    );
}

export default AboutMe;