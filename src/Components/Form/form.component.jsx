import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                description: '',
                type: '',
                link: '',
                email: '',
            },
            modalOpen: false,
            submitting: false
        }
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitting: true
        })
    
        const templateId = 'template_htxEFigV';
    
        this.sendFeedback(templateId, {
          title: this.state.formData.title,
          description: this.state.formData.description,
          type: this.state.formData.type,
          link: this.state.formData.link,
          email: this.state.formData.email
        })

        setTimeout(() => {
            this.setState({
                modalOpen: false
            })
        }, 3000);
    }
    
    sendFeedback(templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
        ).then(res => {
            this.setState({submitting: false})
          console.log('Email successfully sent!')
          const formFields = document.querySelector('.form-content-wrapper');
          formFields.innerHTML = "<p class='success-message'>Thank you for your submission! It will be added to the list as soon as possible.</p>"
        })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render(){
        const { formData, submitting } = this.state;
        const modalState = this.state.modalOpen ? 'open' : '';

        return (
            <div className="form-section">
                <button className="btn btn-yellow" onClick={this.openModal}>Submit a Resource</button>
                <div className={`form-modal ${modalState}`}>
                    <div className="form-wrapper">
                        <button className="close" onClick={this.closeModal}>
                            <span></span><span></span>
                        </button>
                        <h3>Submit a Resource</h3>
                        <div className="form-content-wrapper">
                            <form className="submission-form" onSubmit={this.handleSubmit}>
                                <TextField 
                                    label="Title" 
                                    variant="outlined"
                                    name="title"
                                    defaultValue={formData.title}
                                    onChange={this.handleChange}
                                    required
                                />
                                <TextField 
                                    label="Description" 
                                    variant="outlined"
                                    name="description"
                                    defaultValue={formData.description}
                                    onChange={this.handleChange}
                                />
                                <FormControl variant="outlined">
                                    <InputLabel id="select-type">Type</InputLabel>
                                    <Select
                                        labelId="select-type"
                                        id="demo-simple-select-outlined"
                                        defaultValue={formData.type}
                                        onChange={this.handleChange}
                                        name="type"
                                        label="Type"
                                    >
                                        <MenuItem value="event">Event</MenuItem>
                                        <MenuItem value="fund">Fund</MenuItem>
                                        <MenuItem value="organization">Organization</MenuItem>
                                        <MenuItem value="petition">Petition</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField 
                                    label="Link" 
                                    name="link"
                                    variant="outlined"
                                    defaultValue={formData.link}
                                    onChange={this.handleChange}
                                    required
                                />
                                <TextField 
                                    label="Email (optional)" 
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    defaultValue={formData.email}
                                    onChange={this.handleChange}
                                />
                                {
                                    submitting ?
                                    <button disabled className="btn btn-inactive">
                                        <div className="loader"></div>
                                    </button>
                                    :
                                    <button className="btn btn-hollow" type="submit">Submit</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;