import { getServerSession } from 'next-auth';
import Nextauth from '../auth/[...nextauth]';

const Dashboard = async () => {
  const session = await getServerSession(Nextauth);
  if (!session) {
    return <h1>No session</h1>;
  } else {
    return <h1>This is amaizing</h1>;
  }
};

export default Dashboard;
