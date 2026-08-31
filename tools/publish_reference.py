#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
本地可执行版 OSS 文件部署脚本。

用法:
    python3 publish_reference.py --folder_path=/dir_path --destination_bucket=bucket_name --ak=xxx --sk=xxx --region=cn-hangzhou

参数:
    --folder_path          源文件目录路径（目录下的全部文件将被部署，子目录忽略）
    --destination_bucket   目标 Bucket 名称
    --ak                   RAM 用户 AccessKey ID
    --sk                   RAM 用户 AccessKey Secret
    --region               OSS 地域 ID，如 cn-hangzhou（AuthV4 签名必需）
    --endpoint             可选，OSS Endpoint，默认 https://oss-<region>.aliyuncs.com
"""

import argparse
import json
import logging
import os
import shutil
import sys
import tempfile

import oss2
from oss2 import determine_part_size
from oss2.models import PartInfo

import ros_cdk_core as core
import ros_cdk_ossdeployment as oss_deployment

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

# 与源 handler 的 copy_file 保持一致：小于等于 1GB 简单上传，超过则分片上传
SIMPLE_UPLOAD_THRESHOLD = 1073741824


def get_all_files(dir_path: str):
    result = []
    files = os.listdir(dir_path)
    for file in files:
        cur_path = os.path.join(dir_path, file)
        if os.path.isdir(cur_path):
            continue
        else:
            result.append(oss_deployment.Source.asset(cur_path))
    return result


def handler(sources, dest_bucket_name, access_key_id, access_key_secret, region, endpoint):
    """

    :param sources: get_all_files() 的返回结果，即 oss_deployment.Source.asset 列表，
                    对应源 handler 中 res_props['sources']
    :param dest_bucket_name: 目标 Bucket 名称，对应源 handler 的 dest_bucket_name，
                    由命令行参数 --destination_bucket 传入
    :param access_key_id: RAM 用户 AccessKey ID，由命令行参数 --ak 传入
    :param access_key_secret: RAM 用户 AccessKey Secret，由命令行参数 --sk 传入
    :param region: OSS 地域 ID，由命令行参数 --region 传入（AuthV4 签名必需）
    :param endpoint: OSS Endpoint，默认 https://oss-<region>.aliyuncs.com
    """
    result = {'Status': 'SUCCESS', 'Reason': ''}

    # OSS 认证：AuthV4 模式（替代源 handler 的 oss2.StsAuth）
    auth = oss2.AuthV4(access_key_id, access_key_secret)
    dest_bucket = oss2.Bucket(auth, endpoint, dest_bucket_name, region=region)

    staging_dir = tempfile.mkdtemp(prefix='oss-deployment-')
    try:
        # 目标 Bucket 存在性校验
        if not does_bucket_exist(dest_bucket):
            result.update({
                'Status': 'FAILED',
                'Reason': 'The destination bucket({}) not exist'.format(dest_bucket_name)
            })
            report_result(result)
            return

        # 与 BucketDeployment 中 props.sources.map(source => source.bind(this)) 等价：
        # 将 get_all_files 返回的 Source.asset 依次绑定到临时 scope，得到源 handler
        # 所消费的 SourceConfig（含 objectKey/fileName）；同时 Asset 会把本地文件
        # 暂存（staging）到 staging_dir 下，bind 按顺序为 Asset 分配 id：Asset1、Asset2……
        app = core.App(outdir=staging_dir)
        scope = core.Stack(app, 'source-staging')
        bound_sources = [source.bind(scope) for source in sources]

        # 遍历 sources，将本地文件上传至目标 Bucket（对应源 handler 的 copy 循环）
        uploaded_object_keys = []
        for index, source_config in enumerate(bound_sources):
            file_name = source_config.file_name
            object_key = source_config.object_key
            # 与源 handler 一致：有 fileName 用 fileName，否则用 objectKey
            # （get_all_files 只产生文件资产，fileName 恒为文件 basename）
            dest_object_key = file_name if file_name else object_key
            asset = scope.node.find_child('Asset{}'.format(index + 1))
            # 注意：Asset.asset_path 是相对 App outdir 的相对路径，需要拼接成绝对路径
            local_file_path = os.path.join(app.outdir, asset.asset_path)
            upload_file(dest_bucket, local_file_path, dest_object_key)
            uploaded_object_keys.append(dest_object_key)

        result.update({
            'Status': 'SUCCESS',
            'UploadedObjects': uploaded_object_keys
        })
        report_result(result)
    except Exception as ex:
        result.update({
            'Status': 'FAILED',
            'Reason': str(ex)
        })
        report_result(result)
    finally:
        shutil.rmtree(staging_dir, ignore_errors=True)


def does_bucket_exist(bucket):
    """与源 handler 的同名函数逻辑一致。"""
    try:
        bucket.get_bucket_info()
    except oss2.exceptions.NoSuchBucket:
        return False
    except:
        raise
    return True


def upload_file(dest_bucket, local_file_path, dest_object_key):
    """对应源 handler 的 copy_file：源 handler 从临时源 Bucket 拷贝对象到目标 Bucket，
    本地脚本改为直接上传本地文件到目标 Bucket，大小阈值与分片逻辑保持一致。"""
    total_size = os.path.getsize(local_file_path)
    print('local file size:', total_size)

    if total_size <= SIMPLE_UPLOAD_THRESHOLD:
        result = dest_bucket.put_object_from_file(dest_object_key, local_file_path)
        print('result:', result.status)
    else:
        part_size = determine_part_size(total_size, preferred_size=100 * 1024)
        print('part_size:', part_size)

        upload_id = dest_bucket.init_multipart_upload(dest_object_key).upload_id
        parts = []

        part_number = 1
        offset = 0
        with open(local_file_path, 'rb') as f:
            while offset < total_size:
                num_to_upload = min(part_size, total_size - offset)
                f.seek(offset)
                result = dest_bucket.upload_part(dest_object_key, upload_id, part_number,
                                                 f.read(num_to_upload))
                parts.append(PartInfo(part_number, result.etag))

                offset += num_to_upload
                part_number += 1

        result = dest_bucket.complete_multipart_upload(dest_object_key, upload_id, parts)
        print('result :', result.status)
        head_info = dest_bucket.head_object(dest_object_key)
        dest_object_size = head_info.content_length
        print('dest object size:', dest_object_size)
        assert dest_object_size == total_size


def report_result(result):
    """替代源 handler 的 callback_ros：本地执行没有 ROS ResponseURL，
    直接输出结果，并以非零退出码标识失败。"""
    logger.info('result: %s', result)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    if result.get('Status') != 'SUCCESS':
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description='本地可执行版 OSS 文件部署脚本')
    parser.add_argument('--folder_path', required=True,
                        help='源文件目录路径（目录下的全部文件将被部署，子目录忽略）')
    parser.add_argument('--destination_bucket', required=True,
                        help='目标 Bucket 名称，对应源 handler 的 dest_bucket_name')
    parser.add_argument('--ak', dest='access_key_id', required=True,
                        help='RAM 用户 AccessKey ID')
    parser.add_argument('--sk', dest='access_key_secret', required=True,
                        help='RAM 用户 AccessKey Secret')
    parser.add_argument('--region', required=True,
                        help='OSS 地域 ID，如 cn-hangzhou（AuthV4 签名必需）')
    parser.add_argument('--endpoint', default=None,
                        help='可选，OSS Endpoint，默认 https://oss-<region>.aliyuncs.com')
    args = parser.parse_args()

    folder_path = args.folder_path
    destination_bucket = args.destination_bucket
    endpoint = args.endpoint or 'https://oss-{}.aliyuncs.com'.format(args.region)

    if not os.path.isdir(folder_path):
        print('folder_path({}) 不存在或不是目录'.format(folder_path))
        sys.exit(1)

    # 使用 Source.asset 方式加载 folder_path 下的全部文件，结果作为 handler 的 sources
    sources = get_all_files(folder_path)
    if not sources:
        print('folder_path({}) 下没有需要部署的文件'.format(folder_path))
        sys.exit(1)

    # destination_bucket 对应源 handler 的 dest_bucket_name
    handler(sources, destination_bucket, args.access_key_id, args.access_key_secret,
            args.region, endpoint)


if __name__ == '__main__':
    main()
