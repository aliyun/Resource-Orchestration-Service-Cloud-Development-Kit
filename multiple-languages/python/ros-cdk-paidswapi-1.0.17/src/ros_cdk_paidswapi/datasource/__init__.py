import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidswapi.datasource.Instances",
):
    '''A ROS resource type:  ``DATASOURCE::PaiDswApi::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::PaiDswApi::Instances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcfc81baaa29ca9fca167d106ce999dabec23a90547835647472b04d05d617bb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of instance IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Instances: The list of instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidswapi.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "accessibility": "accessibility",
        "instance_id": "instanceId",
        "instance_name": "instanceName",
        "workspace_id": "workspaceId",
    },
)
class InstancesProps:
    def __init__(
        self,
        *,
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::PaiDswApi::Instances``.

        :param accessibility: Property accessibility: Whether the workspace is visible to others.
        :param instance_id: Property instanceId: The first ID of the resource.
        :param instance_name: Property instanceName: The instance name.
        :param workspace_id: Property workspaceId: The Id of the workspace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16d4d40fa9a56fa0a4f22e3f3f62e5a6123e52bc0b20763feb77b2dcc33467f9)
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessibility: Whether the workspace is visible to others.'''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The first ID of the resource.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The instance name.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspaceId: The Id of the workspace.'''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidswapi.datasource.RosInstances",
):
    '''A ROS template type:  ``DATASOURCE::PaiDswApi::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::PaiDswApi::Instances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d862e58b8b8b927f95968a9db5bd60ed6d482be73ae2f06ce1f557dc9dcc648)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a09f9b029b212386836896f10919253454308f1b6fc52366f64df42638688d8e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The list of instance IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__76f2f6b5e37676c539780b6f0f4a4742d9a1184a39f9cb6817a3787c9bb85ded)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accessibility")
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessibility: Whether the workspace is visible to others.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessibility"))

    @accessibility.setter
    def accessibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cb17eebb32c32b9d08fc66489f24bd8c56f49463818b70bcfb83e2e232819cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessibility", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The first ID of the resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44419752219e0135c53d30b7100b8d8f3b4b0088806c4c81121567f97662c399)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The instance name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9b90cf45f21bf60b55f99e255222e86a5ccf0414ecd3cae2f60c12c9804e79a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The Id of the workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57f6216af20ff36f59d10a2b63528baf39b556e6fdcf8818d5fff37e86d50c4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidswapi.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "accessibility": "accessibility",
        "instance_id": "instanceId",
        "instance_name": "instanceName",
        "workspace_id": "workspaceId",
    },
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::PaiDswApi::Instances``.

        :param accessibility: 
        :param instance_id: 
        :param instance_name: 
        :param workspace_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c891543697d38d639547e7b6c90c682bf1fdda0fd4a92b95abc07ff801d29a92)
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessibility: Whether the workspace is visible to others.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The first ID of the resource.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The instance name.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The Id of the workspace.
        '''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instances",
    "InstancesProps",
    "RosInstances",
    "RosInstancesProps",
]

publication.publish()

def _typecheckingstub__dcfc81baaa29ca9fca167d106ce999dabec23a90547835647472b04d05d617bb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16d4d40fa9a56fa0a4f22e3f3f62e5a6123e52bc0b20763feb77b2dcc33467f9(
    *,
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d862e58b8b8b927f95968a9db5bd60ed6d482be73ae2f06ce1f557dc9dcc648(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a09f9b029b212386836896f10919253454308f1b6fc52366f64df42638688d8e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76f2f6b5e37676c539780b6f0f4a4742d9a1184a39f9cb6817a3787c9bb85ded(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cb17eebb32c32b9d08fc66489f24bd8c56f49463818b70bcfb83e2e232819cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44419752219e0135c53d30b7100b8d8f3b4b0088806c4c81121567f97662c399(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9b90cf45f21bf60b55f99e255222e86a5ccf0414ecd3cae2f60c12c9804e79a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57f6216af20ff36f59d10a2b63528baf39b556e6fdcf8818d5fff37e86d50c4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c891543697d38d639547e7b6c90c682bf1fdda0fd4a92b95abc07ff801d29a92(
    *,
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
