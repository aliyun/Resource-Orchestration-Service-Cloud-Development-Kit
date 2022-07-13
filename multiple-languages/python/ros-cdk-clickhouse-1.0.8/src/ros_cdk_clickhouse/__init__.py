'''
## Aliyun ROS CLICKHOUSE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CLICKHOUSE from '@alicloud/ros-cdk-clickhouse';
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
    jsii_type="@alicloud/ros-cdk-clickhouse.DBCluster",
):
    '''A ROS resource type:  ``ALIYUN::ClickHouse::DBCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ClickHouse::DBCluster``.

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
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> ros_cdk_core.IResolvable:
        '''Attribute AliUid: AliUid.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBid")
    def attr_bid(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bid: BusinessID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> ros_cdk_core.IResolvable:
        '''Attribute Category: Series, value: Basic: Basic version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(self) -> ros_cdk_core.IResolvable:
        '''Attribute CommodityCode: Product Code.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCommodityCode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: ConnectionString.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBClusterDescription: DBClusterDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBClusterId: The id of DBCluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBClusterType: Cluster instance type, value:  Common: normal instance;

        Readonly: read-only instance; Guard: disaster recovery instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBClusterVersion: Version, value:  19.15.2.2.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBNodeClass: DBNodeClass.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBNodeCount: Number of node groups.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBNodeStorage: DBNodeStorage.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute DbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeStorageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(self) -> ros_cdk_core.IResolvable:
        '''Attribute EncryptionKey: KMS key ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEncryptionKey"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEncryptionType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> ros_cdk_core.IResolvable:
        '''Attribute Engine: Engine.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute EngineVersion: EngineVersion.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(self) -> ros_cdk_core.IResolvable:
        '''Attribute IsExpired: IsExpired.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsExpired"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> ros_cdk_core.IResolvable:
        '''Attribute LockMode: LockMode.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> ros_cdk_core.IResolvable:
        '''Attribute LockReason: Reason for lock.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PaymentType: PayType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> ros_cdk_core.IResolvable:
        '''Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeriod"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: Connection port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: Internet connection address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicPort: PublicPort.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute StorageType: StorageType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcCloudInstanceId: VpcCloudInstanceId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: ZoneId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.DBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "db_cluster_network_type": "dbClusterNetworkType",
        "db_cluster_type": "dbClusterType",
        "db_cluster_version": "dbClusterVersion",
        "db_node_count": "dbNodeCount",
        "db_node_storage": "dbNodeStorage",
        "db_node_storage_type": "dbNodeStorageType",
        "payment_type": "paymentType",
        "db_cluster_description": "dbClusterDescription",
        "encryption_key": "encryptionKey",
        "encryption_type": "encryptionType",
        "period": "period",
        "used_time": "usedTime",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DBClusterProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_node_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        db_node_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        db_node_storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        payment_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ClickHouse::DBCluster``.

        :param category: Property category: Series, value: Basic: Basic version.
        :param db_cluster_network_type: Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.
        :param db_cluster_type: Property dbClusterType: Cluster instance type, value: Common: normal instance; Readonly: read-only instance; Guard: disaster recovery instance
        :param db_cluster_version: Property dbClusterVersion: Version, value: 19.15.2.2.
        :param db_node_count: Property dbNodeCount: Number of node groups.
        :param db_node_storage: Property dbNodeStorage: DBNodeStorage.
        :param db_node_storage_type: Property dbNodeStorageType: Instance node storage type. Valid values: cloud_essd, cloud_efficiency.
        :param payment_type: Property paymentType: PayType.
        :param db_cluster_description: Property dbClusterDescription: DBClusterDescription.
        :param encryption_key: Property encryptionKey: KMS key ID.
        :param encryption_type: Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        :param period: Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values: Year, Month.
        :param used_time: Property usedTime: When Period is Month, the value of UsedTime is [1-9]. When Period is Year, the value of UsedTime is [1-3]
        :param vpc_id: Property vpcId: VpcId.
        :param v_switch_id: Property vSwitchId: VSwitchId.
        :param zone_id: Property zoneId: ZoneId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "category": category,
            "db_cluster_network_type": db_cluster_network_type,
            "db_cluster_type": db_cluster_type,
            "db_cluster_version": db_cluster_version,
            "db_node_count": db_node_count,
            "db_node_storage": db_node_storage,
            "db_node_storage_type": db_node_storage_type,
            "payment_type": payment_type,
        }
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if encryption_type is not None:
            self._values["encryption_type"] = encryption_type
        if period is not None:
            self._values["period"] = period
        if used_time is not None:
            self._values["used_time"] = used_time
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property category: Series, value: Basic: Basic version.'''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        result = self._values.get("db_cluster_network_type")
        assert result is not None, "Required property 'db_cluster_network_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbClusterType: Cluster instance type, value:  Common: normal instance;

        Readonly: read-only instance; Guard: disaster recovery instance
        '''
        result = self._values.get("db_cluster_type")
        assert result is not None, "Required property 'db_cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbClusterVersion: Version, value:  19.15.2.2.'''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_node_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbNodeCount: Number of node groups.'''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_node_storage(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbNodeStorage: DBNodeStorage.'''
        result = self._values.get("db_node_storage")
        assert result is not None, "Required property 'db_node_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("db_node_storage_type")
        assert result is not None, "Required property 'db_node_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def payment_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property paymentType: PayType.'''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbClusterDescription: DBClusterDescription.'''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionKey: KMS key ID.'''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property usedTime: When Period is Month, the value of UsedTime is [1-9].

        When Period is Year, the value of UsedTime is [1-3]
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: VpcId.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: VSwitchId.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: ZoneId.'''
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
    jsii_type="@alicloud/ros-cdk-clickhouse.RosDBCluster",
):
    '''A ROS template type:  ``ALIYUN::ClickHouse::DBCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ClickHouse::DBCluster``.

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
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AliUid: AliUid
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBid")
    def attr_bid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bid: BusinessID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Category: Series, value: Basic: Basic version
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CommodityCode: Product Code
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCommodityCode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionString: ConnectionString
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBClusterDescription: DBClusterDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBClusterId: The id of DBCluster
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBClusterNetworkType: Network type of the cluster instance, value: VPC
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBClusterVersion: Version, value:  19.15.2.2
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbClusterVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBNodeClass: DBNodeClass
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBNodeCount: Number of node groups
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBNodeStorage: DBNodeStorage
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbNodeStorageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EncryptionKey: KMS key ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEncryptionKey"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEncryptionType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Engine: Engine
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EngineVersion: EngineVersion
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IsExpired: IsExpired
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsExpired"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LockMode: LockMode
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LockReason: Reason for lock
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PaymentType: PayType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeriod"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: Connection port
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: Internet connection address
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicPort: PublicPort
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: StorageType: StorageType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcCloudInstanceId: VpcCloudInstanceId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: VpcId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitchId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: ZoneId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="category")
    def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: category: Series, value: Basic: Basic version
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterNetworkType")
    def db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterNetworkType: Network type of the cluster instance, value: VPC
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbClusterNetworkType"))

    @db_cluster_network_type.setter
    def db_cluster_network_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbClusterNetworkType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterType")
    def db_cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbClusterType"))

    @db_cluster_type.setter
    def db_cluster_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbClusterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterVersion")
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterVersion: Version, value:  19.15.2.2
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbClusterVersion"))

    @db_cluster_version.setter
    def db_cluster_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbClusterVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbNodeCount")
    def db_node_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbNodeCount: Number of node groups
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbNodeCount"))

    @db_node_count.setter
    def db_node_count(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbNodeCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbNodeStorage")
    def db_node_storage(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbNodeStorage: DBNodeStorage
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbNodeStorage"))

    @db_node_storage.setter
    def db_node_storage(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbNodeStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbNodeStorageType")
    def db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbNodeStorageType"))

    @db_node_storage_type.setter
    def db_node_storage_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbNodeStorageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="paymentType")
    def payment_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: paymentType: PayType
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "paymentType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbClusterDescription")
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbClusterDescription: DBClusterDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbClusterDescription"))

    @db_cluster_description.setter
    def db_cluster_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbClusterDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: KMS key ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionType")
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionType"))

    @encryption_type.setter
    def encryption_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: usedTime: When Period is Month, the value of UsedTime is [1-9].  When Period is Year, the value of UsedTime is [1-3]
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "usedTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: VpcId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: ZoneId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.RosDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "db_cluster_network_type": "dbClusterNetworkType",
        "db_cluster_type": "dbClusterType",
        "db_cluster_version": "dbClusterVersion",
        "db_node_count": "dbNodeCount",
        "db_node_storage": "dbNodeStorage",
        "db_node_storage_type": "dbNodeStorageType",
        "payment_type": "paymentType",
        "db_cluster_description": "dbClusterDescription",
        "encryption_key": "encryptionKey",
        "encryption_type": "encryptionType",
        "period": "period",
        "used_time": "usedTime",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDBClusterProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_node_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        db_node_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        db_node_storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        payment_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_cluster_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ClickHouse::DBCluster``.

        :param category: 
        :param db_cluster_network_type: 
        :param db_cluster_type: 
        :param db_cluster_version: 
        :param db_node_count: 
        :param db_node_storage: 
        :param db_node_storage_type: 
        :param payment_type: 
        :param db_cluster_description: 
        :param encryption_key: 
        :param encryption_type: 
        :param period: 
        :param used_time: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "category": category,
            "db_cluster_network_type": db_cluster_network_type,
            "db_cluster_type": db_cluster_type,
            "db_cluster_version": db_cluster_version,
            "db_node_count": db_node_count,
            "db_node_storage": db_node_storage,
            "db_node_storage_type": db_node_storage_type,
            "payment_type": payment_type,
        }
        if db_cluster_description is not None:
            self._values["db_cluster_description"] = db_cluster_description
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if encryption_type is not None:
            self._values["encryption_type"] = encryption_type
        if period is not None:
            self._values["period"] = period
        if used_time is not None:
            self._values["used_time"] = used_time
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: category: Series, value: Basic: Basic version
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterNetworkType: Network type of the cluster instance, value: VPC
        '''
        result = self._values.get("db_cluster_network_type")
        assert result is not None, "Required property 'db_cluster_network_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
        '''
        result = self._values.get("db_cluster_type")
        assert result is not None, "Required property 'db_cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbClusterVersion: Version, value:  19.15.2.2
        '''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_node_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbNodeCount: Number of node groups
        '''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_node_storage(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbNodeStorage: DBNodeStorage
        '''
        result = self._values.get("db_node_storage")
        assert result is not None, "Required property 'db_node_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("db_node_storage_type")
        assert result is not None, "Required property 'db_node_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def payment_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: paymentType: PayType
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbClusterDescription: DBClusterDescription
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: KMS key ID
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        '''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: usedTime: When Period is Month, the value of UsedTime is [1-9].  When Period is Year, the value of UsedTime is [1-3]
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: VpcId
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: ZoneId
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
