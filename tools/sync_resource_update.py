# -*- coding: utf-8 -*-
import shutil
import argparse
import json
import os
import subprocess

parser = argparse.ArgumentParser()
parser.add_argument('--github_branch', type=str, default=None)
parser.add_argument('--gitlab_branch', type=str, default=None)
parser.add_argument('--github_username', type=str, default=None)
parser.add_argument('--github_password', type=str, default=None)
args = parser.parse_args()
github_username = args.github_username
github_password = args.github_password
github_branch = args.github_branch
gitlab_branch = args.gitlab_branch
root_path = os.getcwd()
gitlab_clone_path = 'http://gitlab.alibaba-inc.com/ros/cdk.git'
github_clone_path = 'https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit.git'

"""
此脚本应用于对比ROS资源信息是否更新，若更新则自动更新差异输出新的资源包。
输入： github_branch/gitlab_branch/github_username/github_password
"""


def exec_command(command, cmd_path=None):
    if cmd_path:
        exec_command_res_code = subprocess.call(command, shell=True, cwd=cmd_path)
    else:
        exec_command_res_code = subprocess.call(command, shell=True)
    if int(exec_command_res_code) != 0:
        print('Exec command  %s failed, please check environment' % command)
        exit()


def get_present_server_package_version(base_path):
    cdk_info_file_path = os.path.join(base_path, 'packages/ros-cdk-cli/cdk-info.json')
    # 获取当前sdk核心包与sdk资源包版本
    with open(cdk_info_file_path) as f:
        cdk_info_file_info = json.load(f)
    cdk_core_package_version = cdk_info_file_info.get('cdk_sdk_version')
    cdk_service_package_version = cdk_info_file_info.get('cdk_service_sdk_version')
    return cdk_core_package_version, cdk_service_package_version


def update_cdk_sdk_version(base_path):
    cdk_core_package_version, cdk_service_package_version = get_present_server_package_version(base_path)
    return_cdk_core_package_version_value = increment_package_version(cdk_core_package_version)
    update_cdk_core_package_version = return_cdk_core_package_version_value
    return_cdk_service_package_version_value = increment_package_version(cdk_service_package_version)
    update_cdk_service_package_version = return_cdk_service_package_version_value
    ros_cdk_assembly_schema_package_json_path = os.path.join(base_path,
                                                             'packages/@alicloud/ros-cdk-assembly-schema/package.json')
    ros_cdk_assert_package_json_path = os.path.join(base_path,
                                                    'packages/@alicloud/ros-cdk-assert/package.json')
    ros_cdk_core_package_json_path = os.path.join(base_path,
                                                  'packages/@alicloud/ros-cdk-core/package.json')
    ros_cdk_cxapi_package_json_path = os.path.join(base_path,
                                                   'packages/@alicloud/ros-cdk-cxapi/package.json')
    ros_cdk_spec_package_json_path = os.path.join(base_path,
                                                  'packages/@alicloud/ros-cdk-spec/package.json')
    ros_cdk_template_diff_package_json_path = os.path.join(base_path,
                                                           'packages/@alicloud/ros-cdk-template-diff/package.json')
    ros_cdk_codegen_package_json_path = os.path.join(base_path,
                                                     'packages/ros-cdk-codegen/package.json')
    to_replace_file_path = [ros_cdk_assembly_schema_package_json_path, ros_cdk_assert_package_json_path,
                            ros_cdk_core_package_json_path, ros_cdk_cxapi_package_json_path,
                            ros_cdk_spec_package_json_path, ros_cdk_template_diff_package_json_path,
                            ros_cdk_codegen_package_json_path]
    for file_path in to_replace_file_path:
        replace_cdk_package_json_info(file_path, update_cdk_core_package_version)

    update_cdk_codegen_template_package_version(update_cdk_core_package_version, update_cdk_service_package_version,
                                                base_path)
    update_cdk_cli_version(base_path)


