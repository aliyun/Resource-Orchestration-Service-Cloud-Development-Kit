"""
## Aliyun ROS REDIS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_redis as REDIS
```
"""
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
    """A ROS resource type:  ``ALIYUN::REDIS::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Account, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> typing.Any:
        """
        :Attribute: AccountName: The name of the account.
        """
        return jsii.get(self, "attrAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The name of the instance.
        """
        return jsii.get(self, "attrInstanceId")


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
        account_name: builtins.str,
        account_password: builtins.str,
        instance_id: builtins.str,
        account_description: typing.Optional[builtins.str] = None,
        account_privilege: typing.Optional[builtins.str] = None,
        account_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::Account``.

        :param account_name: 
        :param account_password: 
        :param instance_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        """
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
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_password(self) -> builtins.str:
        """
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        accountPassword: The password of the account. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        """
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance for which you want to create the account.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        """
        result = self._values.get("account_description")
        return result

    @builtins.property
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permission of the account. Valid values:
        RoleReadOnly
        RoleReadWrite (default value)
        RoleRepl
        Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        permission can be granted to an account only in an ApsaraDB for Redis instance of
        the standard edition in Redis 4.0.
        """
        result = self._values.get("account_privilege")
        return result

    @builtins.property
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountType: The type of the account. Set this parameter to Normal.
        """
        result = self._values.get("account_type")
        return result

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
    """A ROS resource type:  ``ALIYUN::REDIS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["InstanceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> typing.Any:
        """
        :Attribute: ConnectionDomain: Connection domain of created instance.
        """
        return jsii.get(self, "attrConnectionDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id for created redis instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Port of created instance.
        """
        return jsii.get(self, "attrPort")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_connection": "instanceConnection",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
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
        backup_policy: typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]] = None,
        capacity: typing.Optional[jsii.Number] = None,
        engine_version: typing.Optional[builtins.str] = None,
        eviction_policy: typing.Optional[builtins.str] = None,
        instance_class: typing.Optional[builtins.str] = None,
        instance_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceConnectionProperty"]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]] = None,
        instance_name: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        ssl_enabled: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::Instance``.

        :param backup_policy: 
        :param capacity: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_connection: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_connection is not None:
            self._values["instance_connection"] = instance_connection
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
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
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: backupPolicy: Backup policy
        """
        result = self._values.get("backup_policy")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def eviction_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: evictionPolicy: The eviction policy of cache data storage.
        """
        result = self._values.get("eviction_policy")
        return result

    @builtins.property
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        """
        result = self._values.get("instance_class")
        return result

    @builtins.property
    def instance_connection(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceConnectionProperty"]]:
        """
        :Property: instanceConnection: Instance connection message.
        """
        result = self._values.get("instance_connection")
        return result

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]]:
        """
        :Property: instanceMaintainTime: Instance maintain time.
        """
        result = self._values.get("instance_maintain_time")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def ssl_enabled(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        """
        result = self._values.get("ssl_enabled")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create ecs instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        result = self._values.get("vpc_password_free")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone id of input region.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::REDIS::PrepayInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["PrepayInstanceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::PrepayInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(PrepayInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> typing.Any:
        """
        :Attribute: ConnectionDomain: Connection domain of created instance.
        """
        return jsii.get(self, "attrConnectionDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id for created redis instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Port of created instance.
        """
        return jsii.get(self, "attrPort")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.PrepayInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_connection": "instanceConnection",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
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
        backup_policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]] = None,
        capacity: typing.Optional[jsii.Number] = None,
        engine_version: typing.Optional[builtins.str] = None,
        eviction_policy: typing.Optional[builtins.str] = None,
        instance_class: typing.Optional[builtins.str] = None,
        instance_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceConnectionProperty"]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]] = None,
        instance_name: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        ssl_enabled: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::PrepayInstance``.

        :param backup_policy: 
        :param capacity: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_connection: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param period: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_connection is not None:
            self._values["instance_connection"] = instance_connection
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
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
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]]:
        """
        :Property: backupPolicy: Backup policy
        """
        result = self._values.get("backup_policy")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def eviction_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: evictionPolicy: The eviction policy of cache data storage.
        """
        result = self._values.get("eviction_policy")
        return result

    @builtins.property
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        """
        result = self._values.get("instance_class")
        return result

    @builtins.property
    def instance_connection(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceConnectionProperty"]]:
        """
        :Property: instanceConnection: Instance connection message.
        """
        result = self._values.get("instance_connection")
        return result

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]]:
        """
        :Property: instanceMaintainTime: Instance maintain time.
        """
        result = self._values.get("instance_maintain_time")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def ssl_enabled(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        """
        result = self._values.get("ssl_enabled")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create ecs instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        result = self._values.get("vpc_password_free")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone id of input region.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS template type:  ``ALIYUN::REDIS::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccount, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> typing.Any:
        """
        :Attribute: AccountName: The name of the account.
        """
        return jsii.get(self, "attrAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The name of the instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: builtins.str) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> builtins.str:
        """
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        accountPassword: The password of the account. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        """
        return jsii.get(self, "accountPassword")

    @account_password.setter # type: ignore
    def account_password(self, value: builtins.str) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance for which you want to create the account.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountDescription")
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        """
        return jsii.get(self, "accountDescription")

    @account_description.setter # type: ignore
    def account_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPrivilege")
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permission of the account. Valid values:
        RoleReadOnly
        RoleReadWrite (default value)
        RoleRepl
        Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        permission can be granted to an account only in an ApsaraDB for Redis instance of
        the standard edition in Redis 4.0.
        """
        return jsii.get(self, "accountPrivilege")

    @account_privilege.setter # type: ignore
    def account_privilege(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountPrivilege", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountType")
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountType: The type of the account. Set this parameter to Normal.
        """
        return jsii.get(self, "accountType")

    @account_type.setter # type: ignore
    def account_type(self, value: typing.Optional[builtins.str]) -> None:
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
        account_name: builtins.str,
        account_password: builtins.str,
        instance_id: builtins.str,
        account_description: typing.Optional[builtins.str] = None,
        account_privilege: typing.Optional[builtins.str] = None,
        account_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::Account``.

        :param account_name: 
        :param account_password: 
        :param instance_id: 
        :param account_description: 
        :param account_privilege: 
        :param account_type: 
        """
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
    def account_name(self) -> builtins.str:
        """
        :Property:

        accountName: The name of the account. The name must start with a lowercase letter and can contain
        lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        in length.
        """
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return result

    @builtins.property
    def account_password(self) -> builtins.str:
        """
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        accountPassword: The password of the account. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        """
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance for which you want to create the account.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def account_description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountDescription: The description of the account.
        The description must start with a letter, and cannot start with http:// or https://.
        The description can contain letters, underscores (_), hyphens (-), and digits.
        It can be 2 to 256 characters in length.
        """
        result = self._values.get("account_description")
        return result

    @builtins.property
    def account_privilege(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        accountPrivilege: The permission of the account. Valid values:
        RoleReadOnly
        RoleReadWrite (default value)
        RoleRepl
        Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        permission can be granted to an account only in an ApsaraDB for Redis instance of
        the standard edition in Redis 4.0.
        """
        result = self._values.get("account_privilege")
        return result

    @builtins.property
    def account_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountType: The type of the account. Set this parameter to Normal.
        """
        result = self._values.get("account_type")
        return result

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
    """A ROS template type:  ``ALIYUN::REDIS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> typing.Any:
        """
        :Attribute: ConnectionDomain: Connection domain of created instance.
        """
        return jsii.get(self, "attrConnectionDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id for created redis instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Port of created instance.
        """
        return jsii.get(self, "attrPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: backupPolicy: Backup policy
        """
        return jsii.get(self, "backupPolicy")

    @backup_policy.setter # type: ignore
    def backup_policy(
        self,
        value: typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="capacity")
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        """
        return jsii.get(self, "capacity")

    @capacity.setter # type: ignore
    def capacity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "capacity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="evictionPolicy")
    def eviction_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: evictionPolicy: The eviction policy of cache data storage.
        """
        return jsii.get(self, "evictionPolicy")

    @eviction_policy.setter # type: ignore
    def eviction_policy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "evictionPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceClass")
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        """
        return jsii.get(self, "instanceClass")

    @instance_class.setter # type: ignore
    def instance_class(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceConnection")
    def instance_connection(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceConnectionProperty"]]:
        """
        :Property: instanceConnection: Instance connection message.
        """
        return jsii.get(self, "instanceConnection")

    @instance_connection.setter # type: ignore
    def instance_connection(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceConnectionProperty"]],
    ) -> None:
        jsii.set(self, "instanceConnection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceMaintainTime")
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]]:
        """
        :Property: instanceMaintainTime: Instance maintain time.
        """
        return jsii.get(self, "instanceMaintainTime")

    @instance_maintain_time.setter # type: ignore
    def instance_maintain_time(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.InstanceMaintainTimeProperty"]],
    ) -> None:
        jsii.set(self, "instanceMaintainTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        """
        return jsii.get(self, "password")

    @password.setter # type: ignore
    def password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        """
        return jsii.get(self, "sslEnabled")

    @ssl_enabled.setter # type: ignore
    def ssl_enabled(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sslEnabled", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create ecs instance.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcPasswordFree")
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        return jsii.get(self, "vpcPasswordFree")

    @vpc_password_free.setter # type: ignore
    def vpc_password_free(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone id of input region.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
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
            preferred_backup_period: builtins.str,
            preferred_backup_time: builtins.str,
            enable_backup_log: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(self) -> builtins.str:
            """
            :Property: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            """
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return result

        @builtins.property
        def preferred_backup_time(self) -> builtins.str:
            """
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            """
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return result

        @builtins.property
        def enable_backup_log(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            """
            result = self._values.get("enable_backup_log")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupPolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosInstance.InstanceConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ip_type": "ipType",
            "new_connection_string": "newConnectionString",
            "port": "port",
        },
    )
    class InstanceConnectionProperty:
        def __init__(
            self,
            *,
            ip_type: typing.Optional[builtins.str] = None,
            new_connection_string: typing.Optional[builtins.str] = None,
            port: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param ip_type: 
            :param new_connection_string: 
            :param port: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if ip_type is not None:
                self._values["ip_type"] = ip_type
            if new_connection_string is not None:
                self._values["new_connection_string"] = new_connection_string
            if port is not None:
                self._values["port"] = port

        @builtins.property
        def ip_type(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            ipType: The network type of the new endpoint. Value values:

            - Private: internal network.
            - Public: public network.
            """
            result = self._values.get("ip_type")
            return result

        @builtins.property
        def new_connection_string(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            newConnectionString: The prefix of the new endpoint.
            The new endpoint of the ApsaraDB for Redis instance is in the .redis.rds.aliyuncs.com format.
            The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits.
            The prefix can be 8 to 64 characters in length.
            """
            result = self._values.get("new_connection_string")
            return result

        @builtins.property
        def port(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            port: The service port of the instance.
            Valid values: 1024 to 65535.
            """
            result = self._values.get("port")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceConnectionProperty(%s)" % ", ".join(
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
            maintain_end_time: typing.Optional[builtins.str] = None,
            maintain_start_time: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param maintain_end_time: 
            :param maintain_start_time: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if maintain_end_time is not None:
                self._values["maintain_end_time"] = maintain_end_time
            if maintain_start_time is not None:
                self._values["maintain_start_time"] = maintain_start_time

        @builtins.property
        def maintain_end_time(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            maintainEndTime: The end time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            you must set this parameter to 18:00Z.
            """
            result = self._values.get("maintain_end_time")
            return result

        @builtins.property
        def maintain_start_time(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            maintainStartTime: The start time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            you must set this parameter to 17:00Z.
            """
            result = self._values.get("maintain_start_time")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceMaintainTimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_connection": "instanceConnection",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
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
        backup_policy: typing.Optional[typing.Union[RosInstance.BackupPolicyProperty, ros_cdk_core.IResolvable]] = None,
        capacity: typing.Optional[jsii.Number] = None,
        engine_version: typing.Optional[builtins.str] = None,
        eviction_policy: typing.Optional[builtins.str] = None,
        instance_class: typing.Optional[builtins.str] = None,
        instance_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceConnectionProperty]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceMaintainTimeProperty]] = None,
        instance_name: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        ssl_enabled: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::Instance``.

        :param backup_policy: 
        :param capacity: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_connection: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_connection is not None:
            self._values["instance_connection"] = instance_connection
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
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
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[RosInstance.BackupPolicyProperty, ros_cdk_core.IResolvable]]:
        """
        :Property: backupPolicy: Backup policy
        """
        result = self._values.get("backup_policy")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def eviction_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: evictionPolicy: The eviction policy of cache data storage.
        """
        result = self._values.get("eviction_policy")
        return result

    @builtins.property
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        """
        result = self._values.get("instance_class")
        return result

    @builtins.property
    def instance_connection(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceConnectionProperty]]:
        """
        :Property: instanceConnection: Instance connection message.
        """
        result = self._values.get("instance_connection")
        return result

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.InstanceMaintainTimeProperty]]:
        """
        :Property: instanceMaintainTime: Instance maintain time.
        """
        result = self._values.get("instance_maintain_time")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def ssl_enabled(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        """
        result = self._values.get("ssl_enabled")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create ecs instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        result = self._values.get("vpc_password_free")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone id of input region.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS template type:  ``ALIYUN::REDIS::PrepayInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPrepayInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::PrepayInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosPrepayInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> typing.Any:
        """
        :Attribute: ConnectionDomain: Connection domain of created instance.
        """
        return jsii.get(self, "attrConnectionDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id for created redis instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Port of created instance.
        """
        return jsii.get(self, "attrPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]]:
        """
        :Property: backupPolicy: Backup policy
        """
        return jsii.get(self, "backupPolicy")

    @backup_policy.setter # type: ignore
    def backup_policy(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.BackupPolicyProperty"]],
    ) -> None:
        jsii.set(self, "backupPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="capacity")
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        """
        return jsii.get(self, "capacity")

    @capacity.setter # type: ignore
    def capacity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "capacity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="evictionPolicy")
    def eviction_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: evictionPolicy: The eviction policy of cache data storage.
        """
        return jsii.get(self, "evictionPolicy")

    @eviction_policy.setter # type: ignore
    def eviction_policy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "evictionPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceClass")
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        """
        return jsii.get(self, "instanceClass")

    @instance_class.setter # type: ignore
    def instance_class(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceConnection")
    def instance_connection(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceConnectionProperty"]]:
        """
        :Property: instanceConnection: Instance connection message.
        """
        return jsii.get(self, "instanceConnection")

    @instance_connection.setter # type: ignore
    def instance_connection(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceConnectionProperty"]],
    ) -> None:
        jsii.set(self, "instanceConnection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceMaintainTime")
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]]:
        """
        :Property: instanceMaintainTime: Instance maintain time.
        """
        return jsii.get(self, "instanceMaintainTime")

    @instance_maintain_time.setter # type: ignore
    def instance_maintain_time(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPrepayInstance.InstanceMaintainTimeProperty"]],
    ) -> None:
        jsii.set(self, "instanceMaintainTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        """
        return jsii.get(self, "password")

    @password.setter # type: ignore
    def password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslEnabled")
    def ssl_enabled(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        """
        return jsii.get(self, "sslEnabled")

    @ssl_enabled.setter # type: ignore
    def ssl_enabled(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sslEnabled", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create ecs instance.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcPasswordFree")
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        return jsii.get(self, "vpcPasswordFree")

    @vpc_password_free.setter # type: ignore
    def vpc_password_free(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone id of input region.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
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
            preferred_backup_period: builtins.str,
            preferred_backup_time: builtins.str,
            enable_backup_log: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(self) -> builtins.str:
            """
            :Property: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            """
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return result

        @builtins.property
        def preferred_backup_time(self) -> builtins.str:
            """
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            """
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return result

        @builtins.property
        def enable_backup_log(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            """
            result = self._values.get("enable_backup_log")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupPolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstance.InstanceConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ip_type": "ipType",
            "new_connection_string": "newConnectionString",
            "port": "port",
        },
    )
    class InstanceConnectionProperty:
        def __init__(
            self,
            *,
            ip_type: typing.Optional[builtins.str] = None,
            new_connection_string: typing.Optional[builtins.str] = None,
            port: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param ip_type: 
            :param new_connection_string: 
            :param port: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if ip_type is not None:
                self._values["ip_type"] = ip_type
            if new_connection_string is not None:
                self._values["new_connection_string"] = new_connection_string
            if port is not None:
                self._values["port"] = port

        @builtins.property
        def ip_type(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            ipType: The network type of the new endpoint. Value values:

            - Private: internal network.
            - Public: public network.
            """
            result = self._values.get("ip_type")
            return result

        @builtins.property
        def new_connection_string(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            newConnectionString: The prefix of the new endpoint.
            The new endpoint of the ApsaraDB for Redis instance is in the .redis.rds.aliyuncs.com format.
            The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits.
            The prefix can be 8 to 64 characters in length.
            """
            result = self._values.get("new_connection_string")
            return result

        @builtins.property
        def port(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            port: The service port of the instance.
            Valid values: 1024 to 65535.
            """
            result = self._values.get("port")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceConnectionProperty(%s)" % ", ".join(
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
            maintain_end_time: typing.Optional[builtins.str] = None,
            maintain_start_time: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param maintain_end_time: 
            :param maintain_start_time: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if maintain_end_time is not None:
                self._values["maintain_end_time"] = maintain_end_time
            if maintain_start_time is not None:
                self._values["maintain_start_time"] = maintain_start_time

        @builtins.property
        def maintain_end_time(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            maintainEndTime: The end time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            you must set this parameter to 18:00Z.
            """
            result = self._values.get("maintain_end_time")
            return result

        @builtins.property
        def maintain_start_time(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            maintainStartTime: The start time of the maintenance window.
            Specify the time in the ISO 8601 standard in the HH:mmZ format.
            The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            you must set this parameter to 17:00Z.
            """
            result = self._values.get("maintain_start_time")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceMaintainTimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.RosPrepayInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "engine_version": "engineVersion",
        "eviction_policy": "evictionPolicy",
        "instance_class": "instanceClass",
        "instance_connection": "instanceConnection",
        "instance_maintain_time": "instanceMaintainTime",
        "instance_name": "instanceName",
        "password": "password",
        "period": "period",
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
        backup_policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.BackupPolicyProperty]] = None,
        capacity: typing.Optional[jsii.Number] = None,
        engine_version: typing.Optional[builtins.str] = None,
        eviction_policy: typing.Optional[builtins.str] = None,
        instance_class: typing.Optional[builtins.str] = None,
        instance_connection: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceConnectionProperty]] = None,
        instance_maintain_time: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]] = None,
        instance_name: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        ssl_enabled: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::PrepayInstance``.

        :param backup_policy: 
        :param capacity: 
        :param engine_version: 
        :param eviction_policy: 
        :param instance_class: 
        :param instance_connection: 
        :param instance_maintain_time: 
        :param instance_name: 
        :param password: 
        :param period: 
        :param security_group_id: 
        :param ssl_enabled: 
        :param tags: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if eviction_policy is not None:
            self._values["eviction_policy"] = eviction_policy
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_connection is not None:
            self._values["instance_connection"] = instance_connection
        if instance_maintain_time is not None:
            self._values["instance_maintain_time"] = instance_maintain_time
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
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
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.BackupPolicyProperty]]:
        """
        :Property: backupPolicy: Backup policy
        """
        result = self._values.get("backup_policy")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def eviction_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: evictionPolicy: The eviction policy of cache data storage.
        """
        result = self._values.get("eviction_policy")
        return result

    @builtins.property
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        """
        result = self._values.get("instance_class")
        return result

    @builtins.property
    def instance_connection(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceConnectionProperty]]:
        """
        :Property: instanceConnection: Instance connection message.
        """
        result = self._values.get("instance_connection")
        return result

    @builtins.property
    def instance_maintain_time(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPrepayInstance.InstanceMaintainTimeProperty]]:
        """
        :Property: instanceMaintainTime: Instance maintain time.
        """
        result = self._values.get("instance_maintain_time")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def ssl_enabled(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sslEnabled: Modifies the SSL status. Valid values:
        Disable: disables SSL encryption.
        Enable: enables SSL encryption.
        Update: updates the SSL certificate.
        """
        result = self._values.get("ssl_enabled")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create ecs instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        result = self._values.get("vpc_password_free")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ecs instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone id of input region.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS template type:  ``ALIYUN::REDIS::Whitelist``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWhitelistProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::Whitelist``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosWhitelist, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        return jsii.get(self, "attrSecurityIpGroupAttribute")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupName: Whitelist group
        """
        return jsii.get(self, "attrSecurityIpGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> typing.Any:
        """
        :Attribute: SecurityIps: IP address whitelist to be modified
        """
        return jsii.get(self, "attrSecurityIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance ID (globally unique)
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIps")
    def security_ips(self) -> builtins.str:
        """
        :Property: securityIps: IP address whitelist to be modified
        """
        return jsii.get(self, "securityIps")

    @security_ips.setter # type: ignore
    def security_ips(self, value: builtins.str) -> None:
        jsii.set(self, "securityIps", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpGroupAttribute")
    def security_ip_group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        return jsii.get(self, "securityIpGroupAttribute")

    @security_ip_group_attribute.setter # type: ignore
    def security_ip_group_attribute(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpGroupAttribute", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpGroupName")
    def security_ip_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupName: Whitelist group
        """
        return jsii.get(self, "securityIpGroupName")

    @security_ip_group_name.setter # type: ignore
    def security_ip_group_name(self, value: typing.Optional[builtins.str]) -> None:
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
        instance_id: builtins.str,
        security_ips: builtins.str,
        security_ip_group_attribute: typing.Optional[builtins.str] = None,
        security_ip_group_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::Whitelist``.

        :param instance_id: 
        :param security_ips: 
        :param security_ip_group_attribute: 
        :param security_ip_group_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance ID (globally unique)
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def security_ips(self) -> builtins.str:
        """
        :Property: securityIps: IP address whitelist to be modified
        """
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return result

    @builtins.property
    def security_ip_group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        result = self._values.get("security_ip_group_attribute")
        return result

    @builtins.property
    def security_ip_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupName: Whitelist group
        """
        result = self._values.get("security_ip_group_name")
        return result

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
    """A ROS resource type:  ``ALIYUN::REDIS::Whitelist``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WhitelistProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::REDIS::Whitelist``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Whitelist, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        return jsii.get(self, "attrSecurityIpGroupAttribute")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupName: Whitelist group
        """
        return jsii.get(self, "attrSecurityIpGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> typing.Any:
        """
        :Attribute: SecurityIps: IP address whitelist to be modified
        """
        return jsii.get(self, "attrSecurityIps")


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
        instance_id: builtins.str,
        security_ips: builtins.str,
        security_ip_group_attribute: typing.Optional[builtins.str] = None,
        security_ip_group_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::REDIS::Whitelist``.

        :param instance_id: 
        :param security_ips: 
        :param security_ip_group_attribute: 
        :param security_ip_group_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance ID (globally unique)
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def security_ips(self) -> builtins.str:
        """
        :Property: securityIps: IP address whitelist to be modified
        """
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return result

    @builtins.property
    def security_ip_group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        result = self._values.get("security_ip_group_attribute")
        return result

    @builtins.property
    def security_ip_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupName: Whitelist group
        """
        result = self._values.get("security_ip_group_name")
        return result

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
