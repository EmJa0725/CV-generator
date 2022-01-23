import { profile } from '../profile'
console.log(profile);
const Skills = () => (
    <div className="card bg-light">
        <div className="card-body">
            <h1>Skills</h1>
            {
                profile.skills.map(({ skill, percentage }, index) => (
                    <div className="py-3" key={index}>
                        <h5>{skill}</h5>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated skill-progress"
                                role="progressbar"
                                style={{ width: `${percentage}%`, backgroundColor: '#114671' }}
                                aria-valuemax="100"
                                aria-valuemin="0"
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Skills;
