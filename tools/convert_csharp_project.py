import argparse, os, fileinput
from xml.dom.minidom import parse

parser = argparse.ArgumentParser()
parser.add_argument('--csproj_file_path', type=str, default=None)
args = parser.parse_args()
csproj_file_path = args.csproj_file_path

"""
此脚本应用于修改C# .csproj文件，可以将jsii生成的.csproj文件转化成可进行C#发布的.csproj工程文件
输入： csproj_file_path
"""


def get_xml_root_node():
    if csproj_file_path:
        if os.path.exists(csproj_file_path):
            dom_tree = parse(csproj_file_path)
            root_node = dom_tree.documentElement

            return dom_tree, root_node
        else:
            print('File path is not exist.')
            exit()
    else:
        print('File path is not specified.')
        exit()


def write_xml():
    dom_tree, root_node = get_xml_root_node()
    property_group_nodes = root_node.getElementsByTagName("PropertyGroup")
    property_group_node = property_group_nodes[0]
    package_name = property_group_node.getElementsByTagName("PackageId")[0].childNodes[0].data
    assembly_name_node = dom_tree.createElement("AssemblyName")
    assembly_name_node_text_value = dom_tree.createTextNode(package_name)
    assembly_name_node.appendChild(assembly_name_node_text_value)
    property_group_node.appendChild(assembly_name_node)

    root_namespace_node = dom_tree.createElement("RootNamespace")
    root_namespace_node_text_value = dom_tree.createTextNode(package_name)
    root_namespace_node.appendChild(root_namespace_node_text_value)
    property_group_node.appendChild(root_namespace_node)

    output_type_node = dom_tree.createElement("OutputType")
    output_type_node_text_value = dom_tree.createTextNode("Library")
    output_type_node.appendChild(output_type_node_text_value)
    property_group_node.appendChild(output_type_node)

    property_group_nodes = root_node.getElementsByTagName("PropertyGroup")
    property_group_node = property_group_nodes[0]
    generate_package_on_build_node = property_group_node.getElementsByTagName("GeneratePackageOnBuild")[0].childNodes[0]
    generate_package_on_build_node.data = 'false'

    with open(csproj_file_path, 'w') as f:
        dom_tree.writexml(f, addindent='\t', newl='\n', encoding='utf-8')
    del_first_line(csproj_file_path)


def del_first_line(file_path):
    for line in fileinput.input(file_path, inplace=1):
        if not fileinput.isfirstline():
            print(line.replace("\n", ""))


if __name__ == '__main__':
    write_xml()
