import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <>
    <div className="hidden text-sm font-semibold md:flex items-center">
        <div className='mr-2'>
          <img src="src/img/user_icon-icons.com_66546.ico" className="w-8 h-8" alt="user icon" />
        </div>
        <div className="mr-2">{username}</div> {/* Add some margin for spacing */}
      </div>
    </>
  );
}

export default Username;
