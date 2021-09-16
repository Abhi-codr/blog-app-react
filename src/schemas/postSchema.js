import * as yup from "yup";

const PostSchema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  content: yup.string().trim().required("Content cannot be blank"),
});

export { PostSchema };
