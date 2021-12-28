const { readdirSync, writeFileSync } = require('fs')
const path = require('path')

const { isSVG, removeExtension, toPascalCase } = require('./util')

const packs = [
  {
    filename: 'index',
    dir: path.resolve('src', 'assets', 'svg', 'vectors')
  }
]

const mapFiles = (filename, files, dir) => {
  const package = dir.substring(dir.lastIndexOf('/') + 1)

  const mapContent = [
    files
      .map(
        (file) =>
          `import { default as ${toPascalCase(file)} } from './${file}.svg'`
      )
      .join('\n'),
    '',
    `const ${package} = {`,
    `${files.map((file) => `  '${file}': ${toPascalCase(file)},`).join('\n')}`,
    '}\n',
    `export default ${package}`
  ].join('\n')

  writeFileSync(`${dir}/${filename}.ts`, mapContent)

  console.log(`${dir}/${filename}.ts created! ✅`)
}

packs.map((pack) => {
  const files = readdirSync(pack.dir).filter(isSVG).map(removeExtension)

  try {
    mapFiles(pack.filename, files, pack.dir)
  } catch (e) {
    console.error(e)
  }
})
