import React, { Component } from 'react';
import PageContainer from '../common/PageContainer';
import AddUserForm from '../blog/AddUserForm';
import BlogListFiltrationPanel from '../blog/BlogListFiltrationPanel';
import BlogList from '../blog/BlogList';

const list = [
    {
        createdAt: "2018-02-03T04:41:45.586Z",
        updatedAt: "2018-02-03T04:41:45.586Z",
        _id: "5a753d89aa7586161cef2403",
        title: "Zhabinsky's birthday was on 28.01.2018",
        author: "Yury Karalkou",
        views: 1,
        __v: 0
    },
    {
        createdAt: "2018-02-03T04:45:24.589Z",
        updatedAt: "2018-02-03T04:45:24.589Z",
        _id: "5a753e64ea59510b0ca6271c",
        title: "Documents (aka Objects)",
        author: "MLab",
        views: 100500,
        body: "From the \"Documents\" tab you can browse and search for objects in this collection. All standard query constructs are supported except for map/reduce queries. To use map/reduce, use the MongoDB shell (note that temporary result collections will be viewable in mLab). You can also add, edit, and delete individual documents from here. Bulk collection updates are not yet supported in this UI (although they are supported in the shell).",
        __v: 0
    }
];

class Start extends Component {
    static propTypes = {};

    render() {
        return (
            <PageContainer>
                <h2>Start Page</h2>
                <AddUserForm/>
                <BlogListFiltrationPanel/>
                <BlogList list={list}/>
            </PageContainer>
        )
    }
}

export default Start;