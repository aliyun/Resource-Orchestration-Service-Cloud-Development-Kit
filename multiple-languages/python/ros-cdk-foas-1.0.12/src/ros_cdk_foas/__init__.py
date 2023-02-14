'''
## Aliyun ROS FOAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as FOAS from '@alicloud/ros-cdk-foas';
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
    jsii_type="@alicloud/ros-cdk-foas.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::FOAS::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FOAS::Cluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4811d1c7ed041e22d507ca90350cf55348f6d32fadbd0f9934b844558c74c6e6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersions")
    def attr_engine_versions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineVersions: Engine Versions.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersions"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterInstanceInfos")
    def attr_master_instance_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterInstanceInfos: Master instance infos.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterInstanceInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: Order ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroupId: Security group Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveInstanceInfos")
    def attr_slave_instance_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlaveInstanceInfos: Slave instance infos.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveInstanceInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute State: Cluster status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchIds: VSwitch Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "description": "description",
        "oss_bucket": "ossBucket",
        "v_switch_id": "vSwitchId",
        "order": "order",
        "order_id": "orderId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        oss_bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        order: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.OrderProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FOAS::Cluster``.

        :param cluster_name: Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        :param description: Property description: Cluster description.
        :param oss_bucket: Property ossBucket: Bucket name in your OSS.
        :param v_switch_id: Property vSwitchId: VSwitch ID.
        :param order: Property order: Order detail. Only one of property Order or OrderId can be specified. Order is not suggested. Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console. The order can not be cancelled.
        :param order_id: Property orderId: Order Id. Only one of property Order or OrderId can be specified. OrderId is suggested.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ab27118ef2c2f2d458a3a18e7c51cb34c1e2ed2da31f44403247542b068eb35)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument oss_bucket", value=oss_bucket, expected_type=type_hints["oss_bucket"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_name": cluster_name,
            "description": description,
            "oss_bucket": oss_bucket,
            "v_switch_id": v_switch_id,
        }
        if order is not None:
            self._values["order"] = order
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterName: Cluster name.

        It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: Cluster description.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def oss_bucket(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ossBucket: Bucket name in your OSS.'''
        result = self._values.get("oss_bucket")
        assert result is not None, "Required property 'oss_bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def order(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.OrderProperty"]]:
        '''Property order: Order detail.

        Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        '''
        result = self._values.get("order")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.OrderProperty"]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property orderId: Order Id.

        Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        '''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.Project",
):
    '''A ROS resource type:  ``ALIYUN::FOAS::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FOAS::Project``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c61d9c9e4e65c8ed765101f5e6db719247be68dd7bfd8d6a7871a4e3463ad5f5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute State: Project state.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "manager_ids": "managerIds",
        "name": "name",
        "cluster_id": "clusterId",
        "description": "description",
        "order_id": "orderId",
    },
)
class ProjectProps:
    def __init__(
        self,
        *,
        deploy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        manager_ids: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FOAS::Project``.

        :param deploy_type: Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.
        :param manager_ids: Property managerIds: Comma delimited account Id list of managers.
        :param name: Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        :param cluster_id: Property clusterId: Cluster ID.
        :param description: Property description: Project description.
        :param order_id: Property orderId: Order Id of Shared cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e20bcc147712e5df95e57ad1255bcbb0ab498994d6664d8248fbcb78a2ac1ae8)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument manager_ids", value=manager_ids, expected_type=type_hints["manager_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "deploy_type": deploy_type,
            "manager_ids": manager_ids,
            "name": name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if description is not None:
            self._values["description"] = description
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def deploy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.'''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def manager_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property managerIds: Comma delimited account Id list of managers.'''
        result = self._values.get("manager_ids")
        assert result is not None, "Required property 'manager_ids' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Project name.

        It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Project description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property orderId: Order Id of Shared cluster.'''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::FOAS::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FOAS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7d45b93512c1307adbf87c83cd1582bf09b38b66a34e0c2275111c35f7c4542)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fdd774f9babd744bf025dbd921f082bf869eeb39e8d8e4606eb2fe660e489b28)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersions")
    def attr_engine_versions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersions: Engine Versions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersions"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterInstanceInfos")
    def attr_master_instance_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterInstanceInfos: Master instance infos.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterInstanceInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Order ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: Security group Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveInstanceInfos")
    def attr_slave_instance_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlaveInstanceInfos: Slave instance infos.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveInstanceInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: State: Cluster status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchIds: VSwitch Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

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
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cc4307e12d2b5c8c4acb86151a96f1cb9664e92981b807e6807fe4e19d861ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Cluster description.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6d03c14227990b1d16ec96e7a3e7c4e9078cd62b22df2a306a877e075105880)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c398f40e72310dd8bf23d515d17bc09814401e1e51d9b4d5017b463afb8b3c54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ossBucket")
    def oss_bucket(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ossBucket: Bucket name in your OSS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ossBucket"))

    @oss_bucket.setter
    def oss_bucket(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfd96fde36f681ac5694fa1f456c5628cdee082b8b9981797a9dea3ec6c5776f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossBucket", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c84bf95e14ccb52e14a715569cf0dc65496a87c182a4a66d68103ed67a6f1082)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="order")
    def order(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.OrderProperty"]]:
        '''
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.OrderProperty"]], jsii.get(self, "order"))

    @order.setter
    def order(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.OrderProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30c8bd8a1e3284af1aa86c384954bbee6369a9fe5711197cb87680c822e75965)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "order", value)

    @builtins.property
    @jsii.member(jsii_name="orderId")
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "orderId"))

    @order_id.setter
    def order_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a742f9d5b50fde78bcf3adf0c0302c3b25a306081796db2f1c783dec1c976342)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orderId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-foas.RosCluster.OrderProperty",
        jsii_struct_bases=[],
        name_mapping={
            "master_spec": "masterSpec",
            "slave_spec": "slaveSpec",
            "master_number": "masterNumber",
            "pay_model": "payModel",
            "period": "period",
            "slave_number": "slaveNumber",
        },
    )
    class OrderProperty:
        def __init__(
            self,
            *,
            master_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            slave_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            master_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            pay_model: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slave_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param master_spec: 
            :param slave_spec: 
            :param master_number: 
            :param pay_model: 
            :param period: 
            :param slave_number: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8b9468017b6c04334067296e5708d49c3b74347a1ee2625ac9f08a6b408d6ad7)
                check_type(argname="argument master_spec", value=master_spec, expected_type=type_hints["master_spec"])
                check_type(argname="argument slave_spec", value=slave_spec, expected_type=type_hints["slave_spec"])
                check_type(argname="argument master_number", value=master_number, expected_type=type_hints["master_number"])
                check_type(argname="argument pay_model", value=pay_model, expected_type=type_hints["pay_model"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument slave_number", value=slave_number, expected_type=type_hints["slave_number"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "master_spec": master_spec,
                "slave_spec": slave_spec,
            }
            if master_number is not None:
                self._values["master_number"] = master_number
            if pay_model is not None:
                self._values["pay_model"] = pay_model
            if period is not None:
                self._values["period"] = period
            if slave_number is not None:
                self._values["slave_number"] = slave_number

        @builtins.property
        def master_spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: masterSpec: Master spec, such as Ecs_4c16g.
            '''
            result = self._values.get("master_spec")
            assert result is not None, "Required property 'master_spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def slave_spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: slaveSpec: Master spec, such as Ecs_4c16g.
            '''
            result = self._values.get("slave_spec")
            assert result is not None, "Required property 'slave_spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def master_number(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
            '''
            result = self._values.get("master_number")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def pay_model(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: payModel: Pay model. Valid values: pre, post. Default to post.
            '''
            result = self._values.get("pay_model")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: period: Pre paid time period. Unit is month. Default to 1.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slave_number(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
            '''
            result = self._values.get("slave_number")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OrderProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "description": "description",
        "oss_bucket": "ossBucket",
        "v_switch_id": "vSwitchId",
        "order": "order",
        "order_id": "orderId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        oss_bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        order: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.OrderProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FOAS::Cluster``.

        :param cluster_name: 
        :param description: 
        :param oss_bucket: 
        :param v_switch_id: 
        :param order: 
        :param order_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25e0eaf75d6b170fc3133ee768c6ad0f0b9f0f38df6907cd77200e99917983f6)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument oss_bucket", value=oss_bucket, expected_type=type_hints["oss_bucket"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_name": cluster_name,
            "description": description,
            "oss_bucket": oss_bucket,
            "v_switch_id": v_switch_id,
        }
        if order is not None:
            self._values["order"] = order
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Cluster description.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def oss_bucket(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ossBucket: Bucket name in your OSS.
        '''
        result = self._values.get("oss_bucket")
        assert result is not None, "Required property 'oss_bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def order(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.OrderProperty]]:
        '''
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        '''
        result = self._values.get("order")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.OrderProperty]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        '''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.RosProject",
):
    '''A ROS template type:  ``ALIYUN::FOAS::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FOAS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bada0a7d50173a170ac89223467e08e481a3b50e210876d7bccc91c4902789b8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__31a2d91d9707700d95273d7790fc048dc3db332dfed472c05a3ac72459e91b32)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: State: Project state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deployType")
    def deploy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deployType"))

    @deploy_type.setter
    def deploy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f6343706d82d1a3ec89f8777154d365e893179cb7127769585d495c0a26796c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cf0b24830e2fa57f0b65fe905c7253a04e2daf27e713b15d22f21a8c7bcb75f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="managerIds")
    def manager_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: managerIds: Comma delimited account Id list of managers.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "managerIds"))

    @manager_ids.setter
    def manager_ids(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__158e562f24df2f2697472b2084eab70ff46d0470c9b157911eb23e824f25312a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "managerIds", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12b9d30af56c1dd54709bed6ff6cac1e0ceeb8faac3a9bc66c997be3ff64b0a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f95bf6b9e82f8d962502fa9be3017d2823869454b4f07d165c7243640778b11a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Project description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05bad46c712fb724d85c8fc479352b7896fec56e09615cbb2c61083b47ece003)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="orderId")
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orderId: Order Id of Shared cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "orderId"))

    @order_id.setter
    def order_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa1e227d98b931a24e87c1ed305ee9a1c767ccaf0578943b8985be60b3082b4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orderId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "manager_ids": "managerIds",
        "name": "name",
        "cluster_id": "clusterId",
        "description": "description",
        "order_id": "orderId",
    },
)
class RosProjectProps:
    def __init__(
        self,
        *,
        deploy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        manager_ids: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FOAS::Project``.

        :param deploy_type: 
        :param manager_ids: 
        :param name: 
        :param cluster_id: 
        :param description: 
        :param order_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e29484a0edb16e45f2f25afd1b7f44d71121f8511aa3b63db9e62994d7b7108)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument manager_ids", value=manager_ids, expected_type=type_hints["manager_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "deploy_type": deploy_type,
            "manager_ids": manager_ids,
            "name": name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if description is not None:
            self._values["description"] = description
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def deploy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def manager_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: managerIds: Comma delimited account Id list of managers.
        '''
        result = self._values.get("manager_ids")
        assert result is not None, "Required property 'manager_ids' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Project description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orderId: Order Id of Shared cluster.
        '''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "Project",
    "ProjectProps",
    "RosCluster",
    "RosClusterProps",
    "RosProject",
    "RosProjectProps",
]

