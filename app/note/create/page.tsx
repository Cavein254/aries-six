import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <div>
          <label>Title</label>
          <input type="text" placeholder="Enter title" />
        </div>
        <div>
          <label>Sub Title</label>
          <input type="text" placeholder="Enter subtitle" />
        </div>
        <div>
          <label>Content</label>
          <input type="text" placeholder="Enter Content" />
        </div>
        <div>
          <label>Tags</label>
          <input type="text" placeholder="Tags" />
        </div>
      </div>
    </>
  );
}
