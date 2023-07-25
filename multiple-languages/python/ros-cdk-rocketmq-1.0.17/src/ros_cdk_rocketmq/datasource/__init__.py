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


class Groups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.Groups",
):
    '''A ROS resource type:  ``DATASOURCE::ROCKETMQ::Groups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["GroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ROCKETMQ::Groups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2d2351f75d4f1dc4a4edee8ad2786ddd4f7ac1c51dd401dce494fe1a93f8163)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrGroups")
    def attr_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Groups: The list of groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.GroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "group_type": "groupType",
        "instance_id": "instanceId",
    },
)
class GroupsProps:
    def __init__(
        self,
        *,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ROCKETMQ::Groups``.

        :param group_name: Property groupName: GroupName.
        :param group_type: Property groupType: GroupType.
        :param instance_id: Property instanceId: InstanceId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__789448f175b9a065240c5c42b1b86d9b25eb825ff9dfa3977b2d6a0d0c15d489)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: GroupName.'''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupType: GroupType.'''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.Instances",
):
    '''A ROS resource type:  ``DATASOURCE::ROCKETMQ::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ROCKETMQ::Instances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__691a5eb253711f16694fea4a9d937c3e1a2da99fee442e2df65366134ba6a909)
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
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class InstancesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::ROCKETMQ::Instances``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.RosGroups",
):
    '''A ROS template type:  ``DATASOURCE::ROCKETMQ::Groups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ROCKETMQ::Groups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__937e2843f4f93afc56741b71f0096f64e163b4edca5032c094f4a9f43c61a669)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a3263bca68df0a5e1096945f242315a6dc20db4c71ad271fd763baae484ad81f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupNames: The list of group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrGroups")
    def attr_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Groups: The list of groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e20f9424660cfc45e6ca8f2144094e5222383e17445f0c96f50f346865a19ed5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: GroupName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b905db5c8e898e98b4033f00acfe07a5d87bd96e5d85fc278da7f0fa5709f11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupType: GroupType
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0186aeb9476d8265df030b11d92c329cca838bbe599628a230e6acc39ac705af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: InstanceId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3734d4b561c65e144c1902412da792d086f2902213d11855a4c4c1f52487f991)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.RosGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "group_type": "groupType",
        "instance_id": "instanceId",
    },
)
class RosGroupsProps:
    def __init__(
        self,
        *,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ROCKETMQ::Groups``.

        :param group_name: 
        :param group_type: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9d89b2787064da35a57993f3b84eeea83938773e9a1eca002b992d9d8e100aa)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: GroupName
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupType: GroupType
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.RosInstances",
):
    '''A ROS template type:  ``DATASOURCE::ROCKETMQ::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ROCKETMQ::Instances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c91ed62f362b24e0e7210a9c20b41c34d218e6d3387dd8c7303821e9a0e67bf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f3c474240342f5006516a7a814c0502e350b3e5a5fe2d2c6e36823bdeb891142)
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
            type_hints = typing.get_type_hints(_typecheckingstub__08797fa14f524dd9fec1689db374688d06bf8d28d94532d77d43906102b5b23d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosInstancesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::ROCKETMQ::Instances``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopics(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.RosTopics",
):
    '''A ROS template type:  ``DATASOURCE::ROCKETMQ::Topics``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTopicsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ROCKETMQ::Topics``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b66904a88aa8ada59472968a4dd7d15bf60379e7756fc08bafe2b5c5aa4e9f27)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3069182481c76c5598d23376f31d5c01202f0534cb6dc4e1e4418a72b0f5b5b3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicNames")
    def attr_topic_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicNames: The list of topic names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicNames"))

    @builtins.property
    @jsii.member(jsii_name="attrTopics")
    def attr_topics(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Topics: The list of topics.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopics"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5ef5409829c140fe7cbce88f0a46262745597c0dc9310b2b64d270d74d23eff7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: InstanceId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bc2f5e5d4efd5fd218d3ca51d90c71d3f3ce4ce5d5810b2e2bdfed40a51e3a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="topicName")
    def topic_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: topicName: TopicName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f017e09f817047dc84212f873a6320c766bf2a62968691874ff13f1883c61d24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.RosTopicsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "topic_name": "topicName"},
)
class RosTopicsProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        topic_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ROCKETMQ::Topics``.

        :param instance_id: 
        :param topic_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7afcf1463aae3d510f62296d7f2b764663e7bce5674c43e0b039a54d1ec40f62)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if topic_name is not None:
            self._values["topic_name"] = topic_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: topicName: TopicName
        '''
        result = self._values.get("topic_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topics(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.Topics",
):
    '''A ROS resource type:  ``DATASOURCE::ROCKETMQ::Topics``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["TopicsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ROCKETMQ::Topics``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39aba04a09096fd09597f2c3ca656fcffac47cca39601ee3060c17535b48a33f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTopicNames")
    def attr_topic_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TopicNames: The list of topic names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicNames"))

    @builtins.property
    @jsii.member(jsii_name="attrTopics")
    def attr_topics(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Topics: The list of topics.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopics"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.datasource.TopicsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "topic_name": "topicName"},
)
class TopicsProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        topic_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ROCKETMQ::Topics``.

        :param instance_id: Property instanceId: InstanceId.
        :param topic_name: Property topicName: TopicName.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78fc09f0194a7fd8e6d45af782758359552724de40b72716dbc19dd2290f3beb)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if topic_name is not None:
            self._values["topic_name"] = topic_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property topicName: TopicName.'''
        result = self._values.get("topic_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TopicsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Groups",
    "GroupsProps",
    "Instances",
    "InstancesProps",
    "RosGroups",
    "RosGroupsProps",
    "RosInstances",
    "RosInstancesProps",
    "RosTopics",
    "RosTopicsProps",
    "Topics",
    "TopicsProps",
]

publication.publish()

def _typecheckingstub__d2d2351f75d4f1dc4a4edee8ad2786ddd4f7ac1c51dd401dce494fe1a93f8163(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[GroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__789448f175b9a065240c5c42b1b86d9b25eb825ff9dfa3977b2d6a0d0c15d489(
    *,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__691a5eb253711f16694fea4a9d937c3e1a2da99fee442e2df65366134ba6a909(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__937e2843f4f93afc56741b71f0096f64e163b4edca5032c094f4a9f43c61a669(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3263bca68df0a5e1096945f242315a6dc20db4c71ad271fd763baae484ad81f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e20f9424660cfc45e6ca8f2144094e5222383e17445f0c96f50f346865a19ed5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b905db5c8e898e98b4033f00acfe07a5d87bd96e5d85fc278da7f0fa5709f11(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0186aeb9476d8265df030b11d92c329cca838bbe599628a230e6acc39ac705af(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3734d4b561c65e144c1902412da792d086f2902213d11855a4c4c1f52487f991(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9d89b2787064da35a57993f3b84eeea83938773e9a1eca002b992d9d8e100aa(
    *,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c91ed62f362b24e0e7210a9c20b41c34d218e6d3387dd8c7303821e9a0e67bf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3c474240342f5006516a7a814c0502e350b3e5a5fe2d2c6e36823bdeb891142(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08797fa14f524dd9fec1689db374688d06bf8d28d94532d77d43906102b5b23d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b66904a88aa8ada59472968a4dd7d15bf60379e7756fc08bafe2b5c5aa4e9f27(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTopicsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3069182481c76c5598d23376f31d5c01202f0534cb6dc4e1e4418a72b0f5b5b3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ef5409829c140fe7cbce88f0a46262745597c0dc9310b2b64d270d74d23eff7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bc2f5e5d4efd5fd218d3ca51d90c71d3f3ce4ce5d5810b2e2bdfed40a51e3a6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f017e09f817047dc84212f873a6320c766bf2a62968691874ff13f1883c61d24(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7afcf1463aae3d510f62296d7f2b764663e7bce5674c43e0b039a54d1ec40f62(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    topic_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39aba04a09096fd09597f2c3ca656fcffac47cca39601ee3060c17535b48a33f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[TopicsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78fc09f0194a7fd8e6d45af782758359552724de40b72716dbc19dd2290f3beb(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    topic_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
