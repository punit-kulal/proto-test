build:
	buf generate src
	bash ./scripts/js-proto-generator.sh
	poetry build -f wheel

lint: 
	buf lint src

check-compatibility:
	buf breaking "src" --against  "https://github.com/punit-kulal/proto-test.git#subdir=src"

format:
	buf format src -w

setup:
	git config --local core.hooksPath .githooks/