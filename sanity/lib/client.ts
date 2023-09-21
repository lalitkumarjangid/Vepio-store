import { apiVersion, dataset, projectId, useCdn } from "../env";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
