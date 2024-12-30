provider "aws" {
  region = "us-east-1"
}

# Create a new GitLab Lightsail Instance
resource "aws_lightsail_instance" "kevsite" {
  name              = "kevsite-instance"
  availability_zone = "us-east-1b"
  blueprint_id      = "nodejs"
  bundle_id         = "nano_3_0"
  add_on {
    type          = "AutoSnapshot"
    snapshot_time = "06:00"
    status        = "Enabled"
  }
  tags = {
    kevin = "site"
  }
}