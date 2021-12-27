module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('assets/css')
  eleventyConfig.addPassthroughCopy('assets/js')
  eleventyConfig.addPassthroughCopy('assets/webfonts')
  eleventyConfig.addPassthroughCopy('CNAME')
  return {
    passthroughFileCopy: true,
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
  };
};