def replace_cdk_package_json_info(json_path, to_replace_version):
    update_core_packages_list = ['@alicloud/ros-cdk-assembly-schema', '@alicloud/ros-cdk-cxapi',
                                 '@alicloud/ros-cdk-core', '@alicloud/ros-cdk-template-diff', '@alicloud/ros-cdk-spec']
    with open(json_path) as f:
        json_data = json.load(f)
        if json_data.get('version'):
            json_data['version'] = to_replace_version
        if json_data.get('dependencies'):
            for key, values in json_data.get('dependencies').items():
                if key in update_core_packages_list:
                    json_data.get('dependencies')[key] = "^" + to_replace_version
        if json_data.get('peerDependencies'):
            for key, values in json_data.get('peerDependencies').items():
                if key in update_core_packages_list:
                    json_data.get('peerDependencies')[key] = "^" + to_replace_version

    with open(json_path, "w") as new_f:
        package_json_data = json.dumps(json_data, indent=2, separators=(',', ': '))
        new_f.write(package_json_data)


def increment_package_version(input_version):
    return_value = ''
    if len(input_version.split('.')) > 2:
        first_position_number = str(input_version.split('.')[0])
        second_position_number = str(input_version.split('.')[1])
        third_position_number = str(int(input_version.split('.')[2]) + 1)
        return_value = f'{first_position_number}.{second_position_number}.{third_position_number}'
    else:
        print(f'Please check you input package version {input_version}')
    return return_value


def update_cdk_cli_version(base_path):
    ros_cdk_cli_package_json_path = os.path.join(base_path,
                                                 'packages/ros-cdk-cli/package.json')
    with open(ros_cdk_cli_package_json_path) as f:
        json_data = json.load(f)
        if json_data.get('version'):
            return_value = increment_package_version(json_data.get('version'))
            json_data['version'] = return_value
    with open(ros_cdk_cli_package_json_path, "w") as new_f:
        package_json_data = json.dumps(json_data, indent=2, separators=(',', ': '))
        new_f.write(package_json_data)


def update_cdk_codegen_template_package_version(cdk_core_package_version, cdk_service_package_version, base_path):
    ros_codegen_package_template_package_json_path = os.path.join(base_path,
                                                                  'packages/ros-cdk-codegen/lib/pkg-template/package.json')
    with open(ros_codegen_package_template_package_json_path) as f:
        json_data = json.load(f)
        if json_data.get('version'):
            json_data['version'] = cdk_service_package_version
        if json_data.get('dependencies'):
            for key, values in json_data.get('dependencies').items():
                if key == "@alicloud/ros-cdk-core":
                    json_data.get('dependencies')[key] = "^" + cdk_core_package_version
        if json_data.get('peerDependencies'):
            for key, values in json_data.get('peerDependencies').items():
                if key == "@alicloud/ros-cdk-core":
                    json_data.get('peerDependencies')[key] = "^" + cdk_core_package_version

    with open(ros_codegen_package_template_package_json_path, "w") as new_f:
        package_json_data = json.dumps(json_data, indent=2, separators=(',', ': '))
        new_f.write(package_json_data)


def update_gitlab_multiple_languages_dotnet_packages():
    exec_command('rm -rf multiple-languages/dotnet/*')
    exec_command('\cp -rf dist/dotnet multiple-languages')


def update_gitlab_multiple_languages_java_packages():
    exec_command('rm -rf multiple-languages/java/*')
    exec_command('\cp -rf dist/java multiple-languages')


def update_gitlab_multiple_languages_python_packages():
    exec_command('rm -rf multiple-languages/python/*')
    exec_command('\cp -rf dist/python multiple-languages')


def update_gitlab_multiple_languages_js_packages():
    exec_command('rm -rf multiple-languages/js/*')
    exec_command('\cp -rf dist/js multiple-languages')


def update_gitlab_multiple_languages_jsii_packages():
    exec_command('rm -rf multiple-languages/jsii/*')
    exec_command('\cp -rf dist/jsii multiple-languages')


def clone_gitlab_project(base_gitlab_path):
    if os.path.isdir(base_gitlab_path):
        shutil.rmtree(base_gitlab_path)
    os.makedirs(base_gitlab_path, exist_ok=True)
    exec_command('git clone -b %s %s %s' % (gitlab_branch, gitlab_clone_path, base_gitlab_path))


