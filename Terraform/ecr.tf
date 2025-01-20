data "aws_ecr_repository" "ecom" {
  name = "ecom"
}

data "aws_ecr_repository" "nginx" {
  name = "ecom-nginx"
}
