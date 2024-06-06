import argparse, os
from xml.dom.minidom import parse

parser = argparse.ArgumentParser()
parser.add_argument('--pom_file_path', type=str, default=None)
args = parser.parse_args()
pom_file_path = args.pom_file_path

"""
此脚本应用于修改maven pom.xml文件，可以将jsii生成的pom.xml文件转化成可进行maven发布的pom.xml文件
输入： pom_file_path
"""


def get_xml_root_node():
    if pom_file_path:
        if os.path.exists(pom_file_path):
            dom_tree = parse(pom_file_path)
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
    # write repositories
    repositories_node = dom_tree.createElement("repositories")
    repository_node = dom_tree.createElement("repository")
    repository_id_node = dom_tree.createElement("id")
    repository_id_text_value = dom_tree.createTextNode("publicCentral")
    repository_id_node.appendChild(repository_id_text_value)
    repository_url_node = dom_tree.createElement("url")
    repository_url_text_value = dom_tree.createTextNode("https://repo1.maven.org/maven2/")
    repository_url_node.appendChild(repository_url_text_value)
    repository_name_node = dom_tree.createElement("name")
    repository_name_text_value = dom_tree.createTextNode("repo central")
    repository_name_node.appendChild(repository_name_text_value)
    repository_node.appendChild(repository_id_node)
    repository_node.appendChild(repository_url_node)
    repository_node.appendChild(repository_name_node)
    repositories_node.appendChild(repository_node)
    root_node.appendChild(repositories_node)

    # write distributionManagement
    distribution_management_node = dom_tree.createElement("distributionManagement")
    # write snapshotRepository
    snapshot_repository_node = dom_tree.createElement("snapshotRepository")
    snapshot_repository_id_node = dom_tree.createElement("id")
    snapshot_repository_id_text_value = dom_tree.createTextNode("sonatype-nexus-snapshots")
    snapshot_repository_id_node.appendChild(snapshot_repository_id_text_value)
    snapshot_repository_url_node = dom_tree.createElement("url")
    snapshot_repository_url_text_value = dom_tree.createTextNode(
        "https://oss.sonatype.org/content/repositories/snapshots")
    snapshot_repository_url_node.appendChild(snapshot_repository_url_text_value)
    snapshot_repository_node.appendChild(snapshot_repository_id_node)
    snapshot_repository_node.appendChild(snapshot_repository_url_node)

    distribution_management_repository_node = dom_tree.createElement("repository")
    distribution_management_repository_id_node = dom_tree.createElement("id")
    distribution_management_repository_id_text_value = dom_tree.createTextNode("sonatype-nexus-staging")
    distribution_management_repository_id_node.appendChild(distribution_management_repository_id_text_value)
    distribution_management_repository_url_node = dom_tree.createElement("url")
    distribution_management_repository_url_text_value = dom_tree.createTextNode(
        "https://oss.sonatype.org/service/local/staging/deploy/maven2/")
    distribution_management_repository_url_node.appendChild(distribution_management_repository_url_text_value)
    distribution_management_repository_node.appendChild(distribution_management_repository_id_node)
    distribution_management_repository_node.appendChild(distribution_management_repository_url_node)

    distribution_management_node.appendChild(distribution_management_repository_node)
    distribution_management_node.appendChild(snapshot_repository_node)
    root_node.appendChild(distribution_management_node)

    # write resource
    builds = root_node.getElementsByTagName("build")[0]
    resources_node = dom_tree.createElement("resources")
    resource_node = dom_tree.createElement("resource")
    directory_node = dom_tree.createElement("directory")
    directory_text_value = dom_tree.createTextNode("src/main/java")
    directory_node.appendChild(directory_text_value)
    resource_node.appendChild(directory_node)
    includes_node = dom_tree.createElement("includes")
    include_1_node = dom_tree.createElement("include")
    include_2_node = dom_tree.createElement("include")
    include_1_node_text_value = dom_tree.createTextNode("**/*.tgz")
    include_2_node_text_value = dom_tree.createTextNode("**/*.txt")
    include_1_node.appendChild(include_1_node_text_value)
    include_2_node.appendChild(include_2_node_text_value)
    includes_node.appendChild(include_1_node)
    includes_node.appendChild(include_2_node)
    resource_node.appendChild(includes_node)
    filtering_node = dom_tree.createElement("filtering")
    filtering_node_text_value = dom_tree.createTextNode("false")
    filtering_node.appendChild(filtering_node_text_value)
    resource_node.appendChild(filtering_node)
    resources_node.appendChild(resource_node)
    builds.appendChild(resources_node)

    # write plugin
    plugins_node = root_node.getElementsByTagName("plugins")[0]
    plugin_1_node = dom_tree.createElement("plugin")
    plugin_1_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_1_version_node = dom_tree.createElement("version")
    plugin_1_artifact_id_node_text_value = dom_tree.createTextNode("maven-deploy-plugin")
    plugin_1_version_node_text_value = dom_tree.createTextNode("2.8.1")
    plugin_1_artifact_id_node.appendChild(plugin_1_artifact_id_node_text_value)
    plugin_1_version_node.appendChild(plugin_1_version_node_text_value)
    plugin_1_node.appendChild(plugin_1_artifact_id_node)
    plugin_1_node.appendChild(plugin_1_version_node)

    plugin_2_node = dom_tree.createElement("plugin")
    plugin_2_group_id_node = dom_tree.createElement("groupId")
    plugin_2_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_2_version_node = dom_tree.createElement("version")
    plugin_2_group_id_node_text_value = dom_tree.createTextNode("org.apache.maven.plugins")
    plugin_2_artifact_id_node_text_value = dom_tree.createTextNode("maven-gpg-plugin")
    plugin_2_version_node_text_value = dom_tree.createTextNode("1.6")
    plugin_2_group_id_node.appendChild(plugin_2_group_id_node_text_value)
    plugin_2_artifact_id_node.appendChild(plugin_2_artifact_id_node_text_value)
    plugin_2_version_node.appendChild(plugin_2_version_node_text_value)
    plugin_2_node.appendChild(plugin_2_group_id_node)
    plugin_2_node.appendChild(plugin_2_artifact_id_node)
    plugin_2_node.appendChild(plugin_2_version_node)
    plugin_2_executions_node = dom_tree.createElement("executions")
    plugin_2_execution_node = dom_tree.createElement("execution")
    plugin_2_execution_id_node = dom_tree.createElement("id")
    plugin_2_execution_phase_node = dom_tree.createElement("phase")
    plugin_2_execution_id_node_text_value = dom_tree.createTextNode("sign-artifacts")
    plugin_2_execution_phase_node_text_value = dom_tree.createTextNode("verify")
    plugin_2_execution_id_node.appendChild(plugin_2_execution_id_node_text_value)
    plugin_2_execution_phase_node.appendChild(plugin_2_execution_phase_node_text_value)

    plugin_2_execution_goals_node = dom_tree.createElement("goals")
    plugin_2_execution_goal_node = dom_tree.createElement("goal")
    plugin_2_execution_goal_node_text_value = dom_tree.createTextNode("sign")
    plugin_2_execution_goal_node.appendChild(plugin_2_execution_goal_node_text_value)
    plugin_2_execution_goals_node.appendChild(plugin_2_execution_goal_node)
    plugin_2_execution_node.appendChild(plugin_2_execution_id_node)
    plugin_2_execution_node.appendChild(plugin_2_execution_phase_node)
    plugin_2_execution_node.appendChild(plugin_2_execution_goals_node)
    plugin_2_executions_node.appendChild(plugin_2_execution_node)
    plugin_2_node.appendChild(plugin_2_executions_node)

    plugin_3_node = dom_tree.createElement("plugin")
    plugin_3_group_id_node = dom_tree.createElement("groupId")
    plugin_3_group_id_node_text_value = dom_tree.createTextNode("org.apache.maven.plugins")
    plugin_3_group_id_node.appendChild(plugin_3_group_id_node_text_value)
    plugin_3_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_3_artifact_id_node_text_value = dom_tree.createTextNode("maven-resources-plugin")
    plugin_3_artifact_id_node.appendChild(plugin_3_artifact_id_node_text_value)

    plugin_3_version_node = dom_tree.createElement("version")
    plugin_3_version_node_text_value = dom_tree.createTextNode("3.1.0")
    plugin_3_version_node.appendChild(plugin_3_version_node_text_value)

    plugin_3_configuration_node = dom_tree.createElement("configuration")
    plugin_3_configuration_encoding_node = dom_tree.createElement("encoding")
    plugin_3_configuration_encoding_node_text_value = dom_tree.createTextNode("UTF-8")
    plugin_3_configuration_encoding_node.appendChild(plugin_3_configuration_encoding_node_text_value)
    plugin_3_configuration_node.appendChild(plugin_3_configuration_encoding_node)
    plugin_3_node.appendChild(plugin_3_group_id_node)
    plugin_3_node.appendChild(plugin_3_artifact_id_node)
    plugin_3_node.appendChild(plugin_3_version_node)
    plugin_3_node.appendChild(plugin_3_configuration_node)

    plugin_4_node = dom_tree.createElement("plugin")
    plugin_4_group_id_node = dom_tree.createElement("groupId")
    plugin_4_group_id_node_text_value = dom_tree.createTextNode("org.sonatype.plugins")
    plugin_4_group_id_node.appendChild(plugin_4_group_id_node_text_value)
    plugin_4_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_4_artifact_id_node_text_value = dom_tree.createTextNode("nexus-staging-maven-plugin")
    plugin_4_artifact_id_node.appendChild(plugin_4_artifact_id_node_text_value)
    plugin_4_version_node = dom_tree.createElement("version")
    plugin_4_version_node_text_value = dom_tree.createTextNode("1.6.3")
    plugin_4_version_node.appendChild(plugin_4_version_node_text_value)
    plugin_4_extensions_node = dom_tree.createElement("extensions")
    plugin_4_extensions_node_text_value = dom_tree.createTextNode("true")
    plugin_4_extensions_node.appendChild(plugin_4_extensions_node_text_value)

    plugin_4_configuration_node = dom_tree.createElement("configuration")
    plugin_4_server_id_node = dom_tree.createElement("serverId")
    plugin_4_server_id_node_text_value = dom_tree.createTextNode("sonatype-nexus-staging")
    plugin_4_server_id_node.appendChild(plugin_4_server_id_node_text_value)
    plugin_4_nexus_url_node = dom_tree.createElement("nexusUrl")
    plugin_4_nexus_url_node_text_value = dom_tree.createTextNode("https://oss.sonatype.org/")
    plugin_4_nexus_url_node.appendChild(plugin_4_nexus_url_node_text_value)
    plugin_4_auto_release_after_close_node = dom_tree.createElement("autoReleaseAfterClose")
    plugin_4_auto_release_after_close_node_text_value = dom_tree.createTextNode("true")
    plugin_4_auto_release_after_close_node.appendChild(plugin_4_auto_release_after_close_node_text_value)
    plugin_4_configuration_node.appendChild(plugin_4_server_id_node)
    plugin_4_configuration_node.appendChild(plugin_4_nexus_url_node)
    plugin_4_configuration_node.appendChild(plugin_4_auto_release_after_close_node)
    plugin_4_node.appendChild(plugin_4_group_id_node)
    plugin_4_node.appendChild(plugin_4_artifact_id_node)
    plugin_4_node.appendChild(plugin_4_version_node)
    plugin_4_node.appendChild(plugin_4_extensions_node)
    plugin_4_node.appendChild(plugin_4_configuration_node)

    plugin_5_node = dom_tree.createElement("plugin")
    plugin_5_group_id_node = dom_tree.createElement("groupId")
    plugin_5_group_id_node_text_value = dom_tree.createTextNode("org.codehaus.mojo")
    plugin_5_group_id_node.appendChild(plugin_5_group_id_node_text_value)
    plugin_5_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_5_artifact_id_node_text_value = dom_tree.createTextNode("cobertura-maven-plugin")
    plugin_5_artifact_id_node.appendChild(plugin_5_artifact_id_node_text_value)
    plugin_5_version_node = dom_tree.createElement("version")
    plugin_5_version_node_text_value = dom_tree.createTextNode("2.7")
    plugin_5_version_node.appendChild(plugin_5_version_node_text_value)

    plugin_5_configuration_node = dom_tree.createElement("configuration")
    plugin_5_formats_node = dom_tree.createElement("formats")
    plugin_5_format_1_node = dom_tree.createElement("format")
    plugin_5_format_1_node_text_value = dom_tree.createTextNode("html")
    plugin_5_format_1_node.appendChild(plugin_5_format_1_node_text_value)
    plugin_5_format_2_node = dom_tree.createElement("format")
    plugin_5_format_2_node_text_value = dom_tree.createTextNode("xml")
    plugin_5_format_2_node.appendChild(plugin_5_format_2_node_text_value)
    plugin_5_formats_node.appendChild(plugin_5_format_1_node)
    plugin_5_formats_node.appendChild(plugin_5_format_2_node)
    plugin_5_configuration_node.appendChild(plugin_5_formats_node)
    plugin_5_node.appendChild(plugin_5_group_id_node)
    plugin_5_node.appendChild(plugin_5_artifact_id_node)
    plugin_5_node.appendChild(plugin_5_version_node)
    plugin_5_node.appendChild(plugin_5_configuration_node)

    plugins_node.appendChild(plugin_1_node)
    plugins_node.appendChild(plugin_2_node)
    plugins_node.appendChild(plugin_3_node)
    plugins_node.appendChild(plugin_4_node)
    plugins_node.appendChild(plugin_5_node)

    # write executions and update version
    artifact_id_nodes = root_node.getElementsByTagName("artifactId")
    for artifact_id_node in artifact_id_nodes:
        if artifact_id_node.childNodes[0].data == "maven-compiler-plugin":
            new_plugin_id_node = artifact_id_node.parentNode
            for childNode in new_plugin_id_node.childNodes:
                if childNode.nodeName == "configuration":
                    encoding_node = dom_tree.createElement("encoding")
                    encoding_node_text_value = dom_tree.createTextNode("UTF-8")
                    encoding_node.appendChild(encoding_node_text_value)
                    childNode.appendChild(encoding_node)

        if artifact_id_node.childNodes[0].data == "maven-javadoc-plugin":
            new_plugin_id_node_2 = artifact_id_node.parentNode
            for childNode2 in new_plugin_id_node_2.childNodes:
                if childNode2.nodeName == "configuration":
                    doclint_node = dom_tree.createElement("doclint")
                    doclint_node_text_value = dom_tree.createTextNode("none")
                    doclint_node.appendChild(doclint_node_text_value)
                    childNode2.appendChild(doclint_node)
                    encoding_2_node = dom_tree.createElement("encoding")
                    encoding_2_node_text_value = dom_tree.createTextNode("UTF-8")
                    encoding_2_node.appendChild(encoding_2_node_text_value)
                    childNode2.appendChild(encoding_2_node)
                elif childNode2.nodeName == "executions":
                    new_plugin_id_node_2.removeChild(childNode2)

        if artifact_id_node.childNodes[0].data == "maven-source-plugin":
            new_plugin_id_node_3 = artifact_id_node.parentNode
            for childNode3 in new_plugin_id_node_3.childNodes:
                if childNode3.nodeName == "version":
                    childNode3.firstChild.replaceWholeText("3.2.1")
                    break
    # write properties
    properties_nodes = root_node.getElementsByTagName("properties")
    for property_node in properties_nodes:
        java_version_node = dom_tree.createElement("java.version")
        java_version_node_text_value = dom_tree.createTextNode("1.8")
        java_version_node.appendChild(java_version_node_text_value)
        property_node.appendChild(java_version_node)

        maven_compiler_source_node = dom_tree.createElement("maven.compiler.source")
        maven_compiler_source_node_text_value = dom_tree.createTextNode("1.8")
        maven_compiler_source_node.appendChild(maven_compiler_source_node_text_value)
        property_node.appendChild(maven_compiler_source_node)

        maven_compiler_target_node = dom_tree.createElement("maven.compiler.target")
        maven_compiler_target_node_text_value = dom_tree.createTextNode("1.8")
        maven_compiler_target_node.appendChild(maven_compiler_target_node_text_value)
        property_node.appendChild(maven_compiler_target_node)

    with open(pom_file_path, 'w') as f:
        dom_tree.writexml(f, addindent='\t', newl='\n', encoding='utf-8')


if __name__ == '__main__':
    write_xml()
