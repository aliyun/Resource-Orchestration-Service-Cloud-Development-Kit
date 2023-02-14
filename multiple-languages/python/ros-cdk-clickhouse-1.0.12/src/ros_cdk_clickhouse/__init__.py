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
        '''Attribute Category: Series, value: Basic: Basic version.'''
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
        '''Attribute DBClusterDescription: DBClusterDescription.'''
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
        '''Attribute DBClusterType: Cluster instance type, value:  Common: normal instance;

        Readonly: read-only instance; Guard: disaster recovery instance
        '''
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
        '''Attribute DBNodeCount: Number of node groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeStorage: DBNodeStorage.'''
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

        :param category: Property category: Series, value: Basic: Basic version.
        :param db_cluster_network_type: Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.
        :param db_cluster_type: Property dbClusterType: Cluster instance type, value: Common: normal instance; Readonly: read-only instance; Guard: disaster recovery instance
        :param db_cluster_version: Property dbClusterVersion: Version, value: 19.15.2.2.
        :param db_node_count: Property dbNodeCount: Number of node groups.
        :param db_node_storage: Property dbNodeStorage: DBNodeStorage.
        :param db_node_storage_type: Property dbNodeStorageType: Instance node storage type. Valid values: cloud_essd, cloud_efficiency.
        :param payment_type: Property paymentType: The billing method of the cluster. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param db_cluster_description: Property dbClusterDescription: DBClusterDescription.
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
        '''Property category: Series, value: Basic: Basic version.'''
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
        '''Property dbClusterType: Cluster instance type, value:  Common: normal instance;

        Readonly: read-only instance; Guard: disaster recovery instance
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
        '''Property dbNodeCount: Number of node groups.'''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeStorage: DBNodeStorage.'''
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
        '''Property dbClusterDescription: DBClusterDescription.'''
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
        :Attribute: Category: Series, value: Basic: Basic version
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
        :Attribute: DBClusterDescription: DBClusterDescription
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
        :Attribute: DBClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
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
        :Attribute: DBNodeCount: Number of node groups
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeStorage: DBNodeStorage
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
        :Property: category: Series, value: Basic: Basic version
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
        :Property: dbClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
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
        :Property: dbNodeCount: Number of node groups
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
        :Property: dbNodeStorage: DBNodeStorage
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
        :Property: dbClusterDescription: DBClusterDescription
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
        :Property: category: Series, value: Basic: Basic version
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
        :Property: dbClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
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
        :Property: dbNodeCount: Number of node groups
        '''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeStorage: DBNodeStorage
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
        :Property: dbClusterDescription: DBClusterDescription
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


__all__ = [
    "DBCluster",
    "DBClusterProps",
    "RosDBCluster",
    "RosDBClusterProps",
]

publication.publish()

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
