import json
import os, argparse
import re

import markdown
from xml.dom.minidom import parse

parser = argparse.ArgumentParser()
parser.add_argument('--file_path', type=str, default=None)
parser.add_argument('--output_path', type=str, default=None)
args = parser.parse_args()
file_path = args.file_path
output_path = args.output_path

"""
此脚本应用于修改生成页面的markdown文件，实现如下功能：对于每一个二级标题，新建一个同名文件夹，并在该文件夹下对于每一个三级标题，
新建一个同名markdown文件，文件内容是原三级标题下的内容，并把标题优先级提高两级。
输入： file_path
"""


def transform_string(path):
    paths = path.split('/')
    prod_names = paths[-2].split('-')
    prod_names[0] = prod_names[0].upper()
    prod_names[1] = prod_names[1].upper()
    paths[-2] = '-'.join(prod_names)
    return '/'.join(paths)


def write_overview(path):
    global output_path
    global file_path
    prod_name = output_path.split('/')[-2]
    package_json = '/'.join(file_path.split('/')[:-2]) + '/package.json'

    with open(package_json) as f:
        json_content = json.load(f)

    with open(path, 'w', encoding='utf-8') as file:
        file.write(prod_name+' Module\n')
        file.write('## Package\n')
        file.write('| **Language** | **Package Dependency** |\n')
        file.write('| --- | --- |\n')
        file.write('|.Net|&lt;PackageReference Include="{}" Version="{}"/&gt;|\n'
                   .format(json_content['jsii']['targets']['dotnet']['packageId'],
                           json_content['version']))
        file.write('|Java|&lt;dependency&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;{}&lt;/groupId&gt;<br>&nbsp;&nbsp;'
                   '&nbsp;&nbsp;&lt;artifactId&gt;{}&lt;/artifactId&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;{}&lt;/version&gt;'
                   '<br>&lt;/dependency&gt;|\n'
                   .format(json_content['jsii']['targets']['java']['maven']['groupId'],
                           json_content['jsii']['targets']['java']['maven']['artifactId'],
                           json_content['version']))
        file.write('|Python|{}=={}|\n'
                   .format(json_content['jsii']['targets']['python']['distName'],
                           json_content['version']))
        file.write('|Typescript|"devDependencies": {{<br>&nbsp;&nbsp;&nbsp;&nbsp;"{}": "^{}"<br>}}|\n'
                   .format(json_content['name'],
                           json_content['version']))


def process_markdown_file():
    global file_path
    global output_path
    output_path = transform_string(output_path)
    # 读取Markdown文件内容
    with open(file_path, 'r', encoding='utf-8') as file:
        markdown_content = file.read()

    # 替换普通资源Props链接
    markdown_content = re.sub(r'\| <code><a href=(.*?)<a href=(.*?)\.(.*?)Props">(.*?)Props</a>',
                              r'| <code><a href=\1[\3Props](../Structs/\3Props.md)', markdown_content)
    markdown_content = re.sub(r'\*Type:\* <a href=(.*?)\.(.*?)Props">(.*?)Props</a>',
                              r'*Type:* [\3Props](../Structs/\3Props.md)', markdown_content)
    # 替换Datasource Props链接
    markdown_content = re.sub(r'\| <code>(.*?)<code>(.*?)\.datasource\.(.*?)Props</code>',
                              r'| <code>\1<code>[\3Props](../Structs/\3Props.md)</code>', markdown_content)
    markdown_content = re.sub(r'\*Type:\*(.*?)\.datasource\.(.*?)Props', r'*Type:* [\2Props](../Structs/\2Props.md)',
                              markdown_content)
    # 替换Property链接
    markdown_content = re.sub(r'\| <code><a href(.*?)<a href=(.*?)Property">(.*?)Property</a>',
                              r'| <code><a href\1[\3Property](../Structs/\3Property.md)', markdown_content)
    markdown_content = re.sub(r'\*Type:\*(.*?)<a href=(.*?)">(.*?)Property</a>',
                              r'*Type:*\1[\3Property](../Structs/\3Property.md)', markdown_content)

    # 获取所有二级标题和三级标题
    headings = []
    current_heading = None
    for line in markdown_content.split('\n'):
        if line.startswith('## '):
            current_heading = line[3:]
        elif line.startswith('### '):
            if '.datasource.' in line:
                headings.append(('Datasource/'+current_heading, line[4:]))
            else:
                headings.append((current_heading, line[4:]))

    # 创建文件夹和文件
    for heading in headings:
        folder_name = heading[0].split()[0]
        file_name = heading[1].split()[0] + '.md'

        # 创建文件夹
        folder_path = os.path.join(output_path, folder_name)
        os.makedirs(folder_path, exist_ok=True)

        # 创建文件
        md_file_path = os.path.join(folder_path, file_name)
        overview_file_path = os.path.join(output_path, 'Overview.md')
        write_overview(overview_file_path)
        with open(md_file_path, 'w', encoding='utf-8') as file:
            # 获取原三级标题下的内容
            start_index = markdown_content.index(heading[1])
            end_index = len(markdown_content)
            if headings.index(heading) < len(headings) - 1:
                next_heading = headings[headings.index(heading) + 1]
                end_index = markdown_content.index(next_heading[1])
            content = markdown_content[start_index:end_index].strip().strip("#")

            # 将标题优先级提高两级
            content = content.replace("## ", " ").replace("#### ", "")

            # 写入文件
            file.write('# ' + content)


if __name__ == '__main__':
    process_markdown_file()
