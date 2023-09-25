import argparse, os, json, fnmatch, re, fileinput
from xml.dom.minidom import parse

parser = argparse.ArgumentParser()
parser.add_argument('--dotnet_dir_path', type=str, default=None)
parser.add_argument('--java_dir_path', type=str, default=None)
parser.add_argument('--python_dir_path', type=str, default=None)
parser.add_argument('--packages_json_file', type=str, default=None)
args = parser.parse_args()
dotnet_dir_path = args.dotnet_dir_path
java_dir_path = args.java_dir_path
python_dir_path = args.python_dir_path
packages_json_file = args.packages_json_file

"""
此脚本应用于将package.json devDependencies中设置的jsii版本信息同步设置到构建后multiple-languages中的dotnet、java、python目录的资源包内依赖文件（resource.csproj/pom.xml/setup.py/requires.txt）中

输入： dotnet_dir_path/java_dir_path/python_dir_path/packages_json_file
"""


def get_jsii_package_version():
    if os.path.exists(packages_json_file):
        with open(packages_json_file, "r") as f:
            content = f.read()
            data = json.loads(content)
        jsii_version = data.get('devDependencies', {}).get('jsii')
        return jsii_version.replace('\n', '').replace('\r', '').strip()
    return None


def sync_dotnet_jsii_version():
    jsii_version = get_jsii_package_version()
    if not jsii_version:
        print('未获取到packages.json内的jsii版本信息')
        exit(1)
    reset_jsii_version = csproj_and_pom_files_version_range_to_interval(jsii_version)
    if os.path.exists(dotnet_dir_path):
        csproj_files = find_reset_files(dotnet_dir_path, '*.csproj')
        for file in csproj_files:
            update_csproj_files_version(file, reset_jsii_version)


def sync_java_jsii_version():
    jsii_version = get_jsii_package_version()
    if not jsii_version:
        print('未获取到packages.json内的jsii版本信息')
        exit(1)
    reset_jsii_version = csproj_and_pom_files_version_range_to_interval(jsii_version)
    if os.path.exists(java_dir_path):
        pom_files = find_reset_files(java_dir_path, '*.xml')
        for file in pom_files:
            update_pom_files_version(file, reset_jsii_version)


def sync_python_jsii_version():
    jsii_version = get_jsii_package_version()
    if not jsii_version:
        print('未获取到packages.json内的jsii版本信息')
        exit(1)
    reset_setup_jsii_version = convert_python_setup_version(jsii_version)
    reset_requires_jsii_version = convert_python_requires_version(jsii_version)
    if os.path.exists(python_dir_path):
        setup_files = find_reset_files(python_dir_path, 'setup.py')
        for file in setup_files:
            update_python_setup_files_version(file, reset_setup_jsii_version)
        requires_files = find_reset_files(python_dir_path, 'requires.txt')
        for file in requires_files:
            update_python_requires_files_version(file, reset_requires_jsii_version)


def find_reset_files(directory, reset_file_type):
    reset_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if fnmatch.fnmatch(file, reset_file_type):
                reset_files.append(os.path.join(root, file))
    return reset_files


def csproj_and_pom_files_version_range_to_interval(version_range):
    version_range = version_range.strip()

    # 判断是否是 >x.y.z 格式
    if re.match(r'^>[0-9]+\.[0-9]+\.[0-9]+$', version_range):
        version = version_range[1:]
        return f'({version},{int(version.split(".")[0]) + 1}.0.0)'

    # 判断是否是 >x.y.z <=a.b.c 格式
    if re.match(r'^>[0-9]+\.[0-9]+\.[0-9]+\s+<=[0-9]+\.[0-9]+\.[0-9]+$', version_range):
        version_range = version_range.split()
        start_version = version_range[0][1:]
        end_version = version_range[1][2:]
        return f'({start_version},{end_version}]'

    # 匹配 ^x.y.z
    match = re.match(r'\^(\d+\.\d+\.\d+)', version_range)
    if match:
        version = match.group(1)
        # 将 ^x.y.z 转换成 [x.y.z, x.y+1.0)
        return f'[{version}, {int(version.split(".")[0]) + 1}.0.0)'


