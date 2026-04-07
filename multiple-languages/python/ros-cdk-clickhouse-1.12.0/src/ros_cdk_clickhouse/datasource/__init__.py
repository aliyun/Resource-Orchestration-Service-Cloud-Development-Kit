import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId", "refresh_options": "refreshOptions"},
)
class DBClusterProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster

        :param db_cluster_id: Property dbClusterId: Instance ID.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__887c57e946448f4dfe5780527e0dcca379076f8c2309b458d41dcd7a75b07540)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbClusterId: Instance ID.'''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
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
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "db_cluster_name": "dbClusterName",
        "refresh_options": "refreshOptions",
    },
)
class DBClustersProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters

        :param db_cluster_id: Property dbClusterId: Instance ID.
        :param db_cluster_name: Property dbClusterName: The cluster description information.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5671cca2809e99741543f462e7172ebca0a7ee7dccc272c1965b128c0d5be654)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_cluster_name", value=db_cluster_name, expected_type=type_hints["db_cluster_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if db_cluster_name is not None:
            self._values["db_cluster_name"] = db_cluster_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterId: Instance ID.'''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterName: The cluster description information.'''
        result = self._values.get("db_cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
    },
)
class EnterpriseDBClusterProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EnterpriseDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster

        :param db_instance_id: Property dbInstanceId: The cluster ID.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32f8e9960be456a87c5a9de1a21d9d31203595dd6424eac0229a7ddf81b6048c)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The cluster ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnterpriseDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class EnterpriseDBClustersProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EnterpriseDBClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3639f1cc2823b5771be9f34478df75b2e1e479f4f8ace5e392703a2a923af92c)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnterpriseDBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-clickhouse.datasource.IDBCluster")
class IDBCluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DBCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AliUid: Alibaba Cloud account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bid: The ID of the business process flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: Copy configuration, value description:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommodityCode: Buy Product Code.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: Connection string.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: Instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIpArrayName")
    def attr_db_cluster_ip_array_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterName")
    def attr_db_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterName: The cluster description information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusterNetworkType: Network type.

        Currently, only VPC is supported.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterType: Instance type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeClass: Set the node type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorage: Single-node storage space.

        Value range: 100 GB to 32000GB.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionKey: Key management service KMS key ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.'''
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
        '''Attribute EngineVersion: The engine version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The expiration time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsExpired: If the instance has expired.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: The lock mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: Lock reason.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The paymen type of the resource.'''
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
        '''Attribute PublicConnectionString: A public IP address for the connection.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddr")
    def attr_public_ip_addr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddr: Public IP address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: Public network port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutStatus")
    def attr_scale_out_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleOutStatus: Scale state.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIps: The whitelist supports the following two formats:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSupportBackup")
    def attr_support_backup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportBackup: Support fallback scheme.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSupportHttpsPort")
    def attr_support_https_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportHttpsPort: The system supports http port number.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSupportMysqlPort")
    def attr_support_mysql_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportMysqlPort: Supports Mysql, and those of the ports.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSupportOss")
    def attr_support_oss(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VPC ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcIpAddr")
    def attr_vpc_ip_addr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcIpAddr: VPC IP address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: Switch ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: On behalf of the zone resource attribute field.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        ...


class _IDBClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.datasource.IDBCluster"

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AliUid: Alibaba Cloud account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bid: The ID of the business process flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: Copy configuration, value description:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommodityCode: Buy Product Code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: Connection string.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: Instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIpArrayName")
    def attr_db_cluster_ip_array_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterIpArrayName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterName")
    def attr_db_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterName: The cluster description information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusterNetworkType: Network type.

        Currently, only VPC is supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterType: Instance type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeClass: Set the node type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorage: Single-node storage space.

        Value range: 100 GB to 32000GB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionKey: Key management service KMS key ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.'''
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
        '''Attribute EngineVersion: The engine version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The expiration time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsExpired: If the instance has expired.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: The lock mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: Lock reason.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The paymen type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

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
        '''Attribute PublicConnectionString: A public IP address for the connection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddr")
    def attr_public_ip_addr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddr: Public IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicIpAddr"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: Public network port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutStatus")
    def attr_scale_out_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleOutStatus: Scale state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleOutStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIps: The whitelist supports the following two formats:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportBackup")
    def attr_support_backup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportBackup: Support fallback scheme.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportBackup"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportHttpsPort")
    def attr_support_https_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportHttpsPort: The system supports http port number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportHttpsPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportMysqlPort")
    def attr_support_mysql_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportMysqlPort: Supports Mysql, and those of the ports.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportMysqlPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportOss")
    def attr_support_oss(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportOss"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcIpAddr")
    def attr_vpc_ip_addr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcIpAddr: VPC IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcIpAddr"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: Switch ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: On behalf of the zone resource attribute field.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClusterProps:
        return typing.cast(DBClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBCluster).__jsii_proxy_class__ = lambda : _IDBClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-clickhouse.datasource.IDBClusters")
