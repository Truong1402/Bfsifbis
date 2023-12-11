
import {HeaderOnly} from "~/components/Layout"
import HomePage from "~/pages/HomePage";
import FollowPage from "~/pages/FollowPage";
import Upload from "~/pages/Upload";

const puclicRoutes = [

    { path: "/", component: HomePage },
    { path: "/follow", component: FollowPage },
    { path: "/upload", component: Upload,Layout:HeaderOnly }
]


export  {puclicRoutes} 