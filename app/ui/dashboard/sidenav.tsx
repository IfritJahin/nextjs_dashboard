import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2" style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: '4px 6px'}} >
<Link
  className="flex items-center justify-start rounded-md bg-blue-600 p-4 md:p-6"
  href="/"
>
  <div style={{height: '60px'}}>
    <AcmeLogo />
  </div>
</Link>
<div className="flex flex-grow flex-col md:flex-row md:justify-between md:space-x-2 md:space-y-2"  style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
  <NavLinks />
  <div className="hidden w-full md:block h-12"></div>
  <form>
    <button className="flex items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
      <PowerIcon className="w-4 h-4 md:w-6 md:h-6" /> {/* Adjust icon size */}
      <div className="hidden md:block">Sign Out</div>
    </button>
  </form>
</div>

    </div>
  );
}
