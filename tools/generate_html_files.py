# -*- coding: utf-8 -*-
# Copyright (c) 2020 Aliyun.com All right reserved. This software is the
# confidential and proprietary information of Aliyun.com ("Confidential
# Information"). You shall not disclose such Confidential Information and shall
# use it only in accordance with the terms of the license agreement you entered
# into with Aliyun.com .

import os
import shutil
import subprocess
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--references_path', type=str, default=None)
args = parser.parse_args()
references_path = args.references_path


def execute_mkdocs(folder_path):
    os.chdir(folder_path)

    command = ['mkdocs', 'build', '--clean']

    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    if result.returncode != 0:
        print(f"MkDocs构建失败: {result.stderr}")
    else:
        print("MkDocs构建成功！")


def copy_directory_with_overwrite(src, dst):
    if not os.path.exists(src):
        print(f"源文件夹 '{src}' 不存在")
        return

    if not os.path.exists(dst):
        os.makedirs(dst)

    for item in os.listdir(src):
        src_item = os.path.join(src, item)
        dst_item = os.path.join(dst, item)

        if os.path.isdir(src_item):
            copy_directory_with_overwrite(src_item, dst_item)
        else:
            shutil.copy2(src_item, dst_item)


def prepare_project(tmp_project_path):
    if os.path.exists(tmp_project_path):
        shutil.rmtree(tmp_project_path)
    os.makedirs(tmp_project_path)
    shutil.copy2(os.path.join(references_path, 'mkdocs.yml'), tmp_project_path)
    shutil.copytree(os.path.join(references_path, 'docs-templates'), os.path.join(tmp_project_path, 'docs'))


def generate_html_files():
    tmp_project_path = os.path.join(references_path, 'tmp')
    prepare_project(tmp_project_path)

    execute_mkdocs(tmp_project_path)

    src_site_path = os.path.join(tmp_project_path, 'site')
    dest_site_path = os.path.join(references_path, 'site')
    if os.path.exists(dest_site_path):
        shutil.rmtree(dest_site_path)

    shutil.copytree(src_site_path, dest_site_path)

    for lang in ['csharp', 'go', 'java', 'python', 'typescript']:
        print(f"Generating HTML files for {lang}")
        tmp_project_path = os.path.join(references_path, 'tmp')
        prepare_project(tmp_project_path)

        src_docs_path = os.path.join(references_path, 'docs', lang)
        dest_docs_path = os.path.join(tmp_project_path, 'docs', lang)
        copy_directory_with_overwrite(src_docs_path, dest_docs_path)

        execute_mkdocs(tmp_project_path)
        copy_directory_with_overwrite(os.path.join(src_site_path, lang),
                                      os.path.join(dest_site_path, lang))


if __name__ == '__main__':
    generate_html_files()
