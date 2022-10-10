import React from "react";
import { Create, SimpleForm, TextInput, DataInput } from "react-admin";

const PostCreate = (props) => {
  return <Create title="Create a Post" {...props}></Create>;
};

export default PostCreate;