class IDBClusters(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DBClusters``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterIds: The list of db cluster IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusters: The list of db clusters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClustersProps:
        ...


class _IDBClustersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DBClusters``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.datasource.IDBClusters"

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterIds: The list of db cluster IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusters: The list of db clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClustersProps:
        return typing.cast(DBClustersProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDBClusters).__jsii_proxy_class__ = lambda : _IDBClustersProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBCluster"
)
class IEnterpriseDBCluster(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``EnterpriseDBCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: Type, value description: enterprise: Enterprise Edition.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChargeType: The billing method.

        Enterprise Edition clusters use the pay-as-you-go billing method.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrComputingGroupIds")
    def attr_computing_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ComputingGroupIds: The list of computing group IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The cluster ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The cluster description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisabledPorts")
    def attr_disabled_ports(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisabledPorts: The specified database port is disabled.

        Multiple ports separated by commas (,) are supported.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoints: List of Endpoint details.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: The engine type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngineMinorVersion")
    def attr_engine_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineMinorVersion: The minor version number of the cluster engine.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: The engine version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNetworkType")
    def attr_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceNetworkType: The network type of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainEndTime: The end time of the maintenance window.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainStartTime: The maintainable time start time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMultiZones")
    def attr_multi_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiZones: The information about the zones.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeCount")
    def attr_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeCount: The number of nodes.

        The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Nodes: The Node information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMax")
    def attr_node_scale_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeScaleMax: The maximum value of serverless node auto scaling.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMin")
    def attr_node_scale_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrObjectStoreSize")
    def attr_object_store_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ObjectStoreSize: The size of the object storage space.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScaleMax")
    def attr_scale_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleMax: The maximum capacity for elastic scaling.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScaleMin")
    def attr_scale_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleMin: The minimum capacity for elastic scaling.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageQuota")
    def attr_storage_quota(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageQuota: Storage Pre-purchased Capacity (GB).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The size of the storage space.

        Unit: GB.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: The storage type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The details of the tags.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The VPC ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VswitchId: The VSwitch ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The zone ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterProps:
        ...


class _IEnterpriseDBClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnterpriseDBCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBCluster"

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: Type, value description: enterprise: Enterprise Edition.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChargeType: The billing method.

        Enterprise Edition clusters use the pay-as-you-go billing method.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrComputingGroupIds")
    def attr_computing_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ComputingGroupIds: The list of computing group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrComputingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The cluster ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The cluster description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisabledPorts")
    def attr_disabled_ports(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisabledPorts: The specified database port is disabled.

        Multiple ports separated by commas (,) are supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisabledPorts"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoints: List of Endpoint details.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoints"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: The engine type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineMinorVersion")
    def attr_engine_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineMinorVersion: The minor version number of the cluster engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: The engine version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNetworkType")
    def attr_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceNetworkType: The network type of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainEndTime: The end time of the maintenance window.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainStartTime: The maintainable time start time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiZones")
    def attr_multi_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiZones: The information about the zones.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMultiZones"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeCount")
    def attr_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeCount: The number of nodes.

        The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Nodes: The Node information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMax")
    def attr_node_scale_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeScaleMax: The maximum value of serverless node auto scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeScaleMax"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMin")
    def attr_node_scale_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeScaleMin"))

    @builtins.property
    @jsii.member(jsii_name="attrObjectStoreSize")
    def attr_object_store_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ObjectStoreSize: The size of the object storage space.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrObjectStoreSize"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleMax")
    def attr_scale_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleMax: The maximum capacity for elastic scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleMax"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleMin")
    def attr_scale_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleMin: The minimum capacity for elastic scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleMin"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageQuota")
    def attr_storage_quota(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageQuota: Storage Pre-purchased Capacity (GB).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageQuota"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The size of the storage space.

        Unit: GB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: The storage type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The details of the tags.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The VPC ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VswitchId: The VSwitch ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The zone ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClusterProps:
        return typing.cast(EnterpriseDBClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnterpriseDBCluster).__jsii_proxy_class__ = lambda : _IEnterpriseDBClusterProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBClusters"
)
class IEnterpriseDBClusters(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``EnterpriseDBClusters``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceIds: The list of DB instance IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnterpriseDbClusters")
    def attr_enterprise_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnterpriseDBClusters: The list of enterprise DB clusters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClustersProps:
        ...


class _IEnterpriseDBClustersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnterpriseDBClusters``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBClusters"

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceIds: The list of DB instance IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrEnterpriseDbClusters")
    def attr_enterprise_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnterpriseDBClusters: The list of enterprise DB clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnterpriseDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClustersProps:
        return typing.cast(EnterpriseDBClustersProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnterpriseDBClusters).__jsii_proxy_class__ = lambda : _IEnterpriseDBClustersProxy


class RosDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ClickHouse::DBCluster``, which is used to query the information about an ApsaraDB for ClickHouse cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
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
            type_hints = typing.get_type_hints(_typecheckingstub__5fd8d551c2b7e78137587c80f659bac2fa0b3e21a83bd8c484656848547aaf4e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5f0beb4b8c25aee0cf7b87e226770fbb4d50b68ed2652e74834f43bd23487613)
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
        :Attribute: AliUid: Alibaba Cloud account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bid: The ID of the business process flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Category: Copy configuration, value description:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CommodityCode: Buy Product Code.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: Connection string.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterId: Instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIpArrayName")
    def attr_db_cluster_ip_array_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterIPArrayName: The name of the whitelist group to be modified.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterIpArrayName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterName")
    def attr_db_cluster_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterName: The cluster description information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbClusterNetworkType: Network type. Currently, only VPC is supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterType: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeClass: Set the node type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptionKey: Key management service KMS key ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Engine: Engine.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: The engine version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpireTime: The expiration time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsExpired: If the instance has expired.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockMode: The lock mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockReason: Lock reason.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The paymen type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Connection port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: A public IP address for the connection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddr")
    def attr_public_ip_addr(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddr: Public IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddr"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicPort: Public network port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutStatus")
    def attr_scale_out_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScaleOutStatus: Scale state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScaleOutStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIps: The whitelist supports the following two formats:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportBackup")
    def attr_support_backup(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SupportBackup: Support fallback scheme.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupportBackup"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportHttpsPort")
    def attr_support_https_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SupportHttpsPort: The system supports http port number.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupportHttpsPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportMysqlPort")
    def attr_support_mysql_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SupportMysqlPort: Supports Mysql, and those of the ports.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupportMysqlPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportOss")
    def attr_support_oss(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupportOss"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VPC ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcIpAddr")
    def attr_vpc_ip_addr(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcIpAddr: VPC IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcIpAddr"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: Switch ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: On behalf of the zone resource attribute field.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: Instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a1bad96e314f93e3419129e06281f4b95ec3e54a4370bd917dea1e78fb48d5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b342880a1336a11e5354bd91c6dc3790d51f69f88610e7c74c55962192da4cb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c14b9806afa3e47b04e9736bed01c757b23eda6a9da36e2562a3b682ce8f4f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId", "refresh_options": "refreshOptions"},
)
class RosDBClusterProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster

        :param db_cluster_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba49e0c660199fc00c5e89624f72b40c2f6941f7a0862121de32933d96d2ac4e)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_cluster_id": db_cluster_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbClusterId: Instance ID.
        '''
        result = self._values.get("db_cluster_id")
        assert result is not None, "Required property 'db_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosDBClusters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ClickHouse::DBClusters``, which is used to query the information about ApsaraDB for ClickHouse clusters.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBClusters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6c83468abac4bf1adec2e012740aac45f172de9ffadb2c52b86d4a9fc0ce54f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d0246853a414284cb647d2b3be7d724f9833dc855552bafda4fdcd7b9200979f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterIds: The list of db cluster IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusters: The list of db clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__21ea06df9b1a3af914a6de2b0c2938aa9d28b36f93eaf522f0be22b430826531)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: Instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88ba8cee57989a0441e10baa1038ead0272d0492c91e4b3d35626eca04d55eda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterName")
    def db_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterName: The cluster description information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterName"))

    @db_cluster_name.setter
    def db_cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__576cf58f4e30389d6f5482b60160ace2eac453e73002b82beafd7912bf479d4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e55e2deaeacf4ef6a5a580f1842deee2e822ae4d0c277391f92a80e996351eb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "db_cluster_name": "dbClusterName",
        "refresh_options": "refreshOptions",
    },
)
class RosDBClustersProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters

        :param db_cluster_id: 
        :param db_cluster_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dd83264d4a180c6968eff54fbffbc143e961822a0bfc2a1a39cb2a2fc0ed641)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_cluster_name", value=db_cluster_name, expected_type=type_hints["db_cluster_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if db_cluster_name is not None:
            self._values["db_cluster_name"] = db_cluster_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: Instance ID.
        '''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterName: The cluster description information.
        '''
        result = self._values.get("db_cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnterpriseDBCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosEnterpriseDBCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ClickHouse::EnterpriseDBCluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnterpriseDBCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
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
            type_hints = typing.get_type_hints(_typecheckingstub__41a0043209fd898a372fb1f5af6aa362eda1b955c3d765670608eacb5b0895c4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__56bd2bf80c04bf707da3c45465db8659a09603e44e757502a84edc3d47f16bd9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Category: Type, value description: enterprise: Enterprise Edition.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChargeType: The billing method. Enterprise Edition clusters use the pay-as-you-go billing method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrComputingGroupIds")
    def attr_computing_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ComputingGroupIds: The list of computing group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrComputingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The cluster ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The cluster description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisabledPorts")
    def attr_disabled_ports(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisabledPorts: The specified database port is disabled. Multiple ports separated by commas (,) are supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisabledPorts"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoints: List of Endpoint details.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoints"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Engine: The engine type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineMinorVersion")
    def attr_engine_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineMinorVersion: The minor version number of the cluster engine.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: The engine version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNetworkType")
    def attr_instance_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceNetworkType: The network type of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainEndTime: The end time of the maintenance window.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainStartTime: The maintainable time start time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiZones")
    def attr_multi_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MultiZones: The information about the zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMultiZones"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeCount")
    def attr_node_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeCount: The number of nodes. The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The Node information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMax")
    def attr_node_scale_max(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeScaleMax: The maximum value of serverless node auto scaling.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeScaleMax"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMin")
    def attr_node_scale_min(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeScaleMin"))

    @builtins.property
    @jsii.member(jsii_name="attrObjectStoreSize")
    def attr_object_store_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ObjectStoreSize: The size of the object storage space.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrObjectStoreSize"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleMax")
    def attr_scale_max(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScaleMax: The maximum capacity for elastic scaling.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScaleMax"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleMin")
    def attr_scale_min(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScaleMin: The minimum capacity for elastic scaling.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScaleMin"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageQuota")
    def attr_storage_quota(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageQuota: Storage Pre-purchased Capacity (GB).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageQuota"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageSize: The size of the storage space. Unit: GB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageType: The storage type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The details of the tags.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The VPC ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VswitchId: The VSwitch ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The zone ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2978a3aa0b4771c60561be1e048f7c260f7654a9bb95ed78bd85915ff2ecb035)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5b8fa99c7dc96eb2983d1c9566ce9d8e80cac4ba1937d367f34a717525095c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__432624e1878482c01cf9a6d4665feb8ec230391b9b37984be4814a368e072f84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosEnterpriseDBClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "refresh_options": "refreshOptions",
    },
)
class RosEnterpriseDBClusterProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnterpriseDBCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster

        :param db_instance_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__191424683faccb7b7dfec33c57a7aeb11142d20c2d86535b3a66d294a08b534f)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnterpriseDBClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnterpriseDBClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosEnterpriseDBClusters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ClickHouse::EnterpriseDBClusters``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnterpriseDBClusters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnterpriseDBClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__884b99270f4287584d1008083677ce8428c06ff82cfa0d46a537825bcc410754)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5c88b9e0ac8212b2268249bbb7663ce2e4457907a4c699f1a07747f5288a1577)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceIds: The list of DB instance IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrEnterpriseDbClusters")
    def attr_enterprise_db_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnterpriseDBClusters: The list of enterprise DB clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnterpriseDbClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__756bcd22399165826a1062436d9692458c0e8545d33ad10d2265e7252a0ac998)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__444f3c88c991610b063a88a3b64b222e239e85329fac8407331c02f682cfc817)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__2150cdda2ab76ddf7f9254dc5b59ae924f516986119e8586576e5c5d39dea967)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosEnterpriseDBClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosEnterpriseDBClustersProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnterpriseDBClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters

        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a5f07c933731de3de91037c60a6d62b0547c03affbd258d703ae2b91522233e)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnterpriseDBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDBCluster)
class DBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.DBCluster",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ClickHouse::DBCluster``, which is used to query the information about an ApsaraDB for ClickHouse cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
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
            type_hints = typing.get_type_hints(_typecheckingstub__40780d1957d46e1ff84d8b8f5d7aac6f668ddc0d238e87cb9765934ecc93bea5)
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
        '''Attribute AliUid: Alibaba Cloud account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrBid")
    def attr_bid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bid: The ID of the business process flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBid"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: Copy configuration, value description:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCommodityCode")
    def attr_commodity_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommodityCode: Buy Product Code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCommodityCode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionString: Connection string.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterId")
    def attr_db_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterId: Instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIpArrayName")
    def attr_db_cluster_ip_array_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterIpArrayName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterName")
    def attr_db_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterName: The cluster description information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNetworkType")
    def attr_db_cluster_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbClusterNetworkType: Network type.

        Currently, only VPC is supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterType")
    def attr_db_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterType: Instance type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClass")
    def attr_db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeClass: Set the node type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeCount")
    def attr_db_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeStorage")
    def attr_db_node_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbNodeStorage: Single-node storage space.

        Value range: 100 GB to 32000GB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbNodeStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionKey")
    def attr_encryption_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionKey: Key management service KMS key ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptionKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptionType")
    def attr_encryption_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.'''
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
        '''Attribute EngineVersion: The engine version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The expiration time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrIsExpired")
    def attr_is_expired(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsExpired: If the instance has expired.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsExpired"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: The lock mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockReason: Lock reason.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The paymen type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

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
        '''Attribute PublicConnectionString: A public IP address for the connection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddr")
    def attr_public_ip_addr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddr: Public IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicIpAddr"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicPort")
    def attr_public_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicPort: Public network port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicPort"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutStatus")
    def attr_scale_out_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleOutStatus: Scale state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleOutStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIps: The whitelist supports the following two formats:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportBackup")
    def attr_support_backup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportBackup: Support fallback scheme.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportBackup"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportHttpsPort")
    def attr_support_https_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportHttpsPort: The system supports http port number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportHttpsPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportMysqlPort")
    def attr_support_mysql_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportMysqlPort: Supports Mysql, and those of the ports.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportMysqlPort"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportOss")
    def attr_support_oss(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSupportOss"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcIpAddr")
    def attr_vpc_ip_addr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcIpAddr: VPC IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcIpAddr"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: Switch ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: On behalf of the zone resource attribute field.'''
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
            type_hints = typing.get_type_hints(_typecheckingstub__40a68dca1d3fdf8a7a7817caba8282e935e470db73c27a95d83f6141f018df72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1fb6e4ebc45e933f6fc1e7f67960441b56c40ccd15f499add9ab5084035b3f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40c02a3de17880ee0cf061ae6de097e8dbfbbaaa52e24982bc88c4bdfb6f5284)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDBClusters)
class DBClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.DBClusters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ClickHouse::DBClusters``, which is used to query the information about ApsaraDB for ClickHouse clusters.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBClusters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[DBClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c3a3054b9c6f833d295937ac18e1098db98c0b1dec9d8f2165d705a4f0d701a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusterIds: The list of db cluster IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBClusters: The list of db clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DBClustersProps:
        return typing.cast(DBClustersProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bf82a597874003d77ee4f530cae59c199a49fcc0a82803fdb5daa8b6fbb4784)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb9151b50c62d856ab5fa278b8126331e50ddd615086db7e6f0d68ff2fe83a16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72a3a8f60ca7b7784856e0e5d08fc1dd1476023a88cddb7a2ce97fa6d1222431)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnterpriseDBCluster)
class EnterpriseDBCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBCluster",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ClickHouse::EnterpriseDBCluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnterpriseDBCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
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
            type_hints = typing.get_type_hints(_typecheckingstub__b8d220cbf6029edcd17d321f0dfa404c9c35b38c2a161f3cd1fb193ae4235045)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: Type, value description: enterprise: Enterprise Edition.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChargeType: The billing method.

        Enterprise Edition clusters use the pay-as-you-go billing method.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrComputingGroupIds")
    def attr_computing_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ComputingGroupIds: The list of computing group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrComputingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The cluster ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The cluster description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisabledPorts")
    def attr_disabled_ports(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisabledPorts: The specified database port is disabled.

        Multiple ports separated by commas (,) are supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisabledPorts"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoints: List of Endpoint details.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoints"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: The engine type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineMinorVersion")
    def attr_engine_minor_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineMinorVersion: The minor version number of the cluster engine.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: The engine version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNetworkType")
    def attr_instance_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceNetworkType: The network type of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainEndTime: The end time of the maintenance window.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainStartTime: The maintainable time start time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiZones")
    def attr_multi_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiZones: The information about the zones.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMultiZones"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeCount")
    def attr_node_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeCount: The number of nodes.

        The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeCount"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Nodes: The Node information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMax")
    def attr_node_scale_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeScaleMax: The maximum value of serverless node auto scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeScaleMax"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeScaleMin")
    def attr_node_scale_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeScaleMin"))

    @builtins.property
    @jsii.member(jsii_name="attrObjectStoreSize")
    def attr_object_store_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ObjectStoreSize: The size of the object storage space.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrObjectStoreSize"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleMax")
    def attr_scale_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleMax: The maximum capacity for elastic scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleMax"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleMin")
    def attr_scale_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleMin: The minimum capacity for elastic scaling.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleMin"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageQuota")
    def attr_storage_quota(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageQuota: Storage Pre-purchased Capacity (GB).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageQuota"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The size of the storage space.

        Unit: GB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageType")
    def attr_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageType: The storage type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The details of the tags.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The VPC ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VswitchId: The VSwitch ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The zone ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0d284a908160d60f59f133db45071839d968256364fa25a5e5ef194119affdd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f58481f59dfa1de0c227aa34dd37e830ae4450b96a89e242d3bfe82b1ccf624)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3b8f2f1ef95aede7e4e99a5ebdfee4035b0be9cf02ff73c4b2201c97ffbdc0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnterpriseDBClusters)
class EnterpriseDBClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClusters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ClickHouse::EnterpriseDBClusters``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnterpriseDBClusters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[EnterpriseDBClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78f821f86e184dddba30990f9a1deb93cf5cd8d130422179cd1063344bc6b94c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceIds: The list of DB instance IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrEnterpriseDbClusters")
    def attr_enterprise_db_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnterpriseDBClusters: The list of enterprise DB clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnterpriseDbClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnterpriseDBClustersProps:
        return typing.cast(EnterpriseDBClustersProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c8d2a115ef90710121694de792f72b027f0e782a186457a7c3b4e6f591abd39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2438b9b459b468edaee7dcf78e8c9b3ee56cd76a0dfe1536cce1ecdc0d2ad24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__792c73548d596b38dcfb8e31665a60d802af6ca7b85229dd3bfd4fdc63421ada)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "DBCluster",
    "DBClusterProps",
    "DBClusters",
    "DBClustersProps",
    "EnterpriseDBCluster",
    "EnterpriseDBClusterProps",
    "EnterpriseDBClusters",
    "EnterpriseDBClustersProps",
    "IDBCluster",
    "IDBClusters",
    "IEnterpriseDBCluster",
    "IEnterpriseDBClusters",
    "RosDBCluster",
    "RosDBClusterProps",
    "RosDBClusters",
    "RosDBClustersProps",
    "RosEnterpriseDBCluster",
    "RosEnterpriseDBClusterProps",
    "RosEnterpriseDBClusters",
    "RosEnterpriseDBClustersProps",
]

