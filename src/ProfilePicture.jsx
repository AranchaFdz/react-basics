

function ProfilePicture() {

    const imageUrl = 'src/assets/Yo1.jpg'

    const handleClick = () => console.log("OUCH!")

    return (<img onClick={handleClick} src={imageUrl} />)

    /* const imageUrl = 'src/assets/Yo1.jpg'

    const handleClick = (e) => e.target.style.display = "none"

    return (<img onClick={(e) => handleClick(e)} src={imageUrl} />) */


}

export default ProfilePicture