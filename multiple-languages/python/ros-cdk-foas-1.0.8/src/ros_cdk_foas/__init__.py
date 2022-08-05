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

import ros_cdk_core


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::FOAS::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[str, typing.Any]],
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
            type_hints = typing.get_type_hints(Cluster.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersions")
    def attr_engine_versions(self) -> ros_cdk_core.IResolvable:
        '''Attribute EngineVersions: Engine Versions.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersions"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterInstanceInfos")
    def attr_master_instance_infos(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterInstanceInfos: Master instance infos.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterInstanceInfos"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityGroupId: Security group Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlaveInstanceInfos")
    def attr_slave_instance_infos(self) -> ros_cdk_core.IResolvable:
        '''Attribute SlaveInstanceInfos: Slave instance infos.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlaveInstanceInfos"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> ros_cdk_core.IResolvable:
        '''Attribute State: Cluster status.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrState"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchIds: VSwitch Ids.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchIds"))


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
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        oss_bucket: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        order: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster.OrderProperty", typing.Dict[str, typing.Any]]]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            type_hints = typing.get_type_hints(ClusterProps.__init__)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument oss_bucket", value=oss_bucket, expected_type=type_hints["oss_bucket"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[str, typing.Any] = {
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
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterName: Cluster name.

        It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property description: Cluster description.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def oss_bucket(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ossBucket: Bucket name in your OSS.'''
        result = self._values.get("oss_bucket")
        assert result is not None, "Required property 'oss_bucket' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def order(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster.OrderProperty"]]:
        '''Property order: Order detail.

        Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        '''
        result = self._values.get("order")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster.OrderProperty"]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property orderId: Order Id.

        Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        '''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Project(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.Project",
):
    '''A ROS resource type:  ``ALIYUN::FOAS::Project``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[str, typing.Any]],
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
            type_hints = typing.get_type_hints(Project.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> ros_cdk_core.IResolvable:
        '''Attribute State: Project state.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrState"))


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
        deploy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        manager_ids: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            type_hints = typing.get_type_hints(ProjectProps.__init__)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument manager_ids", value=manager_ids, expected_type=type_hints["manager_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[str, typing.Any] = {
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
    def deploy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.'''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def manager_ids(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property managerIds: Comma delimited account Id list of managers.'''
        result = self._values.get("manager_ids")
        assert result is not None, "Required property 'manager_ids' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Project name.

        It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Project description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property orderId: Order Id of Shared cluster.'''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::FOAS::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FOAS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosCluster.__init__)
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
            type_hints = typing.get_type_hints(RosCluster._render_properties)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersions")
    def attr_engine_versions(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EngineVersions: Engine Versions.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersions"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterInstanceInfos")
    def attr_master_instance_infos(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterInstanceInfos: Master instance infos.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterInstanceInfos"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityGroupId: Security group Id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlaveInstanceInfos")
    def attr_slave_instance_infos(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SlaveInstanceInfos: Slave instance infos.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlaveInstanceInfos"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: State: Cluster status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrState"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchIds: VSwitch Ids.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterName")
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "cluster_name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Cluster description.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "description").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ossBucket")
    def oss_bucket(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ossBucket: Bucket name in your OSS.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ossBucket"))

    @oss_bucket.setter
    def oss_bucket(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "oss_bucket").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossBucket", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "v_switch_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="order")
    def order(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster.OrderProperty"]]:
        '''
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster.OrderProperty"]], jsii.get(self, "order"))

    @order.setter
    def order(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster.OrderProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "order").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "order", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="orderId")
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "orderId"))

    @order_id.setter
    def order_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosCluster, "order_id").fset)
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
            master_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            slave_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            master_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            pay_model: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            slave_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
                type_hints = typing.get_type_hints(RosCluster.OrderProperty.__init__)
                check_type(argname="argument master_spec", value=master_spec, expected_type=type_hints["master_spec"])
                check_type(argname="argument slave_spec", value=slave_spec, expected_type=type_hints["slave_spec"])
                check_type(argname="argument master_number", value=master_number, expected_type=type_hints["master_number"])
                check_type(argname="argument pay_model", value=pay_model, expected_type=type_hints["pay_model"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument slave_number", value=slave_number, expected_type=type_hints["slave_number"])
            self._values: typing.Dict[str, typing.Any] = {
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
        def master_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: masterSpec: Master spec, such as Ecs_4c16g.
            '''
            result = self._values.get("master_spec")
            assert result is not None, "Required property 'master_spec' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def slave_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: slaveSpec: Master spec, such as Ecs_4c16g.
            '''
            result = self._values.get("slave_spec")
            assert result is not None, "Required property 'slave_spec' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def master_number(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
            '''
            result = self._values.get("master_number")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def pay_model(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: payModel: Pay model. Valid values: pre, post. Default to post.
            '''
            result = self._values.get("pay_model")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: period: Pre paid time period. Unit is month. Default to 1.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slave_number(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
            '''
            result = self._values.get("slave_number")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        oss_bucket: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        order: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.OrderProperty, typing.Dict[str, typing.Any]]]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            type_hints = typing.get_type_hints(RosClusterProps.__init__)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument oss_bucket", value=oss_bucket, expected_type=type_hints["oss_bucket"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[str, typing.Any] = {
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
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Cluster description.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def oss_bucket(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ossBucket: Bucket name in your OSS.
        '''
        result = self._values.get("oss_bucket")
        assert result is not None, "Required property 'oss_bucket' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def order(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCluster.OrderProperty]]:
        '''
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        '''
        result = self._values.get("order")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCluster.OrderProperty]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        '''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.RosProject",
):
    '''A ROS template type:  ``ALIYUN::FOAS::Project``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FOAS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosProject.__init__)
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
            type_hints = typing.get_type_hints(RosProject._render_properties)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: State: Project state.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrState"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deployType")
    def deploy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "deployType"))

    @deploy_type.setter
    def deploy_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "deploy_type").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="managerIds")
    def manager_ids(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: managerIds: Comma delimited account Id list of managers.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "managerIds"))

    @manager_ids.setter
    def manager_ids(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "manager_ids").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "managerIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "cluster_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Project description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "description").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="orderId")
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: orderId: Order Id of Shared cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "orderId"))

    @order_id.setter
    def order_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosProject, "order_id").fset)
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
        deploy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        manager_ids: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        order_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            type_hints = typing.get_type_hints(RosProjectProps.__init__)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument manager_ids", value=manager_ids, expected_type=type_hints["manager_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument order_id", value=order_id, expected_type=type_hints["order_id"])
        self._values: typing.Dict[str, typing.Any] = {
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
    def deploy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def manager_ids(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: managerIds: Comma delimited account Id list of managers.
        '''
        result = self._values.get("manager_ids")
        assert result is not None, "Required property 'manager_ids' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Project description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def order_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: orderId: Order Id of Shared cluster.
        '''
        result = self._values.get("order_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
