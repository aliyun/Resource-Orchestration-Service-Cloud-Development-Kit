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
    '''A ROS resource type:  ``ALIYUN::SAE::Application``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAE::Application``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        "app_description": "appDescription",
        "command": "command",
        "command_args": "commandArgs",
        "custom_host_alias": "customHostAlias",
        "deploy": "deploy",
        "edas_container_version": "edasContainerVersion",
        "envs": "envs",
        "image_url": "imageUrl",
        "jar_start_args": "jarStartArgs",
        "jar_start_options": "jarStartOptions",
        "jdk": "jdk",
        "liveness": "liveness",
        "mount_desc": "mountDesc",
        "mount_host": "mountHost",
        "nas_id": "nasId",
        "package_url": "packageUrl",
        "package_version": "packageVersion",
        "post_start": "postStart",
        "pre_stop": "preStop",
        "readiness": "readiness",
        "security_group_id": "securityGroupId",
        "sls_configs": "slsConfigs",
        "tags": "tags",
        "timezone": "timezone",
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
        app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosApplication.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAE::Application``.

        :param app_name: Property appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        :param cpu: Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        :param memory: Property memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        :param namespace_id: Property namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter. Namespace can interface to obtain from DescribeNamespaceList.
        :param package_type: Property packageType: Application package type. Support FatJar, War, Image.
        :param replicas: Property replicas: The initial number of instances.
        :param app_description: Property appDescription: Application description. No more than 1024 characters.
        :param command: Property command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        :param command_args: Property commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        :param custom_host_alias: Property customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        :param deploy: Property deploy: Whether deployed immediately take effect, the default is false.
        :param edas_container_version: Property edasContainerVersion: EDAS pandora runtime environment used by the application.
        :param envs: Property envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        :param image_url: Property imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        :param jar_start_args: Property jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path" $ JarStartArgs
        :param jar_start_options: Property jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path" $ JarStartArgs
        :param jdk: Property jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        :param liveness: Property liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        :param mount_desc: Property mountDesc: Mount Description.
        :param mount_host: Property mountHost: nas mount point in the application of vpc.
        :param nas_id: Property nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        :param package_url: Property packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        :param package_version: Property packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        :param post_start: Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
        :param pre_stop: Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
        :param readiness: Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        :param security_group_id: Property securityGroupId: Security group ID.
        :param sls_configs: Property slsConfigs: Log collection configuration file.
        :param tags: Property tags: Tags to attach to application. Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
        :param timezone: Property timezone: Application time zone. Default Asia/Shanghai.
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
            check_type(argname="argument app_description", value=app_description, expected_type=type_hints["app_description"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument command_args", value=command_args, expected_type=type_hints["command_args"])
            check_type(argname="argument custom_host_alias", value=custom_host_alias, expected_type=type_hints["custom_host_alias"])
            check_type(argname="argument deploy", value=deploy, expected_type=type_hints["deploy"])
            check_type(argname="argument edas_container_version", value=edas_container_version, expected_type=type_hints["edas_container_version"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument jar_start_args", value=jar_start_args, expected_type=type_hints["jar_start_args"])
            check_type(argname="argument jar_start_options", value=jar_start_options, expected_type=type_hints["jar_start_options"])
            check_type(argname="argument jdk", value=jdk, expected_type=type_hints["jdk"])
            check_type(argname="argument liveness", value=liveness, expected_type=type_hints["liveness"])
            check_type(argname="argument mount_desc", value=mount_desc, expected_type=type_hints["mount_desc"])
            check_type(argname="argument mount_host", value=mount_host, expected_type=type_hints["mount_host"])
            check_type(argname="argument nas_id", value=nas_id, expected_type=type_hints["nas_id"])
            check_type(argname="argument package_url", value=package_url, expected_type=type_hints["package_url"])
            check_type(argname="argument package_version", value=package_version, expected_type=type_hints["package_version"])
            check_type(argname="argument post_start", value=post_start, expected_type=type_hints["post_start"])
            check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            check_type(argname="argument readiness", value=readiness, expected_type=type_hints["readiness"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument sls_configs", value=sls_configs, expected_type=type_hints["sls_configs"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
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
        if app_description is not None:
            self._values["app_description"] = app_description
        if command is not None:
            self._values["command"] = command
        if command_args is not None:
            self._values["command_args"] = command_args
        if custom_host_alias is not None:
            self._values["custom_host_alias"] = custom_host_alias
        if deploy is not None:
            self._values["deploy"] = deploy
        if edas_container_version is not None:
            self._values["edas_container_version"] = edas_container_version
        if envs is not None:
            self._values["envs"] = envs
        if image_url is not None:
            self._values["image_url"] = image_url
        if jar_start_args is not None:
            self._values["jar_start_args"] = jar_start_args
        if jar_start_options is not None:
            self._values["jar_start_options"] = jar_start_options
        if jdk is not None:
            self._values["jdk"] = jdk
        if liveness is not None:
            self._values["liveness"] = liveness
        if mount_desc is not None:
            self._values["mount_desc"] = mount_desc
        if mount_host is not None:
            self._values["mount_host"] = mount_host
        if nas_id is not None:
            self._values["nas_id"] = nas_id
        if package_url is not None:
            self._values["package_url"] = package_url
        if package_version is not None:
            self._values["package_version"] = package_version
        if post_start is not None:
            self._values["post_start"] = post_start
        if pre_stop is not None:
            self._values["pre_stop"] = pre_stop
        if readiness is not None:
            self._values["readiness"] = readiness
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if sls_configs is not None:
            self._values["sls_configs"] = sls_configs
        if tags is not None:
            self._values["tags"] = tags
        if timezone is not None:
            self._values["timezone"] = timezone
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
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appDescription: Application description.

        No more than 1024 characters.
        '''
        result = self._values.get("app_description")
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
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property envs: Container environment variable parameters.

        For example: [{ "name": "envtmp", "value": "0"}]
        '''
        result = self._values.get("envs")
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
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property liveness: Container health check, health check fails container will be killed and recovery.

        Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        '''
        result = self._values.get("liveness")
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
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nasId: Mount the NAS ID, you must be in the same region and cluster.

        It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        '''
        result = self._values.get("nas_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.

        Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        '''
        result = self._values.get("readiness")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Security group ID.'''
        result = self._values.get("security_group_id")
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
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timezone: Application time zone.

        Default Asia/Shanghai.
        '''
        result = self._values.get("timezone")
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


class Namespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.Namespace",
):
    '''A ROS resource type:  ``ALIYUN::SAE::Namespace``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAE::Namespace``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        '''Properties for defining a ``ALIYUN::SAE::Namespace``.

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
    '''A ROS template type:  ``ALIYUN::SAE::Application``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAE::Application``.

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
        "app_description": "appDescription",
        "command": "command",
        "command_args": "commandArgs",
        "custom_host_alias": "customHostAlias",
        "deploy": "deploy",
        "edas_container_version": "edasContainerVersion",
        "envs": "envs",
        "image_url": "imageUrl",
        "jar_start_args": "jarStartArgs",
        "jar_start_options": "jarStartOptions",
        "jdk": "jdk",
        "liveness": "liveness",
        "mount_desc": "mountDesc",
        "mount_host": "mountHost",
        "nas_id": "nasId",
        "package_url": "packageUrl",
        "package_version": "packageVersion",
        "post_start": "postStart",
        "pre_stop": "preStop",
        "readiness": "readiness",
        "security_group_id": "securityGroupId",
        "sls_configs": "slsConfigs",
        "tags": "tags",
        "timezone": "timezone",
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
        app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosApplication.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAE::Application``.

        :param app_name: 
        :param cpu: 
        :param memory: 
        :param namespace_id: 
        :param package_type: 
        :param replicas: 
        :param app_description: 
        :param command: 
        :param command_args: 
        :param custom_host_alias: 
        :param deploy: 
        :param edas_container_version: 
        :param envs: 
        :param image_url: 
        :param jar_start_args: 
        :param jar_start_options: 
        :param jdk: 
        :param liveness: 
        :param mount_desc: 
        :param mount_host: 
        :param nas_id: 
        :param package_url: 
        :param package_version: 
        :param post_start: 
        :param pre_stop: 
        :param readiness: 
        :param security_group_id: 
        :param sls_configs: 
        :param tags: 
        :param timezone: 
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
            check_type(argname="argument app_description", value=app_description, expected_type=type_hints["app_description"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument command_args", value=command_args, expected_type=type_hints["command_args"])
            check_type(argname="argument custom_host_alias", value=custom_host_alias, expected_type=type_hints["custom_host_alias"])
            check_type(argname="argument deploy", value=deploy, expected_type=type_hints["deploy"])
            check_type(argname="argument edas_container_version", value=edas_container_version, expected_type=type_hints["edas_container_version"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument jar_start_args", value=jar_start_args, expected_type=type_hints["jar_start_args"])
            check_type(argname="argument jar_start_options", value=jar_start_options, expected_type=type_hints["jar_start_options"])
            check_type(argname="argument jdk", value=jdk, expected_type=type_hints["jdk"])
            check_type(argname="argument liveness", value=liveness, expected_type=type_hints["liveness"])
            check_type(argname="argument mount_desc", value=mount_desc, expected_type=type_hints["mount_desc"])
            check_type(argname="argument mount_host", value=mount_host, expected_type=type_hints["mount_host"])
            check_type(argname="argument nas_id", value=nas_id, expected_type=type_hints["nas_id"])
            check_type(argname="argument package_url", value=package_url, expected_type=type_hints["package_url"])
            check_type(argname="argument package_version", value=package_version, expected_type=type_hints["package_version"])
            check_type(argname="argument post_start", value=post_start, expected_type=type_hints["post_start"])
            check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            check_type(argname="argument readiness", value=readiness, expected_type=type_hints["readiness"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument sls_configs", value=sls_configs, expected_type=type_hints["sls_configs"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
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
        if app_description is not None:
            self._values["app_description"] = app_description
        if command is not None:
            self._values["command"] = command
        if command_args is not None:
            self._values["command_args"] = command_args
        if custom_host_alias is not None:
            self._values["custom_host_alias"] = custom_host_alias
        if deploy is not None:
            self._values["deploy"] = deploy
        if edas_container_version is not None:
            self._values["edas_container_version"] = edas_container_version
        if envs is not None:
            self._values["envs"] = envs
        if image_url is not None:
            self._values["image_url"] = image_url
        if jar_start_args is not None:
            self._values["jar_start_args"] = jar_start_args
        if jar_start_options is not None:
            self._values["jar_start_options"] = jar_start_options
        if jdk is not None:
            self._values["jdk"] = jdk
        if liveness is not None:
            self._values["liveness"] = liveness
        if mount_desc is not None:
            self._values["mount_desc"] = mount_desc
        if mount_host is not None:
            self._values["mount_host"] = mount_host
        if nas_id is not None:
            self._values["nas_id"] = nas_id
        if package_url is not None:
            self._values["package_url"] = package_url
        if package_version is not None:
            self._values["package_version"] = package_version
        if post_start is not None:
            self._values["post_start"] = post_start
        if pre_stop is not None:
            self._values["pre_stop"] = pre_stop
        if readiness is not None:
            self._values["readiness"] = readiness
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if sls_configs is not None:
            self._values["sls_configs"] = sls_configs
        if tags is not None:
            self._values["tags"] = tags
        if timezone is not None:
            self._values["timezone"] = timezone
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
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appDescription: Application description. No more than 1024 characters.
        '''
        result = self._values.get("app_description")
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
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        '''
        result = self._values.get("envs")
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
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        '''
        result = self._values.get("liveness")
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
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        '''
        result = self._values.get("nas_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        '''
        result = self._values.get("readiness")
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
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: Application time zone. Default Asia/Shanghai.
        '''
        result = self._values.get("timezone")
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


class RosNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosNamespace",
):
    '''A ROS template type:  ``ALIYUN::SAE::Namespace``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAE::Namespace``.

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
        '''Properties for defining a ``ALIYUN::SAE::Namespace``.

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
    '''A ROS template type:  ``ALIYUN::SAE::SlbBinding``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSlbBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAE::SlbBinding``.

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
        '''Properties for defining a ``ALIYUN::SAE::SlbBinding``.

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
    '''A ROS resource type:  ``ALIYUN::SAE::SlbBinding``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SlbBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAE::SlbBinding``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        '''Properties for defining a ``ALIYUN::SAE::SlbBinding``.

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
    "Namespace",
    "NamespaceProps",
    "RosApplication",
    "RosApplicationProps",
    "RosNamespace",
    "RosNamespaceProps",
    "RosSlbBinding",
    "RosSlbBindingProps",
    "SlbBinding",
    "SlbBindingProps",
]

publication.publish()

def _typecheckingstub__f40e4e0dc21b5530d850ac62cc0ec37d92bd5e584281413caabd068c72ee536d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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
    app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosApplication.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__44b73e6612f1a6319f73a995f8bffb83f1292f1b18c622bd85b0038448d726a1(
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

def _typecheckingstub__9829cc7d852a42250c2224cfc57ad1eb6ab6922065482e8945df14694a0282a8(
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

def _typecheckingstub__183d37776b468b778ce55cf09edebe71e639b56fc711fc9e89a1870b63f3c783(
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

def _typecheckingstub__e1c94c35d79244abf1289c00f0f892cae5b6a984884304a1067250ad2de01c74(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__287eea9772792ae58a8e2a137164b8b244ac6bff880bafb14c8d34a5a4f8a818(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af32b8eea2efa3cfa4daba653a2801c5c8ac4a9bec4912c342c2919a3dc67778(
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

def _typecheckingstub__bd51df4a485ca02763e035d9ff22a252dce4e3eef02bf1b218f8c06148846b57(
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
    app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_host_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edas_container_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jar_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    jdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    liveness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_start: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pre_stop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    readiness: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_configs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosApplication.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    war_start_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_container: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
