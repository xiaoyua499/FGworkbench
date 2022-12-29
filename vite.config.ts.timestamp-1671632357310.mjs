// vite.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/Desktop/%E6%96%87%E4%BB%B6/web/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E9%B8%BD%E5%B7%A5%E4%BD%9C%E5%8F%B0/FGworkbench/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXFx1NjU4N1x1NEVGNlxcXFx3ZWJcXFxcXHU5ODc5XHU3NkVFXFxcXFx1OThERVx1OUUzRFx1NURFNVx1NEY1Q1x1NTNGMFxcXFxGR3dvcmtiZW5jaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTY1ODdcdTRFRjZcXFxcd2ViXFxcXFx1OTg3OVx1NzZFRVxcXFxcdTk4REVcdTlFM0RcdTVERTVcdTRGNUNcdTUzRjBcXFxcRkd3b3JrYmVuY2hcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvJUU2JTk2JTg3JUU0JUJCJUI2L3dlYi8lRTklQTElQjklRTclOUIlQUUvJUU5JUEzJTlFJUU5JUI4JUJEJUU1JUI3JUE1JUU0JUJEJTlDJUU1JThGJUIwL0ZHd29ya2JlbmNoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWCxTQUFTLG9CQUFvQjtBQUN2WixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFHcEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
