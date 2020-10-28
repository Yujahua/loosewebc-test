/* eslint comma-dangle: ["error", "always-multiline"] */
const path = require('path')
const pk = path.resolve(__dirname, '../package.json')

import Icon from './Icon'

const version = pk

export const components = {
  Icon
}

// Define plugin installation method
const install = function(Vue) {
  if (!Vue || install.installed) {
    return
  }

  // Register global components
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    if (component.name) {
      Vue.component(component.name, component) // kebab-case
      Vue.component(transformCamelCase(`-${component.name}`), component) // PascalCase
    }
  })

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export components
export default{
  install,
  version,
  ...components,
}

