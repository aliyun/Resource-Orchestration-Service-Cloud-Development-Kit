# -*- coding: utf-8 -*-

import os
import json


def main():
    root = os.getcwd()

    result = {}
    for path, name in (
        ('packages/@alicloud/ros-cdk-core/package.json', 'cdk_sdk_version'),
        ('packages/ros-cdk-codegen/lib/pkg-template/package.json', 'cdk_service_sdk_version')
    ):
        file_path = os.path.join(root, path)
        with open(file_path) as f:
            data = json.load(f)
        result[name] = data['version']

    file_path = os.path.join(root, 'packages/ros-cdk-cli/cdk-info.json')
    s = json.dumps(result, sort_keys=True, indent=4, separators=(',', ': '))
    print(f'generate {file_path}:\n{s}')
    with open(file_path, 'w') as f:
        f.write(s)


if __name__ == '__main__':
    main()
