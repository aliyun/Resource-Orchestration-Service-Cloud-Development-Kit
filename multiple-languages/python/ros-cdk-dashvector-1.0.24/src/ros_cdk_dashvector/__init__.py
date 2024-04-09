'''
## Aliyun ROS DASHVECTOR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DASHVECTOR from '@alicloud/ros-cdk-dashvector';
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


class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dashvector.Cluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DashVector::Cluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1091086f334f885da062bc9861f27e54f66337fd677c6751a1cb20d2ba4887b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterName: The name of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Endpoint: The endpoint of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__613db48e03e802cdd9d28018ffbd2a153101d8938fde32ddc3e7bd8b26cce583)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b16713c756b8da2603f9f18c8beef38634eb5761d2a5abb437fade3d7f0b82c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ClusterProps":
        return typing.cast("ClusterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ClusterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__855e5579ea50ba5eba6ec05dabd299dfe90313d694fd4df41babff3b32f87cfd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__273906f6467a20fd15c98f96d23b56419944fa64990889c5ba16d76d4985bda6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dashvector.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "replica_count": "replicaCount",
        "ignore_existing": "ignoreExisting",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replica_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Cluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster

        :param cluster_name: Property clusterName: The name of cluster.
        :param cluster_type: Property clusterType: The type of cluster.
        :param replica_count: Property replicaCount: The number of replicas.
        :param ignore_existing: Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cced0f88f0db6033618783bd72e99c970f12930fb8ed0fdb7dec31442bbe51d8)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument replica_count", value=replica_count, expected_type=type_hints["replica_count"])
            check_type(argname="argument ignore_existing", value=ignore_existing, expected_type=type_hints["ignore_existing"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "replica_count": replica_count,
        }
        if ignore_existing is not None:
            self._values["ignore_existing"] = ignore_existing

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterName: The name of cluster.'''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: The type of cluster.'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replica_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replicaCount: The number of replicas.'''
        result = self._values.get("replica_count")
        assert result is not None, "Required property 'replica_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.'''
        result = self._values.get("ignore_existing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dashvector.RosCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DashVector::Cluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Cluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8ab9d43aeda85aed98537e6668b35ad998f501c87de507dd28237e9a7aefcd1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__08d878a516c373be552be69799e301a5483ec2a24b48d78157ebc385eaede4c4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterName: The name of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoint: The endpoint of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: The name of cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50ee46252c32f144ac0f0ceec7ab408d4c1d8d1b8e79c2636115c34e6409c080)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dc46291db2d155d3152a83171b1c7c086adf8ce559903f475038090e050740c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53022ebcc3bdcb51bdb6f9e5a47b500b622a01d59d6e4205b05979b84e10a4df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="replicaCount")
    def replica_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicaCount: The number of replicas.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replicaCount"))

    @replica_count.setter
    def replica_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f42cb0b445d12cd3a9de7a1871c035c8e49e17808077d2fd20c6cc455ac69fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicaCount", value)

    @builtins.property
    @jsii.member(jsii_name="ignoreExisting")
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ignoreExisting: Whether to ignore existing dash vector cluster
        False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
        True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
        If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ignoreExisting"))

    @ignore_existing.setter
    def ignore_existing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9da22bd4557d2a53dfe57136a57bc1b9499eb9306368ab5e3039325a14138863)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ignoreExisting", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dashvector.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "replica_count": "replicaCount",
        "ignore_existing": "ignoreExisting",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replica_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster

        :param cluster_name: 
        :param cluster_type: 
        :param replica_count: 
        :param ignore_existing: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04c504500138a0eb80cdd924b93b3be826e65bc796cba96c56964a2e1aaf623b)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument replica_count", value=replica_count, expected_type=type_hints["replica_count"])
            check_type(argname="argument ignore_existing", value=ignore_existing, expected_type=type_hints["ignore_existing"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "replica_count": replica_count,
        }
        if ignore_existing is not None:
            self._values["ignore_existing"] = ignore_existing

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: The name of cluster.
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of cluster.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replica_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicaCount: The number of replicas.
        '''
        result = self._values.get("replica_count")
        assert result is not None, "Required property 'replica_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ignoreExisting: Whether to ignore existing dash vector cluster
        False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
        True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
        If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
        '''
        result = self._values.get("ignore_existing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "RosCluster",
    "RosClusterProps",
]

publication.publish()

def _typecheckingstub__b1091086f334f885da062bc9861f27e54f66337fd677c6751a1cb20d2ba4887b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__613db48e03e802cdd9d28018ffbd2a153101d8938fde32ddc3e7bd8b26cce583(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b16713c756b8da2603f9f18c8beef38634eb5761d2a5abb437fade3d7f0b82c2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855e5579ea50ba5eba6ec05dabd299dfe90313d694fd4df41babff3b32f87cfd(
    value: ClusterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__273906f6467a20fd15c98f96d23b56419944fa64990889c5ba16d76d4985bda6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cced0f88f0db6033618783bd72e99c970f12930fb8ed0fdb7dec31442bbe51d8(
    *,
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replica_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8ab9d43aeda85aed98537e6668b35ad998f501c87de507dd28237e9a7aefcd1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08d878a516c373be552be69799e301a5483ec2a24b48d78157ebc385eaede4c4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50ee46252c32f144ac0f0ceec7ab408d4c1d8d1b8e79c2636115c34e6409c080(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dc46291db2d155d3152a83171b1c7c086adf8ce559903f475038090e050740c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53022ebcc3bdcb51bdb6f9e5a47b500b622a01d59d6e4205b05979b84e10a4df(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f42cb0b445d12cd3a9de7a1871c035c8e49e17808077d2fd20c6cc455ac69fb(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9da22bd4557d2a53dfe57136a57bc1b9499eb9306368ab5e3039325a14138863(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04c504500138a0eb80cdd924b93b3be826e65bc796cba96c56964a2e1aaf623b(
    *,
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replica_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
