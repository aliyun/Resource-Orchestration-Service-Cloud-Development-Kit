'''
## Aliyun ROS REDIS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as REDIS from '@alicloud/ros-cdk-redis';
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


class Account(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.Account",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Account``.

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
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountName: The name of the account.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The name of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "instance_id": "instanceId",
        "account_description": "accountDescription",
        "account_privilege": "accountPrivilege",
        "account_type": "accountType",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Account``.

        :param account_name: Property accountName: The name of the account. The name must start with a lowercase letter and can contain lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters in length.
        :param account_password: Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        :param instance_id: Property instanceId: The ID of the instance for which you want to create the account.
        :param account_description: Property accountDescription: The description of the account. The description must start with a letter, and cannot start with http:// or https://. The description can contain letters, underscores (_), hyphens (-), and digits. It can be 2 to 256 characters in length.
        :param account_privilege: Property accountPrivilege: The permission of the account. Valid values: RoleReadOnly RoleReadWrite (default value) RoleRepl Note In addition to reading data from and writing data to the ApsaraDB for Redis instance, an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl permission can be granted to an account only in an ApsaraDB for Redis instance of the standard edition in Redis 4.0.
        :param account_type: Property accountType: The type of the account. Set this parameter to Normal.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "instance_id": instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_privilege is not None:
            self._values["account_privilege"] = account_privilege
        if account_type is not None:
            self._values["account_type"] = account_type

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountName: The name of the account.

        The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountPassword: The password of the account.

        The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the instance for which you want to create the account.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountDescription: The description of the account.

        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountPrivilege: The permission of the account.

        Valid values:
        RoleReadOnly
        RoleReadWrite (default value)
        RoleRepl
        Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        permission can be granted to an account only in an ApsaraDB for Redis instance of
        the standard edition in Redis 4.0.
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountType: The type of the account.

        Set this parameter to Normal.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.Instance",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["InstanceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Instance``.

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
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ArchitectureType: The architecture.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: The bandwidth of the instance.

        Unit: Mbit/s.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> ros_cdk_core.IResolvable:
        '''Attribute Capacity: The storage capacity of the instance.

        Unit: MB.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ChargeType: The billing method of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionDomain: Connection domain of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> ros_cdk_core.IResolvable:
        '''Attribute Connections: The maximum number of connections supported by the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute DirectConnectionPort: The direct connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute DirectConnectionString: The direct connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute EngineVersion: The engine version of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> ros_cdk_core.IResolvable:
        '''Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceClass: Redis instance type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance id of created redis instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceName: Name of created redis instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceType: The engine type of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkType: The network type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NodeType: The type of node.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PackageType: The plan type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: Port of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateIp: The internal IP address of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionPort: The public connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: The public connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> ros_cdk_core.IResolvable:
        '''Attribute QPS: The queries per second (QPS) supported by the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: The ID of the zone.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_renew_duration": "autoRenewDuration",
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "connections": "connections",
        "deletion_force": "deletionForce",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
        "product_type": "productType",
        "security_group_id": "securityGroupId",
        "ssl_enabled": "sslEnabled",
        "tags": "tags",
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
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.BackupPolicyProperty"]] = None,
        capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connections: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ConnectionsProperty"]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosInstance.TagsProperty"]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Instance``.

        :param auto_renew_duration: Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. When the instance is about to expire, the instance is automatically renewed based on the number of months specified by this parameter. Note This parameter is valid only when ChargeType is set to PrePaid.
        :param backup_policy: Property backupPolicy: Backup policy.
        :param capacity: Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        :param charge_type: Property chargeType: The billing method of the ApsaraDB for Redis instance. Valid values: PrePaid: subscription. PostPaid: pay-as-you-go. Default: PostPaid.
        :param connections: Property connections: Connection address.
        :param deletion_force: Property deletionForce: Whether destroy instance when it is in recycle. Default is false
        :param engine_version: Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        :param eviction_policy: Property evictionPolicy: The eviction policy of cache data storage.
        :param instance_class: Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        :param instance_maintain_time: Property instanceMaintainTime: Instance maintain time.
        :param instance_name: Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
        :param password: Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
        :param period: Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        :param product_type: Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        :param security_group_id: Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        :param ssl_enabled: Property sslEnabled: Modifies the SSL status. Valid values: Disable: disables SSL encryption. Enable: enables SSL encryption. Update: updates the SSL certificate.
        :param tags: Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC id to create ecs instance.
        :param vpc_password_free: Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to: - true: enables password free. - false: disables password free.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create ecs instance.
        :param zone_id: Property zoneId: The zone id of input region.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if connections is not None:
            self._values["connections"] = connections
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if ssl_enabled is not None:
            self._values["ssl_enabled"] = ssl_enabled
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewDuration: The auto-renewal period.

        Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.BackupPolicyProperty"]]:
        '''Property backupPolicy: Backup policy.'''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.BackupPolicyProperty"]], result)

    @builtins.property
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.'''
        result = self._values.get("capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: The billing method of the ApsaraDB for Redis instance.

        Valid values:
        PrePaid: subscription.
        PostPaid: pay-as-you-go.
        Default: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ConnectionsProperty"]]:
        '''Property connections: Connection address.'''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ConnectionsProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether destroy instance when it is in recycle.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property engineVersion: Engine version.

        Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property evictionPolicy: The eviction policy of cache data storage.'''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceClass: Redis instance type.

        Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]]:
        '''Property instanceMaintainTime: Instance maintain time.'''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.'''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property productType: Product type.

        Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The IDs of security groups.

        Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sslEnabled: Modifies the SSL status.

        Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to redis.

        Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC id to create ecs instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.

        If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        result = self._values.get("vpc_password_free")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The vSwitch Id to create ecs instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: The zone id of input region.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrepayInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.PrepayInstance",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::PrepayInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["PrepayInstanceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::PrepayInstance``.

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
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ArchitectureType: The architecture.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: The bandwidth of the instance.

        Unit: Mbit/s.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> ros_cdk_core.IResolvable:
        '''Attribute Capacity: The storage capacity of the instance.

        Unit: MB.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ChargeType: The billing method of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionDomain: Connection domain of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> ros_cdk_core.IResolvable:
        '''Attribute Connections: The maximum number of connections supported by the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute DirectConnectionPort: The direct connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute DirectConnectionString: The direct connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute EngineVersion: The engine version of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> ros_cdk_core.IResolvable:
        '''Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceClass: Redis instance type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance id of created redis instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceName: Name of created redis instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceType: The engine type of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkType: The network type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NodeType: The type of node.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PackageType: The plan type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: Port of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateIp: The internal IP address of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionPort: The public connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: The public connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> ros_cdk_core.IResolvable:
        '''Attribute QPS: The queries per second (QPS) supported by the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: The ID of the zone.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.PrepayInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "auto_renew_duration": "autoRenewDuration",
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "connections": "connections",
        "deletion_force": "deletionForce",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
        "product_type": "productType",
        "security_group_id": "securityGroupId",
        "ssl_enabled": "sslEnabled",
        "tags": "tags",
        "vpc_id": "vpcId",
        "vpc_password_free": "vpcPasswordFree",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class PrepayInstanceProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]] = None,
        capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        connections: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ConnectionsProperty"]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosPrepayInstance.TagsProperty"]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::PrepayInstance``.

        :param auto_pay: Property autoPay: Indicates whether automatic payment is enabled. Valid values: false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made. Default is False
        :param auto_renew_duration: Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. When the instance is about to expire, the instance is automatically renewed based on the number of months specified by this parameter. Note This parameter is valid only when ChargeType is set to PrePaid.
        :param backup_policy: Property backupPolicy: Backup policy.
        :param capacity: Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        :param connections: Property connections: Connection address.
        :param deletion_force: Property deletionForce: Whether destroy instance when it is in recycle. Default is false
        :param engine_version: Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        :param eviction_policy: Property evictionPolicy: The eviction policy of cache data storage.
        :param instance_class: Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        :param instance_maintain_time: Property instanceMaintainTime: Instance maintain time.
        :param instance_name: Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
        :param password: Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
        :param period: Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        :param product_type: Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        :param security_group_id: Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        :param ssl_enabled: Property sslEnabled: Modifies the SSL status. Valid values: Disable: disables SSL encryption. Enable: enables SSL encryption. Update: updates the SSL certificate.
        :param tags: Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC id to create ecs instance.
        :param vpc_password_free: Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to: - true: enables password free. - false: disables password free.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create ecs instance.
        :param zone_id: Property zoneId: The zone id of input region.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if connections is not None:
            self._values["connections"] = connections
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if ssl_enabled is not None:
            self._values["ssl_enabled"] = ssl_enabled
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Indicates whether automatic payment is enabled.

        Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        Default is False
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewDuration: The auto-renewal period.

        Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]]:
        '''Property backupPolicy: Backup policy.'''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]], result)

    @builtins.property
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.'''
        result = self._values.get("capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ConnectionsProperty"]]:
        '''Property connections: Connection address.'''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ConnectionsProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether destroy instance when it is in recycle.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property engineVersion: Engine version.

        Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property evictionPolicy: The eviction policy of cache data storage.'''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceClass: Redis instance type.

        Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]]:
        '''Property instanceMaintainTime: Instance maintain time.'''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.'''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property productType: Product type.

        Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The IDs of security groups.

        Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sslEnabled: Modifies the SSL status.

        Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosPrepayInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to redis.

        Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosPrepayInstance.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC id to create ecs instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.

        If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        result = self._values.get("vpc_password_free")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The vSwitch Id to create ecs instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: The zone id of input region.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrepayInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::REDIS::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Account``.

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
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccountName: The name of the account.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The name of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        accountPassword: The password of the account. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance for which you want to create the account.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountPrivilege: The permission of the account. Valid values:
        RoleReadOnly
        RoleReadWrite (default value)
        RoleRepl
        Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        permission can be granted to an account only in an ApsaraDB for Redis instance of
        the standard edition in Redis 4.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountType: The type of the account. Set this parameter to Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "instance_id": "instanceId",
        "account_description": "accountDescription",
        "account_privilege": "accountPrivilege",
        "account_type": "accountType",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Account``.

        :param account_name: 
        :param account_password: 
        :param instance_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "instance_id": instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description
        if account_privilege is not None:
            self._values["account_privilege"] = account_privilege
        if account_type is not None:
            self._values["account_type"] = account_type

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        accountPassword: The password of the account. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance for which you want to create the account.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accountPrivilege: The permission of the account. Valid values:
        RoleReadOnly
        RoleReadWrite (default value)
        RoleRepl
        Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        permission can be granted to an account only in an ApsaraDB for Redis instance of
        the standard edition in Redis 4.0.
        '''
        result = self._values.get("account_privilege")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountType: The type of the account. Set this parameter to Normal.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::REDIS::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Instance``.

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
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ArchitectureType: The architecture.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Capacity: The storage capacity of the instance. Unit: MB.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ChargeType: The billing method of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionPort: The classic inner connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionString: The classic inner connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionDomain: Connection domain of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Connections: The maximum number of connections supported by the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DirectConnectionPort: The direct connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DirectConnectionString: The direct connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EngineVersion: The engine version of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceClass: Redis instance type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance id of created redis instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceName: Name of created redis instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceType: The engine type of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetworkType: The network type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NodeType: The type of node.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order Id of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PackageType: The plan type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: Port of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateIp: The internal IP address of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionPort: The public connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: The public connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: QPS: The queries per second (QPS) supported by the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionPort: The vpc private connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionString: The vpc private connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.BackupPolicyProperty"]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.BackupPolicyProperty"]], jsii.get(self, "backupPolicy"))

    @backup_policy.setter
    def backup_policy(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.BackupPolicyProperty"]],
    ) -> None:
        jsii.set(self, "backupPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="capacity")
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "capacity"))

    @capacity.setter
    def capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "capacity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the ApsaraDB for Redis instance. Valid values:
        PrePaid: subscription.
        PostPaid: pay-as-you-go.
        Default: PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connections")
    def connections(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ConnectionsProperty"]]:
        '''
        :Property: connections: Connection address
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ConnectionsProperty"]], jsii.get(self, "connections"))

    @connections.setter
    def connections(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ConnectionsProperty"]],
    ) -> None:
        jsii.set(self, "connections", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="evictionPolicy")
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "evictionPolicy"))

    @eviction_policy.setter
    def eviction_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "evictionPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceMaintainTime")
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]], jsii.get(self, "instanceMaintainTime"))

    @instance_maintain_time.setter
    def instance_maintain_time(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]],
    ) -> None:
        jsii.set(self, "instanceMaintainTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "productType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sslEnabled"))

    @ssl_enabled.setter
    def ssl_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sslEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcPasswordFree")
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "vpcPasswordFree"))

    @vpc_password_free.setter
    def vpc_password_free(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
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
        :Property: zoneId: The zone id of input region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty",
        jsii_struct_bases=[],
        name_mapping={
            "preferred_backup_period": "preferredBackupPeriod",
            "preferred_backup_time": "preferredBackupTime",
            "enable_backup_log": "enableBackupLog",
        },
    )
    class BackupPolicyProperty:
        def __init__(
            self,
            *,
            preferred_backup_period: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            preferred_backup_time: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            enable_backup_log: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            '''
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def preferred_backup_time(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            '''
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def enable_backup_log(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            '''
            result = self._values.get("enable_backup_log")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupPolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class ClassicInnerConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ClassicInnerConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "classic_inner_connection": "classicInnerConnection",
            "direct_connection": "directConnection",
            "public_connection": "publicConnection",
            "vpc_private_connection": "vpcPrivateConnection",
        },
    )
    class ConnectionsProperty:
        def __init__(
            self,
            *,
            classic_inner_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ClassicInnerConnectionProperty"]] = None,
            direct_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DirectConnectionProperty"]] = None,
            public_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.PublicConnectionProperty"]] = None,
            vpc_private_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.VpcPrivateConnectionProperty"]] = None,
        ) -> None:
            '''
            :param classic_inner_connection: 
            :param direct_connection: 
            :param public_connection: 
            :param vpc_private_connection: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if classic_inner_connection is not None:
                self._values["classic_inner_connection"] = classic_inner_connection
            if direct_connection is not None:
                self._values["direct_connection"] = direct_connection
            if public_connection is not None:
                self._values["public_connection"] = public_connection
            if vpc_private_connection is not None:
                self._values["vpc_private_connection"] = vpc_private_connection

        @builtins.property
        def classic_inner_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ClassicInnerConnectionProperty"]]:
            '''
            :Property: classicInnerConnection: Classic intranet address.
            '''
            result = self._values.get("classic_inner_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ClassicInnerConnectionProperty"]], result)

        @builtins.property
        def direct_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DirectConnectionProperty"]]:
            '''
            :Property:

            directConnection: Direct connection address. The instance is a cluster instance.
            You can apply for a direct connection endpoint as required.
            '''
            result = self._values.get("direct_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DirectConnectionProperty"]], result)

        @builtins.property
        def public_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.PublicConnectionProperty"]]:
            '''
            :Property: publicConnection: Public address.
            '''
            result = self._values.get("public_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.PublicConnectionProperty"]], result)

        @builtins.property
        def vpc_private_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.VpcPrivateConnectionProperty"]]:
            '''
            :Property: vpcPrivateConnection: Vpc intranet address.
            '''
            result = self._values.get("vpc_private_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.VpcPrivateConnectionProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConnectionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class DirectConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DirectConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "maintain_end_time": "maintainEndTime",
            "maintain_start_time": "maintainStartTime",
        },
    )
    class InstanceMaintainTimeProperty:
        def __init__(
            self,
            *,
            maintain_end_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            maintain_start_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param maintain_end_time: 
            :param maintain_start_time: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if maintain_end_time is not None:
                self._values["maintain_end_time"] = maintain_end_time
            if maintain_start_time is not None:
                self._values["maintain_start_time"] = maintain_start_time

        @builtins.property
        def maintain_end_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            maintainEndTime: The end time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            you must set this parameter to 18:00Z.
            '''
            result = self._values.get("maintain_end_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def maintain_start_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            maintainStartTime: The start time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            you must set this parameter to 17:00Z.
            '''
            result = self._values.get("maintain_start_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceMaintainTimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class PublicConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PublicConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class VpcPrivateConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcPrivateConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_renew_duration": "autoRenewDuration",
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "connections": "connections",
        "deletion_force": "deletionForce",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
        "product_type": "productType",
        "security_group_id": "securityGroupId",
        "ssl_enabled": "sslEnabled",
        "tags": "tags",
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
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.BackupPolicyProperty]] = None,
        capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connections: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.ConnectionsProperty]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceMaintainTimeProperty]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosInstance.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Instance``.

        :param auto_renew_duration: 
        :param backup_policy: 
        :param capacity: 
        :param charge_type: 
        :param connections: 
        :param deletion_force: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param period: 
        :param product_type: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if connections is not None:
            self._values["connections"] = connections
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if ssl_enabled is not None:
            self._values["ssl_enabled"] = ssl_enabled
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.BackupPolicyProperty]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.BackupPolicyProperty]], result)

    @builtins.property
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        '''
        result = self._values.get("capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the ApsaraDB for Redis instance. Valid values:
        PrePaid: subscription.
        PostPaid: pay-as-you-go.
        Default: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.ConnectionsProperty]]:
        '''
        :Property: connections: Connection address
        '''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.ConnectionsProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceMaintainTimeProperty]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceMaintainTimeProperty]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        result = self._values.get("vpc_password_free")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: The zone id of input region.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrepayInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance",
):
    '''A ROS template type:  ``ALIYUN::REDIS::PrepayInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPrepayInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::PrepayInstance``.

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
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ArchitectureType: The architecture.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Capacity: The storage capacity of the instance. Unit: MB.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ChargeType: The billing method of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionPort: The classic inner connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionString: The classic inner connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionDomain: Connection domain of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Connections: The maximum number of connections supported by the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DirectConnectionPort: The direct connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DirectConnectionString: The direct connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EngineVersion: The engine version of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceClass: Redis instance type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance id of created redis instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceName: Name of created redis instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceType: The engine type of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetworkType: The network type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NodeType: The type of node.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order Id of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PackageType: The plan type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: Port of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateIp: The internal IP address of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionPort: The public connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: The public connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: QPS: The queries per second (QPS) supported by the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionPort: The vpc private connection port of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionString: The vpc private connection string of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        Default is False
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]], jsii.get(self, "backupPolicy"))

    @backup_policy.setter
    def backup_policy(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]],
    ) -> None:
        jsii.set(self, "backupPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="capacity")
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "capacity"))

    @capacity.setter
    def capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "capacity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connections")
    def connections(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ConnectionsProperty"]]:
        '''
        :Property: connections: Connection address
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ConnectionsProperty"]], jsii.get(self, "connections"))

    @connections.setter
    def connections(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ConnectionsProperty"]],
    ) -> None:
        jsii.set(self, "connections", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="evictionPolicy")
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "evictionPolicy"))

    @eviction_policy.setter
    def eviction_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "evictionPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceMaintainTime")
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]], jsii.get(self, "instanceMaintainTime"))

    @instance_maintain_time.setter
    def instance_maintain_time(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]],
    ) -> None:
        jsii.set(self, "instanceMaintainTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "productType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sslEnabled"))

    @ssl_enabled.setter
    def ssl_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sslEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosPrepayInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosPrepayInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosPrepayInstance.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcPasswordFree")
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "vpcPasswordFree"))

    @vpc_password_free.setter
    def vpc_password_free(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
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
        :Property: zoneId: The zone id of input region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.BackupPolicyProperty",
        jsii_struct_bases=[],
        name_mapping={
            "preferred_backup_period": "preferredBackupPeriod",
            "preferred_backup_time": "preferredBackupTime",
            "enable_backup_log": "enableBackupLog",
        },
    )
    class BackupPolicyProperty:
        def __init__(
            self,
            *,
            preferred_backup_period: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            preferred_backup_time: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            enable_backup_log: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            '''
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def preferred_backup_time(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            '''
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def enable_backup_log(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            '''
            result = self._values.get("enable_backup_log")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupPolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.ClassicInnerConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class ClassicInnerConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ClassicInnerConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.ConnectionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "classic_inner_connection": "classicInnerConnection",
            "direct_connection": "directConnection",
            "public_connection": "publicConnection",
            "vpc_private_connection": "vpcPrivateConnection",
        },
    )
    class ConnectionsProperty:
        def __init__(
            self,
            *,
            classic_inner_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ClassicInnerConnectionProperty"]] = None,
            direct_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.DirectConnectionProperty"]] = None,
            public_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.PublicConnectionProperty"]] = None,
            vpc_private_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.VpcPrivateConnectionProperty"]] = None,
        ) -> None:
            '''
            :param classic_inner_connection: 
            :param direct_connection: 
            :param public_connection: 
            :param vpc_private_connection: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if classic_inner_connection is not None:
                self._values["classic_inner_connection"] = classic_inner_connection
            if direct_connection is not None:
                self._values["direct_connection"] = direct_connection
            if public_connection is not None:
                self._values["public_connection"] = public_connection
            if vpc_private_connection is not None:
                self._values["vpc_private_connection"] = vpc_private_connection

        @builtins.property
        def classic_inner_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ClassicInnerConnectionProperty"]]:
            '''
            :Property: classicInnerConnection: Classic intranet address.
            '''
            result = self._values.get("classic_inner_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.ClassicInnerConnectionProperty"]], result)

        @builtins.property
        def direct_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.DirectConnectionProperty"]]:
            '''
            :Property:

            directConnection: Direct connection address. The instance is a cluster instance.
            You can apply for a direct connection endpoint as required.
            '''
            result = self._values.get("direct_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.DirectConnectionProperty"]], result)

        @builtins.property
        def public_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.PublicConnectionProperty"]]:
            '''
            :Property: publicConnection: Public address.
            '''
            result = self._values.get("public_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.PublicConnectionProperty"]], result)

        @builtins.property
        def vpc_private_connection(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.VpcPrivateConnectionProperty"]]:
            '''
            :Property: vpcPrivateConnection: Vpc intranet address.
            '''
            result = self._values.get("vpc_private_connection")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.VpcPrivateConnectionProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConnectionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.DirectConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class DirectConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DirectConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.InstanceMaintainTimeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "maintain_end_time": "maintainEndTime",
            "maintain_start_time": "maintainStartTime",
        },
    )
    class InstanceMaintainTimeProperty:
        def __init__(
            self,
            *,
            maintain_end_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            maintain_start_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param maintain_end_time: 
            :param maintain_start_time: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if maintain_end_time is not None:
                self._values["maintain_end_time"] = maintain_end_time
            if maintain_start_time is not None:
                self._values["maintain_start_time"] = maintain_start_time

        @builtins.property
        def maintain_end_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            maintainEndTime: The end time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            you must set this parameter to 18:00Z.
            '''
            result = self._values.get("maintain_end_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def maintain_start_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            maintainStartTime: The start time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            you must set this parameter to 17:00Z.
            '''
            result = self._values.get("maintain_start_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceMaintainTimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.PublicConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class PublicConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PublicConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.VpcPrivateConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connection_port": "connectionPort",
            "connection_string": "connectionString",
        },
    )
    class VpcPrivateConnectionProperty:
        def __init__(
            self,
            *,
            connection_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            connection_string: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcPrivateConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "auto_renew_duration": "autoRenewDuration",
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "connections": "connections",
        "deletion_force": "deletionForce",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
        "product_type": "productType",
        "security_group_id": "securityGroupId",
        "ssl_enabled": "sslEnabled",
        "tags": "tags",
        "vpc_id": "vpcId",
        "vpc_password_free": "vpcPasswordFree",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosPrepayInstanceProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.BackupPolicyProperty]] = None,
        capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        connections: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.ConnectionsProperty]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosPrepayInstance.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::PrepayInstance``.

        :param auto_pay: 
        :param auto_renew_duration: 
        :param backup_policy: 
        :param capacity: 
        :param connections: 
        :param deletion_force: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param period: 
        :param product_type: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if connections is not None:
            self._values["connections"] = connections
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if ssl_enabled is not None:
            self._values["ssl_enabled"] = ssl_enabled
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        Default is False
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.BackupPolicyProperty]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.BackupPolicyProperty]], result)

    @builtins.property
    def capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        '''
        result = self._values.get("capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.ConnectionsProperty]]:
        '''
        :Property: connections: Connection address
        '''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.ConnectionsProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosPrepayInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosPrepayInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        '''
        result = self._values.get("vpc_password_free")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: The zone id of input region.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrepayInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWhitelist(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosWhitelist",
):
    '''A ROS template type:  ``ALIYUN::REDIS::Whitelist``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWhitelistProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Whitelist``.

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
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIpGroupAttribute"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityIpGroupName: Whitelist group
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIpGroupName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityIps: IP address whitelist to be modified
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: Instance ID (globally unique)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIps")
    def security_ips(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: securityIps: IP address whitelist to be modified
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "securityIps"))

    @security_ips.setter
    def security_ips(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "securityIps", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpGroupAttribute")
    def security_ip_group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityIpGroupAttribute"))

    @security_ip_group_attribute.setter
    def security_ip_group_attribute(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityIpGroupAttribute", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpGroupName")
    def security_ip_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityIpGroupName: Whitelist group
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityIpGroupName"))

    @security_ip_group_name.setter
    def security_ip_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityIpGroupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.RosWhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "security_ips": "securityIps",
        "security_ip_group_attribute": "securityIpGroupAttribute",
        "security_ip_group_name": "securityIpGroupName",
    },
)
class RosWhitelistProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_ips: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_ip_group_attribute: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Whitelist``.

        :param instance_id: 
        :param security_ips: 
        :param security_ip_group_attribute: 
        :param security_ip_group_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: Instance ID (globally unique)
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_ips(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: securityIps: IP address whitelist to be modified
        '''
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_ip_group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        result = self._values.get("security_ip_group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityIpGroupName: Whitelist group
        '''
        result = self._values.get("security_ip_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Whitelist(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.Whitelist",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::Whitelist``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WhitelistProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Whitelist``.

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
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityIpGroupAttribute: The default is empty.

        For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIpGroupAttribute"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityIpGroupName: Whitelist group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIpGroupName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityIps: IP address whitelist to be modified.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityIps"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.WhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "security_ips": "securityIps",
        "security_ip_group_attribute": "securityIpGroupAttribute",
        "security_ip_group_name": "securityIpGroupName",
    },
)
class WhitelistProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_ips: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_ip_group_attribute: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Whitelist``.

        :param instance_id: Property instanceId: Instance ID (globally unique).
        :param security_ips: Property securityIps: IP address whitelist to be modified.
        :param security_ip_group_attribute: Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        :param security_ip_group_name: Property securityIpGroupName: Whitelist group.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: Instance ID (globally unique).'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_ips(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property securityIps: IP address whitelist to be modified.'''
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_ip_group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityIpGroupAttribute: The default is empty.

        For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        result = self._values.get("security_ip_group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityIpGroupName: Whitelist group.'''
        result = self._values.get("security_ip_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountProps",
    "Instance",
    "InstanceProps",
    "PrepayInstance",
    "PrepayInstanceProps",
    "RosAccount",
    "RosAccountProps",
    "RosInstance",
    "RosInstanceProps",
    "RosPrepayInstance",
    "RosPrepayInstanceProps",
    "RosWhitelist",
    "RosWhitelistProps",
    "Whitelist",
    "WhitelistProps",
]

publication.publish()
