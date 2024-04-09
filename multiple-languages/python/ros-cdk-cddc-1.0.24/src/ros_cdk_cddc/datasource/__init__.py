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


class DedicatedHostGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CDDC::DedicatedHostGroups``, which is used to query the resources in a dedicated cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDedicatedHostGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DedicatedHostGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd8a5d9027f5e849723c41ab45966c72bea2d216d92a6742c4fc5330c04a9c4d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupIds")
    def attr_dedicated_host_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroups")
    def attr_dedicated_host_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostGroups: The list of dedicated host groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39aacd6e2fdb187ad7840216c53b0dd32e426cf5238902fe795ea81b620c3a1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d72cc38cffa71a4e218b5b284853e80fee10b81ced1a3bc26cef55f19021e96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DedicatedHostGroupsProps":
        return typing.cast("DedicatedHostGroupsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DedicatedHostGroupsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e74459c1d17ecfdff3a61ba60f001602b18994c717b884203b3a30d8fed889ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c59af67a74301cb5945a7a9f5310ceb712fd06bc52d4f729e578b61f30ff3ba8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "engine": "engine",
    },
)
class DedicatedHostGroupsProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DedicatedHostGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups

        :param dedicated_host_group_id: Property dedicatedHostGroupId: Dedicated Host Group ID.
        :param engine: Property engine: Database Engine Type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__758c461525466b5fc446f6a9a50ce817c95b94b6f357b80c3c6a67d90d037f7d)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if engine is not None:
            self._values["engine"] = engine

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: Dedicated Host Group ID.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engine: Database Engine Type.'''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDedicatedHostGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CDDC::DedicatedHostGroups``, which is used to query the resources in a dedicated cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DedicatedHostGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedHostGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__383555982d785d2ee7c6b776136266f139f83fe32c9645e2ae82595df0eb03ee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__40fcc884ed3ba27da5b39f8e0414f316ce5eea838131d0ac137b307ee83eb209)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupIds")
    def attr_dedicated_host_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupIds: The list of dedicated host group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroups")
    def attr_dedicated_host_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroups: The list of dedicated host groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__88cf79842fec51c21e191e56c085589e19e876073f6247633b133c887bd63916)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3316a202639af10e03bb7c787bdbedac3b8d15ecb0f93c61086b3186fd317f3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: Database Engine Type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1dc1bc1b27e5d6113fcb299ebc9a47cc5e12be5d8cd742874694f53a5b1eab5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "engine": "engine",
    },
)
class RosDedicatedHostGroupsProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDedicatedHostGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups

        :param dedicated_host_group_id: 
        :param engine: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b80fff2bd1114d64a80513bf5e7ab8d2dd07a9aa7f203cb42301db7fcc211448)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if engine is not None:
            self._values["engine"] = engine

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: Database Engine Type.
        '''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DedicatedHostGroups",
    "DedicatedHostGroupsProps",
    "RosDedicatedHostGroups",
    "RosDedicatedHostGroupsProps",
]

publication.publish()

def _typecheckingstub__cd8a5d9027f5e849723c41ab45966c72bea2d216d92a6742c4fc5330c04a9c4d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DedicatedHostGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39aacd6e2fdb187ad7840216c53b0dd32e426cf5238902fe795ea81b620c3a1d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d72cc38cffa71a4e218b5b284853e80fee10b81ced1a3bc26cef55f19021e96(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e74459c1d17ecfdff3a61ba60f001602b18994c717b884203b3a30d8fed889ea(
    value: DedicatedHostGroupsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c59af67a74301cb5945a7a9f5310ceb712fd06bc52d4f729e578b61f30ff3ba8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__758c461525466b5fc446f6a9a50ce817c95b94b6f357b80c3c6a67d90d037f7d(
    *,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__383555982d785d2ee7c6b776136266f139f83fe32c9645e2ae82595df0eb03ee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40fcc884ed3ba27da5b39f8e0414f316ce5eea838131d0ac137b307ee83eb209(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88cf79842fec51c21e191e56c085589e19e876073f6247633b133c887bd63916(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3316a202639af10e03bb7c787bdbedac3b8d15ecb0f93c61086b3186fd317f3d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1dc1bc1b27e5d6113fcb299ebc9a47cc5e12be5d8cd742874694f53a5b1eab5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b80fff2bd1114d64a80513bf5e7ab8d2dd07a9aa7f203cb42301db7fcc211448(
    *,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
