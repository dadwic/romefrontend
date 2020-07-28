# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0252`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0252/input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0252/input.js"
		end: Object {
			column: 0
			index: 4
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Expected an identifier"}]}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0252/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 3
					index: 3
					line: 1
				}
				start: Object {
					column: 0
					index: 4
					line: 2
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0252/input.js"
				end: Object {
					column: 0
					index: 4
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0252/input.js"
					end: Object {
						column: 0
						index: 4
						line: 2
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: ""
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0252/input.js"
								identifierName: ""
								end: Object {
									column: 0
									index: 4
									line: 2
								}
								start: Object {
									column: 0
									index: 4
									line: 2
								}
							}
						}
						init: undefined
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0252/input.js"
							end: Object {
								column: 0
								index: 4
								line: 2
							}
							start: Object {
								column: 0
								index: 4
								line: 2
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0252/input.js:2 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    var

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```