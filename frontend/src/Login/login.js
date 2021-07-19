import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="fullName" className="form-label">Full Name</label>
                            <input type="Name" className="form-control" id="fullName" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </>
        )
    }
}
