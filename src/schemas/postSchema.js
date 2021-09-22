import * as yup from "yup";

const PostSchema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  imageUrl: yup.string().trim().required("Please enter the image url"),
  content: yup.string().trim().required("Content cannot be blank"),
});

export { PostSchema };
