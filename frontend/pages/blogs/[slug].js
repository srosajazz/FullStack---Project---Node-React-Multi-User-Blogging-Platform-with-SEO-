// Will use for many blog pages
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { singleBlog } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const SingleBlog = ({ blog, router}) => {
return <>
<Layout>
    <main>
        <article>
            <div className="container-fluid">
                <section>
                    {JSON.stringify(blog)}
                </section>
            </div>
        </article>
    </main>
</Layout>
</>
}
SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug).then(data => {
        if(data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data)
            return {blog: data}
        }
    })
}

export default withRouter(SingleBlog);