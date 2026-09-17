"""Extract the original GIF frames for CSS playback (requires Pillow)."""

from pathlib import Path

from PIL import Image, ImageSequence


ROOT = Path(__file__).resolve().parents[1]

for direction in ("e", "w"):
    source = ROOT / "img" / f"construct_{direction}.gif"
    with Image.open(source) as animation:
        frames = [frame.convert("RGBA") for frame in ImageSequence.Iterator(animation)]
        assert animation.size == (48, 48) and len(frames) == 6
        sheet = Image.new("RGBA", (48 * len(frames), 48))
        for index, frame in enumerate(frames):
            sheet.paste(frame, (48 * index, 0))
        sheet.save(source.with_suffix(".png"), optimize=True)
