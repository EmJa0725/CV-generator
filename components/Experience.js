import { profile } from '../profile'

const Experience = () => {
    return (
        <div className="card bg-light">
            <div className="card-body">
                <div ></div>
                <h1>Experience</h1>
                <ul>
                    {profile.experiences.map(({ title, company, from, to, tasks }, index) => (
                        <li key={index} className="py-2">
                            <h3>{title}</h3>
                            <h4>{company}</h4>
                            <h5>{from} - {to}</h5>
                            <ul>
                                {tasks.map((task, index2) => (
                                    <li key={index2}>{task}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Experience;
