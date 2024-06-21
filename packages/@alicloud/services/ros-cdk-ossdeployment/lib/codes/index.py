# -*- coding: utf-8 -*-
import json
import oss2
import logging
import urllib.request

import time
from oss2.models import PartInfo, RestoreConfiguration
from oss2 import determine_part_size

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
}
logger = logging.getLogger()


def handler(event, context):
    evt = json.loads(event)
    logger.info('receive request: %s', evt)
    result = dict(
        RequestId=evt['RequestId'],
        LogicalResourceId=evt['LogicalResourceId'],
        StackId=evt['StackId'],
        PhysicalResourceId='-',
    )
    request_type = evt['RequestType']
    res_props = evt['ResourceProperties']
    retain_on_create = res_props['retainOnCreate']

    auth = oss2.StsAuth(context.credentials.access_key_id, context.credentials.access_key_secret,
                        context.credentials.security_token)
    endpoint = 'https://oss-{}-internal.aliyuncs.com'.format(context.region)

    sources = res_props['sources']
    dest_bucket_name = res_props['destinationBucket']
    dest_bucket = oss2.Bucket(auth, endpoint, dest_bucket_name)
    if request_type == 'Create' or request_type == 'Update':
        try:
            if not does_bucket_exist(dest_bucket):
                result.update({
                    'Status': 'FAILED',
                    'Reason': 'The destination bucket({}) not exist'.format(dest_bucket_name)
                })
                callback_ros(result, evt)
                return
            object_keys_to_be_deleted = []
            src_bucket_name = sources[0]['bucket']
            src_bucket = oss2.Bucket(auth, endpoint, src_bucket_name)
            if not does_bucket_exist(src_bucket):
                result.update({
                    'Status': 'FAILED',
                    'Reason': 'The source bucket({}) not exist'.format(src_bucket_name)
                })
                callback_ros(result, evt)
                return
            for source in sources:
                fileName = source.get('fileName', None)
                object_key = source['objectKey']
                if fileName:
                    dest_object_key = fileName
                else:
                    dest_object_key = object_key
                object_keys_to_be_deleted.append(dest_object_key)
                copy_file(src_bucket_name, src_bucket, dest_bucket, object_key, dest_object_key)
            if not retain_on_create:
                for object_key in object_keys_to_be_deleted:
                    src_bucket.delete_object(object_key)
            result.update({
                'Status': 'SUCCESS'
            })
            callback_ros(result, evt)
        except Exception as ex:
            result.update({
                'Status': 'FAILED',
                'Reason': str(ex)
            })
            callback_ros(result, evt)
    elif request_type == 'Delete':
        if not does_bucket_exist(dest_bucket):
            result.update({
                'Status': 'SUCCESS'
            })
            callback_ros(result, evt)
            return

        for source in sources:
            object_key = source['objectKey']
            dest_object_key = source.get('fileName', object_key)
            try:
                dest_bucket.delete_object(dest_object_key)
            except Exception as ex:
                result.update({
                    'Status': 'FAILED',
                    'Reason': str(ex)
                })
                callback_ros(result, evt)
        result.update({
            'Status': 'SUCCESS'
        })
        callback_ros(result, evt)


def does_bucket_exist(bucket):
    try:
        bucket.get_bucket_info()
    except oss2.exceptions.NoSuchBucket:
        return False
    except:
        raise
    return True


def copy_file(src_bucket_name, src_bucket, dest_bucket, src_object_key, dest_object_key):
    head_info = src_bucket.head_object(src_object_key)
    total_size = head_info.content_length
    print('src object size:', total_size)

    if total_size <= 1073741824:
        result = dest_bucket.copy_object(src_bucket_name, src_object_key, dest_object_key)
        print('result:', result.status)
    else:
        part_size = determine_part_size(total_size, preferred_size=100 * 1024)
        print('part_size:', part_size)

        upload_id = dest_bucket.init_multipart_upload(dest_object_key).upload_id
        parts = []

        part_number = 1
        offset = 0
        while offset < total_size:
            num_to_upload = min(part_size, total_size - offset)
            end = offset + num_to_upload - 1

            result = dest_bucket.upload_part_copy(src_bucket_name, src_object_key, (offset, end), dest_object_key, upload_id,
                                                  part_number)
            parts.append(PartInfo(part_number, result.etag))

            offset += num_to_upload
            part_number += 1

        result = dest_bucket.complete_multipart_upload(dest_object_key, upload_id, parts)
        print('result :', result.status)
        head_info = dest_bucket.head_object(dest_object_key)
        dest_object_size = head_info.content_length
        print('dest object size:', dest_object_size)
        assert dest_object_size == total_size


def callback_ros(result, evt):
    logger.info('result: %s', result)
    headers.update({
        'Date': time.strftime('%a, %d %b %Y %X GMT', time.gmtime())
    })
    req = urllib.request.Request(evt['ResponseURL'], data=json.dumps(result).encode('utf-8'), headers=headers)
    resp = urllib.request.urlopen(req)
    resp_content = resp.read()
    logger.info('response: %s', resp_content)


def clear_and_delete_bucket(bucket):
    for obj in oss2.ObjectIterator(bucket):
        bucket.delete_object(obj.key)
    try:
        bucket.delete_bucket()
    except oss2.exceptions.NoSuchBucket:
        return
