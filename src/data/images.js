const IMAGES = [
    {
        title: "Fashion",
        images: [...Array(25).keys()].map((i) => {
            const name = (i + 1).toString().padStart(2, '0');
            return {
                thumb: require(`../assets/images/fashion/thumbs/${name}-thumb.webp`),
                full: require(`../assets/images/fashion/thumbs/${name}-full.webp`),
            };
        })
    },
    {
        title: "Milano Fashion Week",
        images: [...Array(30).keys()].map((i) => {
            const name = (i + 1).toString().padStart(2, '0');
            return {
                thumb: require(`../assets/images/milanofashionweek/thumbs/${name}-thumb.webp`),
                full: require(`../assets/images/milanofashionweek/thumbs/${name}-full.webp`),
            };
        })
    },
    {
        title: "Artists",
        images: [...Array(30).keys()].map((i) => {
            const name = (i + 1).toString().padStart(2, '0');
            return {
                thumb: require(`../assets/images/artists/thumbs/${name}-thumb.webp`),
                full: require(`../assets/images/artists/thumbs/${name}-full.webp`),
            };
        })
    }
];

export default IMAGES;
