'''
## Aliyun ROS SAE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SAE from '@alicloud/ros-cdk-sae';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Application(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.Application",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAE::Application``, which is used to create an application in Serverless App Engine (SAE).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApplication``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f40e4e0dc21b5530d850ac62cc0ec37d92bd5e584281413caabd068c72ee536d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppId: Creating successful application ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f06e3e0f1b9e9b90ed298b41f04c630aec93eacbf1d7c37eb60fc98be8f4f25d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9445dd98fc7a0f533e9125ce8f2a8b09fc5f6549291db3d6f54e46e0d788b2cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ApplicationProps":
        return typing.cast("ApplicationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ApplicationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__527164ef9d598686bac865414b789749dbfa21e48142dbc4573d0d743a45c864)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fec89ca07b2f50d415ce492c2ec1ffeae90e51b05926ac4306707e7599ed5173)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.ApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "cpu": "cpu",
        "memory": "memory",
        "namespace_id": "namespaceId",
        "package_type": "packageType",
        "replicas": "replicas",
        "acr_assume_role_arn": "acrAssumeRoleArn",
        "acr_instance_id": "acrInstanceId",
        "app_description": "appDescription",
        "app_source": "appSource",
        "associate_eip": "associateEip",
        "auto_config": "autoConfig",
        "base_app_id": "baseAppId",
        "command": "command",
        "command_args": "commandArgs",
        "config_map_mount_desc": "configMapMountDesc",
        "custom_host_alias": "customHostAlias",
        "deploy": "deploy",
        "edas_container_version": "edasContainerVersion",
        "enable_ebpf": "enableEbpf",
        "envs": "envs",
        "image_pull_secrets": "imagePullSecrets",
        "image_url": "imageUrl",
        "jar_start_args": "jarStartArgs",
        "jar_start_options": "jarStartOptions",
        "jdk": "jdk",
        "kafka_configs": "kafkaConfigs",
        "liveness": "liveness",
        "micro_registration": "microRegistration",
        "micro_registration_config": "microRegistrationConfig",
        "mount_desc": "mountDesc",
        "mount_host": "mountHost",
        "nas_configs": "nasConfigs",
        "nas_id": "nasId",
        "oss_ak_id": "ossAkId",
        "oss_ak_secret": "ossAkSecret",
        "oss_mount_descs": "ossMountDescs",
        "package_url": "packageUrl",
        "package_version": "packageVersion",
        "php": "php",
        "php_arms_config_location": "phpArmsConfigLocation",
        "php_config": "phpConfig",
        "php_config_location": "phpConfigLocation",
        "post_start": "postStart",
        "pre_stop": "preStop",
        "programming_language": "programmingLanguage",
        "pvtz_discovery_svc": "pvtzDiscoverySvc",
        "python": "python",
        "python_modules": "pythonModules",
        "readiness": "readiness",
        "sae_version": "saeVersion",
        "security_group_id": "securityGroupId",
        "service_tags": "serviceTags",
        "sls_configs": "slsConfigs",
        "tags": "tags",
        "termination_grace_period_seconds": "terminationGracePeriodSeconds",
        "timezone": "timezone",
        "tomcat_config": "tomcatConfig",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "war_start_options": "warStartOptions",
        "web_container": "webContainer",
    },
)
class ApplicationProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cpu: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        memory: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replicas: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        acr_assume_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        associate_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        base_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_map_mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_ebpf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_pull_secrets: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kafka_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        micro_registration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        micro_registration_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_ak_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_ak_secret: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_mount_descs: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php_arms_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        programming_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pvtz_discovery_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        python: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        python_modules: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sae_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_tags: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosApplication.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tomcat_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Application``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application

        :param app_name: Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        :param cpu: Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        :param memory: Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        :param namespace_id: Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter. Namespace can interface to obtain from DescribeNamespaceList.
        :param package_type: Property packageType: Application package type. Support FatJar, War, Image.
        :param replicas: Property replicas: The initial number of instances.
        :param acr_assume_role_arn: Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
        :param acr_instance_id: Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
        :param app_description: Property appDescription: Application description. No more than 1024 characters.
        :param app_source: Property appSource: Application source.
        :param associate_eip: Property associateEip: Whether to bind EIP. The values are explained as follows: - true: Binding. - false: No binding
        :param auto_config: Property autoConfig: Whether to automatically configure the network environment. The values are explained as follows: - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored. - false: SAE manually config the network environment when creating the application.
        :param base_app_id: Property baseAppId: Base application ID.
        :param command: Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        :param command_args: Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        :param config_map_mount_desc: Property configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
        :param custom_host_alias: Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        :param deploy: Property deploy: Whether deployed immediately take effect, the default is false.
        :param edas_container_version: Property edasContainerVersion: EDAS pandora runtime environment used by the application.
        :param enable_ebpf: Property enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows: - true: Enable. - false: Disable.
        :param envs: Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        :param image_pull_secrets: Property imagePullSecrets: Corresponding to the secret dictionary ID.
        :param image_url: Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        :param jar_start_args: Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path" $ JarStartArgs
        :param jar_start_options: Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path" $ JarStartArgs
        :param jdk: Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        :param kafka_configs: Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows: - kafkaEndpoint: The service access address for the Kafka API - kafkaInstanceId: Kafka instance ID - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
        :param liveness: Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        :param micro_registration: Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos. - 1: User-built Nacos. - 2: MSE commercial version of Nacos.
        :param micro_registration_config: Property microRegistrationConfig: Registry configuration information.
        :param mount_desc: Property mountDesc: Mount Description.
        :param mount_host: Property mountHost: nas mount point in the application of vpc.
        :param nas_configs: Property nasConfigs: Configuration to mount the NAS. The values are explained as follows: - mountPath: The container mount path - readOnly: A value of false indicates read and write permission. - nasId: NAS ID - mountDomain: The container mount point address For more information, see DescribeMountTargets. - nasPath: NAS relative file directory
        :param nas_id: Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        :param oss_ak_id: Property ossAkId: AccessKey ID of the OSS.
        :param oss_ak_secret: Property ossAkSecret: AccessKey Secret of the OSS.
        :param oss_mount_descs: Property ossMountDescs: OSS mount description information. The parameters are described as follows: - bucketName: The name of the Bucket - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist. - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created. - readOnly: This specifies whether the container path has read-only permissions for mount directory resources: - true: Read-only permission - false: Read and write permissions
        :param package_url: Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        :param package_version: Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        :param php: Property php: PHP version.
        :param php_arms_config_location: Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
        :param php_config: Property phpConfig: PHP configuration file contents.
        :param php_config_location: Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
        :param post_start: Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
        :param pre_stop: Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
        :param programming_language: Property programmingLanguage: Create the stack language for the application. The values are explained as follows: - java: The Java language - php: PHP language. - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
        :param pvtz_discovery_svc: Property pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows: - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default. - namespaceId: The namespace ID - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect. - enable: Enable K8s Service registration discovery.
        :param python: Property python: Python version. Supports PYTHON 3.9.15
        :param python_modules: Property pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
        :param readiness: Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        :param sae_version: Property saeVersion: SAE version.
        :param security_group_id: Property securityGroupId: Security group ID.
        :param service_tags: Property serviceTags: Service tags.
        :param sls_configs: Property slsConfigs: Log collection configuration file.
        :param tags: Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        :param termination_grace_period_seconds: Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
        :param timezone: Property timezone: Application time zone. Default Asia/Shanghai.
        :param tomcat_config: Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080. - contextPath: The access path, defaults to the root directory "/" - maxThreads: This config the number of connections in the pool; the default is 400. - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1. - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
        :param vpc_id: Property vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        :param v_switch_id: Property vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        :param war_start_options: Property warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
        :param web_container: Property webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e0809ad432939d33626184efbc5fc3baf4368e4c612a52467ac68e941027e8f)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument replicas", value=replicas, expected_type=type_hints["replicas"])
            check_type(argname="argument acr_assume_role_arn", value=acr_assume_role_arn, expected_type=type_hints["acr_assume_role_arn"])
            check_type(argname="argument acr_instance_id", value=acr_instance_id, expected_type=type_hints["acr_instance_id"])
            check_type(argname="argument app_description", value=app_description, expected_type=type_hints["app_description"])
            check_type(argname="argument app_source", value=app_source, expected_type=type_hints["app_source"])
            check_type(argname="argument associate_eip", value=associate_eip, expected_type=type_hints["associate_eip"])
            check_type(argname="argument auto_config", value=auto_config, expected_type=type_hints["auto_config"])
            check_type(argname="argument base_app_id", value=base_app_id, expected_type=type_hints["base_app_id"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument command_args", value=command_args, expected_type=type_hints["command_args"])
            check_type(argname="argument config_map_mount_desc", value=config_map_mount_desc, expected_type=type_hints["config_map_mount_desc"])
            check_type(argname="argument custom_host_alias", value=custom_host_alias, expected_type=type_hints["custom_host_alias"])
            check_type(argname="argument deploy", value=deploy, expected_type=type_hints["deploy"])
            check_type(argname="argument edas_container_version", value=edas_container_version, expected_type=type_hints["edas_container_version"])
            check_type(argname="argument enable_ebpf", value=enable_ebpf, expected_type=type_hints["enable_ebpf"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument image_pull_secrets", value=image_pull_secrets, expected_type=type_hints["image_pull_secrets"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument jar_start_args", value=jar_start_args, expected_type=type_hints["jar_start_args"])
            check_type(argname="argument jar_start_options", value=jar_start_options, expected_type=type_hints["jar_start_options"])
            check_type(argname="argument jdk", value=jdk, expected_type=type_hints["jdk"])
            check_type(argname="argument kafka_configs", value=kafka_configs, expected_type=type_hints["kafka_configs"])
            check_type(argname="argument liveness", value=liveness, expected_type=type_hints["liveness"])
            check_type(argname="argument micro_registration", value=micro_registration, expected_type=type_hints["micro_registration"])
            check_type(argname="argument micro_registration_config", value=micro_registration_config, expected_type=type_hints["micro_registration_config"])
            check_type(argname="argument mount_desc", value=mount_desc, expected_type=type_hints["mount_desc"])
            check_type(argname="argument mount_host", value=mount_host, expected_type=type_hints["mount_host"])
            check_type(argname="argument nas_configs", value=nas_configs, expected_type=type_hints["nas_configs"])
            check_type(argname="argument nas_id", value=nas_id, expected_type=type_hints["nas_id"])
            check_type(argname="argument oss_ak_id", value=oss_ak_id, expected_type=type_hints["oss_ak_id"])
            check_type(argname="argument oss_ak_secret", value=oss_ak_secret, expected_type=type_hints["oss_ak_secret"])
            check_type(argname="argument oss_mount_descs", value=oss_mount_descs, expected_type=type_hints["oss_mount_descs"])
            check_type(argname="argument package_url", value=package_url, expected_type=type_hints["package_url"])
            check_type(argname="argument package_version", value=package_version, expected_type=type_hints["package_version"])
            check_type(argname="argument php", value=php, expected_type=type_hints["php"])
            check_type(argname="argument php_arms_config_location", value=php_arms_config_location, expected_type=type_hints["php_arms_config_location"])
            check_type(argname="argument php_config", value=php_config, expected_type=type_hints["php_config"])
            check_type(argname="argument php_config_location", value=php_config_location, expected_type=type_hints["php_config_location"])
            check_type(argname="argument post_start", value=post_start, expected_type=type_hints["post_start"])
            check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            check_type(argname="argument programming_language", value=programming_language, expected_type=type_hints["programming_language"])
            check_type(argname="argument pvtz_discovery_svc", value=pvtz_discovery_svc, expected_type=type_hints["pvtz_discovery_svc"])
            check_type(argname="argument python", value=python, expected_type=type_hints["python"])
            check_type(argname="argument python_modules", value=python_modules, expected_type=type_hints["python_modules"])
            check_type(argname="argument readiness", value=readiness, expected_type=type_hints["readiness"])
            check_type(argname="argument sae_version", value=sae_version, expected_type=type_hints["sae_version"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_tags", value=service_tags, expected_type=type_hints["service_tags"])
            check_type(argname="argument sls_configs", value=sls_configs, expected_type=type_hints["sls_configs"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument termination_grace_period_seconds", value=termination_grace_period_seconds, expected_type=type_hints["termination_grace_period_seconds"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
            check_type(argname="argument tomcat_config", value=tomcat_config, expected_type=type_hints["tomcat_config"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument war_start_options", value=war_start_options, expected_type=type_hints["war_start_options"])
            check_type(argname="argument web_container", value=web_container, expected_type=type_hints["web_container"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "cpu": cpu,
            "memory": memory,
            "namespace_id": namespace_id,
            "package_type": package_type,
            "replicas": replicas,
        }
        if acr_assume_role_arn is not None:
            self._values["acr_assume_role_arn"] = acr_assume_role_arn
        if acr_instance_id is not None:
            self._values["acr_instance_id"] = acr_instance_id
        if app_description is not None:
            self._values["app_description"] = app_description
        if app_source is not None:
            self._values["app_source"] = app_source
        if associate_eip is not None:
            self._values["associate_eip"] = associate_eip
        if auto_config is not None:
            self._values["auto_config"] = auto_config
        if base_app_id is not None:
            self._values["base_app_id"] = base_app_id
        if command is not None:
            self._values["command"] = command
        if command_args is not None:
            self._values["command_args"] = command_args
        if config_map_mount_desc is not None:
            self._values["config_map_mount_desc"] = config_map_mount_desc
        if custom_host_alias is not None:
            self._values["custom_host_alias"] = custom_host_alias
        if deploy is not None:
            self._values["deploy"] = deploy
        if edas_container_version is not None:
            self._values["edas_container_version"] = edas_container_version
        if enable_ebpf is not None:
            self._values["enable_ebpf"] = enable_ebpf
        if envs is not None:
            self._values["envs"] = envs
        if image_pull_secrets is not None:
            self._values["image_pull_secrets"] = image_pull_secrets
        if image_url is not None:
            self._values["image_url"] = image_url
        if jar_start_args is not None:
            self._values["jar_start_args"] = jar_start_args
        if jar_start_options is not None:
            self._values["jar_start_options"] = jar_start_options
        if jdk is not None:
            self._values["jdk"] = jdk
        if kafka_configs is not None:
            self._values["kafka_configs"] = kafka_configs
        if liveness is not None:
            self._values["liveness"] = liveness
        if micro_registration is not None:
            self._values["micro_registration"] = micro_registration
        if micro_registration_config is not None:
            self._values["micro_registration_config"] = micro_registration_config
        if mount_desc is not None:
            self._values["mount_desc"] = mount_desc
        if mount_host is not None:
            self._values["mount_host"] = mount_host
        if nas_configs is not None:
            self._values["nas_configs"] = nas_configs
        if nas_id is not None:
            self._values["nas_id"] = nas_id
        if oss_ak_id is not None:
            self._values["oss_ak_id"] = oss_ak_id
        if oss_ak_secret is not None:
            self._values["oss_ak_secret"] = oss_ak_secret
        if oss_mount_descs is not None:
            self._values["oss_mount_descs"] = oss_mount_descs
        if package_url is not None:
            self._values["package_url"] = package_url
        if package_version is not None:
            self._values["package_version"] = package_version
        if php is not None:
            self._values["php"] = php
        if php_arms_config_location is not None:
            self._values["php_arms_config_location"] = php_arms_config_location
        if php_config is not None:
            self._values["php_config"] = php_config
        if php_config_location is not None:
            self._values["php_config_location"] = php_config_location
        if post_start is not None:
            self._values["post_start"] = post_start
        if pre_stop is not None:
            self._values["pre_stop"] = pre_stop
        if programming_language is not None:
            self._values["programming_language"] = programming_language
        if pvtz_discovery_svc is not None:
            self._values["pvtz_discovery_svc"] = pvtz_discovery_svc
        if python is not None:
            self._values["python"] = python
        if python_modules is not None:
            self._values["python_modules"] = python_modules
        if readiness is not None:
            self._values["readiness"] = readiness
        if sae_version is not None:
            self._values["sae_version"] = sae_version
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_tags is not None:
            self._values["service_tags"] = service_tags
        if sls_configs is not None:
            self._values["sls_configs"] = sls_configs
        if tags is not None:
            self._values["tags"] = tags
        if termination_grace_period_seconds is not None:
            self._values["termination_grace_period_seconds"] = termination_grace_period_seconds
        if timezone is not None:
            self._values["timezone"] = timezone
        if tomcat_config is not None:
            self._values["tomcat_config"] = tomcat_config
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if war_start_options is not None:
            self._values["war_start_options"] = war_start_options
        if web_container is not None:
            self._values["web_container"] = web_container

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appName: Application Name.

        Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cpu(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.

        Currently only supports fixed specifications instance type.
        '''
        result = self._values.get("cpu")
        assert result is not None, "Required property 'cpu' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def memory(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property memory: Each instance of the required memory, in units of MB, can not be zero.

        Currently only supports fixed specifications instance type.
        '''
        result = self._values.get("memory")
        assert result is not None, "Required property 'memory' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceId: EDAS namespace corresponding to ID.

        Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        Namespace can interface to obtain from DescribeNamespaceList.
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property packageType: Application package type.

        Support FatJar, War, Image.
        '''
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replicas(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replicas: The initial number of instances.'''
        result = self._values.get("replicas")
        assert result is not None, "Required property 'replicas' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acr_assume_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.'''
        result = self._values.get("acr_assume_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acr_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID.

        Required when ImageUrl serves enterprise edition for container images.
        '''
        result = self._values.get("acr_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appDescription: Application description.

        No more than 1024 characters.
        '''
        result = self._values.get("app_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appSource: Application source.'''
        result = self._values.get("app_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def associate_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property associateEip: Whether to bind EIP.

        The values are explained as follows:

        - true: Binding.
        - false: No binding
        '''
        result = self._values.get("associate_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoConfig: Whether to automatically configure the network environment.

        The values are explained as follows:

        - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
        - false: SAE manually config the network environment when creating the application.
        '''
        result = self._values.get("auto_config")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def base_app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property baseAppId: Base application ID.'''
        result = self._values.get("base_app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def command(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property command: Mirroring the start command.

        The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        '''
        result = self._values.get("command")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def command_args(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commandArgs: Mirroring the start command parameters.

        Parameters required for the start-command. For example: [ "1d"]
        '''
        result = self._values.get("command_args")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_map_mount_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configMapMountDesc: ConfigMap mount description.

        Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
        '''
        result = self._values.get("config_map_mount_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def custom_host_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property customHostAlias: Custom mapping host vessel.

        For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        '''
        result = self._values.get("custom_host_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deploy: Whether deployed immediately take effect, the default is false.'''
        result = self._values.get("deploy")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edas_container_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property edasContainerVersion: EDAS pandora runtime environment used by the application.'''
        result = self._values.get("edas_container_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_ebpf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableEbpf: Whether to enable EBPF.

        Enable application monitoring for non-Java applications. The values are explained as follows:

        - true: Enable.
        - false: Disable.
        '''
        result = self._values.get("enable_ebpf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property envs: Container environment variable parameters.

        For example: [{ "name": "envtmp", "value": "0"}]
        '''
        result = self._values.get("envs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_pull_secrets(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imagePullSecrets: Corresponding to the secret dictionary ID.'''
        result = self._values.get("image_pull_secrets")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageUrl: Mirroring address.

        Image only type of application can be configured to mirror address.
        '''
        result = self._values.get("image_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def jar_start_args(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jarStartArgs: Jar package startup application parameters.

        Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        '''
        result = self._values.get("jar_start_args")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def jar_start_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jarStartOptions: Jar start the application package option.

        Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        '''
        result = self._values.get("jar_start_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def jdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jdk: Deployment of JDK version of the package depends on.

        Mirroring not supported.
        '''
        result = self._values.get("jdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kafka_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kafkaConfigs: Logs are ingested to Kafka configuration summary information.

        The values are explained as follows:

        - kafkaEndpoint: The service access address for the Kafka API
        - kafkaInstanceId: Kafka instance ID
        - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
        '''
        result = self._values.get("kafka_configs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property liveness: Container health check, health check fails container will be killed and recovery.

        Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        '''
        result = self._values.get("liveness")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def micro_registration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos.

        - 1: User-built Nacos.
        - 2: MSE commercial version of Nacos.
        '''
        result = self._values.get("micro_registration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def micro_registration_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property microRegistrationConfig: Registry configuration information.'''
        result = self._values.get("micro_registration_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mount_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mountDesc: Mount Description.'''
        result = self._values.get("mount_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mount_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mountHost: nas mount point in the application of vpc.'''
        result = self._values.get("mount_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nasConfigs: Configuration to mount the NAS.

        The values are explained as follows:

        - mountPath: The container mount path
        - readOnly: A value of false indicates read and write permission.
        - nasId: NAS ID
        - mountDomain: The container mount point address For more information, see DescribeMountTargets.
        - nasPath: NAS relative file directory
        '''
        result = self._values.get("nas_configs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nasId: Mount the NAS ID, you must be in the same region and cluster.

        It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        '''
        result = self._values.get("nas_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_ak_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossAkId: AccessKey ID of the OSS.'''
        result = self._values.get("oss_ak_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_ak_secret(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossAkSecret: AccessKey Secret of the OSS.'''
        result = self._values.get("oss_ak_secret")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_mount_descs(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossMountDescs: OSS mount description information.

        The parameters are described as follows:

        - bucketName: The name of the Bucket
        - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
        - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
        - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:

          - true: Read-only permission
          - false: Read and write permissions
        '''
        result = self._values.get("oss_mount_descs")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def package_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property packageUrl: Deployment packages address.

        Only FatJar War or the type of application can be configured to deploy packet address.
        '''
        result = self._values.get("package_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def package_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property packageVersion: The version number of the deployed package, War FatJar type required.

        Please customize it meaning.
        '''
        result = self._values.get("package_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property php: PHP version.'''
        result = self._values.get("php")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php_arms_config_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path.

        You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
        '''
        result = self._values.get("php_arms_config_location")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phpConfig: PHP configuration file contents.'''
        result = self._values.get("php_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php_config_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.'''
        result = self._values.get("php_config_location")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_start(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.'''
        result = self._values.get("post_start")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pre_stop(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.'''
        result = self._values.get("pre_stop")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def programming_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property programmingLanguage: Create the stack language for the application.

        The values are explained as follows:

        - java: The Java language
        - php: PHP language.
        - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
        '''
        result = self._values.get("programming_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pvtz_discovery_svc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pvtzDiscoverySvc: Enable K8s Service registration discovery.

        The values are explained as follows:

        - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
        - namespaceId: The namespace ID
        - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
        - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
        - enable: Enable K8s Service registration discovery.
        '''
        result = self._values.get("pvtz_discovery_svc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def python(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property python: Python version.

        Supports PYTHON 3.9.15
        '''
        result = self._values.get("python")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def python_modules(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pythonModules: Install custom module dependencies.

        The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
        '''
        result = self._values.get("python_modules")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.

        Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        '''
        result = self._values.get("readiness")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sae_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property saeVersion: SAE version.'''
        result = self._values.get("sae_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Security group ID.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_tags(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceTags: Service tags.'''
        result = self._values.get("service_tags")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsConfigs: Log collection configuration file.'''
        result = self._values.get("sls_configs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosApplication.TagsProperty"]]:
        '''Property tags: Tags to attach to application.

        Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosApplication.TagsProperty"]], result)

    @builtins.property
    def termination_grace_period_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds.

        The value ranges from 1 to 300.
        '''
        result = self._values.get("termination_grace_period_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timezone: Application time zone.

        Default Asia/Shanghai.
        '''
        result = self._values.get("timezone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tomcat_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024.

        If not configured, it defaults to 8080.

        - contextPath: The access path, defaults to the root directory "/"
        - maxThreads: This config the number of connections in the pool; the default is 400.
        - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
        - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
        '''
        result = self._values.get("tomcat_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: EDAS namespace corresponding VPC.

        In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: Application examples where the elastic card virtual switch.

        The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def war_start_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property warStartOptions: War Start the application package option.

        Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ @" start
        '''
        result = self._values.get("war_start_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def web_container(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property webContainer: Tomcat deployment of the package depends on the version.

        Mirroring not supported.
        '''
        result = self._values.get("web_container")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ConfigMap(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.ConfigMap",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAE::ConfigMap``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConfigMap``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ConfigMapProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__599f71120c58974e9fef15e102864ade4d3543a0686ccd8ca8a16d0a7063bc2b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigMapId")
    def attr_config_map_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConfigMapId: The ID of the config map.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigMapId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NamespaceId: The ID of the namespace to which this config map instance belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__971d1edaf0161f246ed921c271502d96a4892756a66083532bc5a5d4ecdc674b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06fd1152453cbb2816c1e43f9e9466a30e6c83bc3eed26599728d96a211a0fc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ConfigMapProps":
        return typing.cast("ConfigMapProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ConfigMapProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__690b684e8ff267f02b8cb2da9131caf9e63b58530b899a7ff74ce04f196cbcc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6549c4276b1f5d1968f3ba9ec3984399cce1257c107c92eecbb69617a852b1cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.ConfigMapProps",
    jsii_struct_bases=[],
    name_mapping={
        "data": "data",
        "name": "name",
        "namespace_id": "namespaceId",
        "description": "description",
    },
)
class ConfigMapProps:
    def __init__(
        self,
        *,
        data: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ConfigMap``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap

        :param data: Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items.
        :param name: Property name: The name of the config map.
        :param namespace_id: Property namespaceId: The ID of the namespace to which this config map instance belongs.
        :param description: Property description: Describe information, do not enter the space without more than 255 characters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a982ffc5ee0ee15ea84e0dc72a28fac510d5818431b3d40cc2db1b7304ba0fa)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data": data,
            "name": name,
            "namespace_id": namespace_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def data(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items.'''
        result = self._values.get("data")
        assert result is not None, "Required property 'data' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the config map.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceId: The ID of the namespace to which this config map instance belongs.'''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Describe information, do not enter the space without more than 255 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConfigMapProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ingress(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.Ingress",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAE::Ingress``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIngress``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IngressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__550c078862ef7722a66c077c5d6894db50548ab69a5cebff47cd7d63b308f1ce)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIngressId")
    def attr_ingress_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IngressId: The ID of the routing rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIngressId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa3a9d1b7bf01d41abea539ee4fb121040e8042669463731002ed78ac6fa2879)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__219712cc80ea0ec3e268837d7b760ac3c8bda722d36fd83edcefd7b294db09b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "IngressProps":
        return typing.cast("IngressProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "IngressProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__310680be736e53e41fccf36588c308636ea14b75db9739a009f8ccdb079ee126)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__248704668e4cd7f5b89e56a43fb65937b7e8e9ff78b1036b74b682c6527e5224)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.IngressProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_rule": "defaultRule",
        "description": "description",
        "listener_port": "listenerPort",
        "namespace_id": "namespaceId",
        "rules": "rules",
        "slb_id": "slbId",
        "cert_id": "certId",
        "cert_ids": "certIds",
        "listener_protocol": "listenerProtocol",
        "load_balance_type": "loadBalanceType",
    },
)
class IngressProps:
    def __init__(
        self,
        *,
        default_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIngress.DefaultRuleProperty", typing.Dict[builtins.str, typing.Any]]],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIngress.RulesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        slb_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Ingress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress

        :param default_rule: Property defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
        :param description: Property description: The name of the routing rule.
        :param listener_port: Property listenerPort: The listener port of the SLB instance. You must specify a vacant port.
        :param namespace_id: Property namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
        :param rules: Property rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
        :param slb_id: Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
        :param cert_id: Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance. If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
        :param cert_ids: Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
        :param listener_protocol: Property listenerProtocol: The protocol that is used to forward requests.
        :param load_balance_type: Property loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78c7a215c4ffcc0dafaf070f7b3f9451e761c975acd841aebbc574b25a350a15)
            check_type(argname="argument default_rule", value=default_rule, expected_type=type_hints["default_rule"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
            check_type(argname="argument slb_id", value=slb_id, expected_type=type_hints["slb_id"])
            check_type(argname="argument cert_id", value=cert_id, expected_type=type_hints["cert_id"])
            check_type(argname="argument cert_ids", value=cert_ids, expected_type=type_hints["cert_ids"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument load_balance_type", value=load_balance_type, expected_type=type_hints["load_balance_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_rule": default_rule,
            "description": description,
            "listener_port": listener_port,
            "namespace_id": namespace_id,
            "rules": rules,
            "slb_id": slb_id,
        }
        if cert_id is not None:
            self._values["cert_id"] = cert_id
        if cert_ids is not None:
            self._values["cert_ids"] = cert_ids
        if listener_protocol is not None:
            self._values["listener_protocol"] = listener_protocol
        if load_balance_type is not None:
            self._values["load_balance_type"] = load_balance_type

    @builtins.property
    def default_rule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.DefaultRuleProperty"]:
        '''Property defaultRule: The default forwarding rule.

        You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
        '''
        result = self._values.get("default_rule")
        assert result is not None, "Required property 'default_rule' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.DefaultRuleProperty"], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: The name of the routing rule.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The listener port of the SLB instance.

        You must specify a vacant port.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceId: The ID of the namespace to which the application belongs.

        You can specify only one namespace ID each time you call this operation.
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.RulesProperty"]]]:
        '''Property rules: The forwarding rules.

        You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
        '''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.RulesProperty"]]], result)

    @builtins.property
    def slb_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.'''
        result = self._values.get("slb_id")
        assert result is not None, "Required property 'slb_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.

        If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
        '''
        result = self._values.get("cert_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.'''
        result = self._values.get("cert_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property listenerProtocol: The protocol that is used to forward requests.'''
        result = self._values.get("listener_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalanceType: The type of the SLB instance based on the processing capabilities.

        The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
        '''
        result = self._values.get("load_balance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IngressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.Namespace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAE::Namespace``, which is used to create a Namespace.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNamespace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3f5a3b3a5bb50b41c8347823790f2a6e0c342121b76c178ab306a6124c6ed0d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NamespaceId: Namespace ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a1f29bb619f376c9eeef68a4a8c525c4d8be9e0e7367c2e76e048b6926497ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fe80bcc2206a7ceedec13450dd8ae2f3fb0dee433124fa8ae8e2c6b959d29d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "NamespaceProps":
        return typing.cast("NamespaceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "NamespaceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebf401adfd1681bc7e58f39a4becf8b8cc38961c44429a112fd1bfd1275cc997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44ab3a3b81981df71873f7c9bb4447b341512247eb149f6c1ccb603ec0e9c322)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace_id": "namespaceId",
        "namespace_name": "namespaceName",
        "namespace_description": "namespaceDescription",
    },
)
class NamespaceProps:
    def __init__(
        self,
        *,
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Namespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace

        :param namespace_id: Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        :param namespace_name: Property namespaceName: Namespace name.
        :param namespace_description: Property namespaceDescription: Namespace description.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b485e9afeb6d7962b252f0119e24ac9d51e6da5f0f3c36903b5cc97feb5113d)
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument namespace_description", value=namespace_description, expected_type=type_hints["namespace_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace_id": namespace_id,
            "namespace_name": namespace_name,
        }
        if namespace_description is not None:
            self._values["namespace_description"] = namespace_description

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceId: Namespace ID.

        Format: "regionId:logicalId" or "logicalId"
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceName: Namespace name.'''
        result = self._values.get("namespace_name")
        assert result is not None, "Required property 'namespace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceDescription: Namespace description.'''
        result = self._values.get("namespace_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplication(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosApplication",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAE::Application``, which is used to create an application in Serverless App Engine (SAE).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Application`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c1ab3203db4f9a1da714c700215a6c337b7f1ad1132fd0ca6890604cd6bf929)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a922c8161e8f9e49f5d63e2ea3fe9a698c4aa80ad6ac78974a209b4befb2c66d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppId: Creating successful application ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChangeOrderId: Return to release a single ID, used to query task execution status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3d86995c21c86a4debd788a70ab20c9ff77940b1057cffbc078bd675f9dffc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="cpu")
    def cpu(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cpu"))

    @cpu.setter
    def cpu(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9afce2aab31020fd3125cb0cdff507b235b953c0a4bdec465ef92c5b2664d8e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpu", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b971010065f6dccc0c659884efcdb0bdf98bd84080efaa6757d1a9442fe06107)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="memory")
    def memory(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "memory"))

    @memory.setter
    def memory(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__274f287b31834db9d901486785f88fea8bf061446a631a8704dcec2d515be9e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memory", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        Namespace can interface to obtain from DescribeNamespaceList.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d90690996fe24527ef0cc5e3d17bec3ea30242370a4877edabede7fbeb8d6216)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="packageType")
    def package_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: packageType: Application package type. Support FatJar, War, Image.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "packageType"))

    @package_type.setter
    def package_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4d49c765eb959bf619695505932285ece77e895292471016264d3ecbfed81be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "packageType", value)

    @builtins.property
    @jsii.member(jsii_name="replicas")
    def replicas(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicas: The initial number of instances.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replicas"))

    @replicas.setter
    def replicas(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b5a879d6eed27264cc1173cef1c78008345198d048be53c18aab4f07b513a14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicas", value)

    @builtins.property
    @jsii.member(jsii_name="acrAssumeRoleArn")
    def acr_assume_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "acrAssumeRoleArn"))

    @acr_assume_role_arn.setter
    def acr_assume_role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dde13cd5b17f0e35505ec06b7039a782460f1d293e683eef323adcc06a35c536)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acrAssumeRoleArn", value)

    @builtins.property
    @jsii.member(jsii_name="acrInstanceId")
    def acr_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "acrInstanceId"))

    @acr_instance_id.setter
    def acr_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc100902c22b5b97f5dcda188d8b26ab5e7a14b152187788ac9812961b9ac540)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acrInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="appDescription")
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appDescription: Application description. No more than 1024 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appDescription"))

    @app_description.setter
    def app_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44b73e6612f1a6319f73a995f8bffb83f1292f1b18c622bd85b0038448d726a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appDescription", value)

    @builtins.property
    @jsii.member(jsii_name="appSource")
    def app_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appSource: Application source.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appSource"))

    @app_source.setter
    def app_source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4f8969278be8e57d64d0d0355472b9bd7d35fd974c5d9f39cfb1ca63b2b8e9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appSource", value)

    @builtins.property
    @jsii.member(jsii_name="associateEip")
    def associate_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        associateEip: Whether to bind EIP. The values are explained as follows:

        - true: Binding.
        - false: No binding
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "associateEip"))

    @associate_eip.setter
    def associate_eip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ec717e40d8b9b59b2c1b242a1e9a2c4506bd197c405a0056b69fa45647f580a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "associateEip", value)

    @builtins.property
    @jsii.member(jsii_name="autoConfig")
    def auto_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoConfig: Whether to automatically configure the network environment. The values are explained as follows:

        - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
        - false: SAE manually config the network environment when creating the application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoConfig"))

    @auto_config.setter
    def auto_config(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1b637feab4a1885d867b6ce992da8fd76634dba21520de2c558c08aad305fa2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoConfig", value)

    @builtins.property
    @jsii.member(jsii_name="baseAppId")
    def base_app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: baseAppId: Base application ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "baseAppId"))

    @base_app_id.setter
    def base_app_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eecd8ba2e4211e5878ba071745091ee63868c6749696eeaf37f4406dd680d4f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "baseAppId", value)

    @builtins.property
    @jsii.member(jsii_name="command")
    def command(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "command"))

    @command.setter
    def command(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b8e1b11b60d6cc7af8a85cfef24dc3d3b27f375961b4737363217d017fa7225)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "command", value)

    @builtins.property
    @jsii.member(jsii_name="commandArgs")
    def command_args(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commandArgs"))

    @command_args.setter
    def command_args(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fab9baebb3937b437ab5c1b1b8a764c0b58296ff1fdf1162be8e957bab66e5d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commandArgs", value)

    @builtins.property
    @jsii.member(jsii_name="configMapMountDesc")
    def config_map_mount_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configMapMountDesc"))

    @config_map_mount_desc.setter
    def config_map_mount_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8484639b906a40077b00bbc9d221fede4457509370292c11167f34968e44af1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configMapMountDesc", value)

    @builtins.property
    @jsii.member(jsii_name="customHostAlias")
    def custom_host_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "customHostAlias"))

    @custom_host_alias.setter
    def custom_host_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69e502b7f583c59139da6fefa7fd3c4e4edcc34a0693d69164d3f9097b277e17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customHostAlias", value)

    @builtins.property
    @jsii.member(jsii_name="deploy")
    def deploy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploy: Whether deployed immediately take effect, the default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deploy"))

    @deploy.setter
    def deploy(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62a56b828b0775c64b0f6205cee85421e514d707779c40ef901f72f3d872e7b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deploy", value)

    @builtins.property
    @jsii.member(jsii_name="edasContainerVersion")
    def edas_container_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edasContainerVersion: EDAS pandora runtime environment used by the application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "edasContainerVersion"))

    @edas_container_version.setter
    def edas_container_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26ff260790e5e70b09f4a667e34338ab6f9342d45a018a3f4164c386e93d2b5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "edasContainerVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableEbpf")
    def enable_ebpf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:

        - true: Enable.
        - false: Disable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableEbpf"))

    @enable_ebpf.setter
    def enable_ebpf(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27970a4a74efa79f1a5ec76e13cb6de80660f1fd80e2f800665801812b82045d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableEbpf", value)

    @builtins.property
    @jsii.member(jsii_name="envs")
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "envs"))

    @envs.setter
    def envs(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9829cc7d852a42250c2224cfc57ad1eb6ab6922065482e8945df14694a0282a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envs", value)

    @builtins.property
    @jsii.member(jsii_name="imagePullSecrets")
    def image_pull_secrets(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imagePullSecrets: Corresponding to the secret dictionary ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imagePullSecrets"))

    @image_pull_secrets.setter
    def image_pull_secrets(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a70e3366d9744237733bdd68f3edff2dd375e7903a3dfb25c8dc8ef685a71b19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imagePullSecrets", value)

    @builtins.property
    @jsii.member(jsii_name="imageUrl")
    def image_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageUrl"))

    @image_url.setter
    def image_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4331d88d7f21128d9cf6abc3223a97fa1ada83796ff36125dfbc693314b49f88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageUrl", value)

    @builtins.property
    @jsii.member(jsii_name="jarStartArgs")
    def jar_start_args(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jarStartArgs"))

    @jar_start_args.setter
    def jar_start_args(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca61b554fb34e2e904e8d1ae9f2d261d9d93a916fce703176cb272d1e40edb4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jarStartArgs", value)

    @builtins.property
    @jsii.member(jsii_name="jarStartOptions")
    def jar_start_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jarStartOptions"))

    @jar_start_options.setter
    def jar_start_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69856ed5fe95b9e615b6a9c413b7061af1bce763a24ff55d35e907d1a91f3d89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jarStartOptions", value)

    @builtins.property
    @jsii.member(jsii_name="jdk")
    def jdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jdk"))

    @jdk.setter
    def jdk(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07f3d362b7becba32d414f1cf3c251d8953afdd1698a6ae4eb50ff3bfba66b1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jdk", value)

    @builtins.property
    @jsii.member(jsii_name="kafkaConfigs")
    def kafka_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:

        - kafkaEndpoint: The service access address for the Kafka API
        - kafkaInstanceId: Kafka instance ID
        - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kafkaConfigs"))

    @kafka_configs.setter
    def kafka_configs(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7bff327bd2ba20b73e47959a5e6ae2853139c8dbf780426c64c6fd9db1a6f60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kafkaConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="liveness")
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "liveness"))

    @liveness.setter
    def liveness(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__183d37776b468b778ce55cf09edebe71e639b56fc711fc9e89a1870b63f3c783)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "liveness", value)

    @builtins.property
    @jsii.member(jsii_name="microRegistration")
    def micro_registration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        microRegistration: Select the Nacos registry with the following values:

        - 0: SAE built-in Nacos.
        - 1: User-built Nacos.
        - 2: MSE commercial version of Nacos.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "microRegistration"))

    @micro_registration.setter
    def micro_registration(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce0a001cfbf56656cc4404b7fd29214c06aa2336e6d050b26321c1650b107586)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "microRegistration", value)

    @builtins.property
    @jsii.member(jsii_name="microRegistrationConfig")
    def micro_registration_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: microRegistrationConfig: Registry configuration information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "microRegistrationConfig"))

    @micro_registration_config.setter
    def micro_registration_config(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e1fec0baf2ac194deb8576043d429f26d1b4ea2217319d6a34ba3b3ef47f45e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "microRegistrationConfig", value)

    @builtins.property
    @jsii.member(jsii_name="mountDesc")
    def mount_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mountDesc: Mount Description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mountDesc"))

    @mount_desc.setter
    def mount_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__494b0fdbe0e3a07f261ef76829a1081e86225f96f622ccf1b796724d4720a42b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mountDesc", value)

    @builtins.property
    @jsii.member(jsii_name="mountHost")
    def mount_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mountHost: nas mount point in the application of vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mountHost"))

    @mount_host.setter
    def mount_host(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4258555e4d3c8274e21366579b9af5f2eb31ecdcd1a8c036a48f0aa25fd8ce86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mountHost", value)

    @builtins.property
    @jsii.member(jsii_name="nasConfigs")
    def nas_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nasConfigs: Configuration to mount the NAS. The values are explained as follows:

        - mountPath: The container mount path
        - readOnly: A value of false indicates read and write permission.
        - nasId: NAS ID
        - mountDomain: The container mount point address For more information, see DescribeMountTargets.
        - nasPath: NAS relative file directory
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nasConfigs"))

    @nas_configs.setter
    def nas_configs(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce453392f6f8867d550d1e12e6572de39145f8552b9477730577858eb1529ed0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nasConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="nasId")
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nasId"))

    @nas_id.setter
    def nas_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1c94c35d79244abf1289c00f0f892cae5b6a984884304a1067250ad2de01c74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nasId", value)

    @builtins.property
    @jsii.member(jsii_name="ossAkId")
    def oss_ak_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossAkId: AccessKey ID of the OSS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossAkId"))

    @oss_ak_id.setter
    def oss_ak_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0913c338151d1766f8e55a5adbcb74ed08bb6e13b93d5527cb53430d4a710380)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossAkId", value)

    @builtins.property
    @jsii.member(jsii_name="ossAkSecret")
    def oss_ak_secret(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossAkSecret: AccessKey Secret of the OSS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossAkSecret"))

    @oss_ak_secret.setter
    def oss_ak_secret(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efd8e2ff4a69d185f56029a97e03a7e204606a2ec016ba244c49400d66e5f732)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossAkSecret", value)

    @builtins.property
    @jsii.member(jsii_name="ossMountDescs")
    def oss_mount_descs(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ossMountDescs: OSS mount description information. The parameters are described as follows:

        - bucketName: The name of the Bucket
        - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
        - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
        - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
        - true: Read-only permission
        - false: Read and write permissions
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossMountDescs"))

    @oss_mount_descs.setter
    def oss_mount_descs(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27923362777ae0998ddad4272919634eae9a24725a53aa10a373bfef93c1593b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossMountDescs", value)

    @builtins.property
    @jsii.member(jsii_name="packageUrl")
    def package_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "packageUrl"))

    @package_url.setter
    def package_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78b4538b42f95387212d94c9eed3d073f6254005b3813d96df5ff2e33fc0896a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "packageUrl", value)

    @builtins.property
    @jsii.member(jsii_name="packageVersion")
    def package_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "packageVersion"))

    @package_version.setter
    def package_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5faf2cd874e6003daab00c1012b214add97a867395d90d160b7fa5fddb19498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "packageVersion", value)

    @builtins.property
    @jsii.member(jsii_name="php")
    def php(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: php: PHP version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "php"))

    @php.setter
    def php(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f78c45e8ebbfe63c14cb6542222b63fa1bedbec7d0151e3982690d6a23a8df2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "php", value)

    @builtins.property
    @jsii.member(jsii_name="phpArmsConfigLocation")
    def php_arms_config_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phpArmsConfigLocation"))

    @php_arms_config_location.setter
    def php_arms_config_location(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__732a68452bdebd96f41a546dead575be4c81d5a85e96e8a4132f906fc2f3e906)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phpArmsConfigLocation", value)

    @builtins.property
    @jsii.member(jsii_name="phpConfig")
    def php_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phpConfig: PHP configuration file contents.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phpConfig"))

    @php_config.setter
    def php_config(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f37a4e77a44fe386c1478fd5c4872d770fe15e8649a82038055ec7111db0cf5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phpConfig", value)

    @builtins.property
    @jsii.member(jsii_name="phpConfigLocation")
    def php_config_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phpConfigLocation"))

    @php_config_location.setter
    def php_config_location(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__823783e1dbd062eebf14a0566a6feb21da055cc6faacb3ab0f1f4a51b179bace)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phpConfigLocation", value)

    @builtins.property
    @jsii.member(jsii_name="postStart")
    def post_start(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "postStart"))

    @post_start.setter
    def post_start(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45b49596d8ec100f2b41594fa583ec9314058196b1948be7ec5ed8318565799b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postStart", value)

    @builtins.property
    @jsii.member(jsii_name="preStop")
    def pre_stop(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preStop"))

    @pre_stop.setter
    def pre_stop(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc9620a59954baf6fc324c7bf059d32303aa5e281fcfbac9426df0da86701564)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preStop", value)

    @builtins.property
    @jsii.member(jsii_name="programmingLanguage")
    def programming_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        programmingLanguage: Create the stack language for the application. The values are explained as follows:

        - java: The Java language
        - php: PHP language.
        - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "programmingLanguage"))

    @programming_language.setter
    def programming_language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a6f18f591e316084d44673f3538ee953ae85c47e6e8a25fd26a713ed5152b70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "programmingLanguage", value)

    @builtins.property
    @jsii.member(jsii_name="pvtzDiscoverySvc")
    def pvtz_discovery_svc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:

        - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
        - namespaceId: The namespace ID
        - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
        - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
        - enable: Enable K8s Service registration discovery.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pvtzDiscoverySvc"))

    @pvtz_discovery_svc.setter
    def pvtz_discovery_svc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be55bf3f8885cda433665f53b7bdf546b654ba956cdc343451a936bd4d3bd1bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pvtzDiscoverySvc", value)

    @builtins.property
    @jsii.member(jsii_name="python")
    def python(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: python: Python version. Supports PYTHON 3.9.15
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "python"))

    @python.setter
    def python(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca743f6c0046c942a2d545f1e647e790b3e354f02e508e4a9a9d982a5fe1e73c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "python", value)

    @builtins.property
    @jsii.member(jsii_name="pythonModules")
    def python_modules(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pythonModules"))

    @python_modules.setter
    def python_modules(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04dd73ddf5398926e9f685a70e60c6c80b1e5cd2ab5396e05cd20a9cb8201ca8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pythonModules", value)

    @builtins.property
    @jsii.member(jsii_name="readiness")
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "readiness"))

    @readiness.setter
    def readiness(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__287eea9772792ae58a8e2a137164b8b244ac6bff880bafb14c8d34a5a4f8a818)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "readiness", value)

    @builtins.property
    @jsii.member(jsii_name="saeVersion")
    def sae_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: saeVersion: SAE version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "saeVersion"))

    @sae_version.setter
    def sae_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b280b49d2933215a9adb000fd561b18e09920f5784ef220019db5e18cd732044)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "saeVersion", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af32b8eea2efa3cfa4daba653a2801c5c8ac4a9bec4912c342c2919a3dc67778)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceTags")
    def service_tags(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceTags: Service tags.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceTags"))

    @service_tags.setter
    def service_tags(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3462ebe8d4bb9912ce6ecf5c0c77b1096bf4eec3d4c396e4447b27d39a141e1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceTags", value)

    @builtins.property
    @jsii.member(jsii_name="slsConfigs")
    def sls_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsConfigs: Log collection configuration file
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsConfigs"))

    @sls_configs.setter
    def sls_configs(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__547dca69a5f43e2a98f326603afd6517f5fc6b40c369b012b2ce73786332afd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosApplication.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosApplication.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosApplication.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__441091f3eb212761c411129f18585fc21940b52552609093eeaf031ee33ec42b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="terminationGracePeriodSeconds")
    def termination_grace_period_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "terminationGracePeriodSeconds"))

    @termination_grace_period_seconds.setter
    def termination_grace_period_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5c680bbe532d83d0323816504095ecdc6ccd712dc39197de8b78819e08be705)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "terminationGracePeriodSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="timezone")
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: Application time zone. Default Asia/Shanghai.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timezone"))

    @timezone.setter
    def timezone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd51df4a485ca02763e035d9ff22a252dce4e3eef02bf1b218f8c06148846b57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timezone", value)

    @builtins.property
    @jsii.member(jsii_name="tomcatConfig")
    def tomcat_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:

        - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
        - contextPath: The access path, defaults to the root directory "/"
        - maxThreads: This config the number of connections in the pool; the default is 400.
        - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
        - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tomcatConfig"))

    @tomcat_config.setter
    def tomcat_config(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11a0accf0f9769ffeaba67e14ccf3fd4438bfbaa470cf761dd8518503503b46a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tomcatConfig", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7e0d8213ad19f8767dfb51bf368df178dd50ebf50c25d0583e5971d5e4e3d1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40b0affc3a4ba9751a84d57fd38c49c16985270cabf93b655fee98c18b0fbe55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="warStartOptions")
    def war_start_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :: " start
        :Property: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "warStartOptions"))

    @war_start_options.setter
    def war_start_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e4d87811349da12553158b6936d1f01163c17d41bf7cf650d402071f84251ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "warStartOptions", value)

    @builtins.property
    @jsii.member(jsii_name="webContainer")
    def web_container(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "webContainer"))

    @web_container.setter
    def web_container(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__431185569ef7168590bf23fc2ef060b720247d494123b4f17ec46951c093a3e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webContainer", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sae.RosApplication.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e69f60863b35c099eb075f4bc11f90e1940104113f5c268720a2d2fb1ccd7a76)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.RosApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "cpu": "cpu",
        "memory": "memory",
        "namespace_id": "namespaceId",
        "package_type": "packageType",
        "replicas": "replicas",
        "acr_assume_role_arn": "acrAssumeRoleArn",
        "acr_instance_id": "acrInstanceId",
        "app_description": "appDescription",
        "app_source": "appSource",
        "associate_eip": "associateEip",
        "auto_config": "autoConfig",
        "base_app_id": "baseAppId",
        "command": "command",
        "command_args": "commandArgs",
        "config_map_mount_desc": "configMapMountDesc",
        "custom_host_alias": "customHostAlias",
        "deploy": "deploy",
        "edas_container_version": "edasContainerVersion",
        "enable_ebpf": "enableEbpf",
        "envs": "envs",
        "image_pull_secrets": "imagePullSecrets",
        "image_url": "imageUrl",
        "jar_start_args": "jarStartArgs",
        "jar_start_options": "jarStartOptions",
        "jdk": "jdk",
        "kafka_configs": "kafkaConfigs",
        "liveness": "liveness",
        "micro_registration": "microRegistration",
        "micro_registration_config": "microRegistrationConfig",
        "mount_desc": "mountDesc",
        "mount_host": "mountHost",
        "nas_configs": "nasConfigs",
        "nas_id": "nasId",
        "oss_ak_id": "ossAkId",
        "oss_ak_secret": "ossAkSecret",
        "oss_mount_descs": "ossMountDescs",
        "package_url": "packageUrl",
        "package_version": "packageVersion",
        "php": "php",
        "php_arms_config_location": "phpArmsConfigLocation",
        "php_config": "phpConfig",
        "php_config_location": "phpConfigLocation",
        "post_start": "postStart",
        "pre_stop": "preStop",
        "programming_language": "programmingLanguage",
        "pvtz_discovery_svc": "pvtzDiscoverySvc",
        "python": "python",
        "python_modules": "pythonModules",
        "readiness": "readiness",
        "sae_version": "saeVersion",
        "security_group_id": "securityGroupId",
        "service_tags": "serviceTags",
        "sls_configs": "slsConfigs",
        "tags": "tags",
        "termination_grace_period_seconds": "terminationGracePeriodSeconds",
        "timezone": "timezone",
        "tomcat_config": "tomcatConfig",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "war_start_options": "warStartOptions",
        "web_container": "webContainer",
    },
)
class RosApplicationProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cpu: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        memory: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replicas: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        acr_assume_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        associate_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        base_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_map_mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_ebpf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_pull_secrets: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kafka_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        micro_registration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        micro_registration_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_ak_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_ak_secret: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_mount_descs: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php_arms_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        php_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        programming_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pvtz_discovery_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        python: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        python_modules: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sae_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_tags: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosApplication.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tomcat_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApplication``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application

        :param app_name: 
        :param cpu: 
        :param memory: 
        :param namespace_id: 
        :param package_type: 
        :param replicas: 
        :param acr_assume_role_arn: 
        :param acr_instance_id: 
        :param app_description: 
        :param app_source: 
        :param associate_eip: 
        :param auto_config: 
        :param base_app_id: 
        :param command: 
        :param command_args: 
        :param config_map_mount_desc: 
        :param custom_host_alias: 
        :param deploy: 
        :param edas_container_version: 
        :param enable_ebpf: 
        :param envs: 
        :param image_pull_secrets: 
        :param image_url: 
        :param jar_start_args: 
        :param jar_start_options: 
        :param jdk: 
        :param kafka_configs: 
        :param liveness: 
        :param micro_registration: 
        :param micro_registration_config: 
        :param mount_desc: 
        :param mount_host: 
        :param nas_configs: 
        :param nas_id: 
        :param oss_ak_id: 
        :param oss_ak_secret: 
        :param oss_mount_descs: 
        :param package_url: 
        :param package_version: 
        :param php: 
        :param php_arms_config_location: 
        :param php_config: 
        :param php_config_location: 
        :param post_start: 
        :param pre_stop: 
        :param programming_language: 
        :param pvtz_discovery_svc: 
        :param python: 
        :param python_modules: 
        :param readiness: 
        :param sae_version: 
        :param security_group_id: 
        :param service_tags: 
        :param sls_configs: 
        :param tags: 
        :param termination_grace_period_seconds: 
        :param timezone: 
        :param tomcat_config: 
        :param vpc_id: 
        :param v_switch_id: 
        :param war_start_options: 
        :param web_container: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1cf0573cab520f93bd965580156a106306a6abd8a95a6252af4b3b133ed5644)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument replicas", value=replicas, expected_type=type_hints["replicas"])
            check_type(argname="argument acr_assume_role_arn", value=acr_assume_role_arn, expected_type=type_hints["acr_assume_role_arn"])
            check_type(argname="argument acr_instance_id", value=acr_instance_id, expected_type=type_hints["acr_instance_id"])
            check_type(argname="argument app_description", value=app_description, expected_type=type_hints["app_description"])
            check_type(argname="argument app_source", value=app_source, expected_type=type_hints["app_source"])
            check_type(argname="argument associate_eip", value=associate_eip, expected_type=type_hints["associate_eip"])
            check_type(argname="argument auto_config", value=auto_config, expected_type=type_hints["auto_config"])
            check_type(argname="argument base_app_id", value=base_app_id, expected_type=type_hints["base_app_id"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument command_args", value=command_args, expected_type=type_hints["command_args"])
            check_type(argname="argument config_map_mount_desc", value=config_map_mount_desc, expected_type=type_hints["config_map_mount_desc"])
            check_type(argname="argument custom_host_alias", value=custom_host_alias, expected_type=type_hints["custom_host_alias"])
            check_type(argname="argument deploy", value=deploy, expected_type=type_hints["deploy"])
            check_type(argname="argument edas_container_version", value=edas_container_version, expected_type=type_hints["edas_container_version"])
            check_type(argname="argument enable_ebpf", value=enable_ebpf, expected_type=type_hints["enable_ebpf"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument image_pull_secrets", value=image_pull_secrets, expected_type=type_hints["image_pull_secrets"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument jar_start_args", value=jar_start_args, expected_type=type_hints["jar_start_args"])
            check_type(argname="argument jar_start_options", value=jar_start_options, expected_type=type_hints["jar_start_options"])
            check_type(argname="argument jdk", value=jdk, expected_type=type_hints["jdk"])
            check_type(argname="argument kafka_configs", value=kafka_configs, expected_type=type_hints["kafka_configs"])
            check_type(argname="argument liveness", value=liveness, expected_type=type_hints["liveness"])
            check_type(argname="argument micro_registration", value=micro_registration, expected_type=type_hints["micro_registration"])
            check_type(argname="argument micro_registration_config", value=micro_registration_config, expected_type=type_hints["micro_registration_config"])
            check_type(argname="argument mount_desc", value=mount_desc, expected_type=type_hints["mount_desc"])
            check_type(argname="argument mount_host", value=mount_host, expected_type=type_hints["mount_host"])
            check_type(argname="argument nas_configs", value=nas_configs, expected_type=type_hints["nas_configs"])
            check_type(argname="argument nas_id", value=nas_id, expected_type=type_hints["nas_id"])
            check_type(argname="argument oss_ak_id", value=oss_ak_id, expected_type=type_hints["oss_ak_id"])
            check_type(argname="argument oss_ak_secret", value=oss_ak_secret, expected_type=type_hints["oss_ak_secret"])
            check_type(argname="argument oss_mount_descs", value=oss_mount_descs, expected_type=type_hints["oss_mount_descs"])
            check_type(argname="argument package_url", value=package_url, expected_type=type_hints["package_url"])
            check_type(argname="argument package_version", value=package_version, expected_type=type_hints["package_version"])
            check_type(argname="argument php", value=php, expected_type=type_hints["php"])
            check_type(argname="argument php_arms_config_location", value=php_arms_config_location, expected_type=type_hints["php_arms_config_location"])
            check_type(argname="argument php_config", value=php_config, expected_type=type_hints["php_config"])
            check_type(argname="argument php_config_location", value=php_config_location, expected_type=type_hints["php_config_location"])
            check_type(argname="argument post_start", value=post_start, expected_type=type_hints["post_start"])
            check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            check_type(argname="argument programming_language", value=programming_language, expected_type=type_hints["programming_language"])
            check_type(argname="argument pvtz_discovery_svc", value=pvtz_discovery_svc, expected_type=type_hints["pvtz_discovery_svc"])
            check_type(argname="argument python", value=python, expected_type=type_hints["python"])
            check_type(argname="argument python_modules", value=python_modules, expected_type=type_hints["python_modules"])
            check_type(argname="argument readiness", value=readiness, expected_type=type_hints["readiness"])
            check_type(argname="argument sae_version", value=sae_version, expected_type=type_hints["sae_version"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_tags", value=service_tags, expected_type=type_hints["service_tags"])
            check_type(argname="argument sls_configs", value=sls_configs, expected_type=type_hints["sls_configs"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument termination_grace_period_seconds", value=termination_grace_period_seconds, expected_type=type_hints["termination_grace_period_seconds"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
            check_type(argname="argument tomcat_config", value=tomcat_config, expected_type=type_hints["tomcat_config"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument war_start_options", value=war_start_options, expected_type=type_hints["war_start_options"])
            check_type(argname="argument web_container", value=web_container, expected_type=type_hints["web_container"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "cpu": cpu,
            "memory": memory,
            "namespace_id": namespace_id,
            "package_type": package_type,
            "replicas": replicas,
        }
        if acr_assume_role_arn is not None:
            self._values["acr_assume_role_arn"] = acr_assume_role_arn
        if acr_instance_id is not None:
            self._values["acr_instance_id"] = acr_instance_id
        if app_description is not None:
            self._values["app_description"] = app_description
        if app_source is not None:
            self._values["app_source"] = app_source
        if associate_eip is not None:
            self._values["associate_eip"] = associate_eip
        if auto_config is not None:
            self._values["auto_config"] = auto_config
        if base_app_id is not None:
            self._values["base_app_id"] = base_app_id
        if command is not None:
            self._values["command"] = command
        if command_args is not None:
            self._values["command_args"] = command_args
        if config_map_mount_desc is not None:
            self._values["config_map_mount_desc"] = config_map_mount_desc
        if custom_host_alias is not None:
            self._values["custom_host_alias"] = custom_host_alias
        if deploy is not None:
            self._values["deploy"] = deploy
        if edas_container_version is not None:
            self._values["edas_container_version"] = edas_container_version
        if enable_ebpf is not None:
            self._values["enable_ebpf"] = enable_ebpf
        if envs is not None:
            self._values["envs"] = envs
        if image_pull_secrets is not None:
            self._values["image_pull_secrets"] = image_pull_secrets
        if image_url is not None:
            self._values["image_url"] = image_url
        if jar_start_args is not None:
            self._values["jar_start_args"] = jar_start_args
        if jar_start_options is not None:
            self._values["jar_start_options"] = jar_start_options
        if jdk is not None:
            self._values["jdk"] = jdk
        if kafka_configs is not None:
            self._values["kafka_configs"] = kafka_configs
        if liveness is not None:
            self._values["liveness"] = liveness
        if micro_registration is not None:
            self._values["micro_registration"] = micro_registration
        if micro_registration_config is not None:
            self._values["micro_registration_config"] = micro_registration_config
        if mount_desc is not None:
            self._values["mount_desc"] = mount_desc
        if mount_host is not None:
            self._values["mount_host"] = mount_host
        if nas_configs is not None:
            self._values["nas_configs"] = nas_configs
        if nas_id is not None:
            self._values["nas_id"] = nas_id
        if oss_ak_id is not None:
            self._values["oss_ak_id"] = oss_ak_id
        if oss_ak_secret is not None:
            self._values["oss_ak_secret"] = oss_ak_secret
        if oss_mount_descs is not None:
            self._values["oss_mount_descs"] = oss_mount_descs
        if package_url is not None:
            self._values["package_url"] = package_url
        if package_version is not None:
            self._values["package_version"] = package_version
        if php is not None:
            self._values["php"] = php
        if php_arms_config_location is not None:
            self._values["php_arms_config_location"] = php_arms_config_location
        if php_config is not None:
            self._values["php_config"] = php_config
        if php_config_location is not None:
            self._values["php_config_location"] = php_config_location
        if post_start is not None:
            self._values["post_start"] = post_start
        if pre_stop is not None:
            self._values["pre_stop"] = pre_stop
        if programming_language is not None:
            self._values["programming_language"] = programming_language
        if pvtz_discovery_svc is not None:
            self._values["pvtz_discovery_svc"] = pvtz_discovery_svc
        if python is not None:
            self._values["python"] = python
        if python_modules is not None:
            self._values["python_modules"] = python_modules
        if readiness is not None:
            self._values["readiness"] = readiness
        if sae_version is not None:
            self._values["sae_version"] = sae_version
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_tags is not None:
            self._values["service_tags"] = service_tags
        if sls_configs is not None:
            self._values["sls_configs"] = sls_configs
        if tags is not None:
            self._values["tags"] = tags
        if termination_grace_period_seconds is not None:
            self._values["termination_grace_period_seconds"] = termination_grace_period_seconds
        if timezone is not None:
            self._values["timezone"] = timezone
        if tomcat_config is not None:
            self._values["tomcat_config"] = tomcat_config
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if war_start_options is not None:
            self._values["war_start_options"] = war_start_options
        if web_container is not None:
            self._values["web_container"] = web_container

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cpu(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        '''
        result = self._values.get("cpu")
        assert result is not None, "Required property 'cpu' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def memory(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        '''
        result = self._values.get("memory")
        assert result is not None, "Required property 'memory' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        Namespace can interface to obtain from DescribeNamespaceList.
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: packageType: Application package type. Support FatJar, War, Image.
        '''
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replicas(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicas: The initial number of instances.
        '''
        result = self._values.get("replicas")
        assert result is not None, "Required property 'replicas' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acr_assume_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
        '''
        result = self._values.get("acr_assume_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acr_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acrInstanceId: Container Image service ACR Enterprise Edition instance ID. Required when ImageUrl serves enterprise edition for container images.
        '''
        result = self._values.get("acr_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appDescription: Application description. No more than 1024 characters.
        '''
        result = self._values.get("app_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appSource: Application source.
        '''
        result = self._values.get("app_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def associate_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        associateEip: Whether to bind EIP. The values are explained as follows:

        - true: Binding.
        - false: No binding
        '''
        result = self._values.get("associate_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoConfig: Whether to automatically configure the network environment. The values are explained as follows:

        - true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.
        - false: SAE manually config the network environment when creating the application.
        '''
        result = self._values.get("auto_config")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def base_app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: baseAppId: Base application ID.
        '''
        result = self._values.get("base_app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def command(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        '''
        result = self._values.get("command")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def command_args(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        '''
        result = self._values.get("command_args")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_map_mount_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configMapMountDesc: ConfigMap mount description. Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
        '''
        result = self._values.get("config_map_mount_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def custom_host_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        '''
        result = self._values.get("custom_host_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploy: Whether deployed immediately take effect, the default is false.
        '''
        result = self._values.get("deploy")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edas_container_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edasContainerVersion: EDAS pandora runtime environment used by the application.
        '''
        result = self._values.get("edas_container_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_ebpf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableEbpf: Whether to enable EBPF. Enable application monitoring for non-Java applications. The values are explained as follows:

        - true: Enable.
        - false: Disable.
        '''
        result = self._values.get("enable_ebpf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        '''
        result = self._values.get("envs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_pull_secrets(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imagePullSecrets: Corresponding to the secret dictionary ID.
        '''
        result = self._values.get("image_pull_secrets")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        '''
        result = self._values.get("image_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def jar_start_args(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        '''
        result = self._values.get("jar_start_args")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def jar_start_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        '''
        result = self._values.get("jar_start_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def jdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        '''
        result = self._values.get("jdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kafka_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        kafkaConfigs: Logs are ingested to Kafka configuration summary information. The values are explained as follows:

        - kafkaEndpoint: The service access address for the Kafka API
        - kafkaInstanceId: Kafka instance ID
        - kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.
        '''
        result = self._values.get("kafka_configs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        '''
        result = self._values.get("liveness")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def micro_registration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        microRegistration: Select the Nacos registry with the following values:

        - 0: SAE built-in Nacos.
        - 1: User-built Nacos.
        - 2: MSE commercial version of Nacos.
        '''
        result = self._values.get("micro_registration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def micro_registration_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: microRegistrationConfig: Registry configuration information.
        '''
        result = self._values.get("micro_registration_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mount_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mountDesc: Mount Description
        '''
        result = self._values.get("mount_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mount_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mountHost: nas mount point in the application of vpc.
        '''
        result = self._values.get("mount_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nasConfigs: Configuration to mount the NAS. The values are explained as follows:

        - mountPath: The container mount path
        - readOnly: A value of false indicates read and write permission.
        - nasId: NAS ID
        - mountDomain: The container mount point address For more information, see DescribeMountTargets.
        - nasPath: NAS relative file directory
        '''
        result = self._values.get("nas_configs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        '''
        result = self._values.get("nas_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_ak_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossAkId: AccessKey ID of the OSS.
        '''
        result = self._values.get("oss_ak_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_ak_secret(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossAkSecret: AccessKey Secret of the OSS.
        '''
        result = self._values.get("oss_ak_secret")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_mount_descs(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ossMountDescs: OSS mount description information. The parameters are described as follows:

        - bucketName: The name of the Bucket
        - bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.
        - mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.
        - readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
        - true: Read-only permission
        - false: Read and write permissions
        '''
        result = self._values.get("oss_mount_descs")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def package_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        '''
        result = self._values.get("package_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def package_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        '''
        result = self._values.get("package_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: php: PHP version.
        '''
        result = self._values.get("php")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php_arms_config_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
        '''
        result = self._values.get("php_arms_config_location")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phpConfig: PHP configuration file contents.
        '''
        result = self._values.get("php_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def php_config_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
        '''
        result = self._values.get("php_config_location")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_start(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
        '''
        result = self._values.get("post_start")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pre_stop(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
        '''
        result = self._values.get("pre_stop")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def programming_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        programmingLanguage: Create the stack language for the application. The values are explained as follows:

        - java: The Java language
        - php: PHP language.
        - other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.
        '''
        result = self._values.get("programming_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pvtz_discovery_svc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pvtzDiscoverySvc: Enable K8s Service registration discovery. The values are explained as follows:

        - serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.
        - namespaceId: The namespace ID
        - portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.
        - portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.
        - enable: Enable K8s Service registration discovery.
        '''
        result = self._values.get("pvtz_discovery_svc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def python(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: python: Python version. Supports PYTHON 3.9.15
        '''
        result = self._values.get("python")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def python_modules(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pythonModules: Install custom module dependencies. The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
        '''
        result = self._values.get("python_modules")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        '''
        result = self._values.get("readiness")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sae_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: saeVersion: SAE version.
        '''
        result = self._values.get("sae_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_tags(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceTags: Service tags.
        '''
        result = self._values.get("service_tags")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_configs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsConfigs: Log collection configuration file
        '''
        result = self._values.get("sls_configs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosApplication.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosApplication.TagsProperty]], result)

    @builtins.property
    def termination_grace_period_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. The value ranges from 1 to 300.
        '''
        result = self._values.get("termination_grace_period_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: Application time zone. Default Asia/Shanghai.
        '''
        result = self._values.get("timezone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tomcat_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration:

        - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. If not configured, it defaults to 8080.
        - contextPath: The access path, defaults to the root directory "/"
        - maxThreads: This config the number of connections in the pool; the default is 400.
        - uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.
        - useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).
        '''
        result = self._values.get("tomcat_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def war_start_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :: " start
        :Property: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
        '''
        result = self._values.get("war_start_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def web_container(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        '''
        result = self._values.get("web_container")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConfigMap(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosConfigMap",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAE::ConfigMap``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ConfigMap`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConfigMapProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61d1d73fb4fb800a02345175f7da704b6cef77bb570d8cd59e146d12eb44ee1c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e4ca5d7d14265d7b55ab4224879d8892f5b112a9b845e62cf9ea15a7200efec)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigMapId")
    def attr_config_map_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigMapId: The ID of the config map.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigMapId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceId: The ID of the namespace to which this config map instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="data")
    def data(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        data: Configmap key value pairs of data, json format.The format is as follows:
        {"k1":"v1", "k2":"v2"}
        K means key, V represents value.For more information about configuration items, see management and use of configuration items.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "data"))

    @data.setter
    def data(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4622ada22e698204fca41b6f2c40595790b846c8dc6274249449f1f7e3c4551)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "data", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64295be4834d7fb084c233e205004f2ad34ba80420170629d3910c5e9c92b002)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the config map.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d9008585d91d541939787cf0156fc569c6a242e92943b41d73aadf91cdd999c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: The ID of the namespace to which this config map instance belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9979c015bec05006e9c73dcaa69b20bcfd5387512f2d56ad0c33e4dd161bad1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Describe information, do not enter the space without more than 255 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf62db2734fd15f4a86d42f88831c733718ab354302ffca2267d9340c31b9dc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.RosConfigMapProps",
    jsii_struct_bases=[],
    name_mapping={
        "data": "data",
        "name": "name",
        "namespace_id": "namespaceId",
        "description": "description",
    },
)
class RosConfigMapProps:
    def __init__(
        self,
        *,
        data: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosConfigMap``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap

        :param data: 
        :param name: 
        :param namespace_id: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e5c5cd5315336ab37bf563336b463c254b777dc3eef9e951c3382da355962b2)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data": data,
            "name": name,
            "namespace_id": namespace_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def data(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        data: Configmap key value pairs of data, json format.The format is as follows:
        {"k1":"v1", "k2":"v2"}
        K means key, V represents value.For more information about configuration items, see management and use of configuration items.
        '''
        result = self._values.get("data")
        assert result is not None, "Required property 'data' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the config map.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: The ID of the namespace to which this config map instance belongs.
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Describe information, do not enter the space without more than 255 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConfigMapProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIngress(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosIngress",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAE::Ingress``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Ingress`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIngressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__421871ea59003086adfc3ea254017f127409ffa971c5b5d6a71e74df980305a6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3e446232fb0ca9f6a53f7bba042c41ececc0f705ef70e95f66c6caa66c0e6a6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIngressId")
    def attr_ingress_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IngressId: The ID of the routing rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIngressId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="defaultRule")
    def default_rule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.DefaultRuleProperty"]:
        '''
        :Property: defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.DefaultRuleProperty"], jsii.get(self, "defaultRule"))

    @default_rule.setter
    def default_rule(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.DefaultRuleProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__189173817e7b90a2895ad538b949a17ff6441c05a1495b1332cfb7f141b531ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultRule", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The name of the routing rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c60babc021cd4d033982fe1ab9683ef6bd6b605718afd6dbe9b299afe24f686d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a12cb71e4d15fad200b839ff437d7936f63bc93c2a38368ddbde076202d7f40e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: The listener port of the SLB instance. You must specify a vacant port.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1eb6a5c14543565d9ea474968fc40eba543237cec89adb1b08a56335fe4b0188)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d56b771619ae0c37638e2de352f61c0e6c30edeacbd24d2d2043ac87df7c841c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="rules")
    def rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.RulesProperty"]]]:
        '''
        :Property: rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.RulesProperty"]]], jsii.get(self, "rules"))

    @rules.setter
    def rules(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIngress.RulesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50d12691f6ce31ee5425119cc93e6174ba9cf0975fc7d3a29593a88a0d3371e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rules", value)

    @builtins.property
    @jsii.member(jsii_name="slbId")
    def slb_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "slbId"))

    @slb_id.setter
    def slb_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__288528d2053c71ab8f761894705b496380d524f755816adfef4aa511fba0a586)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slbId", value)

    @builtins.property
    @jsii.member(jsii_name="certId")
    def cert_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
        If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certId"))

    @cert_id.setter
    def cert_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__336bcaf602efe4072b03ec0a933e97e0c59e8307a04b3e49d5c5479cb14ed8d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certId", value)

    @builtins.property
    @jsii.member(jsii_name="certIds")
    def cert_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "certIds"))

    @cert_ids.setter
    def cert_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ea805bba6be3993fa493151089e36e2d659f1b83817562f45737f04af513175)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certIds", value)

    @builtins.property
    @jsii.member(jsii_name="listenerProtocol")
    def listener_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerProtocol: The protocol that is used to forward requests.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "listenerProtocol"))

    @listener_protocol.setter
    def listener_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a563129a135b616541fa591d716cf577d268a214bc285357ad416bd49d8cd171)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalanceType")
    def load_balance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalanceType"))

    @load_balance_type.setter
    def load_balance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58251e78115eaa29186c2202b87264041cbb9854eda4bc71f8bdf8cfa0aeeeab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalanceType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sae.RosIngress.DefaultRuleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "app_id": "appId",
            "container_port": "containerPort",
            "backend_protocol": "backendProtocol",
        },
    )
    class DefaultRuleProperty:
        def __init__(
            self,
            *,
            app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            container_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            backend_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param app_id: 
            :param container_port: 
            :param backend_protocol: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9eca821fb1043285854078018d788d4d223b961f419c51e7e698a82731ea1ccc)
                check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
                check_type(argname="argument container_port", value=container_port, expected_type=type_hints["container_port"])
                check_type(argname="argument backend_protocol", value=backend_protocol, expected_type=type_hints["backend_protocol"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "app_id": app_id,
                "container_port": container_port,
            }
            if backend_protocol is not None:
                self._values["backend_protocol"] = backend_protocol

        @builtins.property
        def app_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: appId: The application ID
            '''
            result = self._values.get("app_id")
            assert result is not None, "Required property 'app_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def container_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: containerPort: The container port of the application.
            '''
            result = self._values.get("container_port")
            assert result is not None, "Required property 'container_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def backend_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backendProtocol: The protocol of the application.
            '''
            result = self._values.get("backend_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DefaultRuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sae.RosIngress.RulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "app_id": "appId",
            "container_port": "containerPort",
            "domain": "domain",
            "path": "path",
            "backend_protocol": "backendProtocol",
            "rewrite_path": "rewritePath",
        },
    )
    class RulesProperty:
        def __init__(
            self,
            *,
            app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            container_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            backend_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rewrite_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param app_id: 
            :param container_port: 
            :param domain: 
            :param path: 
            :param backend_protocol: 
            :param rewrite_path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__80ed499a119d6485461ae01710b5a2942e8c8bcc24df4420eb41fc5d02a58a6b)
                check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
                check_type(argname="argument container_port", value=container_port, expected_type=type_hints["container_port"])
                check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument backend_protocol", value=backend_protocol, expected_type=type_hints["backend_protocol"])
                check_type(argname="argument rewrite_path", value=rewrite_path, expected_type=type_hints["rewrite_path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "app_id": app_id,
                "container_port": container_port,
                "domain": domain,
                "path": path,
            }
            if backend_protocol is not None:
                self._values["backend_protocol"] = backend_protocol
            if rewrite_path is not None:
                self._values["rewrite_path"] = rewrite_path

        @builtins.property
        def app_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: appId: The application ID
            '''
            result = self._values.get("app_id")
            assert result is not None, "Required property 'app_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def container_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: containerPort: The container port of the application.
            '''
            result = self._values.get("container_port")
            assert result is not None, "Required property 'container_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def domain(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: domain: The domain name.
            '''
            result = self._values.get("domain")
            assert result is not None, "Required property 'domain' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: path: The request path.
            '''
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def backend_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backendProtocol: The protocol of the application.
            '''
            result = self._values.get("backend_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rewrite_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rewritePath: The rewrite path.
            '''
            result = self._values.get("rewrite_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.RosIngressProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_rule": "defaultRule",
        "description": "description",
        "listener_port": "listenerPort",
        "namespace_id": "namespaceId",
        "rules": "rules",
        "slb_id": "slbId",
        "cert_id": "certId",
        "cert_ids": "certIds",
        "listener_protocol": "listenerProtocol",
        "load_balance_type": "loadBalanceType",
    },
)
class RosIngressProps:
    def __init__(
        self,
        *,
        default_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIngress.DefaultRuleProperty, typing.Dict[builtins.str, typing.Any]]],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIngress.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        slb_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosIngress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress

        :param default_rule: 
        :param description: 
        :param listener_port: 
        :param namespace_id: 
        :param rules: 
        :param slb_id: 
        :param cert_id: 
        :param cert_ids: 
        :param listener_protocol: 
        :param load_balance_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fba730e6d90a169725a995e2c80ea2b0f613b55f5c8023c59eb8aa6ea18ad4ed)
            check_type(argname="argument default_rule", value=default_rule, expected_type=type_hints["default_rule"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
            check_type(argname="argument slb_id", value=slb_id, expected_type=type_hints["slb_id"])
            check_type(argname="argument cert_id", value=cert_id, expected_type=type_hints["cert_id"])
            check_type(argname="argument cert_ids", value=cert_ids, expected_type=type_hints["cert_ids"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument load_balance_type", value=load_balance_type, expected_type=type_hints["load_balance_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_rule": default_rule,
            "description": description,
            "listener_port": listener_port,
            "namespace_id": namespace_id,
            "rules": rules,
            "slb_id": slb_id,
        }
        if cert_id is not None:
            self._values["cert_id"] = cert_id
        if cert_ids is not None:
            self._values["cert_ids"] = cert_ids
        if listener_protocol is not None:
            self._values["listener_protocol"] = listener_protocol
        if load_balance_type is not None:
            self._values["load_balance_type"] = load_balance_type

    @builtins.property
    def default_rule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIngress.DefaultRuleProperty]:
        '''
        :Property: defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
        '''
        result = self._values.get("default_rule")
        assert result is not None, "Required property 'default_rule' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIngress.DefaultRuleProperty], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The name of the routing rule.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: The listener port of the SLB instance. You must specify a vacant port.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIngress.RulesProperty]]]:
        '''
        :Property: rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
        '''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIngress.RulesProperty]]], result)

    @builtins.property
    def slb_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
        '''
        result = self._values.get("slb_id")
        assert result is not None, "Required property 'slb_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
        If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
        '''
        result = self._values.get("cert_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
        '''
        result = self._values.get("cert_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerProtocol: The protocol that is used to forward requests.
        '''
        result = self._values.get("listener_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
        '''
        result = self._values.get("load_balance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIngressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosNamespace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAE::Namespace``, which is used to create a Namespace.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Namespace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15a8e45635617a9683594fc8dcb4419f8350787eb38c78f222dde758a42980fb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e8ee023c0f95304cf7acc360eed41f2d9079274b796937e9be7c751a37275d2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceId: Namespace ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9521ee8c9c402fb6cc06ba0b29c811e4c97b401bbba3e573800bc7b7a58faca4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7be6b67baaccf4950b527774e4d0df8af926966616a8db1d6100f684add2c386)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceName")
    def namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceName: Namespace name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceName"))

    @namespace_name.setter
    def namespace_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68b31d2a2dc5c2cdee47e29ba29505b06e2a98d5be0c81865e70fe51975997cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceName", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceDescription")
    def namespace_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceDescription: Namespace description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceDescription"))

    @namespace_description.setter
    def namespace_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c290c52b5e7e8c39e8bb112d577c29041b3b2c32d7b374cac887956b36d335e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace_id": "namespaceId",
        "namespace_name": "namespaceName",
        "namespace_description": "namespaceDescription",
    },
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace

        :param namespace_id: 
        :param namespace_name: 
        :param namespace_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72b60bd7e7c943ee569b32df806fe13b811a07025835018b13cd2b4d31ea75fb)
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument namespace_description", value=namespace_description, expected_type=type_hints["namespace_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace_id": namespace_id,
            "namespace_name": namespace_name,
        }
        if namespace_description is not None:
            self._values["namespace_description"] = namespace_description

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceName: Namespace name
        '''
        result = self._values.get("namespace_name")
        assert result is not None, "Required property 'namespace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceDescription: Namespace description
        '''
        result = self._values.get("namespace_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSlbBinding(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosSlbBinding",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAE::SlbBinding``, which is used to bind an SLB instance to an application.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SlbBinding`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSlbBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc528f258b9def1f2a5a16f5349e2aa027c742f748b4de154375c91c77698b18)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09f60df871539a0a0600bb4d2c955bdd8bee1b4dc990c05fcafd7cb9af180195)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppId: Successful application deployment target ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChangeOrderId: Return to release a single ID, used to query task execution status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appId")
    def app_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appId: Successful application deployment target ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd0119dcee94bfd1aced3cf0508f60138fbef7de4e26599b45f188a94625bc14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8175baa1186a68d863607c163d20c902b3965c73e7e3985fc257f8a5a917fa2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="internet")
    def internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internet"))

    @internet.setter
    def internet(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65c9a2171164d5d8b96f83b0a619e9d6b77599323bb1e9c8ca513a9920b286e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internet", value)

    @builtins.property
    @jsii.member(jsii_name="internetSlbId")
    def internet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetSlbId"))

    @internet_slb_id.setter
    def internet_slb_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__836e3d2e22df9689daa13e1a4fe8c6ce4e0ee2393ed628f850b0be0d710aedbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetSlbId", value)

    @builtins.property
    @jsii.member(jsii_name="intranet")
    def intranet(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "intranet"))

    @intranet.setter
    def intranet(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6532d6a5b690645250fb6c7b93989387218d97eb230d5a6b73b694150a95d47d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "intranet", value)

    @builtins.property
    @jsii.member(jsii_name="intranetSlbId")
    def intranet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "intranetSlbId"))

    @intranet_slb_id.setter
    def intranet_slb_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb2dc16e2400d4b03c34fb48eeeff5ead2d2cb81b1f9b1c519c67b932dac5e11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "intranetSlbId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.RosSlbBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_id": "appId",
        "internet": "internet",
        "internet_slb_id": "internetSlbId",
        "intranet": "intranet",
        "intranet_slb_id": "intranetSlbId",
    },
)
class RosSlbBindingProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        internet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        intranet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        intranet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSlbBinding``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding

        :param app_id: 
        :param internet: 
        :param internet_slb_id: 
        :param intranet: 
        :param intranet_slb_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10581af792f56a8204bc2a77f33f8523f265a00bf3b93bc2b02c2bf660d619f8)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument internet", value=internet, expected_type=type_hints["internet"])
            check_type(argname="argument internet_slb_id", value=internet_slb_id, expected_type=type_hints["internet_slb_id"])
            check_type(argname="argument intranet", value=intranet, expected_type=type_hints["intranet"])
            check_type(argname="argument intranet_slb_id", value=intranet_slb_id, expected_type=type_hints["intranet_slb_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_id": app_id,
        }
        if internet is not None:
            self._values["internet"] = internet
        if internet_slb_id is not None:
            self._values["internet_slb_id"] = internet_slb_id
        if intranet is not None:
            self._values["intranet"] = intranet
        if intranet_slb_id is not None:
            self._values["intranet_slb_id"] = intranet_slb_id

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appId: Successful application deployment target ID
        '''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        '''
        result = self._values.get("internet")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        '''
        result = self._values.get("internet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def intranet(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        '''
        result = self._values.get("intranet")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def intranet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        '''
        result = self._values.get("intranet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSlbBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SlbBinding(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.SlbBinding",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAE::SlbBinding``, which is used to bind an SLB instance to an application.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSlbBinding``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SlbBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e94ea6860f49e6112ade5deaba335a4c5eb22b6fcd60739d49408115833678d0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppId: Successful application deployment target ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2103cfb0794ab7e109c8106345d5edb28b6cad5c04f784a2fd5ce2f7b4798da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70767e6b9818e5628db319a0b403b3eaed0fdf6ac3b070735f46c4437a21679b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SlbBindingProps":
        return typing.cast("SlbBindingProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SlbBindingProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d2e8b31ef0bae08d6cad1a068aa1f7edd33af3b3439cfa9a77c449469331ed9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09717c5167495ce0e77974da6156e555d7ca7e13ba2f1c1cee6ec03efb547b0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.SlbBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_id": "appId",
        "internet": "internet",
        "internet_slb_id": "internetSlbId",
        "intranet": "intranet",
        "intranet_slb_id": "intranetSlbId",
    },
)
class SlbBindingProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        internet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        intranet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        intranet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SlbBinding``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding

        :param app_id: Property appId: Successful application deployment target ID.
        :param internet: Property internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        :param internet_slb_id: Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
        :param intranet: Property intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        :param intranet_slb_id: Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9817069c9ab48a70950a4985d39f2c85d33ec18200d162415308c81c9af811a)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument internet", value=internet, expected_type=type_hints["internet"])
            check_type(argname="argument internet_slb_id", value=internet_slb_id, expected_type=type_hints["internet_slb_id"])
            check_type(argname="argument intranet", value=intranet, expected_type=type_hints["intranet"])
            check_type(argname="argument intranet_slb_id", value=intranet_slb_id, expected_type=type_hints["intranet_slb_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_id": app_id,
        }
        if internet is not None:
            self._values["internet"] = internet
        if internet_slb_id is not None:
            self._values["internet_slb_id"] = internet_slb_id
        if intranet is not None:
            self._values["intranet"] = intranet
        if intranet_slb_id is not None:
            self._values["intranet_slb_id"] = intranet_slb_id

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appId: Successful application deployment target ID.'''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internet: Binding public SLB.

        For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        '''
        result = self._values.get("internet")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.'''
        result = self._values.get("internet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def intranet(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property intranet: Bind private SLB.

        For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        '''
        result = self._values.get("intranet")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def intranet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.'''
        result = self._values.get("intranet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SlbBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Application",
    "ApplicationProps",
    "ConfigMap",
    "ConfigMapProps",
    "Ingress",
    "IngressProps",
    "Namespace",
    "NamespaceProps",
    "RosApplication",
    "RosApplicationProps",
    "RosConfigMap",
    "RosConfigMapProps",
    "RosIngress",
    "RosIngressProps",
    "RosNamespace",
    "RosNamespaceProps",
    "RosSlbBinding",
    "RosSlbBindingProps",
    "SlbBinding",
    "SlbBindingProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__f40e4e0dc21b5530d850ac62cc0ec37d92bd5e584281413caabd068c72ee536d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f06e3e0f1b9e9b90ed298b41f04c630aec93eacbf1d7c37eb60fc98be8f4f25d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9445dd98fc7a0f533e9125ce8f2a8b09fc5f6549291db3d6f54e46e0d788b2cd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__527164ef9d598686bac865414b789749dbfa21e48142dbc4573d0d743a45c864(
    value: ApplicationProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fec89ca07b2f50d415ce492c2ec1ffeae90e51b05926ac4306707e7599ed5173(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e0809ad432939d33626184efbc5fc3baf4368e4c612a52467ac68e941027e8f(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cpu: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    memory: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replicas: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    acr_assume_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    associate_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    base_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_map_mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_ebpf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_pull_secrets: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kafka_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    micro_registration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    micro_registration_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_ak_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_ak_secret: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_mount_descs: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php_arms_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    programming_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pvtz_discovery_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    python: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    python_modules: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sae_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_tags: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosApplication.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tomcat_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__599f71120c58974e9fef15e102864ade4d3543a0686ccd8ca8a16d0a7063bc2b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConfigMapProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__971d1edaf0161f246ed921c271502d96a4892756a66083532bc5a5d4ecdc674b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06fd1152453cbb2816c1e43f9e9466a30e6c83bc3eed26599728d96a211a0fc8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__690b684e8ff267f02b8cb2da9131caf9e63b58530b899a7ff74ce04f196cbcc4(
    value: ConfigMapProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6549c4276b1f5d1968f3ba9ec3984399cce1257c107c92eecbb69617a852b1cf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a982ffc5ee0ee15ea84e0dc72a28fac510d5818431b3d40cc2db1b7304ba0fa(
    *,
    data: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__550c078862ef7722a66c077c5d6894db50548ab69a5cebff47cd7d63b308f1ce(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IngressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa3a9d1b7bf01d41abea539ee4fb121040e8042669463731002ed78ac6fa2879(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__219712cc80ea0ec3e268837d7b760ac3c8bda722d36fd83edcefd7b294db09b2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__310680be736e53e41fccf36588c308636ea14b75db9739a009f8ccdb079ee126(
    value: IngressProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__248704668e4cd7f5b89e56a43fb65937b7e8e9ff78b1036b74b682c6527e5224(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78c7a215c4ffcc0dafaf070f7b3f9451e761c975acd841aebbc574b25a350a15(
    *,
    default_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIngress.DefaultRuleProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIngress.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    slb_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3f5a3b3a5bb50b41c8347823790f2a6e0c342121b76c178ab306a6124c6ed0d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a1f29bb619f376c9eeef68a4a8c525c4d8be9e0e7367c2e76e048b6926497ae(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fe80bcc2206a7ceedec13450dd8ae2f3fb0dee433124fa8ae8e2c6b959d29d9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebf401adfd1681bc7e58f39a4becf8b8cc38961c44429a112fd1bfd1275cc997(
    value: NamespaceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44ab3a3b81981df71873f7c9bb4447b341512247eb149f6c1ccb603ec0e9c322(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b485e9afeb6d7962b252f0119e24ac9d51e6da5f0f3c36903b5cc97feb5113d(
    *,
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c1ab3203db4f9a1da714c700215a6c337b7f1ad1132fd0ca6890604cd6bf929(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a922c8161e8f9e49f5d63e2ea3fe9a698c4aa80ad6ac78974a209b4befb2c66d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3d86995c21c86a4debd788a70ab20c9ff77940b1057cffbc078bd675f9dffc0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9afce2aab31020fd3125cb0cdff507b235b953c0a4bdec465ef92c5b2664d8e0(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b971010065f6dccc0c659884efcdb0bdf98bd84080efaa6757d1a9442fe06107(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__274f287b31834db9d901486785f88fea8bf061446a631a8704dcec2d515be9e8(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d90690996fe24527ef0cc5e3d17bec3ea30242370a4877edabede7fbeb8d6216(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4d49c765eb959bf619695505932285ece77e895292471016264d3ecbfed81be(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b5a879d6eed27264cc1173cef1c78008345198d048be53c18aab4f07b513a14(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dde13cd5b17f0e35505ec06b7039a782460f1d293e683eef323adcc06a35c536(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc100902c22b5b97f5dcda188d8b26ab5e7a14b152187788ac9812961b9ac540(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44b73e6612f1a6319f73a995f8bffb83f1292f1b18c622bd85b0038448d726a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4f8969278be8e57d64d0d0355472b9bd7d35fd974c5d9f39cfb1ca63b2b8e9a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ec717e40d8b9b59b2c1b242a1e9a2c4506bd197c405a0056b69fa45647f580a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1b637feab4a1885d867b6ce992da8fd76634dba21520de2c558c08aad305fa2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eecd8ba2e4211e5878ba071745091ee63868c6749696eeaf37f4406dd680d4f3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b8e1b11b60d6cc7af8a85cfef24dc3d3b27f375961b4737363217d017fa7225(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fab9baebb3937b437ab5c1b1b8a764c0b58296ff1fdf1162be8e957bab66e5d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8484639b906a40077b00bbc9d221fede4457509370292c11167f34968e44af1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69e502b7f583c59139da6fefa7fd3c4e4edcc34a0693d69164d3f9097b277e17(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62a56b828b0775c64b0f6205cee85421e514d707779c40ef901f72f3d872e7b8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26ff260790e5e70b09f4a667e34338ab6f9342d45a018a3f4164c386e93d2b5b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27970a4a74efa79f1a5ec76e13cb6de80660f1fd80e2f800665801812b82045d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9829cc7d852a42250c2224cfc57ad1eb6ab6922065482e8945df14694a0282a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a70e3366d9744237733bdd68f3edff2dd375e7903a3dfb25c8dc8ef685a71b19(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4331d88d7f21128d9cf6abc3223a97fa1ada83796ff36125dfbc693314b49f88(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca61b554fb34e2e904e8d1ae9f2d261d9d93a916fce703176cb272d1e40edb4b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69856ed5fe95b9e615b6a9c413b7061af1bce763a24ff55d35e907d1a91f3d89(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07f3d362b7becba32d414f1cf3c251d8953afdd1698a6ae4eb50ff3bfba66b1b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7bff327bd2ba20b73e47959a5e6ae2853139c8dbf780426c64c6fd9db1a6f60(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__183d37776b468b778ce55cf09edebe71e639b56fc711fc9e89a1870b63f3c783(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce0a001cfbf56656cc4404b7fd29214c06aa2336e6d050b26321c1650b107586(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e1fec0baf2ac194deb8576043d429f26d1b4ea2217319d6a34ba3b3ef47f45e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__494b0fdbe0e3a07f261ef76829a1081e86225f96f622ccf1b796724d4720a42b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4258555e4d3c8274e21366579b9af5f2eb31ecdcd1a8c036a48f0aa25fd8ce86(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce453392f6f8867d550d1e12e6572de39145f8552b9477730577858eb1529ed0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1c94c35d79244abf1289c00f0f892cae5b6a984884304a1067250ad2de01c74(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0913c338151d1766f8e55a5adbcb74ed08bb6e13b93d5527cb53430d4a710380(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efd8e2ff4a69d185f56029a97e03a7e204606a2ec016ba244c49400d66e5f732(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27923362777ae0998ddad4272919634eae9a24725a53aa10a373bfef93c1593b(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78b4538b42f95387212d94c9eed3d073f6254005b3813d96df5ff2e33fc0896a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5faf2cd874e6003daab00c1012b214add97a867395d90d160b7fa5fddb19498(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f78c45e8ebbfe63c14cb6542222b63fa1bedbec7d0151e3982690d6a23a8df2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__732a68452bdebd96f41a546dead575be4c81d5a85e96e8a4132f906fc2f3e906(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f37a4e77a44fe386c1478fd5c4872d770fe15e8649a82038055ec7111db0cf5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__823783e1dbd062eebf14a0566a6feb21da055cc6faacb3ab0f1f4a51b179bace(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45b49596d8ec100f2b41594fa583ec9314058196b1948be7ec5ed8318565799b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc9620a59954baf6fc324c7bf059d32303aa5e281fcfbac9426df0da86701564(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a6f18f591e316084d44673f3538ee953ae85c47e6e8a25fd26a713ed5152b70(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be55bf3f8885cda433665f53b7bdf546b654ba956cdc343451a936bd4d3bd1bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca743f6c0046c942a2d545f1e647e790b3e354f02e508e4a9a9d982a5fe1e73c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04dd73ddf5398926e9f685a70e60c6c80b1e5cd2ab5396e05cd20a9cb8201ca8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__287eea9772792ae58a8e2a137164b8b244ac6bff880bafb14c8d34a5a4f8a818(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b280b49d2933215a9adb000fd561b18e09920f5784ef220019db5e18cd732044(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af32b8eea2efa3cfa4daba653a2801c5c8ac4a9bec4912c342c2919a3dc67778(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3462ebe8d4bb9912ce6ecf5c0c77b1096bf4eec3d4c396e4447b27d39a141e1b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__547dca69a5f43e2a98f326603afd6517f5fc6b40c369b012b2ce73786332afd2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__441091f3eb212761c411129f18585fc21940b52552609093eeaf031ee33ec42b(
    value: typing.Optional[typing.List[RosApplication.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5c680bbe532d83d0323816504095ecdc6ccd712dc39197de8b78819e08be705(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd51df4a485ca02763e035d9ff22a252dce4e3eef02bf1b218f8c06148846b57(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11a0accf0f9769ffeaba67e14ccf3fd4438bfbaa470cf761dd8518503503b46a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7e0d8213ad19f8767dfb51bf368df178dd50ebf50c25d0583e5971d5e4e3d1e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40b0affc3a4ba9751a84d57fd38c49c16985270cabf93b655fee98c18b0fbe55(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e4d87811349da12553158b6936d1f01163c17d41bf7cf650d402071f84251ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__431185569ef7168590bf23fc2ef060b720247d494123b4f17ec46951c093a3e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e69f60863b35c099eb075f4bc11f90e1940104113f5c268720a2d2fb1ccd7a76(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1cf0573cab520f93bd965580156a106306a6abd8a95a6252af4b3b133ed5644(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cpu: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    memory: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    package_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replicas: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    acr_assume_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    associate_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    base_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_map_mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_ebpf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_pull_secrets: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kafka_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    micro_registration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    micro_registration_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_ak_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_ak_secret: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_mount_descs: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php_arms_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    php_config_location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    programming_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pvtz_discovery_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    python: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    python_modules: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sae_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_tags: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosApplication.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tomcat_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61d1d73fb4fb800a02345175f7da704b6cef77bb570d8cd59e146d12eb44ee1c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConfigMapProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e4ca5d7d14265d7b55ab4224879d8892f5b112a9b845e62cf9ea15a7200efec(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4622ada22e698204fca41b6f2c40595790b846c8dc6274249449f1f7e3c4551(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64295be4834d7fb084c233e205004f2ad34ba80420170629d3910c5e9c92b002(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d9008585d91d541939787cf0156fc569c6a242e92943b41d73aadf91cdd999c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9979c015bec05006e9c73dcaa69b20bcfd5387512f2d56ad0c33e4dd161bad1a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf62db2734fd15f4a86d42f88831c733718ab354302ffca2267d9340c31b9dc1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e5c5cd5315336ab37bf563336b463c254b777dc3eef9e951c3382da355962b2(
    *,
    data: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__421871ea59003086adfc3ea254017f127409ffa971c5b5d6a71e74df980305a6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIngressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3e446232fb0ca9f6a53f7bba042c41ececc0f705ef70e95f66c6caa66c0e6a6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__189173817e7b90a2895ad538b949a17ff6441c05a1495b1332cfb7f141b531ad(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIngress.DefaultRuleProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c60babc021cd4d033982fe1ab9683ef6bd6b605718afd6dbe9b299afe24f686d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a12cb71e4d15fad200b839ff437d7936f63bc93c2a38368ddbde076202d7f40e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1eb6a5c14543565d9ea474968fc40eba543237cec89adb1b08a56335fe4b0188(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d56b771619ae0c37638e2de352f61c0e6c30edeacbd24d2d2043ac87df7c841c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50d12691f6ce31ee5425119cc93e6174ba9cf0975fc7d3a29593a88a0d3371e6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIngress.RulesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__288528d2053c71ab8f761894705b496380d524f755816adfef4aa511fba0a586(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__336bcaf602efe4072b03ec0a933e97e0c59e8307a04b3e49d5c5479cb14ed8d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ea805bba6be3993fa493151089e36e2d659f1b83817562f45737f04af513175(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a563129a135b616541fa591d716cf577d268a214bc285357ad416bd49d8cd171(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58251e78115eaa29186c2202b87264041cbb9854eda4bc71f8bdf8cfa0aeeeab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eca821fb1043285854078018d788d4d223b961f419c51e7e698a82731ea1ccc(
    *,
    app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    container_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    backend_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80ed499a119d6485461ae01710b5a2942e8c8bcc24df4420eb41fc5d02a58a6b(
    *,
    app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    container_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rewrite_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fba730e6d90a169725a995e2c80ea2b0f613b55f5c8023c59eb8aa6ea18ad4ed(
    *,
    default_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIngress.DefaultRuleProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIngress.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    slb_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15a8e45635617a9683594fc8dcb4419f8350787eb38c78f222dde758a42980fb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e8ee023c0f95304cf7acc360eed41f2d9079274b796937e9be7c751a37275d2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9521ee8c9c402fb6cc06ba0b29c811e4c97b401bbba3e573800bc7b7a58faca4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7be6b67baaccf4950b527774e4d0df8af926966616a8db1d6100f684add2c386(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68b31d2a2dc5c2cdee47e29ba29505b06e2a98d5be0c81865e70fe51975997cd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c290c52b5e7e8c39e8bb112d577c29041b3b2c32d7b374cac887956b36d335e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72b60bd7e7c943ee569b32df806fe13b811a07025835018b13cd2b4d31ea75fb(
    *,
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc528f258b9def1f2a5a16f5349e2aa027c742f748b4de154375c91c77698b18(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSlbBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09f60df871539a0a0600bb4d2c955bdd8bee1b4dc990c05fcafd7cb9af180195(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd0119dcee94bfd1aced3cf0508f60138fbef7de4e26599b45f188a94625bc14(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8175baa1186a68d863607c163d20c902b3965c73e7e3985fc257f8a5a917fa2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65c9a2171164d5d8b96f83b0a619e9d6b77599323bb1e9c8ca513a9920b286e0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__836e3d2e22df9689daa13e1a4fe8c6ce4e0ee2393ed628f850b0be0d710aedbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6532d6a5b690645250fb6c7b93989387218d97eb230d5a6b73b694150a95d47d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb2dc16e2400d4b03c34fb48eeeff5ead2d2cb81b1f9b1c519c67b932dac5e11(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10581af792f56a8204bc2a77f33f8523f265a00bf3b93bc2b02c2bf660d619f8(
    *,
    app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    internet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    intranet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    intranet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e94ea6860f49e6112ade5deaba335a4c5eb22b6fcd60739d49408115833678d0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SlbBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2103cfb0794ab7e109c8106345d5edb28b6cad5c04f784a2fd5ce2f7b4798da(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70767e6b9818e5628db319a0b403b3eaed0fdf6ac3b070735f46c4437a21679b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d2e8b31ef0bae08d6cad1a068aa1f7edd33af3b3439cfa9a77c449469331ed9(
    value: SlbBindingProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09717c5167495ce0e77974da6156e555d7ca7e13ba2f1c1cee6ec03efb547b0f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9817069c9ab48a70950a4985d39f2c85d33ec18200d162415308c81c9af811a(
    *,
    app_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    internet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    intranet: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    intranet_slb_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
