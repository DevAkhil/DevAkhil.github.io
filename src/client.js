import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "nrzw6s1g",
  dataset: "production",
  useCdn: true,
});
