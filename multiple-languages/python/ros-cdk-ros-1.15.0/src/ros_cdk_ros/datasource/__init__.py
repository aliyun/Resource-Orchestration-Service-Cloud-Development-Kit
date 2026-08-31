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


@jsii.interface(jsii_type="@alicloud/ros-cdk-ros.datasource.IStackGroups")
class IStackGroups(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``StackGroups``.'''

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupNames")
    def attr_stack_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupNames: The list of stack group names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStackGroups")
    def attr_stack_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroups: The list of stack groups.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StackGroupsProps":
        ...


class _IStackGroupsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``StackGroups``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ros.datasource.IStackGroups"

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupNames")
    def attr_stack_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupNames: The list of stack group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroups")
    def attr_stack_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroups: The list of stack groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StackGroupsProps":
        return typing.cast("StackGroupsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStackGroups).__jsii_proxy_class__ = lambda : _IStackGroupsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ros.datasource.IStackInstance")
class IStackInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``StackInstance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The account id of the stack.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDriftDetectionTime")
    def attr_drift_detection_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Outputs: The outputs of the stack instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterOverrides")
    def attr_parameter_overrides(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterOverrides: Override parameter list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRdFolderId")
    def attr_rd_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RdFolderId: The resource folder ID of the resource directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionId: The region id of the stack.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStackDriftStatus")
    def attr_stack_drift_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupId")
    def attr_stack_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupId: The resource stack group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupName")
    def attr_stack_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupName: The resource stack group name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStackId")
    def attr_stack_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackId: The stack id of stack instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Status: Resource stack status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStatusReason")
    def attr_status_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StatusReason: Status reason description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StackInstanceProps":
        ...


class _IStackInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``StackInstance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ros.datasource.IStackInstance"

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The account id of the stack.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDriftDetectionTime")
    def attr_drift_detection_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDriftDetectionTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Outputs: The outputs of the stack instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterOverrides")
    def attr_parameter_overrides(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterOverrides: Override parameter list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterOverrides"))

    @builtins.property
    @jsii.member(jsii_name="attrRdFolderId")
    def attr_rd_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RdFolderId: The resource folder ID of the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRdFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionId: The region id of the stack.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrStackDriftStatus")
    def attr_stack_drift_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackDriftStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupId")
    def attr_stack_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupId: The resource stack group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupName")
    def attr_stack_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupName: The resource stack group name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrStackId")
    def attr_stack_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackId: The stack id of stack instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackId"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Status: Resource stack status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusReason")
    def attr_status_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StatusReason: Status reason description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStatusReason"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StackInstanceProps":
        return typing.cast("StackInstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStackInstance).__jsii_proxy_class__ = lambda : _IStackInstanceProxy


class RosStackGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.datasource.RosStackGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ROS::StackGroups``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``StackGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosStackGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2ae2d42868fda0c7550ae53a0bbe83ca3e636809e42026286f9b7ecfc596202)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4d841b6d2b2b6ae23539fc1a7938f5e79cd014e28b7df8d91f70b9976ea1b045)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupNames")
    def attr_stack_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StackGroupNames: The list of stack group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStackGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroups")
    def attr_stack_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StackGroups: The list of stack groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStackGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b0bc7ff1fcaed2083480afb2d46ffaae95f346d1e50b0f824ba6bbf5fde8bac6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ddfd6a464d3fb6b980eaa7511c496d1d81ea66fbe29ee7d81c50800c7f850e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c2be02c9a16dff463c560b5df80c0f93cb7e4d18e0d32af287dcaedc8c63576)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.datasource.RosStackGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosStackGroupsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosStackGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups

        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54ff5f6723b6c90e49c52c6f6d2c56809617122219eb06f8cada5df183caf3fd)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStackGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStackInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.datasource.RosStackInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ROS::StackInstance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``StackInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosStackInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c3eb1de51099ba905ae08001c7bec1fdbd0a7c56f41c636f62470352f59718e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4f07f4f6a7d43a5e498728e619e833fc1cfecf998052e9cf3908889958ac099d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountId: The account id of the stack.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDriftDetectionTime")
    def attr_drift_detection_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDriftDetectionTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Outputs: The outputs of the stack instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterOverrides")
    def attr_parameter_overrides(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterOverrides: Override parameter list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterOverrides"))

    @builtins.property
    @jsii.member(jsii_name="attrRdFolderId")
    def attr_rd_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RdFolderId: The resource folder ID of the resource directory.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRdFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionId: The region id of the stack.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrStackDriftStatus")
    def attr_stack_drift_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStackDriftStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupId")
    def attr_stack_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StackGroupId: The resource stack group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStackGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupName")
    def attr_stack_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StackGroupName: The resource stack group name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStackGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrStackId")
    def attr_stack_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StackId: The stack id of stack instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStackId"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Status: Resource stack status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusReason")
    def attr_status_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StatusReason: Status reason description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatusReason"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ff4b64b3c48a0c669620486c64f482de12576ba30732689dda0065af52a398c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="stackGroupName")
    def stack_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        stackGroupName: Resource stack group name. Names are unique within a single region.
        The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "stackGroupName"))

    @stack_group_name.setter
    def stack_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__882b0cbc633efcf36989caab58cb5e90bfa234540f903a8a25877508025cfb6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "stackGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="stackInstanceAccountId")
    def stack_instance_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        stackInstanceAccountId: The target account ID to which the resource stack belongs.
        In the self-service management permission mode, the account is an Alibaba Cloud account.
        In service management permission mode, this account is a member account of the resource directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "stackInstanceAccountId"))

    @stack_instance_account_id.setter
    def stack_instance_account_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4806dd2d802fe7ded06c07448fe1da3fc4e45a1557487bd17f9d5604dde2b27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "stackInstanceAccountId", value)

    @builtins.property
    @jsii.member(jsii_name="stackInstanceRegionId")
    def stack_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: stackInstanceRegionId: The region to which the resource stack belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "stackInstanceRegionId"))

    @stack_instance_region_id.setter
    def stack_instance_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b23f22c45c70912fa72ffd08a9e7e34647bd21bafb1dc2958d7b6aa1fd6ed4f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "stackInstanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="outputOption")
    def output_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: outputOption: Whether to return the Outputs parameter resource stack output list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "outputOption"))

    @output_option.setter
    def output_option(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11c4152c6925040beac96f8d6376bae6939d1b0dcf78e8b6cbdeb7f6ddad4d67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "outputOption", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__017eb75acfc97d471f43e0a2997572f49c1c95d2718e3f8cdec0c2f21ad0f9a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.datasource.RosStackInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "stack_group_name": "stackGroupName",
        "stack_instance_account_id": "stackInstanceAccountId",
        "stack_instance_region_id": "stackInstanceRegionId",
        "output_option": "outputOption",
        "refresh_options": "refreshOptions",
    },
)
class RosStackInstanceProps:
    def __init__(
        self,
        *,
        stack_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        stack_instance_account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        stack_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        output_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosStackInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance

        :param stack_group_name: 
        :param stack_instance_account_id: 
        :param stack_instance_region_id: 
        :param output_option: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7490abbf6fcd7fd11e004014ac993ef6f95d40f1cc3dcb682eb06ce18794fab)
            check_type(argname="argument stack_group_name", value=stack_group_name, expected_type=type_hints["stack_group_name"])
            check_type(argname="argument stack_instance_account_id", value=stack_instance_account_id, expected_type=type_hints["stack_instance_account_id"])
            check_type(argname="argument stack_instance_region_id", value=stack_instance_region_id, expected_type=type_hints["stack_instance_region_id"])
            check_type(argname="argument output_option", value=output_option, expected_type=type_hints["output_option"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "stack_group_name": stack_group_name,
            "stack_instance_account_id": stack_instance_account_id,
            "stack_instance_region_id": stack_instance_region_id,
        }
        if output_option is not None:
            self._values["output_option"] = output_option
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def stack_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        stackGroupName: Resource stack group name. Names are unique within a single region.
        The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
        '''
        result = self._values.get("stack_group_name")
        assert result is not None, "Required property 'stack_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def stack_instance_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        stackInstanceAccountId: The target account ID to which the resource stack belongs.
        In the self-service management permission mode, the account is an Alibaba Cloud account.
        In service management permission mode, this account is a member account of the resource directory.
        '''
        result = self._values.get("stack_instance_account_id")
        assert result is not None, "Required property 'stack_instance_account_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def stack_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: stackInstanceRegionId: The region to which the resource stack belongs.
        '''
        result = self._values.get("stack_instance_region_id")
        assert result is not None, "Required property 'stack_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def output_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: outputOption: Whether to return the Outputs parameter resource stack output list.
        '''
        result = self._values.get("output_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStackInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IStackGroups)
class StackGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.datasource.StackGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ROS::StackGroups``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosStackGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["StackGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65d5793478989f3b3ffd698e6df218c212f0d8504f04d13c9f4e08ac7f7c09d1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupNames")
    def attr_stack_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupNames: The list of stack group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroups")
    def attr_stack_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroups: The list of stack groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StackGroupsProps":
        return typing.cast("StackGroupsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5efebaf02a5fee991b0fcf2b669cf92d73b1fdaf8fdb6b52ff9b42fe17fdc8d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62e35cbe918d52421d979471ff821c3d9501f2036268e5457ec74047d3d3cd83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c976a04091d50ada340e23d7cee805da492cb5de3fd9d6b83e607315b1981a87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.datasource.StackGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class StackGroupsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``StackGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__408d785dbd35fcdff03a27769ca427a84e09af7f8c05ed01a24784bea246efbb)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StackGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IStackInstance)
class StackInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.datasource.StackInstance",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ROS::StackInstance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosStackInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["StackInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aa6468db9d8433aea326b4f7cdef282aaea6ec50cf4779f9636de7908a9982d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The account id of the stack.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDriftDetectionTime")
    def attr_drift_detection_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDriftDetectionTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Outputs: The outputs of the stack instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterOverrides")
    def attr_parameter_overrides(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterOverrides: Override parameter list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterOverrides"))

    @builtins.property
    @jsii.member(jsii_name="attrRdFolderId")
    def attr_rd_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RdFolderId: The resource folder ID of the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRdFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionId: The region id of the stack.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrStackDriftStatus")
    def attr_stack_drift_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackDriftStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupId")
    def attr_stack_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupId: The resource stack group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrStackGroupName")
    def attr_stack_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackGroupName: The resource stack group name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrStackId")
    def attr_stack_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StackId: The stack id of stack instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStackId"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Status: Resource stack status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusReason")
    def attr_status_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StatusReason: Status reason description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStatusReason"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StackInstanceProps":
        return typing.cast("StackInstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fff8dddfe117c484e5f23cce6690dfa6d590000dc32fdee0fdf912706c2cb8c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__393d36ee0a0f957eb59e777fc250d2a69a65a3b50416161b7968a572cfe5dcd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1d460855304cc475f0ccdbf488825dcbfc5524d5c55882d3c78b5db352785de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.datasource.StackInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "stack_group_name": "stackGroupName",
        "stack_instance_account_id": "stackInstanceAccountId",
        "stack_instance_region_id": "stackInstanceRegionId",
        "output_option": "outputOption",
        "refresh_options": "refreshOptions",
    },
)
class StackInstanceProps:
    def __init__(
        self,
        *,
        stack_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        stack_instance_account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        stack_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        output_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``StackInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance

        :param stack_group_name: Property stackGroupName: Resource stack group name. Names are unique within a single region. The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
        :param stack_instance_account_id: Property stackInstanceAccountId: The target account ID to which the resource stack belongs. In the self-service management permission mode, the account is an Alibaba Cloud account. In service management permission mode, this account is a member account of the resource directory.
        :param stack_instance_region_id: Property stackInstanceRegionId: The region to which the resource stack belongs.
        :param output_option: Property outputOption: Whether to return the Outputs parameter resource stack output list.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__847f8f318df2da22ad3ecd9f70ec969363123f8b17288b518b004694b6d86151)
            check_type(argname="argument stack_group_name", value=stack_group_name, expected_type=type_hints["stack_group_name"])
            check_type(argname="argument stack_instance_account_id", value=stack_instance_account_id, expected_type=type_hints["stack_instance_account_id"])
            check_type(argname="argument stack_instance_region_id", value=stack_instance_region_id, expected_type=type_hints["stack_instance_region_id"])
            check_type(argname="argument output_option", value=output_option, expected_type=type_hints["output_option"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "stack_group_name": stack_group_name,
            "stack_instance_account_id": stack_instance_account_id,
            "stack_instance_region_id": stack_instance_region_id,
        }
        if output_option is not None:
            self._values["output_option"] = output_option
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def stack_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property stackGroupName: Resource stack group name.

        Names are unique within a single region.
        The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
        '''
        result = self._values.get("stack_group_name")
        assert result is not None, "Required property 'stack_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def stack_instance_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property stackInstanceAccountId: The target account ID to which the resource stack belongs.

        In the self-service management permission mode, the account is an Alibaba Cloud account.
        In service management permission mode, this account is a member account of the resource directory.
        '''
        result = self._values.get("stack_instance_account_id")
        assert result is not None, "Required property 'stack_instance_account_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def stack_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property stackInstanceRegionId: The region to which the resource stack belongs.'''
        result = self._values.get("stack_instance_region_id")
        assert result is not None, "Required property 'stack_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def output_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property outputOption: Whether to return the Outputs parameter resource stack output list.'''
        result = self._values.get("output_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StackInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IStackGroups",
    "IStackInstance",
    "RosStackGroups",
    "RosStackGroupsProps",
    "RosStackInstance",
    "RosStackInstanceProps",
    "StackGroups",
    "StackGroupsProps",
    "StackInstance",
    "StackInstanceProps",
]

publication.publish()

def _typecheckingstub__d2ae2d42868fda0c7550ae53a0bbe83ca3e636809e42026286f9b7ecfc596202(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosStackGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d841b6d2b2b6ae23539fc1a7938f5e79cd014e28b7df8d91f70b9976ea1b045(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0bc7ff1fcaed2083480afb2d46ffaae95f346d1e50b0f824ba6bbf5fde8bac6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ddfd6a464d3fb6b980eaa7511c496d1d81ea66fbe29ee7d81c50800c7f850e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c2be02c9a16dff463c560b5df80c0f93cb7e4d18e0d32af287dcaedc8c63576(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54ff5f6723b6c90e49c52c6f6d2c56809617122219eb06f8cada5df183caf3fd(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c3eb1de51099ba905ae08001c7bec1fdbd0a7c56f41c636f62470352f59718e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosStackInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f07f4f6a7d43a5e498728e619e833fc1cfecf998052e9cf3908889958ac099d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff4b64b3c48a0c669620486c64f482de12576ba30732689dda0065af52a398c9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__882b0cbc633efcf36989caab58cb5e90bfa234540f903a8a25877508025cfb6e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4806dd2d802fe7ded06c07448fe1da3fc4e45a1557487bd17f9d5604dde2b27(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b23f22c45c70912fa72ffd08a9e7e34647bd21bafb1dc2958d7b6aa1fd6ed4f5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11c4152c6925040beac96f8d6376bae6939d1b0dcf78e8b6cbdeb7f6ddad4d67(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__017eb75acfc97d471f43e0a2997572f49c1c95d2718e3f8cdec0c2f21ad0f9a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7490abbf6fcd7fd11e004014ac993ef6f95d40f1cc3dcb682eb06ce18794fab(
    *,
    stack_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    stack_instance_account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    stack_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    output_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65d5793478989f3b3ffd698e6df218c212f0d8504f04d13c9f4e08ac7f7c09d1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[StackGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5efebaf02a5fee991b0fcf2b669cf92d73b1fdaf8fdb6b52ff9b42fe17fdc8d1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62e35cbe918d52421d979471ff821c3d9501f2036268e5457ec74047d3d3cd83(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c976a04091d50ada340e23d7cee805da492cb5de3fd9d6b83e607315b1981a87(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__408d785dbd35fcdff03a27769ca427a84e09af7f8c05ed01a24784bea246efbb(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aa6468db9d8433aea326b4f7cdef282aaea6ec50cf4779f9636de7908a9982d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[StackInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fff8dddfe117c484e5f23cce6690dfa6d590000dc32fdee0fdf912706c2cb8c8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__393d36ee0a0f957eb59e777fc250d2a69a65a3b50416161b7968a572cfe5dcd5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d460855304cc475f0ccdbf488825dcbfc5524d5c55882d3c78b5db352785de(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__847f8f318df2da22ad3ecd9f70ec969363123f8b17288b518b004694b6d86151(
    *,
    stack_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    stack_instance_account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    stack_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    output_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
