/**
 * According to https://help.aliyun.com/oss/user-guide/common-examples-of-bucket-policy
 */

export const BUCKET_READ_ACTIONS = [
    'oss:GetObject',
    'oss:GetObjectAcl',
    'oss:GetObjectVersion',
    'oss:GetObjectVersionAcl',
]

export const BUCKET_READ_WRITE_ACTIONS = [
    'oss:GetObject',
    'oss:PutObject',
    'oss:GetObjectAcl',
    'oss:PutObjectAcl',
    'oss:AbortMultipartUpload',
    'oss:ListParts',
    'oss:RestoreObject',
    'oss:GetVodPlaylist',
    'oss:PostVodPlaylist',
    'oss:PublishRtmpStream',
    'oss:ListObjectVersions',
    'oss:GetObjectVersion',
    'oss:GetObjectVersionAcl',
    'oss:RestoreObjectVersion',
]

export const BUCKET_LIST_ACTIONS = [
    'oss:ListObjects',
    'oss:ListObjectVersions',
]