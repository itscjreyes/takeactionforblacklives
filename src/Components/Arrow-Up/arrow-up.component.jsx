import React, {Component} from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class ArrowUp extends Component {
    constructor(){
        super();
        
        this.state = {
            visible: false
        }
    }
    componentDidMount(){
        document.addEventListener('scroll', () => {
            const pos = window.scrollY;
            const posBottom = window.innerHeight + window.scrollY;
            const bottom = document.body.offsetHeight - 100;
            const header = document.querySelector('.header').offsetHeight;
            const filters = document.querySelector('.filters-wrapper').offsetHeight;
            const title = document.querySelector('.location-title').offsetHeight;
            const beforeResults = header + filters + title;
            
            if (pos > beforeResults && posBottom < bottom) {
                this.setState({
                    visible: true
                })
            } else if ((window.innerHeight + window.scrollY) >= bottom) {
                this.setState({
                    visible: false
                })
            } else {
                this.setState({
                    visible: false
                })
            }
        })
    }

    handleClick = () => {
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;

        window.scrollTo({
            top: headerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        const {visible} = this.state;
        return (
            <button className={`floating-btn ${visible}`} onClick={this.handleClick}><KeyboardArrowUpIcon/></button>
        )
    }
}

export default ArrowUp;