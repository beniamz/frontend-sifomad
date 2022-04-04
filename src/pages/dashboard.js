import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            <h2 className="p-3 h-15 font-semibold text-xl text-slate-700">Dashboard</h2>

            <div className="p-2 font-inter grid grid-cols-1 gap-2 md:grid-cols-2 md:p-4  md:gap-4">                
                <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[4/3]"></div>
                <div className="h-15 bg-blue-500 aspect-[3/4] rounded-lg md:aspect-[4/3]"></div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
