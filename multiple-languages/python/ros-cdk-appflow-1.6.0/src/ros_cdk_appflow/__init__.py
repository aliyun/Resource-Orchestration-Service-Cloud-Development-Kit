'''
## Aliyun ROS APPFLOW Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as APPFLOW from '@alicloud/ros-cdk-appflow';
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.FlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "flow_name": "flowName",
        "flow_desc": "flowDesc",
        "flow_id": "flowId",
        "flow_status": "flowStatus",
        "launch_flow": "launchFlow",
        "parameters": "parameters",
        "template": "template",
        "template_id": "templateId",
    },
)
class FlowProps:
    def __init__(
        self,
        *,
        flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Flow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow

        :param flow_name: Property flowName: The name of the flow.
        :param flow_desc: Property flowDesc: The description of the flow.
        :param flow_id: Property flowId: The ID of the flow.
        :param flow_status: Property flowStatus: The status of the flow. Allowed values: Enable: enable flow Disable: disable flow
        :param launch_flow: Property launchFlow: Whether to launch the flow.
        :param parameters: Property parameters: The parameters of the flow.
        :param template: Property template: The template of the flow.
        :param template_id: Property templateId: The ID of the template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bf8478ab424bf238e522a89500f2a35e0bb210265d3040ed7fad06d98ecb6d5)
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
            check_type(argname="argument flow_desc", value=flow_desc, expected_type=type_hints["flow_desc"])
            check_type(argname="argument flow_id", value=flow_id, expected_type=type_hints["flow_id"])
            check_type(argname="argument flow_status", value=flow_status, expected_type=type_hints["flow_status"])
            check_type(argname="argument launch_flow", value=launch_flow, expected_type=type_hints["launch_flow"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_name": flow_name,
        }
        if flow_desc is not None:
            self._values["flow_desc"] = flow_desc
        if flow_id is not None:
            self._values["flow_id"] = flow_id
        if flow_status is not None:
            self._values["flow_status"] = flow_status
        if launch_flow is not None:
            self._values["launch_flow"] = launch_flow
        if parameters is not None:
            self._values["parameters"] = parameters
        if template is not None:
            self._values["template"] = template
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property flowName: The name of the flow.'''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowDesc: The description of the flow.'''
        result = self._values.get("flow_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowId: The ID of the flow.'''
        result = self._values.get("flow_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowStatus: The status of the flow.

        Allowed values:
        Enable: enable flow
        Disable: disable flow
        '''
        result = self._values.get("flow_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property launchFlow: Whether to launch the flow.'''
        result = self._values.get("launch_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: The parameters of the flow.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property template: The template of the flow.'''
        result = self._values.get("template")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateId: The ID of the template.'''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IFlow")
class IFlow(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Flow``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FlowId: The ID of the flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WebhookAddress: The webhook address of the flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FlowProps:
        ...


class _IFlowProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Flow``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IFlow"

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FlowId: The ID of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WebhookAddress: The webhook address of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWebhookAddress"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FlowProps:
        return typing.cast(FlowProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFlow).__jsii_proxy_class__ = lambda : _IFlowProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IUserAuthConfig")
class IUserAuthConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserAuthConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfig: AuthConfig.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigId: The id of the config.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigProps":
        ...


class _IUserAuthConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserAuthConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IUserAuthConfig"

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfig: AuthConfig.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigId: The id of the config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigProps":
        return typing.cast("UserAuthConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserAuthConfig).__jsii_proxy_class__ = lambda : _IUserAuthConfigProxy


class RosFlow(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosFlow",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::Flow``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Flow`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcd5333a9fa6e20d553c18313bdc169aac29c033df792a0468e5e4bbd99d78a7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__651ce28a24b6f94576ce431f5bc0be42a2900b7b4e08217c81a4bce1f164d08d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowId: The ID of the flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WebhookAddress: The webhook address of the flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWebhookAddress"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8664815cfdd70d92c008c5819781cf479fa14c065bfd5ebf37671fda90e802da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowName")
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowName: The name of the flow.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "flowName"))

    @flow_name.setter
    def flow_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72428697193a9d015173be75b52f1aff86291ed0ccf3a2857d8b9a41569d02c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowName", value)

    @builtins.property
    @jsii.member(jsii_name="flowDesc")
    def flow_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowDesc: The description of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowDesc"))

    @flow_desc.setter
    def flow_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3e7136e35ecd7f0a2af2bd84782a1a6ed008d9730293bcbbe1c38760628397d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowDesc", value)

    @builtins.property
    @jsii.member(jsii_name="flowId")
    def flow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowId: The ID of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowId"))

    @flow_id.setter
    def flow_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79e67721d75385c46e5c3add62be32c8f4414a16fbf6a1a044714cf7b0f6b013)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowId", value)

    @builtins.property
    @jsii.member(jsii_name="flowStatus")
    def flow_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        flowStatus: The status of the flow. Allowed values:
        Enable: enable flow
        Disable: disable flow
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowStatus"))

    @flow_status.setter
    def flow_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fad93f058020a1c9bc24464ad91411a8e9276086accc6ca9463c995feda08b37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowStatus", value)

    @builtins.property
    @jsii.member(jsii_name="launchFlow")
    def launch_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: launchFlow: Whether to launch the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "launchFlow"))

    @launch_flow.setter
    def launch_flow(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a3b67e6a5af17c808201586fbce3cf955de429f3f28f18bf462fb60ceaad48e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "launchFlow", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8945f17a71bdd30b4278d5793c686b66bc4071338d255bacde51ac3e768fed51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="template")
    def template(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: template: The template of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "template"))

    @template.setter
    def template(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d758017e90d4e83d911f3e0eee862826a1e46b43e94e6687a49cd5ca8be58b2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "template", value)

    @builtins.property
    @jsii.member(jsii_name="templateId")
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateId"))

    @template_id.setter
    def template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d2d350b9421e52460931a243bd5fc57e81223ea34fdebd8328ffe321d3551fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "flow_name": "flowName",
        "flow_desc": "flowDesc",
        "flow_id": "flowId",
        "flow_status": "flowStatus",
        "launch_flow": "launchFlow",
        "parameters": "parameters",
        "template": "template",
        "template_id": "templateId",
    },
)
class RosFlowProps:
    def __init__(
        self,
        *,
        flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosFlow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow

        :param flow_name: 
        :param flow_desc: 
        :param flow_id: 
        :param flow_status: 
        :param launch_flow: 
        :param parameters: 
        :param template: 
        :param template_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98c0c3da326d201d04cdf1e4a4c3d457a6322f5a9ab19387c1f41c9983d4beca)
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
            check_type(argname="argument flow_desc", value=flow_desc, expected_type=type_hints["flow_desc"])
            check_type(argname="argument flow_id", value=flow_id, expected_type=type_hints["flow_id"])
            check_type(argname="argument flow_status", value=flow_status, expected_type=type_hints["flow_status"])
            check_type(argname="argument launch_flow", value=launch_flow, expected_type=type_hints["launch_flow"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_name": flow_name,
        }
        if flow_desc is not None:
            self._values["flow_desc"] = flow_desc
        if flow_id is not None:
            self._values["flow_id"] = flow_id
        if flow_status is not None:
            self._values["flow_status"] = flow_status
        if launch_flow is not None:
            self._values["launch_flow"] = launch_flow
        if parameters is not None:
            self._values["parameters"] = parameters
        if template is not None:
            self._values["template"] = template
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowName: The name of the flow.
        '''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowDesc: The description of the flow.
        '''
        result = self._values.get("flow_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowId: The ID of the flow.
        '''
        result = self._values.get("flow_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        flowStatus: The status of the flow. Allowed values:
        Enable: enable flow
        Disable: disable flow
        '''
        result = self._values.get("flow_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: launchFlow: Whether to launch the flow.
        '''
        result = self._values.get("launch_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters of the flow.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: template: The template of the flow.
        '''
        result = self._values.get("template")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the template.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserAuthConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosUserAuthConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::UserAuthConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserAuthConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserAuthConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c0c43c2700591a67e2b55928c7fe7ec4848687957aead2cc8c6894280fcef69)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6812231e4f4bc3d3c60f99c5d9935b241eaae8dbb20bc06454e4ab51cce5a326)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthConfig: AuthConfig
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthConfigId: The id of the config.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthConfigId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="authConfig")
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: authConfig: AuthConfig
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "authConfig"))

    @auth_config.setter
    def auth_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6485ece7ac65e1f7323d607489f17ef0f3f133974286bfa747d1a077e7a476e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authConfig", value)

    @builtins.property
    @jsii.member(jsii_name="authConfigName")
    def auth_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: authConfigName: The name of the config.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "authConfigName"))

    @auth_config_name.setter
    def auth_config_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce622a3b773b9138f2e1d396239df9a1f2a9939da6b290d041ef7d669ffa52bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authConfigName", value)

    @builtins.property
    @jsii.member(jsii_name="connectorId")
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectorId: The id of connector.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "connectorId"))

    @connector_id.setter
    def connector_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68d9d5f558e276e40462601db1ca0c570d892e312cf00d3ec1f6909239f4a313)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a2bd2ac881cb1cf2060f30d78f1ec8cbb00fcd08a714b4874104daf24f2a635)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosUserAuthConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "auth_config": "authConfig",
        "auth_config_name": "authConfigName",
        "connector_id": "connectorId",
    },
)
class RosUserAuthConfigProps:
    def __init__(
        self,
        *,
        auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosUserAuthConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig

        :param auth_config: 
        :param auth_config_name: 
        :param connector_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f38045db49f0abdaa5f44e9bd564b51f0117b8a9aa96d60a51a0fbcc21f9d0a)
            check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
            check_type(argname="argument auth_config_name", value=auth_config_name, expected_type=type_hints["auth_config_name"])
            check_type(argname="argument connector_id", value=connector_id, expected_type=type_hints["connector_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auth_config": auth_config,
            "auth_config_name": auth_config_name,
            "connector_id": connector_id,
        }

    @builtins.property
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: authConfig: AuthConfig
        '''
        result = self._values.get("auth_config")
        assert result is not None, "Required property 'auth_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def auth_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: authConfigName: The name of the config.
        '''
        result = self._values.get("auth_config_name")
        assert result is not None, "Required property 'auth_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectorId: The id of connector.
        '''
        result = self._values.get("connector_id")
        assert result is not None, "Required property 'connector_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserAuthConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserAuthConfig)
class UserAuthConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.UserAuthConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::UserAuthConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserAuthConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserAuthConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8b63f92d68cef999e463451c872d3d6e2bef9a96ed21ac2a115b3f09120c4b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfig: AuthConfig.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigId: The id of the config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigProps":
        return typing.cast("UserAuthConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__720732de9927047f1f01cf0612377c75abe6bc05da719c0da9a795eeac49e3fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4c55c5a8481755aafadd51a21ed87da7e11047542cc3a498b6d4aacbe020efe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7619ff89da479018e906ce8943f557480d593fac19dad5f619ed633a0059d1af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.UserAuthConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "auth_config": "authConfig",
        "auth_config_name": "authConfigName",
        "connector_id": "connectorId",
    },
)
class UserAuthConfigProps:
    def __init__(
        self,
        *,
        auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``UserAuthConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig

        :param auth_config: Property authConfig: AuthConfig.
        :param auth_config_name: Property authConfigName: The name of the config.
        :param connector_id: Property connectorId: The id of connector.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39ca36f67b521c4b761741147136393fee37d490608bb2df5371d5a3848755de)
            check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
            check_type(argname="argument auth_config_name", value=auth_config_name, expected_type=type_hints["auth_config_name"])
            check_type(argname="argument connector_id", value=connector_id, expected_type=type_hints["connector_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auth_config": auth_config,
            "auth_config_name": auth_config_name,
            "connector_id": connector_id,
        }

    @builtins.property
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property authConfig: AuthConfig.'''
        result = self._values.get("auth_config")
        assert result is not None, "Required property 'auth_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def auth_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property authConfigName: The name of the config.'''
        result = self._values.get("auth_config_name")
        assert result is not None, "Required property 'auth_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property connectorId: The id of connector.'''
        result = self._values.get("connector_id")
        assert result is not None, "Required property 'connector_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserAuthConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IFlow)
class Flow(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.Flow",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::Flow``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFlow``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[FlowProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a80fc969bbc367ba0486e1fe7c600010709648b686a33360731c9d018dd637a6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FlowId: The ID of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WebhookAddress: The webhook address of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWebhookAddress"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FlowProps:
        return typing.cast(FlowProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89a4c16e8a56f543541fa9ee41d7710faffb145961c811288730007e03e6be9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d206d83ce2aade18f68edb30c48145d221a84b72c1da05e139209aaf3173f20d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0290c16b153c11940f44cbccf58e1cb97cf188f65045544f2c47f1fb9c434183)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Flow",
    "FlowProps",
    "IFlow",
    "IUserAuthConfig",
    "RosFlow",
    "RosFlowProps",
    "RosUserAuthConfig",
    "RosUserAuthConfigProps",
    "UserAuthConfig",
    "UserAuthConfigProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__8bf8478ab424bf238e522a89500f2a35e0bb210265d3040ed7fad06d98ecb6d5(
    *,
    flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcd5333a9fa6e20d553c18313bdc169aac29c033df792a0468e5e4bbd99d78a7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__651ce28a24b6f94576ce431f5bc0be42a2900b7b4e08217c81a4bce1f164d08d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8664815cfdd70d92c008c5819781cf479fa14c065bfd5ebf37671fda90e802da(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72428697193a9d015173be75b52f1aff86291ed0ccf3a2857d8b9a41569d02c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3e7136e35ecd7f0a2af2bd84782a1a6ed008d9730293bcbbe1c38760628397d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79e67721d75385c46e5c3add62be32c8f4414a16fbf6a1a044714cf7b0f6b013(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fad93f058020a1c9bc24464ad91411a8e9276086accc6ca9463c995feda08b37(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a3b67e6a5af17c808201586fbce3cf955de429f3f28f18bf462fb60ceaad48e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8945f17a71bdd30b4278d5793c686b66bc4071338d255bacde51ac3e768fed51(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d758017e90d4e83d911f3e0eee862826a1e46b43e94e6687a49cd5ca8be58b2a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d2d350b9421e52460931a243bd5fc57e81223ea34fdebd8328ffe321d3551fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c0c3da326d201d04cdf1e4a4c3d457a6322f5a9ab19387c1f41c9983d4beca(
    *,
    flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c0c43c2700591a67e2b55928c7fe7ec4848687957aead2cc8c6894280fcef69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserAuthConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6812231e4f4bc3d3c60f99c5d9935b241eaae8dbb20bc06454e4ab51cce5a326(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6485ece7ac65e1f7323d607489f17ef0f3f133974286bfa747d1a077e7a476e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce622a3b773b9138f2e1d396239df9a1f2a9939da6b290d041ef7d669ffa52bf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68d9d5f558e276e40462601db1ca0c570d892e312cf00d3ec1f6909239f4a313(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a2bd2ac881cb1cf2060f30d78f1ec8cbb00fcd08a714b4874104daf24f2a635(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f38045db49f0abdaa5f44e9bd564b51f0117b8a9aa96d60a51a0fbcc21f9d0a(
    *,
    auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8b63f92d68cef999e463451c872d3d6e2bef9a96ed21ac2a115b3f09120c4b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserAuthConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__720732de9927047f1f01cf0612377c75abe6bc05da719c0da9a795eeac49e3fa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4c55c5a8481755aafadd51a21ed87da7e11047542cc3a498b6d4aacbe020efe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7619ff89da479018e906ce8943f557480d593fac19dad5f619ed633a0059d1af(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39ca36f67b521c4b761741147136393fee37d490608bb2df5371d5a3848755de(
    *,
    auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a80fc969bbc367ba0486e1fe7c600010709648b686a33360731c9d018dd637a6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89a4c16e8a56f543541fa9ee41d7710faffb145961c811288730007e03e6be9d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d206d83ce2aade18f68edb30c48145d221a84b72c1da05e139209aaf3173f20d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0290c16b153c11940f44cbccf58e1cb97cf188f65045544f2c47f1fb9c434183(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
