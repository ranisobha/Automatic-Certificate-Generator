import React, { Component } from "react";
import "./Certificate.css";
import image from "./image.png";
import {useForm} from 'react-hook-form';
import { exportComponentAsPNG } from "react-component-export-image";
class SimpleForm extends Component {
    
  certificatewrapper = React.createRef();
  
  state = {
    name: "",
    date: "",
    CertificateNumber: "",
    show: false,
    nameErrorr:"Full name is required",
    dateError:"",
    CertificateNumberError:"",

  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  };

  
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2 className="mt-3">Automatic Certificate Generator</h2>
          <div className="container mt-4">
            <div className="row">
              <div className="col-12 col-md-12 col-sm-12">
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    placeholder="Enter your fullname..."
                    
                  />
                 
                </div>
                <div class="mb-3">
                  <label class="form-label">Date of Birth</label>
                  <input
                    type="date"
                    class="form-control"
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                    id="date"
                    placeholder="Enter your dob..."
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label text-left">Certificate Number</label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.CertificateNumber}
                    onChange={(e) =>
                      this.setState({ CertificateNumber: e.target.value })
                    }
                    id="number"
                    placeholder="Enter your Certificate Number..."
                  />
                </div>
                <button className="button btn-block">Submit</button>
              </div>
            </div>
          </div>
          <br />
          {this.state.show ? (
            <>
              <button
                onClick={() => {
                  exportComponentAsPNG(this.certificatewrapper, {
                    html2CanvasOptions: { backgroundColor: null },
                  });
                }}
                className="mb-2"
              >
                Image Download
              </button>
              <div id="certificatewrapper" ref={this.certificatewrapper}>
                <div className="label-name">
                  {" "}
                  <h2>{this.state.name}</h2>
                </div>
                <div className="text-name">
                  <h1>React Frontend Developer</h1>
                </div>
                <div className="label-date">
                  <h4>{this.state.date}</h4>
                </div>
                <div className="label-date">
                  <h6>{this.state.CertificateNumber}</h6>
                </div>
                <div className="img mb-5 col-12 col-md-12 col-sm-6">
                  <img src={image} width="90%" alt="image" />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </form>
      </>
    );
  }
}

export default SimpleForm;
