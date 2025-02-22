import { importMapsPlugin } from '@web/dev-server-import-maps';

const watch = process.argv.includes('--watch');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: './sandbox/',
  watch: !watch,
  nodeResolve: {
    exportConditions: ['development']
  },
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            '@blueprintui/components/': '/dist/lib/',
            '@blueprintui/components': '/dist/lib/index.js',
            '@blueprintui/components/internals': '/dist/lib/internals/index.js',
            '@blueprintui/components/test': '/dist/lib/test/index.js',
            '@blueprintui/components/accordion': '/dist/lib/accordion/index.js',
            '@blueprintui/components/alert': '/dist/lib/alert/index.js',
            '@blueprintui/components/badge': '/dist/lib/badge/index.js',
            '@blueprintui/components/breadcrumb': '/dist/lib/breadcrumb/index.js',
            '@blueprintui/components/button': '/dist/lib/button/index.js',
            '@blueprintui/components/button-expand': '/dist/lib/button-expand/index.js',
            '@blueprintui/components/button-group': '/dist/lib/button-group/index.js',
            '@blueprintui/components/button-handle': '/dist/lib/button-handle/index.js',
            '@blueprintui/components/button-icon': '/dist/lib/button-icon/index.js',
            '@blueprintui/components/button-icon-group': '/dist/lib/button-icon-group/index.js',
            '@blueprintui/components/button-resize': '/dist/lib/button-resize/index.js',
            '@blueprintui/components/button-sort': '/dist/lib/button-sort/index.js',
            '@blueprintui/components/card': '/dist/lib/card/index.js',
            '@blueprintui/components/chat': '/dist/lib/chat/index.js',
            '@blueprintui/components/checkbox': '/dist/lib/checkbox/index.js',
            '@blueprintui/components/color': '/dist/lib/color/index.js',
            '@blueprintui/components/datalist': '/dist/lib/datalist/index.js',
            '@blueprintui/components/date': '/dist/lib/date/index.js',
            '@blueprintui/components/dialog': '/dist/lib/dialog/index.js',
            '@blueprintui/components/divider': '/dist/lib/divider/index.js',
            '@blueprintui/components/drawer': '/dist/lib/drawer/index.js',
            '@blueprintui/components/dropdown': '/dist/lib/dropdown/index.js',
            '@blueprintui/components/file': '/dist/lib/file/index.js',
            '@blueprintui/components/forms': '/dist/lib/forms/index.js',
            '@blueprintui/components/header': '/dist/lib/header/index.js',
            '@blueprintui/components/input': '/dist/lib/input/index.js',
            '@blueprintui/components/input-group': '/dist/lib/input-group/index.js',
            '@blueprintui/components/layout': '/dist/lib/layout/index.js',
            '@blueprintui/components/list': '/dist/lib/list/index.js',
            '@blueprintui/components/menu': '/dist/lib/menu/index.js',
            '@blueprintui/components/month': '/dist/lib/month/index.js',
            '@blueprintui/components/nav': '/dist/lib/nav/index.js',
            '@blueprintui/components/pagination': '/dist/lib/pagination/index.js',
            '@blueprintui/components/password': '/dist/lib/password/index.js',
            '@blueprintui/components/popover': '/dist/lib/popover/index.js',
            '@blueprintui/components/progress-bar': '/dist/lib/progress-bar/index.js',
            '@blueprintui/components/progress-circle': '/dist/lib/progress-circle/index.js',
            '@blueprintui/components/progress-dot': '/dist/lib/progress-dot/index.js',
            '@blueprintui/components/radio': '/dist/lib/radio/index.js',
            '@blueprintui/components/range': '/dist/lib/range/index.js',
            '@blueprintui/components/rating': '/dist/lib/rating/index.js',
            '@blueprintui/components/search': '/dist/lib/search/index.js',
            '@blueprintui/components/select': '/dist/lib/select/index.js',
            '@blueprintui/components/shell': '/dist/lib/shell/index.js',
            '@blueprintui/components/switch': '/dist/lib/switch/index.js',
            '@blueprintui/components/tabs': '/dist/lib/tabs/index.js',
            '@blueprintui/components/tag': '/dist/lib/tag/index.js',
            '@blueprintui/components/textarea': '/dist/lib/textarea/index.js',
            '@blueprintui/components/time': '/dist/lib/time/index.js',
            '@blueprintui/components/toast': '/dist/lib/toast/index.js',
            '@blueprintui/components/tooltip': '/dist/lib/tooltip/index.js',
            '@blueprintui/components/tree': '/dist/lib/tree/index.js'
          }
        }
      }
    })
  ]
});
