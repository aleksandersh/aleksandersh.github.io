export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/assets": "assets",
        "src/CNAME": "CNAME",
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        htmlTemplateEngine: "liquid",
    };
}
