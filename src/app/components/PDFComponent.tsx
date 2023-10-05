
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'

const prisma = new PrismaClient();

const PDFComponent = async () => {
  const fetchPDFs = async () => {
    const pdfs = await prisma.pdfs.findMany();
    return pdfs;
  };

  const session = await getServerSession(authOptions);

  return (
    <div className="container mx-auto p-4 bg-sky-500/75 mt-5">
      <h1 className="text-2xl font-bold mb-4">List of PDFs</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Filename</th>
          </tr>
        </thead>
        <tbody>
          {fetchPDFs().then(pdfs =>
            pdfs.map(pdf => (
              <tr key={pdf.id}>
                <td className="py-2 px-4 border-b">
                  <Link href={`/pdf/${pdf.id}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    {pdf.id}
                  </Link>
                </td>
                <td className='border-b'>{pdf.title}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PDFComponent;
