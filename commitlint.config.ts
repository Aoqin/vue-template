import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],

  /**
   *  适配 vscode 插件, git-commit-tempalte
   */
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  // parserPreset: 'conventional-changelog-atom',
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  // formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    // 'body-leading-blank': [2, 'always'],
    // 'footer-leading-blank': [1, 'always'],
    // 'header-max-length': [2, 'always', 108],
    // 'subject-empty': [2, 'never'],
    // 'type-empty': [2, 'never'],
    // 'subject-case': [0]
    /**
     * 适配vs-code Git( git-commit-tempalte) 插件模板
     */
    'type-enum': [
      2,
      'always',
      [
        '🎉 init',
        '✨ feat',
        '🐞 fix',
        '📃 docs',
        '🌈 style',
        '🦄 refactor',
        '🎈 perf',
        '🧪 test',
        '🔧 build',
        '🐎 ci',
        '🐳 chore',
        '↩ revert'
      ]
    ]
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  // ignores: [(commit) => commit === '],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  // defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
  /*
   * Custom prompt configs
   */
  // prompt: {
  // messages: {},
  // questions: {
  // type: {
  // description: 'please input type:',
  // },
  // },
  // },
}

export default Configuration
