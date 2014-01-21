
test: node_modules
	@sed "s/'resolve-module'/'.\/'/" Readme.md | node_modules/jsmd/bin/jsmd

node_modules: package.json
	@npm install

.PHONY: test
