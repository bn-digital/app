/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: 'export',
    distDir: 'build',
    // compress: true,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: 'bottom-right',
    },
    compiler: {
        emotion: true,
    },
    // images: {
    //     unoptimized: true
    // },
    experimental: {
        typedRoutes: true,
    //    optimizePackageImports: ['antd'],
        webVitalsAttribution: ['CLS', 'LCP', 'FCP']
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: { dimensions: false },
                }
            ],
        })

        return config
    },
}

module.exports = nextConfig
