data "aws_vpc" "default" {
    filter {
      name   = "tag:Environment"
      values = [var.environment]
    }
  
}

data "aws_subnets" "public_subnet_ids" {
    filter {
      name = "vpc-id"
      values = [var.aws_vpc.default.id]
       
    }
  

    filter {
    name   = "tag:Type"
    values = ["public"]
  }

  filter {
    name   = "tag:ManagedBy"
    values = ["terraform"]
  }


}


data "aws_subnets" "private_subnets_ids" {
    filter {
      name = "vpc-id"
      values =[var.aws_vpc.default.id]
    }



    filter {
    name   = "tag:Type"
    values = ["private"]
  }

  filter {
    name   = "tag:ManagedBy"
    values = ["terraform"]
  } 
}