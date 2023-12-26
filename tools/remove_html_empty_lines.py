# -*- coding: utf-8 -*-
# Copyright (c) 2020 Aliyun.com All right reserved. This software is the
# confidential and proprietary information of Aliyun.com ("Confidential
# Information"). You shall not disclose such Confidential Information and shall
# use it only in accordance with the terms of the license agreement you entered
# into with Aliyun.com .

# create by yingzhao via Code Generator at 2023/12/20 09:56
import os
import argparse
from tqdm import tqdm

parser = argparse.ArgumentParser()
parser.add_argument('--folder_path', type=str, default=None)
args = parser.parse_args()
folder_path = args.folder_path


def remove_extra_empty_lines(file_path):
    with open(file_path, 'r', encoding='utf-8') as input_file:
        lines = input_file.readlines()

    with open(file_path, 'w', encoding='utf-8') as output_file:
        for line in lines:
            if line.strip():
                output_file.write(line)


def process_html_files(folder_path):
    for root, dirs, files in tqdm(os.walk(folder_path), desc='Processing html files'):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                remove_extra_empty_lines(file_path)


# 调用函数来处理 HTML 文件
process_html_files(folder_path)