publication.publish()

def _typecheckingstub__4811d1c7ed041e22d507ca90350cf55348f6d32fadbd0f9934b844558c74c6e6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ab27118ef2c2f2d458a3a18e7c51cb34c1e2ed2da31f44403247542b068eb35(
    *,
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    oss_bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    order: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.OrderProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c61d9c9e4e65c8ed765101f5e6db719247be68dd7bfd8d6a7871a4e3463ad5f5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e20bcc147712e5df95e57ad1255bcbb0ab498994d6664d8248fbcb78a2ac1ae8(
    *,
    deploy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    manager_ids: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7d45b93512c1307adbf87c83cd1582bf09b38b66a34e0c2275111c35f7c4542(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdd774f9babd744bf025dbd921f082bf869eeb39e8d8e4606eb2fe660e489b28(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cc4307e12d2b5c8c4acb86151a96f1cb9664e92981b807e6807fe4e19d861ab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6d03c14227990b1d16ec96e7a3e7c4e9078cd62b22df2a306a877e075105880(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c398f40e72310dd8bf23d515d17bc09814401e1e51d9b4d5017b463afb8b3c54(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfd96fde36f681ac5694fa1f456c5628cdee082b8b9981797a9dea3ec6c5776f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c84bf95e14ccb52e14a715569cf0dc65496a87c182a4a66d68103ed67a6f1082(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30c8bd8a1e3284af1aa86c384954bbee6369a9fe5711197cb87680c822e75965(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.OrderProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a742f9d5b50fde78bcf3adf0c0302c3b25a306081796db2f1c783dec1c976342(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b9468017b6c04334067296e5708d49c3b74347a1ee2625ac9f08a6b408d6ad7(
    *,
    master_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    slave_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    master_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_model: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25e0eaf75d6b170fc3133ee768c6ad0f0b9f0f38df6907cd77200e99917983f6(
    *,
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    oss_bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    order: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.OrderProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bada0a7d50173a170ac89223467e08e481a3b50e210876d7bccc91c4902789b8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31a2d91d9707700d95273d7790fc048dc3db332dfed472c05a3ac72459e91b32(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f6343706d82d1a3ec89f8777154d365e893179cb7127769585d495c0a26796c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cf0b24830e2fa57f0b65fe905c7253a04e2daf27e713b15d22f21a8c7bcb75f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__158e562f24df2f2697472b2084eab70ff46d0470c9b157911eb23e824f25312a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12b9d30af56c1dd54709bed6ff6cac1e0ceeb8faac3a9bc66c997be3ff64b0a6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f95bf6b9e82f8d962502fa9be3017d2823869454b4f07d165c7243640778b11a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05bad46c712fb724d85c8fc479352b7896fec56e09615cbb2c61083b47ece003(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa1e227d98b931a24e87c1ed305ee9a1c767ccaf0578943b8985be60b3082b4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e29484a0edb16e45f2f25afd1b7f44d71121f8511aa3b63db9e62994d7b7108(
    *,
    deploy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    manager_ids: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
