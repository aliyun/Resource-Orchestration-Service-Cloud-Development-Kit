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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.Account",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30228503940692e130ae5f7b6f0bfa69334e318e97aa931a86e89384034226f7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountName: The name of the account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The name of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))


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
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Account``.

        :param account_name: Property accountName: The name of the account. The name must start with a lowercase letter and can contain lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters in length.
        :param account_password: Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        :param instance_id: Property instanceId: The ID of the instance for which you want to create the account.
        :param account_description: Property accountDescription: The description of the account. The description must start with a letter, and cannot start with http:// or https://. The description can contain letters, underscores (_), hyphens (-), and digits. It can be 2 to 256 characters in length.
        :param account_privilege: Property accountPrivilege: The permission of the account. Valid values: RoleReadOnly RoleReadWrite (default value) RoleRepl Note In addition to reading data from and writing data to the ApsaraDB for Redis instance, an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl permission can be granted to an account only in an ApsaraDB for Redis instance of the standard edition in Redis 4.0.
        :param account_type: Property accountType: The type of the account. Set this parameter to Normal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81a467c6866fe2ed29ef3797311b70b90bec2b26d41c4ac332fd21b5bb54c480)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: The name of the account.

        The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPassword: The password of the account.

        The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance for which you want to create the account.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountDescription: The description of the account.

        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountType: The type of the account.

        Set this parameter to Normal.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.Instance",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d827e5f4659892a0df11246cfe9248666c2132c5965577e1460ea21e17946fb5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ArchitectureType: The architecture.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: The bandwidth of the instance.

        Unit: Mbit/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Capacity: The storage capacity of the instance.

        Unit: MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ChargeType: The billing method of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionDomain: Connection domain of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Connections: The maximum number of connections supported by the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DirectConnectionPort: The direct connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DirectConnectionString: The direct connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineVersion: The engine version of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClass: Redis instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance id of created redis instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceName: Name of created redis instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceType: The engine type of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkType: The network type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodeType: The type of node.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PackageType: The plan type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Port of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateIp: The internal IP address of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionPort: The public connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: The public connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QPS: The queries per second (QPS) supported by the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: The ID of the zone.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_renew_duration": "autoRenewDuration",
        "backup_policy": "backupPolicy",
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
        "period_unit": "periodUnit",
        "product_type": "productType",
        "resource_group_id": "resourceGroupId",
        "secondary_zone_id": "secondaryZoneId",
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
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.BackupPolicyProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.ConnectionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.InstanceMaintainTimeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Instance``.

        :param auto_renew_duration: Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. When the instance is about to expire, the instance is automatically renewed based on the number of months specified by this parameter. Note This parameter is valid only when ChargeType is set to PrePaid.
        :param backup_policy: Property backupPolicy: Backup policy.
        :param charge_type: Property chargeType: The billing method of the ApsaraDB for Redis instance.
        :param connections: Property connections: Connection address.
        :param deletion_force: Property deletionForce: Whether destroy instance when it is in recycle. Default is false
        :param engine_version: Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        :param eviction_policy: Property evictionPolicy: The eviction policy of cache data storage.
        :param instance_class: Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        :param instance_maintain_time: Property instanceMaintainTime: Instance maintain time.
        :param instance_name: Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
        :param password: Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
        :param period: Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param product_type: Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param secondary_zone_id: Property secondaryZoneId: The secondary zone ID of the instance.
        :param security_group_id: Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        :param ssl_enabled: Property sslEnabled: Modifies the SSL status. Valid values: Disable: disables SSL encryption. Enable: enables SSL encryption. Update: updates the SSL certificate.
        :param tags: Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC id to create ecs instance.
        :param vpc_password_free: Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to: - true: enables password free. - false: disables password free.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create ecs instance.
        :param zone_id: Property zoneId: The zone id of input region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f52826dfb734a2e2c4de5a2ae18973867f48ad211793a651333667e56db06406)
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument backup_policy", value=backup_policy, expected_type=type_hints["backup_policy"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument connections", value=connections, expected_type=type_hints["connections"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument eviction_policy", value=eviction_policy, expected_type=type_hints["eviction_policy"])
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_maintain_time", value=instance_maintain_time, expected_type=type_hints["instance_maintain_time"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument ssl_enabled", value=ssl_enabled, expected_type=type_hints["ssl_enabled"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vpc_password_free", value=vpc_password_free, expected_type=type_hints["vpc_password_free"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
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
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if product_type is not None:
            self._values["product_type"] = product_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
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
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewDuration: The auto-renewal period.

        Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyProperty"]]:
        '''Property backupPolicy: Backup policy.'''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyProperty"]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the ApsaraDB for Redis instance.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionsProperty"]]:
        '''Property connections: Connection address.'''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionsProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether destroy instance when it is in recycle.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: Engine version.

        Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property evictionPolicy: The eviction policy of cache data storage.'''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceClass: Redis instance type.

        Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]]:
        '''Property instanceMaintainTime: Instance maintain time.'''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.'''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productType: Product type.

        Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondaryZoneId: The secondary zone ID of the instance.'''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The IDs of security groups.

        Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sslEnabled: Modifies the SSL status.

        Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id to create ecs instance.'''
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
        '''Property vSwitchId: The vSwitch Id to create ecs instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone id of input region.'''
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


class PrepayInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.PrepayInstance",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::PrepayInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PrepayInstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b719422a3c7935ef4cfb72a2c2f8ab9ad29d6b378ca8db963232fd578a5da49)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ArchitectureType: The architecture.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: The bandwidth of the instance.

        Unit: Mbit/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Capacity: The storage capacity of the instance.

        Unit: MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ChargeType: The billing method of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionDomain: Connection domain of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Connections: The maximum number of connections supported by the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DirectConnectionPort: The direct connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DirectConnectionString: The direct connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineVersion: The engine version of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClass: Redis instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance id of created redis instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceName: Name of created redis instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceType: The engine type of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkType: The network type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodeType: The type of node.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: Order Id of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PackageType: The plan type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Port of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateIp: The internal IP address of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionPort: The public connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: The public connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QPS: The queries per second (QPS) supported by the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: The ID of the zone.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.PrepayInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "auto_renew_duration": "autoRenewDuration",
        "backup_policy": "backupPolicy",
        "connections": "connections",
        "deletion_force": "deletionForce",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "product_type": "productType",
        "resource_group_id": "resourceGroupId",
        "secondary_zone_id": "secondaryZoneId",
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
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.BackupPolicyProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.ConnectionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.InstanceMaintainTimeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosPrepayInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::PrepayInstance``.

        :param auto_pay: Property autoPay: Indicates whether automatic payment is enabled. Valid values: false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made. Default is False
        :param auto_renew_duration: Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. When the instance is about to expire, the instance is automatically renewed based on the number of months specified by this parameter. Note This parameter is valid only when ChargeType is set to PrePaid.
        :param backup_policy: Property backupPolicy: Backup policy.
        :param connections: Property connections: Connection address.
        :param deletion_force: Property deletionForce: Whether destroy instance when it is in recycle. Default is false
        :param engine_version: Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        :param eviction_policy: Property evictionPolicy: The eviction policy of cache data storage.
        :param instance_class: Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        :param instance_maintain_time: Property instanceMaintainTime: Instance maintain time.
        :param instance_name: Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
        :param password: Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
        :param period: Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param product_type: Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param secondary_zone_id: Property secondaryZoneId: The secondary zone ID of the instance.
        :param security_group_id: Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        :param ssl_enabled: Property sslEnabled: Modifies the SSL status. Valid values: Disable: disables SSL encryption. Enable: enables SSL encryption. Update: updates the SSL certificate.
        :param tags: Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC id to create ecs instance.
        :param vpc_password_free: Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to: - true: enables password free. - false: disables password free.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create ecs instance.
        :param zone_id: Property zoneId: The zone id of input region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b2c91ec27d38fad75c3919f8e3042cfe773dbc22f683bb415fe8d20e10a8158)
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument backup_policy", value=backup_policy, expected_type=type_hints["backup_policy"])
            check_type(argname="argument connections", value=connections, expected_type=type_hints["connections"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument eviction_policy", value=eviction_policy, expected_type=type_hints["eviction_policy"])
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_maintain_time", value=instance_maintain_time, expected_type=type_hints["instance_maintain_time"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument ssl_enabled", value=ssl_enabled, expected_type=type_hints["ssl_enabled"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vpc_password_free", value=vpc_password_free, expected_type=type_hints["vpc_password_free"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
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
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if product_type is not None:
            self._values["product_type"] = product_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
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
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Indicates whether automatic payment is enabled.

        Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        Default is False
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewDuration: The auto-renewal period.

        Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]]:
        '''Property backupPolicy: Backup policy.'''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ConnectionsProperty"]]:
        '''Property connections: Connection address.'''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ConnectionsProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether destroy instance when it is in recycle.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: Engine version.

        Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property evictionPolicy: The eviction policy of cache data storage.'''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceClass: Redis instance type.

        Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]]:
        '''Property instanceMaintainTime: Instance maintain time.'''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.'''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productType: Product type.

        Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondaryZoneId: The secondary zone ID of the instance.'''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The IDs of security groups.

        Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sslEnabled: Modifies the SSL status.

        Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id to create ecs instance.'''
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
        '''Property vSwitchId: The vSwitch Id to create ecs instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone id of input region.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrepayInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::REDIS::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__404bc1edb0e0a8630e8fc628754a9e9829d0ac722458d9607fd880eb6c3c69fa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__77935f1d081ffde6caa091d409de5e475b130674d7bdb3be6d4cd48ab60874fc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountName: The name of the account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The name of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b639eaede402e58a1c24632614de9acff48aa170fd3db737a2b5d9d0d4ed809d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9274a7d35dc3d5427acfa557d52621fe16a6a0fcb9500809705c1192898de2b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bab8a4eb48b68a515430c85335c9e398e259624b2bfe01e5cd644d9429938fa0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance for which you want to create the account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bea617241787a34cd8cbf0d12b5b0c07cd766ce2a357a3ca1894cf1e15fe5ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3836fce1d4694f8a0750884fb0c040876f58430ca53f0f2b3f6dc16734762771)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountDescription", value)

    @builtins.property
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountPrivilege"))

    @account_privilege.setter
    def account_privilege(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0ab9bb00397e59ad0e6182768f51af8f49122e7081376b74d817243bb703e0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPrivilege", value)

    @builtins.property
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountType: The type of the account. Set this parameter to Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1ec891164888ea374f20ad6e639e7bb8c7bcc9bde7eea0d1d0f472157881443)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Account``.

        :param account_name: 
        :param account_password: 
        :param instance_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a18c935aa6b12345de1e168402b266e9d428e9a3b513dc2b196903e3fe83d7a)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
            check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance for which you want to create the account.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_privilege(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountType: The type of the account. Set this parameter to Normal.
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::REDIS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fc36d99c0f78d783f6507aec31957572c4f8e955c251c7ff33ddaab7a3a9205)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a966bc2dc2628e2f61e302f939a904a5c79dd0cec1d8e1c92db43f17ee880893)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ArchitectureType: The architecture.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Capacity: The storage capacity of the instance. Unit: MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChargeType: The billing method of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionPort: The classic inner connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionString: The classic inner connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionDomain: Connection domain of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Connections: The maximum number of connections supported by the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectConnectionPort: The direct connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectConnectionString: The direct connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: The engine version of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClass: Redis instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance id of created redis instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: Name of created redis instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: The engine type of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkType: The network type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeType: The type of node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Order Id of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PackageType: The plan type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Port of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateIp: The internal IP address of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionPort: The public connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: The public connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QPS: The queries per second (QPS) supported by the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionPort: The vpc private connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionString: The vpc private connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__06d81c89392fecf5b0dacf4cf4fa0dd9b7ed0a9c514e2ea1e8aea4108906ab65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a75cd45489e91278f50b8f146b47e404c6ff50cfc1d3749f2bba7dfb2cc7c2ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyProperty"]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyProperty"]], jsii.get(self, "backupPolicy"))

    @backup_policy.setter
    def backup_policy(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupPolicyProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62f01d5be8f80d2593501a1767e7bb104e07215a5bb07038fb71feafa5bc4fb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the ApsaraDB for Redis instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f539201509e3ebcacdafbfea29c854b74f8984101ddfb4009c2af92d906a779f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="connections")
    def connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionsProperty"]]:
        '''
        :Property: connections: Connection address
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionsProperty"]], jsii.get(self, "connections"))

    @connections.setter
    def connections(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f80fa4ccb99b367ae6cc6eea6909358a13025a6d6ceb4cb6eac8d613625472b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connections", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe3782dbb9fadcce10dd8535043d9af126a2fe6a8b5325e7ee80f3d2fb24534c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46ae6810fd133e4e992336f3663e3f39998e81c259ee6b39052428ca164ed8af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="evictionPolicy")
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "evictionPolicy"))

    @eviction_policy.setter
    def eviction_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b9697956609b2541408243ca9163c3853132484989ba8bc2d2ee58b61d544b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "evictionPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb72701e928bb92379898f39efd7cfe79c81cc843d84be669c19ffb22033a141)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="instanceMaintainTime")
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]], jsii.get(self, "instanceMaintainTime"))

    @instance_maintain_time.setter
    def instance_maintain_time(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ecdd15efafc7b57fb840a2df14d51292ed37b40fc0d6c10ff34c19db52d7de6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceMaintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ca219f4c4d0f0e3145d52578ef445c72df561f9fd8a070c0a14815e6ed55bbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f0711862a9c3e601184c190158d30ef527b7f5a283449f12027caae0d78f55f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fb17eb72e6ac098a3b45b43ff3267ea16f1e8c7f32af791a1371de1ea9581a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a5e697253d6049f8d8c5dc952bfcea58e5499da919cc1315e03361b1333c3a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42e26391a1b4332ba3ac5de98f32a46e0620b103a0a8f0182936878d1518ef69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fcdcbaef0bf9ef91c22532f4d30912e3dd122817c1358a80c1c2622b31e053e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryZoneId")
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryZoneId: The secondary zone ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondaryZoneId"))

    @secondary_zone_id.setter
    def secondary_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__094a33ff6782ac577bc0e5c3f3267ea49b4a023ee045b7903c7cee3aae7323ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9013eaa5948fdc4a9c4d282261f49dfcc685319296949c4909e1f5294868c10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sslEnabled"))

    @ssl_enabled.setter
    def ssl_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1843091f271da25de298903bda719814014cf306b8446547c0cc5be0518c976)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslEnabled", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dfb4c1fac215b2a3591dd410de1547c28ca27a22a6e49fb6e108ad0d461cb56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88e1b077252af0992fa3fab70e9d5e9240ec31d4bd84bad8a18f14eb772f8904)
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
            type_hints = typing.get_type_hints(_typecheckingstub__055709a20593973503ce293be84156cb7bc9f158b26ef97d85e3deaca3690bae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4bc33a2109433a76d4f1f4973dd42fb1e7e86fb13b52e0843561f97b2e7bfe0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone id of input region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bb09dad64ae3eacd53acd5616b173a4140a3cbb1b974122e71103c2f14ba20d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_backup_log: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__15bc3e875637b249cce689de1ea31d023801b978868794b65e8303fbcdb33e2b)
                check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
                check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
                check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            '''
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def preferred_backup_time(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            '''
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_backup_log(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            '''
            result = self._values.get("enable_backup_log")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1e678f3a019a3889aeb27399507086b9331eeffce6e2543116985080a3d1bfef)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            classic_inner_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.ClassicInnerConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            direct_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.DirectConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            public_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.PublicConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            vpc_private_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.VpcPrivateConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param classic_inner_connection: 
            :param direct_connection: 
            :param public_connection: 
            :param vpc_private_connection: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__daee76eb1f226b69da066b950f16ec373a892f98f32ff8d16b1e121bafe313db)
                check_type(argname="argument classic_inner_connection", value=classic_inner_connection, expected_type=type_hints["classic_inner_connection"])
                check_type(argname="argument direct_connection", value=direct_connection, expected_type=type_hints["direct_connection"])
                check_type(argname="argument public_connection", value=public_connection, expected_type=type_hints["public_connection"])
                check_type(argname="argument vpc_private_connection", value=vpc_private_connection, expected_type=type_hints["vpc_private_connection"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ClassicInnerConnectionProperty"]]:
            '''
            :Property: classicInnerConnection: Classic intranet address.
            '''
            result = self._values.get("classic_inner_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ClassicInnerConnectionProperty"]], result)

        @builtins.property
        def direct_connection(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DirectConnectionProperty"]]:
            '''
            :Property:

            directConnection: Direct connection address. The instance is a cluster instance.
            You can apply for a direct connection endpoint as required.
            '''
            result = self._values.get("direct_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DirectConnectionProperty"]], result)

        @builtins.property
        def public_connection(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PublicConnectionProperty"]]:
            '''
            :Property: publicConnection: Public address.
            '''
            result = self._values.get("public_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PublicConnectionProperty"]], result)

        @builtins.property
        def vpc_private_connection(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcPrivateConnectionProperty"]]:
            '''
            :Property: vpcPrivateConnection: Vpc intranet address.
            '''
            result = self._values.get("vpc_private_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcPrivateConnectionProperty"]], result)

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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a5ab4efe23ed6fbdf4493f1cd1d56838fcac08d5218f81240da7d18613a66a58)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            maintain_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            maintain_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param maintain_end_time: 
            :param maintain_start_time: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4eda14c28bb8837b338ffac05ee4e6f4f12370063391511cef9dd73a03b1f4fd)
                check_type(argname="argument maintain_end_time", value=maintain_end_time, expected_type=type_hints["maintain_end_time"])
                check_type(argname="argument maintain_start_time", value=maintain_start_time, expected_type=type_hints["maintain_start_time"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if maintain_end_time is not None:
                self._values["maintain_end_time"] = maintain_end_time
            if maintain_start_time is not None:
                self._values["maintain_start_time"] = maintain_start_time

        @builtins.property
        def maintain_end_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maintainEndTime: The end time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            you must set this parameter to 18:00Z.
            '''
            result = self._values.get("maintain_end_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def maintain_start_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maintainStartTime: The start time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            you must set this parameter to 17:00Z.
            '''
            result = self._values.get("maintain_start_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c0654cea1c259e41b0e94fa93a24d284ebb9d497641c531ce53a70e961280bf9)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f41e50563b7b2a4185fb354c6f7af4fa17272391a07c481e13abdaa08c3d3053)
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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d7592512f6705e4350e0a3962b83e0df65eeaeca0608a17c6b310c6908537343)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        "period_unit": "periodUnit",
        "product_type": "productType",
        "resource_group_id": "resourceGroupId",
        "secondary_zone_id": "secondaryZoneId",
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
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupPolicyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.InstanceMaintainTimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Instance``.

        :param auto_renew_duration: 
        :param backup_policy: 
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
        :param period_unit: 
        :param product_type: 
        :param resource_group_id: 
        :param secondary_zone_id: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb6eed2b3edbd513ef37fab64322c3663e8b77d30395d0a26d99caae7a5981a9)
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument backup_policy", value=backup_policy, expected_type=type_hints["backup_policy"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument connections", value=connections, expected_type=type_hints["connections"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument eviction_policy", value=eviction_policy, expected_type=type_hints["eviction_policy"])
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_maintain_time", value=instance_maintain_time, expected_type=type_hints["instance_maintain_time"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument ssl_enabled", value=ssl_enabled, expected_type=type_hints["ssl_enabled"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vpc_password_free", value=vpc_password_free, expected_type=type_hints["vpc_password_free"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
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
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if product_type is not None:
            self._values["product_type"] = product_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
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
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupPolicyProperty]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupPolicyProperty]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the ApsaraDB for Redis instance.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ConnectionsProperty]]:
        '''
        :Property: connections: Connection address
        '''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ConnectionsProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.InstanceMaintainTimeProperty]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.InstanceMaintainTimeProperty]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryZoneId: The secondary zone ID of the instance.
        '''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
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
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone id of input region.
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


class RosPrepayInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance",
):
    '''A ROS template type:  ``ALIYUN::REDIS::PrepayInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrepayInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::PrepayInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18f22ae38ba15fbc627ceaeb86a629794883572b1e93ced86f82a43fb87d3a01)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3799a00a076004c8f67b9736b93c43c61df051ba8136b0e20848530fe236f748)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ArchitectureType: The architecture.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Capacity: The storage capacity of the instance. Unit: MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChargeType: The billing method of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionPort")
    def attr_classic_inner_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionPort: The classic inner connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicInnerConnectionString")
    def attr_classic_inner_connection_string(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClassicInnerConnectionString: The classic inner connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicInnerConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionDomain: Connection domain of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnections")
    def attr_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Connections: The maximum number of connections supported by the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionPort")
    def attr_direct_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectConnectionPort: The direct connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectConnectionString")
    def attr_direct_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectConnectionString: The direct connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: The engine version of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClass: Redis instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance id of created redis instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: Name of created redis instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: The engine type of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkType: The network type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeType: The type of node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Order Id of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PackageType: The plan type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Port of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateIp: The internal IP address of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionPort")
    def attr_public_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionPort: The public connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: The public connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QPS: The queries per second (QPS) supported by the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionPort")
    def attr_vpc_private_connection_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionPort: The vpc private connection port of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionPort"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcPrivateConnectionString")
    def attr_vpc_private_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcPrivateConnectionString: The vpc private connection string of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcPrivateConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__24fe84cc3c9dd9e0b6adcbdda68303f0828ad4d56f1433577068d7a178fd8f82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        Default is False
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03212918ae507c4234ee2002ce0433a667129fa9ccf82c7ecaaf7b43b5caeb5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ac3835d2e8b3d2b687993a2c1574af8fb411bbdb750c745c8941e848fc2f8d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]], jsii.get(self, "backupPolicy"))

    @backup_policy.setter
    def backup_policy(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19fd4444ac658de3a2725c749c5ebfa533d65335348b29915a4b7eed6bbaadb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="connections")
    def connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ConnectionsProperty"]]:
        '''
        :Property: connections: Connection address
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ConnectionsProperty"]], jsii.get(self, "connections"))

    @connections.setter
    def connections(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ConnectionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__846518f1128b168c4f2432f5fb5840001939b813ab1d94f088f1a139a55bc1b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connections", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__101b0ec6946d1a26590d397392c07a081aa602871011a851ee8485c981f6c620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b55411805d5b1b06a7a989513bfad882b232f74f68f3f742583d558ad04c684f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="evictionPolicy")
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "evictionPolicy"))

    @eviction_policy.setter
    def eviction_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec27b39ab31b2a5e3b40bc9fbe389f8c3032d7511cb32b9e5c58be3ff42b361e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "evictionPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f65a3b2d942c4128433d60917dd31ada8aba3bd01639a012d7ef5b51f8bac47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="instanceMaintainTime")
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]], jsii.get(self, "instanceMaintainTime"))

    @instance_maintain_time.setter
    def instance_maintain_time(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3aab0822b7a77257a0f1122b1d90d893bc58425ae89e56069486ef4ee796e52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceMaintainTime", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3f91c8b0511a8723a88b96613127a313474c128ba37b871ae62acd8affe93e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2473a488b0d6d8b158daf30aa0c4a4f7affd867c24a98b518538d391b3e3bc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cca0454c0e93ff85bf31939c3d335567cc9477f81898509e1120cb4499154221)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a30787c41545e477e336bc51ee5495dc83474956f608586519882b88828708b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6ee07659a486325b7554372f1cedb018a6c20efdac7134f53026396f114e93b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab4ed6b7a4d033e4b1a363889b6f595324f54551acc73a7447313cd8ee5a2e1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryZoneId")
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryZoneId: The secondary zone ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondaryZoneId"))

    @secondary_zone_id.setter
    def secondary_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b239bf82dd5cfe829b8f9487afd19e9e840b6b47f15e6e9bc89339fe5f12530)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1e561379802ccde5396bcfa43c7b888eb82aa97bc195248d29d4b19ef64349e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sslEnabled"))

    @ssl_enabled.setter
    def ssl_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31f61f57342109274cf3cbad1e7226fd890bcc86c848bea804fb746f4fd9d3af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sslEnabled", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0db10b5df161c11ad1a4bed6ec4f8772cf68243a46427104c189e8e02d7a937)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90ab272d1d29bf89f2924560f8ead748c3324273196f8d4f7a712f0f1075b38d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__72b66b9d5134a89e1dde0e894ec81ef9a87aea7793f194963af61ebc476c90ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25d3b2fc6a0503ba5b5eb1ca95da4efad14c3f45f761bde5afe416c6c8271bef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone id of input region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82a4e95e7ee8423a33449abea895f85b5c7b1d39b372d029ec15bbf48af87cba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_backup_log: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__df483a4a46b9c0b7734d91e77cef34ff558f48a36b0e9f01e6f0b70a5135688d)
                check_type(argname="argument preferred_backup_period", value=preferred_backup_period, expected_type=type_hints["preferred_backup_period"])
                check_type(argname="argument preferred_backup_time", value=preferred_backup_time, expected_type=type_hints["preferred_backup_time"])
                check_type(argname="argument enable_backup_log", value=enable_backup_log, expected_type=type_hints["enable_backup_log"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            '''
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def preferred_backup_time(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            '''
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_backup_log(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            '''
            result = self._values.get("enable_backup_log")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__398671ece7c8c9b38bdcaf710f1b26a2bceb09171041366799dee0c2f9740779)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            classic_inner_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.ClassicInnerConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            direct_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.DirectConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            public_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.PublicConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            vpc_private_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPrepayInstance.VpcPrivateConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param classic_inner_connection: 
            :param direct_connection: 
            :param public_connection: 
            :param vpc_private_connection: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__98966963938a8124d3bfeecfbbace11297289bea59f9dc4cfb4a4b43b26179c6)
                check_type(argname="argument classic_inner_connection", value=classic_inner_connection, expected_type=type_hints["classic_inner_connection"])
                check_type(argname="argument direct_connection", value=direct_connection, expected_type=type_hints["direct_connection"])
                check_type(argname="argument public_connection", value=public_connection, expected_type=type_hints["public_connection"])
                check_type(argname="argument vpc_private_connection", value=vpc_private_connection, expected_type=type_hints["vpc_private_connection"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ClassicInnerConnectionProperty"]]:
            '''
            :Property: classicInnerConnection: Classic intranet address.
            '''
            result = self._values.get("classic_inner_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.ClassicInnerConnectionProperty"]], result)

        @builtins.property
        def direct_connection(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.DirectConnectionProperty"]]:
            '''
            :Property:

            directConnection: Direct connection address. The instance is a cluster instance.
            You can apply for a direct connection endpoint as required.
            '''
            result = self._values.get("direct_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.DirectConnectionProperty"]], result)

        @builtins.property
        def public_connection(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.PublicConnectionProperty"]]:
            '''
            :Property: publicConnection: Public address.
            '''
            result = self._values.get("public_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.PublicConnectionProperty"]], result)

        @builtins.property
        def vpc_private_connection(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.VpcPrivateConnectionProperty"]]:
            '''
            :Property: vpcPrivateConnection: Vpc intranet address.
            '''
            result = self._values.get("vpc_private_connection")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPrepayInstance.VpcPrivateConnectionProperty"]], result)

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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__77eae43d8eebd31f45f0e69031aef501170b7fe89b4c1f4120ee25899058469c)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            maintain_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            maintain_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param maintain_end_time: 
            :param maintain_start_time: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__892503c45611fda7a782dc63d88494c1772cfa2b172aa920320a5e538ff45b54)
                check_type(argname="argument maintain_end_time", value=maintain_end_time, expected_type=type_hints["maintain_end_time"])
                check_type(argname="argument maintain_start_time", value=maintain_start_time, expected_type=type_hints["maintain_start_time"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if maintain_end_time is not None:
                self._values["maintain_end_time"] = maintain_end_time
            if maintain_start_time is not None:
                self._values["maintain_start_time"] = maintain_start_time

        @builtins.property
        def maintain_end_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maintainEndTime: The end time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            you must set this parameter to 18:00Z.
            '''
            result = self._values.get("maintain_end_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def maintain_start_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maintainStartTime: The start time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            you must set this parameter to 17:00Z.
            '''
            result = self._values.get("maintain_start_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d350f763c9b7baad67901ed23c9b7af77c32e9ee8ddb1054e58f009613017e2a)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1704b01db4b82c1fb3e14d2987eedc8a7cc0b9670c6d86dae986d96a410d90e9)
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
            connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param connection_port: 
            :param connection_string: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e09b8ede9e9037dc92cc735df30c6409ab7e39eefc0e60ddeb7feac25e2bd9bf)
                check_type(argname="argument connection_port", value=connection_port, expected_type=type_hints["connection_port"])
                check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connection_port": connection_port,
                "connection_string": connection_string,
            }

        @builtins.property
        def connection_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            '''
            result = self._values.get("connection_port")
            assert result is not None, "Required property 'connection_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def connection_string(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionString: The prefix of the public endpoint.
            The prefix must be 8 to 64 characters in length,
            and can contain lowercase letters and digits.
            It must start with a lowercase letter.
            '''
            result = self._values.get("connection_string")
            assert result is not None, "Required property 'connection_string' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        "connections": "connections",
        "deletion_force": "deletionForce",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "product_type": "productType",
        "resource_group_id": "resourceGroupId",
        "secondary_zone_id": "secondaryZoneId",
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
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.BackupPolicyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.ConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.InstanceMaintainTimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosPrepayInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::PrepayInstance``.

        :param auto_pay: 
        :param auto_renew_duration: 
        :param backup_policy: 
        :param connections: 
        :param deletion_force: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param period: 
        :param period_unit: 
        :param product_type: 
        :param resource_group_id: 
        :param secondary_zone_id: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dc6ca651df78e9cd7326daad88a85a2b08d2152f1b4a48f01c26ba841f4f3d4)
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument backup_policy", value=backup_policy, expected_type=type_hints["backup_policy"])
            check_type(argname="argument connections", value=connections, expected_type=type_hints["connections"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument eviction_policy", value=eviction_policy, expected_type=type_hints["eviction_policy"])
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_maintain_time", value=instance_maintain_time, expected_type=type_hints["instance_maintain_time"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secondary_zone_id", value=secondary_zone_id, expected_type=type_hints["secondary_zone_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument ssl_enabled", value=ssl_enabled, expected_type=type_hints["ssl_enabled"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vpc_password_free", value=vpc_password_free, expected_type=type_hints["vpc_password_free"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
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
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if product_type is not None:
            self._values["product_type"] = product_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secondary_zone_id is not None:
            self._values["secondary_zone_id"] = secondary_zone_id
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
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        Default is False
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        When the instance is about to expire, the instance is automatically renewed
        based on the number of months specified by this parameter.
        Note This parameter is valid only when ChargeType is set to PrePaid.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.BackupPolicyProperty]]:
        '''
        :Property: backupPolicy: Backup policy
        '''
        result = self._values.get("backup_policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.BackupPolicyProperty]], result)

    @builtins.property
    def connections(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.ConnectionsProperty]]:
        '''
        :Property: connections: Connection address
        '''
        result = self._values.get("connections")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.ConnectionsProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether destroy instance when it is in recycle. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eviction_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evictionPolicy: The eviction policy of cache data storage.
        '''
        result = self._values.get("eviction_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]]:
        '''
        :Property: instanceMaintainTime: Instance maintain time.
        '''
        result = self._values.get("instance_maintain_time")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryZoneId: The secondary zone ID of the instance.
        '''
        result = self._values.get("secondary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssl_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        '''
        result = self._values.get("ssl_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create ecs instance.
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
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone id of input region.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrepayInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWhitelist(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.RosWhitelist",
):
    '''A ROS template type:  ``ALIYUN::REDIS::Whitelist``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWhitelistProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::REDIS::Whitelist``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2167ce3bd66f49ac3830dd2689398187baeb5aca0db24db970ce0964feef8df)
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
            type_hints = typing.get_type_hints(_typecheckingstub__405cf7eba213e5d74c81d0c5da8c0616e90042a365c5e8bf1679d6ce83b3f53b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupAttribute"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpGroupName: Whitelist group
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIps: IP address whitelist to be modified
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5fce33159cd36ab5f9cd640521567613f0504d9b871ce83e0d74a0abffb03d1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Instance ID (globally unique)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6925cd8d38b79c9e97f84819092b15fe5534143eb8cfcf4086e0abf726d7f87a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIps")
    def security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityIps: IP address whitelist to be modified
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityIps"))

    @security_ips.setter
    def security_ips(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5e6065fa5488928d6557121d44d91ff48df0b9dd3ac5a6e73454c9b1b4f5920)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIps", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpGroupAttribute")
    def security_ip_group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpGroupAttribute"))

    @security_ip_group_attribute.setter
    def security_ip_group_attribute(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fd5db1d3515c145d21e784e24c0391d84121d481ec01c1bea97e664ad482dea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpGroupAttribute", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpGroupName")
    def security_ip_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpGroupName: Whitelist group
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpGroupName"))

    @security_ip_group_name.setter
    def security_ip_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9453896e45210711ec7660385bbff5ad720c1697710b0da468234ecde4a9ea82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ip_group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Whitelist``.

        :param instance_id: 
        :param security_ips: 
        :param security_ip_group_attribute: 
        :param security_ip_group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9837e3e651e8f1ba88d61cea57f0722e1e47a264f509dc1f8be520f327e175ee)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument security_ips", value=security_ips, expected_type=type_hints["security_ips"])
            check_type(argname="argument security_ip_group_attribute", value=security_ip_group_attribute, expected_type=type_hints["security_ip_group_attribute"])
            check_type(argname="argument security_ip_group_name", value=security_ip_group_name, expected_type=type_hints["security_ip_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Instance ID (globally unique)
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityIps: IP address whitelist to be modified
        '''
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ip_group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        result = self._values.get("security_ip_group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityIpGroupName: Whitelist group
        '''
        result = self._values.get("security_ip_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Whitelist(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.Whitelist",
):
    '''A ROS resource type:  ``ALIYUN::REDIS::Whitelist``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WhitelistProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d2d9aebedfb763bf4c65146f8f03bdf846562230871a9429185db77d45698f5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIpGroupAttribute: The default is empty.

        For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupAttribute"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIpGroupName: Whitelist group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIps: IP address whitelist to be modified.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))


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
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_ip_group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::REDIS::Whitelist``.

        :param instance_id: Property instanceId: Instance ID (globally unique).
        :param security_ips: Property securityIps: IP address whitelist to be modified.
        :param security_ip_group_attribute: Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        :param security_ip_group_name: Property securityIpGroupName: Whitelist group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f829985cfcd51c0b5a7ebc5f21cd4acf676336864da23aab2aa339a02ba89ca)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument security_ips", value=security_ips, expected_type=type_hints["security_ips"])
            check_type(argname="argument security_ip_group_attribute", value=security_ip_group_attribute, expected_type=type_hints["security_ip_group_attribute"])
            check_type(argname="argument security_ip_group_name", value=security_ip_group_name, expected_type=type_hints["security_ip_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: Instance ID (globally unique).'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityIps: IP address whitelist to be modified.'''
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_ip_group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpGroupAttribute: The default is empty.

        For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        '''
        result = self._values.get("security_ip_group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpGroupName: Whitelist group.'''
        result = self._values.get("security_ip_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__30228503940692e130ae5f7b6f0bfa69334e318e97aa931a86e89384034226f7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81a467c6866fe2ed29ef3797311b70b90bec2b26d41c4ac332fd21b5bb54c480(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d827e5f4659892a0df11246cfe9248666c2132c5965577e1460ea21e17946fb5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f52826dfb734a2e2c4de5a2ae18973867f48ad211793a651333667e56db06406(
    *,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupPolicyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.InstanceMaintainTimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b719422a3c7935ef4cfb72a2c2f8ab9ad29d6b378ca8db963232fd578a5da49(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PrepayInstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b2c91ec27d38fad75c3919f8e3042cfe773dbc22f683bb415fe8d20e10a8158(
    *,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.BackupPolicyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.ConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.InstanceMaintainTimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPrepayInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__404bc1edb0e0a8630e8fc628754a9e9829d0ac722458d9607fd880eb6c3c69fa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77935f1d081ffde6caa091d409de5e475b130674d7bdb3be6d4cd48ab60874fc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b639eaede402e58a1c24632614de9acff48aa170fd3db737a2b5d9d0d4ed809d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9274a7d35dc3d5427acfa557d52621fe16a6a0fcb9500809705c1192898de2b9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bab8a4eb48b68a515430c85335c9e398e259624b2bfe01e5cd644d9429938fa0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bea617241787a34cd8cbf0d12b5b0c07cd766ce2a357a3ca1894cf1e15fe5ed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3836fce1d4694f8a0750884fb0c040876f58430ca53f0f2b3f6dc16734762771(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0ab9bb00397e59ad0e6182768f51af8f49122e7081376b74d817243bb703e0a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ec891164888ea374f20ad6e639e7bb8c7bcc9bde7eea0d1d0f472157881443(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a18c935aa6b12345de1e168402b266e9d428e9a3b513dc2b196903e3fe83d7a(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_privilege: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fc36d99c0f78d783f6507aec31957572c4f8e955c251c7ff33ddaab7a3a9205(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a966bc2dc2628e2f61e302f939a904a5c79dd0cec1d8e1c92db43f17ee880893(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06d81c89392fecf5b0dacf4cf4fa0dd9b7ed0a9c514e2ea1e8aea4108906ab65(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a75cd45489e91278f50b8f146b47e404c6ff50cfc1d3749f2bba7dfb2cc7c2ea(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62f01d5be8f80d2593501a1767e7bb104e07215a5bb07038fb71feafa5bc4fb7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupPolicyProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f539201509e3ebcacdafbfea29c854b74f8984101ddfb4009c2af92d906a779f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f80fa4ccb99b367ae6cc6eea6909358a13025a6d6ceb4cb6eac8d613625472b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ConnectionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe3782dbb9fadcce10dd8535043d9af126a2fe6a8b5325e7ee80f3d2fb24534c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46ae6810fd133e4e992336f3663e3f39998e81c259ee6b39052428ca164ed8af(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b9697956609b2541408243ca9163c3853132484989ba8bc2d2ee58b61d544b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb72701e928bb92379898f39efd7cfe79c81cc843d84be669c19ffb22033a141(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ecdd15efafc7b57fb840a2df14d51292ed37b40fc0d6c10ff34c19db52d7de6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.InstanceMaintainTimeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ca219f4c4d0f0e3145d52578ef445c72df561f9fd8a070c0a14815e6ed55bbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f0711862a9c3e601184c190158d30ef527b7f5a283449f12027caae0d78f55f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fb17eb72e6ac098a3b45b43ff3267ea16f1e8c7f32af791a1371de1ea9581a1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a5e697253d6049f8d8c5dc952bfcea58e5499da919cc1315e03361b1333c3a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42e26391a1b4332ba3ac5de98f32a46e0620b103a0a8f0182936878d1518ef69(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fcdcbaef0bf9ef91c22532f4d30912e3dd122817c1358a80c1c2622b31e053e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__094a33ff6782ac577bc0e5c3f3267ea49b4a023ee045b7903c7cee3aae7323ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9013eaa5948fdc4a9c4d282261f49dfcc685319296949c4909e1f5294868c10(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1843091f271da25de298903bda719814014cf306b8446547c0cc5be0518c976(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dfb4c1fac215b2a3591dd410de1547c28ca27a22a6e49fb6e108ad0d461cb56(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88e1b077252af0992fa3fab70e9d5e9240ec31d4bd84bad8a18f14eb772f8904(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__055709a20593973503ce293be84156cb7bc9f158b26ef97d85e3deaca3690bae(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4bc33a2109433a76d4f1f4973dd42fb1e7e86fb13b52e0843561f97b2e7bfe0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bb09dad64ae3eacd53acd5616b173a4140a3cbb1b974122e71103c2f14ba20d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15bc3e875637b249cce689de1ea31d023801b978868794b65e8303fbcdb33e2b(
    *,
    preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_backup_log: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e678f3a019a3889aeb27399507086b9331eeffce6e2543116985080a3d1bfef(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daee76eb1f226b69da066b950f16ec373a892f98f32ff8d16b1e121bafe313db(
    *,
    classic_inner_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ClassicInnerConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    direct_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DirectConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    public_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PublicConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_private_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VpcPrivateConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5ab4efe23ed6fbdf4493f1cd1d56838fcac08d5218f81240da7d18613a66a58(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4eda14c28bb8837b338ffac05ee4e6f4f12370063391511cef9dd73a03b1f4fd(
    *,
    maintain_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0654cea1c259e41b0e94fa93a24d284ebb9d497641c531ce53a70e961280bf9(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f41e50563b7b2a4185fb354c6f7af4fa17272391a07c481e13abdaa08c3d3053(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7592512f6705e4350e0a3962b83e0df65eeaeca0608a17c6b310c6908537343(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb6eed2b3edbd513ef37fab64322c3663e8b77d30395d0a26d99caae7a5981a9(
    *,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupPolicyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.InstanceMaintainTimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18f22ae38ba15fbc627ceaeb86a629794883572b1e93ced86f82a43fb87d3a01(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrepayInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3799a00a076004c8f67b9736b93c43c61df051ba8136b0e20848530fe236f748(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24fe84cc3c9dd9e0b6adcbdda68303f0828ad4d56f1433577068d7a178fd8f82(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03212918ae507c4234ee2002ce0433a667129fa9ccf82c7ecaaf7b43b5caeb5a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ac3835d2e8b3d2b687993a2c1574af8fb411bbdb750c745c8941e848fc2f8d1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19fd4444ac658de3a2725c749c5ebfa533d65335348b29915a4b7eed6bbaadb8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.BackupPolicyProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__846518f1128b168c4f2432f5fb5840001939b813ab1d94f088f1a139a55bc1b8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.ConnectionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__101b0ec6946d1a26590d397392c07a081aa602871011a851ee8485c981f6c620(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b55411805d5b1b06a7a989513bfad882b232f74f68f3f742583d558ad04c684f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec27b39ab31b2a5e3b40bc9fbe389f8c3032d7511cb32b9e5c58be3ff42b361e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f65a3b2d942c4128433d60917dd31ada8aba3bd01639a012d7ef5b51f8bac47(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3aab0822b7a77257a0f1122b1d90d893bc58425ae89e56069486ef4ee796e52(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3f91c8b0511a8723a88b96613127a313474c128ba37b871ae62acd8affe93e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2473a488b0d6d8b158daf30aa0c4a4f7affd867c24a98b518538d391b3e3bc4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cca0454c0e93ff85bf31939c3d335567cc9477f81898509e1120cb4499154221(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a30787c41545e477e336bc51ee5495dc83474956f608586519882b88828708b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6ee07659a486325b7554372f1cedb018a6c20efdac7134f53026396f114e93b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab4ed6b7a4d033e4b1a363889b6f595324f54551acc73a7447313cd8ee5a2e1a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b239bf82dd5cfe829b8f9487afd19e9e840b6b47f15e6e9bc89339fe5f12530(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1e561379802ccde5396bcfa43c7b888eb82aa97bc195248d29d4b19ef64349e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31f61f57342109274cf3cbad1e7226fd890bcc86c848bea804fb746f4fd9d3af(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0db10b5df161c11ad1a4bed6ec4f8772cf68243a46427104c189e8e02d7a937(
    value: typing.Optional[typing.List[RosPrepayInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90ab272d1d29bf89f2924560f8ead748c3324273196f8d4f7a712f0f1075b38d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72b66b9d5134a89e1dde0e894ec81ef9a87aea7793f194963af61ebc476c90ff(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25d3b2fc6a0503ba5b5eb1ca95da4efad14c3f45f761bde5afe416c6c8271bef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82a4e95e7ee8423a33449abea895f85b5c7b1d39b372d029ec15bbf48af87cba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df483a4a46b9c0b7734d91e77cef34ff558f48a36b0e9f01e6f0b70a5135688d(
    *,
    preferred_backup_period: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preferred_backup_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_backup_log: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398671ece7c8c9b38bdcaf710f1b26a2bceb09171041366799dee0c2f9740779(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98966963938a8124d3bfeecfbbace11297289bea59f9dc4cfb4a4b43b26179c6(
    *,
    classic_inner_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.ClassicInnerConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    direct_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.DirectConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    public_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.PublicConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_private_connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.VpcPrivateConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77eae43d8eebd31f45f0e69031aef501170b7fe89b4c1f4120ee25899058469c(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__892503c45611fda7a782dc63d88494c1772cfa2b172aa920320a5e538ff45b54(
    *,
    maintain_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintain_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d350f763c9b7baad67901ed23c9b7af77c32e9ee8ddb1054e58f009613017e2a(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1704b01db4b82c1fb3e14d2987eedc8a7cc0b9670c6d86dae986d96a410d90e9(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e09b8ede9e9037dc92cc735df30c6409ab7e39eefc0e60ddeb7feac25e2bd9bf(
    *,
    connection_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    connection_string: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dc6ca651df78e9cd7326daad88a85a2b08d2152f1b4a48f01c26ba841f4f3d4(
    *,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.BackupPolicyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    connections: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.ConnectionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eviction_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_maintain_time: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPrepayInstance.InstanceMaintainTimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssl_enabled: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPrepayInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_password_free: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2167ce3bd66f49ac3830dd2689398187baeb5aca0db24db970ce0964feef8df(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWhitelistProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__405cf7eba213e5d74c81d0c5da8c0616e90042a365c5e8bf1679d6ce83b3f53b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fce33159cd36ab5f9cd640521567613f0504d9b871ce83e0d74a0abffb03d1d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6925cd8d38b79c9e97f84819092b15fe5534143eb8cfcf4086e0abf726d7f87a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5e6065fa5488928d6557121d44d91ff48df0b9dd3ac5a6e73454c9b1b4f5920(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fd5db1d3515c145d21e784e24c0391d84121d481ec01c1bea97e664ad482dea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9453896e45210711ec7660385bbff5ad720c1697710b0da468234ecde4a9ea82(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9837e3e651e8f1ba88d61cea57f0722e1e47a264f509dc1f8be520f327e175ee(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ip_group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d2d9aebedfb763bf4c65146f8f03bdf846562230871a9429185db77d45698f5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WhitelistProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f829985cfcd51c0b5a7ebc5f21cd4acf676336864da23aab2aa339a02ba89ca(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ips: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_ip_group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
