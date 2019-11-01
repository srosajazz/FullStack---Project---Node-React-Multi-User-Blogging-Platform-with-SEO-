import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <h2>Index Page</h2>
            <Link href="/signup">
            <a>Signup</a>
            </Link>

            {/* static page */}
            {/* <div>
               Soon after the original MOTIF was released in 2001 it was recognized as the best sounding, top selling and most requested music workstation on the market. Over time, it has continued to evolve and improve its expressiveness and functionality. At the same time, the online community of end users, sound programmers, software developers and product support specialists at yamahasynth.com has expanded into a vibrant on line music production community. The MOTIF breathes new life into live performances with its expressive sounds and intuitive control. In music creation, the MOTIF not only offers its own music creation capabilities, it also offers a system for integrating those capabilities with a variety of software applications. And now, the next generation "XF" builds on the decade long heritage of MOTIF, and provides groundbreaking with Flash memory expansion capabilities that will set a new standard for keyboard workstations for years to come.
            </div> */}
        </Layout>
    );
};

export default Index;