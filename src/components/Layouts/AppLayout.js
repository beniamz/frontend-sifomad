import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
            <hr className="mt-1 mb-1"></hr>   
            <footer className="text-center">
                <div className="p-3 bg-white relative font-semibold text-sm text-slate-500">
                    <p>Copyright @ Sistem Informasi Madrasah (Sifomad)</p>
                    <p>KKMI Sukmajaya. v.1.0.2022</p>
                </div>
            </footer>
        </div>
    )
}

export default AppLayout
