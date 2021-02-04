"""
## Aliyun ROS SAE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_sae as SAE
```
"""
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from ._jsii import *

import ros_cdk_core


class Application(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.Application",
):
    """A ROS resource type:  ``ALIYUN::SAE::Application``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ApplicationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAE::Application``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Application, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: Creating successful application ID.
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> typing.Any:
        """
        :Attribute: ChangeOrderId: Return to release a single ID, used to query task execution status.
        """
        return jsii.get(self, "attrChangeOrderId")


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
        app_name: builtins.str,
        cpu: jsii.Number,
        memory: jsii.Number,
        namespace_id: builtins.str,
        package_type: builtins.str,
        replicas: jsii.Number,
        app_description: typing.Optional[builtins.str] = None,
        command: typing.Optional[builtins.str] = None,
        command_args: typing.Optional[builtins.str] = None,
        custom_host_alias: typing.Optional[builtins.str] = None,
        deploy: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        edas_container_version: typing.Optional[builtins.str] = None,
        envs: typing.Optional[builtins.str] = None,
        image_url: typing.Optional[builtins.str] = None,
        jar_start_args: typing.Optional[builtins.str] = None,
        jar_start_options: typing.Optional[builtins.str] = None,
        jdk: typing.Optional[builtins.str] = None,
        liveness: typing.Optional[builtins.str] = None,
        mount_desc: typing.Optional[builtins.str] = None,
        mount_host: typing.Optional[builtins.str] = None,
        nas_id: typing.Optional[builtins.str] = None,
        package_url: typing.Optional[builtins.str] = None,
        package_version: typing.Optional[builtins.str] = None,
        post_start: typing.Optional[builtins.str] = None,
        pre_stop: typing.Optional[builtins.str] = None,
        readiness: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        sls_configs: typing.Optional[builtins.str] = None,
        timezone: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        war_start_options: typing.Optional[builtins.str] = None,
        web_container: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAE::Application``.

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
        :param timezone: 
        :param vpc_id: 
        :param v_switch_id: 
        :param war_start_options: 
        :param web_container: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def app_name(self) -> builtins.str:
        """
        :Property: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        """
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return result

    @builtins.property
    def cpu(self) -> jsii.Number:
        """
        :Property: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        """
        result = self._values.get("cpu")
        assert result is not None, "Required property 'cpu' is missing"
        return result

    @builtins.property
    def memory(self) -> jsii.Number:
        """
        :Property: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        """
        result = self._values.get("memory")
        assert result is not None, "Required property 'memory' is missing"
        return result

    @builtins.property
    def namespace_id(self) -> builtins.str:
        """
        :Property:

        namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        Namespace can interface to obtain from DescribeNamespaceList.
        """
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return result

    @builtins.property
    def package_type(self) -> builtins.str:
        """
        :Property: packageType: Application package type. Support FatJar, War, Image.
        """
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return result

    @builtins.property
    def replicas(self) -> jsii.Number:
        """
        :Property: replicas: The initial number of instances.
        """
        result = self._values.get("replicas")
        assert result is not None, "Required property 'replicas' is missing"
        return result

    @builtins.property
    def app_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: appDescription: Application description. No more than 1024 characters.
        """
        result = self._values.get("app_description")
        return result

    @builtins.property
    def command(self) -> typing.Optional[builtins.str]:
        """
        :Property: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        """
        result = self._values.get("command")
        return result

    @builtins.property
    def command_args(self) -> typing.Optional[builtins.str]:
        """
        :Property: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        """
        result = self._values.get("command_args")
        return result

    @builtins.property
    def custom_host_alias(self) -> typing.Optional[builtins.str]:
        """
        :Property: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        """
        result = self._values.get("custom_host_alias")
        return result

    @builtins.property
    def deploy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deploy: Whether deployed immediately take effect, the default is false.
        """
        result = self._values.get("deploy")
        return result

    @builtins.property
    def edas_container_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: edasContainerVersion: EDAS pandora runtime environment used by the application.
        """
        result = self._values.get("edas_container_version")
        return result

    @builtins.property
    def envs(self) -> typing.Optional[builtins.str]:
        """
        :Property: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        """
        result = self._values.get("envs")
        return result

    @builtins.property
    def image_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        """
        result = self._values.get("image_url")
        return result

    @builtins.property
    def jar_start_args(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        """
        result = self._values.get("jar_start_args")
        return result

    @builtins.property
    def jar_start_options(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        """
        result = self._values.get("jar_start_options")
        return result

    @builtins.property
    def jdk(self) -> typing.Optional[builtins.str]:
        """
        :Property: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        """
        result = self._values.get("jdk")
        return result

    @builtins.property
    def liveness(self) -> typing.Optional[builtins.str]:
        """
        :Property: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        """
        result = self._values.get("liveness")
        return result

    @builtins.property
    def mount_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: mountDesc: Mount Description
        """
        result = self._values.get("mount_desc")
        return result

    @builtins.property
    def mount_host(self) -> typing.Optional[builtins.str]:
        """
        :Property: mountHost: nas mount point in the application of vpc.
        """
        result = self._values.get("mount_host")
        return result

    @builtins.property
    def nas_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        """
        result = self._values.get("nas_id")
        return result

    @builtins.property
    def package_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        """
        result = self._values.get("package_url")
        return result

    @builtins.property
    def package_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        """
        result = self._values.get("package_version")
        return result

    @builtins.property
    def post_start(self) -> typing.Optional[builtins.str]:
        """
        :Property: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
        """
        result = self._values.get("post_start")
        return result

    @builtins.property
    def pre_stop(self) -> typing.Optional[builtins.str]:
        """
        :Property: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
        """
        result = self._values.get("pre_stop")
        return result

    @builtins.property
    def readiness(self) -> typing.Optional[builtins.str]:
        """
        :Property: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        """
        result = self._values.get("readiness")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Security group ID.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def sls_configs(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsConfigs: Log collection configuration file
        """
        result = self._values.get("sls_configs")
        return result

    @builtins.property
    def timezone(self) -> typing.Optional[builtins.str]:
        """
        :Property: timezone: Application time zone. Default Asia/Shanghai.
        """
        result = self._values.get("timezone")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def war_start_options(self) -> typing.Optional[builtins.str]:
        """
        :: " start
        :Property: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
        """
        result = self._values.get("war_start_options")
        return result

    @builtins.property
    def web_container(self) -> typing.Optional[builtins.str]:
        """
        :Property: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        """
        result = self._values.get("web_container")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespace(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.Namespace",
):
    """A ROS resource type:  ``ALIYUN::SAE::Namespace``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NamespaceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAE::Namespace``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Namespace, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> typing.Any:
        """
        :Attribute: NamespaceId: Namespace ID
        """
        return jsii.get(self, "attrNamespaceId")


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
        namespace_id: builtins.str,
        namespace_name: builtins.str,
        namespace_description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAE::Namespace``.

        :param namespace_id: 
        :param namespace_name: 
        :param namespace_description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "namespace_id": namespace_id,
            "namespace_name": namespace_name,
        }
        if namespace_description is not None:
            self._values["namespace_description"] = namespace_description

    @builtins.property
    def namespace_id(self) -> builtins.str:
        """
        :Property: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        """
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return result

    @builtins.property
    def namespace_name(self) -> builtins.str:
        """
        :Property: namespaceName: Namespace name
        """
        result = self._values.get("namespace_name")
        assert result is not None, "Required property 'namespace_name' is missing"
        return result

    @builtins.property
    def namespace_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: namespaceDescription: Namespace description
        """
        result = self._values.get("namespace_description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplication(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosApplication",
):
    """A ROS template type:  ``ALIYUN::SAE::Application``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosApplicationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAE::Application``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosApplication, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: Creating successful application ID.
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> typing.Any:
        """
        :Attribute: ChangeOrderId: Return to release a single ID, used to query task execution status.
        """
        return jsii.get(self, "attrChangeOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appName")
    def app_name(self) -> builtins.str:
        """
        :Property: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        """
        return jsii.get(self, "appName")

    @app_name.setter # type: ignore
    def app_name(self, value: builtins.str) -> None:
        jsii.set(self, "appName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cpu")
    def cpu(self) -> jsii.Number:
        """
        :Property: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        """
        return jsii.get(self, "cpu")

    @cpu.setter # type: ignore
    def cpu(self, value: jsii.Number) -> None:
        jsii.set(self, "cpu", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="memory")
    def memory(self) -> jsii.Number:
        """
        :Property: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        """
        return jsii.get(self, "memory")

    @memory.setter # type: ignore
    def memory(self, value: jsii.Number) -> None:
        jsii.set(self, "memory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(self) -> builtins.str:
        """
        :Property:

        namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        Namespace can interface to obtain from DescribeNamespaceList.
        """
        return jsii.get(self, "namespaceId")

    @namespace_id.setter # type: ignore
    def namespace_id(self, value: builtins.str) -> None:
        jsii.set(self, "namespaceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="packageType")
    def package_type(self) -> builtins.str:
        """
        :Property: packageType: Application package type. Support FatJar, War, Image.
        """
        return jsii.get(self, "packageType")

    @package_type.setter # type: ignore
    def package_type(self, value: builtins.str) -> None:
        jsii.set(self, "packageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="replicas")
    def replicas(self) -> jsii.Number:
        """
        :Property: replicas: The initial number of instances.
        """
        return jsii.get(self, "replicas")

    @replicas.setter # type: ignore
    def replicas(self, value: jsii.Number) -> None:
        jsii.set(self, "replicas", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appDescription")
    def app_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: appDescription: Application description. No more than 1024 characters.
        """
        return jsii.get(self, "appDescription")

    @app_description.setter # type: ignore
    def app_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "appDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="command")
    def command(self) -> typing.Optional[builtins.str]:
        """
        :Property: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        """
        return jsii.get(self, "command")

    @command.setter # type: ignore
    def command(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "command", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="commandArgs")
    def command_args(self) -> typing.Optional[builtins.str]:
        """
        :Property: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        """
        return jsii.get(self, "commandArgs")

    @command_args.setter # type: ignore
    def command_args(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "commandArgs", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="customHostAlias")
    def custom_host_alias(self) -> typing.Optional[builtins.str]:
        """
        :Property: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        """
        return jsii.get(self, "customHostAlias")

    @custom_host_alias.setter # type: ignore
    def custom_host_alias(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "customHostAlias", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deploy")
    def deploy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deploy: Whether deployed immediately take effect, the default is false.
        """
        return jsii.get(self, "deploy")

    @deploy.setter # type: ignore
    def deploy(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deploy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="edasContainerVersion")
    def edas_container_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: edasContainerVersion: EDAS pandora runtime environment used by the application.
        """
        return jsii.get(self, "edasContainerVersion")

    @edas_container_version.setter # type: ignore
    def edas_container_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "edasContainerVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="envs")
    def envs(self) -> typing.Optional[builtins.str]:
        """
        :Property: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        """
        return jsii.get(self, "envs")

    @envs.setter # type: ignore
    def envs(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "envs", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageUrl")
    def image_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        """
        return jsii.get(self, "imageUrl")

    @image_url.setter # type: ignore
    def image_url(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "imageUrl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="jarStartArgs")
    def jar_start_args(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        """
        return jsii.get(self, "jarStartArgs")

    @jar_start_args.setter # type: ignore
    def jar_start_args(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "jarStartArgs", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="jarStartOptions")
    def jar_start_options(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        """
        return jsii.get(self, "jarStartOptions")

    @jar_start_options.setter # type: ignore
    def jar_start_options(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "jarStartOptions", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="jdk")
    def jdk(self) -> typing.Optional[builtins.str]:
        """
        :Property: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        """
        return jsii.get(self, "jdk")

    @jdk.setter # type: ignore
    def jdk(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "jdk", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="liveness")
    def liveness(self) -> typing.Optional[builtins.str]:
        """
        :Property: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        """
        return jsii.get(self, "liveness")

    @liveness.setter # type: ignore
    def liveness(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "liveness", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mountDesc")
    def mount_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: mountDesc: Mount Description
        """
        return jsii.get(self, "mountDesc")

    @mount_desc.setter # type: ignore
    def mount_desc(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mountDesc", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mountHost")
    def mount_host(self) -> typing.Optional[builtins.str]:
        """
        :Property: mountHost: nas mount point in the application of vpc.
        """
        return jsii.get(self, "mountHost")

    @mount_host.setter # type: ignore
    def mount_host(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mountHost", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="nasId")
    def nas_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        """
        return jsii.get(self, "nasId")

    @nas_id.setter # type: ignore
    def nas_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "nasId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="packageUrl")
    def package_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        """
        return jsii.get(self, "packageUrl")

    @package_url.setter # type: ignore
    def package_url(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "packageUrl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="packageVersion")
    def package_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        """
        return jsii.get(self, "packageVersion")

    @package_version.setter # type: ignore
    def package_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "packageVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="postStart")
    def post_start(self) -> typing.Optional[builtins.str]:
        """
        :Property: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
        """
        return jsii.get(self, "postStart")

    @post_start.setter # type: ignore
    def post_start(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "postStart", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="preStop")
    def pre_stop(self) -> typing.Optional[builtins.str]:
        """
        :Property: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
        """
        return jsii.get(self, "preStop")

    @pre_stop.setter # type: ignore
    def pre_stop(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "preStop", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="readiness")
    def readiness(self) -> typing.Optional[builtins.str]:
        """
        :Property: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        """
        return jsii.get(self, "readiness")

    @readiness.setter # type: ignore
    def readiness(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "readiness", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Security group ID.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsConfigs")
    def sls_configs(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsConfigs: Log collection configuration file
        """
        return jsii.get(self, "slsConfigs")

    @sls_configs.setter # type: ignore
    def sls_configs(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "slsConfigs", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timezone")
    def timezone(self) -> typing.Optional[builtins.str]:
        """
        :Property: timezone: Application time zone. Default Asia/Shanghai.
        """
        return jsii.get(self, "timezone")

    @timezone.setter # type: ignore
    def timezone(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "timezone", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="warStartOptions")
    def war_start_options(self) -> typing.Optional[builtins.str]:
        """
        :: " start
        :Property: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
        """
        return jsii.get(self, "warStartOptions")

    @war_start_options.setter # type: ignore
    def war_start_options(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "warStartOptions", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="webContainer")
    def web_container(self) -> typing.Optional[builtins.str]:
        """
        :Property: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        """
        return jsii.get(self, "webContainer")

    @web_container.setter # type: ignore
    def web_container(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "webContainer", value)


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
        app_name: builtins.str,
        cpu: jsii.Number,
        memory: jsii.Number,
        namespace_id: builtins.str,
        package_type: builtins.str,
        replicas: jsii.Number,
        app_description: typing.Optional[builtins.str] = None,
        command: typing.Optional[builtins.str] = None,
        command_args: typing.Optional[builtins.str] = None,
        custom_host_alias: typing.Optional[builtins.str] = None,
        deploy: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        edas_container_version: typing.Optional[builtins.str] = None,
        envs: typing.Optional[builtins.str] = None,
        image_url: typing.Optional[builtins.str] = None,
        jar_start_args: typing.Optional[builtins.str] = None,
        jar_start_options: typing.Optional[builtins.str] = None,
        jdk: typing.Optional[builtins.str] = None,
        liveness: typing.Optional[builtins.str] = None,
        mount_desc: typing.Optional[builtins.str] = None,
        mount_host: typing.Optional[builtins.str] = None,
        nas_id: typing.Optional[builtins.str] = None,
        package_url: typing.Optional[builtins.str] = None,
        package_version: typing.Optional[builtins.str] = None,
        post_start: typing.Optional[builtins.str] = None,
        pre_stop: typing.Optional[builtins.str] = None,
        readiness: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        sls_configs: typing.Optional[builtins.str] = None,
        timezone: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        war_start_options: typing.Optional[builtins.str] = None,
        web_container: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAE::Application``.

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
        :param timezone: 
        :param vpc_id: 
        :param v_switch_id: 
        :param war_start_options: 
        :param web_container: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def app_name(self) -> builtins.str:
        """
        :Property: appName: Application Name. Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
        """
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return result

    @builtins.property
    def cpu(self) -> jsii.Number:
        """
        :Property: cpu: Each instance of the CPU required, in units of milli core, can not be zero. Currently only supports fixed specifications instance type.
        """
        result = self._values.get("cpu")
        assert result is not None, "Required property 'cpu' is missing"
        return result

    @builtins.property
    def memory(self) -> jsii.Number:
        """
        :Property: memory: Each instance of the required memory, in units of MB, can not be zero. Currently only supports fixed specifications instance type.
        """
        result = self._values.get("memory")
        assert result is not None, "Required property 'memory' is missing"
        return result

    @builtins.property
    def namespace_id(self) -> builtins.str:
        """
        :Property:

        namespaceId: EDAS namespace corresponding to ID. Canada supports only the name of the scribe lowercase namespace must begin with a letter.
        Namespace can interface to obtain from DescribeNamespaceList.
        """
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return result

    @builtins.property
    def package_type(self) -> builtins.str:
        """
        :Property: packageType: Application package type. Support FatJar, War, Image.
        """
        result = self._values.get("package_type")
        assert result is not None, "Required property 'package_type' is missing"
        return result

    @builtins.property
    def replicas(self) -> jsii.Number:
        """
        :Property: replicas: The initial number of instances.
        """
        result = self._values.get("replicas")
        assert result is not None, "Required property 'replicas' is missing"
        return result

    @builtins.property
    def app_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: appDescription: Application description. No more than 1024 characters.
        """
        result = self._values.get("app_description")
        return result

    @builtins.property
    def command(self) -> typing.Optional[builtins.str]:
        """
        :Property: command: Mirroring the start command. The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
        """
        result = self._values.get("command")
        return result

    @builtins.property
    def command_args(self) -> typing.Optional[builtins.str]:
        """
        :Property: commandArgs: Mirroring the start command parameters. Parameters required for the start-command. For example: [ "1d"]
        """
        result = self._values.get("command_args")
        return result

    @builtins.property
    def custom_host_alias(self) -> typing.Optional[builtins.str]:
        """
        :Property: customHostAlias: Custom mapping host vessel. For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
        """
        result = self._values.get("custom_host_alias")
        return result

    @builtins.property
    def deploy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deploy: Whether deployed immediately take effect, the default is false.
        """
        result = self._values.get("deploy")
        return result

    @builtins.property
    def edas_container_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: edasContainerVersion: EDAS pandora runtime environment used by the application.
        """
        result = self._values.get("edas_container_version")
        return result

    @builtins.property
    def envs(self) -> typing.Optional[builtins.str]:
        """
        :Property: envs: Container environment variable parameters. For example: [{ "name": "envtmp", "value": "0"}]
        """
        result = self._values.get("envs")
        return result

    @builtins.property
    def image_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageUrl: Mirroring address. Image only type of application can be configured to mirror address.
        """
        result = self._values.get("image_url")
        return result

    @builtins.property
    def jar_start_args(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        jarStartArgs: Jar package startup application parameters. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        """
        result = self._values.get("jar_start_args")
        return result

    @builtins.property
    def jar_start_options(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        jarStartOptions: Jar start the application package option. Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
        $ JarStartArgs
        """
        result = self._values.get("jar_start_options")
        return result

    @builtins.property
    def jdk(self) -> typing.Optional[builtins.str]:
        """
        :Property: jdk: Deployment of JDK version of the package depends on. Mirroring not supported.
        """
        result = self._values.get("jdk")
        return result

    @builtins.property
    def liveness(self) -> typing.Optional[builtins.str]:
        """
        :Property: liveness: Container health check, health check fails container will be killed and recovery. Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
        """
        result = self._values.get("liveness")
        return result

    @builtins.property
    def mount_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: mountDesc: Mount Description
        """
        result = self._values.get("mount_desc")
        return result

    @builtins.property
    def mount_host(self) -> typing.Optional[builtins.str]:
        """
        :Property: mountHost: nas mount point in the application of vpc.
        """
        result = self._values.get("mount_host")
        return result

    @builtins.property
    def nas_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: nasId: Mount the NAS ID, you must be in the same region and cluster. It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
        """
        result = self._values.get("nas_id")
        return result

    @builtins.property
    def package_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: packageUrl: Deployment packages address. Only FatJar War or the type of application can be configured to deploy packet address.
        """
        result = self._values.get("package_url")
        return result

    @builtins.property
    def package_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: packageVersion: The version number of the deployed package, War FatJar type required. Please customize it meaning.
        """
        result = self._values.get("package_version")
        return result

    @builtins.property
    def post_start(self) -> typing.Optional[builtins.str]:
        """
        :Property: postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}
        """
        result = self._values.get("post_start")
        return result

    @builtins.property
    def pre_stop(self) -> typing.Optional[builtins.str]:
        """
        :Property: preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}
        """
        result = self._values.get("pre_stop")
        return result

    @builtins.property
    def readiness(self) -> typing.Optional[builtins.str]:
        """
        :Property: readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
        """
        result = self._values.get("readiness")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Security group ID.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def sls_configs(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsConfigs: Log collection configuration file
        """
        result = self._values.get("sls_configs")
        return result

    @builtins.property
    def timezone(self) -> typing.Optional[builtins.str]:
        """
        :Property: timezone: Application time zone. Default Asia/Shanghai.
        """
        result = self._values.get("timezone")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: EDAS namespace corresponding VPC. In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: Application examples where the elastic card virtual switch. The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def war_start_options(self) -> typing.Optional[builtins.str]:
        """
        :: " start
        :Property: warStartOptions: War Start the application package option. Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$
        """
        result = self._values.get("war_start_options")
        return result

    @builtins.property
    def web_container(self) -> typing.Optional[builtins.str]:
        """
        :Property: webContainer: Tomcat deployment of the package depends on the version. Mirroring not supported.
        """
        result = self._values.get("web_container")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosNamespace",
):
    """A ROS template type:  ``ALIYUN::SAE::Namespace``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNamespaceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAE::Namespace``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosNamespace, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> typing.Any:
        """
        :Attribute: NamespaceId: Namespace ID
        """
        return jsii.get(self, "attrNamespaceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(self) -> builtins.str:
        """
        :Property: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        """
        return jsii.get(self, "namespaceId")

    @namespace_id.setter # type: ignore
    def namespace_id(self, value: builtins.str) -> None:
        jsii.set(self, "namespaceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="namespaceName")
    def namespace_name(self) -> builtins.str:
        """
        :Property: namespaceName: Namespace name
        """
        return jsii.get(self, "namespaceName")

    @namespace_name.setter # type: ignore
    def namespace_name(self, value: builtins.str) -> None:
        jsii.set(self, "namespaceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="namespaceDescription")
    def namespace_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: namespaceDescription: Namespace description
        """
        return jsii.get(self, "namespaceDescription")

    @namespace_description.setter # type: ignore
    def namespace_description(self, value: typing.Optional[builtins.str]) -> None:
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
        namespace_id: builtins.str,
        namespace_name: builtins.str,
        namespace_description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAE::Namespace``.

        :param namespace_id: 
        :param namespace_name: 
        :param namespace_description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "namespace_id": namespace_id,
            "namespace_name": namespace_name,
        }
        if namespace_description is not None:
            self._values["namespace_description"] = namespace_description

    @builtins.property
    def namespace_id(self) -> builtins.str:
        """
        :Property: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        """
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return result

    @builtins.property
    def namespace_name(self) -> builtins.str:
        """
        :Property: namespaceName: Namespace name
        """
        result = self._values.get("namespace_name")
        assert result is not None, "Required property 'namespace_name' is missing"
        return result

    @builtins.property
    def namespace_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: namespaceDescription: Namespace description
        """
        result = self._values.get("namespace_description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSlbBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.RosSlbBinding",
):
    """A ROS template type:  ``ALIYUN::SAE::SlbBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSlbBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAE::SlbBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSlbBinding, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: Successful application deployment target ID
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> typing.Any:
        """
        :Attribute: ChangeOrderId: Return to release a single ID, used to query task execution status.
        """
        return jsii.get(self, "attrChangeOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appId")
    def app_id(self) -> builtins.str:
        """
        :Property: appId: Successful application deployment target ID
        """
        return jsii.get(self, "appId")

    @app_id.setter # type: ignore
    def app_id(self, value: builtins.str) -> None:
        jsii.set(self, "appId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internet")
    def internet(self) -> typing.Optional[builtins.str]:
        """
        :Property: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        """
        return jsii.get(self, "internet")

    @internet.setter # type: ignore
    def internet(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internet", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetSlbId")
    def internet_slb_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        """
        return jsii.get(self, "internetSlbId")

    @internet_slb_id.setter # type: ignore
    def internet_slb_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetSlbId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="intranet")
    def intranet(self) -> typing.Optional[builtins.str]:
        """
        :Property: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        """
        return jsii.get(self, "intranet")

    @intranet.setter # type: ignore
    def intranet(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "intranet", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="intranetSlbId")
    def intranet_slb_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        """
        return jsii.get(self, "intranetSlbId")

    @intranet_slb_id.setter # type: ignore
    def intranet_slb_id(self, value: typing.Optional[builtins.str]) -> None:
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
        app_id: builtins.str,
        internet: typing.Optional[builtins.str] = None,
        internet_slb_id: typing.Optional[builtins.str] = None,
        intranet: typing.Optional[builtins.str] = None,
        intranet_slb_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAE::SlbBinding``.

        :param app_id: 
        :param internet: 
        :param internet_slb_id: 
        :param intranet: 
        :param intranet_slb_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def app_id(self) -> builtins.str:
        """
        :Property: appId: Successful application deployment target ID
        """
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return result

    @builtins.property
    def internet(self) -> typing.Optional[builtins.str]:
        """
        :Property: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        """
        result = self._values.get("internet")
        return result

    @builtins.property
    def internet_slb_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        """
        result = self._values.get("internet_slb_id")
        return result

    @builtins.property
    def intranet(self) -> typing.Optional[builtins.str]:
        """
        :Property: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        """
        result = self._values.get("intranet")
        return result

    @builtins.property
    def intranet_slb_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        """
        result = self._values.get("intranet_slb_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSlbBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SlbBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.SlbBinding",
):
    """A ROS resource type:  ``ALIYUN::SAE::SlbBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SlbBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAE::SlbBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SlbBinding, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: Successful application deployment target ID
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> typing.Any:
        """
        :Attribute: ChangeOrderId: Return to release a single ID, used to query task execution status.
        """
        return jsii.get(self, "attrChangeOrderId")


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
        app_id: builtins.str,
        internet: typing.Optional[builtins.str] = None,
        internet_slb_id: typing.Optional[builtins.str] = None,
        intranet: typing.Optional[builtins.str] = None,
        intranet_slb_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAE::SlbBinding``.

        :param app_id: 
        :param internet: 
        :param internet_slb_id: 
        :param intranet: 
        :param intranet_slb_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def app_id(self) -> builtins.str:
        """
        :Property: appId: Successful application deployment target ID
        """
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return result

    @builtins.property
    def internet(self) -> typing.Optional[builtins.str]:
        """
        :Property: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        """
        result = self._values.get("internet")
        return result

    @builtins.property
    def internet_slb_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        """
        result = self._values.get("internet_slb_id")
        return result

    @builtins.property
    def intranet(self) -> typing.Optional[builtins.str]:
        """
        :Property: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        """
        result = self._values.get("intranet")
        return result

    @builtins.property
    def intranet_slb_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        """
        result = self._values.get("intranet_slb_id")
        return result

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