def clone_github_project(base_github_path):
    if os.path.isdir(base_github_path):
        shutil.rmtree(base_github_path)
    os.makedirs(base_github_path, exist_ok=True)
    exec_command('git clone %s %s' % (github_clone_path, base_github_path))
    exec_command('git checkout -b %s' % github_branch, cmd_path=base_github_path)


def check_resource_update(base_gitlab_path, base_github_path):
    gitlab_cdk_core_package_version, gitlab_cdk_service_package_version = get_present_server_package_version(
        base_gitlab_path)
    github_cdk_core_package_version, github_cdk_service_package_version = get_present_server_package_version(
        base_github_path)
    if len(gitlab_cdk_core_package_version.split('.')) > 2 and len(github_cdk_core_package_version.split('.')) > 2:
        if int(github_cdk_core_package_version.split('.')[2]) + 1 == int(gitlab_cdk_core_package_version.split('.')[2]):
            return True
    return False


def sync_update_packages(base_gitlab_path, base_github_path):
    github_package_dir_path = os.path.join(base_gitlab_path, 'multiple-languages/github')
    if os.path.isdir(github_package_dir_path):
        shutil.rmtree(github_package_dir_path)
    os.makedirs(github_package_dir_path, exist_ok=True)
    exec_command('sh build.sh convert-js-project --github', cmd_path=base_gitlab_path)
    exec_command('sh build.sh convert-maven-project --github', cmd_path=base_gitlab_path)
    exec_command('sh build.sh convert-python-project --github', cmd_path=base_gitlab_path)
    exec_command('sh build.sh convert-csharp-project --github', cmd_path=base_gitlab_path)

    exec_command('rm -rf %s/multiple-languages/dotnet/*' % base_github_path)
    exec_command(
        '\cp -rf %s/multiple-languages/github/dotnet %s/multiple-languages' % (base_gitlab_path, base_github_path))
    exec_command('rm -rf %s/multiple-languages/java/*' % base_github_path)
    exec_command(
        '\cp -rf %s/multiple-languages/github/java %s/multiple-languages' % (base_gitlab_path, base_github_path))
    exec_command('rm -rf %s/multiple-languages/js/*' % base_github_path)
    exec_command('\cp -rf %s/multiple-languages/github/js %s/multiple-languages' % (base_gitlab_path, base_github_path))
    exec_command('rm -rf %s/multiple-languages/python/*' % base_github_path)
    exec_command(
        '\cp -rf %s/multiple-languages/github/python %s/multiple-languages' % (base_gitlab_path, base_github_path))
    exec_command('rm -rf %s/packages/@alicloud/ros-cdk-spec/spec/*' % base_github_path)
    exec_command(
        '\cp -rf %s/packages/@alicloud/ros-cdk-spec/spec %s/packages/@alicloud/ros-cdk-spec' % (
        base_gitlab_path, base_github_path))
    exec_command('rm -rf %s/packages/@alicloud/services/*' % base_github_path)
    exec_command(
        '\cp -rf %s/packages/@alicloud/services %s/packages/@alicloud' % (
            base_gitlab_path, base_github_path))


def mv_packages_with_github_project(base_gitlab_path, base_github_path):
    github_package_dir_path = os.path.join(base_gitlab_path, 'multiple-languages/github')
    if os.path.isdir(github_package_dir_path):
        exec_command('rm -rf %s/multiple-languages/*' % base_github_path)
        exec_command(
            '\cp -rf %s/multiple-languages/github/ %s/multiple-languages' % (base_gitlab_path, base_github_path))
    else:
        print('Not found build packages dir.')


def main():
    base_gitlab_path = os.path.join(root_path, 'gitlab_code/cdk/')
    base_github_path = os.path.join(root_path, 'github_code/Resource-Orchestration-Service-Cloud-Development-Kit/')
    clone_gitlab_project(base_gitlab_path)
    clone_github_project(base_github_path)
    check_resource_ret = check_resource_update(base_gitlab_path, base_github_path)
    if check_resource_ret:
        update_cdk_sdk_version(base_github_path)
        exec_command('sh build.sh generate-package-version', cmd_path=base_github_path)
        sync_update_packages(base_gitlab_path, base_github_path)
    else:
        print('CDK project not update')
        exit()


if __name__ == '__main__':
    main()
