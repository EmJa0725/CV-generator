import Image from 'next/image'
import { profile } from '../profile'

const MyProfile = () => (
    <div className="card card-body bg-secondary text-light">
        <div className="row">
            <div className="col-md-4">
                <Image src={`/${profile.MyData.image}`} alt="Profile image" width="400" height="300" />
            </div>
            <div className="col-md-8">
                <h1>{profile.MyData.name}</h1>
                <h3>{profile.MyData.position}</h3>
                <p className="text-dark">{profile.MyData.description}</p>
                <a href="/contact-me">Contact me</a>
            </div>
        </div>
    </div>
)

export default MyProfile;
