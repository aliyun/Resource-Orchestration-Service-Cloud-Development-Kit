'''
## Aliyun ROS AGENTRUN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as AGENTRUN from '@alicloud/ros-cdk-agentrun';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-agentrun.ITemplate")
class ITemplate(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Template``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTemplateArn")
    def attr_template_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateArn: The ARN of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateName: The name of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplateProps":
        ...


class _ITemplateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Template``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-agentrun.ITemplate"

    @builtins.property
    @jsii.member(jsii_name="attrTemplateArn")
    def attr_template_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateArn: The ARN of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateArn"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateName: The name of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplateProps":
        return typing.cast("TemplateProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITemplate).__jsii_proxy_class__ = lambda : _ITemplateProxy


class RosTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AgentRun::Template``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Template`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__026fa478e0d0824d8ba8202df1c14f6d432626e572979dac55e9c32c1385e15a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cede4111136d5066ec4c801fca7190741c8faa0286d9d2b3d4a06e684c38410c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateArn")
    def attr_template_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateArn: The ARN of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateArn"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateId: The ID of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateName: The name of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__95d0bcaa9b238079a5d864dbaf36a93e7aabcf8f4c86ad1b57dc358592f2d6b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dccfceff7ec5a167a52b2ee1475e8fdfffe5a784da1b07fcc80b13d843ad8a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="allowAnonymousManage")
    def allow_anonymous_manage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allowAnonymousManage: Whether to allow anonymous management.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowAnonymousManage"))

    @allow_anonymous_manage.setter
    def allow_anonymous_manage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e373ffcd63d105d806701037eed8b427f624fc768c457663e0f7d553fac5bfdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowAnonymousManage", value)

    @builtins.property
    @jsii.member(jsii_name="armsConfiguration")
    def arms_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.ArmsConfigurationProperty"]]:
        '''
        :Property: armsConfiguration: The ARMS configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.ArmsConfigurationProperty"]], jsii.get(self, "armsConfiguration"))

    @arms_configuration.setter
    def arms_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.ArmsConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45758d585940a98542f37ebd491151c7a5cbeb898dc1699ae06141b1eb8452ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "armsConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="containerConfiguration")
    def container_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.ContainerConfigurationProperty"]]:
        '''
        :Property: containerConfiguration: The container configuration. Only images based on Browser/Code Interpreter base images are allowed.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.ContainerConfigurationProperty"]], jsii.get(self, "containerConfiguration"))

    @container_configuration.setter
    def container_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.ContainerConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64b90114758b543f14f0eda60013a0482a5d1362be5902a3457fc1e4f95e5daa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="cpu")
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: The CPU resource configuration (unit: cores).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cpu"))

    @cpu.setter
    def cpu(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a25df73fbb1646e7f8928a6983c631040c2f471d75267ee9bfdded6d25e24ecd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpu", value)

    @builtins.property
    @jsii.member(jsii_name="credentialConfiguration")
    def credential_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.CredentialConfigurationProperty"]]:
        '''
        :Property: credentialConfiguration: The credential configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.CredentialConfigurationProperty"]], jsii.get(self, "credentialConfiguration"))

    @credential_configuration.setter
    def credential_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.CredentialConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27333516516d49a79e89121b52bb336c938db8510da2394ee776db3740255325)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "credentialConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22c2c25a5c094db27c7941290a28e80ce845ff0b00ff2218fee408a95d4fa7cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="diskSize")
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskSize: The disk size (unit: MB).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskSize"))

    @disk_size.setter
    def disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69a75d08fee60f145f0ccbe07895cbcaa271eed93b26e3e741181515eb12c6d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskSize", value)

    @builtins.property
    @jsii.member(jsii_name="enableAgent")
    def enable_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAgent: Whether to enable the sandbox agent.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAgent"))

    @enable_agent.setter
    def enable_agent(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca5b08a854e457397509f88f23ebb780a0adc50ee59215b7412b74d44c76dd46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAgent", value)

    @builtins.property
    @jsii.member(jsii_name="environmentVariables")
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variables.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "environmentVariables"))

    @environment_variables.setter
    def environment_variables(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c188f89a07537a9b913efee7ca69d853a52a0bcbb1dc18d57cacb117ce6da98)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentVariables", value)

    @builtins.property
    @jsii.member(jsii_name="executionRoleArn")
    def execution_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: executionRoleArn: The execution role ARN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "executionRoleArn"))

    @execution_role_arn.setter
    def execution_role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d59cb6eaaab51922ee2dcf7b0784b56708e0a2ee3207cd9c57793458ad548e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "executionRoleArn", value)

    @builtins.property
    @jsii.member(jsii_name="logConfiguration")
    def log_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.LogConfigurationProperty"]]:
        '''
        :Property: logConfiguration: The log configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.LogConfigurationProperty"]], jsii.get(self, "logConfiguration"))

    @log_configuration.setter
    def log_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.LogConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f0f295e79da6876004797da1a41e35bbf5ef7ae14d50bbdf2806b2c59bbd076)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="memory")
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memory: The memory resource configuration (unit: MB).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memory"))

    @memory.setter
    def memory(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f70d622a7bb4c94436954e95f0313590dd5f1734114936f22fb47a1da3fdd3b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memory", value)

    @builtins.property
    @jsii.member(jsii_name="nasConfig")
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.NasConfigProperty"]]:
        '''
        :Property: nasConfig: The NAS configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.NasConfigProperty"]], jsii.get(self, "nasConfig"))

    @nas_config.setter
    def nas_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.NasConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5dd1eafce8cd9addaa96181e5a3201ac705a7cfe37515347e60a90d69e39e191)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nasConfig", value)

    @builtins.property
    @jsii.member(jsii_name="networkConfiguration")
    def network_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.NetworkConfigurationProperty"]]:
        '''
        :Property: networkConfiguration: The network configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.NetworkConfigurationProperty"]], jsii.get(self, "networkConfiguration"))

    @network_configuration.setter
    def network_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.NetworkConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05e0c881a32e84d4e507c09f04ee217e05b2750a77f01cf13999004990ffc65c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="ossConfiguration")
    def oss_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.OssConfigurationProperty"]]]]:
        '''
        :Property: ossConfiguration: The OSS configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.OssConfigurationProperty"]]]], jsii.get(self, "ossConfiguration"))

    @oss_configuration.setter
    def oss_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.OssConfigurationProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90fa0b3bfabc3215e7d729a348b0e489f2c8051515c3991af46695d5d2e1cc00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="sandboxIdleTimeoutInSeconds")
    def sandbox_idle_timeout_in_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sandboxIdleTimeoutInSeconds"))

    @sandbox_idle_timeout_in_seconds.setter
    def sandbox_idle_timeout_in_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88690e247c5bfbe12648a5e0d439d7df901361a16d548d4b373061cc13459a4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sandboxIdleTimeoutInSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="templateConfiguration")
    def template_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: templateConfiguration: The template configuration (flexible object structure, varies by templateType).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "templateConfiguration"))

    @template_configuration.setter
    def template_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc851052dbdbc8d3379258262dc023f0361cee25b2a87dede43a1125de4f3d24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="templateType")
    def template_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateType: The type of the template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateType"))

    @template_type.setter
    def template_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b493c817e436f865fb6b277209ce485a2ad463898e50f41e702f7ca3d2375b5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateType", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The workspace ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fefca6328aa2b20382459400a2fda696f6f37de6bb6c7fdf09c01091a6e00d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.ArmsConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "arms_license_key": "armsLicenseKey",
            "enable_arms": "enableArms",
            "cms_workspace": "cmsWorkspace",
        },
    )
    class ArmsConfigurationProperty:
        def __init__(
            self,
            *,
            arms_license_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_arms: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            cms_workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param arms_license_key: 
            :param enable_arms: 
            :param cms_workspace: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dadd60fdeb13240cbb1df363768bf52d66952d0bd3bbe900651a34c27ee475ad)
                check_type(argname="argument arms_license_key", value=arms_license_key, expected_type=type_hints["arms_license_key"])
                check_type(argname="argument enable_arms", value=enable_arms, expected_type=type_hints["enable_arms"])
                check_type(argname="argument cms_workspace", value=cms_workspace, expected_type=type_hints["cms_workspace"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "arms_license_key": arms_license_key,
                "enable_arms": enable_arms,
            }
            if cms_workspace is not None:
                self._values["cms_workspace"] = cms_workspace

        @builtins.property
        def arms_license_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: armsLicenseKey: The license key for ARMS.
            '''
            result = self._values.get("arms_license_key")
            assert result is not None, "Required property 'arms_license_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_arms(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: enableArms: Whether to enable ARMS.
            '''
            result = self._values.get("enable_arms")
            assert result is not None, "Required property 'enable_arms' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cms_workspace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cmsWorkspace: The ID of the CMS 2.0 workspace.
            '''
            result = self._values.get("cms_workspace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ArmsConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.ContainerConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "image_registry_type": "imageRegistryType",
            "acr_instance_id": "acrInstanceId",
            "command": "command",
            "image": "image",
            "port": "port",
        },
    )
    class ContainerConfigurationProperty:
        def __init__(
            self,
            *,
            image_registry_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            image: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param image_registry_type: 
            :param acr_instance_id: 
            :param command: 
            :param image: 
            :param port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__febae01a75a3fe33dbf10d4fae3df380071606805a2a047fae0dcf5ced74a6c8)
                check_type(argname="argument image_registry_type", value=image_registry_type, expected_type=type_hints["image_registry_type"])
                check_type(argname="argument acr_instance_id", value=acr_instance_id, expected_type=type_hints["acr_instance_id"])
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "image_registry_type": image_registry_type,
            }
            if acr_instance_id is not None:
                self._values["acr_instance_id"] = acr_instance_id
            if command is not None:
                self._values["command"] = command
            if image is not None:
                self._values["image"] = image
            if port is not None:
                self._values["port"] = port

        @builtins.property
        def image_registry_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: imageRegistryType: The image registry type.
            '''
            result = self._values.get("image_registry_type")
            assert result is not None, "Required property 'image_registry_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def acr_instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: acrInstanceId: The ACR instance ID.
            '''
            result = self._values.get("acr_instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: command: The container command.
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def image(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: image: The container image address.
            '''
            result = self._values.get("image")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The container port.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ContainerConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.CredentialConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"credential_name": "credentialName"},
    )
    class CredentialConfigurationProperty:
        def __init__(
            self,
            *,
            credential_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param credential_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ed4e3ed7c6e89f558ea291099f9dd641d9d04429b115eb177d4f846bf7024d96)
                check_type(argname="argument credential_name", value=credential_name, expected_type=type_hints["credential_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "credential_name": credential_name,
            }

        @builtins.property
        def credential_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: credentialName: The credential name.
            '''
            result = self._values.get("credential_name")
            assert result is not None, "Required property 'credential_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CredentialConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.LogConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"logstore": "logstore", "project": "project"},
    )
    class LogConfigurationProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param logstore: 
            :param project: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f1d424b6b897aa62c314ad86c284f85896800c2b977bcf4099bc04ae451c8028)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "logstore": logstore,
                "project": project,
            }

        @builtins.property
        def logstore(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logstore: The SLS logstore name.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: project: The SLS project name.
            '''
            result = self._values.get("project")
            assert result is not None, "Required property 'project' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LogConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.MountPointsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable_tls": "enableTls",
            "mount_dir": "mountDir",
            "server_addr": "serverAddr",
        },
    )
    class MountPointsProperty:
        def __init__(
            self,
            *,
            enable_tls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_addr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_tls: 
            :param mount_dir: 
            :param server_addr: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__096dc4d73dddd92867b7e20f62cbb0ae8c0058752aac5dc5e6725670e6deb22b)
                check_type(argname="argument enable_tls", value=enable_tls, expected_type=type_hints["enable_tls"])
                check_type(argname="argument mount_dir", value=mount_dir, expected_type=type_hints["mount_dir"])
                check_type(argname="argument server_addr", value=server_addr, expected_type=type_hints["server_addr"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable_tls is not None:
                self._values["enable_tls"] = enable_tls
            if mount_dir is not None:
                self._values["mount_dir"] = mount_dir
            if server_addr is not None:
                self._values["server_addr"] = server_addr

        @builtins.property
        def enable_tls(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableTls: Whether to enable TLS.
            '''
            result = self._values.get("enable_tls")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountDir: The mount directory.
            '''
            result = self._values.get("mount_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_addr(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverAddr: The NAS server address.
            '''
            result = self._values.get("server_addr")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MountPointsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.NasConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "group_id": "groupId",
            "mount_points": "mountPoints",
            "user_id": "userId",
        },
    )
    class NasConfigProperty:
        def __init__(
            self,
            *,
            group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_points: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTemplate.MountPointsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param group_id: 
            :param mount_points: 
            :param user_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__54e7f5a695680600192878f184218ca6b300cabfe1117ca59e217371463337f2)
                check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
                check_type(argname="argument mount_points", value=mount_points, expected_type=type_hints["mount_points"])
                check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if group_id is not None:
                self._values["group_id"] = group_id
            if mount_points is not None:
                self._values["mount_points"] = mount_points
            if user_id is not None:
                self._values["user_id"] = user_id

        @builtins.property
        def group_id(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: groupId: The NAS group ID.
            '''
            result = self._values.get("group_id")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_points(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.MountPointsProperty"]]]]:
            '''
            :Property: mountPoints: The NAS mount points.
            '''
            result = self._values.get("mount_points")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTemplate.MountPointsProperty"]]]], result)

        @builtins.property
        def user_id(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userId: The NAS user ID.
            '''
            result = self._values.get("user_id")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NasConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.NetworkConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "network_mode": "networkMode",
            "security_group_id": "securityGroupId",
            "vpc_id": "vpcId",
            "v_switch_ids": "vSwitchIds",
        },
    )
    class NetworkConfigurationProperty:
        def __init__(
            self,
            *,
            network_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param network_mode: 
            :param security_group_id: 
            :param vpc_id: 
            :param v_switch_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fc9d6ac0f665bbb7e48acc1afcc2a6300ee70b2fcb83a5a66bd4460f1f8af6ff)
                check_type(argname="argument network_mode", value=network_mode, expected_type=type_hints["network_mode"])
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "network_mode": network_mode,
            }
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id
            if v_switch_ids is not None:
                self._values["v_switch_ids"] = v_switch_ids

        @builtins.property
        def network_mode(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: networkMode: The network mode.
            '''
            result = self._values.get("network_mode")
            assert result is not None, "Required property 'network_mode' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: The security group ID.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcId: The VPC ID.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: vSwitchIds: The list of vSwitch IDs.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NetworkConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-agentrun.RosTemplate.OssConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "bucket_name": "bucketName",
            "mount_point": "mountPoint",
            "permission": "permission",
            "prefix": "prefix",
            "region": "region",
        },
    )
    class OssConfigurationProperty:
        def __init__(
            self,
            *,
            bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            mount_point: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            permission: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param bucket_name: 
            :param mount_point: 
            :param permission: 
            :param prefix: 
            :param region: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2a037867cd7dd9e20012361f37c7fa4db7b5a58082a58853fafe9957a8e7861f)
                check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
                check_type(argname="argument mount_point", value=mount_point, expected_type=type_hints["mount_point"])
                check_type(argname="argument permission", value=permission, expected_type=type_hints["permission"])
                check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "bucket_name": bucket_name,
                "mount_point": mount_point,
                "permission": permission,
                "prefix": prefix,
                "region": region,
            }

        @builtins.property
        def bucket_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: bucketName: The OSS bucket name.
            '''
            result = self._values.get("bucket_name")
            assert result is not None, "Required property 'bucket_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def mount_point(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: mountPoint: The mount point.
            '''
            result = self._values.get("mount_point")
            assert result is not None, "Required property 'mount_point' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def permission(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: permission: The permission.
            '''
            result = self._values.get("permission")
            assert result is not None, "Required property 'permission' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def prefix(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: prefix: The OSS prefix.
            '''
            result = self._values.get("prefix")
            assert result is not None, "Required property 'prefix' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: region: The region.
            '''
            result = self._values.get("region")
            assert result is not None, "Required property 'region' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OssConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-agentrun.RosTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "allow_anonymous_manage": "allowAnonymousManage",
        "arms_configuration": "armsConfiguration",
        "container_configuration": "containerConfiguration",
        "cpu": "cpu",
        "credential_configuration": "credentialConfiguration",
        "description": "description",
        "disk_size": "diskSize",
        "enable_agent": "enableAgent",
        "environment_variables": "environmentVariables",
        "execution_role_arn": "executionRoleArn",
        "log_configuration": "logConfiguration",
        "memory": "memory",
        "nas_config": "nasConfig",
        "network_configuration": "networkConfiguration",
        "oss_configuration": "ossConfiguration",
        "sandbox_idle_timeout_in_seconds": "sandboxIdleTimeoutInSeconds",
        "template_configuration": "templateConfiguration",
        "template_type": "templateType",
        "workspace_id": "workspaceId",
    },
)
class RosTemplateProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_anonymous_manage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        arms_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ArmsConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        container_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ContainerConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        credential_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.CredentialConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        execution_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.LogConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        network_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NetworkConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        oss_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.OssConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        sandbox_idle_timeout_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template

        :param template_name: 
        :param allow_anonymous_manage: 
        :param arms_configuration: 
        :param container_configuration: 
        :param cpu: 
        :param credential_configuration: 
        :param description: 
        :param disk_size: 
        :param enable_agent: 
        :param environment_variables: 
        :param execution_role_arn: 
        :param log_configuration: 
        :param memory: 
        :param nas_config: 
        :param network_configuration: 
        :param oss_configuration: 
        :param sandbox_idle_timeout_in_seconds: 
        :param template_configuration: 
        :param template_type: 
        :param workspace_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec8a8ce03cee83bea5ad2697b61ec28924a04ebf4a17ddb7b63e7d32f4d80d39)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument allow_anonymous_manage", value=allow_anonymous_manage, expected_type=type_hints["allow_anonymous_manage"])
            check_type(argname="argument arms_configuration", value=arms_configuration, expected_type=type_hints["arms_configuration"])
            check_type(argname="argument container_configuration", value=container_configuration, expected_type=type_hints["container_configuration"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument credential_configuration", value=credential_configuration, expected_type=type_hints["credential_configuration"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument enable_agent", value=enable_agent, expected_type=type_hints["enable_agent"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument execution_role_arn", value=execution_role_arn, expected_type=type_hints["execution_role_arn"])
            check_type(argname="argument log_configuration", value=log_configuration, expected_type=type_hints["log_configuration"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument network_configuration", value=network_configuration, expected_type=type_hints["network_configuration"])
            check_type(argname="argument oss_configuration", value=oss_configuration, expected_type=type_hints["oss_configuration"])
            check_type(argname="argument sandbox_idle_timeout_in_seconds", value=sandbox_idle_timeout_in_seconds, expected_type=type_hints["sandbox_idle_timeout_in_seconds"])
            check_type(argname="argument template_configuration", value=template_configuration, expected_type=type_hints["template_configuration"])
            check_type(argname="argument template_type", value=template_type, expected_type=type_hints["template_type"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_name": template_name,
        }
        if allow_anonymous_manage is not None:
            self._values["allow_anonymous_manage"] = allow_anonymous_manage
        if arms_configuration is not None:
            self._values["arms_configuration"] = arms_configuration
        if container_configuration is not None:
            self._values["container_configuration"] = container_configuration
        if cpu is not None:
            self._values["cpu"] = cpu
        if credential_configuration is not None:
            self._values["credential_configuration"] = credential_configuration
        if description is not None:
            self._values["description"] = description
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if enable_agent is not None:
            self._values["enable_agent"] = enable_agent
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if execution_role_arn is not None:
            self._values["execution_role_arn"] = execution_role_arn
        if log_configuration is not None:
            self._values["log_configuration"] = log_configuration
        if memory is not None:
            self._values["memory"] = memory
        if nas_config is not None:
            self._values["nas_config"] = nas_config
        if network_configuration is not None:
            self._values["network_configuration"] = network_configuration
        if oss_configuration is not None:
            self._values["oss_configuration"] = oss_configuration
        if sandbox_idle_timeout_in_seconds is not None:
            self._values["sandbox_idle_timeout_in_seconds"] = sandbox_idle_timeout_in_seconds
        if template_configuration is not None:
            self._values["template_configuration"] = template_configuration
        if template_type is not None:
            self._values["template_type"] = template_type
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_anonymous_manage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allowAnonymousManage: Whether to allow anonymous management.
        '''
        result = self._values.get("allow_anonymous_manage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def arms_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ArmsConfigurationProperty]]:
        '''
        :Property: armsConfiguration: The ARMS configuration.
        '''
        result = self._values.get("arms_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ArmsConfigurationProperty]], result)

    @builtins.property
    def container_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ContainerConfigurationProperty]]:
        '''
        :Property: containerConfiguration: The container configuration. Only images based on Browser/Code Interpreter base images are allowed.
        '''
        result = self._values.get("container_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ContainerConfigurationProperty]], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: The CPU resource configuration (unit: cores).
        '''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def credential_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.CredentialConfigurationProperty]]:
        '''
        :Property: credentialConfiguration: The credential configuration.
        '''
        result = self._values.get("credential_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.CredentialConfigurationProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the template.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskSize: The disk size (unit: MB).
        '''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAgent: Whether to enable the sandbox agent.
        '''
        result = self._values.get("enable_agent")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variables.
        '''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def execution_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: executionRoleArn: The execution role ARN.
        '''
        result = self._values.get("execution_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.LogConfigurationProperty]]:
        '''
        :Property: logConfiguration: The log configuration.
        '''
        result = self._values.get("log_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.LogConfigurationProperty]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memory: The memory resource configuration (unit: MB).
        '''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NasConfigProperty]]:
        '''
        :Property: nasConfig: The NAS configuration.
        '''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NasConfigProperty]], result)

    @builtins.property
    def network_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NetworkConfigurationProperty]]:
        '''
        :Property: networkConfiguration: The network configuration.
        '''
        result = self._values.get("network_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NetworkConfigurationProperty]], result)

    @builtins.property
    def oss_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.OssConfigurationProperty]]]]:
        '''
        :Property: ossConfiguration: The OSS configuration.
        '''
        result = self._values.get("oss_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.OssConfigurationProperty]]]], result)

    @builtins.property
    def sandbox_idle_timeout_in_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
        '''
        result = self._values.get("sandbox_idle_timeout_in_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: templateConfiguration: The template configuration (flexible object structure, varies by templateType).
        '''
        result = self._values.get("template_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateType: The type of the template.
        '''
        result = self._values.get("template_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The workspace ID.
        '''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITemplate)
class Template(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-agentrun.Template",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AgentRun::Template``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTemplate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__177bd702811be558e94fb14bf69008a932e1ad61196913615d5498640b5d1421)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTemplateArn")
    def attr_template_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateArn: The ARN of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateArn"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateName: The name of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplateProps":
        return typing.cast("TemplateProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36d79331a2090c5def84f13bd274c47b93d8696e71b0772bb72952ddeb86366d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e418a9f3f4466ff5e6cac82faf1bfe393ea2b02f872b08fbef8247e4070ef75b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66e5fad0174b68e2f5421d712505f841728fe32560d8da81644e75e910b28832)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-agentrun.TemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "allow_anonymous_manage": "allowAnonymousManage",
        "arms_configuration": "armsConfiguration",
        "container_configuration": "containerConfiguration",
        "cpu": "cpu",
        "credential_configuration": "credentialConfiguration",
        "description": "description",
        "disk_size": "diskSize",
        "enable_agent": "enableAgent",
        "environment_variables": "environmentVariables",
        "execution_role_arn": "executionRoleArn",
        "log_configuration": "logConfiguration",
        "memory": "memory",
        "nas_config": "nasConfig",
        "network_configuration": "networkConfiguration",
        "oss_configuration": "ossConfiguration",
        "sandbox_idle_timeout_in_seconds": "sandboxIdleTimeoutInSeconds",
        "template_configuration": "templateConfiguration",
        "template_type": "templateType",
        "workspace_id": "workspaceId",
    },
)
class TemplateProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_anonymous_manage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        arms_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ArmsConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        container_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ContainerConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        credential_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.CredentialConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        execution_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.LogConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        network_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NetworkConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        oss_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.OssConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        sandbox_idle_timeout_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Template``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template

        :param template_name: Property templateName: The name of the template.
        :param allow_anonymous_manage: Property allowAnonymousManage: Whether to allow anonymous management.
        :param arms_configuration: Property armsConfiguration: The ARMS configuration.
        :param container_configuration: Property containerConfiguration: The container configuration. Only images based on Browser/Code Interpreter base images are allowed.
        :param cpu: Property cpu: The CPU resource configuration (unit: cores).
        :param credential_configuration: Property credentialConfiguration: The credential configuration.
        :param description: Property description: The description of the template.
        :param disk_size: Property diskSize: The disk size (unit: MB).
        :param enable_agent: Property enableAgent: Whether to enable the sandbox agent.
        :param environment_variables: Property environmentVariables: The environment variables.
        :param execution_role_arn: Property executionRoleArn: The execution role ARN.
        :param log_configuration: Property logConfiguration: The log configuration.
        :param memory: Property memory: The memory resource configuration (unit: MB).
        :param nas_config: Property nasConfig: The NAS configuration.
        :param network_configuration: Property networkConfiguration: The network configuration.
        :param oss_configuration: Property ossConfiguration: The OSS configuration.
        :param sandbox_idle_timeout_in_seconds: Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
        :param template_configuration: Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
        :param template_type: Property templateType: The type of the template.
        :param workspace_id: Property workspaceId: The workspace ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5d734dfa7692c881534615317d938b2173f4ed95abe6ffa0241b6fd7d0e62a9)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument allow_anonymous_manage", value=allow_anonymous_manage, expected_type=type_hints["allow_anonymous_manage"])
            check_type(argname="argument arms_configuration", value=arms_configuration, expected_type=type_hints["arms_configuration"])
            check_type(argname="argument container_configuration", value=container_configuration, expected_type=type_hints["container_configuration"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument credential_configuration", value=credential_configuration, expected_type=type_hints["credential_configuration"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument enable_agent", value=enable_agent, expected_type=type_hints["enable_agent"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument execution_role_arn", value=execution_role_arn, expected_type=type_hints["execution_role_arn"])
            check_type(argname="argument log_configuration", value=log_configuration, expected_type=type_hints["log_configuration"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument network_configuration", value=network_configuration, expected_type=type_hints["network_configuration"])
            check_type(argname="argument oss_configuration", value=oss_configuration, expected_type=type_hints["oss_configuration"])
            check_type(argname="argument sandbox_idle_timeout_in_seconds", value=sandbox_idle_timeout_in_seconds, expected_type=type_hints["sandbox_idle_timeout_in_seconds"])
            check_type(argname="argument template_configuration", value=template_configuration, expected_type=type_hints["template_configuration"])
            check_type(argname="argument template_type", value=template_type, expected_type=type_hints["template_type"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_name": template_name,
        }
        if allow_anonymous_manage is not None:
            self._values["allow_anonymous_manage"] = allow_anonymous_manage
        if arms_configuration is not None:
            self._values["arms_configuration"] = arms_configuration
        if container_configuration is not None:
            self._values["container_configuration"] = container_configuration
        if cpu is not None:
            self._values["cpu"] = cpu
        if credential_configuration is not None:
            self._values["credential_configuration"] = credential_configuration
        if description is not None:
            self._values["description"] = description
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if enable_agent is not None:
            self._values["enable_agent"] = enable_agent
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if execution_role_arn is not None:
            self._values["execution_role_arn"] = execution_role_arn
        if log_configuration is not None:
            self._values["log_configuration"] = log_configuration
        if memory is not None:
            self._values["memory"] = memory
        if nas_config is not None:
            self._values["nas_config"] = nas_config
        if network_configuration is not None:
            self._values["network_configuration"] = network_configuration
        if oss_configuration is not None:
            self._values["oss_configuration"] = oss_configuration
        if sandbox_idle_timeout_in_seconds is not None:
            self._values["sandbox_idle_timeout_in_seconds"] = sandbox_idle_timeout_in_seconds
        if template_configuration is not None:
            self._values["template_configuration"] = template_configuration
        if template_type is not None:
            self._values["template_type"] = template_type
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateName: The name of the template.'''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_anonymous_manage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowAnonymousManage: Whether to allow anonymous management.'''
        result = self._values.get("allow_anonymous_manage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def arms_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ArmsConfigurationProperty]]:
        '''Property armsConfiguration: The ARMS configuration.'''
        result = self._values.get("arms_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ArmsConfigurationProperty]], result)

    @builtins.property
    def container_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ContainerConfigurationProperty]]:
        '''Property containerConfiguration: The container configuration.

        Only images based on Browser/Code Interpreter base images are allowed.
        '''
        result = self._values.get("container_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ContainerConfigurationProperty]], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cpu: The CPU resource configuration (unit: cores).'''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def credential_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.CredentialConfigurationProperty]]:
        '''Property credentialConfiguration: The credential configuration.'''
        result = self._values.get("credential_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.CredentialConfigurationProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the template.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskSize: The disk size (unit: MB).'''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAgent: Whether to enable the sandbox agent.'''
        result = self._values.get("enable_agent")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property environmentVariables: The environment variables.'''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def execution_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property executionRoleArn: The execution role ARN.'''
        result = self._values.get("execution_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.LogConfigurationProperty]]:
        '''Property logConfiguration: The log configuration.'''
        result = self._values.get("log_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.LogConfigurationProperty]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memory: The memory resource configuration (unit: MB).'''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NasConfigProperty]]:
        '''Property nasConfig: The NAS configuration.'''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NasConfigProperty]], result)

    @builtins.property
    def network_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NetworkConfigurationProperty]]:
        '''Property networkConfiguration: The network configuration.'''
        result = self._values.get("network_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NetworkConfigurationProperty]], result)

    @builtins.property
    def oss_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.OssConfigurationProperty]]]]:
        '''Property ossConfiguration: The OSS configuration.'''
        result = self._values.get("oss_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.OssConfigurationProperty]]]], result)

    @builtins.property
    def sandbox_idle_timeout_in_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.'''
        result = self._values.get("sandbox_idle_timeout_in_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).'''
        result = self._values.get("template_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateType: The type of the template.'''
        result = self._values.get("template_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspaceId: The workspace ID.'''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ITemplate",
    "RosTemplate",
    "RosTemplateProps",
    "Template",
    "TemplateProps",
]

publication.publish()

def _typecheckingstub__026fa478e0d0824d8ba8202df1c14f6d432626e572979dac55e9c32c1385e15a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cede4111136d5066ec4c801fca7190741c8faa0286d9d2b3d4a06e684c38410c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95d0bcaa9b238079a5d864dbaf36a93e7aabcf8f4c86ad1b57dc358592f2d6b5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dccfceff7ec5a167a52b2ee1475e8fdfffe5a784da1b07fcc80b13d843ad8a6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e373ffcd63d105d806701037eed8b427f624fc768c457663e0f7d553fac5bfdf(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45758d585940a98542f37ebd491151c7a5cbeb898dc1699ae06141b1eb8452ea(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ArmsConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b90114758b543f14f0eda60013a0482a5d1362be5902a3457fc1e4f95e5daa(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.ContainerConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a25df73fbb1646e7f8928a6983c631040c2f471d75267ee9bfdded6d25e24ecd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27333516516d49a79e89121b52bb336c938db8510da2394ee776db3740255325(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.CredentialConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22c2c25a5c094db27c7941290a28e80ce845ff0b00ff2218fee408a95d4fa7cc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69a75d08fee60f145f0ccbe07895cbcaa271eed93b26e3e741181515eb12c6d9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca5b08a854e457397509f88f23ebb780a0adc50ee59215b7412b74d44c76dd46(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c188f89a07537a9b913efee7ca69d853a52a0bcbb1dc18d57cacb117ce6da98(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d59cb6eaaab51922ee2dcf7b0784b56708e0a2ee3207cd9c57793458ad548e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f0f295e79da6876004797da1a41e35bbf5ef7ae14d50bbdf2806b2c59bbd076(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.LogConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f70d622a7bb4c94436954e95f0313590dd5f1734114936f22fb47a1da3fdd3b5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dd1eafce8cd9addaa96181e5a3201ac705a7cfe37515347e60a90d69e39e191(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NasConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05e0c881a32e84d4e507c09f04ee217e05b2750a77f01cf13999004990ffc65c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.NetworkConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90fa0b3bfabc3215e7d729a348b0e489f2c8051515c3991af46695d5d2e1cc00(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTemplate.OssConfigurationProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88690e247c5bfbe12648a5e0d439d7df901361a16d548d4b373061cc13459a4c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc851052dbdbc8d3379258262dc023f0361cee25b2a87dede43a1125de4f3d24(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b493c817e436f865fb6b277209ce485a2ad463898e50f41e702f7ca3d2375b5d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fefca6328aa2b20382459400a2fda696f6f37de6bb6c7fdf09c01091a6e00d5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dadd60fdeb13240cbb1df363768bf52d66952d0bd3bbe900651a34c27ee475ad(
    *,
    arms_license_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_arms: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    cms_workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__febae01a75a3fe33dbf10d4fae3df380071606805a2a047fae0dcf5ced74a6c8(
    *,
    image_registry_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    image: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed4e3ed7c6e89f558ea291099f9dd641d9d04429b115eb177d4f846bf7024d96(
    *,
    credential_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d424b6b897aa62c314ad86c284f85896800c2b977bcf4099bc04ae451c8028(
    *,
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__096dc4d73dddd92867b7e20f62cbb0ae8c0058752aac5dc5e6725670e6deb22b(
    *,
    enable_tls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_addr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54e7f5a695680600192878f184218ca6b300cabfe1117ca59e217371463337f2(
    *,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_points: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.MountPointsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc9d6ac0f665bbb7e48acc1afcc2a6300ee70b2fcb83a5a66bd4460f1f8af6ff(
    *,
    network_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a037867cd7dd9e20012361f37c7fa4db7b5a58082a58853fafe9957a8e7861f(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mount_point: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec8a8ce03cee83bea5ad2697b61ec28924a04ebf4a17ddb7b63e7d32f4d80d39(
    *,
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_anonymous_manage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    arms_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ArmsConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    container_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ContainerConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    credential_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.CredentialConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    execution_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.LogConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    network_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NetworkConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oss_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.OssConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    sandbox_idle_timeout_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__177bd702811be558e94fb14bf69008a932e1ad61196913615d5498640b5d1421(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36d79331a2090c5def84f13bd274c47b93d8696e71b0772bb72952ddeb86366d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e418a9f3f4466ff5e6cac82faf1bfe393ea2b02f872b08fbef8247e4070ef75b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66e5fad0174b68e2f5421d712505f841728fe32560d8da81644e75e910b28832(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5d734dfa7692c881534615317d938b2173f4ed95abe6ffa0241b6fd7d0e62a9(
    *,
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_anonymous_manage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    arms_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ArmsConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    container_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.ContainerConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    credential_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.CredentialConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    execution_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.LogConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    network_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.NetworkConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oss_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTemplate.OssConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    sandbox_idle_timeout_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
