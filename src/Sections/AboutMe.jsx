import Skill from "../components/Skill";
import skills from "../data/skills.json";

const AboutMe = ({ sectionRef }) => {

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen snap-start bg-gray-950">
            <div className="flex flex-wrap gap-10 justify-center">
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
            <div className="mt-3">
                The displayed experience is relative to each skill, with 5 indicating the one I'm most proficient in.
            </div>
        </section>
    );
}

export default AboutMe;