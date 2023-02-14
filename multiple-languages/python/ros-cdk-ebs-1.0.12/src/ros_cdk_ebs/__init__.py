'''
## Aliyun ROS EBS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EBS from '@alicloud/ros-cdk-ebs';
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


class DiskReplicaPairAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaPairAddition",
):
    '''A ROS resource type:  ``ALIYUN::EBS::DiskReplicaPairAddition``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DiskReplicaPairAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EBS::DiskReplicaPairAddition``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b12b85f30dde70cead4122ef554c8021df555676c3cd54e7738e8ffd651d53ad)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReplicaGroupId: The ID of the replication pair-consistent group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReplicaPairId: The ID of the replication pair.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaPairId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaPairAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "replica_group_id": "replicaGroupId",
        "replica_pair_id": "replicaPairId",
    },
)
class DiskReplicaPairAdditionProps:
    def __init__(
        self,
        *,
        replica_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replica_pair_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EBS::DiskReplicaPairAddition``.

        :param replica_group_id: Property replicaGroupId: The ID of the replication pair-consistent group.
        :param replica_pair_id: Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7c595b42f7ddb5c4951f246045ce03e549757953c893d2e71be536c09cfd7b7)
            check_type(argname="argument replica_group_id", value=replica_group_id, expected_type=type_hints["replica_group_id"])
            check_type(argname="argument replica_pair_id", value=replica_pair_id, expected_type=type_hints["replica_pair_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "replica_group_id": replica_group_id,
            "replica_pair_id": replica_pair_id,
        }

    @builtins.property
    def replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replicaGroupId: The ID of the replication pair-consistent group.'''
        result = self._values.get("replica_group_id")
        assert result is not None, "Required property 'replica_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replicaPairId: The ID of the replication pair.

        You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
        '''
        result = self._values.get("replica_pair_id")
        assert result is not None, "Required property 'replica_pair_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DiskReplicaPairAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDiskReplicaPairAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaPairAddition",
):
    '''A ROS template type:  ``ALIYUN::EBS::DiskReplicaPairAddition``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskReplicaPairAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EBS::DiskReplicaPairAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5365769ec0e29b68fffa8bca5629d647de8890969c53f99fa97d3cad7dece03f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f6980ccfe50fcd81ac0b674aa08ceb01f5e5820371c94b4a9fb54f344d636d4a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaGroupId: The ID of the replication pair-consistent group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaPairId: The ID of the replication pair.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaPairId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dd6e504b714edc70ea1ba7f900e22fad6804451e4d057b9e38e01a04d6a13499)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="replicaGroupId")
    def replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicaGroupId: The ID of the replication pair-consistent group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replicaGroupId"))

    @replica_group_id.setter
    def replica_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ed23c639425fee907d096cba38afa2b408cb9bb8f06083da0a26bffdaa7c83d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicaGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="replicaPairId")
    def replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replicaPairId"))

    @replica_pair_id.setter
    def replica_pair_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c114127e312a46f1f811b666fa89a788caee6adf564a514085356ca2a4e870f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicaPairId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaPairAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "replica_group_id": "replicaGroupId",
        "replica_pair_id": "replicaPairId",
    },
)
class RosDiskReplicaPairAdditionProps:
    def __init__(
        self,
        *,
        replica_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replica_pair_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EBS::DiskReplicaPairAddition``.

        :param replica_group_id: 
        :param replica_pair_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b29659ceae376d07b267814e999b8a54172f277f358dbac7dc6cef341b945f1c)
            check_type(argname="argument replica_group_id", value=replica_group_id, expected_type=type_hints["replica_group_id"])
            check_type(argname="argument replica_pair_id", value=replica_pair_id, expected_type=type_hints["replica_pair_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "replica_group_id": replica_group_id,
            "replica_pair_id": replica_pair_id,
        }

    @builtins.property
    def replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicaGroupId: The ID of the replication pair-consistent group.
        '''
        result = self._values.get("replica_group_id")
        assert result is not None, "Required property 'replica_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
        '''
        result = self._values.get("replica_pair_id")
        assert result is not None, "Required property 'replica_pair_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDiskReplicaPairAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DiskReplicaPairAddition",
    "DiskReplicaPairAdditionProps",
    "RosDiskReplicaPairAddition",
    "RosDiskReplicaPairAdditionProps",
]

publication.publish()

def _typecheckingstub__b12b85f30dde70cead4122ef554c8021df555676c3cd54e7738e8ffd651d53ad(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DiskReplicaPairAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7c595b42f7ddb5c4951f246045ce03e549757953c893d2e71be536c09cfd7b7(
    *,
    replica_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replica_pair_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5365769ec0e29b68fffa8bca5629d647de8890969c53f99fa97d3cad7dece03f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDiskReplicaPairAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6980ccfe50fcd81ac0b674aa08ceb01f5e5820371c94b4a9fb54f344d636d4a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd6e504b714edc70ea1ba7f900e22fad6804451e4d057b9e38e01a04d6a13499(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ed23c639425fee907d096cba38afa2b408cb9bb8f06083da0a26bffdaa7c83d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c114127e312a46f1f811b666fa89a788caee6adf564a514085356ca2a4e870f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b29659ceae376d07b267814e999b8a54172f277f358dbac7dc6cef341b945f1c(
    *,
    replica_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replica_pair_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
