# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-spread-element > call-spread`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-spread-element/call-spread/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-spread-element/call-spread/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-spread-element/call-spread/input.js"
				end: Object {
					column: 8
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSCallExpression {
				loc: Object {
					filename: "esprima/es2015-spread-element/call-spread/input.js"
					end: Object {
						column: 7
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "f"
					loc: Object {
						filename: "esprima/es2015-spread-element/call-spread/input.js"
						identifierName: "f"
						end: Object {
							column: 1
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				arguments: Array [
					JSSpreadElement {
						loc: Object {
							filename: "esprima/es2015-spread-element/call-spread/input.js"
							end: Object {
								column: 6
								line: 1
							}
							start: Object {
								column: 2
								line: 1
							}
						}
						argument: JSReferenceIdentifier {
							name: "g"
							loc: Object {
								filename: "esprima/es2015-spread-element/call-spread/input.js"
								identifierName: "g"
								end: Object {
									column: 6
									line: 1
								}
								start: Object {
									column: 5
									line: 1
								}
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
✔ No known problems!

```
