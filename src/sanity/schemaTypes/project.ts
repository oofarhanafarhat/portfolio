
export const project = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description" },
    { name: "image", type: "image", title: "Image" },
    { name: "vercel", type: "url", title: "vercel URL" }, // ✅ Add this
   
  ],
};