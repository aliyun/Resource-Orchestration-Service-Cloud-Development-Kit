# -*- coding: utf-8 -*-
# Copyright (c) 2020 Aliyun.com All right reserved. This software is the
# confidential and proprietary information of Aliyun.com ("Confidential
# Information"). You shall not disclose such Confidential Information and shall
# use it only in accordance with the terms of the license agreement you entered
# into with Aliyun.com .

import os
import shutil
import subprocess
import sys
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--references_path', type=str, default=None)
args = parser.parse_args()
references_path = args.references_path


def execute_mkdocs(folder_path):
    os.chdir(folder_path)

    python_executable = os.environ.get('MKDOCS_PYTHON', sys.executable)

    result = subprocess.run([python_executable, '-m', 'mkdocs', 'build', '--clean'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

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


LANG_TITLES = {
    'csharp': 'Csharp',
    'go': 'Go',
    'java': 'Java',
    'python': 'Python',
    'typescript': 'Typescript',
}


def inject_lang_nav(tmp_project_path, lang):
    """向临时项目的mkdocs.yml追加浅层nav和not_in_nav配置，避免每个页面内嵌全量导航树导致体积过大"""
    lang_docs_path = os.path.join(tmp_project_path, 'docs', lang)
    products = []
    if os.path.isdir(lang_docs_path):
        for name in sorted(os.listdir(lang_docs_path)):
            product_path = os.path.join(lang_docs_path, name)
            if not name.startswith('.') and os.path.isdir(product_path) \
                    and os.path.exists(os.path.join(product_path, 'Overview.md')):
                products.append(name)

    lines = ['', 'nav:', '  - Home: index.md']
    for name, title in LANG_TITLES.items():
        if name == lang:
            lines.append(f'  - {title}:')
            lines.append(f'      - {name}/index.md')
            for product in products:
                lines.append(f'      - "{product}": "{name}/{product}/Overview.md"')
        else:
            lines.append(f'  - {title}: {name}/index.md')
    lines.append('not_in_nav: |')
    for name in LANG_TITLES:
        lines.append(f'  /{name}/*/**')

    with open(os.path.join(tmp_project_path, 'mkdocs.yml'), 'a', encoding='utf-8') as f:
        f.write('\n'.join(lines) + '\n')


def clean_site_assets(site_path):
    """构建后清理冗余产物：压缩sitemap及搜索相关静态资源（搜索插件已禁用）"""
    redundant_files = [os.path.join(site_path, 'sitemap.xml.gz')]
    redundant_dirs = [
        os.path.join(site_path, 'search'),
        os.path.join(site_path, 'assets', 'javascripts', 'lunr'),
    ]
    workers_dir = os.path.join(site_path, 'assets', 'javascripts', 'workers')
    if os.path.isdir(workers_dir):
        for name in os.listdir(workers_dir):
            if name.startswith('search'):
                redundant_files.append(os.path.join(workers_dir, name))
    for path in redundant_files:
        if os.path.isfile(path):
            os.remove(path)
    for path in redundant_dirs:
        if os.path.isdir(path):
            shutil.rmtree(path)


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

    clean_site_assets(src_site_path)
    shutil.copytree(src_site_path, dest_site_path)

    for lang in ['csharp', 'go', 'java', 'python', 'typescript']:
        print(f"Generating HTML files for {lang}")
        tmp_project_path = os.path.join(references_path, 'tmp')
        prepare_project(tmp_project_path)

        src_docs_path = os.path.join(references_path, 'docs', lang)
        dest_docs_path = os.path.join(tmp_project_path, 'docs', lang)
        copy_directory_with_overwrite(src_docs_path, dest_docs_path)

        inject_lang_nav(tmp_project_path, lang)
        execute_mkdocs(tmp_project_path)
        copy_directory_with_overwrite(os.path.join(src_site_path, lang),
                                      os.path.join(dest_site_path, lang))


if __name__ == '__main__':
    generate_html_files()
