import image1 from '/Users/michellekong/my-app/src/images/Michelle1.JPG';

export default function About(title, image) {
    this.title = title;
    this.image = image
}

var x = [
    new About(
        "Threads",
        image1
    )
]

export { x };