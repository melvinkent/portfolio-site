import React from "react";

const UserFind: React.FC = () => {
    const users = [
        {
            name: 'Melvin Kent Jonathan',
            age: 19,
            designation: 'Software Engineer',
        },
        {
            name: 'Ivan Leovandi',
            age: 19,
            designation: 'Programmer', 
        },
        {
            name: 'Alexander Jason',
            age: 20,
            designation: 'Designer', 
        },
        {
            name: 'Vanessa Rebecca',
            age: 20,
            designation:'UX Writer', 
        },
        {
            name: 'Marcheline Fanni',
            age: 20,
            designation:'Back-end Engineer', 
        },
    ];
    const [userList, setUserList] = React.useState<
        {name: string, age: number, designation: string}[] | undefined
    >(users);
    const [text, setText] = React.useState<string>('');

    const handleOnClick = ()=> {
        const findUsers = 
            userList && userList?.length > 0 
                ? userList?.filter ((u) => u?.name === text) 
                : undefined;

        console.log(findUsers)

        setUserList(findUsers);
    };

    return (
        <div className="pt-4">
            <div className='title bg-indigo-500 h-16 rounded-full'>
                <h1 className="text-2xl text-center my-4 text-white font-bold py-3">Partners List</h1>
            </div>

            <div className='p-4 input__wrapper flex flex-col gap-2 '>
                <input 
                type="text"
                placeholder="Type Partner's FULL NAME..."
                value ={text}
                className="bg-transparent justify-center border border-2 py-1 border-yellow-500 shadow-md"
                onChange = {(e)=> {
                    setText(e.target.value); setUserList(users)
                
                }}
                />
                <button disabled={!text} onClick={handleOnClick} className="bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-600  rounded ">Search</button>
            </div>

            <div className="body mb-5" >
                    {userList && userList?.length ===0 && (
                    <div className='notFound'>
                        No User Found
                    </div>
                    )}
                {userList && userList?.length>0 && 
                    userList?.map(user => {
                    return (
                    <div className ="body__item  shadow-md border hover:text-white hover:bg-yellow-500 p-4">
                        <h3 className="font-bold">Name : {user?.name}</h3>
                        <p>Age: {user?.age}</p>
                        <p>Designation: {user?.designation}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}

export default UserFind