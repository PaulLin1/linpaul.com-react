import os
from PIL import Image

def process_images(directory, max_size=1920):
    # Check directory
    if not os.path.isdir(directory):
        raise ValueError(f"Directory not found: {directory}")

    # Create output folder
    output_dir = os.path.join(directory, "processed")
    os.makedirs(output_dir, exist_ok=True)

    # Valid input extensions
    valid_exts = {".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".webp"}

    # Collect images
    image_files = [
        f for f in os.listdir(directory)
        if os.path.splitext(f)[1].lower() in valid_exts
    ]
    image_files.sort()

    # Get existing numeric names in output dir
    existing_nums = {
        int(os.path.splitext(f)[0])
        for f in os.listdir(output_dir)
        if f.split(".")[0].isdigit()
    }

    counter = 1
    processed_count = 0

    for filename in image_files:
        src_path = os.path.join(directory, filename)
        if not os.path.isfile(src_path):
            continue

        # Find next unused number
        while counter in existing_nums:
            counter += 1

        try:
            with Image.open(src_path) as img:
                # Check if image has transparency
                has_alpha = (
                    img.mode in ("RGBA", "LA") or
                    ("transparency" in img.info)
                )

                # Resize if too large (maintains aspect ratio)
                img.thumbnail((max_size, max_size))

                # Determine output format and extension
                if has_alpha:
                    dst_path = os.path.join(output_dir, f"{counter}.png")
                    img.save(dst_path, "PNG", optimize=True)
                else:
                    dst_path = os.path.join(output_dir, f"{counter}.jpg")
                    img = img.convert("RGB")
                    img.save(dst_path, "JPEG", quality=90, optimize=True)

            processed_count += 1
            existing_nums.add(counter)
            counter += 1
            print(f"✅ Saved {os.path.basename(dst_path)}")

        except Exception as e:
            print(f"⚠️ Skipping {filename} (error: {e})")

    print(f"\nDone! Processed {processed_count}/{len(image_files)} images into '{output_dir}'")

# Example usage
process_images("../public/imgs/")
