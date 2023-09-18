import React from "react";
import { useState } from "react";

const imageUploader = () => {
    return (
      <>
      <h1>To Upload Image on mongoDB</h1>
      <hr />
      <div>
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div>
            <label htmlFor="name">Image Title</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="title"
              required
            />
          </div>
          <div>
            <label htmlFor="desc">Image Description</label>
            <textarea
              id="desc"
              name="desc"
              rows="2"
              placeholder="Description"
              required
            >
            </textarea>
          </div>
          <div>
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default imageUploader;
