import profile from '../../assets/images/profile.png'

const Nav = () => {
    return (
        <div className='flex justify-between p-4 m-5 border-b-2 items-center'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1> 
            <img src={profile} alt="" />           
        </div>
    );
};

export default Nav;