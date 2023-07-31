build:
	buf generate src

lint: 
	buf lint

check-compatibility:
	buf breaking "src" --against  "https://github.com/punit-kulal/proto-test.git#subdir=src"