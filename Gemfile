source "https://rubygems.org"

# 本地预览用。GitHub Pages 使用平台自带的 gem 集合构建，
# 不会读取这个文件——所以这里只需列出 Pages 官方支持的插件。
gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows / JRuby 兼容
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
