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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllPostFiles: () => (/* binding */ getAllPostFiles),\n/* harmony export */   getAllPostsMeta: () => (/* binding */ getAllPostsMeta),\n/* harmony export */   getPostBySlug: () => (/* binding */ getPostBySlug),\n/* harmony export */   getPostMetaFromFile: () => (/* binding */ getPostMetaFromFile),\n/* harmony export */   getSlugFromFilename: () => (/* binding */ getSlugFromFilename),\n/* harmony export */   readRawPost: () => (/* binding */ readRawPost),\n/* harmony export */   renderMarkdownToHtml: () => (/* binding */ renderMarkdownToHtml)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"(rsc)/./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark */ \"(rsc)/./node_modules/remark/index.js\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-html */ \"(rsc)/./node_modules/remark-html/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit/lib/index.js\");\n// lib/writing.ts\n\n\n\n\n\n\nconst CONTENT_DIR = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"content\", \"writing\");\nfunction getAllPostFiles() {\n    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(CONTENT_DIR)) return [];\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(CONTENT_DIR).filter((f)=>/\\.mdx?$/.test(f));\n}\nfunction getSlugFromFilename(filename) {\n    return filename.replace(/\\.mdx?$/, \"\");\n}\nfunction getPostMetaFromFile(filename) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(CONTENT_DIR, filename);\n    const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\");\n    const parsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(raw);\n    const meta = parsed.data || {};\n    // Normalize tags: accept string or array; always return array or undefined\n    let tags = undefined;\n    if (meta.tags) {\n        if (Array.isArray(meta.tags)) {\n            tags = meta.tags.map((t)=>String(t).trim()).filter(Boolean);\n        } else if (typeof meta.tags === \"string\") {\n            // allow comma-separated string in frontmatter\n            tags = meta.tags.split(\",\").map((s)=>s.trim()).filter(Boolean);\n        }\n    }\n    return {\n        slug: getSlugFromFilename(filename),\n        title: meta.title || getSlugFromFilename(filename).replace(/[-_]/g, \" \"),\n        date: meta.date,\n        summary: meta.summary || meta.description || \"\",\n        tags\n    };\n}\nfunction getAllPostsMeta() {\n    const files = getAllPostFiles();\n    const metas = files.map(getPostMetaFromFile);\n    metas.sort((a, b)=>{\n        if (!a.date && !b.date) return 0;\n        if (!a.date) return 1;\n        if (!b.date) return -1;\n        return new Date(b.date).getTime() - new Date(a.date).getTime();\n    });\n    return metas;\n}\n/**\n * Read a raw post by slug. Returns filePath too so image resolution can use it.\n */ function readRawPost(slug) {\n    const candidates = [\n        `${slug}.mdx`,\n        `${slug}.md`\n    ];\n    for (const c of candidates){\n        const p = path__WEBPACK_IMPORTED_MODULE_1___default().join(CONTENT_DIR, c);\n        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(p)) {\n            const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(p, \"utf8\");\n            const parsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(raw);\n            return {\n                raw: parsed.content,\n                meta: parsed.data || {},\n                filePath: p\n            };\n        }\n    }\n    return null;\n}\n/**\n * Remark plugin: rewrite relative image URLs to an image-serving API endpoint.\n */ function remarkRewriteImages(slug) {\n    return ()=>(tree)=>{\n            (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_3__.visit)(tree, \"image\", (node)=>{\n                const url = node.url || \"\";\n                if (!url) return;\n                if (/^https?:\\/\\//i.test(url)) return;\n                if (url.startsWith(\"/\")) return;\n                const cleaned = url.replace(/^\\.\\//, \"\");\n                const encoded = encodeURIComponent(cleaned);\n                node.url = `/api/writing/image?slug=${encodeURIComponent(slug)}&img=${encoded}`;\n            });\n        };\n}\nasync function renderMarkdownToHtml(markdown, slug) {\n    const preprocessed = markdown; // keep hook for future preprocessors\n    const processor = slug ? (0,remark__WEBPACK_IMPORTED_MODULE_4__.remark)().use(remarkRewriteImages(slug)).use(remark_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) : (0,remark__WEBPACK_IMPORTED_MODULE_4__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const result = await processor.process(preprocessed);\n    return String(result);\n}\nasync function getPostBySlug(slug) {\n    const r = readRawPost(slug);\n    if (!r) return null;\n    const rendered = await renderMarkdownToHtml(r.raw, slug);\n    // normalize tags like getPostMetaFromFile did\n    let tags = undefined;\n    if (r.meta?.tags) {\n        if (Array.isArray(r.meta.tags)) {\n            tags = r.meta.tags.map((t)=>String(t).trim()).filter(Boolean);\n        } else if (typeof r.meta.tags === \"string\") {\n            tags = r.meta.tags.split(\",\").map((s)=>s.trim()).filter(Boolean);\n        }\n    }\n    return {\n        html: rendered,\n        meta: {\n            title: r.meta.title || slug.replace(/[-_]/g, \" \"),\n            date: r.meta.date,\n            summary: r.meta.summary || r.meta.description || \"\",\n            tags\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxHQUFHO1lBQzlCQSxPQUFPNEMsRUFBRTlDLElBQUksQ0FBQ0UsSUFBSSxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsSUFBV0MsT0FBT0QsR0FBR0UsSUFBSSxJQUFJcEIsTUFBTSxDQUFDcUI7UUFDOUQsT0FBTyxJQUFJLE9BQU9vQyxFQUFFOUMsSUFBSSxDQUFDRSxJQUFJLEtBQUssVUFBVTtZQUMxQ0EsT0FBTzRDLEVBQUU5QyxJQUFJLENBQUNFLElBQUksQ0FBQ1MsS0FBSyxDQUFDLEtBQUtMLEdBQUcsQ0FBQyxDQUFDTSxJQUFjQSxFQUFFSCxJQUFJLElBQUlwQixNQUFNLENBQUNxQjtRQUNwRTtJQUNGO0lBQ0EsT0FBTztRQUNMOUIsTUFBTW1FO1FBQ04vQyxNQUFNO1lBQ0pjLE9BQU9nQyxFQUFFOUMsSUFBSSxDQUFDYyxLQUFLLElBQUlELEtBQUtuQixPQUFPLENBQUMsU0FBUztZQUM3Q3FCLE1BQU0rQixFQUFFOUMsSUFBSSxDQUFDZSxJQUFJO1lBQ2pCQyxTQUFTOEIsRUFBRTlDLElBQUksQ0FBQ2dCLE9BQU8sSUFBSThCLEVBQUU5QyxJQUFJLENBQUNpQixXQUFXLElBQUk7WUFDakRmO1FBQ0Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvc2FuamFheWJhYnUvRGVza3RvcC90ZXN0IHdlYnNpdGUvbGliL3dyaXRpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3dyaXRpbmcudHNcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcInJlbWFya1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcInJlbWFyay1odG1sXCI7XG5pbXBvcnQgeyB2aXNpdCB9IGZyb20gXCJ1bmlzdC11dGlsLXZpc2l0XCI7XG5cbmV4cG9ydCB0eXBlIFBvc3RNZXRhID0ge1xuICBzbHVnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTsgLy8gTkVXOiBvcHRpb25hbCBhcnJheSBvZiB0YWdzXG59O1xuXG5jb25zdCBDT05URU5UX0RJUiA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImNvbnRlbnRcIiwgXCJ3cml0aW5nXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdEZpbGVzKCkge1xuICBpZiAoIWZzLmV4aXN0c1N5bmMoQ09OVEVOVF9ESVIpKSByZXR1cm4gW107XG4gIHJldHVybiBmcy5yZWFkZGlyU3luYyhDT05URU5UX0RJUikuZmlsdGVyKChmKSA9PiAvXFwubWR4PyQvLnRlc3QoZikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2x1Z0Zyb21GaWxlbmFtZShmaWxlbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5tZHg/JC8sIFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdE1ldGFGcm9tRmlsZShmaWxlbmFtZTogc3RyaW5nKTogUG9zdE1ldGEge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihDT05URU5UX0RJUiwgZmlsZW5hbWUpO1xuICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmOFwiKTtcbiAgY29uc3QgcGFyc2VkID0gbWF0dGVyKHJhdyk7XG4gIGNvbnN0IG1ldGEgPSBwYXJzZWQuZGF0YSB8fCB7fTtcbiAgLy8gTm9ybWFsaXplIHRhZ3M6IGFjY2VwdCBzdHJpbmcgb3IgYXJyYXk7IGFsd2F5cyByZXR1cm4gYXJyYXkgb3IgdW5kZWZpbmVkXG4gIGxldCB0YWdzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgaWYgKG1ldGEudGFncykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1ldGEudGFncykpIHtcbiAgICAgIHRhZ3MgPSBtZXRhLnRhZ3MubWFwKCh0OiBhbnkpID0+IFN0cmluZyh0KS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRhLnRhZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGFsbG93IGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgaW4gZnJvbnRtYXR0ZXJcbiAgICAgIHRhZ3MgPSBtZXRhLnRhZ3Muc3BsaXQoXCIsXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHNsdWc6IGdldFNsdWdGcm9tRmlsZW5hbWUoZmlsZW5hbWUpLFxuICAgIHRpdGxlOlxuICAgICAgbWV0YS50aXRsZSB8fFxuICAgICAgZ2V0U2x1Z0Zyb21GaWxlbmFtZShmaWxlbmFtZSkucmVwbGFjZSgvWy1fXS9nLCBcIiBcIiksXG4gICAgZGF0ZTogbWV0YS5kYXRlLFxuICAgIHN1bW1hcnk6IG1ldGEuc3VtbWFyeSB8fCBtZXRhLmRlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgdGFncyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RzTWV0YSgpOiBQb3N0TWV0YVtdIHtcbiAgY29uc3QgZmlsZXMgPSBnZXRBbGxQb3N0RmlsZXMoKTtcbiAgY29uc3QgbWV0YXMgPSBmaWxlcy5tYXAoZ2V0UG9zdE1ldGFGcm9tRmlsZSk7XG4gIG1ldGFzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoIWEuZGF0ZSAmJiAhYi5kYXRlKSByZXR1cm4gMDtcbiAgICBpZiAoIWEuZGF0ZSkgcmV0dXJuIDE7XG4gICAgaWYgKCFiLmRhdGUpIHJldHVybiAtMTtcbiAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmRhdGUpLmdldFRpbWUoKTtcbiAgfSk7XG4gIHJldHVybiBtZXRhcztcbn1cblxuLyoqXG4gKiBSZWFkIGEgcmF3IHBvc3QgYnkgc2x1Zy4gUmV0dXJucyBmaWxlUGF0aCB0b28gc28gaW1hZ2UgcmVzb2x1dGlvbiBjYW4gdXNlIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFJhd1Bvc3Qoc2x1Zzogc3RyaW5nKSB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbYCR7c2x1Z30ubWR4YCwgYCR7c2x1Z30ubWRgXTtcbiAgZm9yIChjb25zdCBjIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBjb25zdCBwID0gcGF0aC5qb2luKENPTlRFTlRfRElSLCBjKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKHAsIFwidXRmOFwiKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihyYXcpO1xuICAgICAgcmV0dXJuIHsgcmF3OiBwYXJzZWQuY29udGVudCwgbWV0YTogcGFyc2VkLmRhdGEgfHwge30sIGZpbGVQYXRoOiBwIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbWFyayBwbHVnaW46IHJld3JpdGUgcmVsYXRpdmUgaW1hZ2UgVVJMcyB0byBhbiBpbWFnZS1zZXJ2aW5nIEFQSSBlbmRwb2ludC5cbiAqL1xuZnVuY3Rpb24gcmVtYXJrUmV3cml0ZUltYWdlcyhzbHVnOiBzdHJpbmcpIHtcbiAgcmV0dXJuICgpID0+ICh0cmVlOiBhbnkpID0+IHtcbiAgICB2aXNpdCh0cmVlLCBcImltYWdlXCIsIChub2RlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHVybDogc3RyaW5nID0gbm9kZS51cmwgfHwgXCJcIjtcbiAgICAgIGlmICghdXJsKSByZXR1cm47XG4gICAgICBpZiAoL15odHRwcz86XFwvXFwvL2kudGVzdCh1cmwpKSByZXR1cm47XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCIvXCIpKSByZXR1cm47XG4gICAgICBjb25zdCBjbGVhbmVkID0gdXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTtcbiAgICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5lZCk7XG4gICAgICBub2RlLnVybCA9IGAvYXBpL3dyaXRpbmcvaW1hZ2U/c2x1Zz0ke2VuY29kZVVSSUNvbXBvbmVudChzbHVnKX0maW1nPSR7ZW5jb2RlZH1gO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyTWFya2Rvd25Ub0h0bWwobWFya2Rvd246IHN0cmluZywgc2x1Zz86IHN0cmluZykge1xuICBjb25zdCBwcmVwcm9jZXNzZWQgPSBtYXJrZG93bjsgLy8ga2VlcCBob29rIGZvciBmdXR1cmUgcHJlcHJvY2Vzc29yc1xuICBjb25zdCBwcm9jZXNzb3IgPSBzbHVnXG4gICAgPyByZW1hcmsoKS51c2UocmVtYXJrUmV3cml0ZUltYWdlcyhzbHVnKSkudXNlKGh0bWwpXG4gICAgOiByZW1hcmsoKS51c2UoaHRtbCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3Nvci5wcm9jZXNzKHByZXByb2Nlc3NlZCk7XG4gIHJldHVybiBTdHJpbmcocmVzdWx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1Zzogc3RyaW5nKSB7XG4gIGNvbnN0IHIgPSByZWFkUmF3UG9zdChzbHVnKTtcbiAgaWYgKCFyKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmVuZGVyZWQgPSBhd2FpdCByZW5kZXJNYXJrZG93blRvSHRtbChyLnJhdywgc2x1Zyk7XG4gIC8vIG5vcm1hbGl6ZSB0YWdzIGxpa2UgZ2V0UG9zdE1ldGFGcm9tRmlsZSBkaWRcbiAgbGV0IHRhZ3M6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBpZiAoci5tZXRhPy50YWdzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoci5tZXRhLnRhZ3MpKSB7XG4gICAgICB0YWdzID0gci5tZXRhLnRhZ3MubWFwKCh0OiBhbnkpID0+IFN0cmluZyh0KS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByLm1ldGEudGFncyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGFncyA9IHIubWV0YS50YWdzLnNwbGl0KFwiLFwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBodG1sOiByZW5kZXJlZCxcbiAgICBtZXRhOiB7XG4gICAgICB0aXRsZTogci5tZXRhLnRpdGxlIHx8IHNsdWcucmVwbGFjZSgvWy1fXS9nLCBcIiBcIiksXG4gICAgICBkYXRlOiByLm1ldGEuZGF0ZSxcbiAgICAgIHN1bW1hcnk6IHIubWV0YS5zdW1tYXJ5IHx8IHIubWV0YS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxuICAgICAgdGFncyxcbiAgICB9LFxuICB9O1xufSJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJtYXR0ZXIiLCJyZW1hcmsiLCJodG1sIiwidmlzaXQiLCJDT05URU5UX0RJUiIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0QWxsUG9zdEZpbGVzIiwiZXhpc3RzU3luYyIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZiIsInRlc3QiLCJnZXRTbHVnRnJvbUZpbGVuYW1lIiwiZmlsZW5hbWUiLCJyZXBsYWNlIiwiZ2V0UG9zdE1ldGFGcm9tRmlsZSIsImZpbGVQYXRoIiwicmF3IiwicmVhZEZpbGVTeW5jIiwicGFyc2VkIiwibWV0YSIsImRhdGEiLCJ0YWdzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidCIsIlN0cmluZyIsInRyaW0iLCJCb29sZWFuIiwic3BsaXQiLCJzIiwic2x1ZyIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsImdldEFsbFBvc3RzTWV0YSIsImZpbGVzIiwibWV0YXMiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsInJlYWRSYXdQb3N0IiwiY2FuZGlkYXRlcyIsImMiLCJwIiwiY29udGVudCIsInJlbWFya1Jld3JpdGVJbWFnZXMiLCJ0cmVlIiwibm9kZSIsInVybCIsInN0YXJ0c1dpdGgiLCJjbGVhbmVkIiwiZW5jb2RlZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlbmRlck1hcmtkb3duVG9IdG1sIiwibWFya2Rvd24iLCJwcmVwcm9jZXNzZWQiLCJwcm9jZXNzb3IiLCJ1c2UiLCJyZXN1bHQiLCJnZXRQb3N0QnlTbHVnIiwiciIsInJlbmRlcmVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/writing.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mdast-util-to-markdown","vendor-chunks/js-yaml","vendor-chunks/mdast-util-to-hast","vendor-chunks/micromark-core-commonmark","vendor-chunks/property-information","vendor-chunks/hast-util-to-html","vendor-chunks/micromark","vendor-chunks/gray-matter","vendor-chunks/stringify-entities","vendor-chunks/micromark-util-symbol","vendor-chunks/@ungap","vendor-chunks/debug","vendor-chunks/unist-util-visit","vendor-chunks/vfile","vendor-chunks/unified","vendor-chunks/micromark-util-subtokenize","vendor-chunks/hast-util-sanitize","vendor-chunks/zwitch","vendor-chunks/vfile-message","vendor-chunks/unist-util-stringify-position","vendor-chunks/unist-util-position","vendor-chunks/unist-util-is","vendor-chunks/trough","vendor-chunks/trim-lines","vendor-chunks/space-separated-tokens","vendor-chunks/remark","vendor-chunks/remark-stringify","vendor-chunks/remark-parse","vendor-chunks/remark-html","vendor-chunks/micromark-util-sanitize-uri","vendor-chunks/micromark-util-resolve-all","vendor-chunks/micromark-util-normalize-identifier","vendor-chunks/micromark-util-html-tag-name","vendor-chunks/micromark-util-encode","vendor-chunks/micromark-util-decode-string","vendor-chunks/micromark-util-decode-numeric-character-reference","vendor-chunks/micromark-util-combine-extensions","vendor-chunks/micromark-util-classify-character","vendor-chunks/micromark-util-chunked","vendor-chunks/micromark-util-character","vendor-chunks/micromark-factory-whitespace","vendor-chunks/micromark-factory-title","vendor-chunks/micromark-factory-space","vendor-chunks/micromark-factory-label","vendor-chunks/micromark-factory-destination","vendor-chunks/mdast-util-to-string","vendor-chunks/mdast-util-phrasing","vendor-chunks/mdast-util-from-markdown","vendor-chunks/longest-streak","vendor-chunks/is-plain-obj","vendor-chunks/html-void-elements","vendor-chunks/hast-util-whitespace","vendor-chunks/devlop","vendor-chunks/dequal","vendor-chunks/decode-named-character-reference","vendor-chunks/comma-separated-tokens","vendor-chunks/character-entities","vendor-chunks/character-entities-legacy","vendor-chunks/character-entities-html4","vendor-chunks/ccount","vendor-chunks/bail","vendor-chunks/strip-bom-string","vendor-chunks/section-matter","vendor-chunks/ms","vendor-chunks/kind-of","vendor-chunks/is-extendable","vendor-chunks/extend","vendor-chunks/extend-shallow","vendor-chunks/esprima"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwriting%2Froute&page=%2Fapi%2Fwriting%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwriting%2Froute.ts&appDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsanjaaybabu%2FDesktop%2Ftest%20website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();