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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.DedicatedBlockStorageClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "azone": "azone",
        "capacity": "capacity",
        "dbsc_name": "dbscName",
        "period": "period",
        "period_unit": "periodUnit",
        "type": "type",
        "resource_group_id": "resourceGroupId",
        "tag": "tag",
    },
)
class DedicatedBlockStorageClusterProps:
    def __init__(
        self,
        *,
        azone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        dbsc_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``DedicatedBlockStorageCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster

        :param azone: Property azone: The ID of the zone in which to create the dedicated block storage cluster.
        :param capacity: Property capacity: The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
        :param dbsc_name: Property dbscName: The name of the dedicated block storage cluster.
        :param period: Property period: The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
        :param period_unit: Property periodUnit: The unit of the subscription duration specified by Period. Set the value to Month.
        :param type: Property type: The type of the dedicated block storage cluster. Valid values: Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters. Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters. Default value: Premium.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
        :param tag: Property tag: Tags of dedicated block storage cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02f1d81430aa8571004d6cd0b421c3c77cc30bcd81d954cf6e62d08c0d3c747e)
            check_type(argname="argument azone", value=azone, expected_type=type_hints["azone"])
            check_type(argname="argument capacity", value=capacity, expected_type=type_hints["capacity"])
            check_type(argname="argument dbsc_name", value=dbsc_name, expected_type=type_hints["dbsc_name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "azone": azone,
            "capacity": capacity,
            "dbsc_name": dbsc_name,
            "period": period,
            "period_unit": period_unit,
            "type": type,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tag is not None:
            self._values["tag"] = tag

    @builtins.property
    def azone(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property azone: The ID of the zone in which to create the dedicated block storage cluster.'''
        result = self._values.get("azone")
        assert result is not None, "Required property 'azone' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def capacity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property capacity: The capacity of the dedicated block storage cluster.

        Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
        '''
        result = self._values.get("capacity")
        assert result is not None, "Required property 'capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dbsc_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbscName: The name of the dedicated block storage cluster.'''
        result = self._values.get("dbsc_name")
        assert result is not None, "Required property 'dbsc_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription duration of the dedicated block storage cluster.

        Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property periodUnit: The unit of the subscription duration specified by Period.

        Set the value to Month.
        '''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the dedicated block storage cluster.

        Valid values:
        Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
        Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
        Default value: Premium.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''Property tag: Tags of dedicated block storage cluster.'''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedBlockStorageClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_region_id": "destinationRegionId",
        "destination_zone_id": "destinationZoneId",
        "source_region_id": "sourceRegionId",
        "source_zone_id": "sourceZoneId",
        "description": "description",
        "disk_replica_group_name": "diskReplicaGroupName",
        "resource_group_id": "resourceGroupId",
        "rpo": "rpo",
        "tags": "tags",
    },
)
class DiskReplicaGroupProps:
    def __init__(
        self,
        *,
        destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_replica_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDiskReplicaGroup.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DiskReplicaGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup

        :param destination_region_id: Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        :param destination_zone_id: Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        :param source_region_id: Property sourceRegionId: The ID of the region to which the production site belongs.
        :param source_zone_id: Property sourceZoneId: The ID of the zone to which the production site belongs.
        :param description: Property description: The description of the consistent replication group.
        :param disk_replica_group_name: Property diskReplicaGroupName: Consistent replication group name.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param rpo: Property rpo: The RPO value set by the consistency group in seconds.
        :param tags: Property tags: Tags of disk replica group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a76c7ab106e58459e7cab0e86d12eb2d444eea35ded90de472201ef6a1c785f7)
            check_type(argname="argument destination_region_id", value=destination_region_id, expected_type=type_hints["destination_region_id"])
            check_type(argname="argument destination_zone_id", value=destination_zone_id, expected_type=type_hints["destination_zone_id"])
            check_type(argname="argument source_region_id", value=source_region_id, expected_type=type_hints["source_region_id"])
            check_type(argname="argument source_zone_id", value=source_zone_id, expected_type=type_hints["source_zone_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disk_replica_group_name", value=disk_replica_group_name, expected_type=type_hints["disk_replica_group_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument rpo", value=rpo, expected_type=type_hints["rpo"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_region_id": destination_region_id,
            "destination_zone_id": destination_zone_id,
            "source_region_id": source_region_id,
            "source_zone_id": source_zone_id,
        }
        if description is not None:
            self._values["description"] = description
        if disk_replica_group_name is not None:
            self._values["disk_replica_group_name"] = disk_replica_group_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if rpo is not None:
            self._values["rpo"] = rpo
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        result = self._values.get("destination_region_id")
        assert result is not None, "Required property 'destination_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        result = self._values.get("destination_zone_id")
        assert result is not None, "Required property 'destination_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceRegionId: The ID of the region to which the production site belongs.'''
        result = self._values.get("source_region_id")
        assert result is not None, "Required property 'source_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceZoneId: The ID of the zone to which the production site belongs.'''
        result = self._values.get("source_zone_id")
        assert result is not None, "Required property 'source_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the consistent replication group.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_replica_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskReplicaGroupName: Consistent replication group name.'''
        result = self._values.get("disk_replica_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rpo(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rpo: The RPO value set by the consistency group in seconds.'''
        result = self._values.get("rpo")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDiskReplicaGroup.TagsProperty"]]:
        '''Property tags: Tags of disk replica group.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDiskReplicaGroup.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DiskReplicaGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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
        '''Properties for defining a ``DiskReplicaPairAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaPairProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_disk_id": "destinationDiskId",
        "destination_region_id": "destinationRegionId",
        "destination_zone_id": "destinationZoneId",
        "disk_id": "diskId",
        "source_zone_id": "sourceZoneId",
        "bandwidth": "bandwidth",
        "description": "description",
        "disk_replica_pair_name": "diskReplicaPairName",
        "payment_type": "paymentType",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "rpo": "rpo",
        "tags": "tags",
    },
)
class DiskReplicaPairProps:
    def __init__(
        self,
        *,
        destination_disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_replica_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDiskReplicaPair.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DiskReplicaPair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair

        :param destination_disk_id: Property destinationDiskId: The ID of the standby disk.
        :param destination_region_id: Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        :param destination_zone_id: Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        :param disk_id: Property diskId: The ID of the primary disk.
        :param source_zone_id: Property sourceZoneId: The ID of the zone to which the production site belongs.
        :param bandwidth: Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range: - 10240 Kbps: equal to 10 Mbps. - 20480 Kbps: equal to 20 Mbps. - 51200 Kbps: equal to 50 Mbps. - 102400 Kbps: equal to 100 Mbps. Default value: 10240. This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
        :param description: Property description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
        :param disk_replica_pair_name: Property diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
        :param payment_type: Property paymentType: The payment type of the resource.
        :param period: Property period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is: - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
        :param period_unit: Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range: - Month.Default value: Month.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param rpo: Property rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
        :param tags: Property tags: Tags of disk replica pair.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39be8219284ab11de1631b982a3fa1e87aa7f98fbb66156dc0245e9fc8479787)
            check_type(argname="argument destination_disk_id", value=destination_disk_id, expected_type=type_hints["destination_disk_id"])
            check_type(argname="argument destination_region_id", value=destination_region_id, expected_type=type_hints["destination_region_id"])
            check_type(argname="argument destination_zone_id", value=destination_zone_id, expected_type=type_hints["destination_zone_id"])
            check_type(argname="argument disk_id", value=disk_id, expected_type=type_hints["disk_id"])
            check_type(argname="argument source_zone_id", value=source_zone_id, expected_type=type_hints["source_zone_id"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disk_replica_pair_name", value=disk_replica_pair_name, expected_type=type_hints["disk_replica_pair_name"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument rpo", value=rpo, expected_type=type_hints["rpo"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_disk_id": destination_disk_id,
            "destination_region_id": destination_region_id,
            "destination_zone_id": destination_zone_id,
            "disk_id": disk_id,
            "source_zone_id": source_zone_id,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if description is not None:
            self._values["description"] = description
        if disk_replica_pair_name is not None:
            self._values["disk_replica_pair_name"] = disk_replica_pair_name
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if rpo is not None:
            self._values["rpo"] = rpo
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def destination_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationDiskId: The ID of the standby disk.'''
        result = self._values.get("destination_disk_id")
        assert result is not None, "Required property 'destination_disk_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        result = self._values.get("destination_region_id")
        assert result is not None, "Required property 'destination_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        result = self._values.get("destination_zone_id")
        assert result is not None, "Required property 'destination_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property diskId: The ID of the primary disk.'''
        result = self._values.get("disk_id")
        assert result is not None, "Required property 'disk_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceZoneId: The ID of the zone to which the production site belongs.'''
        result = self._values.get("source_zone_id")
        assert result is not None, "Required property 'source_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.

        The unit is Kbps. Value range:

        - 10240 Kbps: equal to 10 Mbps.
        - 20480 Kbps: equal to 20 Mbps.
        - 51200 Kbps: equal to 50 Mbps.
        - 102400 Kbps: equal to 100 Mbps.
          Default value: 10240.
          This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the asynchronous replication relationship.

        2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_replica_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskReplicaPairName: The name of the asynchronous replication relationship.

        The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
        '''
        result = self._values.get("disk_replica_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: The payment type of the resource.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The purchase duration of the asynchronous replication relationship.

        This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:

        - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.

        Value range:

        - Month.Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rpo(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rpo: The RPO value set by the consistency group in seconds.

        Currently only 900 seconds are supported.
        '''
        result = self._values.get("rpo")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDiskReplicaPair.TagsProperty"]]:
        '''Property tags: Tags of disk replica pair.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDiskReplicaPair.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DiskReplicaPairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-ebs.IDedicatedBlockStorageCluster")
class IDedicatedBlockStorageCluster(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``DedicatedBlockStorageCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedBlockStorageClusterId")
    def attr_dedicated_block_storage_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedBlockStorageClusterProps:
        ...


class _IDedicatedBlockStorageClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DedicatedBlockStorageCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ebs.IDedicatedBlockStorageCluster"

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedBlockStorageClusterId")
    def attr_dedicated_block_storage_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedBlockStorageClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedBlockStorageClusterProps:
        return typing.cast(DedicatedBlockStorageClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDedicatedBlockStorageCluster).__jsii_proxy_class__ = lambda : _IDedicatedBlockStorageClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ebs.IDiskReplicaGroup")
class IDiskReplicaGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DiskReplicaGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the consistent replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaGroupName")
    def attr_disk_replica_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskReplicaGroupName: Consistent replication group name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLastRecoverPoint")
    def attr_last_recover_point(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.

        This parameter provides the return value as a timestamp. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPairIds")
    def attr_pair_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PairIds: List of replication pair IDs contained in a consistent replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPairNumber")
    def attr_pair_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PairNumber: The number of replication pairs contained in a consistent replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryRegion")
    def attr_primary_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryRegion: The initial source region of the replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryZone")
    def attr_primary_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryZone: The initial source available area of the replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaGroupId: The ID of the consistent replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: resource group ID of enterprise.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RPO: The RPO value set by the consistency group in seconds.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSite")
    def attr_site(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Site: Site information sources for replication pairs and consistent replication groups.

        Possible values:
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceRegionId")
    def attr_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceRegionId: The ID of the region to which the production site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceZoneId: The ID of the zone to which the production site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStandbyRegion")
    def attr_standby_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StandbyRegion: The initial destination region of the replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStandbyZone")
    def attr_standby_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StandbyZone: The initial destination zone of the replication group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the disk replica group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaGroupProps:
        ...


class _IDiskReplicaGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DiskReplicaGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ebs.IDiskReplicaGroup"

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaGroupName")
    def attr_disk_replica_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskReplicaGroupName: Consistent replication group name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskReplicaGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrLastRecoverPoint")
    def attr_last_recover_point(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.

        This parameter provides the return value as a timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLastRecoverPoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPairIds")
    def attr_pair_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PairIds: List of replication pair IDs contained in a consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPairIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPairNumber")
    def attr_pair_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PairNumber: The number of replication pairs contained in a consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPairNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryRegion")
    def attr_primary_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryRegion: The initial source region of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryZone")
    def attr_primary_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryZone: The initial source available area of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryZone"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaGroupId: The ID of the consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: resource group ID of enterprise.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RPO: The RPO value set by the consistency group in seconds.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRpo"))

    @builtins.property
    @jsii.member(jsii_name="attrSite")
    def attr_site(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Site: Site information sources for replication pairs and consistent replication groups.

        Possible values:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSite"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceRegionId")
    def attr_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceRegionId: The ID of the region to which the production site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceZoneId: The ID of the zone to which the production site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrStandbyRegion")
    def attr_standby_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StandbyRegion: The initial destination region of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStandbyRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrStandbyZone")
    def attr_standby_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StandbyZone: The initial destination zone of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStandbyZone"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the disk replica group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaGroupProps:
        return typing.cast(DiskReplicaGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDiskReplicaGroup).__jsii_proxy_class__ = lambda : _IDiskReplicaGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ebs.IDiskReplicaPair")
class IDiskReplicaPair(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DiskReplicaPair``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the asynchronous replication relationship.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDestinationDiskId")
    def attr_destination_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationDiskId: The ID of the standby disk.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskId")
    def attr_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskId: The ID of the primary disk.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaPairName")
    def attr_disk_replica_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaPairId: The ID of the disk replica pair.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RPO: The RPO value set by the consistency group in seconds.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceZoneId: The ID of the zone to which the production site belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the disk replica pair.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaPairProps:
        ...


class _IDiskReplicaPairProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DiskReplicaPair``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ebs.IDiskReplicaPair"

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the asynchronous replication relationship.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationDiskId")
    def attr_destination_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationDiskId: The ID of the standby disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationDiskId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskId")
    def attr_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskId: The ID of the primary disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaPairName")
    def attr_disk_replica_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskReplicaPairName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaPairId: The ID of the disk replica pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaPairId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RPO: The RPO value set by the consistency group in seconds.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRpo"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceZoneId: The ID of the zone to which the production site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the disk replica pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaPairProps:
        return typing.cast(DiskReplicaPairProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDiskReplicaPair).__jsii_proxy_class__ = lambda : _IDiskReplicaPairProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ebs.IDiskReplicaPairAddition")
class IDiskReplicaPairAddition(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``DiskReplicaPairAddition``.'''

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaGroupId: The ID of the replication pair-consistent group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaPairId: The ID of the replication pair.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaPairAdditionProps:
        ...


class _IDiskReplicaPairAdditionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DiskReplicaPairAddition``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ebs.IDiskReplicaPairAddition"

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaGroupId: The ID of the replication pair-consistent group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaPairId: The ID of the replication pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaPairId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaPairAdditionProps:
        return typing.cast(DiskReplicaPairAdditionProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDiskReplicaPairAddition).__jsii_proxy_class__ = lambda : _IDiskReplicaPairAdditionProxy


class RosDedicatedBlockStorageCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.RosDedicatedBlockStorageCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EBS::DedicatedBlockStorageCluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DedicatedBlockStorageCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedBlockStorageClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4766a873d4b49d198c8d085c87ac7daec5b8c5aa66fb98f646547880e68445d6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__08bab8f25b2f11210b63e6d55de12a4c73e78c1ccab35b2340f2f37d27252758)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedBlockStorageClusterId")
    def attr_dedicated_block_storage_cluster_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedBlockStorageClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="azone")
    def azone(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: azone: The ID of the zone in which to create the dedicated block storage cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "azone"))

    @azone.setter
    def azone(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be0466ca1a1735224856550831b47c6dd11139c1274f9aad4d0c0f338f8bd9b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "azone", value)

    @builtins.property
    @jsii.member(jsii_name="capacity")
    def capacity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: capacity: The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "capacity"))

    @capacity.setter
    def capacity(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19f3a3d9ecd4823c1f44048526348eb7029f9eaae6ff806bfaa672c9220b623f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "capacity", value)

    @builtins.property
    @jsii.member(jsii_name="dbscName")
    def dbsc_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbscName: The name of the dedicated block storage cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbscName"))

    @dbsc_name.setter
    def dbsc_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaf1196998b59a4aa4921200c760525abece6fdaa899f269ee39307d85a28be1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbscName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb034df0d987ab06ff165225f17fe31a6d7460379397591e3a08c448134a32d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3a6e631cbef6ce37030abeab3e83a41c8358bc7f6cff61a0b8d51a66bda5abf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodUnit: The unit of the subscription duration specified by Period. Set the value to Month.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66cbc12326f3d1391e59951cd6514de86d480868a324e2712f9fb38a72e2e9ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the dedicated block storage cluster. Valid values:
        Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
        Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
        Default value: Premium.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13e0a7370c3d55b5dc879fd485a92169c0cd381e15af34a4e2507f0a663219f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73d2ea971948ee68fa5befdf76243980449fceaa7a982d15539ae4b78d600e7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tag")
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''
        :Property: tag: Tags of dedicated block storage cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], jsii.get(self, "tag"))

    @tag.setter
    def tag(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ecc8301b5c3783d83af0d2c11c310dab0b5ddbb0ff9a7e2e073d10b39d62d89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tag", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ebs.RosDedicatedBlockStorageCluster.TagProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__0002bd81b5072ad3aa6c65adb0ac7f3063778a593fb5054ee99dcd6238163963)
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
            return "TagProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.RosDedicatedBlockStorageClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "azone": "azone",
        "capacity": "capacity",
        "dbsc_name": "dbscName",
        "period": "period",
        "period_unit": "periodUnit",
        "type": "type",
        "resource_group_id": "resourceGroupId",
        "tag": "tag",
    },
)
class RosDedicatedBlockStorageClusterProps:
    def __init__(
        self,
        *,
        azone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        dbsc_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDedicatedBlockStorageCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster

        :param azone: 
        :param capacity: 
        :param dbsc_name: 
        :param period: 
        :param period_unit: 
        :param type: 
        :param resource_group_id: 
        :param tag: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c386dd4833344588e973364a81e9f5a797950e0e0fb1b0d164614a3d9a3326d1)
            check_type(argname="argument azone", value=azone, expected_type=type_hints["azone"])
            check_type(argname="argument capacity", value=capacity, expected_type=type_hints["capacity"])
            check_type(argname="argument dbsc_name", value=dbsc_name, expected_type=type_hints["dbsc_name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "azone": azone,
            "capacity": capacity,
            "dbsc_name": dbsc_name,
            "period": period,
            "period_unit": period_unit,
            "type": type,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tag is not None:
            self._values["tag"] = tag

    @builtins.property
    def azone(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: azone: The ID of the zone in which to create the dedicated block storage cluster.
        '''
        result = self._values.get("azone")
        assert result is not None, "Required property 'azone' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def capacity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: capacity: The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
        '''
        result = self._values.get("capacity")
        assert result is not None, "Required property 'capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dbsc_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbscName: The name of the dedicated block storage cluster.
        '''
        result = self._values.get("dbsc_name")
        assert result is not None, "Required property 'dbsc_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodUnit: The unit of the subscription duration specified by Period. Set the value to Month.
        '''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the dedicated block storage cluster. Valid values:
        Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
        Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
        Default value: Premium.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''
        :Property: tag: Tags of dedicated block storage cluster.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedBlockStorageClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDiskReplicaGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EBS::DiskReplicaGroup``, which is used to create a replication pair-consistent group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DiskReplicaGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskReplicaGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__912b3745e3aeec543703d1a3d5a141e71cce6037d213426d6e8f024834c1f7d4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ce62c1f5d97a9af9c438116556ac71cdcdbaadabca5d7cb296ae8dc419835480)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the consistent replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaGroupName")
    def attr_disk_replica_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskReplicaGroupName: Consistent replication group name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskReplicaGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrLastRecoverPoint")
    def attr_last_recover_point(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLastRecoverPoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPairIds")
    def attr_pair_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PairIds: List of replication pair IDs contained in a consistent replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPairIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPairNumber")
    def attr_pair_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PairNumber: The number of replication pairs contained in a consistent replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPairNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryRegion")
    def attr_primary_region(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimaryRegion: The initial source region of the replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryZone")
    def attr_primary_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimaryZone: The initial source available area of the replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimaryZone"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaGroupId: The ID of the consistent replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: resource group ID of enterprise
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RPO: The RPO value set by the consistency group in seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRpo"))

    @builtins.property
    @jsii.member(jsii_name="attrSite")
    def attr_site(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Site: Site information sources for replication pairs and consistent replication groups. Possible values:
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSite"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceRegionId")
    def attr_source_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceRegionId: The ID of the region to which the production site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceZoneId: The ID of the zone to which the production site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrStandbyRegion")
    def attr_standby_region(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StandbyRegion: The initial destination region of the replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStandbyRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrStandbyZone")
    def attr_standby_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StandbyZone: The initial destination zone of the replication group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStandbyZone"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the disk replica group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="destinationRegionId")
    def destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationRegionId"))

    @destination_region_id.setter
    def destination_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__357c17e70a2f380319812310bb2bc2c344e1467a373142d5def56c1f3615eb40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationZoneId")
    def destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationZoneId"))

    @destination_zone_id.setter
    def destination_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07da349becb759df33de7a1a8eac9ca7f0a099de5e2226659f10f473db390c99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f270eabd2a12d827c04ba70b419050e97dff708a0d86cdb20102b6565bf15bce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceRegionId")
    def source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceRegionId: The ID of the region to which the production site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceRegionId"))

    @source_region_id.setter
    def source_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f8e615bf788f5693b5b389a8d92ef8ddd83f30b9926132c46ab9e3dee896b86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceZoneId")
    def source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceZoneId: The ID of the zone to which the production site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceZoneId"))

    @source_zone_id.setter
    def source_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1cb858693cc664416e16c794ffdc1ed38daabf6826f6125351fc3ffe20b7b25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the consistent replication group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d073c720e9e5211c04a12e56db2507c0a34df0f529678acf7a0d43fe9196f57f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="diskReplicaGroupName")
    def disk_replica_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskReplicaGroupName: Consistent replication group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskReplicaGroupName"))

    @disk_replica_group_name.setter
    def disk_replica_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__981ffdae005e796278423294bbc73f34c48e0ada0dda8aa670c0facde6a83941)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskReplicaGroupName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__bc18408423641b06b23736f2d4d85dd09713097e186d98e03c7d19309330bb0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="rpo")
    def rpo(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rpo: The RPO value set by the consistency group in seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rpo"))

    @rpo.setter
    def rpo(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2acb42993bb249d91792a4a573591369c162b6cff46b45266efdc45a7b661a88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rpo", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDiskReplicaGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags of disk replica group.
        '''
        return typing.cast(typing.Optional[typing.List["RosDiskReplicaGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDiskReplicaGroup.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69393e8b515b488c6894d2d4e2ce61c7cf1bb697ae20bcc84bfd257480435619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaGroup.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__ca04432dc4090fa8fa4216e62132a5a772b258302113818c429586550bdd8f36)
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
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_region_id": "destinationRegionId",
        "destination_zone_id": "destinationZoneId",
        "source_region_id": "sourceRegionId",
        "source_zone_id": "sourceZoneId",
        "description": "description",
        "disk_replica_group_name": "diskReplicaGroupName",
        "resource_group_id": "resourceGroupId",
        "rpo": "rpo",
        "tags": "tags",
    },
)
class RosDiskReplicaGroupProps:
    def __init__(
        self,
        *,
        destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_replica_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDiskReplicaGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDiskReplicaGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup

        :param destination_region_id: 
        :param destination_zone_id: 
        :param source_region_id: 
        :param source_zone_id: 
        :param description: 
        :param disk_replica_group_name: 
        :param resource_group_id: 
        :param rpo: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__808b37ee44d64a0d5df49b6e5186173368c809c68f60daa2b3e9c2720fabb8f2)
            check_type(argname="argument destination_region_id", value=destination_region_id, expected_type=type_hints["destination_region_id"])
            check_type(argname="argument destination_zone_id", value=destination_zone_id, expected_type=type_hints["destination_zone_id"])
            check_type(argname="argument source_region_id", value=source_region_id, expected_type=type_hints["source_region_id"])
            check_type(argname="argument source_zone_id", value=source_zone_id, expected_type=type_hints["source_zone_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disk_replica_group_name", value=disk_replica_group_name, expected_type=type_hints["disk_replica_group_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument rpo", value=rpo, expected_type=type_hints["rpo"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_region_id": destination_region_id,
            "destination_zone_id": destination_zone_id,
            "source_region_id": source_region_id,
            "source_zone_id": source_zone_id,
        }
        if description is not None:
            self._values["description"] = description
        if disk_replica_group_name is not None:
            self._values["disk_replica_group_name"] = disk_replica_group_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if rpo is not None:
            self._values["rpo"] = rpo
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        '''
        result = self._values.get("destination_region_id")
        assert result is not None, "Required property 'destination_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        '''
        result = self._values.get("destination_zone_id")
        assert result is not None, "Required property 'destination_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceRegionId: The ID of the region to which the production site belongs.
        '''
        result = self._values.get("source_region_id")
        assert result is not None, "Required property 'source_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceZoneId: The ID of the zone to which the production site belongs.
        '''
        result = self._values.get("source_zone_id")
        assert result is not None, "Required property 'source_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the consistent replication group.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_replica_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskReplicaGroupName: Consistent replication group name.
        '''
        result = self._values.get("disk_replica_group_name")
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
    def rpo(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rpo: The RPO value set by the consistency group in seconds.
        '''
        result = self._values.get("rpo")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDiskReplicaGroup.TagsProperty]]:
        '''
        :Property: tags: Tags of disk replica group.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDiskReplicaGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDiskReplicaGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDiskReplicaPair(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EBS::DiskReplicaPair``, which is used to create a replication pair.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DiskReplicaPair`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskReplicaPairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57049d20466a1101d6a5d0133019b594aabad103c0cb5c0424dfb8f590742d06)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3ab236548c17ed5bade3387eb2ee8b2840326c34517f083600f5924dd5b14fc4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the asynchronous replication relationship.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationDiskId")
    def attr_destination_disk_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DestinationDiskId: The ID of the standby disk.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationDiskId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskId")
    def attr_disk_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskId: The ID of the primary disk.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaPairName")
    def attr_disk_replica_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskReplicaPairName: The name of the asynchronous replication relationship.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskReplicaPairName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaPairId: The ID of the disk replica pair.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaPairId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RPO: The RPO value set by the consistency group in seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRpo"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceZoneId: The ID of the zone to which the production site belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the disk replica pair.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="destinationDiskId")
    def destination_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationDiskId: The ID of the standby disk.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationDiskId"))

    @destination_disk_id.setter
    def destination_disk_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39670e65c86b9a53529d5506cf1daf390a2f75188d10126fa1d5e7525345a8bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationDiskId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationRegionId")
    def destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationRegionId"))

    @destination_region_id.setter
    def destination_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__331199deffd1a1f3cb42aa2a927a9fc2c113e42a21383911ab69e76bbb7a99d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationZoneId")
    def destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationZoneId"))

    @destination_zone_id.setter
    def destination_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__daf92f1d719029f31b345b3a5284c231c4d2bd239285085e43d0354807e4479b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="diskId")
    def disk_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: diskId: The ID of the primary disk.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "diskId"))

    @disk_id.setter
    def disk_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b41d119ca8272739e86f38ac8e43b016a69e62e279af913ba08c0aed707847f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dad9feb6f08ccbacf032be6535cce8fbab4844e6fb244e1baee5fbe28d34870)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceZoneId")
    def source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceZoneId: The ID of the zone to which the production site belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceZoneId"))

    @source_zone_id.setter
    def source_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51892e06f6dc475436d94129b7f06e25ecda6ce4be2fa75b712a211647fa6fb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:

        - 10240 Kbps: equal to 10 Mbps.
        - 20480 Kbps: equal to 20 Mbps.
        - 51200 Kbps: equal to 50 Mbps.
        - 102400 Kbps: equal to 100 Mbps.
        Default value: 10240.
        This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8193dc446a06c0c60dc59e99d3ec8c105746068f1e38dbc0fb92767fd778ad7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68fb3faf3fe5a4c627d4c0ce10185f169d9fa9569e1cdf1ec55782262aa7b3bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="diskReplicaPairName")
    def disk_replica_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskReplicaPairName"))

    @disk_replica_pair_name.setter
    def disk_replica_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbf1aff00ecb43f37f8f2472bd7b9fa772d8ba828b1522d100dc79814087c689)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskReplicaPairName", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The payment type of the resource
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__330d6b2070e1ac2af41f0653043b980fddd6e7c546343a285aafea2c4a03c44a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:

        - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2733531d06d6135937de18bd3b1326fb9043a9f40185d5ec29dff56e5b76c3f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:

        - Month.Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b937659ab4a90c9c3665316ffbd134cfcf089fd62a27944ab5abb1c899896866)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f782d9b4cea4396c850a8b0df7ecaf7b70fce736a4505a9865fe7095cd9bf09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="rpo")
    def rpo(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rpo"))

    @rpo.setter
    def rpo(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d70283f5874e9f6eed158e951ec37aa3fb80f50fec02aeab3ea44fe19ef7831e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rpo", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDiskReplicaPair.TagsProperty"]]:
        '''
        :Property: tags: Tags of disk replica pair.
        '''
        return typing.cast(typing.Optional[typing.List["RosDiskReplicaPair.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDiskReplicaPair.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ab5d22488bea6ace386f7bf3b39a8717e6ebb70dbafaf7ffadd602a18cdf382)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__987218ac7078cde1798fc7f823cad2180fba1a57c44bf284b231ddc602d4fdad)
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


class RosDiskReplicaPairAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaPairAddition",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EBS::DiskReplicaPairAddition``, which is used to add a replication pair to a replication pair-consistent group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DiskReplicaPairAddition`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskReplicaPairAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosDiskReplicaPairAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ebs.RosDiskReplicaPairProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_disk_id": "destinationDiskId",
        "destination_region_id": "destinationRegionId",
        "destination_zone_id": "destinationZoneId",
        "disk_id": "diskId",
        "source_zone_id": "sourceZoneId",
        "bandwidth": "bandwidth",
        "description": "description",
        "disk_replica_pair_name": "diskReplicaPairName",
        "payment_type": "paymentType",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "rpo": "rpo",
        "tags": "tags",
    },
)
class RosDiskReplicaPairProps:
    def __init__(
        self,
        *,
        destination_disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_replica_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDiskReplicaPair.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDiskReplicaPair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair

        :param destination_disk_id: 
        :param destination_region_id: 
        :param destination_zone_id: 
        :param disk_id: 
        :param source_zone_id: 
        :param bandwidth: 
        :param description: 
        :param disk_replica_pair_name: 
        :param payment_type: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        :param rpo: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0026a1160111762188c14f86d6ce0609d60afa3adcaba2afd19109d2dc4c3021)
            check_type(argname="argument destination_disk_id", value=destination_disk_id, expected_type=type_hints["destination_disk_id"])
            check_type(argname="argument destination_region_id", value=destination_region_id, expected_type=type_hints["destination_region_id"])
            check_type(argname="argument destination_zone_id", value=destination_zone_id, expected_type=type_hints["destination_zone_id"])
            check_type(argname="argument disk_id", value=disk_id, expected_type=type_hints["disk_id"])
            check_type(argname="argument source_zone_id", value=source_zone_id, expected_type=type_hints["source_zone_id"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disk_replica_pair_name", value=disk_replica_pair_name, expected_type=type_hints["disk_replica_pair_name"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument rpo", value=rpo, expected_type=type_hints["rpo"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_disk_id": destination_disk_id,
            "destination_region_id": destination_region_id,
            "destination_zone_id": destination_zone_id,
            "disk_id": disk_id,
            "source_zone_id": source_zone_id,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if description is not None:
            self._values["description"] = description
        if disk_replica_pair_name is not None:
            self._values["disk_replica_pair_name"] = disk_replica_pair_name
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if rpo is not None:
            self._values["rpo"] = rpo
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def destination_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationDiskId: The ID of the standby disk.
        '''
        result = self._values.get("destination_disk_id")
        assert result is not None, "Required property 'destination_disk_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        '''
        result = self._values.get("destination_region_id")
        assert result is not None, "Required property 'destination_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        '''
        result = self._values.get("destination_zone_id")
        assert result is not None, "Required property 'destination_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: diskId: The ID of the primary disk.
        '''
        result = self._values.get("disk_id")
        assert result is not None, "Required property 'disk_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceZoneId: The ID of the zone to which the production site belongs.
        '''
        result = self._values.get("source_zone_id")
        assert result is not None, "Required property 'source_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:

        - 10240 Kbps: equal to 10 Mbps.
        - 20480 Kbps: equal to 20 Mbps.
        - 51200 Kbps: equal to 50 Mbps.
        - 102400 Kbps: equal to 100 Mbps.
        Default value: 10240.
        This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_replica_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
        '''
        result = self._values.get("disk_replica_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The payment type of the resource
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:

        - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:

        - Month.Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rpo(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
        '''
        result = self._values.get("rpo")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDiskReplicaPair.TagsProperty]]:
        '''
        :Property: tags: Tags of disk replica pair.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDiskReplicaPair.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDiskReplicaPairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDedicatedBlockStorageCluster)
class DedicatedBlockStorageCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.DedicatedBlockStorageCluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EBS::DedicatedBlockStorageCluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDedicatedBlockStorageCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DedicatedBlockStorageClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c87701359fee1467ec469ed59533912f5145975339a77e2fec77358150c61882)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedBlockStorageClusterId")
    def attr_dedicated_block_storage_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedBlockStorageClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedBlockStorageClusterProps:
        return typing.cast(DedicatedBlockStorageClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f8d10e2e1e8c3a049201bc9354f1a14955e1de811f1e8750034cb5ebdb4c122)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b617b58f755f220d1a4b19bd7afd7498115e73530c26985cd3df8deb1d516f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1172a8f79479c593e9af8521e3dac65c4b0a2b1cd3bc90744e249bab1d5a7911)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDiskReplicaGroup)
class DiskReplicaGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EBS::DiskReplicaGroup``, which is used to create a replication pair-consistent group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDiskReplicaGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DiskReplicaGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19af0b2c0de14a374e83aacf3d743929cdcb5bcd290aa9441b453b6014efd683)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaGroupName")
    def attr_disk_replica_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskReplicaGroupName: Consistent replication group name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskReplicaGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrLastRecoverPoint")
    def attr_last_recover_point(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.

        This parameter provides the return value as a timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLastRecoverPoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPairIds")
    def attr_pair_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PairIds: List of replication pair IDs contained in a consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPairIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPairNumber")
    def attr_pair_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PairNumber: The number of replication pairs contained in a consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPairNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryRegion")
    def attr_primary_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryRegion: The initial source region of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimaryZone")
    def attr_primary_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimaryZone: The initial source available area of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimaryZone"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaGroupId")
    def attr_replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaGroupId: The ID of the consistent replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: resource group ID of enterprise.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RPO: The RPO value set by the consistency group in seconds.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRpo"))

    @builtins.property
    @jsii.member(jsii_name="attrSite")
    def attr_site(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Site: Site information sources for replication pairs and consistent replication groups.

        Possible values:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSite"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceRegionId")
    def attr_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceRegionId: The ID of the region to which the production site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceZoneId: The ID of the zone to which the production site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrStandbyRegion")
    def attr_standby_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StandbyRegion: The initial destination region of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStandbyRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrStandbyZone")
    def attr_standby_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StandbyZone: The initial destination zone of the replication group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStandbyZone"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the disk replica group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaGroupProps:
        return typing.cast(DiskReplicaGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63c7819542076b80b16e8fe5107b57f05a185d041f1966bd7a71e1032a88e141)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0927de4d3ace1072dd6c339d0b41096c56ca3444c377f22e68fc2285687167b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1be05b9fe281a1cb6296e25fe5d2e946e0e6ecf9970148b5a5c9e1ad27a8996d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDiskReplicaPair)
class DiskReplicaPair(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaPair",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EBS::DiskReplicaPair``, which is used to create a replication pair.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDiskReplicaPair``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DiskReplicaPairProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ecdce92b0a832fb86e7ac308f45569851b720f75a305bfb6560c52b4b789133)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the asynchronous replication relationship.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationDiskId")
    def attr_destination_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationDiskId: The ID of the standby disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationDiskId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationRegionId")
    def attr_destination_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationZoneId")
    def attr_destination_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDestinationZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskId")
    def attr_disk_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskId: The ID of the primary disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskReplicaPairName")
    def attr_disk_replica_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskReplicaPairName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaPairId: The ID of the disk replica pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaPairId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRpo")
    def attr_rpo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RPO: The RPO value set by the consistency group in seconds.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRpo"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceZoneId")
    def attr_source_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceZoneId: The ID of the zone to which the production site belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the disk replica pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaPairProps:
        return typing.cast(DiskReplicaPairProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97d4568fd59ac296008962ed037647eb8afb3b7b25d2f56be8ab6383d672d659)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b48ef03a42b90455a2535dd7845a92a1fbff4512c7dce85019ead5a1517beb94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef79c6e8a7cf07c3c1002fc80beeaea7df87dc2be435c40c10b22bb4638b27d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDiskReplicaPairAddition)
class DiskReplicaPairAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ebs.DiskReplicaPairAddition",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EBS::DiskReplicaPairAddition``, which is used to add a replication pair to a replication pair-consistent group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDiskReplicaPairAddition``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DiskReplicaPairAdditionProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_replica_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaGroupId: The ID of the replication pair-consistent group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaPairId")
    def attr_replica_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaPairId: The ID of the replication pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaPairId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DiskReplicaPairAdditionProps:
        return typing.cast(DiskReplicaPairAdditionProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e690ed761803cc2435f6275a16dd8fcffd49d0a4f286fd67c11170e2498b8f11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80c7355c7d701d10dce9668569ff404c03af3e88a4249b1a675c7b67286e7ea9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc2fcd1e466ec5d32df464b4528459a61d563b593f09542c04ed75f1a57f53e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "DedicatedBlockStorageCluster",
    "DedicatedBlockStorageClusterProps",
    "DiskReplicaGroup",
    "DiskReplicaGroupProps",
    "DiskReplicaPair",
    "DiskReplicaPairAddition",
    "DiskReplicaPairAdditionProps",
    "DiskReplicaPairProps",
    "IDedicatedBlockStorageCluster",
    "IDiskReplicaGroup",
    "IDiskReplicaPair",
    "IDiskReplicaPairAddition",
    "RosDedicatedBlockStorageCluster",
    "RosDedicatedBlockStorageClusterProps",
    "RosDiskReplicaGroup",
    "RosDiskReplicaGroupProps",
    "RosDiskReplicaPair",
    "RosDiskReplicaPairAddition",
    "RosDiskReplicaPairAdditionProps",
    "RosDiskReplicaPairProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__02f1d81430aa8571004d6cd0b421c3c77cc30bcd81d954cf6e62d08c0d3c747e(
    *,
    azone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    dbsc_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a76c7ab106e58459e7cab0e86d12eb2d444eea35ded90de472201ef6a1c785f7(
    *,
    destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_replica_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDiskReplicaGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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

def _typecheckingstub__39be8219284ab11de1631b982a3fa1e87aa7f98fbb66156dc0245e9fc8479787(
    *,
    destination_disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_replica_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDiskReplicaPair.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4766a873d4b49d198c8d085c87ac7daec5b8c5aa66fb98f646547880e68445d6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedBlockStorageClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08bab8f25b2f11210b63e6d55de12a4c73e78c1ccab35b2340f2f37d27252758(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be0466ca1a1735224856550831b47c6dd11139c1274f9aad4d0c0f338f8bd9b2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19f3a3d9ecd4823c1f44048526348eb7029f9eaae6ff806bfaa672c9220b623f(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaf1196998b59a4aa4921200c760525abece6fdaa899f269ee39307d85a28be1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb034df0d987ab06ff165225f17fe31a6d7460379397591e3a08c448134a32d7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3a6e631cbef6ce37030abeab3e83a41c8358bc7f6cff61a0b8d51a66bda5abf(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66cbc12326f3d1391e59951cd6514de86d480868a324e2712f9fb38a72e2e9ca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13e0a7370c3d55b5dc879fd485a92169c0cd381e15af34a4e2507f0a663219f8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73d2ea971948ee68fa5befdf76243980449fceaa7a982d15539ae4b78d600e7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ecc8301b5c3783d83af0d2c11c310dab0b5ddbb0ff9a7e2e073d10b39d62d89(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0002bd81b5072ad3aa6c65adb0ac7f3063778a593fb5054ee99dcd6238163963(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c386dd4833344588e973364a81e9f5a797950e0e0fb1b0d164614a3d9a3326d1(
    *,
    azone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    dbsc_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__912b3745e3aeec543703d1a3d5a141e71cce6037d213426d6e8f024834c1f7d4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDiskReplicaGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce62c1f5d97a9af9c438116556ac71cdcdbaadabca5d7cb296ae8dc419835480(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__357c17e70a2f380319812310bb2bc2c344e1467a373142d5def56c1f3615eb40(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07da349becb759df33de7a1a8eac9ca7f0a099de5e2226659f10f473db390c99(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f270eabd2a12d827c04ba70b419050e97dff708a0d86cdb20102b6565bf15bce(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f8e615bf788f5693b5b389a8d92ef8ddd83f30b9926132c46ab9e3dee896b86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1cb858693cc664416e16c794ffdc1ed38daabf6826f6125351fc3ffe20b7b25(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d073c720e9e5211c04a12e56db2507c0a34df0f529678acf7a0d43fe9196f57f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__981ffdae005e796278423294bbc73f34c48e0ada0dda8aa670c0facde6a83941(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc18408423641b06b23736f2d4d85dd09713097e186d98e03c7d19309330bb0c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2acb42993bb249d91792a4a573591369c162b6cff46b45266efdc45a7b661a88(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69393e8b515b488c6894d2d4e2ce61c7cf1bb697ae20bcc84bfd257480435619(
    value: typing.Optional[typing.List[RosDiskReplicaGroup.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca04432dc4090fa8fa4216e62132a5a772b258302113818c429586550bdd8f36(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__808b37ee44d64a0d5df49b6e5186173368c809c68f60daa2b3e9c2720fabb8f2(
    *,
    destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_replica_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDiskReplicaGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57049d20466a1101d6a5d0133019b594aabad103c0cb5c0424dfb8f590742d06(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDiskReplicaPairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ab236548c17ed5bade3387eb2ee8b2840326c34517f083600f5924dd5b14fc4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39670e65c86b9a53529d5506cf1daf390a2f75188d10126fa1d5e7525345a8bf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__331199deffd1a1f3cb42aa2a927a9fc2c113e42a21383911ab69e76bbb7a99d7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daf92f1d719029f31b345b3a5284c231c4d2bd239285085e43d0354807e4479b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b41d119ca8272739e86f38ac8e43b016a69e62e279af913ba08c0aed707847f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dad9feb6f08ccbacf032be6535cce8fbab4844e6fb244e1baee5fbe28d34870(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51892e06f6dc475436d94129b7f06e25ecda6ce4be2fa75b712a211647fa6fb3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8193dc446a06c0c60dc59e99d3ec8c105746068f1e38dbc0fb92767fd778ad7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68fb3faf3fe5a4c627d4c0ce10185f169d9fa9569e1cdf1ec55782262aa7b3bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbf1aff00ecb43f37f8f2472bd7b9fa772d8ba828b1522d100dc79814087c689(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__330d6b2070e1ac2af41f0653043b980fddd6e7c546343a285aafea2c4a03c44a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2733531d06d6135937de18bd3b1326fb9043a9f40185d5ec29dff56e5b76c3f3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b937659ab4a90c9c3665316ffbd134cfcf089fd62a27944ab5abb1c899896866(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f782d9b4cea4396c850a8b0df7ecaf7b70fce736a4505a9865fe7095cd9bf09(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d70283f5874e9f6eed158e951ec37aa3fb80f50fec02aeab3ea44fe19ef7831e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ab5d22488bea6ace386f7bf3b39a8717e6ebb70dbafaf7ffadd602a18cdf382(
    value: typing.Optional[typing.List[RosDiskReplicaPair.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__987218ac7078cde1798fc7f823cad2180fba1a57c44bf284b231ddc602d4fdad(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__0026a1160111762188c14f86d6ce0609d60afa3adcaba2afd19109d2dc4c3021(
    *,
    destination_disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disk_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_replica_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rpo: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDiskReplicaPair.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c87701359fee1467ec469ed59533912f5145975339a77e2fec77358150c61882(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DedicatedBlockStorageClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f8d10e2e1e8c3a049201bc9354f1a14955e1de811f1e8750034cb5ebdb4c122(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b617b58f755f220d1a4b19bd7afd7498115e73530c26985cd3df8deb1d516f6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1172a8f79479c593e9af8521e3dac65c4b0a2b1cd3bc90744e249bab1d5a7911(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19af0b2c0de14a374e83aacf3d743929cdcb5bcd290aa9441b453b6014efd683(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DiskReplicaGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63c7819542076b80b16e8fe5107b57f05a185d041f1966bd7a71e1032a88e141(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0927de4d3ace1072dd6c339d0b41096c56ca3444c377f22e68fc2285687167b1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1be05b9fe281a1cb6296e25fe5d2e946e0e6ecf9970148b5a5c9e1ad27a8996d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ecdce92b0a832fb86e7ac308f45569851b720f75a305bfb6560c52b4b789133(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DiskReplicaPairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97d4568fd59ac296008962ed037647eb8afb3b7b25d2f56be8ab6383d672d659(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b48ef03a42b90455a2535dd7845a92a1fbff4512c7dce85019ead5a1517beb94(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef79c6e8a7cf07c3c1002fc80beeaea7df87dc2be435c40c10b22bb4638b27d5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b12b85f30dde70cead4122ef554c8021df555676c3cd54e7738e8ffd651d53ad(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DiskReplicaPairAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e690ed761803cc2435f6275a16dd8fcffd49d0a4f286fd67c11170e2498b8f11(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80c7355c7d701d10dce9668569ff404c03af3e88a4249b1a675c7b67286e7ea9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc2fcd1e466ec5d32df464b4528459a61d563b593f09542c04ed75f1a57f53e5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
