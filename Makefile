
AUTO=bindata_assetfs.go

.PHONY: gen deply all clean
all: gen
	dev_appserver.py app.yaml

gen:
	go generate
#	rm -f $(AUTO)
#	go-bindata-assetfs -pkg server -o $(AUTO) www/

deploy: gen
	gcloud app deploy
	
clean:
	rm -rf $(AUTO)

