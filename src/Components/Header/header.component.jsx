import React, {Component} from 'react';
import Form from '../Form/form.component';
import topLeft2 from '../../Assets/top-left@2x.png';
import topRight2 from '../../Assets/top-right@2x.png';
import bottomLeft2 from '../../Assets/bottom-left@2x.png';
import bottomRight2 from '../../Assets/bottom-right@2x.png';
import topLeft from '../../Assets/top-left.png';
import topRight from '../../Assets/top-right.png';
import bottomLeft from '../../Assets/bottom-left.png';
import bottomRight from '../../Assets/bottom-right.png';
import 'lazysizes';

class Header extends Component {
    triggerScroll = () => {
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;

        window.scrollTo({
            top: headerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }


    componentDidMount = () => {
        document.addEventListener('scroll', () => {
            const pos = window.scrollY;
            const topRight = document.querySelector('.top-right');
            const topLeft = document.querySelector('.top-left');
            const bottomLeft = document.querySelector('.bottom-left');
            const bottomRight = document.querySelector('.bottom-right');

            if (pos > 0 && window.innerWidth > 767) {
                topRight.style.transform = `translate(0,-${pos * 2.2}px)`;
                topLeft.style.transform = `translate(0,-${pos}px)`;
                bottomLeft.style.transform = `translate(0,-${pos / 1.5}px)`;
                bottomRight.style.transform = `translate(0,-${pos * 1.8}px)`;
            }
        })
    }

    render () {
        return (
            <div className="header">
                <div className="container">
                    <img 
                        data-srcset={`${topLeft} 1x, ${topLeft2} 2x`}
                        className="lazyload gradient top-left"  
                        alt=''
                        aria-hidden="true"
                    />
                    <img 
                        data-srcset={`${topRight} 1x, ${topRight2} 2x`}
                        className="lazyload gradient top-right"  
                        alt=''
                        aria-hidden="true"
                    />
                    <img 
                        data-srcset={`${bottomLeft} 1x, ${bottomLeft2} 2x`}
                        className="lazyload gradient bottom-left"  
                        alt=''
                        aria-hidden="true"
                    />
                    <img 
                        data-srcset={`${bottomRight} 1x, ${bottomRight2} 2x`}
                        className="lazyload gradient bottom-right"  
                        alt=''
                        aria-hidden="true"
                    />
                    <h1 className="lazyload">Take Action&nbsp;for Black Lives</h1>
                    <div className="content-wrapper lazyload">
                        <p>There is a lot of information out there. This site is an attempt to compile a list of petitions, funds, organizations, events and other resources supporting the Black community at the city, state/provincial, and national levels. Please continue to add to the list by submitting a resource.</p>
                        <div className="btn-wrapper">
                            <button className="btn btn-full" onClick={this.triggerScroll}>Explore Actions</button>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;