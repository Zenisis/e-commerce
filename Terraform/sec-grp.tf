resource "aws_security_group" "grp-1" {
    vpc_id = data.aws_vpc.default.id
    name = "grp-1"
    description = "for the ecs-cluster"
    dynamic "ingress" {
       for_each = [ 80,443,5432,8080,3000 ]
       content {
         from_port = ingress.value
         to_port = ingress.value
         protocol = "tcp"
         cidr_blocks = [ "0.0.0.0/0" ]
       }
    }
    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = [ "0.0.0.0/0" ]
    }
}