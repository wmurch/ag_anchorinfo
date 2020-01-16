dotnet publish -c Release 

xcopy /y dockerfile .\bin\release\netcoreapp2.2\publish

docker build -t ag_anchorinfo-image ./bin/release/netcoreapp2.2/publish

docker tag ag_anchorinfo-image registry.heroku.com/aganchorinfo/web

docker push registry.heroku.com/aganchorinfo/web

heroku container:release web -a aganchorinfo

