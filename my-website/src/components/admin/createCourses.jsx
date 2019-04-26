import React, { Component } from 'react';

class CreateCourses extends Component {
    state = {
        title: '',
        time: '',
        imageUrl: '',
        price: ''
    }

handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
};

render() {
    return (
        <form
            onSubmit={this.handleSubmit}
            className="form-group bg-light border rounded m-2 shadow p-5"
        >
            <label className="col-md-4 control-label m-2" for="txtTitle">
                Courses Title
                </label>
            <input
                id="txtTitle"
                name="textinput"
                type="text"
                placeholder="Courses Title"
                className="form-control input-md m-2"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
            />
            <label
                className="col-md-4 control-label m-2"
                for="txtCourseTime"
            >
                Courses During Time
                </label>
            <input
                id="txtCourseTime"
                name="textinput"
                type="text"
                placeholder="hh:mm:ss"
                className="form-control w-25 m-2"
                value={this.state.time}
                onChange={e => this.setState({ time: e.target.value })}
            />
            <label
                className="col-md-4 control-label m-2"
                for="txtCoursePrice"
            >
                Courses Price
                </label>
            <input
                id="txtCoursePrice"
                name="textinput"
                type="text"
                placeholder=""
                className="form-control w-25 m-2"
                value={this.state.price}
                onChange={e => this.setState({ price: e.target.value })}
            />

            <input
                id="txtImageUrl"
                name="textinput"
                type="text"
                placeholder="ImgUrl"
                className="form-control m-2"
                value={this.state.imageUrl}
                onChange={e => this.setState({ imageUrl: e.target.value })}
            />

            <button className="btn btn-success m-5">Create New Courses</button>
        </form>
    );
}
}

export default CreateCourses;