publication.publish()

def _typecheckingstub__887c57e946448f4dfe5780527e0dcca379076f8c2309b458d41dcd7a75b07540(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5671cca2809e99741543f462e7172ebca0a7ee7dccc272c1965b128c0d5be654(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32f8e9960be456a87c5a9de1a21d9d31203595dd6424eac0229a7ddf81b6048c(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3639f1cc2823b5771be9f34478df75b2e1e479f4f8ace5e392703a2a923af92c(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fd8d551c2b7e78137587c80f659bac2fa0b3e21a83bd8c484656848547aaf4e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f0beb4b8c25aee0cf7b87e226770fbb4d50b68ed2652e74834f43bd23487613(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a1bad96e314f93e3419129e06281f4b95ec3e54a4370bd917dea1e78fb48d5b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b342880a1336a11e5354bd91c6dc3790d51f69f88610e7c74c55962192da4cb4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c14b9806afa3e47b04e9736bed01c757b23eda6a9da36e2562a3b682ce8f4f0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba49e0c660199fc00c5e89624f72b40c2f6941f7a0862121de32933d96d2ac4e(
    *,
    db_cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6c83468abac4bf1adec2e012740aac45f172de9ffadb2c52b86d4a9fc0ce54f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0246853a414284cb647d2b3be7d724f9833dc855552bafda4fdcd7b9200979f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21ea06df9b1a3af914a6de2b0c2938aa9d28b36f93eaf522f0be22b430826531(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88ba8cee57989a0441e10baa1038ead0272d0492c91e4b3d35626eca04d55eda(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__576cf58f4e30389d6f5482b60160ace2eac453e73002b82beafd7912bf479d4c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e55e2deaeacf4ef6a5a580f1842deee2e822ae4d0c277391f92a80e996351eb4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dd83264d4a180c6968eff54fbffbc143e961822a0bfc2a1a39cb2a2fc0ed641(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41a0043209fd898a372fb1f5af6aa362eda1b955c3d765670608eacb5b0895c4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnterpriseDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56bd2bf80c04bf707da3c45465db8659a09603e44e757502a84edc3d47f16bd9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2978a3aa0b4771c60561be1e048f7c260f7654a9bb95ed78bd85915ff2ecb035(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b8fa99c7dc96eb2983d1c9566ce9d8e80cac4ba1937d367f34a717525095c7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__432624e1878482c01cf9a6d4665feb8ec230391b9b37984be4814a368e072f84(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__191424683faccb7b7dfec33c57a7aeb11142d20c2d86535b3a66d294a08b534f(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__884b99270f4287584d1008083677ce8428c06ff82cfa0d46a537825bcc410754(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnterpriseDBClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c88b9e0ac8212b2268249bbb7663ce2e4457907a4c699f1a07747f5288a1577(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__756bcd22399165826a1062436d9692458c0e8545d33ad10d2265e7252a0ac998(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__444f3c88c991610b063a88a3b64b222e239e85329fac8407331c02f682cfc817(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2150cdda2ab76ddf7f9254dc5b59ae924f516986119e8586576e5c5d39dea967(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a5f07c933731de3de91037c60a6d62b0547c03affbd258d703ae2b91522233e(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40780d1957d46e1ff84d8b8f5d7aac6f668ddc0d238e87cb9765934ecc93bea5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40a68dca1d3fdf8a7a7817caba8282e935e470db73c27a95d83f6141f018df72(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1fb6e4ebc45e933f6fc1e7f67960441b56c40ccd15f499add9ab5084035b3f7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c02a3de17880ee0cf061ae6de097e8dbfbbaaa52e24982bc88c4bdfb6f5284(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c3a3054b9c6f833d295937ac18e1098db98c0b1dec9d8f2165d705a4f0d701a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DBClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bf82a597874003d77ee4f530cae59c199a49fcc0a82803fdb5daa8b6fbb4784(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb9151b50c62d856ab5fa278b8126331e50ddd615086db7e6f0d68ff2fe83a16(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72a3a8f60ca7b7784856e0e5d08fc1dd1476023a88cddb7a2ce97fa6d1222431(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8d220cbf6029edcd17d321f0dfa404c9c35b38c2a161f3cd1fb193ae4235045(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnterpriseDBClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d284a908160d60f59f133db45071839d968256364fa25a5e5ef194119affdd8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f58481f59dfa1de0c227aa34dd37e830ae4450b96a89e242d3bfe82b1ccf624(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3b8f2f1ef95aede7e4e99a5ebdfee4035b0be9cf02ff73c4b2201c97ffbdc0b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78f821f86e184dddba30990f9a1deb93cf5cd8d130422179cd1063344bc6b94c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[EnterpriseDBClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c8d2a115ef90710121694de792f72b027f0e782a186457a7c3b4e6f591abd39(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2438b9b459b468edaee7dcf78e8c9b3ee56cd76a0dfe1536cce1ecdc0d2ad24(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__792c73548d596b38dcfb8e31665a60d802af6ca7b85229dd3bfd4fdc63421ada(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
