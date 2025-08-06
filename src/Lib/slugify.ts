export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // ganti spasi jadi tanda hubung
    .replace(/[^\w-]+/g, "") // hapus karakter aneh
    .trim();
}
