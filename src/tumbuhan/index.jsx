import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header';
import CardList from './cardlist';
import getData from './data_tumbuhan';

class Tumbuhan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listTumbuhan: getData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onDeleteHandler(id) {
        const listTumbuhan = this.state.listTumbuhan.filter(tumbuhan => tumbuhan.id !== id)
        this.setState({listTumbuhan})
    }

    render() {

        const headerStyle = {
            header: {
                margin: '50px'
            }
        }

        return (
            <div>
                <div style={headerStyle.header}>
                    <Header />
                </div>
                <CardList listTumbuhan={this.state.listTumbuhan} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

const rapi = (
    <div>
        <Tumbuhan/>
    </div>
)

const root = createRoot(document.getElementById('root'));
root.render(rapi);