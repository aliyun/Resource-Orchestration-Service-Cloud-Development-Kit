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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class DBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.DBCluster",
):
    '''A ROS resource type:  ``ALIYUN::ClickHouse::DBCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBClusterProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c4ce03a3d057e19f0669db357cfb03e953a7728bef9f47f3cbee6f135d143b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AliUid: AliUid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bid: BusinessID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Category: The edition of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CommodityCode: Product Code.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: ConnectionString.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterDescription: The description of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterId: The id of DBCluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterType: The specification of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterVersion: Version, value:  19.15.2.2.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeClass: DBNodeClass.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeCount: The number of nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeStorage: The storage capacity of a single node.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EncryptionKey: KMS key ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Engine: Engine.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineVersion: EngineVersion.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsExpired: IsExpired.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LockMode: LockMode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LockReason: Reason for lock.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: PayType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Connection port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: Internet connection address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicPort: PublicPort.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StorageType: StorageType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcCloudInstanceId: VpcCloudInstanceId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: ZoneId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))


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
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ClickHouse::DBCluster``.

        :param category: Property category: The edition of the cluster. Valid values: Basic: Single-replica Edition HighAvailability: Double-replica Edition
        :param db_cluster_network_type: Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.
        :param db_cluster_type: Property dbClusterType: The specification of the cluster. If the cluster is of the Single-replica Edition, the following values are valid: S4: 4 cores, 16 GB. S8: 8 cores, 32 GB. S16: 16 cores, 64 GB. S32: 32 cores, 128 GB. S64: 64 cores, 256 GB. S104: 104 cores, 384 GB. If the cluster is of the Double-replica Edition, the following values are valid: C4: 4 cores, 16 GB. C8: 8 cores, 32 GB. C16: 16 cores, 64 GB. C32: 32 cores, 128 GB. C64: 64 cores, 256 GB. C104: 104 cores, 384 GB.
        :param db_cluster_version: Property dbClusterVersion: Version, value: 19.15.2.2.
        :param db_node_count: Property dbNodeCount: The number of nodes. If the cluster is of the Single-replica Edition, the value ranges from 1 to 48. If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
        :param db_node_storage: Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB. Note self value is a multiple of 100.
        :param db_node_storage_type: Property dbNodeStorageType: Instance node storage type. Valid values: cloud_essd, cloud_efficiency.
        :param payment_type: Property paymentType: The billing method of the cluster. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param db_cluster_description: Property dbClusterDescription: The description of the cluster.
        :param encryption_key: Property encryptionKey: KMS key ID.
        :param encryption_type: Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        :param period: Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values: Year, Month.
        :param used_time: Property usedTime: The subscription duration. Valid values: When Period is Month, it could be from 1 to 9, 12, 24, 36. When Period is Year, it could be from 1 to 3.
        :param vpc_id: Property vpcId: VpcId.
        :param v_switch_id: Property vSwitchId: VSwitchId.
        :param zone_id: Property zoneId: ZoneId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11cdf1e15f00295344c39a8496284d811abeb2bff7b0ba061aa6994e631494eb)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument db_cluster_network_type", value=db_cluster_network_type, expected_type=type_hints["db_cluster_network_type"])
            check_type(argname="argument db_cluster_type", value=db_cluster_type, expected_type=type_hints["db_cluster_type"])
            check_type(argname="argument db_cluster_version", value=db_cluster_version, expected_type=type_hints["db_cluster_version"])
            check_type(argname="argument db_node_count", value=db_node_count, expected_type=type_hints["db_node_count"])
            check_type(argname="argument db_node_storage", value=db_node_storage, expected_type=type_hints["db_node_storage"])
            check_type(argname="argument db_node_storage_type", value=db_node_storage_type, expected_type=type_hints["db_node_storage_type"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument encryption_type", value=encryption_type, expected_type=type_hints["encryption_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property category: The edition of the cluster.

        Valid values:
        Basic: Single-replica Edition
        HighAvailability: Double-replica Edition
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        result = self._values.get("db_cluster_network_type")
        assert result is not None, "Required property 'db_cluster_network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterType: The specification of the cluster.

        If the cluster is of the Single-replica Edition, the following values are valid:
        S4: 4 cores, 16 GB.
        S8: 8 cores, 32 GB.
        S16: 16 cores, 64 GB.
        S32: 32 cores, 128 GB.
        S64: 64 cores, 256 GB.
        S104: 104 cores, 384 GB.
        If the cluster is of the Double-replica Edition, the following values are valid:
        C4: 4 cores, 16 GB.
        C8: 8 cores, 32 GB.
        C16: 16 cores, 64 GB.
        C32: 32 cores, 128 GB.
        C64: 64 cores, 256 GB.
        C104: 104 cores, 384 GB.
        '''
        result = self._values.get("db_cluster_type")
        assert result is not None, "Required property 'db_cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterVersion: Version, value:  19.15.2.2.'''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeCount: The number of nodes.

        If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
        If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
        '''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeStorage: The storage capacity of a single node.

        Valid values: 100 to 32000. Unit: GB.
        Note self value is a multiple of 100.
        '''
        result = self._values.get("db_node_storage")
        assert result is not None, "Required property 'db_node_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("db_node_storage_type")
        assert result is not None, "Required property 'db_node_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property paymentType: The billing method of the cluster.

        Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterDescription: The description of the cluster.'''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKey: KMS key ID.'''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usedTime: The subscription duration.

        Valid values:
        When Period is Month, it could be from 1 to 9, 12, 24, 36.
        When Period is Year, it could be from 1 to 3.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: VpcId.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: VSwitchId.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: ZoneId.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    jsii_type="@alicloud/ros-cdk-clickhouse.RosDBCluster",
):
    '''A ROS template type:  ``ALIYUN::ClickHouse::DBCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ClickHouse::DBCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2e7e9926b9bbc3acdf131f70cb9c09aeb272905548403fce40cca9222a912f6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bff91044fbc0b150f6bcfd5339d270d79c9fac412129447db47972ae287b7c2a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AliUid: AliUid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bid: BusinessID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Category: The edition of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CommodityCode: Product Code
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: ConnectionString
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterDescription: The description of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterId: The id of DBCluster
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterNetworkType: Network type of the cluster instance, value: VPC
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterType: The specification of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterVersion: Version, value:  19.15.2.2
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeClass: DBNodeClass
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeCount: The number of nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeStorage: The storage capacity of a single node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptionKey: KMS key ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Engine: Engine
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: EngineVersion
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsExpired: IsExpired
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockMode: LockMode
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockReason: Reason for lock
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: PayType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Connection port
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: Internet connection address
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: PublicPort
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageType: StorageType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcCloudInstanceId: VpcCloudInstanceId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VpcId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitchId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: ZoneId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        category: The edition of the cluster. Valid values:
        Basic: Single-replica Edition
        HighAvailability: Double-replica Edition
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c57b1a9d162182a59e7cbde9792e45919610ac89414498e2335b7e17bf034069)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterNetworkType")
    def db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterNetworkType: Network type of the cluster instance, value: VPC
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterNetworkType"))

    @db_cluster_network_type.setter
    def db_cluster_network_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__963b90599b8c19655b8319563b55c0a1b9fb62a28a888efc90bc4b86f32ad4b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterType")
    def db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbClusterType: The specification of the cluster.
        If the cluster is of the Single-replica Edition, the following values are valid:
        S4: 4 cores, 16 GB.
        S8: 8 cores, 32 GB.
        S16: 16 cores, 64 GB.
        S32: 32 cores, 128 GB.
        S64: 64 cores, 256 GB.
        S104: 104 cores, 384 GB.
        If the cluster is of the Double-replica Edition, the following values are valid:
        C4: 4 cores, 16 GB.
        C8: 8 cores, 32 GB.
        C16: 16 cores, 64 GB.
        C32: 32 cores, 128 GB.
        C64: 64 cores, 256 GB.
        C104: 104 cores, 384 GB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterType"))

    @db_cluster_type.setter
    def db_cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6f36fcf11d52da476685932fbde00cc085b79cb93538f11fef3d76bb625da0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterType", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterVersion")
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterVersion: Version, value:  19.15.2.2
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterVersion"))

    @db_cluster_version.setter
    def db_cluster_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ea3d74cf01cd5987d5ded1165be9db2252227676ea9854d7ee0b948312ffb81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterVersion", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeCount")
    def db_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbNodeCount: The number of nodes.
        If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
        If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeCount"))

    @db_node_count.setter
    def db_node_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2698201b6aa8e65ed61f73e162e6aac1f1350cb2d3abe6f53a01322cf0d68113)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeCount", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeStorage")
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
        Note self value is a multiple of 100.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeStorage"))

    @db_node_storage.setter
    def db_node_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c321a28ecaf755ae284a1d588303492d03d9d34c6ec526dba1d0b7433ea9d6b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeStorage", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeStorageType")
    def db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeStorageType"))

    @db_node_storage_type.setter
    def db_node_storage_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2e7457e70ec7041dd544591ac650073661988c05d728cb6e373d46216f99116)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b305674c0c097a424b0cb5853d84c049f8ab8219dfb57232a962b94c9a48b4bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        paymentType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b89cd778857e5623da9627f330ffd03c9da24af160471ee8907ab208d7c769d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterDescription")
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterDescription: The description of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterDescription"))

    @db_cluster_description.setter
    def db_cluster_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcdfaff61ff1a4c902375e599520d6ea776982f2c3758fa961c20b63d73063e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterDescription", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: KMS key ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48e04e0427cc7d7a93f6ef9816803b4add2c41834c08e7f360b8367a2eb3eae9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionType")
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionType"))

    @encryption_type.setter
    def encryption_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f34e39824cf6bfec3a528b8efc59230bb352a6bc838c184f5f4780d12cf71e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad0ef60bca2df1a320c4dd9071cf5f1675cf9c646b0914c0c366a8d33dcab189)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usedTime: The subscription duration. Valid values:
        When Period is Month, it could be from 1 to 9, 12, 24, 36.
        When Period is Year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0290acf2e94169d9f535265b2930fc6c6d6767ad97c0e6cf575c7e9109690992)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usedTime", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VpcId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__802d88d719d95d51caf0d4eb9ca0b369b6d6be70fd94c34f2aeb598b60bd5d9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cd77ddebfe190335c9dbd744244877c87d72039b3484e623db3092ad90c68f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: ZoneId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7fcaa9cf352ed4428a700c312210ee3e8ea15a4f3536fed5c3b7e582dff4435)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11727756f9af4794dedc80ec17a0266e840c8b29fbf126a9e9f7dd82e4450fde)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument db_cluster_network_type", value=db_cluster_network_type, expected_type=type_hints["db_cluster_network_type"])
            check_type(argname="argument db_cluster_type", value=db_cluster_type, expected_type=type_hints["db_cluster_type"])
            check_type(argname="argument db_cluster_version", value=db_cluster_version, expected_type=type_hints["db_cluster_version"])
            check_type(argname="argument db_node_count", value=db_node_count, expected_type=type_hints["db_node_count"])
            check_type(argname="argument db_node_storage", value=db_node_storage, expected_type=type_hints["db_node_storage"])
            check_type(argname="argument db_node_storage_type", value=db_node_storage_type, expected_type=type_hints["db_node_storage_type"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument db_cluster_description", value=db_cluster_description, expected_type=type_hints["db_cluster_description"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument encryption_type", value=encryption_type, expected_type=type_hints["encryption_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        category: The edition of the cluster. Valid values:
        Basic: Single-replica Edition
        HighAvailability: Double-replica Edition
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterNetworkType: Network type of the cluster instance, value: VPC
        '''
        result = self._values.get("db_cluster_network_type")
        assert result is not None, "Required property 'db_cluster_network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbClusterType: The specification of the cluster.
        If the cluster is of the Single-replica Edition, the following values are valid:
        S4: 4 cores, 16 GB.
        S8: 8 cores, 32 GB.
        S16: 16 cores, 64 GB.
        S32: 32 cores, 128 GB.
        S64: 64 cores, 256 GB.
        S104: 104 cores, 384 GB.
        If the cluster is of the Double-replica Edition, the following values are valid:
        C4: 4 cores, 16 GB.
        C8: 8 cores, 32 GB.
        C16: 16 cores, 64 GB.
        C32: 32 cores, 128 GB.
        C64: 64 cores, 256 GB.
        C104: 104 cores, 384 GB.
        '''
        result = self._values.get("db_cluster_type")
        assert result is not None, "Required property 'db_cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterVersion: Version, value:  19.15.2.2
        '''
        result = self._values.get("db_cluster_version")
        assert result is not None, "Required property 'db_cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbNodeCount: The number of nodes.
        If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
        If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
        '''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
        Note self value is a multiple of 100.
        '''
        result = self._values.get("db_node_storage")
        assert result is not None, "Required property 'db_node_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("db_node_storage_type")
        assert result is not None, "Required property 'db_node_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        paymentType: The billing method of the cluster. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterDescription: The description of the cluster.
        '''
        result = self._values.get("db_cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: KMS key ID
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
        '''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usedTime: The subscription duration. Valid values:
        When Period is Month, it could be from 1 to 9, 12, 24, 36.
        When Period is Year, it could be from 1 to 3.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VpcId
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: ZoneId
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSynDb(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosSynDb",
):
    '''A ROS template type:  ``ALIYUN::ClickHouse::SynDb``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSynDbProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ClickHouse::SynDb``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7df43d95a242fac9a904978166e797a2d95db5e704a82dd510d380b82fe9aa18)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fa3d5ce918ac7aa6a294c1b5563eb2ff853cd268113eac71e91ab7570ec65425)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbClusterId: The id of clickhouse.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrRdsId")
    def attr_rds_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RdsId: The id of RDS
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRdsId"))

    @builtins.property
    @jsii.member(jsii_name="attrSynDbs")
    def attr_syn_dbs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SynDbs: Sync Dbs
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSynDbs"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ckPassword")
    def ck_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ckPassword: The password of the database account
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ckPassword"))

    @ck_password.setter
    def ck_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__165ecae13b646e851d47a20a5cf96b3359175ad20c44cde9551917d8e8b430cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ckPassword", value)

    @builtins.property
    @jsii.member(jsii_name="ckUserName")
    def ck_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ckUserName: The account of the clickhouse database.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ckUserName"))

    @ck_user_name.setter
    def ck_user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__650810a573f9a63dab89cd4ae4da3d0bdd66e9a549eae1833e0b885c0b4acccc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ckUserName", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: Clickhouse cluster id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1cdb477feb732988e7c71eb47675a51b7aeda1ad0622f29654c34410cc0d725)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e96e1be9fb77cb7704c2f49f5522013d2289dfea321f97460c2c6f49816fde1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="rdsId")
    def rds_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rdsId: The instance id of RDS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rdsId"))

    @rds_id.setter
    def rds_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c64afaa3c8a4233e25f7931d8b729b92023d78b5e53af721ff8ad97ae860f54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsId", value)

    @builtins.property
    @jsii.member(jsii_name="rdsPassword")
    def rds_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rdsPassword: The password of the RDS database account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rdsPassword"))

    @rds_password.setter
    def rds_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97130f1ef71d24d12ba6b3f90c21318404d9757425d0645f60e65d1cc51b3495)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsPassword", value)

    @builtins.property
    @jsii.member(jsii_name="rdsUserName")
    def rds_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rdsUserName: The account of the RDS database.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rdsUserName"))

    @rds_user_name.setter
    def rds_user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76588c3d66a3b9154249e4f1118131e7924ebb3539c8ba6d18be905f119640f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsUserName", value)

    @builtins.property
    @jsii.member(jsii_name="skipUnsupported")
    def skip_unsupported(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: skipUnsupported: Skip unsupported table or not.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "skipUnsupported"))

    @skip_unsupported.setter
    def skip_unsupported(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbff15e858f99265d45566277674fc3349e9bb68d11d530c32027b3e2d8a9eb6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "skipUnsupported", value)

    @builtins.property
    @jsii.member(jsii_name="synDbTables")
    def syn_db_tables(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynDb.SynDbTablesProperty"]]]:
        '''
        :Property: synDbTables: The tables to syn.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynDb.SynDbTablesProperty"]]], jsii.get(self, "synDbTables"))

    @syn_db_tables.setter
    def syn_db_tables(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynDb.SynDbTablesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feaf68c626deb1d0ac3c9babb6205cb8d08b817ba515854f2fe014b9c8659d4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "synDbTables", value)

    @builtins.property
    @jsii.member(jsii_name="clickhousePort")
    def clickhouse_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clickhousePort: The port of clickhouse id.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clickhousePort"))

    @clickhouse_port.setter
    def clickhouse_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56746603e8ea49164b1fd64c14ae44d8e6d8db4a59f7eb1a4aefa17e8d8da9a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clickhousePort", value)

    @builtins.property
    @jsii.member(jsii_name="limitUpper")
    def limit_upper(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: limitUpper: The maximum number of rows to sync per second.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "limitUpper"))

    @limit_upper.setter
    def limit_upper(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__937502c849e1fd692e6269908e0863d09a10a93a163e7f9f608e09716d8d45a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "limitUpper", value)

    @builtins.property
    @jsii.member(jsii_name="rdsPort")
    def rds_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdsPort: The port of rds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rdsPort"))

    @rds_port.setter
    def rds_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24c2f6fd305bdc7ae48ab603d0ffb21a377c5ade3b53a45fec7b5ffa6792661b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsPort", value)

    @builtins.property
    @jsii.member(jsii_name="rdsVpcId")
    def rds_vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdsVpcId: The vpc of rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rdsVpcId"))

    @rds_vpc_id.setter
    def rds_vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7adbd4a220b2774d878ab222a48c175394b636c30acc8dcf18442cd020e74b2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="rdsVpcUrl")
    def rds_vpc_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdsVpcUrl: Intranet address of ApsaraDB for RDS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rdsVpcUrl"))

    @rds_vpc_url.setter
    def rds_vpc_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89040422374a2092559b73ff08167134804a17e1d2bef431269a949b67116e7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsVpcUrl", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty",
        jsii_struct_bases=[],
        name_mapping={"schema": "schema", "tables": "tables"},
    )
    class SynDbTablesProperty:
        def __init__(
            self,
            *,
            schema: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        ) -> None:
            '''
            :param schema: 
            :param tables: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8b49113b2372096591e4b71358a8d19668950f09b30fe6f7ae1abe6e936ebbcd)
                check_type(argname="argument schema", value=schema, expected_type=type_hints["schema"])
                check_type(argname="argument tables", value=tables, expected_type=type_hints["tables"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "schema": schema,
                "tables": tables,
            }

        @builtins.property
        def schema(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: schema: Database name.
            '''
            result = self._values.get("schema")
            assert result is not None, "Required property 'schema' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tables(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: tables: Table names
            '''
            result = self._values.get("tables")
            assert result is not None, "Required property 'tables' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SynDbTablesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.RosSynDbProps",
    jsii_struct_bases=[],
    name_mapping={
        "ck_password": "ckPassword",
        "ck_user_name": "ckUserName",
        "db_cluster_id": "dbClusterId",
        "rds_id": "rdsId",
        "rds_password": "rdsPassword",
        "rds_user_name": "rdsUserName",
        "skip_unsupported": "skipUnsupported",
        "syn_db_tables": "synDbTables",
        "clickhouse_port": "clickhousePort",
        "limit_upper": "limitUpper",
        "rds_port": "rdsPort",
        "rds_vpc_id": "rdsVpcId",
        "rds_vpc_url": "rdsVpcUrl",
    },
)
class RosSynDbProps:
    def __init__(
        self,
        *,
        ck_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ck_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rds_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rds_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rds_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        skip_unsupported: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        syn_db_tables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynDb.SynDbTablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        clickhouse_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        limit_upper: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_vpc_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ClickHouse::SynDb``.

        :param ck_password: 
        :param ck_user_name: 
        :param db_cluster_id: 
        :param rds_id: 
        :param rds_password: 
        :param rds_user_name: 
        :param skip_unsupported: 
        :param syn_db_tables: 
        :param clickhouse_port: 
        :param limit_upper: 
        :param rds_port: 
        :param rds_vpc_id: 
        :param rds_vpc_url: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7a1b0f6a5e79eb5182063d1a3ddeadc67aa5f2d601e8c0b2027fdc7385e9dae)
            check_type(argname="argument ck_password", value=ck_password, expected_type=type_hints["ck_password"])
            check_type(argname="argument ck_user_name", value=ck_user_name, expected_type=type_hints["ck_user_name"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument rds_id", value=rds_id, expected_type=type_hints["rds_id"])
            check_type(argname="argument rds_password", value=rds_password, expected_type=type_hints["rds_password"])
            check_type(argname="argument rds_user_name", value=rds_user_name, expected_type=type_hints["rds_user_name"])
            check_type(argname="argument skip_unsupported", value=skip_unsupported, expected_type=type_hints["skip_unsupported"])
            check_type(argname="argument syn_db_tables", value=syn_db_tables, expected_type=type_hints["syn_db_tables"])
            check_type(argname="argument clickhouse_port", value=clickhouse_port, expected_type=type_hints["clickhouse_port"])
            check_type(argname="argument limit_upper", value=limit_upper, expected_type=type_hints["limit_upper"])
            check_type(argname="argument rds_port", value=rds_port, expected_type=type_hints["rds_port"])
            check_type(argname="argument rds_vpc_id", value=rds_vpc_id, expected_type=type_hints["rds_vpc_id"])
            check_type(argname="argument rds_vpc_url", value=rds_vpc_url, expected_type=type_hints["rds_vpc_url"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ck_password": ck_password,
            "ck_user_name": ck_user_name,
            "db_cluster_id": db_cluster_id,
            "rds_id": rds_id,
            "rds_password": rds_password,
            "rds_user_name": rds_user_name,
            "skip_unsupported": skip_unsupported,
            "syn_db_tables": syn_db_tables,
        }
        if clickhouse_port is not None:
            self._values["clickhouse_port"] = clickhouse_port
        if limit_upper is not None:
            self._values["limit_upper"] = limit_upper
        if rds_port is not None:
            self._values["rds_port"] = rds_port
        if rds_vpc_id is not None:
            self._values["rds_vpc_id"] = rds_vpc_id
        if rds_vpc_url is not None:
            self._values["rds_vpc_url"] = rds_vpc_url

    @builtins.property
    def ck_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ckPassword: The password of the database account
        '''
        result = self._values.get("ck_password")
        assert result is not None, "Required property 'ck_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ck_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ckUserName: The account of the clickhouse database.
        '''
        result = self._values.get("ck_user_name")
        assert result is not None, "Required property 'ck_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: Clickhouse cluster id.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rds_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rdsId: The instance id of RDS.
        '''
        result = self._values.get("rds_id")
        assert result is not None, "Required property 'rds_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rds_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rdsPassword: The password of the RDS database account.
        '''
        result = self._values.get("rds_password")
        assert result is not None, "Required property 'rds_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rds_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rdsUserName: The account of the RDS database.
        '''
        result = self._values.get("rds_user_name")
        assert result is not None, "Required property 'rds_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def skip_unsupported(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: skipUnsupported: Skip unsupported table or not.
        '''
        result = self._values.get("skip_unsupported")
        assert result is not None, "Required property 'skip_unsupported' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def syn_db_tables(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynDb.SynDbTablesProperty]]]:
        '''
        :Property: synDbTables: The tables to syn.
        '''
        result = self._values.get("syn_db_tables")
        assert result is not None, "Required property 'syn_db_tables' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynDb.SynDbTablesProperty]]], result)

    @builtins.property
    def clickhouse_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clickhousePort: The port of clickhouse id.
        '''
        result = self._values.get("clickhouse_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def limit_upper(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: limitUpper: The maximum number of rows to sync per second.
        '''
        result = self._values.get("limit_upper")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdsPort: The port of rds.
        '''
        result = self._values.get("rds_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdsVpcId: The vpc of rds.
        '''
        result = self._values.get("rds_vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_vpc_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdsVpcUrl: Intranet address of ApsaraDB for RDS.
        '''
        result = self._values.get("rds_vpc_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSynDbProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SynDb(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.SynDb",
):
    '''A ROS resource type:  ``ALIYUN::ClickHouse::SynDb``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SynDbProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ClickHouse::SynDb``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a2c4ad8127a4783035a9052513302ec1f8d2406bc9c40520aa521707162db9c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbClusterId: The id of clickhouse.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrRdsId")
    def attr_rds_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RdsId: The id of RDS.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRdsId"))

    @builtins.property
    @jsii.member(jsii_name="attrSynDbs")
    def attr_syn_dbs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SynDbs: Sync Dbs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSynDbs"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.SynDbProps",
    jsii_struct_bases=[],
    name_mapping={
        "ck_password": "ckPassword",
        "ck_user_name": "ckUserName",
        "db_cluster_id": "dbClusterId",
        "rds_id": "rdsId",
        "rds_password": "rdsPassword",
        "rds_user_name": "rdsUserName",
        "skip_unsupported": "skipUnsupported",
        "syn_db_tables": "synDbTables",
        "clickhouse_port": "clickhousePort",
        "limit_upper": "limitUpper",
        "rds_port": "rdsPort",
        "rds_vpc_id": "rdsVpcId",
        "rds_vpc_url": "rdsVpcUrl",
    },
)
class SynDbProps:
    def __init__(
        self,
        *,
        ck_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ck_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rds_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rds_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rds_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        skip_unsupported: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        syn_db_tables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynDb.SynDbTablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        clickhouse_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        limit_upper: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_vpc_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ClickHouse::SynDb``.

        :param ck_password: Property ckPassword: The password of the database account.
        :param ck_user_name: Property ckUserName: The account of the clickhouse database.
        :param db_cluster_id: Property dbClusterId: Clickhouse cluster id.
        :param rds_id: Property rdsId: The instance id of RDS.
        :param rds_password: Property rdsPassword: The password of the RDS database account.
        :param rds_user_name: Property rdsUserName: The account of the RDS database.
        :param skip_unsupported: Property skipUnsupported: Skip unsupported table or not.
        :param syn_db_tables: Property synDbTables: The tables to syn.
        :param clickhouse_port: Property clickhousePort: The port of clickhouse id.
        :param limit_upper: Property limitUpper: The maximum number of rows to sync per second.
        :param rds_port: Property rdsPort: The port of rds.
        :param rds_vpc_id: Property rdsVpcId: The vpc of rds.
        :param rds_vpc_url: Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a1d2397b8aabbbe7396630fe8f650d64c483ddb03fa6e625af1bd13c55f04ae)
            check_type(argname="argument ck_password", value=ck_password, expected_type=type_hints["ck_password"])
            check_type(argname="argument ck_user_name", value=ck_user_name, expected_type=type_hints["ck_user_name"])
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument rds_id", value=rds_id, expected_type=type_hints["rds_id"])
            check_type(argname="argument rds_password", value=rds_password, expected_type=type_hints["rds_password"])
            check_type(argname="argument rds_user_name", value=rds_user_name, expected_type=type_hints["rds_user_name"])
            check_type(argname="argument skip_unsupported", value=skip_unsupported, expected_type=type_hints["skip_unsupported"])
            check_type(argname="argument syn_db_tables", value=syn_db_tables, expected_type=type_hints["syn_db_tables"])
            check_type(argname="argument clickhouse_port", value=clickhouse_port, expected_type=type_hints["clickhouse_port"])
            check_type(argname="argument limit_upper", value=limit_upper, expected_type=type_hints["limit_upper"])
            check_type(argname="argument rds_port", value=rds_port, expected_type=type_hints["rds_port"])
            check_type(argname="argument rds_vpc_id", value=rds_vpc_id, expected_type=type_hints["rds_vpc_id"])
            check_type(argname="argument rds_vpc_url", value=rds_vpc_url, expected_type=type_hints["rds_vpc_url"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ck_password": ck_password,
            "ck_user_name": ck_user_name,
            "db_cluster_id": db_cluster_id,
            "rds_id": rds_id,
            "rds_password": rds_password,
            "rds_user_name": rds_user_name,
            "skip_unsupported": skip_unsupported,
            "syn_db_tables": syn_db_tables,
        }
        if clickhouse_port is not None:
            self._values["clickhouse_port"] = clickhouse_port
        if limit_upper is not None:
            self._values["limit_upper"] = limit_upper
        if rds_port is not None:
            self._values["rds_port"] = rds_port
        if rds_vpc_id is not None:
            self._values["rds_vpc_id"] = rds_vpc_id
        if rds_vpc_url is not None:
            self._values["rds_vpc_url"] = rds_vpc_url

    @builtins.property
    def ck_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ckPassword: The password of the database account.'''
        result = self._values.get("ck_password")
        assert result is not None, "Required property 'ck_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ck_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ckUserName: The account of the clickhouse database.'''
        result = self._values.get("ck_user_name")
        assert result is not None, "Required property 'ck_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: Clickhouse cluster id.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rds_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rdsId: The instance id of RDS.'''
        result = self._values.get("rds_id")
        assert result is not None, "Required property 'rds_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rds_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rdsPassword: The password of the RDS database account.'''
        result = self._values.get("rds_password")
        assert result is not None, "Required property 'rds_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rds_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rdsUserName: The account of the RDS database.'''
        result = self._values.get("rds_user_name")
        assert result is not None, "Required property 'rds_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def skip_unsupported(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property skipUnsupported: Skip unsupported table or not.'''
        result = self._values.get("skip_unsupported")
        assert result is not None, "Required property 'skip_unsupported' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def syn_db_tables(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynDb.SynDbTablesProperty]]]:
        '''Property synDbTables: The tables to syn.'''
        result = self._values.get("syn_db_tables")
        assert result is not None, "Required property 'syn_db_tables' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynDb.SynDbTablesProperty]]], result)

    @builtins.property
    def clickhouse_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clickhousePort: The port of clickhouse id.'''
        result = self._values.get("clickhouse_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def limit_upper(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property limitUpper: The maximum number of rows to sync per second.'''
        result = self._values.get("limit_upper")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rdsPort: The port of rds.'''
        result = self._values.get("rds_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rdsVpcId: The vpc of rds.'''
        result = self._values.get("rds_vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_vpc_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.'''
        result = self._values.get("rds_vpc_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynDbProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DBCluster",
    "DBClusterProps",
    "RosDBCluster",
    "RosDBClusterProps",
    "RosSynDb",
    "RosSynDbProps",
    "SynDb",
    "SynDbProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__4c4ce03a3d057e19f0669db357cfb03e953a7728bef9f47f3cbee6f135d143b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11cdf1e15f00295344c39a8496284d811abeb2bff7b0ba061aa6994e631494eb(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2e7e9926b9bbc3acdf131f70cb9c09aeb272905548403fce40cca9222a912f6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bff91044fbc0b150f6bcfd5339d270d79c9fac412129447db47972ae287b7c2a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c57b1a9d162182a59e7cbde9792e45919610ac89414498e2335b7e17bf034069(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__963b90599b8c19655b8319563b55c0a1b9fb62a28a888efc90bc4b86f32ad4b8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6f36fcf11d52da476685932fbde00cc085b79cb93538f11fef3d76bb625da0e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ea3d74cf01cd5987d5ded1165be9db2252227676ea9854d7ee0b948312ffb81(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2698201b6aa8e65ed61f73e162e6aac1f1350cb2d3abe6f53a01322cf0d68113(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c321a28ecaf755ae284a1d588303492d03d9d34c6ec526dba1d0b7433ea9d6b4(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2e7457e70ec7041dd544591ac650073661988c05d728cb6e373d46216f99116(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b305674c0c097a424b0cb5853d84c049f8ab8219dfb57232a962b94c9a48b4bb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b89cd778857e5623da9627f330ffd03c9da24af160471ee8907ab208d7c769d1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcdfaff61ff1a4c902375e599520d6ea776982f2c3758fa961c20b63d73063e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48e04e0427cc7d7a93f6ef9816803b4add2c41834c08e7f360b8367a2eb3eae9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f34e39824cf6bfec3a528b8efc59230bb352a6bc838c184f5f4780d12cf71e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad0ef60bca2df1a320c4dd9071cf5f1675cf9c646b0914c0c366a8d33dcab189(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0290acf2e94169d9f535265b2930fc6c6d6767ad97c0e6cf575c7e9109690992(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__802d88d719d95d51caf0d4eb9ca0b369b6d6be70fd94c34f2aeb598b60bd5d9f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cd77ddebfe190335c9dbd744244877c87d72039b3484e623db3092ad90c68f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7fcaa9cf352ed4428a700c312210ee3e8ea15a4f3536fed5c3b7e582dff4435(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11727756f9af4794dedc80ec17a0266e840c8b29fbf126a9e9f7dd82e4450fde(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7df43d95a242fac9a904978166e797a2d95db5e704a82dd510d380b82fe9aa18(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSynDbProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa3d5ce918ac7aa6a294c1b5563eb2ff853cd268113eac71e91ab7570ec65425(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__165ecae13b646e851d47a20a5cf96b3359175ad20c44cde9551917d8e8b430cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__650810a573f9a63dab89cd4ae4da3d0bdd66e9a549eae1833e0b885c0b4acccc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1cdb477feb732988e7c71eb47675a51b7aeda1ad0622f29654c34410cc0d725(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e96e1be9fb77cb7704c2f49f5522013d2289dfea321f97460c2c6f49816fde1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c64afaa3c8a4233e25f7931d8b729b92023d78b5e53af721ff8ad97ae860f54(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97130f1ef71d24d12ba6b3f90c21318404d9757425d0645f60e65d1cc51b3495(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76588c3d66a3b9154249e4f1118131e7924ebb3539c8ba6d18be905f119640f5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbff15e858f99265d45566277674fc3349e9bb68d11d530c32027b3e2d8a9eb6(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feaf68c626deb1d0ac3c9babb6205cb8d08b817ba515854f2fe014b9c8659d4d(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynDb.SynDbTablesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56746603e8ea49164b1fd64c14ae44d8e6d8db4a59f7eb1a4aefa17e8d8da9a0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__937502c849e1fd692e6269908e0863d09a10a93a163e7f9f608e09716d8d45a8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24c2f6fd305bdc7ae48ab603d0ffb21a377c5ade3b53a45fec7b5ffa6792661b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7adbd4a220b2774d878ab222a48c175394b636c30acc8dcf18442cd020e74b2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89040422374a2092559b73ff08167134804a17e1d2bef431269a949b67116e7c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b49113b2372096591e4b71358a8d19668950f09b30fe6f7ae1abe6e936ebbcd(
    *,
    schema: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7a1b0f6a5e79eb5182063d1a3ddeadc67aa5f2d601e8c0b2027fdc7385e9dae(
    *,
    ck_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ck_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rds_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rds_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rds_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    skip_unsupported: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    syn_db_tables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynDb.SynDbTablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    clickhouse_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    limit_upper: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_vpc_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a2c4ad8127a4783035a9052513302ec1f8d2406bc9c40520aa521707162db9c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SynDbProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a1d2397b8aabbbe7396630fe8f650d64c483ddb03fa6e625af1bd13c55f04ae(
    *,
    ck_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ck_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rds_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rds_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rds_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    skip_unsupported: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    syn_db_tables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynDb.SynDbTablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    clickhouse_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    limit_upper: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_vpc_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