def convert_python_setup_version(version):
    # 匹配">X.XX.X <=X.XX.X"的模式
    pattern1 = re.compile(r'>(\d+\.\d+\.\d+) <=(\d+\.\d+\.\d+)')
    # 匹配"^X.XX.X"的模式
    pattern2 = re.compile(r'\^(\d+\.\d+\.\d+)')

    # 将">X.XX.X <=X.XX.X"转换成"jsii>X.XX.X, <=X.XX.X"
    version = re.sub(pattern1, r'jsii>\1, <=\2', version)
    # 将"^X.XX.X"转换成"jsii>=X.XX.X, <X.XX.X"
    version = re.sub(pattern2, r'jsii>=\1, <2.0.0', version)

    return version


def convert_python_requires_version(version):
    # 匹配">X.XX.X <=X.XX.X"的模式
    pattern1 = re.compile(r'>(\d+\.\d+\.\d+)\s+<=(\d+\.\d+\.\d+)')
    # 匹配"^X.XX.X"的模式
    pattern2 = re.compile(r'\^(\d+\.\d+\.\d+)')

    # 将">X.XX.X <=X.XX.X"转换成"jsii<=X.XX.X, >X.XX.X"
    version = re.sub(pattern1, r'jsii<=\2,>\1', version)
    # 将"^X.XX.X"转换成"jsii<X.XX.X, >=X.XX.X"
    version = re.sub(pattern2, r'jsii<2.0.0,>=\1', version)

    return version


def update_csproj_files_version(csproj_file_path, jsii_version):
    dom_tree = parse(csproj_file_path)
    root_node = dom_tree.documentElement
    item_groups = root_node.getElementsByTagName("ItemGroup")
    for item_node in item_groups:
        package_refs = item_node.getElementsByTagName("PackageReference")
        for package_ref in package_refs:
            if package_ref.getAttribute("Include") == "Amazon.JSII.Runtime":
                package_ref.setAttribute("Version", jsii_version)
    with open(csproj_file_path, 'w') as f:
        dom_tree.writexml(f, addindent='\t', newl='\n', encoding='utf-8')
    for line in fileinput.input(csproj_file_path, inplace=1):
        if not fileinput.isfirstline():
            print(line.replace("\n", ""))


def update_python_setup_files_version(requires_file_path, jsii_version):
    with open(requires_file_path, 'r') as file:
        content = file.read()
        pattern = '(\"jsii.*)'
        replaced_content = re.sub(pattern, '\"' + jsii_version + '\"', content, flags=re.MULTILINE)
    with open(requires_file_path, 'w') as file:
        file.write(replaced_content)


def update_python_requires_files_version(requires_file_path, jsii_version):
    with open(requires_file_path, 'r') as file:
        content = file.read()
        pattern = r'(^jsii.*)'
        replaced_content = re.sub(pattern, jsii_version, content, flags=re.MULTILINE)
    with open(requires_file_path, 'w') as file:
        file.write(replaced_content)


def update_pom_files_version(pom_file_path, jsii_version):
    dom_tree = parse(pom_file_path)
    root_node = dom_tree.documentElement
    dependencies_items = root_node.getElementsByTagName("dependencies")
    for dependencies_node in dependencies_items:
        dependency_items = dependencies_node.getElementsByTagName("dependency")
        for dependency_node in dependency_items:
            artifact_id_items = dependency_node.getElementsByTagName("artifactId")
            for artifact_id_node in artifact_id_items:
                if artifact_id_node.firstChild.data == "jsii-runtime":
                    version_node = dependency_node.getElementsByTagName("version")[0]
                    version_node.firstChild.data = jsii_version
    with open(pom_file_path, 'w') as f:
        dom_tree.writexml(f, addindent='\t', newl='\n', encoding='utf-8')


if __name__ == '__main__':
    sync_dotnet_jsii_version()
    sync_java_jsii_version()
    sync_python_jsii_version()
