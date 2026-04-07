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
        "v_switch_bak": "vSwitchBak",
        "v_switch_bak2": "vSwitchBak2",
        "v_switch_id": "vSwitchId",
        "zond_id_bak2": "zondIdBak2",
        "zone_id": "zoneId",
        "zone_id_bak": "zoneIdBak",
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
        v_switch_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zond_id_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster

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
        :param period: Property period: The unit of the subscription duration.
        :param used_time: Property usedTime: The subscription duration. Valid values: When Period is Month, it could be from 1 to 9, 12, 24, 36. When Period is Year, it could be from 1 to 3.
        :param vpc_id: Property vpcId: VpcId.
        :param v_switch_bak: Property vSwitchBak: The ID of the secondary VSwitch.
        :param v_switch_bak2: Property vSwitchBak2: The ID of the third VSwitch.
        :param v_switch_id: Property vSwitchId: VSwitchId.
        :param zond_id_bak2: Property zondIdBak2: The ID of the third zone.
        :param zone_id: Property zoneId: ZoneId.
        :param zone_id_bak: Property zoneIdBak: The ID of the secondary zone.
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
            check_type(argname="argument v_switch_bak", value=v_switch_bak, expected_type=type_hints["v_switch_bak"])
            check_type(argname="argument v_switch_bak2", value=v_switch_bak2, expected_type=type_hints["v_switch_bak2"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zond_id_bak2", value=zond_id_bak2, expected_type=type_hints["zond_id_bak2"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument zone_id_bak", value=zone_id_bak, expected_type=type_hints["zone_id_bak"])
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
        if v_switch_bak is not None:
            self._values["v_switch_bak"] = v_switch_bak
        if v_switch_bak2 is not None:
            self._values["v_switch_bak2"] = v_switch_bak2
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zond_id_bak2 is not None:
            self._values["zond_id_bak2"] = zond_id_bak2
        if zone_id is not None:
            self._values["zone_id"] = zone_id
        if zone_id_bak is not None:
            self._values["zone_id_bak"] = zone_id_bak

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
        '''Property period: The unit of the subscription duration.'''
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
    def v_switch_bak(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchBak: The ID of the secondary VSwitch.'''
        result = self._values.get("v_switch_bak")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_bak2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchBak2: The ID of the third VSwitch.'''
        result = self._values.get("v_switch_bak2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: VSwitchId.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zond_id_bak2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zondIdBak2: The ID of the third zone.'''
        result = self._values.get("zond_id_bak2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: ZoneId.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id_bak(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneIdBak: The ID of the secondary zone.'''
        result = self._values.get("zone_id_bak")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "account_type": "accountType",
        "db_instance_id": "dbInstanceId",
        "password": "password",
        "description": "description",
        "dml_auth_setting": "dmlAuthSetting",
    },
)
class EnterpriseDBClusterAccountProps:
    def __init__(
        self,
        *,
        account: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dml_auth_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEnterpriseDBClusterAccount.DmlAuthSettingProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``EnterpriseDBClusterAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount

        :param account: Property account: The name of the database account.
        :param account_type: Property accountType: The type of the database account. Valid values: - **NormalAccount**: Normal account number. - **SuperAccount**: The privileged account.
        :param db_instance_id: Property dbInstanceId: The cluster ID.
        :param password: Property password: Database account password. Set the following rules. - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. - Oh-! @#$%^& *()_+-= is a special character. - Length is 8~32 characters.
        :param description: Property description: The description of the account.
        :param dml_auth_setting: Property dmlAuthSetting: The information about permissions.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57754706e2ac0601ecfc078d77d19e6c7c5294a14e5050b46f97c85a7e1b3bcd)
            check_type(argname="argument account", value=account, expected_type=type_hints["account"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dml_auth_setting", value=dml_auth_setting, expected_type=type_hints["dml_auth_setting"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account": account,
            "account_type": account_type,
            "db_instance_id": db_instance_id,
            "password": password,
        }
        if description is not None:
            self._values["description"] = description
        if dml_auth_setting is not None:
            self._values["dml_auth_setting"] = dml_auth_setting

    @builtins.property
    def account(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property account: The name of the database account.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountType: The type of the database account.

        Valid values:

        - **NormalAccount**: Normal account number.
        - **SuperAccount**: The privileged account.
        '''
        result = self._values.get("account_type")
        assert result is not None, "Required property 'account_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The cluster ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: Database account password.

        Set the following rules.

        - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
        - Oh-! @#$%^& *()_+-= is a special character.
        - Length is 8~32 characters.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the account.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dml_auth_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBClusterAccount.DmlAuthSettingProperty"]]:
        '''Property dmlAuthSetting: The information about permissions.'''
        result = self._values.get("dml_auth_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBClusterAccount.DmlAuthSettingProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnterpriseDBClusterAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_retention_period": "backupRetentionPeriod",
        "db_instance_id": "dbInstanceId",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
    },
)
class EnterpriseDBClusterBackupPolicyProps:
    def __init__(
        self,
        *,
        backup_retention_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``EnterpriseDBClusterBackupPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy

        :param backup_retention_period: Property backupRetentionPeriod: The number of days for which you can retain the backup data.
        :param db_instance_id: Property dbInstanceId: The cluster ID.
        :param preferred_backup_period: Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
        :param preferred_backup_time: Property preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccfe6b56a7effd066bd942043bf8f062be887b36313cbc2b7f49b8d54102d9dd)
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_retention_period": backup_retention_period,
            "db_instance_id": db_instance_id,
            "preferred_backup_period": preferred_backup_period,
            "preferred_backup_time": preferred_backup_time,
        }

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupRetentionPeriod: The number of days for which you can retain the backup data.'''
        result = self._values.get("backup_retention_period")
        assert result is not None, "Required property 'backup_retention_period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The cluster ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.

        Separate multiple dates with commas (,).
        '''
        result = self._values.get("preferred_backup_period")
        assert result is not None, "Required property 'preferred_backup_period' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property preferredBackupTime: The backup time window within which the backup task is performed.

        The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
        '''
        result = self._values.get("preferred_backup_time")
        assert result is not None, "Required property 'preferred_backup_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnterpriseDBClusterBackupPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "node_count": "nodeCount",
        "node_scale_max": "nodeScaleMax",
        "node_scale_min": "nodeScaleMin",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "backup_set_id": "backupSetId",
        "db_instance_description": "dbInstanceDescription",
        "db_time_zone": "dbTimeZone",
        "deploy_schema": "deploySchema",
        "multi_zone": "multiZone",
        "public_connection_setting": "publicConnectionSetting",
        "resource_group_id": "resourceGroupId",
        "source_db_instance_id": "sourceDbInstanceId",
        "storage_quota": "storageQuota",
        "storage_type": "storageType",
        "tags": "tags",
    },
)
class EnterpriseDBClusterProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        node_scale_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        node_scale_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_zone: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEnterpriseDBCluster.MultiZoneProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        public_connection_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEnterpriseDBCluster.PublicConnectionSettingProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosEnterpriseDBCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``EnterpriseDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster

        :param engine: Property engine: The engine type.
        :param node_count: Property nodeCount: The number of nodes.
        :param node_scale_max: Property nodeScaleMax: The maximum number of nodes for scaling.
        :param node_scale_min: Property nodeScaleMin: The minimum number of nodes for scaling.
        :param vpc_id: Property vpcId: The ID of the VPC.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        :param zone_id: Property zoneId: The ID of the zone.
        :param backup_set_id: Property backupSetId: The ID of the backup set.
        :param db_instance_description: Property dbInstanceDescription: The description of the database instance.
        :param db_time_zone: Property dbTimeZone: The time zone of the database.
        :param deploy_schema: Property deploySchema: The deployment schema.
        :param multi_zone: Property multiZone: Multi-zone configuration.
        :param public_connection_setting: Property publicConnectionSetting: The public connection setting.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param source_db_instance_id: Property sourceDbInstanceId: The ID of the source database instance.
        :param storage_quota: Property storageQuota: The storage quota.
        :param storage_type: Property storageType: The type of storage.
        :param tags: Property tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd0afcbb6766bc4754c6951cd6bfb1889f1ba3d57c21b6d99c8d053856c14932)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument node_count", value=node_count, expected_type=type_hints["node_count"])
            check_type(argname="argument node_scale_max", value=node_scale_max, expected_type=type_hints["node_scale_max"])
            check_type(argname="argument node_scale_min", value=node_scale_min, expected_type=type_hints["node_scale_min"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_time_zone", value=db_time_zone, expected_type=type_hints["db_time_zone"])
            check_type(argname="argument deploy_schema", value=deploy_schema, expected_type=type_hints["deploy_schema"])
            check_type(argname="argument multi_zone", value=multi_zone, expected_type=type_hints["multi_zone"])
            check_type(argname="argument public_connection_setting", value=public_connection_setting, expected_type=type_hints["public_connection_setting"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument source_db_instance_id", value=source_db_instance_id, expected_type=type_hints["source_db_instance_id"])
            check_type(argname="argument storage_quota", value=storage_quota, expected_type=type_hints["storage_quota"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
            "node_count": node_count,
            "node_scale_max": node_scale_max,
            "node_scale_min": node_scale_min,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_time_zone is not None:
            self._values["db_time_zone"] = db_time_zone
        if deploy_schema is not None:
            self._values["deploy_schema"] = deploy_schema
        if multi_zone is not None:
            self._values["multi_zone"] = multi_zone
        if public_connection_setting is not None:
            self._values["public_connection_setting"] = public_connection_setting
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if source_db_instance_id is not None:
            self._values["source_db_instance_id"] = source_db_instance_id
        if storage_quota is not None:
            self._values["storage_quota"] = storage_quota
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: The engine type.'''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeCount: The number of nodes.'''
        result = self._values.get("node_count")
        assert result is not None, "Required property 'node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_scale_max(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeScaleMax: The maximum number of nodes for scaling.'''
        result = self._values.get("node_scale_max")
        assert result is not None, "Required property 'node_scale_max' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_scale_min(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeScaleMin: The minimum number of nodes for scaling.'''
        result = self._values.get("node_scale_min")
        assert result is not None, "Required property 'node_scale_min' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The ID of the zone.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupSetId: The ID of the backup set.'''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: The description of the database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbTimeZone: The time zone of the database.'''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deploySchema: The deployment schema.'''
        result = self._values.get("deploy_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_zone(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.MultiZoneProperty"]]]]:
        '''Property multiZone: Multi-zone configuration.'''
        result = self._values.get("multi_zone")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.MultiZoneProperty"]]]], result)

    @builtins.property
    def public_connection_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.PublicConnectionSettingProperty"]]:
        '''Property publicConnectionSetting: The public connection setting.'''
        result = self._values.get("public_connection_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.PublicConnectionSettingProperty"]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceDbInstanceId: The ID of the source database instance.'''
        result = self._values.get("source_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_quota(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageQuota: The storage quota.'''
        result = self._values.get("storage_quota")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageType: The type of storage.'''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosEnterpriseDBCluster.TagsProperty"]]:
        '''Property tags: Tags to attach to clickhouse_enterprise_db.

        Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosEnterpriseDBCluster.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnterpriseDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "group_name": "groupName",
        "security_ip_list": "securityIpList",
    },
)
class EnterpriseDBClusterSecurityIPProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``EnterpriseDBClusterSecurityIP``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip

        :param db_instance_id: Property dbInstanceId: The cluster ID.
        :param group_name: Property groupName: The name of the whitelist whose settings you want to modify.
        :param security_ip_list: Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be4bb64536ba2aeb592f3f8fe4db268766db9beb16fd2491ad4498c07ad24ce5)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "group_name": group_name,
            "security_ip_list": security_ip_list,
        }

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The cluster ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: The name of the whitelist whose settings you want to modify.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityIpList: The IP addresses and CIDR blocks in the whitelist.'''
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnterpriseDBClusterSecurityIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-clickhouse.IDBCluster")
class IDBCluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DBCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AliUid: AliUid.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bid: BusinessID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The edition of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommodityCode: Product Code.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: ConnectionString.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterDescription: The description of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The id of DBCluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterType: The specification of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterVersion: Version, value:  19.15.2.2.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeClass: DBNodeClass.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeCount: The number of nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeStorage: The storage capacity of a single node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionKey: KMS key ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: Engine.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: EngineVersion.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsExpired: IsExpired.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: LockMode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: Reason for lock.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: PayType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Connection port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: Internet connection address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: PublicPort.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: StorageType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcCloudInstanceId: VpcCloudInstanceId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VpcId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: VSwitchId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: ZoneId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        ...


class _IDBClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.IDBCluster"

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AliUid: AliUid.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bid: BusinessID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The edition of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommodityCode: Product Code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: ConnectionString.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterDescription: The description of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The id of DBCluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterType: The specification of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterVersion: Version, value:  19.15.2.2.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeClass: DBNodeClass.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeCount: The number of nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeStorage: The storage capacity of a single node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionKey: KMS key ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: Engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: EngineVersion.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsExpired: IsExpired.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: LockMode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: Reason for lock.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: PayType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Connection port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: Internet connection address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: PublicPort.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: StorageType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcCloudInstanceId: VpcCloudInstanceId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: ZoneId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        return typing.cast(DBClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBCluster).__jsii_proxy_class__ = lambda : _IDBClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-clickhouse.IEnterpriseDBCluster")
class IEnterpriseDBCluster(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``EnterpriseDBCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The ID of the database instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrivateConnectionString")
    def attr_private_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateConnectionString: The private connection string.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: The public connection string.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterProps:
        ...


class _IEnterpriseDBClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnterpriseDBCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.IEnterpriseDBCluster"

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The ID of the database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateConnectionString")
    def attr_private_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateConnectionString: The private connection string.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: The public connection string.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterProps:
        return typing.cast(EnterpriseDBClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnterpriseDBCluster).__jsii_proxy_class__ = lambda : _IEnterpriseDBClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterAccount")
class IEnterpriseDBClusterAccount(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``EnterpriseDBClusterAccount``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccount")
    def attr_account(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Account: The name of the database account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountType: The type of the database account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDmlAuthSetting")
    def attr_dml_auth_setting(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DmlAuthSetting: The information about permissions.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterAccountProps:
        ...


class _IEnterpriseDBClusterAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnterpriseDBClusterAccount``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterAccount"

    @builtins.property
    @jsii.member(jsii_name="attrAccount")
    def attr_account(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Account: The name of the database account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccount"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountType: The type of the database account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDmlAuthSetting")
    def attr_dml_auth_setting(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DmlAuthSetting: The information about permissions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDmlAuthSetting"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterAccountProps:
        return typing.cast(EnterpriseDBClusterAccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnterpriseDBClusterAccount).__jsii_proxy_class__ = lambda : _IEnterpriseDBClusterAccountProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterBackupPolicy"
)
class IEnterpriseDBClusterBackupPolicy(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``EnterpriseDBClusterBackupPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupState")
    def attr_backup_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupState: Backup switch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupPeriod: The backup cycle.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupTime: The backup time window within which the backup task is performed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterBackupPolicyProps:
        ...


class _IEnterpriseDBClusterBackupPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnterpriseDBClusterBackupPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterBackupPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupState")
    def attr_backup_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupState: Backup switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupState"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupPeriod: The backup cycle.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupTime: The backup time window within which the backup task is performed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterBackupPolicyProps:
        return typing.cast(EnterpriseDBClusterBackupPolicyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnterpriseDBClusterBackupPolicy).__jsii_proxy_class__ = lambda : _IEnterpriseDBClusterBackupPolicyProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterSecurityIP"
)
class IEnterpriseDBClusterSecurityIP(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``EnterpriseDBClusterSecurityIP``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the whitelist whose settings you want to modify.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpType")
    def attr_security_ip_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpType: The type of IP address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistNetType")
    def attr_whitelist_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistNetType: The network type of the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterSecurityIPProps:
        ...


class _IEnterpriseDBClusterSecurityIPProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnterpriseDBClusterSecurityIP``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterSecurityIP"

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the whitelist whose settings you want to modify.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpType")
    def attr_security_ip_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpType: The type of IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistNetType")
    def attr_whitelist_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistNetType: The network type of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelistNetType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterSecurityIPProps:
        return typing.cast(EnterpriseDBClusterSecurityIPProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnterpriseDBClusterSecurityIP).__jsii_proxy_class__ = lambda : _IEnterpriseDBClusterSecurityIPProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-clickhouse.ISynDb")
class ISynDb(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SynDb``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusterId: The id of clickhouse.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRdsId")
    def attr_rds_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RdsId: The id of RDS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSynDbs")
    def attr_syn_dbs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SynDbs: Sync Dbs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SynDbProps":
        ...


class _ISynDbProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SynDb``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.ISynDb"

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusterId: The id of clickhouse.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrRdsId")
    def attr_rds_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RdsId: The id of RDS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRdsId"))

    @builtins.property
    @jsii.member(jsii_name="attrSynDbs")
    def attr_syn_dbs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SynDbs: Sync Dbs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSynDbs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SynDbProps":
        return typing.cast("SynDbProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISynDb).__jsii_proxy_class__ = lambda : _ISynDbProxy


class RosDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosDBCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ClickHouse::DBCluster``, which is used to create an ApsaraDB for ClickHouse cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
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
        :Property: period: The unit of the subscription duration.
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
    @jsii.member(jsii_name="vSwitchBak")
    def v_switch_bak(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchBak: The ID of the secondary VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchBak"))

    @v_switch_bak.setter
    def v_switch_bak(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dc0a3b2fb78d2d3c2adb1c087699fb4f0ec6961fdb04778cc80d6fdd5b28aaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchBak", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchBak2")
    def v_switch_bak2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchBak2: The ID of the third VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchBak2"))

    @v_switch_bak2.setter
    def v_switch_bak2(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ed459d30d1ce415f6e8ce88028c981e25ab4480d54643ac5f9db31ae3112a9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchBak2", value)

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
    @jsii.member(jsii_name="zondIdBak2")
    def zond_id_bak2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zondIdBak2: The ID of the third zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zondIdBak2"))

    @zond_id_bak2.setter
    def zond_id_bak2(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21ae2658408cbcd6dea3570a0f1f475e3ad18e3279645c70a6fc52e7dcd0ed4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zondIdBak2", value)

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

    @builtins.property
    @jsii.member(jsii_name="zoneIdBak")
    def zone_id_bak(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneIdBak: The ID of the secondary zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneIdBak"))

    @zone_id_bak.setter
    def zone_id_bak(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__738e2e0d8d5837766ec8a6543a41d4f96789feac07bbedc49f45ec7759688d31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneIdBak", value)


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
        "v_switch_bak": "vSwitchBak",
        "v_switch_bak2": "vSwitchBak2",
        "v_switch_id": "vSwitchId",
        "zond_id_bak2": "zondIdBak2",
        "zone_id": "zoneId",
        "zone_id_bak": "zoneIdBak",
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
        v_switch_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zond_id_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster

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
        :param v_switch_bak: 
        :param v_switch_bak2: 
        :param v_switch_id: 
        :param zond_id_bak2: 
        :param zone_id: 
        :param zone_id_bak: 
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
            check_type(argname="argument v_switch_bak", value=v_switch_bak, expected_type=type_hints["v_switch_bak"])
            check_type(argname="argument v_switch_bak2", value=v_switch_bak2, expected_type=type_hints["v_switch_bak2"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zond_id_bak2", value=zond_id_bak2, expected_type=type_hints["zond_id_bak2"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument zone_id_bak", value=zone_id_bak, expected_type=type_hints["zone_id_bak"])
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
        if v_switch_bak is not None:
            self._values["v_switch_bak"] = v_switch_bak
        if v_switch_bak2 is not None:
            self._values["v_switch_bak2"] = v_switch_bak2
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zond_id_bak2 is not None:
            self._values["zond_id_bak2"] = zond_id_bak2
        if zone_id is not None:
            self._values["zone_id"] = zone_id
        if zone_id_bak is not None:
            self._values["zone_id_bak"] = zone_id_bak

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
        :Property: period: The unit of the subscription duration.
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
    def v_switch_bak(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchBak: The ID of the secondary VSwitch.
        '''
        result = self._values.get("v_switch_bak")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_bak2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchBak2: The ID of the third VSwitch.
        '''
        result = self._values.get("v_switch_bak2")
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
    def zond_id_bak2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zondIdBak2: The ID of the third zone.
        '''
        result = self._values.get("zond_id_bak2")
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

    @builtins.property
    def zone_id_bak(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneIdBak: The ID of the secondary zone.
        '''
        result = self._values.get("zone_id_bak")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnterpriseDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBCluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnterpriseDBCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnterpriseDBClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6be45550da5127d5dd6bc9d50fe1e3c856afe217b95296d0687cf795396dc4fa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__087a46aaaade51e91f5e55a46ad72fb714f0d109b28eb987c520804c5f94ed1f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateConnectionString")
    def attr_private_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateConnectionString: The private connection string.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: The public connection string.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d663a0ed1c4ec8d3f5ff00a550cf070b98a51d611ab8abbfbdf727238c026a7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: The engine type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__859b5074497a6c89e81c1a967320b146af4757f52aed6de018e525c1b5fc95ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="nodeCount")
    def node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeCount: The number of nodes.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeCount"))

    @node_count.setter
    def node_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd5cdfc9d035bb110b8dc12b25cfe61ecf5c44dbfe3ab06ed2bfbad0654e182e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeCount", value)

    @builtins.property
    @jsii.member(jsii_name="nodeScaleMax")
    def node_scale_max(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeScaleMax: The maximum number of nodes for scaling.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeScaleMax"))

    @node_scale_max.setter
    def node_scale_max(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed22c76ffce7e389ec954b4475a0a01114cab0cc70fb2e763b57fb90a158e9e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeScaleMax", value)

    @builtins.property
    @jsii.member(jsii_name="nodeScaleMin")
    def node_scale_min(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeScaleMin: The minimum number of nodes for scaling.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeScaleMin"))

    @node_scale_min.setter
    def node_scale_min(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2770edf573d11151fd01dfdbed342ee26ace5b3f57eeb02a3056ed95d3179c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeScaleMin", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acb494b3e58451875f808ebacfd860a3e3736cd0b5f1c09a2ae31ffcc61ab909)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e40a1cf24ada5a35a054c95fd14a721d3fd7fbabd558de1248325ab4b0d2fe4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57e324527561f759ef31dae7c0382b7db1fa4acac80c85e3833eabbd359651e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="backupSetId")
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupSetId: The ID of the backup set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupSetId"))

    @backup_set_id.setter
    def backup_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea835df0ef170f91371ac41a24409a8df4cbd620097f0b41b178037cfc342009)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupSetId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__346777b033b2eb3974ec1d3952addcb6adf737d965113f1bdb2630cf101da780)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbTimeZone")
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbTimeZone: The time zone of the database.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbTimeZone"))

    @db_time_zone.setter
    def db_time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2291ca13cda2e09e50cbd65f8f9fd5522919ffd7f6935ed2be5df1c3f54e570d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbTimeZone", value)

    @builtins.property
    @jsii.member(jsii_name="deploySchema")
    def deploy_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploySchema: The deployment schema.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deploySchema"))

    @deploy_schema.setter
    def deploy_schema(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e5c8c1c9aeab09375d6c413b4e26fa014019ccb0628423e19d61fd77f669969)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deploySchema", value)

    @builtins.property
    @jsii.member(jsii_name="multiZone")
    def multi_zone(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.MultiZoneProperty"]]]]:
        '''
        :Property: multiZone: Multi-zone configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.MultiZoneProperty"]]]], jsii.get(self, "multiZone"))

    @multi_zone.setter
    def multi_zone(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.MultiZoneProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74f0a55ba9ce0ce5f48c4cb1672bfe1d9c5e18796443758808a05c79087abe79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiZone", value)

    @builtins.property
    @jsii.member(jsii_name="publicConnectionSetting")
    def public_connection_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.PublicConnectionSettingProperty"]]:
        '''
        :Property: publicConnectionSetting: The public connection setting.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.PublicConnectionSettingProperty"]], jsii.get(self, "publicConnectionSetting"))

    @public_connection_setting.setter
    def public_connection_setting(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBCluster.PublicConnectionSettingProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__453d608b7caac2bd998a52120e0f6d64f1cf1f8a421ebbe7ece1307962abcc5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicConnectionSetting", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8421bc125a9bda9e12aa80e8c29499cca7428adf843b7abf55d4ec2952c3f0d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceDbInstanceId")
    def source_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceDbInstanceId: The ID of the source database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceDbInstanceId"))

    @source_db_instance_id.setter
    def source_db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__974f460f1337c54947df99b8b853413b69c7577b0fe223fc867d81a90966e842)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceDbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="storageQuota")
    def storage_quota(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageQuota: The storage quota.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageQuota"))

    @storage_quota.setter
    def storage_quota(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc28f6aa659a8a86f9c9491e170cfd03290ce7d44c1dfabd3c9ec9a777dd5ea7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageQuota", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageType: The type of storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__223b848537b324ec2bf6bb13d82b187964e0eb0af1004ec9f53e2e5fa8bd492e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosEnterpriseDBCluster.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosEnterpriseDBCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosEnterpriseDBCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c505933c6c4204a855cf77fee6c25ba70699531477b4d230d7ff0c24f383536)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.MultiZoneProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_ids": "vSwitchIds", "zone_id": "zoneId"},
    )
    class MultiZoneProperty:
        def __init__(
            self,
            *,
            v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param v_switch_ids: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8450e2ef057cb40d2e2a7fee68143d2a7866d37a3cf41c6208fc3f4e8f724b05)
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "v_switch_ids": v_switch_ids,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: vSwitchIds: The VSwitch IDs in the zone.
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: The zone ID in multi-zone configuration.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MultiZoneProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_prefix": "connectionPrefix",
            "enable_public_connection": "enablePublicConnection",
        },
    )
    class PublicConnectionSettingProperty:
        def __init__(
            self,
            *,
            connection_prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_public_connection: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_prefix: 
            :param enable_public_connection: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e1f342727420d224f858a1931426b397373791170f22a54644f432c0acb8e923)
                check_type(argname="argument connection_prefix", value=connection_prefix, expected_type=type_hints["connection_prefix"])
                check_type(argname="argument enable_public_connection", value=enable_public_connection, expected_type=type_hints["enable_public_connection"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_prefix": connection_prefix,
                "enable_public_connection": enable_public_connection,
            }

        @builtins.property
        def connection_prefix(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPrefix: The public connection string prefix.
            '''
            result = self._values.get("connection_prefix")
            assert result is not None, "Required property 'connection_prefix' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_public_connection(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: enablePublicConnection: Enable the ClickHouse cluster.
            '''
            result = self._values.get("enable_public_connection")
            assert result is not None, "Required property 'enable_public_connection' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PublicConnectionSettingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__0d1e1d6957aa6b825d4feaac359044e7bdf930c021c18289e8ade540c6e3a404)
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


class RosEnterpriseDBClusterAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBClusterAccount``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnterpriseDBClusterAccount`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnterpriseDBClusterAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6da5a2a35f1998598a166e8c53291eeae7549466c576115f7cd12577cbbad37d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__86c9351db1aa8646989bb953a4910de159183a6bc0c5add4a9cbc0bcb047375b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccount")
    def attr_account(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Account: The name of the database account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccount"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountType: The type of the database account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDmlAuthSetting")
    def attr_dml_auth_setting(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DmlAuthSetting: The information about permissions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDmlAuthSetting"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="account")
    def account(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: account: The name of the database account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "account"))

    @account.setter
    def account(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fb19a78d54762b367e02982a69b8adcfcda66820328a6b3b828be3390a165a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "account", value)

    @builtins.property
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountType: The type of the database account. Valid values:

        - **NormalAccount**: Normal account number.
        - **SuperAccount**: The privileged account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05b84c73fc9f4372a7cc45ff310c853447b65880b94629d7b5e772e4980240e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f31e3ecd52f5f37e38041db5da00fecbfb6bb4c555635c5778819cd4b9e6181)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d47cb80351333246d923631f987c5502b4c7d8ddbc1352864eb15c657b9741c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        ::

        #$%^& *()_+-= is a special character.

        - Length is 8~32 characters.
        :Property:

        password: Database account password. Set the following rules.

        - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
        - Oh-!
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__767f53e4d39da9de226847e3d5173185c32947b79ce893ed9d3ff14765554c02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c23e4d08131ddaf63f0d38ac9301b04720628be06ca132bdcb451e2e49d09ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dmlAuthSetting")
    def dml_auth_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBClusterAccount.DmlAuthSettingProperty"]]:
        '''
        :Property: dmlAuthSetting: The information about permissions.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBClusterAccount.DmlAuthSettingProperty"]], jsii.get(self, "dmlAuthSetting"))

    @dml_auth_setting.setter
    def dml_auth_setting(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEnterpriseDBClusterAccount.DmlAuthSettingProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a806ec31df9587a07b57e8261ef38557d1cf6107d2c1cddfc824476d71ab543d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dmlAuthSetting", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ddl_authority": "ddlAuthority",
            "dml_authority": "dmlAuthority",
            "allow_databases": "allowDatabases",
            "allow_dictionaries": "allowDictionaries",
        },
    )
    class DmlAuthSettingProperty:
        def __init__(
            self,
            *,
            ddl_authority: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            dml_authority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            allow_databases: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            allow_dictionaries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param ddl_authority: 
            :param dml_authority: 
            :param allow_databases: 
            :param allow_dictionaries: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a1d53eb436997265789320974b5fefaeb5b93e7d2ef8628b01208bf45ea2aa3b)
                check_type(argname="argument ddl_authority", value=ddl_authority, expected_type=type_hints["ddl_authority"])
                check_type(argname="argument dml_authority", value=dml_authority, expected_type=type_hints["dml_authority"])
                check_type(argname="argument allow_databases", value=allow_databases, expected_type=type_hints["allow_databases"])
                check_type(argname="argument allow_dictionaries", value=allow_dictionaries, expected_type=type_hints["allow_dictionaries"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "ddl_authority": ddl_authority,
                "dml_authority": dml_authority,
            }
            if allow_databases is not None:
                self._values["allow_databases"] = allow_databases
            if allow_dictionaries is not None:
                self._values["allow_dictionaries"] = allow_dictionaries

        @builtins.property
        def ddl_authority(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            ddlAuthority: Whether to grant the DDL permission to the database account. Value description:

            - **true**: allows DDL.
            - **false**: DDL is disabled.
            '''
            result = self._values.get("ddl_authority")
            assert result is not None, "Required property 'ddl_authority' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def dml_authority(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            dmlAuthority: Whether to grant the DML permission to the database account. The values are as follows:

            - **0**: Queries that allow reading, writing, and changing settings
            - **1**: Only queries for reading data are allowed.
            - **2**: allows queries to read data and change settings.
            '''
            result = self._values.get("dml_authority")
            assert result is not None, "Required property 'dml_authority' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def allow_databases(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowDatabases: The list of databases that require authorization.
            '''
            result = self._values.get("allow_databases")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def allow_dictionaries(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowDictionaries: List of dictionaries that require authorization.
            '''
            result = self._values.get("allow_dictionaries")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DmlAuthSettingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "account_type": "accountType",
        "db_instance_id": "dbInstanceId",
        "password": "password",
        "description": "description",
        "dml_auth_setting": "dmlAuthSetting",
    },
)
class RosEnterpriseDBClusterAccountProps:
    def __init__(
        self,
        *,
        account: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dml_auth_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBClusterAccount.DmlAuthSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnterpriseDBClusterAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount

        :param account: 
        :param account_type: 
        :param db_instance_id: 
        :param password: 
        :param description: 
        :param dml_auth_setting: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb5745e2fb28e22ca7a0b46de9fe97e22e5d2941dbf466d173f0b615006ddfb4)
            check_type(argname="argument account", value=account, expected_type=type_hints["account"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dml_auth_setting", value=dml_auth_setting, expected_type=type_hints["dml_auth_setting"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account": account,
            "account_type": account_type,
            "db_instance_id": db_instance_id,
            "password": password,
        }
        if description is not None:
            self._values["description"] = description
        if dml_auth_setting is not None:
            self._values["dml_auth_setting"] = dml_auth_setting

    @builtins.property
    def account(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: account: The name of the database account.
        '''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountType: The type of the database account. Valid values:

        - **NormalAccount**: Normal account number.
        - **SuperAccount**: The privileged account.
        '''
        result = self._values.get("account_type")
        assert result is not None, "Required property 'account_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The cluster ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        ::

        #$%^& *()_+-= is a special character.

        - Length is 8~32 characters.
        :Property:

        password: Database account password. Set the following rules.

        - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
        - Oh-!
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the account.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dml_auth_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBClusterAccount.DmlAuthSettingProperty]]:
        '''
        :Property: dmlAuthSetting: The information about permissions.
        '''
        result = self._values.get("dml_auth_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBClusterAccount.DmlAuthSettingProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnterpriseDBClusterAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnterpriseDBClusterBackupPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterBackupPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnterpriseDBClusterBackupPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnterpriseDBClusterBackupPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63da85f61dc457225bbc45505d0e7e79a3fecf5de550cd646b0f2cfb24b5bea5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6253f719ba6d9308658d11926d37a4da793410fbdd9d35e056a8e26c61045d81)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupRetentionPeriod: The number of days for which you can retain the backup data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupState")
    def attr_backup_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupState: Backup switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupState"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PreferredBackupPeriod: The backup cycle.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPreferredBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PreferredBackupTime: The backup time window within which the backup task is performed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPreferredBackupTime"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupRetentionPeriod")
    def backup_retention_period(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupRetentionPeriod: The number of days for which you can retain the backup data.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupRetentionPeriod"))

    @backup_retention_period.setter
    def backup_retention_period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e822d16e31d3eb2ad6d1e3b14d7f9f054c003ad34e2fc3974d8010d9ee527eee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b15713dfe1918dd36f748e3d0c32cd9dac9fee1daed9a8019f53a47b0db1767)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f8c309b830e6f30cf14e7f8567d3ab7e3092db8a4c8293510f1705496324349)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupPeriod")
    def preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "preferredBackupPeriod"))

    @preferred_backup_period.setter
    def preferred_backup_period(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea7ed06a50598a2620797554a926d875b91d5a0c9b2966367a50c5284f964a74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="preferredBackupTime")
    def preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "preferredBackupTime"))

    @preferred_backup_time.setter
    def preferred_backup_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9de5b58b4f3ca8f9e96c6884f3a08c9ebc37fa04f7e62f431e36ecd2d9dcfe79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preferredBackupTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterBackupPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_retention_period": "backupRetentionPeriod",
        "db_instance_id": "dbInstanceId",
        "preferred_backup_period": "preferredBackupPeriod",
        "preferred_backup_time": "preferredBackupTime",
    },
)
class RosEnterpriseDBClusterBackupPolicyProps:
    def __init__(
        self,
        *,
        backup_retention_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosEnterpriseDBClusterBackupPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy

        :param backup_retention_period: 
        :param db_instance_id: 
        :param preferred_backup_period: 
        :param preferred_backup_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__062887eb6ba1fa9bd7206a5cfebaad2d72ec46ae5b7a6e5abdba34161a9706a4)
            check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
            check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_retention_period": backup_retention_period,
            "db_instance_id": db_instance_id,
            "preferred_backup_period": preferred_backup_period,
            "preferred_backup_time": preferred_backup_time,
        }

    @builtins.property
    def backup_retention_period(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupRetentionPeriod: The number of days for which you can retain the backup data.
        '''
        result = self._values.get("backup_retention_period")
        assert result is not None, "Required property 'backup_retention_period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The cluster ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
        '''
        result = self._values.get("preferred_backup_period")
        assert result is not None, "Required property 'preferred_backup_period' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
        '''
        result = self._values.get("preferred_backup_time")
        assert result is not None, "Required property 'preferred_backup_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnterpriseDBClusterBackupPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "node_count": "nodeCount",
        "node_scale_max": "nodeScaleMax",
        "node_scale_min": "nodeScaleMin",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "backup_set_id": "backupSetId",
        "db_instance_description": "dbInstanceDescription",
        "db_time_zone": "dbTimeZone",
        "deploy_schema": "deploySchema",
        "multi_zone": "multiZone",
        "public_connection_setting": "publicConnectionSetting",
        "resource_group_id": "resourceGroupId",
        "source_db_instance_id": "sourceDbInstanceId",
        "storage_quota": "storageQuota",
        "storage_type": "storageType",
        "tags": "tags",
    },
)
class RosEnterpriseDBClusterProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        node_scale_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        node_scale_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_zone: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBCluster.MultiZoneProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        public_connection_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBCluster.PublicConnectionSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosEnterpriseDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnterpriseDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster

        :param engine: 
        :param node_count: 
        :param node_scale_max: 
        :param node_scale_min: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        :param backup_set_id: 
        :param db_instance_description: 
        :param db_time_zone: 
        :param deploy_schema: 
        :param multi_zone: 
        :param public_connection_setting: 
        :param resource_group_id: 
        :param source_db_instance_id: 
        :param storage_quota: 
        :param storage_type: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99ba5db7ae7cd32334b1b3358694372c68a525544bca4e5a755a0209277b4d18)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument node_count", value=node_count, expected_type=type_hints["node_count"])
            check_type(argname="argument node_scale_max", value=node_scale_max, expected_type=type_hints["node_scale_max"])
            check_type(argname="argument node_scale_min", value=node_scale_min, expected_type=type_hints["node_scale_min"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_time_zone", value=db_time_zone, expected_type=type_hints["db_time_zone"])
            check_type(argname="argument deploy_schema", value=deploy_schema, expected_type=type_hints["deploy_schema"])
            check_type(argname="argument multi_zone", value=multi_zone, expected_type=type_hints["multi_zone"])
            check_type(argname="argument public_connection_setting", value=public_connection_setting, expected_type=type_hints["public_connection_setting"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument source_db_instance_id", value=source_db_instance_id, expected_type=type_hints["source_db_instance_id"])
            check_type(argname="argument storage_quota", value=storage_quota, expected_type=type_hints["storage_quota"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
            "node_count": node_count,
            "node_scale_max": node_scale_max,
            "node_scale_min": node_scale_min,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_time_zone is not None:
            self._values["db_time_zone"] = db_time_zone
        if deploy_schema is not None:
            self._values["deploy_schema"] = deploy_schema
        if multi_zone is not None:
            self._values["multi_zone"] = multi_zone
        if public_connection_setting is not None:
            self._values["public_connection_setting"] = public_connection_setting
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if source_db_instance_id is not None:
            self._values["source_db_instance_id"] = source_db_instance_id
        if storage_quota is not None:
            self._values["storage_quota"] = storage_quota
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: The engine type.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeCount: The number of nodes.
        '''
        result = self._values.get("node_count")
        assert result is not None, "Required property 'node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_scale_max(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeScaleMax: The maximum number of nodes for scaling.
        '''
        result = self._values.get("node_scale_max")
        assert result is not None, "Required property 'node_scale_max' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_scale_min(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeScaleMin: The minimum number of nodes for scaling.
        '''
        result = self._values.get("node_scale_min")
        assert result is not None, "Required property 'node_scale_min' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupSetId: The ID of the backup set.
        '''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbTimeZone: The time zone of the database.
        '''
        result = self._values.get("db_time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploySchema: The deployment schema.
        '''
        result = self._values.get("deploy_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_zone(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBCluster.MultiZoneProperty]]]]:
        '''
        :Property: multiZone: Multi-zone configuration.
        '''
        result = self._values.get("multi_zone")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBCluster.MultiZoneProperty]]]], result)

    @builtins.property
    def public_connection_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBCluster.PublicConnectionSettingProperty]]:
        '''
        :Property: publicConnectionSetting: The public connection setting.
        '''
        result = self._values.get("public_connection_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBCluster.PublicConnectionSettingProperty]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceDbInstanceId: The ID of the source database instance.
        '''
        result = self._values.get("source_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_quota(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageQuota: The storage quota.
        '''
        result = self._values.get("storage_quota")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageType: The type of storage.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosEnterpriseDBCluster.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosEnterpriseDBCluster.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnterpriseDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnterpriseDBClusterSecurityIP(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterSecurityIP",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnterpriseDBClusterSecurityIP`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnterpriseDBClusterSecurityIPProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63416267430fc8fd8a454e14c9cbd1b23f34359bc80964001119436a020f4b8c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bab947e309413e26dc947c6d2a80acb9e3c638e9c89779397fb3adeb519a03e9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: The name of the whitelist whose settings you want to modify.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpType")
    def attr_security_ip_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpType: The type of IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistNetType")
    def attr_whitelist_net_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WhitelistNetType: The network type of the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWhitelistNetType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__355be3c79e0be5f414aefcc2743c0c30469fc0df1373e24bd284754b9f2295d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ab072ef8cc4c10d061abd7d2d20ee069b47e524321ac9ed11a49564603b3e06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: The name of the whitelist whose settings you want to modify.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d028b38bcf7f3b917eff5e92df49cc00cfa7acadedf833f7e27c9f85675ccd36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityIpList: The IP addresses and CIDR blocks in the whitelist.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72d9cfb8d1ad4d60127f2b9c5d7050e5fd0c29b8a3f40ddf827f03e894c4ac86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterSecurityIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "group_name": "groupName",
        "security_ip_list": "securityIpList",
    },
)
class RosEnterpriseDBClusterSecurityIPProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosEnterpriseDBClusterSecurityIP``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip

        :param db_instance_id: 
        :param group_name: 
        :param security_ip_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec00add8103cfabef01adc05760f584f269e1a4d7843260e9dd12c810f013a2a)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "group_name": group_name,
            "security_ip_list": security_ip_list,
        }

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The cluster ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: The name of the whitelist whose settings you want to modify.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityIpList: The IP addresses and CIDR blocks in the whitelist.
        '''
        result = self._values.get("security_ip_list")
        assert result is not None, "Required property 'security_ip_list' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnterpriseDBClusterSecurityIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSynDb(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.RosSynDb",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ClickHouse::SynDb``, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SynDb`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSynDbProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosSynDb``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb

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


@jsii.implements(ISynDb)
class SynDb(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.SynDb",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ClickHouse::SynDb``, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSynDb``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SynDbProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusterId: The id of clickhouse.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrRdsId")
    def attr_rds_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RdsId: The id of RDS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRdsId"))

    @builtins.property
    @jsii.member(jsii_name="attrSynDbs")
    def attr_syn_dbs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SynDbs: Sync Dbs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSynDbs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SynDbProps":
        return typing.cast("SynDbProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1c0d9755ce43ee4898665a16d5159a948aaeb7886b7467be396b5e6b349e236)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67c8e7a33a85b01df2ed7f82f51c2407562561cd7edd21c49c3b0af122654fc2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39913314d054eb0b37fcc123b5a6382d95e57f3e270691971d2a019f13c71471)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        '''Properties for defining a ``SynDb``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb

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


@jsii.implements(IDBCluster)
class DBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.DBCluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ClickHouse::DBCluster``, which is used to create an ApsaraDB for ClickHouse cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_ali_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AliUid: AliUid.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bid: BusinessID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The edition of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommodityCode: Product Code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: ConnectionString.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterDescription")
    def attr_db_cluster_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterDescription: The description of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: The id of DBCluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterType: The specification of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterVersion")
    def attr_db_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterVersion: Version, value:  19.15.2.2.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeClass: DBNodeClass.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeCount: The number of nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBNodeStorage: The storage capacity of a single node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorageType")
    def attr_db_node_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorageType: Instance node storage type.

        Valid values:  cloud_essd, cloud_efficiency.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionKey: KMS key ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: Engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: EngineVersion.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsExpired: IsExpired.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: LockMode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: Reason for lock.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: PayType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Connection port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: Internet connection address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: PublicPort.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: StorageType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcCloudInstanceId: VpcCloudInstanceId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: ZoneId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        return typing.cast(DBClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de535638169fc8139c86b92b22207c693ade5b469d0148d227ee45605ae14c4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f695b49579113f423120c310415367bd8dc457337a3bcd7f6c89468b4ec17bc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__832756e78d79bc866474191b26ccaa2b645170cf4a4d212ce41ae985d93bf1cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnterpriseDBCluster)
class EnterpriseDBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBCluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBCluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnterpriseDBCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnterpriseDBClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__636cb605bcd78fbf93f92305868aa1543618991d8235b9f3056dde1a697ca674)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The ID of the database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateConnectionString")
    def attr_private_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateConnectionString: The private connection string.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicConnectionString: The public connection string.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterProps:
        return typing.cast(EnterpriseDBClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__707724965642e71e736c09828f97bc6475387493dc4661b162a18e5bf8ec93c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1064d23e6a75a31c8feb86915a3ac8d922b8c83f2302b8be3d23037324b2044)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85a3b4ec6f93091ad816a761f6a7e30abb3b38b0045f2982ebd2fbefffc75992)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnterpriseDBClusterAccount)
class EnterpriseDBClusterAccount(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccount",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBClusterAccount``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnterpriseDBClusterAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnterpriseDBClusterAccountProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce710afe3110cc6b47afc27dd4bbc133297bdd0c2ab0c9830f475d46a8984a48)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccount")
    def attr_account(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Account: The name of the database account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccount"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountType: The type of the database account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDmlAuthSetting")
    def attr_dml_auth_setting(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DmlAuthSetting: The information about permissions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDmlAuthSetting"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterAccountProps:
        return typing.cast(EnterpriseDBClusterAccountProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af1122b1620340bfee25c436a97b5909c3d5724b1b38d453e0cbf7572c1b1792)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24b34ad3dd2e0212ad3aa763c5838ef3d524c4a28f3326a26774a9ba141d96c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34e6b8e3e90a49fef216d0101f5d23a70ef392ce11b772705cc751e1ef97e811)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnterpriseDBClusterBackupPolicy)
class EnterpriseDBClusterBackupPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnterpriseDBClusterBackupPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnterpriseDBClusterBackupPolicyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2904fb32a83c2391bd9b852ac7b75743541c1bdcee4b73aa67ccd7ee90aeed7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupState")
    def attr_backup_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupState: Backup switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupState"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupPeriod: The backup cycle.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupTime: The backup time window within which the backup task is performed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterBackupPolicyProps:
        return typing.cast(EnterpriseDBClusterBackupPolicyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc5f1f1862010f7715e76d446b925958d52acce05d8bbaaaab7298aded456435)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2f2f293ea4e1b7fc9db03cab498abf69fcd36d16e5913b45a5edf073230e3e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81b00360b1a354ac8e0608fcd26791b824b911121cd19570243c7d72c7ee7c03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnterpriseDBClusterSecurityIP)
class EnterpriseDBClusterSecurityIP(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIP",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnterpriseDBClusterSecurityIP``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnterpriseDBClusterSecurityIPProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae904fd8bad7100bc6dd927cb7db7e8970cd637e2087d470c88e6576765d73d0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the whitelist whose settings you want to modify.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpType")
    def attr_security_ip_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpType: The type of IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistNetType")
    def attr_whitelist_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistNetType: The network type of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelistNetType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterSecurityIPProps:
        return typing.cast(EnterpriseDBClusterSecurityIPProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f966087cad91aa55b6bed6033ccdc8c4d09428068c5c6bf468df51ad968c95f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e3c9fc8d58b72f2ddb8b7c5ae6d237021b1e34f1b9ccb7c8994a0f052ea01fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a585c38bcee110a0c1929755724a691b9477e600a6a959c546e1096c55fb7614)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "DBCluster",
    "DBClusterProps",
    "EnterpriseDBCluster",
    "EnterpriseDBClusterAccount",
    "EnterpriseDBClusterAccountProps",
    "EnterpriseDBClusterBackupPolicy",
    "EnterpriseDBClusterBackupPolicyProps",
    "EnterpriseDBClusterProps",
    "EnterpriseDBClusterSecurityIP",
    "EnterpriseDBClusterSecurityIPProps",
    "IDBCluster",
    "IEnterpriseDBCluster",
    "IEnterpriseDBClusterAccount",
    "IEnterpriseDBClusterBackupPolicy",
    "IEnterpriseDBClusterSecurityIP",
    "ISynDb",
    "RosDBCluster",
    "RosDBClusterProps",
    "RosEnterpriseDBCluster",
    "RosEnterpriseDBClusterAccount",
    "RosEnterpriseDBClusterAccountProps",
    "RosEnterpriseDBClusterBackupPolicy",
    "RosEnterpriseDBClusterBackupPolicyProps",
    "RosEnterpriseDBClusterProps",
    "RosEnterpriseDBClusterSecurityIP",
    "RosEnterpriseDBClusterSecurityIPProps",
    "RosSynDb",
    "RosSynDbProps",
    "SynDb",
    "SynDbProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

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
    v_switch_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zond_id_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57754706e2ac0601ecfc078d77d19e6c7c5294a14e5050b46f97c85a7e1b3bcd(
    *,
    account: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dml_auth_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBClusterAccount.DmlAuthSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccfe6b56a7effd066bd942043bf8f062be887b36313cbc2b7f49b8d54102d9dd(
    *,
    backup_retention_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd0afcbb6766bc4754c6951cd6bfb1889f1ba3d57c21b6d99c8d053856c14932(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    node_scale_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    node_scale_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_zone: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBCluster.MultiZoneProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    public_connection_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBCluster.PublicConnectionSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEnterpriseDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be4bb64536ba2aeb592f3f8fe4db268766db9beb16fd2491ad4498c07ad24ce5(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__4dc0a3b2fb78d2d3c2adb1c087699fb4f0ec6961fdb04778cc80d6fdd5b28aaa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ed459d30d1ce415f6e8ce88028c981e25ab4480d54643ac5f9db31ae3112a9d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cd77ddebfe190335c9dbd744244877c87d72039b3484e623db3092ad90c68f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21ae2658408cbcd6dea3570a0f1f475e3ad18e3279645c70a6fc52e7dcd0ed4f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7fcaa9cf352ed4428a700c312210ee3e8ea15a4f3536fed5c3b7e582dff4435(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__738e2e0d8d5837766ec8a6543a41d4f96789feac07bbedc49f45ec7759688d31(
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
    v_switch_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zond_id_bak2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id_bak: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6be45550da5127d5dd6bc9d50fe1e3c856afe217b95296d0687cf795396dc4fa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnterpriseDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__087a46aaaade51e91f5e55a46ad72fb714f0d109b28eb987c520804c5f94ed1f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d663a0ed1c4ec8d3f5ff00a550cf070b98a51d611ab8abbfbdf727238c026a7b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__859b5074497a6c89e81c1a967320b146af4757f52aed6de018e525c1b5fc95ae(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd5cdfc9d035bb110b8dc12b25cfe61ecf5c44dbfe3ab06ed2bfbad0654e182e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed22c76ffce7e389ec954b4475a0a01114cab0cc70fb2e763b57fb90a158e9e1(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2770edf573d11151fd01dfdbed342ee26ace5b3f57eeb02a3056ed95d3179c1(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acb494b3e58451875f808ebacfd860a3e3736cd0b5f1c09a2ae31ffcc61ab909(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e40a1cf24ada5a35a054c95fd14a721d3fd7fbabd558de1248325ab4b0d2fe4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57e324527561f759ef31dae7c0382b7db1fa4acac80c85e3833eabbd359651e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea835df0ef170f91371ac41a24409a8df4cbd620097f0b41b178037cfc342009(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__346777b033b2eb3974ec1d3952addcb6adf737d965113f1bdb2630cf101da780(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2291ca13cda2e09e50cbd65f8f9fd5522919ffd7f6935ed2be5df1c3f54e570d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e5c8c1c9aeab09375d6c413b4e26fa014019ccb0628423e19d61fd77f669969(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74f0a55ba9ce0ce5f48c4cb1672bfe1d9c5e18796443758808a05c79087abe79(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBCluster.MultiZoneProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__453d608b7caac2bd998a52120e0f6d64f1cf1f8a421ebbe7ece1307962abcc5a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBCluster.PublicConnectionSettingProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8421bc125a9bda9e12aa80e8c29499cca7428adf843b7abf55d4ec2952c3f0d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__974f460f1337c54947df99b8b853413b69c7577b0fe223fc867d81a90966e842(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc28f6aa659a8a86f9c9491e170cfd03290ce7d44c1dfabd3c9ec9a777dd5ea7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__223b848537b324ec2bf6bb13d82b187964e0eb0af1004ec9f53e2e5fa8bd492e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c505933c6c4204a855cf77fee6c25ba70699531477b4d230d7ff0c24f383536(
    value: typing.Optional[typing.List[RosEnterpriseDBCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8450e2ef057cb40d2e2a7fee68143d2a7866d37a3cf41c6208fc3f4e8f724b05(
    *,
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1f342727420d224f858a1931426b397373791170f22a54644f432c0acb8e923(
    *,
    connection_prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_public_connection: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d1e1d6957aa6b825d4feaac359044e7bdf930c021c18289e8ade540c6e3a404(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6da5a2a35f1998598a166e8c53291eeae7549466c576115f7cd12577cbbad37d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnterpriseDBClusterAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86c9351db1aa8646989bb953a4910de159183a6bc0c5add4a9cbc0bcb047375b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fb19a78d54762b367e02982a69b8adcfcda66820328a6b3b828be3390a165a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05b84c73fc9f4372a7cc45ff310c853447b65880b94629d7b5e772e4980240e6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f31e3ecd52f5f37e38041db5da00fecbfb6bb4c555635c5778819cd4b9e6181(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d47cb80351333246d923631f987c5502b4c7d8ddbc1352864eb15c657b9741c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__767f53e4d39da9de226847e3d5173185c32947b79ce893ed9d3ff14765554c02(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c23e4d08131ddaf63f0d38ac9301b04720628be06ca132bdcb451e2e49d09ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a806ec31df9587a07b57e8261ef38557d1cf6107d2c1cddfc824476d71ab543d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEnterpriseDBClusterAccount.DmlAuthSettingProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1d53eb436997265789320974b5fefaeb5b93e7d2ef8628b01208bf45ea2aa3b(
    *,
    ddl_authority: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    dml_authority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    allow_databases: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    allow_dictionaries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb5745e2fb28e22ca7a0b46de9fe97e22e5d2941dbf466d173f0b615006ddfb4(
    *,
    account: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dml_auth_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBClusterAccount.DmlAuthSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63da85f61dc457225bbc45505d0e7e79a3fecf5de550cd646b0f2cfb24b5bea5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnterpriseDBClusterBackupPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6253f719ba6d9308658d11926d37a4da793410fbdd9d35e056a8e26c61045d81(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e822d16e31d3eb2ad6d1e3b14d7f9f054c003ad34e2fc3974d8010d9ee527eee(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b15713dfe1918dd36f748e3d0c32cd9dac9fee1daed9a8019f53a47b0db1767(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f8c309b830e6f30cf14e7f8567d3ab7e3092db8a4c8293510f1705496324349(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea7ed06a50598a2620797554a926d875b91d5a0c9b2966367a50c5284f964a74(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9de5b58b4f3ca8f9e96c6884f3a08c9ebc37fa04f7e62f431e36ecd2d9dcfe79(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__062887eb6ba1fa9bd7206a5cfebaad2d72ec46ae5b7a6e5abdba34161a9706a4(
    *,
    backup_retention_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99ba5db7ae7cd32334b1b3358694372c68a525544bca4e5a755a0209277b4d18(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    node_scale_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    node_scale_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_zone: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBCluster.MultiZoneProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    public_connection_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEnterpriseDBCluster.PublicConnectionSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEnterpriseDBCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63416267430fc8fd8a454e14c9cbd1b23f34359bc80964001119436a020f4b8c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnterpriseDBClusterSecurityIPProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bab947e309413e26dc947c6d2a80acb9e3c638e9c89779397fb3adeb519a03e9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__355be3c79e0be5f414aefcc2743c0c30469fc0df1373e24bd284754b9f2295d8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ab072ef8cc4c10d061abd7d2d20ee069b47e524321ac9ed11a49564603b3e06(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d028b38bcf7f3b917eff5e92df49cc00cfa7acadedf833f7e27c9f85675ccd36(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72d9cfb8d1ad4d60127f2b9c5d7050e5fd0c29b8a3f40ddf827f03e894c4ac86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec00add8103cfabef01adc05760f584f269e1a4d7843260e9dd12c810f013a2a(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ip_list: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__e1c0d9755ce43ee4898665a16d5159a948aaeb7886b7467be396b5e6b349e236(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67c8e7a33a85b01df2ed7f82f51c2407562561cd7edd21c49c3b0af122654fc2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39913314d054eb0b37fcc123b5a6382d95e57f3e270691971d2a019f13c71471(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__4c4ce03a3d057e19f0669db357cfb03e953a7728bef9f47f3cbee6f135d143b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de535638169fc8139c86b92b22207c693ade5b469d0148d227ee45605ae14c4b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f695b49579113f423120c310415367bd8dc457337a3bcd7f6c89468b4ec17bc0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__832756e78d79bc866474191b26ccaa2b645170cf4a4d212ce41ae985d93bf1cc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__636cb605bcd78fbf93f92305868aa1543618991d8235b9f3056dde1a697ca674(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnterpriseDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__707724965642e71e736c09828f97bc6475387493dc4661b162a18e5bf8ec93c9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1064d23e6a75a31c8feb86915a3ac8d922b8c83f2302b8be3d23037324b2044(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85a3b4ec6f93091ad816a761f6a7e30abb3b38b0045f2982ebd2fbefffc75992(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce710afe3110cc6b47afc27dd4bbc133297bdd0c2ab0c9830f475d46a8984a48(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnterpriseDBClusterAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af1122b1620340bfee25c436a97b5909c3d5724b1b38d453e0cbf7572c1b1792(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24b34ad3dd2e0212ad3aa763c5838ef3d524c4a28f3326a26774a9ba141d96c1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34e6b8e3e90a49fef216d0101f5d23a70ef392ce11b772705cc751e1ef97e811(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2904fb32a83c2391bd9b852ac7b75743541c1bdcee4b73aa67ccd7ee90aeed7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnterpriseDBClusterBackupPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc5f1f1862010f7715e76d446b925958d52acce05d8bbaaaab7298aded456435(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2f2f293ea4e1b7fc9db03cab498abf69fcd36d16e5913b45a5edf073230e3e9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81b00360b1a354ac8e0608fcd26791b824b911121cd19570243c7d72c7ee7c03(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae904fd8bad7100bc6dd927cb7db7e8970cd637e2087d470c88e6576765d73d0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnterpriseDBClusterSecurityIPProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f966087cad91aa55b6bed6033ccdc8c4d09428068c5c6bf468df51ad968c95f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e3c9fc8d58b72f2ddb8b7c5ae6d237021b1e34f1b9ccb7c8994a0f052ea01fe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a585c38bcee110a0c1929755724a691b9477e600a6a959c546e1096c55fb7614(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
