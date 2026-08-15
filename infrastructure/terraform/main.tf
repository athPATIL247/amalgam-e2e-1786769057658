resource "aws_s3_bucket" "app_logs" {
  bucket = "pulse-api-logs-${var.env}"
}

resource "aws_s3_bucket_public_access_block" "logs" {
  bucket = aws_s3_bucket.app_logs.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

variable "env" {
  type    = string
  default = "dev"
}
