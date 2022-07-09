import ImgProfile from '../../images/profile.JPG';

const Profile=()=>{
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img className="activator" src={ImgProfile} alt="Nokhalal Mahato" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              <b>Nokhalal Mahato</b>
            </span>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
      </div>
    );
}

export default Profile;