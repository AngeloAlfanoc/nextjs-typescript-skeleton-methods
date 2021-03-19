
const { withPlugins, optional } = require('next-compose-plugins');
const images = require('next-images');

const nextConfig = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    },

}

module.exports = withPlugins([
  images,
], nextConfig);



