module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy("src/assets/css");

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_includes/_layouts",
            data: "_data"
        }
    };
}