import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

/**
 * Build a URL from a Sanity image reference (e.g. a `coverImage` field).
 * Returns a builder — chain `.width()`, `.height()`, `.url()` as needed.
 */
export function urlForImage(source) {
  return builder.image(source);
}
