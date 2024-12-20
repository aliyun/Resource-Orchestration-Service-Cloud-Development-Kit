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


class DiskReplicaGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EBS::DiskReplicaGroups``, which is used to query the information about replication pair-consistent groups.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDiskReplicaGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DiskReplicaGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45689d8aae6e73710ef6a4c84ed4f4d88e54872b0eef88cce533828b5679af52)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaGroups")
    def attr_disk_replica_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskReplicaGroups: The list of disk replica groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskReplicaGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupIds")
    def attr_replica_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReplicaGroupIds: The list of replica group IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a10f1a127a240a7813733185716bda76405cf4385deb9dd6b4b3492684ff0075)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6c00682f9c056f631966691ff85e3e26b6cfd822d7cb5de69f0312b79316852)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DiskReplicaGroupsProps":
        return typing.cast("DiskReplicaGroupsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DiskReplicaGroupsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__040beda64aa6cf1230b7ab5afcd62354580e59edaa94271fb59b863871a07cf0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__114bac1dd77da5039e0b80087b1e2af5f70e9e805fb73918eff51dec3bdd28c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "site": "site",
    },
)
class DiskReplicaGroupsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DiskReplicaGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param site: Property site: Site information sources for replication pairs and consistent replication groups. Possible values: - production: production site. - backup: disaster recovery site.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1d73f14eda6345c8421f7818553e6eb919b9c6e0c034d398eb0c5a59046bcd1)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument site", value=site, expected_type=type_hints["site"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if site is not None:
            self._values["site"] = site

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
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property site: Site information sources for replication pairs and consistent replication groups.

        Possible values:

        - production: production site.
        - backup: disaster recovery site.
        '''
        result = self._values.get("site")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DiskReplicaGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DiskReplicaPairs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.datasource.DiskReplicaPairs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EBS::DiskReplicaPairs``, which is used to query the information about replication pairs.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDiskReplicaPairs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DiskReplicaPairsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbe4609181b0e2e0797e0e98d142f74dc43cc07b22cceaf6579c4aef42261b61)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaPairs")
    def attr_disk_replica_pairs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskReplicaPairs: The list of disk replica pairs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskReplicaPairs"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairIds")
    def attr_replica_pair_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReplicaPairIds: The list of replica pair IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaPairIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56773c5a9b3dbecf53339ca0ba6b64ce7932fd0fb4d7fe941b7cfd43c62249b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbd433d101f9612b239bff659ea93eedc204fff5088859653a8225d81a6fae1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DiskReplicaPairsProps":
        return typing.cast("DiskReplicaPairsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DiskReplicaPairsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f67cda8072fae3a24aa577042ed0ffe9e734171edfae6f35a6f2706efb49792f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4df3d3946adb682049d1f623bc2373bd86f8aa3db66917f9fde196ab636f669d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.datasource.DiskReplicaPairsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class DiskReplicaPairsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DiskReplicaPairs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bdb8bda7b2ee8860092850d790c9d9423be6e86bdfa5a3ad409fe8b62645681)
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
        return "DiskReplicaPairsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDiskReplicaGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EBS::DiskReplicaGroups``, which is used to query the information about replication pair-consistent groups.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DiskReplicaGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskReplicaGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6ad9a8736fba60bca8011f7ce1982a6b6f586cbe850bfbef01d3a3d12763cc5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7b2e52e7480de9feb2be1f11a1fb24dfb40525235ea7c056638650b2c6693dc0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaGroups")
    def attr_disk_replica_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskReplicaGroups: The list of disk replica groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskReplicaGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupIds")
    def attr_replica_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaGroupIds: The list of replica group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaGroupIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__39634ab9f9e6404ccf33fa773f201f70ab467cf87bcbf0b51f559e27b7c16594)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0ffa39eab34dbbce25ed1b315a38984e8d5d71cf1309b580b0fbb8ef5aca15c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f8ffcd8b32950b90faef256b96aeee95755b38f6bacf5b8d047c167485a9af0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="site")
    def site(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        site: Site information sources for replication pairs and consistent replication groups. Possible values:

        - production: production site.
        - backup: disaster recovery site.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "site"))

    @site.setter
    def site(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dec064783b17547aa297b0b1b085bc6d7445843c859fc9f83c641b5c472008fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "site", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "site": "site",
    },
)
class RosDiskReplicaGroupsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDiskReplicaGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups

        :param refresh_options: 
        :param resource_group_id: 
        :param site: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d01dc004d1d849fa289a2813bbc82993c6fb294bb4882def6dcf287b57984194)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument site", value=site, expected_type=type_hints["site"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if site is not None:
            self._values["site"] = site

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
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        site: Site information sources for replication pairs and consistent replication groups. Possible values:

        - production: production site.
        - backup: disaster recovery site.
        '''
        result = self._values.get("site")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDiskReplicaGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDiskReplicaPairs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaPairs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EBS::DiskReplicaPairs``, which is used to query the information about replication pairs.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DiskReplicaPairs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskReplicaPairsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48a23a471cf1cb4c2ac0714e70c3a926c26f75da324bbf4dcc86ec3b27ddf631)
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
            type_hints = typing.get_type_hints(_typecheckingstub__77420104e637ee093eab4bc24d0af7d07cbb58eba26ebf2fe0ba674175e63c8f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaPairs")
    def attr_disk_replica_pairs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskReplicaPairs: The list of disk replica pairs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskReplicaPairs"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairIds")
    def attr_replica_pair_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaPairIds: The list of replica pair IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaPairIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__df68329db5bc913239f5fc64a163b8afdc8a5feef400275665a5e14a164d86bd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9390041ecfbc0dfc3c081457db7a34e867352d12a6e48c3f751a4c1ce0262f4f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__57d8d5226a8eda76bca6ecc24ab3b44f9284a0bcce8c6d884324dbf8b1c4595c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaPairsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosDiskReplicaPairsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDiskReplicaPairs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs

        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f3d6e9d78fdf9512970241e97adbb750ad980eccdc3a5425503996d7601938f)
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
        return "RosDiskReplicaPairsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DiskReplicaGroups",
    "DiskReplicaGroupsProps",
    "DiskReplicaPairs",
    "DiskReplicaPairsProps",
    "RosDiskReplicaGroups",
    "RosDiskReplicaGroupsProps",
    "RosDiskReplicaPairs",
    "RosDiskReplicaPairsProps",
]

