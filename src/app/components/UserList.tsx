import React, { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await prisma.user.findMany();
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id: string) => {
    try {
      await prisma.user.delete({
        where: { id },
      });

      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.email} <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;