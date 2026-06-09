'''
## Aliyun ROS MONGODB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MONGODB from '@alicloud/ros-cdk-mongodb';
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
import ros_cdk_ram as _ros_cdk_ram_c2c603f0


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.AuditPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "audit_status": "auditStatus",
        "db_instance_id": "dbInstanceId",
        "storage_period": "storagePeriod",
    },
)
class AuditPolicyProps:
    def __init__(
        self,
        *,
        audit_status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AuditPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy

        :param audit_status: Property auditStatus: Audit state, Valid values: ``enable``, ``disabled``.
        :param db_instance_id: Property dbInstanceId: Database Instance Id.
        :param storage_period: Property storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf45a0f6d78731faefa95d300ed2719d5068e6221b4622b3597e3087f6c96ed)
            check_type(argname="argument audit_status", value=audit_status, expected_type=type_hints["audit_status"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument storage_period", value=storage_period, expected_type=type_hints["storage_period"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "audit_status": audit_status,
            "db_instance_id": db_instance_id,
        }
        if storage_period is not None:
            self._values["storage_period"] = storage_period

    @builtins.property
    def audit_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property auditStatus: Audit state, Valid values: ``enable``, ``disabled``.'''
        result = self._values.get("audit_status")
        assert result is not None, "Required property 'audit_status' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Database Instance Id.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storagePeriod: Audit log retention duration.

        The value range is 1 to 365 days. The default value is 30 days.
        '''
        result = self._values.get("storage_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AuditPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "global_ig_name": "globalIgName",
        "global_security_ip_list": "globalSecurityIpList",
    },
)
class GlobalSecurityIPGroupProps:
    def __init__(
        self,
        *,
        global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        global_security_ip_list: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``GlobalSecurityIPGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup

        :param global_ig_name: Property globalIgName: The name of the IP whitelist template.
        :param global_security_ip_list: Property globalSecurityIpList: The IP address in the whitelist template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96533fcc71c6d738405798aa34520ecf0061553d6f55ce90f7a150a4db223bf3)
            check_type(argname="argument global_ig_name", value=global_ig_name, expected_type=type_hints["global_ig_name"])
            check_type(argname="argument global_security_ip_list", value=global_security_ip_list, expected_type=type_hints["global_security_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "global_ig_name": global_ig_name,
            "global_security_ip_list": global_security_ip_list,
        }

    @builtins.property
    def global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property globalIgName: The name of the IP whitelist template.'''
        result = self._values.get("global_ig_name")
        assert result is not None, "Required property 'global_ig_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def global_security_ip_list(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property globalSecurityIpList: The IP address in the whitelist template.'''
        result = self._values.get("global_security_ip_list")
        assert result is not None, "Required property 'global_security_ip_list' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GlobalSecurityIPGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IAuditPolicy")
class IAuditPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AuditPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuditStatus")
    def attr_audit_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuditStatus: Audit state, Valid values: ``enable``, ``disabled``.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditPolicyProps:
        ...


class _IAuditPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AuditPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IAuditPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrAuditStatus")
    def attr_audit_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuditStatus: Audit state, Valid values: ``enable``, ``disabled``.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuditStatus"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditPolicyProps:
        return typing.cast(AuditPolicyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAuditPolicy).__jsii_proxy_class__ = lambda : _IAuditPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IGlobalSecurityIPGroup")
class IGlobalSecurityIPGroup(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``GlobalSecurityIPGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGlobalIgName")
    def attr_global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalIgName: The name of the IP whitelist template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityIpList")
    def attr_global_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityIpList: The IP address in the whitelist template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalSecurityIPGroupProps:
        ...


class _IGlobalSecurityIPGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GlobalSecurityIPGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IGlobalSecurityIPGroup"

    @builtins.property
    @jsii.member(jsii_name="attrGlobalIgName")
    def attr_global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalIgName: The name of the IP whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalIgName"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityIpList")
    def attr_global_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityIpList: The IP address in the whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalSecurityIPGroupProps:
        return typing.cast(GlobalSecurityIPGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGlobalSecurityIPGroup).__jsii_proxy_class__ = lambda : _IGlobalSecurityIPGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionURI: Connection uri.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The instance id of created mongodb instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceStatus: Status of mongodb instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Order Id of created instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetName")
    def attr_replica_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaSetName: Name of replica set.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionURI: Connection uri.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionUri"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The instance id of created mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceStatus: Status of mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetName")
    def attr_replica_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaSetName: Name of replica set.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaSetName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IPrivateSrvNetworkAddress")
class IPrivateSrvNetworkAddress(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``PrivateSrvNetworkAddress``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPrivateSrvConnectionStringUri")
    def attr_private_srv_connection_string_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrivateSrvNetworkAddressProps":
        ...


class _IPrivateSrvNetworkAddressProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PrivateSrvNetworkAddress``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IPrivateSrvNetworkAddress"

    @builtins.property
    @jsii.member(jsii_name="attrPrivateSrvConnectionStringUri")
    def attr_private_srv_connection_string_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateSrvConnectionStringUri"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrivateSrvNetworkAddressProps":
        return typing.cast("PrivateSrvNetworkAddressProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPrivateSrvNetworkAddress).__jsii_proxy_class__ = lambda : _IPrivateSrvNetworkAddressProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IShardingInstance")
class IShardingInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ShardingInstance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The instance id of created mongodb instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceStatus: Status of mongodb instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Order Id of created instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingInstanceProps":
        ...


class _IShardingInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ShardingInstance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IShardingInstance"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The instance id of created mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceStatus: Status of mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingInstanceProps":
        return typing.cast("ShardingInstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IShardingInstance).__jsii_proxy_class__ = lambda : _IShardingInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IShardingNetworkPrivateAddress")
class IShardingNetworkPrivateAddress(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ShardingNetworkPrivateAddress``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCompatibleConnections")
    def attr_compatible_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingNetworkPrivateAddressProps":
        ...


class _IShardingNetworkPrivateAddressProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ShardingNetworkPrivateAddress``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IShardingNetworkPrivateAddress"

    @builtins.property
    @jsii.member(jsii_name="attrCompatibleConnections")
    def attr_compatible_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCompatibleConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingNetworkPrivateAddressProps":
        return typing.cast("ShardingNetworkPrivateAddressProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IShardingNetworkPrivateAddress).__jsii_proxy_class__ = lambda : _IShardingNetworkPrivateAddressProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.IShardingNetworkPublicAddress")
class IShardingNetworkPublicAddress(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ShardingNetworkPublicAddress``.'''

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingNetworkPublicAddressProps":
        ...


class _IShardingNetworkPublicAddressProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ShardingNetworkPublicAddress``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.IShardingNetworkPublicAddress"

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingNetworkPublicAddressProps":
        return typing.cast("ShardingNetworkPublicAddressProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IShardingNetworkPublicAddress).__jsii_proxy_class__ = lambda : _IShardingNetworkPublicAddressProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b7f2f84f726a986010d4c9dd2ffccd4429bc37eba99351ce10043590f2b5f99)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="grantFullAccess")
    def grant_full_access(
        self,
        identity: _ros_cdk_ram_c2c603f0.IPrincipal,
    ) -> _ros_cdk_ram_c2c603f0.ManagedPolicy:
        '''Grant an RAM principal (Role/Group/User) full control over this MongoDB instance.

        :param identity: The principal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d70b7af6b8373e73d96a5555c5ac4f4c56bce0b5d6f2ea6a9c98492dc64aae55)
            check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
        return typing.cast(_ros_cdk_ram_c2c603f0.ManagedPolicy, jsii.invoke(self, "grantFullAccess", [identity]))

    @jsii.member(jsii_name="grantList")
    def grant_list(
        self,
        identity: _ros_cdk_ram_c2c603f0.IPrincipal,
    ) -> _ros_cdk_ram_c2c603f0.ManagedPolicy:
        '''Grant an RAM principal (Role/Group/User) permission to list resources for this MongoDB instance.

        :param identity: The principal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b922d57558ca493d29a637d5c0f128e9a0fc4823ace27660d677a3f6282a6224)
            check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
        return typing.cast(_ros_cdk_ram_c2c603f0.ManagedPolicy, jsii.invoke(self, "grantList", [identity]))

    @jsii.member(jsii_name="grantRead")
    def grant_read(
        self,
        identity: _ros_cdk_ram_c2c603f0.IPrincipal,
    ) -> _ros_cdk_ram_c2c603f0.ManagedPolicy:
        '''Grant an RAM principal (Role/Group/User) permission to list and get resources for this MongoDB instance.

        :param identity: The principal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cb3b2854a67292dbf5fa0148b19c719866a488151a263a2e59ddb6d7cd25c04)
            check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
        return typing.cast(_ros_cdk_ram_c2c603f0.ManagedPolicy, jsii.invoke(self, "grantRead", [identity]))

    @jsii.member(jsii_name="grantReadWrite")
    def grant_read_write(
        self,
        identity: _ros_cdk_ram_c2c603f0.IPrincipal,
    ) -> _ros_cdk_ram_c2c603f0.ManagedPolicy:
        '''Grant an RAM principal (Role/Group/User) permission to create, update and delete resources for this MongoDB instance.

        :param identity: The principal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e6a735342d9308295a9a5a1dea4fd813a29d85d0e213b28c7f8f9463a0614eb)
            check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
        return typing.cast(_ros_cdk_ram_c2c603f0.ManagedPolicy, jsii.invoke(self, "grantReadWrite", [identity]))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionURI: Connection uri.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionUri"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The instance id of created mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceStatus: Status of mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetName")
    def attr_replica_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaSetName: Name of replica set.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaSetName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f664cc501126626dc53822e06f402646cf9b61f27a4a09961abd8024d0c24bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b00ec62bf58b3e2615df2acb0c5feb7ac93738e272c0938f424b77b45db95fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c590df9482b5fc2a91b54020e504624fbcc6a90187569b4053a4de8a3b5e61d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "account_password": "accountPassword",
        "audit_policy_options": "auditPolicyOptions",
        "auto_renew": "autoRenew",
        "backup_id": "backupId",
        "backup_policy_options": "backupPolicyOptions",
        "business_info": "businessInfo",
        "charge_type": "chargeType",
        "cluster_id": "clusterId",
        "coupon_no": "couponNo",
        "database_names": "databaseNames",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_release_protection": "dbInstanceReleaseProtection",
        "encrypted": "encrypted",
        "encryption_key": "encryptionKey",
        "engine_version": "engineVersion",
        "hidden_zone_id": "hiddenZoneId",
        "period": "period",
        "private_connections": "privateConnections",
        "provisioned_iops": "provisionedIops",
        "readonly_replicas": "readonlyReplicas",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "restore_time": "restoreTime",
        "restore_type": "restoreType",
        "secondary_zone_id": "secondaryZoneId",
        "security_group_id": "securityGroupId",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "src_region": "srcRegion",
        "ssl_options": "sslOptions",
        "storage_engine": "storageEngine",
        "storage_type": "storageType",
        "tags": "tags",
        "tde_status": "tdeStatus",
        "vpc_id": "vpcId",
        "vpc_password_free": "vpcPasswordFree",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audit_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.AuditPolicyOptionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.BackupPolicyOptionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        business_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        coupon_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        database_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_release_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.PrivateConnectionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        readonly_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        src_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.SSLOptionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance

        :param db_instance_class: Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        :param db_instance_storage: Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        :param account_password: Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        :param audit_policy_options: Property auditPolicyOptions: Audit policy options.
        :param auto_renew: Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        :param backup_id: Property backupId: Specific backup set Id.
        :param backup_policy_options: Property backupPolicyOptions: Backup policy options.
        :param business_info: Property businessInfo: The business information. It is an additional parameter.
        :param charge_type: Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
        :param cluster_id: Property clusterId: The dedicated cluster ID.
        :param coupon_no: Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        :param database_names: Property databaseNames: The name of the database.
        :param db_instance_description: Property dbInstanceDescription: Description of created database instance.
        :param db_instance_release_protection: Property dbInstanceReleaseProtection: Enables instance release protection. Values: - true: Enabled. - false: Not enabled.
        :param encrypted: Property encrypted: Whether to enable cloud disk encryption.
        :param encryption_key: Property encryptionKey: Custom key ID.
        :param engine_version: Property engineVersion: Database instance version.
        :param hidden_zone_id: Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment. When the value of the EngineVersion is 4.4 and later, this parameter is available and required. The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        :param period: Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        :param private_connections: Property privateConnections: Connection configs of private connection.
        :param provisioned_iops: Property provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
        :param readonly_replicas: Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        :param replication_factor: Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param restore_time: Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        :param restore_type: Property restoreType: Backup recovery instance. - 0: Restore instance to specified backup set - 1: Restore instance to specified point in time - 2: Restore released instance to specified backup set - 3: Restore instance to specified backup set
        :param secondary_zone_id: Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment. When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        :param security_group_id: Property securityGroupId: The ID of the ECS security group. Each ApsaraDB for MongoDB instance can be added in up to 10 security group. You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
        :param security_ip_array: Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
        :param src_db_instance_id: Property srcDbInstanceId: Create an instance of the backup set based on an instance.
        :param src_region: Property srcRegion: The source instance region. .. epigraph:: - When the backup recovery type is 2 or 3, this parameter is required.
        :param ssl_options: Property sslOptions: SSL options.
        :param storage_engine: Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
        :param storage_type: Property storageType: The storage type of the instance. Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty. Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param tde_status: Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values: true: enable TDE false: disable TDE (default) Note: You cannot disable TDE after it is enabled.
        :param vpc_id: Property vpcId: The VPC id to create mongodb instance.
        :param vpc_password_free: Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to: - true: enables password free. - false: disables password free.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create mongodb instance.
        :param zone_id: Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__997f098ba7b4e043270995db9795a2ee826e378ec52531260f3a599a770c5fa6)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument audit_policy_options", value=audit_policy_options, expected_type=type_hints["audit_policy_options"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument backup_id", value=backup_id, expected_type=type_hints["backup_id"])
            check_type(argname="argument backup_policy_options", value=backup_policy_options, expected_type=type_hints["backup_policy_options"])
            check_type(argname="argument business_info", value=business_info, expected_type=type_hints["business_info"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument coupon_no", value=coupon_no, expected_type=type_hints["coupon_no"])
            check_type(argname="argument database_names", value=database_names, expected_type=type_hints["database_names"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_release_protection", value=db_instance_release_protection, expected_type=type_hints["db_instance_release_protection"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument hidden_zone_id", value=hidden_zone_id, expected_type=type_hints["hidden_zone_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument private_connections", value=private_connections, expected_type=type_hints["private_connections"])
            check_type(argname="argument provisioned_iops", value=provisioned_iops, expected_type=type_hints["provisioned_iops"])
            check_type(argname="argument readonly_replicas", value=readonly_replicas, expected_type=type_hints["readonly_replicas"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_ip_array", value=security_ip_array, expected_type=type_hints["security_ip_array"])
            check_type(argname="argument src_db_instance_id", value=src_db_instance_id, expected_type=type_hints["src_db_instance_id"])
            check_type(argname="argument src_region", value=src_region, expected_type=type_hints["src_region"])
            check_type(argname="argument ssl_options", value=ssl_options, expected_type=type_hints["ssl_options"])
            check_type(argname="argument storage_engine", value=storage_engine, expected_type=type_hints["storage_engine"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tde_status", value=tde_status, expected_type=type_hints["tde_status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vpc_password_free", value=vpc_password_free, expected_type=type_hints["vpc_password_free"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if audit_policy_options is not None:
            self._values["audit_policy_options"] = audit_policy_options
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_id is not None:
            self._values["backup_id"] = backup_id
        if backup_policy_options is not None:
            self._values["backup_policy_options"] = backup_policy_options
        if business_info is not None:
            self._values["business_info"] = business_info
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if coupon_no is not None:
            self._values["coupon_no"] = coupon_no
        if database_names is not None:
            self._values["database_names"] = database_names
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_release_protection is not None:
            self._values["db_instance_release_protection"] = db_instance_release_protection
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if hidden_zone_id is not None:
            self._values["hidden_zone_id"] = hidden_zone_id
        if period is not None:
            self._values["period"] = period
        if private_connections is not None:
            self._values["private_connections"] = private_connections
        if provisioned_iops is not None:
            self._values["provisioned_iops"] = provisioned_iops
        if readonly_replicas is not None:
            self._values["readonly_replicas"] = readonly_replicas
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if restore_type is not None:
            self._values["restore_type"] = restore_type
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if src_region is not None:
            self._values["src_region"] = src_region
        if ssl_options is not None:
            self._values["ssl_options"] = ssl_options
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if tags is not None:
            self._values["tags"] = tags
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.'''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceStorage: Database instance storage size.

        MongoDB is [5,3000], increased every 10 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.'''
        result = self._values.get("account_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audit_policy_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.AuditPolicyOptionsProperty"]]:
        '''Property auditPolicyOptions: Audit policy options.'''
        result = self._values.get("audit_policy_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.AuditPolicyOptionsProperty"]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Indicates whether automatic renewal is enabled for the instance.

        Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupId: Specific backup set Id.'''
        result = self._values.get("backup_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyOptionsProperty"]]:
        '''Property backupPolicyOptions: Backup policy options.'''
        result = self._values.get("backup_policy_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyOptionsProperty"]], result)

    @builtins.property
    def business_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property businessInfo: The business information.

        It is an additional parameter.
        '''
        result = self._values.get("business_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: The dedicated cluster ID.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def coupon_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property couponNo: The coupon code.

        Default value:youhuiquan_promotion_option_id_for_blank.
        '''
        result = self._values.get("coupon_no")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def database_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property databaseNames: The name of the database.'''
        result = self._values.get("database_names")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_release_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceReleaseProtection: Enables instance release protection.

        Values:

        - true: Enabled.
        - false: Not enabled.
        '''
        result = self._values.get("db_instance_release_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encrypted: Whether to enable cloud disk encryption.'''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKey: Custom key ID.'''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: Database instance version.'''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hidden_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.

        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        '''
        result = self._values.get("hidden_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PrivateConnectionsProperty"]]:
        '''Property privateConnections: Connection configs of private connection.'''
        result = self._values.get("private_connections")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PrivateConnectionsProperty"]], result)

    @builtins.property
    def provisioned_iops(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property provisionedIops: Provisioned IOPS.

        The value range is 0 to 50000.
        '''
        result = self._values.get("provisioned_iops")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def readonly_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.'''
        result = self._values.get("readonly_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property replicationFactor: The number of nodes in the replica set.

        Allowed values: [3, 5, 7], default to 3.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreTime: The time to restore the cloned instance to.

        The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreType: Backup recovery instance.

        - 0: Restore instance to specified backup set
        - 1: Restore instance to specified point in time
        - 2: Restore released instance to specified backup set
        - 3: Restore instance to specified backup set
        '''
        result = self._values.get("restore_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.

        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        '''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the ECS security group.

        Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
        You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_array(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpArray: Security ips to add or remove.

        Update to this property will cover the current security ips.
        '''
        result = self._values.get("security_ip_array")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def src_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property srcDbInstanceId: Create an instance of the backup set based on an instance.'''
        result = self._values.get("src_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def src_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property srcRegion: The source instance region.

        .. epigraph::

           - When the backup recovery type is 2 or 3, this parameter is required.
        '''
        result = self._values.get("src_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.SSLOptionsProperty"]]:
        '''Property sslOptions: SSL options.'''
        result = self._values.get("ssl_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.SSLOptionsProperty"]], result)

    @builtins.property
    def storage_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.'''
        result = self._values.get("storage_engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageType: The storage type of the instance.

        Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).

        Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: You cannot disable TDE after it is enabled.
        '''
        result = self._values.get("tde_status")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id to create mongodb instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.

        If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        result = self._values.get("vpc_password_free")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch Id to create mongodb instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: On which zone to create the instance.

        If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPrivateSrvNetworkAddress)
