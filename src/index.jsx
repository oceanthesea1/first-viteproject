import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header';
import CardList from './CardList';
import { getData } from './data';

class Biodata extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myBiodata: getData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onDeleteHandler(id) {
        const myBiodata = this.state.myBiodata.filter(siswa => siswa.id !== id)
        this.setState({myBiodata})
    }

    render() {
        return (
            <div>
                <Header />
                <CardList myBiodata={this.state.myBiodata} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

const rapi = (
    <div>
        <Biodata/>
    </div>
)

const root = createRoot(document.getElementById('root'));
root.render(rapi);