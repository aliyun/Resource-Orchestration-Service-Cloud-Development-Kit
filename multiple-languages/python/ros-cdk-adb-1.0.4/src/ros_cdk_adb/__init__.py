'''
## Aliyun ROS ADB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ADB from '@alicloud/ros-cdk-adb';
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

from ._jsii import *

import ros_cdk_core


class DBCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-adb.DBCluster",
):
    '''A ROS resource type:  ``ALIYUN::ADB::DBCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ADB::DBCluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: Vpc connection string.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBClusterId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The ID of the order.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-adb.DBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_category": "dbClusterCategory",
        "db_cluster_version": "dbClusterVersion",
        "mode": "mode",
        "pay_type": "payType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "compute_resource": "computeResource",
        "db_cluster_class": "dbClusterClass",
        "db_cluster_description": "dbClusterDescription",
        "db_node_group_count": "dbNodeGroupCount",
        "db_node_storage": "dbNodeStorage",
        "elastic_io_resource": "elasticIoResource",
        "executor_count": "executorCount",
        "period": "period",
        "period_type": "periodType",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class DBClusterProps:
    def __init__(
        self,
        *,
        db_cluster_category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mode: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        compute_resource: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_cluster_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_node_group_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_node_storage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        elastic_io_resource: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        executor_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ADB::DBCluster``.

        :param db_cluster_category: Property dbClusterCategory: The edition of the cluster. Valid values when the cluster is in reserved mode: Basic Cluster When the cluster is in elastic mode, set the value to MixedStorage.
        :param db_cluster_version: Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
        :param mode: Property mode: The mode of the cluster. Valid values: Reserver: the reserved mode Flexible: the elastic mode
        :param pay_type: Property payType: The billing method of the cluster. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param vpc_id: Property vpcId: The ID of the VPC.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch.
        :param compute_resource: Property computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
        :param db_cluster_class: Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values: Basic Edition: T8, T16, T32, and T52 Cluster Edition: C8 and C32
        :param db_cluster_description: Property dbClusterDescription: The description of the cluster.
        :param db_node_group_count: Property dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values: T8, T16, T32, and T52: 1 C8 and C32: 1 to 128
        :param db_node_storage: Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values: T8: 100 to 500 T16 and T32: 100 to 2000 T52: 100 to 4000 C8: 100 to 1000 C32: 100 to 8000 Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
        :param elastic_io_resource: Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.
        :param executor_count: Property executorCount: ExecutorCount.
        :param period: Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9. Valid values when the Period parameter is set to Year: 1, 2, and 3.
        :param period_type: Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values: Year: subscription on a yearly basis Month: subscription on a monthly basis
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param zone_id: Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_cluster_category": db_cluster_category,
            "db_cluster_version": db_cluster_version,
            "mode": mode,
            "pay_type": pay_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if compute_resource is not None:
            self._values["compute_resource"] = compute_resource
        if db_cluster_class is not None:
            self._values["db_cluster_class"] = db_cluster_class
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if db_node_group_count is not None:
            self._values["db_node_group_count"] = db_node_group_count
        if db_node_storage is not None:
            self._values["db_node_storage"] = db_node_storage
        if elastic_io_resource is not None:
            self._values["elastic_io_resource"] = elastic_io_resource
        if executor_count is not None:
            self._values["executor_count"] = executor_count
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_cluster_category(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbClusterCategory: The edition of the cluster.

        Valid values when the cluster is in reserved mode:
        Basic
        Cluster
        When the cluster is in elastic mode, set the value to MixedStorage.
        '''
        result = self._values.get("db_cluster_category")
        assert result is not None, "Required property 'db_cluster_category' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbClusterVersion: The version of the cluster.

        Set the value to 3.0.
        '''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mode(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property mode: The mode of the cluster.

        Valid values:
        Reserver: the reserved mode
        Flexible: the elastic mode
        '''
        result = self._values.get("mode")
        assert result is not None, "Required property 'mode' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property payType: The billing method of the cluster.

        Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The ID of the vSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def compute_resource(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property computeResource: The computing resource of the cluster.

        This parameter is required in elastic mode.
        '''
        result = self._values.get("compute_resource")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_cluster_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbClusterClass: The specification of the cluster.

        This parameter is required in reserved mode. Valid values:
        Basic Edition: T8, T16, T32, and T52
        Cluster Edition: C8 and C32
        '''
        result = self._values.get("db_cluster_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbClusterDescription: The description of the cluster.'''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_node_group_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property dbNodeGroupCount: The number of node groups.

        This parameter is required in reserved mode. Valid values:
        T8, T16, T32, and T52: 1
        C8 and C32: 1 to 128
        '''
        result = self._values.get("db_node_group_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property dbNodeStorage: The storage space of the node.

        This parameter is required in reserved mode. Unit: GB. Valid values:
        T8: 100 to 500
        T16 and T32: 100 to 2000
        T52: 100 to 4000
        C8: 100 to 1000
        C32: 100 to 8000
        Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
        '''
        result = self._values.get("db_node_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def elastic_io_resource(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.'''
        result = self._values.get("elastic_io_resource")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def executor_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property executorCount: ExecutorCount.'''
        result = self._values.get("executor_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.

        Valid values when the Period parameter is set to Year: 1, 2, and 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodType: The subscription period for the cluster.

        This parameter is required if the PayType parameter is set to Prepaid. Valid values:
        Year: subscription on a yearly basis
        Month: subscription on a monthly basis
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: The zone ID of the cluster.

        You can call the DescribeRegions operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-adb.RosDBCluster",
):
    '''A ROS template type:  ``ALIYUN::ADB::DBCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ADB::DBCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionString: Vpc connection string.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBClusterId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The ID of the order.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterCategory")
    def db_cluster_category(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbClusterCategory: The edition of the cluster.
        Valid values when the cluster is in reserved mode:
        Basic
        Cluster
        When the cluster is in elastic mode, set the value to MixedStorage.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbClusterCategory"))

    @db_cluster_category.setter
    def db_cluster_category(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbClusterCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterVersion")
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterVersion: The version of the cluster. Set the value to 3.0.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbClusterVersion"))

    @db_cluster_version.setter
    def db_cluster_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbClusterVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mode")
    def mode(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        mode: The mode of the cluster. Valid values:
        Reserver: the reserved mode
        Flexible: the elastic mode
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "mode"))

    @mode.setter
    def mode(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "mode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="computeResource")
    def compute_resource(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "computeResource"))

    @compute_resource.setter
    def compute_resource(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "computeResource", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterClass")
    def db_cluster_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
        Basic Edition: T8, T16, T32, and T52
        Cluster Edition: C8 and C32
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbClusterClass"))

    @db_cluster_class.setter
    def db_cluster_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbClusterClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterDescription")
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbClusterDescription: The description of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbClusterDescription"))

    @db_cluster_description.setter
    def db_cluster_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbClusterDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbNodeGroupCount")
    def db_node_group_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
        T8, T16, T32, and T52: 1
        C8 and C32: 1 to 128
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "dbNodeGroupCount"))

    @db_node_group_count.setter
    def db_node_group_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbNodeGroupCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbNodeStorage")
    def db_node_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
        T8: 100 to 500
        T16 and T32: 100 to 2000
        T52: 100 to 4000
        C8: 100 to 1000
        C32: 100 to 8000
        Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "dbNodeStorage"))

    @db_node_storage.setter
    def db_node_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbNodeStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="elasticIoResource")
    def elastic_io_resource(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        elasticIoResource: Elastic IO Unit
        Note the flexible mode cluster will use this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "elasticIoResource"))

    @elastic_io_resource.setter
    def elastic_io_resource(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "elasticIoResource", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="executorCount")
    def executor_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: executorCount: ExecutorCount
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "executorCount"))

    @executor_count.setter
    def executor_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "executorCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        Valid values when the Period parameter is set to Year: 1, 2, and 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
        Year: subscription on a yearly basis
        Month: subscription on a monthly basis
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-adb.RosDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_category": "dbClusterCategory",
        "db_cluster_version": "dbClusterVersion",
        "mode": "mode",
        "pay_type": "payType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "compute_resource": "computeResource",
        "db_cluster_class": "dbClusterClass",
        "db_cluster_description": "dbClusterDescription",
        "db_node_group_count": "dbNodeGroupCount",
        "db_node_storage": "dbNodeStorage",
        "elastic_io_resource": "elasticIoResource",
        "executor_count": "executorCount",
        "period": "period",
        "period_type": "periodType",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class RosDBClusterProps:
    def __init__(
        self,
        *,
        db_cluster_category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mode: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        compute_resource: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_cluster_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_node_group_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        db_node_storage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        elastic_io_resource: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        executor_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ADB::DBCluster``.

        :param db_cluster_category: 
        :param db_cluster_version: 
        :param mode: 
        :param pay_type: 
        :param vpc_id: 
        :param v_switch_id: 
        :param compute_resource: 
        :param db_cluster_class: 
        :param db_cluster_description: 
        :param db_node_group_count: 
        :param db_node_storage: 
        :param elastic_io_resource: 
        :param executor_count: 
        :param period: 
        :param period_type: 
        :param resource_group_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_cluster_category": db_cluster_category,
            "db_cluster_version": db_cluster_version,
            "mode": mode,
            "pay_type": pay_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if compute_resource is not None:
            self._values["compute_resource"] = compute_resource
        if db_cluster_class is not None:
            self._values["db_cluster_class"] = db_cluster_class
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if db_node_group_count is not None:
            self._values["db_node_group_count"] = db_node_group_count
        if db_node_storage is not None:
            self._values["db_node_storage"] = db_node_storage
        if elastic_io_resource is not None:
            self._values["elastic_io_resource"] = elastic_io_resource
        if executor_count is not None:
            self._values["executor_count"] = executor_count
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_cluster_category(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbClusterCategory: The edition of the cluster.
        Valid values when the cluster is in reserved mode:
        Basic
        Cluster
        When the cluster is in elastic mode, set the value to MixedStorage.
        '''
        result = self._values.get("db_cluster_category")
        assert result is not None, "Required property 'db_cluster_category' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterVersion: The version of the cluster. Set the value to 3.0.
        '''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mode(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        mode: The mode of the cluster. Valid values:
        Reserver: the reserved mode
        Flexible: the elastic mode
        '''
        result = self._values.get("mode")
        assert result is not None, "Required property 'mode' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def compute_resource(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
        '''
        result = self._values.get("compute_resource")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_cluster_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
        Basic Edition: T8, T16, T32, and T52
        Cluster Edition: C8 and C32
        '''
        result = self._values.get("db_cluster_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbClusterDescription: The description of the cluster.
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_node_group_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
        T8, T16, T32, and T52: 1
        C8 and C32: 1 to 128
        '''
        result = self._values.get("db_node_group_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
        T8: 100 to 500
        T16 and T32: 100 to 2000
        T52: 100 to 4000
        C8: 100 to 1000
        C32: 100 to 8000
        Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
        '''
        result = self._values.get("db_node_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def elastic_io_resource(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        elasticIoResource: Elastic IO Unit
        Note the flexible mode cluster will use this parameter.
        '''
        result = self._values.get("elastic_io_resource")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def executor_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: executorCount: ExecutorCount
        '''
        result = self._values.get("executor_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        Valid values when the Period parameter is set to Year: 1, 2, and 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
        Year: subscription on a yearly basis
        Month: subscription on a monthly basis
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DBCluster",
    "DBClusterProps",
    "RosDBCluster",
    "RosDBClusterProps",
]

publication.publish()
