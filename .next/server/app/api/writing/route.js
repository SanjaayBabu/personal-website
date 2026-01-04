/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/writing/route";
exports.ids = ["app/api/writing/route"];
exports.modules = {

/***/ "(rsc)/./app/api/writing/route.ts":
/*!**********************************!*\
  !*** ./app/api/writing/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_writing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/writing */ \"(rsc)/./lib/writing.ts\");\n// app/api/writing/route.ts\n\n\nasync function GET() {\n    try {\n        const posts = (0,_lib_writing__WEBPACK_IMPORTED_MODULE_1__.getAllPostsMeta)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(posts);\n    } catch (err) {\n        console.error(\"Failed to list posts:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to list posts\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dyaXRpbmcvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQTJCO0FBQ2dCO0FBQ0s7QUFFekMsZUFBZUU7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFFBQVFGLDZEQUFlQTtRQUM3QixPQUFPRCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDRDtJQUMzQixFQUFFLE9BQU9FLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDLHlCQUF5QkY7UUFDdkMsT0FBT0wscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFRyxPQUFPO1FBQXVCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzVFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qYWF5YmFidS9EZXNrdG9wL3Rlc3Qgd2Vic2l0ZS9hcHAvYXBpL3dyaXRpbmcvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS93cml0aW5nL3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzTWV0YSB9IGZyb20gXCJAL2xpYi93cml0aW5nXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0c01ldGEoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocG9zdHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxpc3QgcG9zdHM6XCIsIGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGxpc3QgcG9zdHNcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEFsbFBvc3RzTWV0YSIsIkdFVCIsInBvc3RzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/writing/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/writing.ts":
/*!************************!*\
  !*** ./lib/writing.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllPostFiles: () => (/* binding */ getAllPostFiles),\n/* harmony export */   getAllPosts: () => (/* binding */ getAllPosts),\n/* harmony export */   getAllPostsMeta: () => (/* binding */ getAllPostsMeta),\n/* harmony export */   getPostBySlug: () => (/* binding */ getPostBySlug),\n/* harmony export */   getPostMetaFromFile: () => (/* binding */ getPostMetaFromFile),\n/* harmony export */   getSlugFromFilename: () => (/* binding */ getSlugFromFilename),\n/* harmony export */   readRawPost: () => (/* binding */ readRawPost),\n/* harmony export */   renderMarkdownToHtml: () => (/* binding */ renderMarkdownToHtml)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"(rsc)/./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark */ \"(rsc)/./node_modules/remark/index.js\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-html */ \"(rsc)/./node_modules/remark-html/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit/lib/index.js\");\n// lib/writing.ts\n\n\n\n\n\n\nconst CONTENT_DIR = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"content\", \"writing\");\nfunction getAllPostFiles() {\n    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(CONTENT_DIR)) return [];\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(CONTENT_DIR).filter((f)=>/\\.mdx?$/.test(f));\n}\nfunction getSlugFromFilename(filename) {\n    return filename.replace(/\\.mdx?$/, \"\");\n}\nfunction getPostMetaFromFile(filename) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(CONTENT_DIR, filename);\n    const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\");\n    const parsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(raw);\n    const meta = parsed.data || {};\n    return {\n        slug: getSlugFromFilename(filename),\n        title: meta.title || getSlugFromFilename(filename).replace(/[-_]/g, \" \"),\n        date: meta.date,\n        summary: meta.summary || meta.description || \"\"\n    };\n}\nfunction getAllPostsMeta() {\n    const files = getAllPostFiles();\n    const metas = files.map(getPostMetaFromFile);\n    metas.sort((a, b)=>{\n        if (!a.date && !b.date) return 0;\n        if (!a.date) return 1;\n        if (!b.date) return -1;\n        return new Date(b.date).getTime() - new Date(a.date).getTime();\n    });\n    return metas;\n}\n/**\n * Read a raw post by slug. Returns filePath too so image resolution can use it.\n */ function readRawPost(slug) {\n    const candidates = [\n        `${slug}.mdx`,\n        `${slug}.md`\n    ];\n    for (const c of candidates){\n        const p = path__WEBPACK_IMPORTED_MODULE_1___default().join(CONTENT_DIR, c);\n        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(p)) {\n            const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(p, \"utf8\");\n            const parsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(raw);\n            return {\n                raw: parsed.content,\n                meta: parsed.data || {},\n                filePath: p\n            };\n        }\n    }\n    return null;\n}\n/**\n * Remark plugin: rewrite relative image URLs to an image-serving API endpoint.\n * It converts image nodes like:\n *   ![alt](./images/foo.jpg)\n * into\n *   <img src=\"/api/writing/image?slug=<slug>&img=<encoded-path>\" />\n *\n * We only rewrite non-absolute URLs (not starting with http or /).\n */ function remarkRewriteImages(slug) {\n    return ()=>(tree)=>{\n            (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_3__.visit)(tree, \"image\", (node)=>{\n                const url = node.url || \"\";\n                if (!url) return;\n                if (/^https?:\\/\\//i.test(url)) return;\n                if (url.startsWith(\"/\")) return;\n                const cleaned = url.replace(/^\\.\\//, \"\");\n                const encoded = encodeURIComponent(cleaned);\n                node.url = `/api/writing/image?slug=${encodeURIComponent(slug)}&img=${encoded}`;\n            });\n        };\n}\n// add this near the bottom of lib/writing.ts (after remarkRewriteImages)\nasync function getAllPosts() {\n    // get metas (sorted) from existing function\n    const metas = getAllPostsMeta();\n    const posts = await Promise.all(metas.map(async (meta)=>{\n        // read the raw post (returns { raw, meta, filePath } or null)\n        const rawPost = readRawPost(meta.slug);\n        if (!rawPost) {\n            // if the raw post is missing, just return the meta so page doesn't crash\n            return meta;\n        }\n        // process markdown -> html, rewriting relative image URLs using your plugin\n        const processed = await (0,remark__WEBPACK_IMPORTED_MODULE_4__.remark)().use(remarkRewriteImages(meta.slug)).use(remark_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).process(rawPost.raw);\n        return {\n            ...meta,\n            // rendered HTML string of the post body\n            content: String(processed),\n            // file path (useful for image resolution code you mentioned)\n            filePath: rawPost.filePath\n        };\n    }));\n    return posts;\n}\n/**\n * Lightweight \"MDX components\" preprocessor:\n * Rewrites a few custom JSX-style tags to semantic HTML blocks so they can\n * be styled via CSS. This is intentionally simple and safe:\n *  <Callout>Some text</Callout>  -> <div class=\"callout\">Some text</div>\n *  <Aside>...</Aside>            -> <aside class=\"mdx-aside\">...</aside>\n *\n * The replacement is done before remark runs so remark-html will pass the\n * produced HTML through unchanged.\n *\n * You can add more tags here as needed.\n */ function preprocessMdxLikeComponents(markdown) {\n    // Callout: allow attributes on opening tag (ignored for now)\n    markdown = markdown.replace(/<Callout(?:\\s[^>]*)?>([\\s\\S]*?)<\\/Callout>/gi, (_match, inner)=>`\\n\\n<div class=\"callout\">\\n\\n${inner.trim()}\\n\\n</div>\\n\\n`);\n    // Aside\n    markdown = markdown.replace(/<Aside(?:\\s[^>]*)?>([\\s\\S]*?)<\\/Aside>/gi, (_match, inner)=>`\\n\\n<aside class=\"mdx-aside\">\\n\\n${inner.trim()}\\n\\n</aside>\\n\\n`);\n    // Simple inline Marker for tips: <Tip>text</Tip> -> styled span\n    markdown = markdown.replace(/<Tip(?:\\s[^>]*)?>([\\s\\S]*?)<\\/Tip>/gi, (_match, inner)=>`<span class=\"mdx-tip\">${inner.trim()}</span>`);\n    return markdown;\n}\nasync function renderMarkdownToHtml(markdown, slug) {\n    // Run the small MDX-like preprocessing (this lets authors write <Callout>...</Callout>)\n    const preprocessed = preprocessMdxLikeComponents(markdown);\n    // If slug provided, install the rewrite-images plugin so relative images point to our API.\n    const processor = slug ? (0,remark__WEBPACK_IMPORTED_MODULE_4__.remark)().use(remarkRewriteImages(slug)).use(remark_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) : (0,remark__WEBPACK_IMPORTED_MODULE_4__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const result = await processor.process(preprocessed);\n    return String(result);\n}\nasync function getPostBySlug(slug) {\n    const r = readRawPost(slug);\n    if (!r) return null;\n    const rendered = await renderMarkdownToHtml(r.raw, slug);\n    return {\n        html: rendered,\n        meta: {\n            title: r.meta.title || slug.replace(/[-_]/g, \" \"),\n            date: r.meta.date,\n            summary: r.meta.summary || r.meta.description || \"\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUduRSxPQUFPSDtBQUNUO0FBRU8sZUFBZUkscUJBQXFCSixRQUFnQixFQUFFcEMsSUFBYTtJQUN4RSx3RkFBd0Y7SUFDeEYsTUFBTXlDLGVBQWVOLDRCQUE0QkM7SUFFakQsMkZBQTJGO0lBQzNGLE1BQU1NLFlBQVkxQyxPQUNkdkIsOENBQU1BLEdBQUd3RCxHQUFHLENBQUNkLG9CQUFvQm5CLE9BQU9pQyxHQUFHLENBQUN2RCxtREFBSUEsSUFDaERELDhDQUFNQSxHQUFHd0QsR0FBRyxDQUFDdkQsbURBQUlBO0lBRXJCLE1BQU1pRSxTQUFTLE1BQU1ELFVBQVU1RCxPQUFPLENBQUMyRDtJQUN2QyxPQUFPUCxPQUFPUztBQUNoQjtBQUVPLGVBQWVDLGNBQWM1QyxJQUFZO0lBQzlDLE1BQU02QyxJQUFJL0IsWUFBWWQ7SUFDdEIsSUFBSSxDQUFDNkMsR0FBRyxPQUFPO0lBQ2YsTUFBTUMsV0FBVyxNQUFNTixxQkFBcUJLLEVBQUVsRCxHQUFHLEVBQUVLO0lBQ25ELE9BQU87UUFDTHRCLE1BQU1vRTtRQUNOaEQsTUFBTTtZQUNKRyxPQUFPNEMsRUFBRS9DLElBQUksQ0FBQ0csS0FBSyxJQUFJRCxLQUFLUixPQUFPLENBQUMsU0FBUztZQUM3Q1UsTUFBTTJDLEVBQUUvQyxJQUFJLENBQUNJLElBQUk7WUFDakJDLFNBQVMwQyxFQUFFL0MsSUFBSSxDQUFDSyxPQUFPLElBQUkwQyxFQUFFL0MsSUFBSSxDQUFDTSxXQUFXLElBQUk7UUFDbkQ7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvc2FuamFheWJhYnUvRGVza3RvcC90ZXN0IHdlYnNpdGUvbGliL3dyaXRpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3dyaXRpbmcudHNcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcInJlbWFya1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcInJlbWFyay1odG1sXCI7XG5pbXBvcnQgeyB2aXNpdCB9IGZyb20gXCJ1bmlzdC11dGlsLXZpc2l0XCI7XG5cbmV4cG9ydCB0eXBlIFBvc3RNZXRhID0ge1xuICBzbHVnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBDT05URU5UX0RJUiA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImNvbnRlbnRcIiwgXCJ3cml0aW5nXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdEZpbGVzKCkge1xuICBpZiAoIWZzLmV4aXN0c1N5bmMoQ09OVEVOVF9ESVIpKSByZXR1cm4gW107XG4gIHJldHVybiBmcy5yZWFkZGlyU3luYyhDT05URU5UX0RJUikuZmlsdGVyKChmKSA9PiAvXFwubWR4PyQvLnRlc3QoZikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2x1Z0Zyb21GaWxlbmFtZShmaWxlbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5tZHg/JC8sIFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdE1ldGFGcm9tRmlsZShmaWxlbmFtZTogc3RyaW5nKTogUG9zdE1ldGEge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihDT05URU5UX0RJUiwgZmlsZW5hbWUpO1xuICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmOFwiKTtcbiAgY29uc3QgcGFyc2VkID0gbWF0dGVyKHJhdyk7XG4gIGNvbnN0IG1ldGEgPSBwYXJzZWQuZGF0YSB8fCB7fTtcbiAgcmV0dXJuIHtcbiAgICBzbHVnOiBnZXRTbHVnRnJvbUZpbGVuYW1lKGZpbGVuYW1lKSxcbiAgICB0aXRsZTpcbiAgICAgIG1ldGEudGl0bGUgfHxcbiAgICAgIGdldFNsdWdGcm9tRmlsZW5hbWUoZmlsZW5hbWUpLnJlcGxhY2UoL1stX10vZywgXCIgXCIpLFxuICAgIGRhdGU6IG1ldGEuZGF0ZSxcbiAgICBzdW1tYXJ5OiBtZXRhLnN1bW1hcnkgfHwgbWV0YS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHNNZXRhKCk6IFBvc3RNZXRhW10ge1xuICBjb25zdCBmaWxlcyA9IGdldEFsbFBvc3RGaWxlcygpO1xuICBjb25zdCBtZXRhcyA9IGZpbGVzLm1hcChnZXRQb3N0TWV0YUZyb21GaWxlKTtcbiAgbWV0YXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmICghYS5kYXRlICYmICFiLmRhdGUpIHJldHVybiAwO1xuICAgIGlmICghYS5kYXRlKSByZXR1cm4gMTtcbiAgICBpZiAoIWIuZGF0ZSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpO1xuICB9KTtcbiAgcmV0dXJuIG1ldGFzO1xufVxuXG4vKipcbiAqIFJlYWQgYSByYXcgcG9zdCBieSBzbHVnLiBSZXR1cm5zIGZpbGVQYXRoIHRvbyBzbyBpbWFnZSByZXNvbHV0aW9uIGNhbiB1c2UgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkUmF3UG9zdChzbHVnOiBzdHJpbmcpIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IFtgJHtzbHVnfS5tZHhgLCBgJHtzbHVnfS5tZGBdO1xuICBmb3IgKGNvbnN0IGMgb2YgY2FuZGlkYXRlcykge1xuICAgIGNvbnN0IHAgPSBwYXRoLmpvaW4oQ09OVEVOVF9ESVIsIGMpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMocCwgXCJ1dGY4XCIpO1xuICAgICAgY29uc3QgcGFyc2VkID0gbWF0dGVyKHJhdyk7XG4gICAgICByZXR1cm4geyByYXc6IHBhcnNlZC5jb250ZW50LCBtZXRhOiBwYXJzZWQuZGF0YSB8fCB7fSwgZmlsZVBhdGg6IHAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVtYXJrIHBsdWdpbjogcmV3cml0ZSByZWxhdGl2ZSBpbWFnZSBVUkxzIHRvIGFuIGltYWdlLXNlcnZpbmcgQVBJIGVuZHBvaW50LlxuICogSXQgY29udmVydHMgaW1hZ2Ugbm9kZXMgbGlrZTpcbiAqICAgIVthbHRdKC4vaW1hZ2VzL2Zvby5qcGcpXG4gKiBpbnRvXG4gKiAgIDxpbWcgc3JjPVwiL2FwaS93cml0aW5nL2ltYWdlP3NsdWc9PHNsdWc+JmltZz08ZW5jb2RlZC1wYXRoPlwiIC8+XG4gKlxuICogV2Ugb25seSByZXdyaXRlIG5vbi1hYnNvbHV0ZSBVUkxzIChub3Qgc3RhcnRpbmcgd2l0aCBodHRwIG9yIC8pLlxuICovXG5mdW5jdGlvbiByZW1hcmtSZXdyaXRlSW1hZ2VzKHNsdWc6IHN0cmluZykge1xuICByZXR1cm4gKCkgPT4gKHRyZWU6IGFueSkgPT4ge1xuICAgIHZpc2l0KHRyZWUsIFwiaW1hZ2VcIiwgKG5vZGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSBub2RlLnVybCB8fCBcIlwiO1xuICAgICAgaWYgKCF1cmwpIHJldHVybjtcbiAgICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHVybCkpIHJldHVybjtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcIi9cIikpIHJldHVybjtcbiAgICAgIGNvbnN0IGNsZWFuZWQgPSB1cmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpO1xuICAgICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChjbGVhbmVkKTtcbiAgICAgIG5vZGUudXJsID0gYC9hcGkvd3JpdGluZy9pbWFnZT9zbHVnPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNsdWcpfSZpbWc9JHtlbmNvZGVkfWA7XG4gICAgfSk7XG4gIH07XG59XG5cbi8vIGFkZCB0aGlzIG5lYXIgdGhlIGJvdHRvbSBvZiBsaWIvd3JpdGluZy50cyAoYWZ0ZXIgcmVtYXJrUmV3cml0ZUltYWdlcylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgLy8gZ2V0IG1ldGFzIChzb3J0ZWQpIGZyb20gZXhpc3RpbmcgZnVuY3Rpb25cbiAgY29uc3QgbWV0YXMgPSBnZXRBbGxQb3N0c01ldGEoKTtcblxuICBjb25zdCBwb3N0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIG1ldGFzLm1hcChhc3luYyAobWV0YSkgPT4ge1xuICAgICAgLy8gcmVhZCB0aGUgcmF3IHBvc3QgKHJldHVybnMgeyByYXcsIG1ldGEsIGZpbGVQYXRoIH0gb3IgbnVsbClcbiAgICAgIGNvbnN0IHJhd1Bvc3QgPSByZWFkUmF3UG9zdChtZXRhLnNsdWcpO1xuXG4gICAgICBpZiAoIXJhd1Bvc3QpIHtcbiAgICAgICAgLy8gaWYgdGhlIHJhdyBwb3N0IGlzIG1pc3NpbmcsIGp1c3QgcmV0dXJuIHRoZSBtZXRhIHNvIHBhZ2UgZG9lc24ndCBjcmFzaFxuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJvY2VzcyBtYXJrZG93biAtPiBodG1sLCByZXdyaXRpbmcgcmVsYXRpdmUgaW1hZ2UgVVJMcyB1c2luZyB5b3VyIHBsdWdpblxuICAgICAgY29uc3QgcHJvY2Vzc2VkID0gYXdhaXQgcmVtYXJrKClcbiAgICAgICAgLnVzZShyZW1hcmtSZXdyaXRlSW1hZ2VzKG1ldGEuc2x1ZykpXG4gICAgICAgIC51c2UoaHRtbClcbiAgICAgICAgLnByb2Nlc3MocmF3UG9zdC5yYXcpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZXRhLFxuICAgICAgICAvLyByZW5kZXJlZCBIVE1MIHN0cmluZyBvZiB0aGUgcG9zdCBib2R5XG4gICAgICAgIGNvbnRlbnQ6IFN0cmluZyhwcm9jZXNzZWQpLFxuICAgICAgICAvLyBmaWxlIHBhdGggKHVzZWZ1bCBmb3IgaW1hZ2UgcmVzb2x1dGlvbiBjb2RlIHlvdSBtZW50aW9uZWQpXG4gICAgICAgIGZpbGVQYXRoOiByYXdQb3N0LmZpbGVQYXRoLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBwb3N0cztcbn1cblxuLyoqXG4gKiBMaWdodHdlaWdodCBcIk1EWCBjb21wb25lbnRzXCIgcHJlcHJvY2Vzc29yOlxuICogUmV3cml0ZXMgYSBmZXcgY3VzdG9tIEpTWC1zdHlsZSB0YWdzIHRvIHNlbWFudGljIEhUTUwgYmxvY2tzIHNvIHRoZXkgY2FuXG4gKiBiZSBzdHlsZWQgdmlhIENTUy4gVGhpcyBpcyBpbnRlbnRpb25hbGx5IHNpbXBsZSBhbmQgc2FmZTpcbiAqICA8Q2FsbG91dD5Tb21lIHRleHQ8L0NhbGxvdXQ+ICAtPiA8ZGl2IGNsYXNzPVwiY2FsbG91dFwiPlNvbWUgdGV4dDwvZGl2PlxuICogIDxBc2lkZT4uLi48L0FzaWRlPiAgICAgICAgICAgIC0+IDxhc2lkZSBjbGFzcz1cIm1keC1hc2lkZVwiPi4uLjwvYXNpZGU+XG4gKlxuICogVGhlIHJlcGxhY2VtZW50IGlzIGRvbmUgYmVmb3JlIHJlbWFyayBydW5zIHNvIHJlbWFyay1odG1sIHdpbGwgcGFzcyB0aGVcbiAqIHByb2R1Y2VkIEhUTUwgdGhyb3VnaCB1bmNoYW5nZWQuXG4gKlxuICogWW91IGNhbiBhZGQgbW9yZSB0YWdzIGhlcmUgYXMgbmVlZGVkLlxuICovXG5mdW5jdGlvbiBwcmVwcm9jZXNzTWR4TGlrZUNvbXBvbmVudHMobWFya2Rvd246IHN0cmluZykge1xuICAvLyBDYWxsb3V0OiBhbGxvdyBhdHRyaWJ1dGVzIG9uIG9wZW5pbmcgdGFnIChpZ25vcmVkIGZvciBub3cpXG4gIG1hcmtkb3duID0gbWFya2Rvd24ucmVwbGFjZShcbiAgICAvPENhbGxvdXQoPzpcXHNbXj5dKik/PihbXFxzXFxTXSo/KTxcXC9DYWxsb3V0Pi9naSxcbiAgICAoX21hdGNoLCBpbm5lcikgPT4gYFxcblxcbjxkaXYgY2xhc3M9XCJjYWxsb3V0XCI+XFxuXFxuJHtpbm5lci50cmltKCl9XFxuXFxuPC9kaXY+XFxuXFxuYFxuICApO1xuXG4gIC8vIEFzaWRlXG4gIG1hcmtkb3duID0gbWFya2Rvd24ucmVwbGFjZShcbiAgICAvPEFzaWRlKD86XFxzW14+XSopPz4oW1xcc1xcU10qPyk8XFwvQXNpZGU+L2dpLFxuICAgIChfbWF0Y2gsIGlubmVyKSA9PiBgXFxuXFxuPGFzaWRlIGNsYXNzPVwibWR4LWFzaWRlXCI+XFxuXFxuJHtpbm5lci50cmltKCl9XFxuXFxuPC9hc2lkZT5cXG5cXG5gXG4gICk7XG5cbiAgLy8gU2ltcGxlIGlubGluZSBNYXJrZXIgZm9yIHRpcHM6IDxUaXA+dGV4dDwvVGlwPiAtPiBzdHlsZWQgc3BhblxuICBtYXJrZG93biA9IG1hcmtkb3duLnJlcGxhY2UoXG4gICAgLzxUaXAoPzpcXHNbXj5dKik/PihbXFxzXFxTXSo/KTxcXC9UaXA+L2dpLFxuICAgIChfbWF0Y2gsIGlubmVyKSA9PiBgPHNwYW4gY2xhc3M9XCJtZHgtdGlwXCI+JHtpbm5lci50cmltKCl9PC9zcGFuPmBcbiAgKTtcblxuICByZXR1cm4gbWFya2Rvd247XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJNYXJrZG93blRvSHRtbChtYXJrZG93bjogc3RyaW5nLCBzbHVnPzogc3RyaW5nKSB7XG4gIC8vIFJ1biB0aGUgc21hbGwgTURYLWxpa2UgcHJlcHJvY2Vzc2luZyAodGhpcyBsZXRzIGF1dGhvcnMgd3JpdGUgPENhbGxvdXQ+Li4uPC9DYWxsb3V0PilcbiAgY29uc3QgcHJlcHJvY2Vzc2VkID0gcHJlcHJvY2Vzc01keExpa2VDb21wb25lbnRzKG1hcmtkb3duKTtcblxuICAvLyBJZiBzbHVnIHByb3ZpZGVkLCBpbnN0YWxsIHRoZSByZXdyaXRlLWltYWdlcyBwbHVnaW4gc28gcmVsYXRpdmUgaW1hZ2VzIHBvaW50IHRvIG91ciBBUEkuXG4gIGNvbnN0IHByb2Nlc3NvciA9IHNsdWdcbiAgICA/IHJlbWFyaygpLnVzZShyZW1hcmtSZXdyaXRlSW1hZ2VzKHNsdWcpKS51c2UoaHRtbClcbiAgICA6IHJlbWFyaygpLnVzZShodG1sKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9jZXNzb3IucHJvY2VzcyhwcmVwcm9jZXNzZWQpO1xuICByZXR1cm4gU3RyaW5nKHJlc3VsdCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0QnlTbHVnKHNsdWc6IHN0cmluZykge1xuICBjb25zdCByID0gcmVhZFJhd1Bvc3Qoc2x1Zyk7XG4gIGlmICghcikgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHJlbmRlcmVkID0gYXdhaXQgcmVuZGVyTWFya2Rvd25Ub0h0bWwoci5yYXcsIHNsdWcpO1xuICByZXR1cm4ge1xuICAgIGh0bWw6IHJlbmRlcmVkLFxuICAgIG1ldGE6IHtcbiAgICAgIHRpdGxlOiByLm1ldGEudGl0bGUgfHwgc2x1Zy5yZXBsYWNlKC9bLV9dL2csIFwiIFwiKSxcbiAgICAgIGRhdGU6IHIubWV0YS5kYXRlLFxuICAgICAgc3VtbWFyeTogci5tZXRhLnN1bW1hcnkgfHwgci5tZXRhLmRlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgfSxcbiAgfTtcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwicmVtYXJrIiwiaHRtbCIsInZpc2l0IiwiQ09OVEVOVF9ESVIiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldEFsbFBvc3RGaWxlcyIsImV4aXN0c1N5bmMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImYiLCJ0ZXN0IiwiZ2V0U2x1Z0Zyb21GaWxlbmFtZSIsImZpbGVuYW1lIiwicmVwbGFjZSIsImdldFBvc3RNZXRhRnJvbUZpbGUiLCJmaWxlUGF0aCIsInJhdyIsInJlYWRGaWxlU3luYyIsInBhcnNlZCIsIm1ldGEiLCJkYXRhIiwic2x1ZyIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsImdldEFsbFBvc3RzTWV0YSIsImZpbGVzIiwibWV0YXMiLCJtYXAiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsInJlYWRSYXdQb3N0IiwiY2FuZGlkYXRlcyIsImMiLCJwIiwiY29udGVudCIsInJlbWFya1Jld3JpdGVJbWFnZXMiLCJ0cmVlIiwibm9kZSIsInVybCIsInN0YXJ0c1dpdGgiLCJjbGVhbmVkIiwiZW5jb2RlZCIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldEFsbFBvc3RzIiwicG9zdHMiLCJQcm9taXNlIiwiYWxsIiwicmF3UG9zdCIsInByb2Nlc3NlZCIsInVzZSIsIlN0cmluZyIsInByZXByb2Nlc3NNZHhMaWtlQ29tcG9uZW50cyIsIm1hcmtkb3duIiwiX21hdGNoIiwiaW5uZXIiLCJ0cmltIiwicmVuZGVyTWFya2Rvd25Ub0h0bWwiLCJwcmVwcm9jZXNzZWQiLCJwcm9jZXNzb3IiLCJyZXN1bHQiLCJnZXRQb3N0QnlTbHVnIiwiciIsInJlbmRlcmVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/writing.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwriting%2Froute&page=%2Fapi%2Fwriting%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwriting%2Froute.ts&appDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwriting%2Froute&page=%2Fapi%2Fwriting%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwriting%2Froute.ts&appDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sanjaaybabu_Desktop_test_website_app_api_writing_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/writing/route.ts */ \"(rsc)/./app/api/writing/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/writing/route\",\n        pathname: \"/api/writing\",\n        filename: \"route\",\n        bundlePath: \"app/api/writing/route\"\n    },\n    resolvedPagePath: \"/Users/sanjaaybabu/Desktop/test website/app/api/writing/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sanjaaybabu_Desktop_test_website_app_api_writing_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ3cml0aW5nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3cml0aW5nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd3JpdGluZyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhbmphYXliYWJ1JTJGRGVza3RvcCUyRnRlc3QlMjB3ZWJzaXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNhbmphYXliYWJ1JTJGRGVza3RvcCUyRnRlc3QlMjB3ZWJzaXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3NhbmphYXliYWJ1L0Rlc2t0b3AvdGVzdCB3ZWJzaXRlL2FwcC9hcGkvd3JpdGluZy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd3JpdGluZy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dyaXRpbmdcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3dyaXRpbmcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2FuamFheWJhYnUvRGVza3RvcC90ZXN0IHdlYnNpdGUvYXBwL2FwaS93cml0aW5nL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwriting%2Froute&page=%2Fapi%2Fwriting%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwriting%2Froute.ts&appDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "?d272":
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/esprima","vendor-chunks/micromark-core-commonmark","vendor-chunks/js-yaml","vendor-chunks/mdast-util-to-markdown","vendor-chunks/mdast-util-to-hast","vendor-chunks/micromark","vendor-chunks/unified","vendor-chunks/character-entities","vendor-chunks/hast-util-to-html","vendor-chunks/property-information","vendor-chunks/mdast-util-from-markdown","vendor-chunks/hast-util-sanitize","vendor-chunks/micromark-util-symbol","vendor-chunks/unist-util-visit","vendor-chunks/debug","vendor-chunks/vfile","vendor-chunks/micromark-util-subtokenize","vendor-chunks/gray-matter","vendor-chunks/stringify-entities","vendor-chunks/unist-util-is","vendor-chunks/vfile-message","vendor-chunks/@ungap","vendor-chunks/micromark-util-character","vendor-chunks/devlop","vendor-chunks/trough","vendor-chunks/micromark-factory-destination","vendor-chunks/character-entities-html4","vendor-chunks/zwitch","vendor-chunks/micromark-factory-label","vendor-chunks/kind-of","vendor-chunks/extend","vendor-chunks/micromark-util-combine-extensions","vendor-chunks/micromark-util-sanitize-uri","vendor-chunks/micromark-factory-title","vendor-chunks/section-matter","vendor-chunks/ms","vendor-chunks/mdast-util-to-string","vendor-chunks/micromark-util-chunked","vendor-chunks/remark-html","vendor-chunks/unist-util-stringify-position","vendor-chunks/unist-util-position","vendor-chunks/dequal","vendor-chunks/micromark-util-html-tag-name","vendor-chunks/comma-separated-tokens","vendor-chunks/trim-lines","vendor-chunks/micromark-factory-space","vendor-chunks/micromark-util-decode-string","vendor-chunks/micromark-util-normalize-identifier","vendor-chunks/character-entities-legacy","vendor-chunks/micromark-factory-whitespace","vendor-chunks/micromark-util-decode-numeric-character-reference","vendor-chunks/remark-parse","vendor-chunks/remark-stringify","vendor-chunks/mdast-util-phrasing","vendor-chunks/micromark-util-classify-character","vendor-chunks/hast-util-whitespace","vendor-chunks/longest-streak","vendor-chunks/micromark-util-resolve-all","vendor-chunks/micromark-util-encode","vendor-chunks/decode-named-character-reference","vendor-chunks/ccount","vendor-chunks/extend-shallow","vendor-chunks/space-separated-tokens","vendor-chunks/is-plain-obj","vendor-chunks/remark","vendor-chunks/is-extendable","vendor-chunks/strip-bom-string","vendor-chunks/html-void-elements","vendor-chunks/bail"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwriting%2Froute&page=%2Fapi%2Fwriting%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwriting%2Froute.ts&appDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();