'''
## Aliyun ROS ADBLAKE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ADBLAKE from '@alicloud/ros-cdk-adblake';
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


class DBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-adblake.DBCluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ADBLake::DBCluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e12a76935f73f6a11ec64a70863826e91aec5608d6fb824b0c36d51964ecf6ed)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The public endpoint that is used to connect to the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The order ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5e4b3727b7d27ef6564c397533fdf9849b6eb73721838b9ac1913c0f98f4ac8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__416f1a49cf2b12d7449d632f864b62bebeba18dbe007acbdd634ed382f97bbcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DBClusterProps":
        return typing.cast("DBClusterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DBClusterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8769964a3a8a093437ca5aa124e5aa019cb0e2d68a12e6fbaaa64b641a99f70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c6ad243e5cd030dffed2967fb50f1c2c2eeeecc186a44ee7740cc1e857f88b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-adblake.DBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "compute_resource": "computeResource",
        "db_cluster_version": "dbClusterVersion",
        "pay_type": "payType",
        "storage_resource": "storageResource",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "backup_set_id": "backupSetId",
        "db_cluster_description": "dbClusterDescription",
        "enable_default_resource_pool": "enableDefaultResourcePool",
        "period": "period",
        "period_type": "periodType",
        "resource_group_id": "resourceGroupId",
        "restore_to_time": "restoreToTime",
        "restore_type": "restoreType",
        "source_db_cluster_id": "sourceDbClusterId",
        "tags": "tags",
    },
)
class DBClusterProps:
    def __init__(
        self,
        *,
        compute_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_default_resource_pool: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_to_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDBCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster

        :param compute_resource: Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory. Note This parameter must be specified with a unit.
        :param db_cluster_version: Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
        :param pay_type: Property payType: The billing method of the cluster. Valid values: Postpaid: pay-as-you-go. Prepaid: subscription.
        :param storage_resource: Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory. Note This parameter must be specified with a unit.
        :param vpc_id: Property vpcId: The virtual private cloud (VPC) ID of the cluster.
        :param v_switch_id: Property vSwitchId: The vSwitch ID of the cluster.
        :param zone_id: Property zoneId: The zone ID. Note You can call the DescribeRegions operation to query the most recent zone list.
        :param backup_set_id: Property backupSetId: The ID of the backup set that you want to use to restore data. Note You can call the DescribeBackups operation to query the backup sets of the cluster.
        :param db_cluster_description: Property dbClusterDescription: The description of the cluster. The description cannot start with http:// or https://. The description must be 2 to 256 characters in length
        :param enable_default_resource_pool: Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values: true (default) false
        :param period: Property period: The subscription duration of the subscription cluster. Valid values when Period is set to Year: 1 to 3 (integer). Valid values when Period is set to Month: 1 to 9 (integer). Note This parameter must be specified when PayType is set to Prepaid.
        :param period_type: Property periodType: The subscription type of the subscription cluster. Valid values: Year: subscription on a yearly basis. Month: subscription on a monthly basis. Note This parameter must be specified when PayType is set to Prepaid.
        :param resource_group_id: Property resourceGroupId: The resource group ID.
        :param restore_to_time: Property restoreToTime: The point in time to which you want to restore data from the backup set.
        :param restore_type: Property restoreType: The method that you want to use to restore data. Valid values: backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters. timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
        :param source_db_cluster_id: Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
        :param tags: Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__213c48e15975399121e888f7f4180d4fc6b1524e367359f98c9efbbda278b3f3)
            check_type(argname="argument compute_resource", value=compute_resource, expected_type=type_hints["compute_resource"])
            check_type(argname="argument db_cluster_version", value=db_cluster_version, expected_type=type_hints["db_cluster_version"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument storage_resource", value=storage_resource, expected_type=type_hints["storage_resource"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument enable_default_resource_pool", value=enable_default_resource_pool, expected_type=type_hints["enable_default_resource_pool"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_to_time", value=restore_to_time, expected_type=type_hints["restore_to_time"])
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument source_db_cluster_id", value=source_db_cluster_id, expected_type=type_hints["source_db_cluster_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "compute_resource": compute_resource,
            "db_cluster_version": db_cluster_version,
            "pay_type": pay_type,
            "storage_resource": storage_resource,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if enable_default_resource_pool is not None:
            self._values["enable_default_resource_pool"] = enable_default_resource_pool
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_to_time is not None:
            self._values["restore_to_time"] = restore_to_time
        if restore_type is not None:
            self._values["restore_type"] = restore_type
        if source_db_cluster_id is not None:
            self._values["source_db_cluster_id"] = source_db_cluster_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def compute_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property computeResource: The amount of reserved computing resources.

        Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        Note This parameter must be specified with a unit.
        '''
        result = self._values.get("compute_resource")
        assert result is not None, "Required property 'compute_resource' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterVersion: The version of the cluster.

        Set the value to 5.0.
        '''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method of the cluster.

        Valid values:
        Postpaid: pay-as-you-go.
        Prepaid: subscription.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageResource: The amount of reserved storage resources.

        Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        Note This parameter must be specified with a unit.
        '''
        result = self._values.get("storage_resource")
        assert result is not None, "Required property 'storage_resource' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The virtual private cloud (VPC) ID of the cluster.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The vSwitch ID of the cluster.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The zone ID.

        Note You can call the  DescribeRegions  operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupSetId: The ID of the backup set that you want to use to restore data.

        Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
        '''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterDescription: The description of the cluster.

        The description cannot start with http:// or https://.
        The description must be 2 to 256 characters in length
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_default_resource_pool(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.

        Valid values:
        true (default)
        false
        '''
        result = self._values.get("enable_default_resource_pool")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration of the subscription cluster.

        Valid values when Period is set to Year: 1 to 3 (integer).
        Valid values when Period is set to Month: 1 to 9 (integer).
        Note This parameter must be specified when PayType is set to Prepaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodType: The subscription type of the subscription cluster.

        Valid values:
        Year: subscription on a yearly basis.
        Month: subscription on a monthly basis.
        Note This parameter must be specified when PayType is set to Prepaid.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_to_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreToTime: The point in time to which you want to restore data from the backup set.'''
        result = self._values.get("restore_to_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreType: The method that you want to use to restore data.

        Valid values:
        backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
        timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
        '''
        result = self._values.get("restore_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.

        If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
        '''
        result = self._values.get("source_db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDBCluster.TagsProperty"]]:
        '''Property tags: Tags to attach to cluster.

        Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDBCluster.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-adblake.RosDBCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ADBLake::DBCluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7cbfc0d40a04558ec9d1dd53842c63954f9451686f1cb5cc3c59495dba86a3f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5b25f5546ca6a0406a14282e056b44cdd692b60373e3b177120b57419ea597ac)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: The public endpoint that is used to connect to the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The order ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="computeResource")
    def compute_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        Note This parameter must be specified with a unit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "computeResource"))

    @compute_resource.setter
    def compute_resource(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aea970c2d37a38445f277774a692c908e9b5811736927629d94617f22461af97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeResource", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterVersion")
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterVersion: The version of the cluster. Set the value to 5.0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterVersion"))

    @db_cluster_version.setter
    def db_cluster_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c128a8ff2eab223bf533f0cd3789108ec2f5999dc2b2613d0af6abe8f83d1e47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0182323d104e62f960939bef8a2724ffefc8070109adad5c905468ea249b3527)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go.
        Prepaid: subscription.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7d5850c86b231ace86b90704b62fa58ad85e5eb010211998ce0f07af1a9afe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="storageResource")
    def storage_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        Note This parameter must be specified with a unit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageResource"))

    @storage_resource.setter
    def storage_resource(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b3996e690ad90abf486248781279499c29e6f65d409f75e37040808743ff8cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageResource", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The virtual private cloud (VPC) ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fbecbcfcea2b773e94927e39655ecf87eaa18ba7536d22c0ca85ab3619e997b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3987d961374c2ff64ba9e53408a9348b1b098aaa7fcb281fe2d892661d1881e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID.
        Note You can call the  DescribeRegions  operation to query the most recent zone list.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e78b530ff28312d4665b62502d21485ea1cf1a2c3f916c8d625586705749dfa6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="backupSetId")
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupSetId: The ID of the backup set that you want to use to restore data.
        Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupSetId"))

    @backup_set_id.setter
    def backup_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8553457e9d7fd803d22ce5b65a28a4351c1691558cbcb73c95f055a76bc3d2e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupSetId", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterDescription")
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbClusterDescription: The description of the cluster.
        The description cannot start with http:// or https://.
        The description must be 2 to 256 characters in length
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterDescription"))

    @db_cluster_description.setter
    def db_cluster_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4bd081c82a11213c4fc50382823a6555e88f4b47278430a19f4cfe09fe4b338)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterDescription", value)

    @builtins.property
    @jsii.member(jsii_name="enableDefaultResourcePool")
    def enable_default_resource_pool(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
        true (default)
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableDefaultResourcePool"))

    @enable_default_resource_pool.setter
    def enable_default_resource_pool(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6746d64902bdf46b26f250c5c51d27c5e010928302bcdc8263e8aa362dd303b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableDefaultResourcePool", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration of the subscription cluster.
        Valid values when Period is set to Year: 1 to 3 (integer).
        Valid values when Period is set to Month: 1 to 9 (integer).
        Note This parameter must be specified when PayType is set to Prepaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5edb1f669b53094ed2dedf1d1e4d8e3afacc7bf92fd1b774e3494c23c2bec73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodType: The subscription type of the subscription cluster. Valid values:
        Year: subscription on a yearly basis.
        Month: subscription on a monthly basis.
        Note This parameter must be specified when PayType is set to Prepaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b82c7d707321735a60028c719d590612b909ddaf8550fc57d53dc94cc3e41f89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9716cbfdb6b1ebec5f24a0a0685eb7f3cd12769c8f9a6bc54fe5cdaabf3a9e44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="restoreToTime")
    def restore_to_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreToTime: The point in time to which you want to restore data from the backup set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreToTime"))

    @restore_to_time.setter
    def restore_to_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0391e5fdae585858f3a5655a02fda118bd637b1cd308c803f18d95421e83543)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreToTime", value)

    @builtins.property
    @jsii.member(jsii_name="restoreType")
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreType: The method that you want to use to restore data. Valid values:
        backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
        timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreType"))

    @restore_type.setter
    def restore_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__811590ced101d29bbdfca178321b6dd245dc14128532681ff467ecc1d7e3a8f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreType", value)

    @builtins.property
    @jsii.member(jsii_name="sourceDbClusterId")
    def source_db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceDbClusterId"))

    @source_db_cluster_id.setter
    def source_db_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09751a46e91b7f97998823030ef72a6aeae146b358260affaba87be4d4ad3010)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceDbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDBCluster.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDBCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDBCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a26e4d61b34eb40989667f972ccca33ee4a49000e57016bbb273bd78f99841d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-adblake.RosDBCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__393cca6f2deffd4f35de4fb78cca337ff2f5a9155396b2e6f7bac2edba793884)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-adblake.RosDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "compute_resource": "computeResource",
        "db_cluster_version": "dbClusterVersion",
        "pay_type": "payType",
        "storage_resource": "storageResource",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "backup_set_id": "backupSetId",
        "db_cluster_description": "dbClusterDescription",
        "enable_default_resource_pool": "enableDefaultResourcePool",
        "period": "period",
        "period_type": "periodType",
        "resource_group_id": "resourceGroupId",
        "restore_to_time": "restoreToTime",
        "restore_type": "restoreType",
        "source_db_cluster_id": "sourceDbClusterId",
        "tags": "tags",
    },
)
class RosDBClusterProps:
    def __init__(
        self,
        *,
        compute_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_default_resource_pool: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_to_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster

        :param compute_resource: 
        :param db_cluster_version: 
        :param pay_type: 
        :param storage_resource: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        :param backup_set_id: 
        :param db_cluster_description: 
        :param enable_default_resource_pool: 
        :param period: 
        :param period_type: 
        :param resource_group_id: 
        :param restore_to_time: 
        :param restore_type: 
        :param source_db_cluster_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0398e0eb26194591f04d95b3df80d4ee182b33035b7798a81a32d46a5f7a7488)
            check_type(argname="argument compute_resource", value=compute_resource, expected_type=type_hints["compute_resource"])
            check_type(argname="argument db_cluster_version", value=db_cluster_version, expected_type=type_hints["db_cluster_version"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument storage_resource", value=storage_resource, expected_type=type_hints["storage_resource"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument enable_default_resource_pool", value=enable_default_resource_pool, expected_type=type_hints["enable_default_resource_pool"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_to_time", value=restore_to_time, expected_type=type_hints["restore_to_time"])
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument source_db_cluster_id", value=source_db_cluster_id, expected_type=type_hints["source_db_cluster_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "compute_resource": compute_resource,
            "db_cluster_version": db_cluster_version,
            "pay_type": pay_type,
            "storage_resource": storage_resource,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if enable_default_resource_pool is not None:
            self._values["enable_default_resource_pool"] = enable_default_resource_pool
        if period is not None:
            self._values["period"] = period
        if period_type is not None:
            self._values["period_type"] = period_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_to_time is not None:
            self._values["restore_to_time"] = restore_to_time
        if restore_type is not None:
            self._values["restore_type"] = restore_type
        if source_db_cluster_id is not None:
            self._values["source_db_cluster_id"] = source_db_cluster_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def compute_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        Note This parameter must be specified with a unit.
        '''
        result = self._values.get("compute_resource")
        assert result is not None, "Required property 'compute_resource' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterVersion: The version of the cluster. Set the value to 5.0.
        '''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go.
        Prepaid: subscription.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        Note This parameter must be specified with a unit.
        '''
        result = self._values.get("storage_resource")
        assert result is not None, "Required property 'storage_resource' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The virtual private cloud (VPC) ID of the cluster.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the cluster.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID.
        Note You can call the  DescribeRegions  operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        backupSetId: The ID of the backup set that you want to use to restore data.
        Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
        '''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbClusterDescription: The description of the cluster.
        The description cannot start with http:// or https://.
        The description must be 2 to 256 characters in length
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_default_resource_pool(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
        true (default)
        false
        '''
        result = self._values.get("enable_default_resource_pool")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration of the subscription cluster.
        Valid values when Period is set to Year: 1 to 3 (integer).
        Valid values when Period is set to Month: 1 to 9 (integer).
        Note This parameter must be specified when PayType is set to Prepaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodType: The subscription type of the subscription cluster. Valid values:
        Year: subscription on a yearly basis.
        Month: subscription on a monthly basis.
        Note This parameter must be specified when PayType is set to Prepaid.
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_to_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreToTime: The point in time to which you want to restore data from the backup set.
        '''
        result = self._values.get("restore_to_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreType: The method that you want to use to restore data. Valid values:
        backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
        timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
        '''
        result = self._values.get("restore_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
        '''
        result = self._values.get("source_db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDBCluster.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDBCluster.TagsProperty]], result)

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

def _typecheckingstub__e12a76935f73f6a11ec64a70863826e91aec5608d6fb824b0c36d51964ecf6ed(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5e4b3727b7d27ef6564c397533fdf9849b6eb73721838b9ac1913c0f98f4ac8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__416f1a49cf2b12d7449d632f864b62bebeba18dbe007acbdd634ed382f97bbcc(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8769964a3a8a093437ca5aa124e5aa019cb0e2d68a12e6fbaaa64b641a99f70(
    value: DBClusterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c6ad243e5cd030dffed2967fb50f1c2c2eeeecc186a44ee7740cc1e857f88b6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__213c48e15975399121e888f7f4180d4fc6b1524e367359f98c9efbbda278b3f3(
    *,
    compute_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_default_resource_pool: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_to_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7cbfc0d40a04558ec9d1dd53842c63954f9451686f1cb5cc3c59495dba86a3f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b25f5546ca6a0406a14282e056b44cdd692b60373e3b177120b57419ea597ac(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aea970c2d37a38445f277774a692c908e9b5811736927629d94617f22461af97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c128a8ff2eab223bf533f0cd3789108ec2f5999dc2b2613d0af6abe8f83d1e47(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0182323d104e62f960939bef8a2724ffefc8070109adad5c905468ea249b3527(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7d5850c86b231ace86b90704b62fa58ad85e5eb010211998ce0f07af1a9afe5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b3996e690ad90abf486248781279499c29e6f65d409f75e37040808743ff8cd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fbecbcfcea2b773e94927e39655ecf87eaa18ba7536d22c0ca85ab3619e997b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3987d961374c2ff64ba9e53408a9348b1b098aaa7fcb281fe2d892661d1881e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e78b530ff28312d4665b62502d21485ea1cf1a2c3f916c8d625586705749dfa6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8553457e9d7fd803d22ce5b65a28a4351c1691558cbcb73c95f055a76bc3d2e8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4bd081c82a11213c4fc50382823a6555e88f4b47278430a19f4cfe09fe4b338(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6746d64902bdf46b26f250c5c51d27c5e010928302bcdc8263e8aa362dd303b2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5edb1f669b53094ed2dedf1d1e4d8e3afacc7bf92fd1b774e3494c23c2bec73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b82c7d707321735a60028c719d590612b909ddaf8550fc57d53dc94cc3e41f89(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9716cbfdb6b1ebec5f24a0a0685eb7f3cd12769c8f9a6bc54fe5cdaabf3a9e44(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0391e5fdae585858f3a5655a02fda118bd637b1cd308c803f18d95421e83543(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__811590ced101d29bbdfca178321b6dd245dc14128532681ff467ecc1d7e3a8f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09751a46e91b7f97998823030ef72a6aeae146b358260affaba87be4d4ad3010(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a26e4d61b34eb40989667f972ccca33ee4a49000e57016bbb273bd78f99841d(
    value: typing.Optional[typing.List[RosDBCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__393cca6f2deffd4f35de4fb78cca337ff2f5a9155396b2e6f7bac2edba793884(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0398e0eb26194591f04d95b3df80d4ee182b33035b7798a81a32d46a5f7a7488(
    *,
    compute_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_resource: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_default_resource_pool: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_to_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
