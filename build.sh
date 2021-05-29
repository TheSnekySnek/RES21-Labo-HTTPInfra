echo "Building Static Server"
cd docker-images/apache
docker build -t res/apache_php .

echo "Building Dynamic Server"
cd ../express
docker build -t res/express_quotes .

echo "Building Reverse Proxy"
cd ../proxy
docker build -t res/apache_rp .

echo "Building Management"
cd ../management
docker build -t res/express_management .