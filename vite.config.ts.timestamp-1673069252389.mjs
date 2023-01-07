// vite.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import AutoImport from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "D:\\Desktop\\\u6587\u4EF6\\web\\\u9879\u76EE\\\u98DE\u9E3D\u5DE5\u4F5C\u53F0\\FGworkbench";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__vite_injected_original_dirname, "src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXFx1NjU4N1x1NEVGNlxcXFx3ZWJcXFxcXHU5ODc5XHU3NkVFXFxcXFx1OThERVx1OUUzRFx1NURFNVx1NEY1Q1x1NTNGMFxcXFxGR3dvcmtiZW5jaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTY1ODdcdTRFRjZcXFxcd2ViXFxcXFx1OTg3OVx1NzZFRVxcXFxcdTk4REVcdTlFM0RcdTVERTVcdTRGNUNcdTUzRjBcXFxcRkd3b3JrYmVuY2hcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvJUU2JTk2JTg3JUU0JUJCJUI2L3dlYi8lRTklQTElQjklRTclOUIlQUUvJUU5JUEzJTlFJUU5JUI4JUJEJUU1JUI3JUE1JUU0JUJEJTlDJUU1JThGJUIwL0ZHd29ya2JlbmNoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHsvL1x1OERFOFx1NTdERlx1NEVFM1x1NzQwNlxyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICAvL1x1OTE0RFx1N0Y2RVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFxyXG4gICAgYWxpYXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6ICdAJyxcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBYLFNBQVMsb0JBQW9CO0FBQ3ZaLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFMcEMsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQUEsVUFBUUEsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUVQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFrQixhQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUM1QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
