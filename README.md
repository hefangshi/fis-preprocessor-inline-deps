# fis-preprocessor-inline-deps

扩展FIS的html inline能力

## 功能

 使用FIS资源嵌入能力时，如果在HTML中嵌入一另一段HTML代码，将不仅仅嵌入HTML内容，还会为两段HTML片段间添加依赖关系，主要用于配合 [autoload](https://github.com/hefangshi/fis-postpackager-autoload) 插件使用，在嵌入一段HTML代码时，可以同时加载此片段的同名依赖资源，而无需在注释中显式声明。

## 用法

```bash
$ npm install -g fis-preprocessor-inline-deps
$ vi path/to/project/fis-conf.js
```

```javascript
// file : path/to/project/fis-conf.js

// for fis 1.9+
fis.config.set('modules.preprocessor.html', 'components,inline-deps'); 

// for fis without fis-components
//fis.config.set('modules.preprocessor.html', 'inline-deps');

// set html file to a mod file
fis.config.get('roadmap.path').unshift({
    reg: '**.html',
    isMod: true 
});
```