class PrivateSrvNetworkAddress(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.PrivateSrvNetworkAddress",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::PrivateSrvNetworkAddress``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrivateSrvNetworkAddress``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PrivateSrvNetworkAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa649bcc28a92d31ef082869d82a586f8db1aad1e2127dd43d657d41e5fb516d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPrivateSrvConnectionStringUri")
    def attr_private_srv_connection_string_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateSrvConnectionStringUri"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrivateSrvNetworkAddressProps":
        return typing.cast("PrivateSrvNetworkAddressProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10cacdbec36c2934388af73f09cd5a72ebaaa119e2b27f2d10045f33e7a464b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b4b9d5b61cdec9dbdd7ced1351c246833f3e353772f656a576c1c2fa40022e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f62607d1b7a7072419444b400840f2d7620287680354fc5c57175eca931ab966)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.PrivateSrvNetworkAddressProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId"},
)
class PrivateSrvNetworkAddressProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``PrivateSrvNetworkAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress

        :param db_instance_id: Property dbInstanceId: The instance ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4453feb4e91021633613dd5f0a9e668135b0d71fd20475c2ab27a0204d8c8ea0)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The instance ID.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrivateSrvNetworkAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAuditPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosAuditPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::AuditPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AuditPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAuditPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad596c518cdc79568ebfc89f3f22169af2827c07e81b45df2d4425d0aca24b33)
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
            type_hints = typing.get_type_hints(_typecheckingstub__80d4b9155a204ad7b952ca312150d2a665bbecd15de4e37354073c3b6bb9f094)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuditStatus")
    def attr_audit_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuditStatus: Audit state, Valid values: ``enable``, ``disabled``.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuditStatus"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="auditStatus")
    def audit_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: auditStatus: Audit state, Valid values: ``enable``, ``disabled``.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "auditStatus"))

    @audit_status.setter
    def audit_status(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52425bdc2f8e8267a7f3770b49f82a1b87335d03b2b41473b8783b797357652f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "auditStatus", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Database Instance Id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5da1be1ad5c40888e430d093a74c0b4cc8f35cd4a8be1542a29ff19f5f0e0c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88c667207753d783cdce7fc45fd481b47fe0e64208f2ef5b940e8973b9d22794)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="storagePeriod")
    def storage_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storagePeriod"))

    @storage_period.setter
    def storage_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45adcf731050d2603d59d309638b6b61ced98b2c33db3e1e3ef743c2acc15cd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storagePeriod", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosAuditPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "audit_status": "auditStatus",
        "db_instance_id": "dbInstanceId",
        "storage_period": "storagePeriod",
    },
)
class RosAuditPolicyProps:
    def __init__(
        self,
        *,
        audit_status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAuditPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy

        :param audit_status: 
        :param db_instance_id: 
        :param storage_period: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e37286f634992a9b02e8aadcff79d4267910c0720a02e6c9345b690408374359)
            check_type(argname="argument audit_status", value=audit_status, expected_type=type_hints["audit_status"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument storage_period", value=storage_period, expected_type=type_hints["storage_period"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "audit_status": audit_status,
            "db_instance_id": db_instance_id,
        }
        if storage_period is not None:
            self._values["storage_period"] = storage_period

    @builtins.property
    def audit_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: auditStatus: Audit state, Valid values: ``enable``, ``disabled``.
        '''
        result = self._values.get("audit_status")
        assert result is not None, "Required property 'audit_status' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Database Instance Id.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
        '''
        result = self._values.get("storage_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAuditPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGlobalSecurityIPGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::GlobalSecurityIPGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GlobalSecurityIPGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGlobalSecurityIPGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5d7cc2c92f7e867e936b71cff25cc2954c29d6f838e9b31f008bf9b51deb3a3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__55895efd3e75e07b97b165e274391f763146c5a0bad8b4ff5a9601a1b99106c7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalIgName")
    def attr_global_ig_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GlobalIgName: The name of the IP whitelist template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGlobalIgName"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GlobalSecurityGroupId: The ID of the IP whitelist template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGlobalSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityIpList")
    def attr_global_security_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GlobalSecurityIpList: The IP address in the whitelist template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGlobalSecurityIpList"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0e0d6035c25c5912c248682b3584275b844b266c4e3c0ee753245660b5dc8f2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="globalIgName")
    def global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: globalIgName: The name of the IP whitelist template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "globalIgName"))

    @global_ig_name.setter
    def global_ig_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d7aaf3753ef1b68912f4376b868c837539079332c8a055b1ce45f8e647fa0e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "globalIgName", value)

    @builtins.property
    @jsii.member(jsii_name="globalSecurityIpList")
    def global_security_ip_list(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: globalSecurityIpList: The IP address in the whitelist template.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "globalSecurityIpList"))

    @global_security_ip_list.setter
    def global_security_ip_list(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3be0cc01c7d2da0e767ac6a7046110c2364a31695405c6ebb1328a74e536504)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "globalSecurityIpList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "global_ig_name": "globalIgName",
        "global_security_ip_list": "globalSecurityIpList",
    },
)
class RosGlobalSecurityIPGroupProps:
    def __init__(
        self,
        *,
        global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        global_security_ip_list: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosGlobalSecurityIPGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup

        :param global_ig_name: 
        :param global_security_ip_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b0e133493cfe111aa4cdd40e8858c41912ea0706e6c047b0ee2b5b021b7d239)
            check_type(argname="argument global_ig_name", value=global_ig_name, expected_type=type_hints["global_ig_name"])
            check_type(argname="argument global_security_ip_list", value=global_security_ip_list, expected_type=type_hints["global_security_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "global_ig_name": global_ig_name,
            "global_security_ip_list": global_security_ip_list,
        }

    @builtins.property
    def global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: globalIgName: The name of the IP whitelist template.
        '''
        result = self._values.get("global_ig_name")
        assert result is not None, "Required property 'global_ig_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def global_security_ip_list(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: globalSecurityIpList: The IP address in the whitelist template.
        '''
        result = self._values.get("global_security_ip_list")
        assert result is not None, "Required property 'global_security_ip_list' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGlobalSecurityIPGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fb46f7a2ed6587b62b5bb59684e31984c29d56aa381a5c106180db5738f00f3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__65583d7b0d37b9c641fed9ea78cc819b34a206c14dd056fe5278a378f76c65bb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionURI: Connection uri.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionUri"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Order Id of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetName")
    def attr_replica_set_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaSetName: Name of replica set
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaSetName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a83d56c4211b4cb7e081897701d4d9379d4620b1bcb4725b951ebee5c783506)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceStorage"))

    @db_instance_storage.setter
    def db_instance_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11e10625104f7af645b1aeaf8f10829f6ac6e4d0c91e2186213037cc1f410c63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9187c3c36e6903fe9f7c23699eb40d6be1a03d851e4f50e219bd1608f827c5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fc90add06efadcda8d93b3d22d64a98b31cec821a4d623a8610d59920cf928b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="auditPolicyOptions")
    def audit_policy_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.AuditPolicyOptionsProperty"]]:
        '''
        :Property: auditPolicyOptions: Audit policy options.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.AuditPolicyOptionsProperty"]], jsii.get(self, "auditPolicyOptions"))

    @audit_policy_options.setter
    def audit_policy_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.AuditPolicyOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c9688265b3177d880c4132d4f6b36545629900ab7636e10d430162f5de6a2f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "auditPolicyOptions", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af60bcdd4c6df558ba6f1504cc762e9080e9132d97283f5be08b51dd91f13357)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="backupId")
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupId: Specific backup set Id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupId"))

    @backup_id.setter
    def backup_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2409a270b1275912cba3365974ed483b2b5c78149a8037a4e9ee6f7589255fdd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupId", value)

    @builtins.property
    @jsii.member(jsii_name="backupPolicyOptions")
    def backup_policy_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyOptionsProperty"]]:
        '''
        :Property: backupPolicyOptions: Backup policy options.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyOptionsProperty"]], jsii.get(self, "backupPolicyOptions"))

    @backup_policy_options.setter
    def backup_policy_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__504d2ffa095ff214ebafe4ae9ed6e03f38c4accc8bb4c302d29c701d21cde2b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPolicyOptions", value)

    @builtins.property
    @jsii.member(jsii_name="businessInfo")
    def business_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: businessInfo: The business information. It is an additional parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "businessInfo"))

    @business_info.setter
    def business_info(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80c4b88a0ee90dfc9c7e4e01b1937843d9411098a2fc18cc131c1a91c0100746)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "businessInfo", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cee2f520095e89429435c7ee1270f53311b17feaa4afc6a0094f8e4e7ccd2200)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The dedicated cluster ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24794a77eb7d37d6ed7f0f3aee7dcf4541fd05185d0a4dd722cfcab38da33880)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="couponNo")
    def coupon_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "couponNo"))

    @coupon_no.setter
    def coupon_no(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40651a677e6dd423144b8b806dd94bfad7e6b6edcd9b072022cba1328f112834)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "couponNo", value)

    @builtins.property
    @jsii.member(jsii_name="databaseNames")
    def database_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: databaseNames: The name of the database.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "databaseNames"))

    @database_names.setter
    def database_names(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c86beca76ac13a64c68998452e284b6ffb3d184b97ee0b74151994eeba91701)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databaseNames", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7efe3c0c2c111969a82610a3ffa00d48a09bdcaf7d47130a4701d083c0ab56ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceReleaseProtection")
    def db_instance_release_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceReleaseProtection: Enables instance release protection. Values:

        - true: Enabled.
        - false: Not enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceReleaseProtection"))

    @db_instance_release_protection.setter
    def db_instance_release_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7f580dc2ad0f0ad33f4047e29d9c0840156c16a5afb3164f5703f742342b7f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceReleaseProtection", value)

    @builtins.property
    @jsii.member(jsii_name="encrypted")
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encrypted: Whether to enable cloud disk encryption.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encrypted"))

    @encrypted.setter
    def encrypted(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb0f62d2f16881d4ba23c0367274895a72864d99e7957bc7b0e683d0bdd3f9d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encrypted", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: Custom key ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aac38627518f4cb4f50680d6c1d473a4f547888968c89d2895071ed3987ffaa3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Database instance version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43df8e2b1b34356279a2d5fb23502db37a9024c677962588a489386b8996d37a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="hiddenZoneId")
    def hidden_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hiddenZoneId"))

    @hidden_zone_id.setter
    def hidden_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__517f00165c0f1ec4b1a17ef036a37856720ce3f6594ee7d0d66172359c8d4a47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hiddenZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51122949257c6328514fe445a4b4b27d492df3d77f744b24eb431163c4d0e7c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="privateConnections")
    def private_connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PrivateConnectionsProperty"]]:
        '''
        :Property: privateConnections: Connection configs of private connection.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PrivateConnectionsProperty"]], jsii.get(self, "privateConnections"))

    @private_connections.setter
    def private_connections(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PrivateConnectionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d104831cea4921888c3c3150ec30c70927947975bb38e567cd4b8eb7212560f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateConnections", value)

    @builtins.property
    @jsii.member(jsii_name="provisionedIops")
    def provisioned_iops(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "provisionedIops"))

    @provisioned_iops.setter
    def provisioned_iops(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5d89557042302c6ed9a38cb2a0f42145455fa11a7ee796cf276e04d1fd46ecf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "provisionedIops", value)

    @builtins.property
    @jsii.member(jsii_name="readonlyReplicas")
    def readonly_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "readonlyReplicas"))

    @readonly_replicas.setter
    def readonly_replicas(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0d1669964918408adfe24f5114348be9b0f6520d93dc2016128d42f512086d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "readonlyReplicas", value)

    @builtins.property
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "replicationFactor"))

    @replication_factor.setter
    def replication_factor(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fa799ac16749622d11576f2a55e2853fe06f91c69ffda103b4832c8f60f48bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationFactor", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f8a9ff193eb7dedfd4905d1fc9187addac03c2a2c4892d49bf200a466bbdaa91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="restoreTime")
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreTime"))

    @restore_time.setter
    def restore_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d5c0c427959f625a8ed7d62467420426f08cc36a453966cbec4f1f0e1f8cb72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreTime", value)

    @builtins.property
    @jsii.member(jsii_name="restoreType")
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreType: Backup recovery instance.

        - 0: Restore instance to specified backup set
        - 1: Restore instance to specified point in time
        - 2: Restore released instance to specified backup set
        - 3: Restore instance to specified backup set
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreType"))

    @restore_type.setter
    def restore_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72cbaa1238941a2e79b55306289767aeaa77b122a6bda1dc1d2fc52c78989b9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreType", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryZoneId")
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondaryZoneId"))

    @secondary_zone_id.setter
    def secondary_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2a112329220dbb7deb921983828fbe6c14849a1e7f37017c571c3487d113299)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security group.
        Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
        You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aadb26883a9ab234385764e39d9148149063709452ded4d19283dc02da920db8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpArray")
    def security_ip_array(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpArray"))

    @security_ip_array.setter
    def security_ip_array(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8db0f067f102de0433ad40e51a1f4ce6f9e5d2d5aec3edfe24348b7c0afa1b03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpArray", value)

    @builtins.property
    @jsii.member(jsii_name="srcDbInstanceId")
    def src_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "srcDbInstanceId"))

    @src_db_instance_id.setter
    def src_db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7660c1e304a02dd56d313461f1c20f0fa426619a546754b4a92ee6c1e3df72e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "srcDbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="srcRegion")
    def src_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        srcRegion: The source instance region.
        .. epigraph::

        - When the backup recovery type is 2 or 3, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "srcRegion"))

    @src_region.setter
    def src_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8f46683206d2b92ea8973c30701219b2a4831a51e207cd7f43207d35670314c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "srcRegion", value)

    @builtins.property
    @jsii.member(jsii_name="sslOptions")
    def ssl_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.SSLOptionsProperty"]]:
        '''
        :Property: sslOptions: SSL options.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.SSLOptionsProperty"]], jsii.get(self, "sslOptions"))

    @ssl_options.setter
    def ssl_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.SSLOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afc3d32806ed6453f9092026de107435f3a4b176523593ebe2a27cac2f0fc3a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslOptions", value)

    @builtins.property
    @jsii.member(jsii_name="storageEngine")
    def storage_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageEngine"))

    @storage_engine.setter
    def storage_engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1f4c8d0876e16970c9c7ba7b32d3c0ed36259368062a71bb230e672c2d20b22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageEngine", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageType: The storage type of the instance.
        Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9e0d56b98eff5ddc587d13b80b8e206c3b9f4323483a2ef08575965ac5a360c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d48453cbb347b2910f7ab49a2ecf372e71507c9ca1559225221ed391418f1f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="tdeStatus")
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: You cannot disable TDE after it is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tdeStatus"))

    @tde_status.setter
    def tde_status(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__845ee40ed52c6928d632bd480d3f353d6278275bb733dd16ebec3943c447578f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tdeStatus", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create mongodb instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65ed4456c4751e8aff646737ba94468a8bbc2e8e8e66c858025ba5a14fe2d5b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcPasswordFree")
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcPasswordFree"))

    @vpc_password_free.setter
    def vpc_password_free(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__838b8a699d36224ee9e930964e0329a50be94138cca0cdf04fe140c25057257e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36b79541dad5b6b56eb582d2ced3316b72629b2922060b450e9581ba5926f260)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f4d7d985efede3f92caa9f73942ecf651e70b2b5c7af03eb710f5197f700c82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosInstance.AuditPolicyOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "audit_status": "auditStatus",
            "audit_log_switch_source": "auditLogSwitchSource",
            "service_type": "serviceType",
            "storage_period": "storagePeriod",
        },
    )
    class AuditPolicyOptionsProperty:
        def __init__(
            self,
            *,
            audit_status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            audit_log_switch_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            storage_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param audit_status: 
            :param audit_log_switch_source: 
            :param service_type: 
            :param storage_period: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0c6cd9272569af9d90400f7c6911e2c5107d8cd4be99f8f8743acf303e6c2028)
                check_type(argname="argument audit_status", value=audit_status, expected_type=type_hints["audit_status"])
                check_type(argname="argument audit_log_switch_source", value=audit_log_switch_source, expected_type=type_hints["audit_log_switch_source"])
                check_type(argname="argument service_type", value=service_type, expected_type=type_hints["service_type"])
                check_type(argname="argument storage_period", value=storage_period, expected_type=type_hints["storage_period"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "audit_status": audit_status,
            }
            if audit_log_switch_source is not None:
                self._values["audit_log_switch_source"] = audit_log_switch_source
            if service_type is not None:
                self._values["service_type"] = service_type
            if storage_period is not None:
                self._values["storage_period"] = storage_period

        @builtins.property
        def audit_status(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            auditStatus: Audit log status, values:

            - enable: Audit logging is enabled.
            - disabled: Audit logging is disabled.
            '''
            result = self._values.get("audit_status")
            assert result is not None, "Required property 'audit_status' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def audit_log_switch_source(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: auditLogSwitchSource: The request source for the audit log is set to Console.
            '''
            result = self._values.get("audit_log_switch_source")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            serviceType: Audit log version type.

            - Trial: Free trial version.
            - Standard: Full version.
            '''
            result = self._values.get("service_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def storage_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: storagePeriod: The retention period of audit logs. Unit: days. Valid values: 1 to 365. Default is 30 days.
            '''
            result = self._values.get("storage_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuditPolicyOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosInstance.BackupPolicyOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "backup_interval": "backupInterval",
            "backup_retention_period": "backupRetentionPeriod",
            "backup_retention_policy_on_cluster_deletion": "backupRetentionPolicyOnClusterDeletion",
            "cross_backup_period": "crossBackupPeriod",
            "cross_backup_type": "crossBackupType",
            "cross_log_retention_type": "crossLogRetentionType",
            "cross_log_retention_value": "crossLogRetentionValue",
            "cross_retention_type": "crossRetentionType",
            "cross_retention_value": "crossRetentionValue",
            "dest_region": "destRegion",
            "enable_backup_log": "enableBackupLog",
            "enable_cross_log_backup": "enableCrossLogBackup",
            "high_frequency_backup_retention": "highFrequencyBackupRetention",
            "instance_type": "instanceType",
            "log_backup_retention_period": "logBackupRetentionPeriod",
            "preferred_backup_period": "preferredBackupPeriod",
            "preferred_backup_time": "preferredBackupTime",
            "preserve_one_each_hour": "preserveOneEachHour",
            "snapshot_backup_type": "snapshotBackupType",
            "src_region": "srcRegion",
        },
    )
    class BackupPolicyOptionsProperty:
        def __init__(
            self,
            *,
            backup_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_backup_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_log_retention_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_log_retention_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_retention_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_retention_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dest_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_backup_log: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_cross_log_backup: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            high_frequency_backup_retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            preferred_backup_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            preserve_one_each_hour: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            snapshot_backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            src_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param backup_interval: 
            :param backup_retention_period: 
            :param backup_retention_policy_on_cluster_deletion: 
            :param cross_backup_period: 
            :param cross_backup_type: 
            :param cross_log_retention_type: 
            :param cross_log_retention_value: 
            :param cross_retention_type: 
            :param cross_retention_value: 
            :param dest_region: 
            :param enable_backup_log: 
            :param enable_cross_log_backup: 
            :param high_frequency_backup_retention: 
            :param instance_type: 
            :param log_backup_retention_period: 
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param preserve_one_each_hour: 
            :param snapshot_backup_type: 
            :param src_region: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6664d2206754e4df0621b81f266b5e067ef2f0188ebccd30aa19162408fefeef)
                check_type(argname="argument backup_interval", value=backup_interval, expected_type=type_hints["backup_interval"])
                check_type(argname="argument backup_retention_period", value=backup_retention_period, expected_type=type_hints["backup_retention_period"])
                check_type(argname="argument backup_retention_policy_on_cluster_deletion", value=backup_retention_policy_on_cluster_deletion, expected_type=type_hints["backup_retention_policy_on_cluster_deletion"])
                check_type(argname="argument cross_backup_period", value=cross_backup_period, expected_type=type_hints["cross_backup_period"])
                check_type(argname="argument cross_backup_type", value=cross_backup_type, expected_type=type_hints["cross_backup_type"])
                check_type(argname="argument cross_log_retention_type", value=cross_log_retention_type, expected_type=type_hints["cross_log_retention_type"])
                check_type(argname="argument cross_log_retention_value", value=cross_log_retention_value, expected_type=type_hints["cross_log_retention_value"])
                check_type(argname="argument cross_retention_type", value=cross_retention_type, expected_type=type_hints["cross_retention_type"])
                check_type(argname="argument cross_retention_value", value=cross_retention_value, expected_type=type_hints["cross_retention_value"])
                check_type(argname="argument dest_region", value=dest_region, expected_type=type_hints["dest_region"])
                check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
                check_type(argname="argument enable_cross_log_backup", value=enable_cross_log_backup, expected_type=type_hints["enable_cross_log_backup"])
                check_type(argname="argument high_frequency_backup_retention", value=high_frequency_backup_retention, expected_type=type_hints["high_frequency_backup_retention"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument log_backup_retention_period", value=log_backup_retention_period, expected_type=type_hints["log_backup_retention_period"])
                check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
                check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
                check_type(argname="argument preserve_one_each_hour", value=preserve_one_each_hour, expected_type=type_hints["preserve_one_each_hour"])
                check_type(argname="argument snapshot_backup_type", value=snapshot_backup_type, expected_type=type_hints["snapshot_backup_type"])
                check_type(argname="argument src_region", value=src_region, expected_type=type_hints["src_region"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if backup_interval is not None:
                self._values["backup_interval"] = backup_interval
            if backup_retention_period is not None:
                self._values["backup_retention_period"] = backup_retention_period
            if backup_retention_policy_on_cluster_deletion is not None:
                self._values["backup_retention_policy_on_cluster_deletion"] = backup_retention_policy_on_cluster_deletion
            if cross_backup_period is not None:
                self._values["cross_backup_period"] = cross_backup_period
            if cross_backup_type is not None:
                self._values["cross_backup_type"] = cross_backup_type
            if cross_log_retention_type is not None:
                self._values["cross_log_retention_type"] = cross_log_retention_type
            if cross_log_retention_value is not None:
                self._values["cross_log_retention_value"] = cross_log_retention_value
            if cross_retention_type is not None:
                self._values["cross_retention_type"] = cross_retention_type
            if cross_retention_value is not None:
                self._values["cross_retention_value"] = cross_retention_value
            if dest_region is not None:
                self._values["dest_region"] = dest_region
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log
            if enable_cross_log_backup is not None:
                self._values["enable_cross_log_backup"] = enable_cross_log_backup
            if high_frequency_backup_retention is not None:
                self._values["high_frequency_backup_retention"] = high_frequency_backup_retention
            if instance_type is not None:
                self._values["instance_type"] = instance_type
            if log_backup_retention_period is not None:
                self._values["log_backup_retention_period"] = log_backup_retention_period
            if preferred_backup_period is not None:
                self._values["preferred_backup_period"] = preferred_backup_period
            if preferred_backup_time is not None:
                self._values["preferred_backup_time"] = preferred_backup_time
            if preserve_one_each_hour is not None:
                self._values["preserve_one_each_hour"] = preserve_one_each_hour
            if snapshot_backup_type is not None:
                self._values["snapshot_backup_type"] = snapshot_backup_type
            if src_region is not None:
                self._values["src_region"] = src_region

        @builtins.property
        def backup_interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            backupInterval: High-frequency backup frequency, with the following values:

            - -1: High-frequency backup not enabled.
            - 30: Every 30 minutes.
            - 60: Every 1 hour.
            - 120: Every 2 hours.
            - 180: Every 3 hours.
            - 240: Every 4 hours.
            - 360: Every 6 hours.
            - 480: Every 8 hours.
            - 720: Every 12 hours.
            '''
            result = self._values.get("backup_interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def backup_retention_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backupRetentionPeriod: Retention period of backup data. Unit: days.
            '''
            result = self._values.get("backup_retention_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def backup_retention_policy_on_cluster_deletion(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            backupRetentionPolicyOnClusterDeletion: Backup Retention Policy. Values:

            - 0: Immediately delete all backup sets of the instance upon release.
            - 1: Automatically back up the instance upon release, and retain the backup set long-term.
            - 2: Automatically back up the instance upon release, and retain all backup sets of the cluster long-term.
            '''
            result = self._values.get("backup_retention_policy_on_cluster_deletion")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_backup_period(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: crossBackupPeriod: Off-site backup cycle, values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.When passing multiple values, please use commas (,).
            '''
            result = self._values.get("cross_backup_period")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_backup_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            crossBackupType: Off-site backup operation policy:

            - update: Modify the off-site backup policy
            - delete: Delete the off-site backup policy
            '''
            result = self._values.get("cross_backup_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_log_retention_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            crossLogRetentionType: Cross-region backup log retention type:

            - delay: retain for a period of time
            - never: does not expire
            '''
            result = self._values.get("cross_log_retention_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_log_retention_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: crossLogRetentionValue: Cross-region backup log retention value.
            '''
            result = self._values.get("cross_log_retention_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_retention_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            crossRetentionType: Off-site backup retention type:

            - delay: retain for a period of time
            - never: does not expire
            '''
            result = self._values.get("cross_retention_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_retention_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: crossRetentionValue: Off-site backup retention value.
            '''
            result = self._values.get("cross_retention_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dest_region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: destRegion: Destination region of off-site backup.
            '''
            result = self._values.get("dest_region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_backup_log(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableBackupLog: Whether to enable log backup: 1: Enabled; 0: Not enabled.
            '''
            result = self._values.get("enable_backup_log")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_cross_log_backup(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableCrossLogBackup: Enable cross-region backup log. Values:

            - 1: Enabled (Requires 1 for sharded clusters; requires 1 for replica sets to support point-in-time recovery)
            - 0: Disabled
            '''
            result = self._values.get("enable_cross_log_backup")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def high_frequency_backup_retention(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: highFrequencyBackupRetention: High-frequency backup retention period, unit: days.
            '''
            result = self._values.get("high_frequency_backup_retention")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceType: Instance type:

            - replica: replica set
            - sharding: sharded cluster
            '''
            result = self._values.get("instance_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def log_backup_retention_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logBackupRetentionPeriod: Retention period of log backup data. Unit: days.
            '''
            result = self._values.get("log_backup_retention_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def preferred_backup_period(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: preferredBackupPeriod: Backup cycle, values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. When passing multiple values, please use commas (,).
            '''
            result = self._values.get("preferred_backup_period")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def preferred_backup_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: preferredBackupTime: Preferred backup time.
            '''
            result = self._values.get("preferred_backup_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def preserve_one_each_hour(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: preserveOneEachHour: Whether to preserve one backup per hour.
            '''
            result = self._values.get("preserve_one_each_hour")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def snapshot_backup_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            snapshotBackupType: Snapshot backup type, values:

            - Flash: Second-level backup.
            - Standard: Regular backup (default).
            '''
            result = self._values.get("snapshot_backup_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def src_region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: srcRegion: Source region of off-site backup.
            '''
            result = self._values.get("src_region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupPolicyOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosInstance.PrivateConnectionsProperty",
        jsii_struct_bases=[],
        name_mapping={"replica_connections": "replicaConnections"},
    )
    class PrivateConnectionsProperty:
        def __init__(
            self,
            *,
            replica_connections: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.ReplicaConnectionsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param replica_connections: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a62c736a911cdefbc88c385f6c079dcfbcfc01a1d551ca2b219f8c0e30c4d9cd)
                check_type(argname="argument replica_connections", value=replica_connections, expected_type=type_hints["replica_connections"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "replica_connections": replica_connections,
            }

        @builtins.property
        def replica_connections(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ReplicaConnectionsProperty"]]]:
            '''
            :Property: replicaConnections: Replica private connections
            '''
            result = self._values.get("replica_connections")
            assert result is not None, "Required property 'replica_connections' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ReplicaConnectionsProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrivateConnectionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosInstance.ReplicaConnectionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_string": "connectionString",
            "connection_port": "connectionPort",
        },
    )
    class ReplicaConnectionsProperty:
        def __init__(
            self,
            *,
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            connection_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param connection_string: 
            :param connection_port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__771b7428d2542b2231e0ef2e265d23815f85a5b2fee1ffa493e7caf035963093)
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_string": connection_string,
            }
            if connection_port is not None:
                self._values["connection_port"] = connection_port

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the connection string.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for MongoDB instance. Valid values: 1000 to 65535.
            '''
            result = self._values.get("connection_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReplicaConnectionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosInstance.SSLOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ssl_action": "sslAction",
            "force_encryption": "forceEncryption",
            "switch_mode": "switchMode",
        },
    )
    class SSLOptionsProperty:
        def __init__(
            self,
            *,
            ssl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            force_encryption: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            switch_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ssl_action: 
            :param force_encryption: 
            :param switch_mode: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a9c383e2f17b6303347ba3421ae8a6b31be04ac4b75e361c2a6a8614a57197fd)
                check_type(argname="argument ssl_action", value=ssl_action, expected_type=type_hints["ssl_action"])
                check_type(argname="argument force_encryption", value=force_encryption, expected_type=type_hints["force_encryption"])
                check_type(argname="argument switch_mode", value=switch_mode, expected_type=type_hints["switch_mode"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "ssl_action": ssl_action,
            }
            if force_encryption is not None:
                self._values["force_encryption"] = force_encryption
            if switch_mode is not None:
                self._values["switch_mode"] = switch_mode

        @builtins.property
        def ssl_action(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sslAction: SSL action.
            '''
            result = self._values.get("ssl_action")
            assert result is not None, "Required property 'ssl_action' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def force_encryption(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: forceEncryption: Whether to force SSL encryption on the connection: 1: Force SSL encryption; 0: Do not force SSL encryption.
            '''
            result = self._values.get("force_encryption")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def switch_mode(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            switchMode: The timeframe for modifying the MongoDB instance's SSL configuration. Valid values:

            - 0: Modify immediately.
            - 1: Modify within the manageable timeframe.
            '''
            result = self._values.get("switch_mode")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SSLOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__15dcffa193059cd76b81e13a8b465d3974f418531629922c170158878d90d390)
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
    jsii_type="@alicloud/ros-cdk-mongodb.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "account_password": "accountPassword",
        "audit_policy_options": "auditPolicyOptions",
        "auto_renew": "autoRenew",
        "backup_id": "backupId",
        "backup_policy_options": "backupPolicyOptions",
        "business_info": "businessInfo",
        "charge_type": "chargeType",
        "cluster_id": "clusterId",
        "coupon_no": "couponNo",
        "database_names": "databaseNames",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_release_protection": "dbInstanceReleaseProtection",
        "encrypted": "encrypted",
        "encryption_key": "encryptionKey",
        "engine_version": "engineVersion",
        "hidden_zone_id": "hiddenZoneId",
        "period": "period",
        "private_connections": "privateConnections",
        "provisioned_iops": "provisionedIops",
        "readonly_replicas": "readonlyReplicas",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "restore_time": "restoreTime",
        "restore_type": "restoreType",
        "secondary_zone_id": "secondaryZoneId",
        "security_group_id": "securityGroupId",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "src_region": "srcRegion",
        "ssl_options": "sslOptions",
        "storage_engine": "storageEngine",
        "storage_type": "storageType",
        "tags": "tags",
        "tde_status": "tdeStatus",
        "vpc_id": "vpcId",
        "vpc_password_free": "vpcPasswordFree",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audit_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.AuditPolicyOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupPolicyOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        business_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        coupon_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        database_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_release_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PrivateConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        readonly_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        src_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.SSLOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance

        :param db_instance_class: 
        :param db_instance_storage: 
        :param account_password: 
        :param audit_policy_options: 
        :param auto_renew: 
        :param backup_id: 
        :param backup_policy_options: 
        :param business_info: 
        :param charge_type: 
        :param cluster_id: 
        :param coupon_no: 
        :param database_names: 
        :param db_instance_description: 
        :param db_instance_release_protection: 
        :param encrypted: 
        :param encryption_key: 
        :param engine_version: 
        :param hidden_zone_id: 
        :param period: 
        :param private_connections: 
        :param provisioned_iops: 
        :param readonly_replicas: 
        :param replication_factor: 
        :param resource_group_id: 
        :param restore_time: 
        :param restore_type: 
        :param secondary_zone_id: 
        :param security_group_id: 
        :param security_ip_array: 
        :param src_db_instance_id: 
        :param src_region: 
        :param ssl_options: 
        :param storage_engine: 
        :param storage_type: 
        :param tags: 
        :param tde_status: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__277a272f97f3bd8d8fd6e34b21c7a20f63f7e11c5f15affd357910818519b689)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_storage", value=db_instance_storage, expected_type=type_hints["db_instance_storage"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument audit_policy_options", value=audit_policy_options, expected_type=type_hints["audit_policy_options"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument backup_id", value=backup_id, expected_type=type_hints["backup_id"])
            check_type(argname="argument backup_policy_options", value=backup_policy_options, expected_type=type_hints["backup_policy_options"])
            check_type(argname="argument business_info", value=business_info, expected_type=type_hints["business_info"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument coupon_no", value=coupon_no, expected_type=type_hints["coupon_no"])
            check_type(argname="argument database_names", value=database_names, expected_type=type_hints["database_names"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_release_protection", value=db_instance_release_protection, expected_type=type_hints["db_instance_release_protection"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument hidden_zone_id", value=hidden_zone_id, expected_type=type_hints["hidden_zone_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument private_connections", value=private_connections, expected_type=type_hints["private_connections"])
            check_type(argname="argument provisioned_iops", value=provisioned_iops, expected_type=type_hints["provisioned_iops"])
            check_type(argname="argument readonly_replicas", value=readonly_replicas, expected_type=type_hints["readonly_replicas"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_ip_array", value=security_ip_array, expected_type=type_hints["security_ip_array"])
            check_type(argname="argument src_db_instance_id", value=src_db_instance_id, expected_type=type_hints["src_db_instance_id"])
            check_type(argname="argument src_region", value=src_region, expected_type=type_hints["src_region"])
            check_type(argname="argument ssl_options", value=ssl_options, expected_type=type_hints["ssl_options"])
            check_type(argname="argument storage_engine", value=storage_engine, expected_type=type_hints["storage_engine"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tde_status", value=tde_status, expected_type=type_hints["tde_status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vpc_password_free", value=vpc_password_free, expected_type=type_hints["vpc_password_free"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if audit_policy_options is not None:
            self._values["audit_policy_options"] = audit_policy_options
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_id is not None:
            self._values["backup_id"] = backup_id
        if backup_policy_options is not None:
            self._values["backup_policy_options"] = backup_policy_options
        if business_info is not None:
            self._values["business_info"] = business_info
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if coupon_no is not None:
            self._values["coupon_no"] = coupon_no
        if database_names is not None:
            self._values["database_names"] = database_names
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_release_protection is not None:
            self._values["db_instance_release_protection"] = db_instance_release_protection
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if hidden_zone_id is not None:
            self._values["hidden_zone_id"] = hidden_zone_id
        if period is not None:
            self._values["period"] = period
        if private_connections is not None:
            self._values["private_connections"] = private_connections
        if provisioned_iops is not None:
            self._values["provisioned_iops"] = provisioned_iops
        if readonly_replicas is not None:
            self._values["readonly_replicas"] = readonly_replicas
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if restore_type is not None:
            self._values["restore_type"] = restore_type
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if src_region is not None:
            self._values["src_region"] = src_region
        if ssl_options is not None:
            self._values["ssl_options"] = ssl_options
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if tags is not None:
            self._values["tags"] = tags
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        '''
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        '''
        result = self._values.get("account_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audit_policy_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.AuditPolicyOptionsProperty]]:
        '''
        :Property: auditPolicyOptions: Audit policy options.
        '''
        result = self._values.get("audit_policy_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.AuditPolicyOptionsProperty]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupId: Specific backup set Id.
        '''
        result = self._values.get("backup_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupPolicyOptionsProperty]]:
        '''
        :Property: backupPolicyOptions: Backup policy options.
        '''
        result = self._values.get("backup_policy_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupPolicyOptionsProperty]], result)

    @builtins.property
    def business_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: businessInfo: The business information. It is an additional parameter.
        '''
        result = self._values.get("business_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The dedicated cluster ID.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def coupon_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        '''
        result = self._values.get("coupon_no")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def database_names(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: databaseNames: The name of the database.
        '''
        result = self._values.get("database_names")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_release_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceReleaseProtection: Enables instance release protection. Values:

        - true: Enabled.
        - false: Not enabled.
        '''
        result = self._values.get("db_instance_release_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encrypted: Whether to enable cloud disk encryption.
        '''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: Custom key ID.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Database instance version.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hidden_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        '''
        result = self._values.get("hidden_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.PrivateConnectionsProperty]]:
        '''
        :Property: privateConnections: Connection configs of private connection.
        '''
        result = self._values.get("private_connections")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.PrivateConnectionsProperty]], result)

    @builtins.property
    def provisioned_iops(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
        '''
        result = self._values.get("provisioned_iops")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def readonly_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        '''
        result = self._values.get("readonly_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restoreType: Backup recovery instance.

        - 0: Restore instance to specified backup set
        - 1: Restore instance to specified point in time
        - 2: Restore released instance to specified backup set
        - 3: Restore instance to specified backup set
        '''
        result = self._values.get("restore_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        '''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the ECS security group.
        Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
        You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_array(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
        '''
        result = self._values.get("security_ip_array")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def src_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        '''
        result = self._values.get("src_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def src_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        srcRegion: The source instance region.
        .. epigraph::

        - When the backup recovery type is 2 or 3, this parameter is required.
        '''
        result = self._values.get("src_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.SSLOptionsProperty]]:
        '''
        :Property: sslOptions: SSL options.
        '''
        result = self._values.get("ssl_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.SSLOptionsProperty]], result)

    @builtins.property
    def storage_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        '''
        result = self._values.get("storage_engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageType: The storage type of the instance.
        Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: You cannot disable TDE after it is enabled.
        '''
        result = self._values.get("tde_status")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create mongodb instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        result = self._values.get("vpc_password_free")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrivateSrvNetworkAddress(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosPrivateSrvNetworkAddress",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::PrivateSrvNetworkAddress``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PrivateSrvNetworkAddress`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrivateSrvNetworkAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c139de6739b2bffa75f38d621a74c32944bf35fc40a68f3cbf7509d39a653f75)
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
            type_hints = typing.get_type_hints(_typecheckingstub__20636cfebe78b22bf4a60cc11dbef552c95d200b6d100028d35e15b38de3d6d5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateSrvConnectionStringUri")
    def attr_private_srv_connection_string_uri(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateSrvConnectionStringUri: Private network SRV highly available connection address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateSrvConnectionStringUri"))

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
        :Property: dbInstanceId: The instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__480e66c34e06d635a462a2f3537c06a9f6f196da33cdd0e9ae7ee3313041c056)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35fe503e7c684687917da779db9e9c6c579fe0d58774032e525ceab354de876d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosPrivateSrvNetworkAddressProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId"},
)
class RosPrivateSrvNetworkAddressProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPrivateSrvNetworkAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress

        :param db_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33d52288570ceca4e9803c4a2ca04fe7c7c5a870afda5d1d02f41a6440dafbaa)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrivateSrvNetworkAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosShardingInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::ShardingInstance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ShardingInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosShardingInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9c284361b8cd59d9a4577db49c2aeebd11497cd0b3e0268aeb9043c947c88c6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6d03d4b1ea2673de242bd6df37b29f4cb365793b1b3fb76a22da69b17fd6b183)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Order Id of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configServer")
    def config_server(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.ConfigServerProperty"]]]:
        '''
        :Property: configServer:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.ConfigServerProperty"]]], jsii.get(self, "configServer"))

    @config_server.setter
    def config_server(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.ConfigServerProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e7b2ff9b931680968616e89907e84504ef93908cb7a9b598ebf9c725fcdc356)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configServer", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b933eda9f425ff90d94b68663f25713c0e5356b4affbb346c63f490f7606a0a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="mongos")
    def mongos(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.MongosProperty"]]]:
        '''
        :Property: mongos:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.MongosProperty"]]], jsii.get(self, "mongos"))

    @mongos.setter
    def mongos(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.MongosProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ee9240a657dc96ddd3791f99430cbca2e3e3d1cd851d7026b75943b77e4820d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mongos", value)

    @builtins.property
    @jsii.member(jsii_name="replicaSet")
    def replica_set(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.ReplicaSetProperty"]]]:
        '''
        :Property: replicaSet:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.ReplicaSetProperty"]]], jsii.get(self, "replicaSet"))

    @replica_set.setter
    def replica_set(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosShardingInstance.ReplicaSetProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee9345da059ad02d0a312cd5c2783973deda6b33f54cd2aad401ed81bc66c309)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicaSet", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4175535989ca87ee166534531fdc9ec4cfc12cfe1b8cde4c34369e20fd58899)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d7e525d1a0506d2df1c634e50719d414ef99ac12dfd412a72c36c35c848a156)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6e11f946cd9212ad58ea255ee55cea8df550c580081c4a886122722d3607299)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f732a3f94fca8d1d8b32c97f12eab24883f6d207d81537404c9bf0ec13e74202)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Database instance version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f665fda6b257611aa3e70a3f968492641b2ed0fea57cb76ecf760ccdd8637871)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="hiddenZoneId")
    def hidden_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hiddenZoneId"))

    @hidden_zone_id.setter
    def hidden_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a38266a40e6e485e9f4832263cd7296f4ec55a42f21a9b8e75a4bb84aa1ac4f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hiddenZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ba89b3b0917b2674f31d922b5eca812d2325aa5de987acfc7709fa06715f2ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protocolType: Protocol type. Valid value: mongodb or dynamodb.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f7c032e6ab052d83c186fa1dfe71dc544f8a2810c787572405ce4b9e023f80b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__709be57840ed3d2fb353ede53bd79874b2ded15d7cd3faeb1222d0fdd92c970e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="restoreTime")
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restoreTime"))

    @restore_time.setter
    def restore_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb907b30a412b7b0f28b2d3f26f89ac4893dd0eac6c5b889929b55e8a7693044)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreTime", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryZoneId")
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondaryZoneId"))

    @secondary_zone_id.setter
    def secondary_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4121f6202c861ba4e7e690c9a97962b9971426db5f2340521f798f329e02f67f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpArray")
    def security_ip_array(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpArray"))

    @security_ip_array.setter
    def security_ip_array(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f154991fb161742bdd0287c2da82c2905e75d3392829cdd0e2cb2c9cdedd1c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpArray", value)

    @builtins.property
    @jsii.member(jsii_name="srcDbInstanceId")
    def src_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "srcDbInstanceId"))

    @src_db_instance_id.setter
    def src_db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe52933b008335283c1ae43f30b3f5f22ec91a8ab645fd33c25a2f0144037607)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "srcDbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="storageEngine")
    def storage_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageEngine"))

    @storage_engine.setter
    def storage_engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d95c5a7ef8e7e3147a0e38371cf5ae9a20cb90f40e24fe53df6aa65e2a175ec9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageEngine", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageType: The storage type of the instance.
        Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed357de8196697eb910f64b88af4b69bfa22d77dd0bce9fb0ab9100dcfb64976)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosShardingInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosShardingInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosShardingInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4b62813684f47ae59e8af3423710eec70aa8085db5a057db5177023cddfe4f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="tdeStatus")
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: You cannot disable TDE after it is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tdeStatus"))

    @tde_status.setter
    def tde_status(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9391d973b5388468c67057cdf1f20528648b44261369ebaff6060677c562cf7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tdeStatus", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create mongodb instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6a8a25f3c4138f20775b3652d3c7efa795f2fe7c2badec5fc3f8a4d89e3b192)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c183ee085c76a192575233c6ff903b2bd6620228abff51acdc0eadd7d32cabe2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a48e0703ccc39d6386a868d9ae0d44b5524e85942a2c1184c4728a670c3b499a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty",
        jsii_struct_bases=[],
        name_mapping={"class_": "class", "storage": "storage"},
    )
    class ConfigServerProperty:
        def __init__(
            self,
            *,
            class_: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param class_: 
            :param storage: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e51295f159bb768bc32b904e440663e5b249a5440a8c4db7fdaa9ac0de178843)
                check_type(argname="argument class_", value=class_, expected_type=type_hints["class_"])
                check_type(argname="argument storage", value=storage, expected_type=type_hints["storage"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "class_": class_,
                "storage": storage,
            }

        @builtins.property
        def class_(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: class: The specification of config server.
            '''
            result = self._values.get("class_")
            assert result is not None, "Required property 'class_' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def storage(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: storage: The storage space of config server. Valid value: 20. Unit: GB.
            '''
            result = self._values.get("storage")
            assert result is not None, "Required property 'storage' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigServerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty",
        jsii_struct_bases=[],
        name_mapping={"class_": "class"},
    )
    class MongosProperty:
        def __init__(
            self,
            *,
            class_: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param class_: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__47f482fdef36a359578950bf4a0b39ce8a201ba45f6400ab97cbca15a2177fad)
                check_type(argname="argument class_", value=class_, expected_type=type_hints["class_"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "class_": class_,
            }

        @builtins.property
        def class_(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: class: The specification of mongo.
            '''
            result = self._values.get("class_")
            assert result is not None, "Required property 'class_' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MongosProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty",
        jsii_struct_bases=[],
        name_mapping={
            "class_": "class",
            "storage": "storage",
            "readonly_replicas": "readonlyReplicas",
        },
    )
    class ReplicaSetProperty:
        def __init__(
            self,
            *,
            class_: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            readonly_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param class_: 
            :param storage: 
            :param readonly_replicas: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6c3bf2d2ba614c236ea96f303a184e90bd1f023409d551d7f886b5af93ff0223)
                check_type(argname="argument class_", value=class_, expected_type=type_hints["class_"])
                check_type(argname="argument storage", value=storage, expected_type=type_hints["storage"])
                check_type(argname="argument readonly_replicas", value=readonly_replicas, expected_type=type_hints["readonly_replicas"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "class_": class_,
                "storage": storage,
            }
            if readonly_replicas is not None:
                self._values["readonly_replicas"] = readonly_replicas

        @builtins.property
        def class_(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: class: The specification of shard.
            '''
            result = self._values.get("class_")
            assert result is not None, "Required property 'class_' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def storage(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            storage: The storage space of shard.
            Valid values: 10 to 2000. Unit: GB.
            You can only specify this value in 10 GB increments.
            '''
            result = self._values.get("storage")
            assert result is not None, "Required property 'storage' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def readonly_replicas(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readonlyReplicas: The number of read-only nodes in shard node.
            '''
            result = self._values.get("readonly_replicas")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReplicaSetProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__c4d8dd7eb66f382eadb527169cebdb3ae5d72b4b94fc1b3c4d14a987fa95c73d)
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
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_server": "configServer",
        "mongos": "mongos",
        "replica_set": "replicaSet",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "hidden_zone_id": "hiddenZoneId",
        "period": "period",
        "protocol_type": "protocolType",
        "resource_group_id": "resourceGroupId",
        "restore_time": "restoreTime",
        "secondary_zone_id": "secondaryZoneId",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "storage_engine": "storageEngine",
        "storage_type": "storageType",
        "tags": "tags",
        "tde_status": "tdeStatus",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosShardingInstanceProps:
    def __init__(
        self,
        *,
        config_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ConfigServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
        mongos: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.MongosProperty, typing.Dict[builtins.str, typing.Any]]]]],
        replica_set: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ReplicaSetProperty, typing.Dict[builtins.str, typing.Any]]]]],
        account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosShardingInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosShardingInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance

        :param config_server: 
        :param mongos: 
        :param replica_set: 
        :param account_password: 
        :param auto_renew: 
        :param charge_type: 
        :param db_instance_description: 
        :param engine_version: 
        :param hidden_zone_id: 
        :param period: 
        :param protocol_type: 
        :param resource_group_id: 
        :param restore_time: 
        :param secondary_zone_id: 
        :param security_ip_array: 
        :param src_db_instance_id: 
        :param storage_engine: 
        :param storage_type: 
        :param tags: 
        :param tde_status: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d2b6bebeadd84cb6532d1b4a7f47c8f7e74357fbf4b93557dc5d8771a51757f)
            check_type(argname="argument config_server", value=config_server, expected_type=type_hints["config_server"])
            check_type(argname="argument mongos", value=mongos, expected_type=type_hints["mongos"])
            check_type(argname="argument replica_set", value=replica_set, expected_type=type_hints["replica_set"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument hidden_zone_id", value=hidden_zone_id, expected_type=type_hints["hidden_zone_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_ip_array", value=security_ip_array, expected_type=type_hints["security_ip_array"])
            check_type(argname="argument src_db_instance_id", value=src_db_instance_id, expected_type=type_hints["src_db_instance_id"])
            check_type(argname="argument storage_engine", value=storage_engine, expected_type=type_hints["storage_engine"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tde_status", value=tde_status, expected_type=type_hints["tde_status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_server": config_server,
            "mongos": mongos,
            "replica_set": replica_set,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if hidden_zone_id is not None:
            self._values["hidden_zone_id"] = hidden_zone_id
        if period is not None:
            self._values["period"] = period
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if tags is not None:
            self._values["tags"] = tags
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def config_server(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ConfigServerProperty]]]:
        '''
        :Property: configServer:
        '''
        result = self._values.get("config_server")
        assert result is not None, "Required property 'config_server' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ConfigServerProperty]]], result)

    @builtins.property
    def mongos(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.MongosProperty]]]:
        '''
        :Property: mongos:
        '''
        result = self._values.get("mongos")
        assert result is not None, "Required property 'mongos' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.MongosProperty]]], result)

    @builtins.property
    def replica_set(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ReplicaSetProperty]]]:
        '''
        :Property: replicaSet:
        '''
        result = self._values.get("replica_set")
        assert result is not None, "Required property 'replica_set' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ReplicaSetProperty]]], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        '''
        result = self._values.get("account_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: Description of created database instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Database instance version.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hidden_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        '''
        result = self._values.get("hidden_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protocolType: Protocol type. Valid value: mongodb or dynamodb.
        '''
        result = self._values.get("protocol_type")
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

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        '''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_array(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
        '''
        result = self._values.get("security_ip_array")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def src_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        '''
        result = self._values.get("src_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        '''
        result = self._values.get("storage_engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        storageType: The storage type of the instance.
        Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosShardingInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosShardingInstance.TagsProperty]], result)

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: You cannot disable TDE after it is enabled.
        '''
        result = self._values.get("tde_status")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create mongodb instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosShardingInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosShardingNetworkPrivateAddress(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingNetworkPrivateAddress",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::ShardingNetworkPrivateAddress``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ShardingNetworkPrivateAddress`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosShardingNetworkPrivateAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94a4be4ddfe88add0cbc5050add969fcd4ccc845008b0d5d81e406a0328d51eb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d374ae3e3d750908ae8f21b44d42176298c61059c7b15421178778f93c4e2a3b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCompatibleConnections")
    def attr_compatible_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompatibleConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAddresses"))

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
        :Property: dbInstanceId: The ID of the Shard cluster instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8b6c2ebfc623f95fcefb06259917032229e59e0b41509c1806d7bd4465bfbc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__464f9b53db63b9476dbcd1b1cdc535ae08e410add1948f330fc2908576aceed8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="nodeId")
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
        .. epigraph::

        You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeId"))

    @node_id.setter
    def node_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42b6fc85ae174f3c5c1d2476cdd2c17bb9857bfde90f763fdd86f109f8c20e58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeId", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountName: Account name.
        .. epigraph::

        - starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.

        - Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
        - The permissions of this account are fixed to read-only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22e574cb27d1ca9f2a78583c0797a2a505547b06b963c62b181f502622b5860b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountPassword: Account password.

        - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
        - The password length is 8-32 bits.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9625274631422fa86a996376c7a4475ca13d914cb9a3601c4589cdfc023f341)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone to which the instance belongs.
        .. epigraph::

        You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eba11d0ff4fc27b5b1683328c79128a0a5378c5e69e520e1c19bc223b7aaa61)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingNetworkPrivateAddressProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "node_id": "nodeId",
        "account_name": "accountName",
        "account_password": "accountPassword",
        "zone_id": "zoneId",
    },
)
class RosShardingNetworkPrivateAddressProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosShardingNetworkPrivateAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress

        :param db_instance_id: 
        :param node_id: 
        :param account_name: 
        :param account_password: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72ecb0ed3f876fa110879af5440eb52956e3177cbb695c5a059a963f2818cfc2)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "node_id": node_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if account_password is not None:
            self._values["account_password"] = account_password
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the Shard cluster instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
        .. epigraph::

        You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
        '''
        result = self._values.get("node_id")
        assert result is not None, "Required property 'node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountName: Account name.
        .. epigraph::

        - starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.

        - Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
        - The permissions of this account are fixed to read-only.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountPassword: Account password.

        - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
        - The password length is 8-32 bits.
        '''
        result = self._values.get("account_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone to which the instance belongs.
        .. epigraph::

        You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosShardingNetworkPrivateAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosShardingNetworkPublicAddress(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingNetworkPublicAddress",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MONGODB::ShardingNetworkPublicAddress``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ShardingNetworkPublicAddress`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosShardingNetworkPublicAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6383c3d390bc9aa66f554c631952900113d20adecb93dbb601baa28befdead82)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8270274ceb2b6305373e3a719ce181d61878bbd2cc00b3120d1a23d19ed29f3b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAddresses"))

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
        :Property:

        dbInstanceId: The ID of the instance.
        .. epigraph::

        you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5af61b354a2ff08a6eecc46dc87b80a94e18a8951cff97fa02b8c3db67543872)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cdc14d0350c1bc30d2c23f13ef0f2841cb95d5f16ebfae655c0087d7b89bc07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="nodeId")
    def node_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
        .. epigraph::

        This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeId"))

    @node_id.setter
    def node_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db53b0ad8caf6b4f24422d48e93d25f7fdfbf8c1ec8c1eb5af34c0e3ff1d000e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingNetworkPublicAddressProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId", "node_id": "nodeId"},
)
class RosShardingNetworkPublicAddressProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosShardingNetworkPublicAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress

        :param db_instance_id: 
        :param node_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f6563abde9104396b524e58c904725ad7152f12a8401a8cccd40d423800a30d)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if node_id is not None:
            self._values["node_id"] = node_id

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbInstanceId: The ID of the instance.
        .. epigraph::

        you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
        .. epigraph::

        This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
        '''
        result = self._values.get("node_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosShardingNetworkPublicAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IShardingInstance)
class ShardingInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::ShardingInstance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosShardingInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ShardingInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26be15d891cfc33842d43ba776c72284801974e8a2b18f0fd403b6236ef4fec3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceId: The instance id of created mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceStatus: Status of mongodb instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingInstanceProps":
        return typing.cast("ShardingInstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa7ab9e0398f1f873de4579a5ed27f2c3c61a5f51c4f826b18197512674b303e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9479cbd517aef6cbc46429902699f3dd428783c96fa8c25ffc3bc87d42dd87f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb410f4f912865e5021bd2aac35d809de3389f15298a90b810a8a1958965eb00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_server": "configServer",
        "mongos": "mongos",
        "replica_set": "replicaSet",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "hidden_zone_id": "hiddenZoneId",
        "period": "period",
        "protocol_type": "protocolType",
        "resource_group_id": "resourceGroupId",
        "restore_time": "restoreTime",
        "secondary_zone_id": "secondaryZoneId",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "storage_engine": "storageEngine",
        "storage_type": "storageType",
        "tags": "tags",
        "tde_status": "tdeStatus",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class ShardingInstanceProps:
    def __init__(
        self,
        *,
        config_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ConfigServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
        mongos: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.MongosProperty, typing.Dict[builtins.str, typing.Any]]]]],
        replica_set: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ReplicaSetProperty, typing.Dict[builtins.str, typing.Any]]]]],
        account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosShardingInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ShardingInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance

        :param config_server: Property configServer:.
        :param mongos: Property mongos:.
        :param replica_set: Property replicaSet:.
        :param account_password: Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        :param auto_renew: Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        :param charge_type: Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
        :param db_instance_description: Property dbInstanceDescription: Description of created database instance.
        :param engine_version: Property engineVersion: Database instance version.
        :param hidden_zone_id: Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment. When the value of the EngineVersion is 4.4 and later, this parameter is available and required. The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        :param period: Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        :param protocol_type: Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param restore_time: Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        :param secondary_zone_id: Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment. When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        :param security_ip_array: Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
        :param src_db_instance_id: Property srcDbInstanceId: Create an instance of the backup set based on an instance.
        :param storage_engine: Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
        :param storage_type: Property storageType: The storage type of the instance. Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty. Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param tde_status: Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values: true: enable TDE false: disable TDE (default) Note: You cannot disable TDE after it is enabled.
        :param vpc_id: Property vpcId: The VPC id to create mongodb instance.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create mongodb instance.
        :param zone_id: Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b72e408b874d0408659d7efbfdceb247cbbf496a70b506be1a1ff91bb5789ec)
            check_type(argname="argument config_server", value=config_server, expected_type=type_hints["config_server"])
            check_type(argname="argument mongos", value=mongos, expected_type=type_hints["mongos"])
            check_type(argname="argument replica_set", value=replica_set, expected_type=type_hints["replica_set"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument hidden_zone_id", value=hidden_zone_id, expected_type=type_hints["hidden_zone_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_ip_array", value=security_ip_array, expected_type=type_hints["security_ip_array"])
            check_type(argname="argument src_db_instance_id", value=src_db_instance_id, expected_type=type_hints["src_db_instance_id"])
            check_type(argname="argument storage_engine", value=storage_engine, expected_type=type_hints["storage_engine"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tde_status", value=tde_status, expected_type=type_hints["tde_status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_server": config_server,
            "mongos": mongos,
            "replica_set": replica_set,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if hidden_zone_id is not None:
            self._values["hidden_zone_id"] = hidden_zone_id
        if period is not None:
            self._values["period"] = period
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if tags is not None:
            self._values["tags"] = tags
        if tde_status is not None:
            self._values["tde_status"] = tde_status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def config_server(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ConfigServerProperty]]]:
        '''Property configServer:.'''
        result = self._values.get("config_server")
        assert result is not None, "Required property 'config_server' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ConfigServerProperty]]], result)

    @builtins.property
    def mongos(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.MongosProperty]]]:
        '''Property mongos:.'''
        result = self._values.get("mongos")
        assert result is not None, "Required property 'mongos' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.MongosProperty]]], result)

    @builtins.property
    def replica_set(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ReplicaSetProperty]]]:
        '''Property replicaSet:.'''
        result = self._values.get("replica_set")
        assert result is not None, "Required property 'replica_set' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ReplicaSetProperty]]], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.'''
        result = self._values.get("account_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Indicates whether automatic renewal is enabled for the instance.

        Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: Description of created database instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: Database instance version.'''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hidden_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.

        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        '''
        result = self._values.get("hidden_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protocolType: Protocol type.

        Valid value: mongodb or dynamodb.
        '''
        result = self._values.get("protocol_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restoreTime: The time to restore the cloned instance to.

        The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.

        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        '''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_array(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpArray: Security ips to add or remove.

        Update to this property will cover the current security ips.
        '''
        result = self._values.get("security_ip_array")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def src_db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property srcDbInstanceId: Create an instance of the backup set based on an instance.'''
        result = self._values.get("src_db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.'''
        result = self._values.get("storage_engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageType: The storage type of the instance.

        Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosShardingInstance.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosShardingInstance.TagsProperty]], result)

    @builtins.property
    def tde_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).

        Valid values:
        true: enable TDE
        false: disable TDE (default)
        Note: You cannot disable TDE after it is enabled.
        '''
        result = self._values.get("tde_status")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id to create mongodb instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch Id to create mongodb instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: On which zone to create the instance.

        If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ShardingInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IShardingNetworkPrivateAddress)
class ShardingNetworkPrivateAddress(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddress",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::ShardingNetworkPrivateAddress``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosShardingNetworkPrivateAddress``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ShardingNetworkPrivateAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13b7488929a3d189149ffce7249e4c86410e15c872521e28dab5dc482eaef2fb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCompatibleConnections")
    def attr_compatible_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCompatibleConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingNetworkPrivateAddressProps":
        return typing.cast("ShardingNetworkPrivateAddressProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__daf2262f619407aaf60a103636caac4e40eb6f102bda20c4fe98047e50d8115c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a30ab163227d544a75f38d18689181b97d6724811fcc63de358a67f4cc554c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3d9324eba0d05725e9fbda7cbcc8b669fad6c961f4ae5b7440d5ee45b3a8e67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "node_id": "nodeId",
        "account_name": "accountName",
        "account_password": "accountPassword",
        "zone_id": "zoneId",
    },
)
class ShardingNetworkPrivateAddressProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ShardingNetworkPrivateAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress

        :param db_instance_id: Property dbInstanceId: The ID of the Shard cluster instance.
        :param node_id: Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance. .. epigraph:: You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
        :param account_name: Property accountName: Account name. .. epigraph:: - starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores. - Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time. - The permissions of this account are fixed to read-only.
        :param account_password: Property accountPassword: Account password. - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-=' - The password length is 8-32 bits.
        :param zone_id: Property zoneId: The ID of the zone to which the instance belongs. .. epigraph:: You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17547b1a5b73f92c5ca5f2af4d0356aa1a2f9dd8f0f8874910ee46cc7981fbbc)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
            "node_id": node_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if account_password is not None:
            self._values["account_password"] = account_password
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the Shard cluster instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.

        .. epigraph::

           You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
        '''
        result = self._values.get("node_id")
        assert result is not None, "Required property 'node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: Account name.

        .. epigraph::

           - starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.

        - Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
        - The permissions of this account are fixed to read-only.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountPassword: Account password.

        - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
        - The password length is 8-32 bits.
        '''
        result = self._values.get("account_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone to which the instance belongs.

        .. epigraph::

           You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ShardingNetworkPrivateAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IShardingNetworkPublicAddress)
class ShardingNetworkPublicAddress(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddress",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::ShardingNetworkPublicAddress``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosShardingNetworkPublicAddress``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ShardingNetworkPublicAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61d929d331b27a87806e4c402e3c2212d600f31e8ec3df31aba97e3bdab13621)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ShardingNetworkPublicAddressProps":
        return typing.cast("ShardingNetworkPublicAddressProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6aa30c81292dcd07ddf3808489d9f61e96ab03f821544792b266f8df99c63c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fd0f51a90a4b2170be64b938dd2d174ff5283e23100f432a935427ce8f742df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4035659cfeabf5aab83cbbafa31c11f3e3829c917b9f122746333ef0cc732285)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddressProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId", "node_id": "nodeId"},
)
class ShardingNetworkPublicAddressProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ShardingNetworkPublicAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress

        :param db_instance_id: Property dbInstanceId: The ID of the instance. .. epigraph:: you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
        :param node_id: Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node. .. epigraph:: This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af97329f5c7a05f24230342bd358b29c91822d6b8c26a66a43796bb1fd6b9b8b)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if node_id is not None:
            self._values["node_id"] = node_id

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.

        .. epigraph::

           you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.

        You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
        .. epigraph::

           This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
        '''
        result = self._values.get("node_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ShardingNetworkPublicAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAuditPolicy)
class AuditPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.AuditPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::AuditPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAuditPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AuditPolicyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8698075b3f2be4ee8c29d5cc84fce8c86b91c8cb5acb81211ad76b8cae6c977a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuditStatus")
    def attr_audit_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuditStatus: Audit state, Valid values: ``enable``, ``disabled``.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuditStatus"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditPolicyProps:
        return typing.cast(AuditPolicyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f35a2fa17a79e134d51e0e323b0fdc82c6e3b2e4ca284d2f087a43e756bb9126)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__126a1be679724d213e2905234148a38071705aaa00bf746688da514187f2d0d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9db9843c79fa6f14b3e24105cf139d076d790c94b272a4661591cf959a59cb47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGlobalSecurityIPGroup)
class GlobalSecurityIPGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MONGODB::GlobalSecurityIPGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGlobalSecurityIPGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GlobalSecurityIPGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44c98fd16a243e37df0a2c43e14df7e002cba45bff66d17aae19afc895c2b5e8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGlobalIgName")
    def attr_global_ig_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalIgName: The name of the IP whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalIgName"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityGroupId")
    def attr_global_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalSecurityIpList")
    def attr_global_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GlobalSecurityIpList: The IP address in the whitelist template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGlobalSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GlobalSecurityIPGroupProps:
        return typing.cast(GlobalSecurityIPGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2ea434b459da2b2c205bb7f508715451aebddc6c2b6e2cfc8de3574517dd0da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73e0d7e75c8227012f35cf0190fab0d340879f7da0507a90ddb4837c29ebce0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d84d68362c8afa37a358df680abf9b3a2a2940155d52800f8fed02f972e42b4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AuditPolicy",
    "AuditPolicyProps",
    "GlobalSecurityIPGroup",
    "GlobalSecurityIPGroupProps",
    "IAuditPolicy",
    "IGlobalSecurityIPGroup",
    "IInstance",
    "IPrivateSrvNetworkAddress",
    "IShardingInstance",
    "IShardingNetworkPrivateAddress",
    "IShardingNetworkPublicAddress",
    "Instance",
    "InstanceProps",
    "PrivateSrvNetworkAddress",
    "PrivateSrvNetworkAddressProps",
    "RosAuditPolicy",
    "RosAuditPolicyProps",
    "RosGlobalSecurityIPGroup",
    "RosGlobalSecurityIPGroupProps",
    "RosInstance",
    "RosInstanceProps",
    "RosPrivateSrvNetworkAddress",
    "RosPrivateSrvNetworkAddressProps",
    "RosShardingInstance",
    "RosShardingInstanceProps",
    "RosShardingNetworkPrivateAddress",
    "RosShardingNetworkPrivateAddressProps",
    "RosShardingNetworkPublicAddress",
    "RosShardingNetworkPublicAddressProps",
    "ShardingInstance",
    "ShardingInstanceProps",
    "ShardingNetworkPrivateAddress",
    "ShardingNetworkPrivateAddressProps",
    "ShardingNetworkPublicAddress",
    "ShardingNetworkPublicAddressProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__4bf45a0f6d78731faefa95d300ed2719d5068e6221b4622b3597e3087f6c96ed(
    *,
    audit_status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96533fcc71c6d738405798aa34520ecf0061553d6f55ce90f7a150a4db223bf3(
    *,
    global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    global_security_ip_list: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b7f2f84f726a986010d4c9dd2ffccd4429bc37eba99351ce10043590f2b5f99(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d70b7af6b8373e73d96a5555c5ac4f4c56bce0b5d6f2ea6a9c98492dc64aae55(
    identity: _ros_cdk_ram_c2c603f0.IPrincipal,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b922d57558ca493d29a637d5c0f128e9a0fc4823ace27660d677a3f6282a6224(
    identity: _ros_cdk_ram_c2c603f0.IPrincipal,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cb3b2854a67292dbf5fa0148b19c719866a488151a263a2e59ddb6d7cd25c04(
    identity: _ros_cdk_ram_c2c603f0.IPrincipal,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e6a735342d9308295a9a5a1dea4fd813a29d85d0e213b28c7f8f9463a0614eb(
    identity: _ros_cdk_ram_c2c603f0.IPrincipal,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f664cc501126626dc53822e06f402646cf9b61f27a4a09961abd8024d0c24bb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b00ec62bf58b3e2615df2acb0c5feb7ac93738e272c0938f424b77b45db95fc(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c590df9482b5fc2a91b54020e504624fbcc6a90187569b4053a4de8a3b5e61d9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__997f098ba7b4e043270995db9795a2ee826e378ec52531260f3a599a770c5fa6(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audit_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.AuditPolicyOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupPolicyOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    business_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    coupon_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    database_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_release_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PrivateConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    readonly_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.SSLOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa649bcc28a92d31ef082869d82a586f8db1aad1e2127dd43d657d41e5fb516d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PrivateSrvNetworkAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10cacdbec36c2934388af73f09cd5a72ebaaa119e2b27f2d10045f33e7a464b2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b4b9d5b61cdec9dbdd7ced1351c246833f3e353772f656a576c1c2fa40022e1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f62607d1b7a7072419444b400840f2d7620287680354fc5c57175eca931ab966(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4453feb4e91021633613dd5f0a9e668135b0d71fd20475c2ab27a0204d8c8ea0(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad596c518cdc79568ebfc89f3f22169af2827c07e81b45df2d4425d0aca24b33(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAuditPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80d4b9155a204ad7b952ca312150d2a665bbecd15de4e37354073c3b6bb9f094(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52425bdc2f8e8267a7f3770b49f82a1b87335d03b2b41473b8783b797357652f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5da1be1ad5c40888e430d093a74c0b4cc8f35cd4a8be1542a29ff19f5f0e0c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88c667207753d783cdce7fc45fd481b47fe0e64208f2ef5b940e8973b9d22794(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45adcf731050d2603d59d309638b6b61ced98b2c33db3e1e3ef743c2acc15cd5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e37286f634992a9b02e8aadcff79d4267910c0720a02e6c9345b690408374359(
    *,
    audit_status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5d7cc2c92f7e867e936b71cff25cc2954c29d6f838e9b31f008bf9b51deb3a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGlobalSecurityIPGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55895efd3e75e07b97b165e274391f763146c5a0bad8b4ff5a9601a1b99106c7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e0d6035c25c5912c248682b3584275b844b266c4e3c0ee753245660b5dc8f2f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d7aaf3753ef1b68912f4376b868c837539079332c8a055b1ce45f8e647fa0e7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3be0cc01c7d2da0e767ac6a7046110c2364a31695405c6ebb1328a74e536504(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b0e133493cfe111aa4cdd40e8858c41912ea0706e6c047b0ee2b5b021b7d239(
    *,
    global_ig_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    global_security_ip_list: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fb46f7a2ed6587b62b5bb59684e31984c29d56aa381a5c106180db5738f00f3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65583d7b0d37b9c641fed9ea78cc819b34a206c14dd056fe5278a378f76c65bb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a83d56c4211b4cb7e081897701d4d9379d4620b1bcb4725b951ebee5c783506(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11e10625104f7af645b1aeaf8f10829f6ac6e4d0c91e2186213037cc1f410c63(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9187c3c36e6903fe9f7c23699eb40d6be1a03d851e4f50e219bd1608f827c5e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fc90add06efadcda8d93b3d22d64a98b31cec821a4d623a8610d59920cf928b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c9688265b3177d880c4132d4f6b36545629900ab7636e10d430162f5de6a2f7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.AuditPolicyOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af60bcdd4c6df558ba6f1504cc762e9080e9132d97283f5be08b51dd91f13357(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2409a270b1275912cba3365974ed483b2b5c78149a8037a4e9ee6f7589255fdd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__504d2ffa095ff214ebafe4ae9ed6e03f38c4accc8bb4c302d29c701d21cde2b9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupPolicyOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80c4b88a0ee90dfc9c7e4e01b1937843d9411098a2fc18cc131c1a91c0100746(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cee2f520095e89429435c7ee1270f53311b17feaa4afc6a0094f8e4e7ccd2200(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24794a77eb7d37d6ed7f0f3aee7dcf4541fd05185d0a4dd722cfcab38da33880(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40651a677e6dd423144b8b806dd94bfad7e6b6edcd9b072022cba1328f112834(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c86beca76ac13a64c68998452e284b6ffb3d184b97ee0b74151994eeba91701(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7efe3c0c2c111969a82610a3ffa00d48a09bdcaf7d47130a4701d083c0ab56ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7f580dc2ad0f0ad33f4047e29d9c0840156c16a5afb3164f5703f742342b7f4(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb0f62d2f16881d4ba23c0367274895a72864d99e7957bc7b0e683d0bdd3f9d0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aac38627518f4cb4f50680d6c1d473a4f547888968c89d2895071ed3987ffaa3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43df8e2b1b34356279a2d5fb23502db37a9024c677962588a489386b8996d37a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__517f00165c0f1ec4b1a17ef036a37856720ce3f6594ee7d0d66172359c8d4a47(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51122949257c6328514fe445a4b4b27d492df3d77f744b24eb431163c4d0e7c3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d104831cea4921888c3c3150ec30c70927947975bb38e567cd4b8eb7212560f0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.PrivateConnectionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5d89557042302c6ed9a38cb2a0f42145455fa11a7ee796cf276e04d1fd46ecf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0d1669964918408adfe24f5114348be9b0f6520d93dc2016128d42f512086d4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fa799ac16749622d11576f2a55e2853fe06f91c69ffda103b4832c8f60f48bd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8a9ff193eb7dedfd4905d1fc9187addac03c2a2c4892d49bf200a466bbdaa91(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d5c0c427959f625a8ed7d62467420426f08cc36a453966cbec4f1f0e1f8cb72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72cbaa1238941a2e79b55306289767aeaa77b122a6bda1dc1d2fc52c78989b9c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2a112329220dbb7deb921983828fbe6c14849a1e7f37017c571c3487d113299(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aadb26883a9ab234385764e39d9148149063709452ded4d19283dc02da920db8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8db0f067f102de0433ad40e51a1f4ce6f9e5d2d5aec3edfe24348b7c0afa1b03(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7660c1e304a02dd56d313461f1c20f0fa426619a546754b4a92ee6c1e3df72e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8f46683206d2b92ea8973c30701219b2a4831a51e207cd7f43207d35670314c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afc3d32806ed6453f9092026de107435f3a4b176523593ebe2a27cac2f0fc3a8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.SSLOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1f4c8d0876e16970c9c7ba7b32d3c0ed36259368062a71bb230e672c2d20b22(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9e0d56b98eff5ddc587d13b80b8e206c3b9f4323483a2ef08575965ac5a360c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d48453cbb347b2910f7ab49a2ecf372e71507c9ca1559225221ed391418f1f7(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__845ee40ed52c6928d632bd480d3f353d6278275bb733dd16ebec3943c447578f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65ed4456c4751e8aff646737ba94468a8bbc2e8e8e66c858025ba5a14fe2d5b8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__838b8a699d36224ee9e930964e0329a50be94138cca0cdf04fe140c25057257e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36b79541dad5b6b56eb582d2ced3316b72629b2922060b450e9581ba5926f260(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f4d7d985efede3f92caa9f73942ecf651e70b2b5c7af03eb710f5197f700c82(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c6cd9272569af9d90400f7c6911e2c5107d8cd4be99f8f8743acf303e6c2028(
    *,
    audit_status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    audit_log_switch_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6664d2206754e4df0621b81f266b5e067ef2f0188ebccd30aa19162408fefeef(
    *,
    backup_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_retention_policy_on_cluster_deletion: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_backup_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_log_retention_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_log_retention_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_retention_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_retention_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_backup_log: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_cross_log_backup: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_frequency_backup_retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_backup_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preferred_backup_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preserve_one_each_hour: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a62c736a911cdefbc88c385f6c079dcfbcfc01a1d551ca2b219f8c0e30c4d9cd(
    *,
    replica_connections: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ReplicaConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__771b7428d2542b2231e0ef2e265d23815f85a5b2fee1ffa493e7caf035963093(
    *,
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9c383e2f17b6303347ba3421ae8a6b31be04ac4b75e361c2a6a8614a57197fd(
    *,
    ssl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    force_encryption: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15dcffa193059cd76b81e13a8b465d3974f418531629922c170158878d90d390(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__277a272f97f3bd8d8fd6e34b21c7a20f63f7e11c5f15affd357910818519b689(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audit_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.AuditPolicyOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupPolicyOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    business_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    coupon_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    database_names: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_release_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PrivateConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    provisioned_iops: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    readonly_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.SSLOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c139de6739b2bffa75f38d621a74c32944bf35fc40a68f3cbf7509d39a653f75(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrivateSrvNetworkAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20636cfebe78b22bf4a60cc11dbef552c95d200b6d100028d35e15b38de3d6d5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__480e66c34e06d635a462a2f3537c06a9f6f196da33cdd0e9ae7ee3313041c056(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35fe503e7c684687917da779db9e9c6c579fe0d58774032e525ceab354de876d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33d52288570ceca4e9803c4a2ca04fe7c7c5a870afda5d1d02f41a6440dafbaa(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9c284361b8cd59d9a4577db49c2aeebd11497cd0b3e0268aeb9043c947c88c6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosShardingInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d03d4b1ea2673de242bd6df37b29f4cb365793b1b3fb76a22da69b17fd6b183(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e7b2ff9b931680968616e89907e84504ef93908cb7a9b598ebf9c725fcdc356(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ConfigServerProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b933eda9f425ff90d94b68663f25713c0e5356b4affbb346c63f490f7606a0a5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ee9240a657dc96ddd3791f99430cbca2e3e3d1cd851d7026b75943b77e4820d(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.MongosProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee9345da059ad02d0a312cd5c2783973deda6b33f54cd2aad401ed81bc66c309(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosShardingInstance.ReplicaSetProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4175535989ca87ee166534531fdc9ec4cfc12cfe1b8cde4c34369e20fd58899(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d7e525d1a0506d2df1c634e50719d414ef99ac12dfd412a72c36c35c848a156(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6e11f946cd9212ad58ea255ee55cea8df550c580081c4a886122722d3607299(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f732a3f94fca8d1d8b32c97f12eab24883f6d207d81537404c9bf0ec13e74202(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f665fda6b257611aa3e70a3f968492641b2ed0fea57cb76ecf760ccdd8637871(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a38266a40e6e485e9f4832263cd7296f4ec55a42f21a9b8e75a4bb84aa1ac4f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ba89b3b0917b2674f31d922b5eca812d2325aa5de987acfc7709fa06715f2ea(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f7c032e6ab052d83c186fa1dfe71dc544f8a2810c787572405ce4b9e023f80b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__709be57840ed3d2fb353ede53bd79874b2ded15d7cd3faeb1222d0fdd92c970e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb907b30a412b7b0f28b2d3f26f89ac4893dd0eac6c5b889929b55e8a7693044(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4121f6202c861ba4e7e690c9a97962b9971426db5f2340521f798f329e02f67f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f154991fb161742bdd0287c2da82c2905e75d3392829cdd0e2cb2c9cdedd1c2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe52933b008335283c1ae43f30b3f5f22ec91a8ab645fd33c25a2f0144037607(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d95c5a7ef8e7e3147a0e38371cf5ae9a20cb90f40e24fe53df6aa65e2a175ec9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed357de8196697eb910f64b88af4b69bfa22d77dd0bce9fb0ab9100dcfb64976(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4b62813684f47ae59e8af3423710eec70aa8085db5a057db5177023cddfe4f1(
    value: typing.Optional[typing.List[RosShardingInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9391d973b5388468c67057cdf1f20528648b44261369ebaff6060677c562cf7d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6a8a25f3c4138f20775b3652d3c7efa795f2fe7c2badec5fc3f8a4d89e3b192(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c183ee085c76a192575233c6ff903b2bd6620228abff51acdc0eadd7d32cabe2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a48e0703ccc39d6386a868d9ae0d44b5524e85942a2c1184c4728a670c3b499a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e51295f159bb768bc32b904e440663e5b249a5440a8c4db7fdaa9ac0de178843(
    *,
    class_: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47f482fdef36a359578950bf4a0b39ce8a201ba45f6400ab97cbca15a2177fad(
    *,
    class_: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c3bf2d2ba614c236ea96f303a184e90bd1f023409d551d7f886b5af93ff0223(
    *,
    class_: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    readonly_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4d8dd7eb66f382eadb527169cebdb3ae5d72b4b94fc1b3c4d14a987fa95c73d(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d2b6bebeadd84cb6532d1b4a7f47c8f7e74357fbf4b93557dc5d8771a51757f(
    *,
    config_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ConfigServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
    mongos: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.MongosProperty, typing.Dict[builtins.str, typing.Any]]]]],
    replica_set: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ReplicaSetProperty, typing.Dict[builtins.str, typing.Any]]]]],
    account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosShardingInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94a4be4ddfe88add0cbc5050add969fcd4ccc845008b0d5d81e406a0328d51eb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosShardingNetworkPrivateAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d374ae3e3d750908ae8f21b44d42176298c61059c7b15421178778f93c4e2a3b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8b6c2ebfc623f95fcefb06259917032229e59e0b41509c1806d7bd4465bfbc1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__464f9b53db63b9476dbcd1b1cdc535ae08e410add1948f330fc2908576aceed8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42b6fc85ae174f3c5c1d2476cdd2c17bb9857bfde90f763fdd86f109f8c20e58(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22e574cb27d1ca9f2a78583c0797a2a505547b06b963c62b181f502622b5860b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9625274631422fa86a996376c7a4475ca13d914cb9a3601c4589cdfc023f341(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eba11d0ff4fc27b5b1683328c79128a0a5378c5e69e520e1c19bc223b7aaa61(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72ecb0ed3f876fa110879af5440eb52956e3177cbb695c5a059a963f2818cfc2(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6383c3d390bc9aa66f554c631952900113d20adecb93dbb601baa28befdead82(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosShardingNetworkPublicAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8270274ceb2b6305373e3a719ce181d61878bbd2cc00b3120d1a23d19ed29f3b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5af61b354a2ff08a6eecc46dc87b80a94e18a8951cff97fa02b8c3db67543872(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cdc14d0350c1bc30d2c23f13ef0f2841cb95d5f16ebfae655c0087d7b89bc07(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db53b0ad8caf6b4f24422d48e93d25f7fdfbf8c1ec8c1eb5af34c0e3ff1d000e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f6563abde9104396b524e58c904725ad7152f12a8401a8cccd40d423800a30d(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26be15d891cfc33842d43ba776c72284801974e8a2b18f0fd403b6236ef4fec3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ShardingInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa7ab9e0398f1f873de4579a5ed27f2c3c61a5f51c4f826b18197512674b303e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9479cbd517aef6cbc46429902699f3dd428783c96fa8c25ffc3bc87d42dd87f6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb410f4f912865e5021bd2aac35d809de3389f15298a90b810a8a1958965eb00(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b72e408b874d0408659d7efbfdceb247cbbf496a70b506be1a1ff91bb5789ec(
    *,
    config_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ConfigServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
    mongos: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.MongosProperty, typing.Dict[builtins.str, typing.Any]]]]],
    replica_set: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosShardingInstance.ReplicaSetProperty, typing.Dict[builtins.str, typing.Any]]]]],
    account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hidden_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restore_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_array: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    src_db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosShardingInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tde_status: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13b7488929a3d189149ffce7249e4c86410e15c872521e28dab5dc482eaef2fb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ShardingNetworkPrivateAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daf2262f619407aaf60a103636caac4e40eb6f102bda20c4fe98047e50d8115c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a30ab163227d544a75f38d18689181b97d6724811fcc63de358a67f4cc554c8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3d9324eba0d05725e9fbda7cbcc8b669fad6c961f4ae5b7440d5ee45b3a8e67(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17547b1a5b73f92c5ca5f2af4d0356aa1a2f9dd8f0f8874910ee46cc7981fbbc(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61d929d331b27a87806e4c402e3c2212d600f31e8ec3df31aba97e3bdab13621(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ShardingNetworkPublicAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6aa30c81292dcd07ddf3808489d9f61e96ab03f821544792b266f8df99c63c9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fd0f51a90a4b2170be64b938dd2d174ff5283e23100f432a935427ce8f742df(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4035659cfeabf5aab83cbbafa31c11f3e3829c917b9f122746333ef0cc732285(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af97329f5c7a05f24230342bd358b29c91822d6b8c26a66a43796bb1fd6b9b8b(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8698075b3f2be4ee8c29d5cc84fce8c86b91c8cb5acb81211ad76b8cae6c977a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AuditPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f35a2fa17a79e134d51e0e323b0fdc82c6e3b2e4ca284d2f087a43e756bb9126(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__126a1be679724d213e2905234148a38071705aaa00bf746688da514187f2d0d2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9db9843c79fa6f14b3e24105cf139d076d790c94b272a4661591cf959a59cb47(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44c98fd16a243e37df0a2c43e14df7e002cba45bff66d17aae19afc895c2b5e8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GlobalSecurityIPGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2ea434b459da2b2c205bb7f508715451aebddc6c2b6e2cfc8de3574517dd0da(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73e0d7e75c8227012f35cf0190fab0d340879f7da0507a90ddb4837c29ebce0a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d84d68362c8afa37a358df680abf9b3a2a2940155d52800f8fed02f972e42b4d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