publication.publish()

def _typecheckingstub__45689d8aae6e73710ef6a4c84ed4f4d88e54872b0eef88cce533828b5679af52(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DiskReplicaGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a10f1a127a240a7813733185716bda76405cf4385deb9dd6b4b3492684ff0075(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6c00682f9c056f631966691ff85e3e26b6cfd822d7cb5de69f0312b79316852(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__040beda64aa6cf1230b7ab5afcd62354580e59edaa94271fb59b863871a07cf0(
    value: DiskReplicaGroupsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__114bac1dd77da5039e0b80087b1e2af5f70e9e805fb73918eff51dec3bdd28c8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1d73f14eda6345c8421f7818553e6eb919b9c6e0c034d398eb0c5a59046bcd1(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbe4609181b0e2e0797e0e98d142f74dc43cc07b22cceaf6579c4aef42261b61(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DiskReplicaPairsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56773c5a9b3dbecf53339ca0ba6b64ce7932fd0fb4d7fe941b7cfd43c62249b3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbd433d101f9612b239bff659ea93eedc204fff5088859653a8225d81a6fae1a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f67cda8072fae3a24aa577042ed0ffe9e734171edfae6f35a6f2706efb49792f(
    value: DiskReplicaPairsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4df3d3946adb682049d1f623bc2373bd86f8aa3db66917f9fde196ab636f669d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bdb8bda7b2ee8860092850d790c9d9423be6e86bdfa5a3ad409fe8b62645681(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6ad9a8736fba60bca8011f7ce1982a6b6f586cbe850bfbef01d3a3d12763cc5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDiskReplicaGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b2e52e7480de9feb2be1f11a1fb24dfb40525235ea7c056638650b2c6693dc0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39634ab9f9e6404ccf33fa773f201f70ab467cf87bcbf0b51f559e27b7c16594(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ffa39eab34dbbce25ed1b315a38984e8d5d71cf1309b580b0fbb8ef5aca15c5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f8ffcd8b32950b90faef256b96aeee95755b38f6bacf5b8d047c167485a9af0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dec064783b17547aa297b0b1b085bc6d7445843c859fc9f83c641b5c472008fd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d01dc004d1d849fa289a2813bbc82993c6fb294bb4882def6dcf287b57984194(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48a23a471cf1cb4c2ac0714e70c3a926c26f75da324bbf4dcc86ec3b27ddf631(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDiskReplicaPairsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77420104e637ee093eab4bc24d0af7d07cbb58eba26ebf2fe0ba674175e63c8f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df68329db5bc913239f5fc64a163b8afdc8a5feef400275665a5e14a164d86bd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9390041ecfbc0dfc3c081457db7a34e867352d12a6e48c3f751a4c1ce0262f4f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57d8d5226a8eda76bca6ecc24ab3b44f9284a0bcce8c6d884324dbf8b1c4595c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f3d6e9d78fdf9512970241e97adbb750ad980eccdc3a5425503996d7601938f(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
