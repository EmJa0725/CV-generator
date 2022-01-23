import Image from 'next/image'
import { profile } from '../profile'

const Projects = () => (
    <div className="card card-body bg-dark">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-light">MY PROJECTS</h1>
            </div>
            {
                profile.projects.map(({ name, description, image, url }, index) => (
                    <div className="col-md-4 p-3" key={index}>
                        <div className="card h-100">
                            <Image src={`/${image}`} alt="Soccer api" className="img-fluid" width="600" height="300" />
                            <div className="card-body">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <a href={`${url}`} target="_blank" rel="noreferrer">Know more</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Projects;