build:
	buf generate src
	bash ./scripts/js-proto-generator.sh

lint: 
	buf lint

check-compatibility:
	buf breaking "src" --against  "https://github.com/punit-kulal/proto-test.git#subdir=src"

format:
	buf format src -w