import {withRouter} from 'next/router'

export default withRouter((props) => (
    <>
       <h1>{props.router.query.title}</h1>
       <p>This is the blog post content.</p>
    </>
))