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


class Accounts(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.Accounts",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::REDIS::Accounts``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccounts``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be856133523179c24cac3a9810e3777a08a3cab8b351fce5df3e8aa005449b83)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountNames: The list of The Redis account names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accounts: The list of The Redis accounts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ab4f82335659622caf61a97e4a0afaab147c2f0310df14df7ca221f446a3457)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4643042792aa3b027a28c7d36d7c189734b31ca7d27f45d8a0d93af816ee0a9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AccountsProps":
        return typing.cast("AccountsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AccountsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9f944b897ddb39e49861094dd123b3bec46e3165b961e61e9bc71d288ddb081)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9dc06a9b79b89bd69d5ee838526d4f9c3e54d11d24e3ef0f18b3d9a45fab02ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.AccountsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "account_name": "accountName"},
)
class AccountsProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Accounts``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts

        :param instance_id: Property instanceId: The ID of the Redis instance.
        :param account_name: Property accountName: The name of the Redis account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c1a20c6787c92425b3e29d54f9beded7ac47c9ab39d687b085eb5a7f55c8556)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the Redis instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: The name of the Redis account.'''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::REDIS::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__b83fcd6e6e014aa043ccec1d6431076b77e5d9bfa258ac7293a5defe7cb0d858)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArchitectureType")
    def attr_architecture_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ArchitectureType: Architecture type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: Bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Capacity: Capacity.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrCloudType")
    def attr_cloud_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CloudType: Cloud category.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCloudType"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Config: Config.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionDomain: Connection domain.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Create time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: Database instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceName")
    def attr_db_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceName: Instance name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndTime: End time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineVersion: Engine version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HasRenewChangeOrder: Has renew change order.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClass: Instance class.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceReleaseProtection")
    def attr_instance_release_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceReleaseProtection: Instance release protection.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceReleaseProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceType: Instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrIsRds")
    def attr_is_rds(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsRds: is RDS.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsRds"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaintainEndTime: Maintain end time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaintainStartTime: Maintain start time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkType: Network type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PackageType: Package type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: Payment type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateIp: Private IP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Qps: QPS.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyCount")
    def attr_read_only_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReadOnlyCount: The number of read-only nodes.

        This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadOnlyCount"))

    @builtins.property
    @jsii.member(jsii_name="attrReplacateId")
    def attr_replacate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReplacateId: Replacate id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplacateId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Resource group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryZoneId")
    def attr_secondary_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecondaryZoneId: The ID of the standby zone.

        You can call the [DescribeZones](~~ 94527 ~~) operation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondaryZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroupId: Security group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIpGroupAttribute: Security IP group attribute.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupAttribute"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIpGroupName: Security IP group name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIps: Security IPs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrShardCount")
    def attr_shard_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ShardCount: The number of slices.

        This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShardCount"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: Tags.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcAuthMode")
    def attr_vpc_auth_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcAuthMode: Vpc auth mode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcAuthMode"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcCloudInstanceId: Vpc cloud instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: Vpc id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: Vswitch id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: Zone id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9dccb140e5f3a2eff8ecebfbe9c99931b77349b814de37713280dc35dcc56c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fae0711416d614dd2aa51356fa81b98ac1281664fa4f2ac46300c3f9a9aeaef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bf2ad8e481e56e2a897dc6dc206b3ca56f56df38d2e45d53ae86cd5ad362083)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa5966efca85da62094c2a628688c98bb407fdebdc93af28ea81dfadee406018)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class InstanceClasses(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.InstanceClasses",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::REDIS::InstanceClasses``, which is used to query the types of ApsaraDB for Redis instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstanceClasses``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstanceClassesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f740a186ec4a35418cd34b7ee45a89c5caeec7d8f468c74757420e6d82711e98)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClasses: The list of instance classes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClassIds: The list of db instance class ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClassIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__221986c1e59d168d57c1f7d753272d5530241b4c78fdfd9273bf62a5fcc6c1d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de845e985a660b0036b3d35dd28f4279ea8f630d7482ab5beb016f2210c7110e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceClassesProps":
        return typing.cast("InstanceClassesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceClassesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d983aa0ba99bfdd9f74bb841d801893db18820dcec8058459505da72dfeca9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__160a0c1c840b0b4584ee4b74072930eb6a2d3e0f33eec6f806788dba4ab2469b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.InstanceClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "accept_language": "acceptLanguage",
        "engine": "engine",
        "instance_charge_type": "instanceChargeType",
        "instance_id": "instanceId",
        "node_id": "nodeId",
        "order_type": "orderType",
        "product_type": "productType",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class InstanceClassesProps:
    def __init__(
        self,
        *,
        accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InstanceClasses``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses

        :param accept_language: Property acceptLanguage: The language of the return values. Valid values: zh-CN: Chinese. This is the default value. en-US: English.
        :param engine: Property engine: The engine type. Valid values: Redis Memcache
        :param instance_charge_type: Property instanceChargeType: The billing method. Valid values: PrePaid: subscription PostPaid: pay-as-you-go Note Default value: PrePaid.
        :param instance_id: Property instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups. Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
        :param node_id: Property nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0. Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
        :param order_type: Property orderType: The order type. Valid values: BUY: the orders that are used to purchase instances. UPGRADE: the orders that are used to upgrade instances. DOWNGRADE: the orders that are used to downgrade instances.
        :param product_type: Property productType: The edition or series of instances. Valid values: Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair) Tair_scm: persistent memory-optimized instances Tair_essd: storage-optimized instances
        :param resource_group_id: Property resourceGroupId: The ID of the instance. Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
        :param zone_id: Property zoneId: The ID of the zone where PolarDB resources that you want to query reside. Note You can call the DescribeRegions operation to query information about zones.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44ea1fce5c2bebff16fcab7f0257ae73f15bbdd48b8b495e8f80c3da8bf342ed)
            check_type(argname="argument accept_language", value=accept_language, expected_type=type_hints["accept_language"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument order_type", value=order_type, expected_type=type_hints["order_type"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if accept_language is not None:
            self._values["accept_language"] = accept_language
        if engine is not None:
            self._values["engine"] = engine
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if node_id is not None:
            self._values["node_id"] = node_id
        if order_type is not None:
            self._values["order_type"] = order_type
        if product_type is not None:
            self._values["product_type"] = product_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property acceptLanguage: The language of the return values.

        Valid values:
        zh-CN: Chinese. This is the default value.
        en-US: English.
        '''
        result = self._values.get("accept_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engine: The engine type.

        Valid values:
        Redis
        Memcache
        '''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method.

        Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Note Default value: PrePaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the resource group.

        You can call the ListResourceGroups operation to query the IDs of resource groups.
        Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeId: The ID of the data node for which you want to query available instance types.

        You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
        Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
        '''
        result = self._values.get("node_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property orderType: The order type.

        Valid values:
        BUY: the orders that are used to purchase instances.
        UPGRADE: the orders that are used to upgrade instances.
        DOWNGRADE: the orders that are used to downgrade instances.
        '''
        result = self._values.get("order_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productType: The edition or series of instances.

        Valid values:
        Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
        Tair_scm: persistent memory-optimized instances
        Tair_essd: storage-optimized instances
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the instance.

        Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.

        Note You can call the DescribeRegions operation to query information about zones.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceClassesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId"},
)
class InstanceProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance

        :param db_instance_id: Property dbInstanceId: Database instance id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed14d9115def17885a624722a59326989f5cad70bfb6ac78b4f8a883190cdc11)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: Database instance id.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.Instances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::REDIS::Instances``, which is used to query the information about ApsaraDB for Redis instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7f83f0bb0e66f4ac6e8e186293e23292c818b23758fdad5093adb2badea6b46)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of The Redis instance Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Instances: The list of The Redis instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b258fa7ffae9fe8f658f964a05917bb0c73896a5f18609b6cb12e5d522d8f790)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dec915ec77d01ff1bfbc2a4ce1eb97f1638a803718725461b152f0231cbbadcb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstancesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b94f2ec57edd210fd20dd9a6d8b89f4d4d1d5d7f7d30bbdfb7227ea0cfd5dc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c9adbc0718c97b22ec2c5b19d366110531a68baf8b6256f06e836acdcd281cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "architecture_type": "architectureType",
        "charge_type": "chargeType",
        "edition_type": "editionType",
        "engine_version": "engineVersion",
        "expired": "expired",
        "global_instance": "globalInstance",
        "instance_class": "instanceClass",
        "instance_ids": "instanceIds",
        "instance_status": "instanceStatus",
        "instance_type": "instanceType",
        "network_type": "networkType",
        "private_ip": "privateIp",
        "resource_group_id": "resourceGroupId",
        "search_key": "searchKey",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstancesProps:
    def __init__(
        self,
        *,
        architecture_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        global_instance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_ids: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances

        :param architecture_type: Property architectureType: The architecture of the instance. Valid values: cluster: The instance is a cluster instance. standard: The instance is a standard instance. rwsplit: The instance is a read/write splitting instance.
        :param charge_type: Property chargeType: The billing method of the instance. Valid values: PrePaid: subscription PostPaid: pay-as-you-go
        :param edition_type: Property editionType: The edition of the instance. Valid values: Community: Community Edition Enterprise: Enhance Edition (Tair)
        :param engine_version: Property engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
        :param expired: Property expired: Specifies whether the instance has expired. Valid values: true: The instance has expired. false: The instance has not expired.
        :param global_instance: Property globalInstance: Specifies whether to return the child instances of distributed instances. Valid values: true: Only child instances are returned. false: Child instances are not returned.
        :param instance_class: Property instanceClass: The instance type.
        :param instance_ids: Property instanceIds: The IDs of instances. If you specify multiple instance IDs, separate the instance IDs with commas (,).
        :param instance_status: Property instanceStatus: The state of the instance. Valid values: Normal: The instance is normal. Creating: The instance is being created. Changing: The configurations of the instance are being changed. Inactive: The instance is disabled. Flushing: The instance is being released. Released: The instance is released. Transforming: The instance is being transformed. Unavailable: The instance is suspended. Error: The instance cannot be created. Migrating: The instance is being migrated. BackupRecovering: The instance is being restored from a backup. MinorVersionUpgrading: The minor version of the instance is being updated. NetworkModifying: The network type of the instance is being changed. SSLModifying: The SSL certificate of the instance is being changed. MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
        :param instance_type: Property instanceType: The category of the instance. Valid values: Tair Redis Memcache
        :param network_type: Property networkType: The network type of the instance. Valid values: CLASSIC: classic network VPC: Virtual Private Cloud (VPC)
        :param private_ip: Property privateIp: The private IP address of the instance.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the instance belongs.
        :param search_key: Property searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
        :param vpc_id: Property vpcId: The ID of the VPC.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        :param zone_id: Property zoneId: The zone ID of the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f02485db071fde0c06915cf528023620e9fb42935cf19d9df9e638e16d98228d)
            check_type(argname="argument architecture_type", value=architecture_type, expected_type=type_hints["architecture_type"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument edition_type", value=edition_type, expected_type=type_hints["edition_type"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument global_instance", value=global_instance, expected_type=type_hints["global_instance"])
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument instance_status", value=instance_status, expected_type=type_hints["instance_status"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument private_ip", value=private_ip, expected_type=type_hints["private_ip"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_key", value=search_key, expected_type=type_hints["search_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if architecture_type is not None:
            self._values["architecture_type"] = architecture_type
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if edition_type is not None:
            self._values["edition_type"] = edition_type
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if global_instance is not None:
            self._values["global_instance"] = global_instance
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_ids is not None:
            self._values["instance_ids"] = instance_ids
        if instance_status is not None:
            self._values["instance_status"] = instance_status
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if network_type is not None:
            self._values["network_type"] = network_type
        if private_ip is not None:
            self._values["private_ip"] = private_ip
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_key is not None:
            self._values["search_key"] = search_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def architecture_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property architectureType: The architecture of the instance.

        Valid values:
        cluster: The instance is a cluster instance.
        standard: The instance is a standard instance.
        rwsplit: The instance is a read/write splitting instance.
        '''
        result = self._values.get("architecture_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the instance.

        Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property editionType: The edition of the instance.

        Valid values:
        Community: Community Edition
        Enterprise: Enhance Edition (Tair)
        '''
        result = self._values.get("edition_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The database engine version of the instance.

        Valid values: 2.8, 4.0, and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property expired: Specifies whether the instance has expired.

        Valid values:
        true: The instance has expired.
        false: The instance has not expired.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def global_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property globalInstance: Specifies whether to return the child instances of distributed instances.

        Valid values:
        true: Only child instances are returned.
        false: Child instances are not returned.
        '''
        result = self._values.get("global_instance")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceClass: The instance type.'''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceIds: The IDs of instances.

        If you specify multiple instance IDs, separate the instance IDs with commas (,).
        '''
        result = self._values.get("instance_ids")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceStatus: The state of the instance.

        Valid values:
        Normal: The instance is normal.
        Creating: The instance is being created.
        Changing: The configurations of the instance are being changed.
        Inactive: The instance is disabled.
        Flushing: The instance is being released.
        Released: The instance is released.
        Transforming: The instance is being transformed.
        Unavailable: The instance is suspended.
        Error: The instance cannot be created.
        Migrating: The instance is being migrated.
        BackupRecovering: The instance is being restored from a backup.
        MinorVersionUpgrading: The minor version of the instance is being updated.
        NetworkModifying: The network type of the instance is being changed.
        SSLModifying: The SSL certificate of the instance is being changed.
        MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
        '''
        result = self._values.get("instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The category of the instance.

        Valid values:
        Tair
        Redis
        Memcache
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The network type of the instance.

        Valid values:
        CLASSIC: classic network
        VPC: Virtual Private Cloud (VPC)
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIp: The private IP address of the instance.'''
        result = self._values.get("private_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the instance belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property searchKey: The keyword used for fuzzy search.

        The keyword can be based on an instance name or an instance ID.
        '''
        result = self._values.get("search_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the instance.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccounts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosAccounts",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::REDIS::Accounts``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Accounts`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53ddf457100b758a6c05bd59f5fd7e9189e478a99ba629160cf5a9626d85b190)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7ac23236be3514d48bd964226398dd7f8d627151238e0974df30057bf4d03e5a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountNames: The list of The Redis account names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accounts: The list of The Redis accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bfb405aa87c40c1a74e0b7ced3a725e3224b053604703d832bf456f3cf46e0d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the Redis instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39d228ac090a971dfd48391095a3f92f2b37d14cf9f67b8c1c8238d72e5d48cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the Redis account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a306011e028fd7c4e4f961f31590aae9ad5b9c95c1b9b68cb04b9161514d340c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosAccountsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "account_name": "accountName"},
)
class RosAccountsProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccounts``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts

        :param instance_id: 
        :param account_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d45150aae4f2272e8a8d777c4c3c7c3bc4584d979d7afca031439c025069f9f2)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the Redis instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the Redis account.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::REDIS::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__3407b27596a1e7b9b3e79f9134d6bbc55fe070902665e65c704bd9d9827750b9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ceb94d8e0e99cb97fcacf5468e2438196cde6a0ce8d3be1fab4f01ebc33179d0)
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
        :Attribute: ArchitectureType: Architecture type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArchitectureType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: Bandwidth.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCapacity")
    def attr_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Capacity: Capacity.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrCloudType")
    def attr_cloud_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CloudType: Cloud category.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCloudType"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Config: Config.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionDomain: Connection domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Create time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: Database instance id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceName")
    def attr_db_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceName: Instance name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndTime: End time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: Engine version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrHasRenewChangeOrder")
    def attr_has_renew_change_order(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HasRenewChangeOrder: Has renew change order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasRenewChangeOrder"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClass: Instance class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceReleaseProtection")
    def attr_instance_release_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceReleaseProtection: Instance release protection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceReleaseProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrIsRds")
    def attr_is_rds(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsRds: is RDS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsRds"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainEndTime: Maintain end time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainStartTime: Maintain start time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkType: Network type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrPackageType")
    def attr_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PackageType: Package type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Payment type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIp")
    def attr_private_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateIp: Private IP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIp"))

    @builtins.property
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Qps: QPS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQps"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyCount")
    def attr_read_only_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadOnlyCount"))

    @builtins.property
    @jsii.member(jsii_name="attrReplacateId")
    def attr_replacate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplacateId: Replacate id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplacateId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource group id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryZoneId")
    def attr_secondary_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecondaryZoneId: The ID of the standby zone. You can call the [DescribeZones](~~ 94527 ~~) operation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondaryZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: Security group id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpGroupAttribute: Security IP group attribute.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupAttribute"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpGroupName: Security IP group name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIps: Security IPs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrShardCount")
    def attr_shard_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShardCount"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: Tags.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcAuthMode")
    def attr_vpc_auth_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcAuthMode: Vpc auth mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcAuthMode"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcCloudInstanceId: Vpc cloud instance id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: Vpc id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: Vswitch id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: Zone id.
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
        :Property: dbInstanceId: Database instance id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8a57f2c466a7188aebd614e2b5154a5f878edb40191786cd4eadfeb0fbac920)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5790718a67a889d3bf884a8d62413f00896a4d60935063673dd52da17519ca5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


class RosInstanceClasses(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosInstanceClasses",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::REDIS::InstanceClasses``, which is used to query the types of ApsaraDB for Redis instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InstanceClasses`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceClassesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__313a3d48ecf49367e497d2dc904d2a51c8c3af55ecac97b907c13848be25f63f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4ba82c84d4dc7a86b8721a61d58220b98231a31dfc642e6d0379a92394b9a522)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClasses: The list of instance classes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClassIds: The list of db instance class ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClassIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__634baadbbda60d46e7f88745e9cb70b7c6b74732f9a8121e218ed6e3a6b5c192)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="acceptLanguage")
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        acceptLanguage: The language of the return values. Valid values:
        zh-CN: Chinese. This is the default value.
        en-US: English.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "acceptLanguage"))

    @accept_language.setter
    def accept_language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a79250c31f15198f43438ad7c9a46c2d866d33a27eb21fc8d7fe41d668657610)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceptLanguage", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        engine: The engine type. Valid values:
        Redis
        Memcache
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__781b234595e25c820b91661e439259c6a0827600d07979aa7280a9bf31b27157)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Note Default value: PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9da0b5f37c5e73e1d9399f262af1e7fd02a2b74377482e4b11008cc3e3e385f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
        Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__287fdd06912e58c9b46e017dcae140356ae2b06f60cc4888b8c38a00b2cc91f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="nodeId")
    def node_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
        Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeId"))

    @node_id.setter
    def node_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba934862b7fea79a31ca6c05125cb24901d54e9918bfddc6066f28456ea58787)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeId", value)

    @builtins.property
    @jsii.member(jsii_name="orderType")
    def order_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        orderType: The order type. Valid values:
        BUY: the orders that are used to purchase instances.
        UPGRADE: the orders that are used to upgrade instances.
        DOWNGRADE: the orders that are used to downgrade instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "orderType"))

    @order_type.setter
    def order_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__399f96673a872be729ca922fea342923cc8944452c88516cbb3fe8ff84d57035)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orderType", value)

    @builtins.property
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        productType: The edition or series of instances. Valid values:
        Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
        Tair_scm: persistent memory-optimized instances
        Tair_essd: storage-optimized instances
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92774ab966afce9ce57b86580ae8eb4409a5ae57d02bee4b66987f2d50bebc9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the instance.
        Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83598d963cbb8e9d3ac27fdebe8e0845838fa685240a2d7143a762f8a483fbc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone where PolarDB resources that you want to query reside.
        Note You can call the DescribeRegions operation to query information about zones.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0f0d3a559994b92a862f0c7441b0d37b085966b6c3772c7bb226d3687778f47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosInstanceClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "accept_language": "acceptLanguage",
        "engine": "engine",
        "instance_charge_type": "instanceChargeType",
        "instance_id": "instanceId",
        "node_id": "nodeId",
        "order_type": "orderType",
        "product_type": "productType",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class RosInstanceClassesProps:
    def __init__(
        self,
        *,
        accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstanceClasses``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses

        :param accept_language: 
        :param engine: 
        :param instance_charge_type: 
        :param instance_id: 
        :param node_id: 
        :param order_type: 
        :param product_type: 
        :param resource_group_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1666af083bf2cbe25fdc6f8b43ce80a0e58172a1fe3927444acac0ed29a9ac85)
            check_type(argname="argument accept_language", value=accept_language, expected_type=type_hints["accept_language"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument order_type", value=order_type, expected_type=type_hints["order_type"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if accept_language is not None:
            self._values["accept_language"] = accept_language
        if engine is not None:
            self._values["engine"] = engine
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if node_id is not None:
            self._values["node_id"] = node_id
        if order_type is not None:
            self._values["order_type"] = order_type
        if product_type is not None:
            self._values["product_type"] = product_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        acceptLanguage: The language of the return values. Valid values:
        zh-CN: Chinese. This is the default value.
        en-US: English.
        '''
        result = self._values.get("accept_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        engine: The engine type. Valid values:
        Redis
        Memcache
        '''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Note Default value: PrePaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
        Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
        Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
        '''
        result = self._values.get("node_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        orderType: The order type. Valid values:
        BUY: the orders that are used to purchase instances.
        UPGRADE: the orders that are used to upgrade instances.
        DOWNGRADE: the orders that are used to downgrade instances.
        '''
        result = self._values.get("order_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        productType: The edition or series of instances. Valid values:
        Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
        Tair_scm: persistent memory-optimized instances
        Tair_essd: storage-optimized instances
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the instance.
        Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone where PolarDB resources that you want to query reside.
        Note You can call the DescribeRegions operation to query information about zones.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceClassesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId"},
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance

        :param db_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258692269660977c7e20c5ef940f9edd1aa6bfcb7333dc02c21e207efb729538)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: Database instance id.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::REDIS::Instances``, which is used to query the information about ApsaraDB for Redis instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__debf0495c03c07ea8bc79909904834227feea3b7d881a3e7d76ae7c6dfcfbac0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dd5fb3c154f3551392e378ff08c3cadcced3a07e88eb69955ccd2b3231cd1f18)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The list of The Redis instance Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of The Redis instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__38793085d01b5c22bf06b109e830f49f8f96bdb59367a15ed6ad92e8fda2c898)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="architectureType")
    def architecture_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        architectureType: The architecture of the instance. Valid values:
        cluster: The instance is a cluster instance.
        standard: The instance is a standard instance.
        rwsplit: The instance is a read/write splitting instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "architectureType"))

    @architecture_type.setter
    def architecture_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c0a0aefc0c64e7b059205de3cd2852402874800e28e1d6f1638b01ed8711bc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "architectureType", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3111165a0577fb2e154c8e1340a6b89caed4ba9826c6fa9f0a95a58857587f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="editionType")
    def edition_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        editionType: The edition of the instance. Valid values:
        Community: Community Edition
        Enterprise: Enhance Edition (Tair)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "editionType"))

    @edition_type.setter
    def edition_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c814f014a033c9cdda51c638ddd9d3292efcc60cd08677a7df2d8543069305d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "editionType", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05af21a6982a4dd3c55b065d7b99282d3d7f31d2fccb2ddc2dcb9236517d02a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="expired")
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Specifies whether the instance has expired. Valid values:
        true: The instance has expired.
        false: The instance has not expired.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "expired"))

    @expired.setter
    def expired(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb27053c7e260f790b109b47fe9212d8d0cd2fda2decb92d24374813a0d26fb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expired", value)

    @builtins.property
    @jsii.member(jsii_name="globalInstance")
    def global_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
        true: Only child instances are returned.
        false: Child instances are not returned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "globalInstance"))

    @global_instance.setter
    def global_instance(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3b2c7c3125e93ec65724c1922481e2d10dba1523a5cf2859e9eea64d7608200)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "globalInstance", value)

    @builtins.property
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceClass: The instance type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a933cfa69371592630970cb7b7ec5ee7d20c101e635eba7f0b4d02566544997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceIds: The IDs of instances.
        If you specify multiple instance IDs, separate the instance IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad33112192e5871691e7298b8dac8d6448595a5563088129ccd1af9505d2f2be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="instanceStatus")
    def instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceStatus: The state of the instance. Valid values:
        Normal: The instance is normal.
        Creating: The instance is being created.
        Changing: The configurations of the instance are being changed.
        Inactive: The instance is disabled.
        Flushing: The instance is being released.
        Released: The instance is released.
        Transforming: The instance is being transformed.
        Unavailable: The instance is suspended.
        Error: The instance cannot be created.
        Migrating: The instance is being migrated.
        BackupRecovering: The instance is being restored from a backup.
        MinorVersionUpgrading: The minor version of the instance is being updated.
        NetworkModifying: The network type of the instance is being changed.
        SSLModifying: The SSL certificate of the instance is being changed.
        MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceStatus"))

    @instance_status.setter
    def instance_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c80ad7f58a7b95100ee150651bd35b1302f2eb152bda5225d97c6ae74b824da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceStatus", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The category of the instance. Valid values:
        Tair
        Redis
        Memcache
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8b5261f8c2fa4de66c0eb366b09009f969189d45beb8050f41775b9e0190224)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the instance. Valid values:
        CLASSIC: classic network
        VPC: Virtual Private Cloud (VPC)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46998a6be644fe4182bc0cfce3c3b2cf71bd77a0495bc4f30dcf041a8101ed10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="privateIp")
    def private_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIp: The private IP address of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIp"))

    @private_ip.setter
    def private_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55f70d4ba0c8e7114e23031542b83f3036cfb5848f2a658d027148bc07f50b27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIp", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9e64f48e743150a99521c5b35240b62fdf89257accc33ea53f798a83cad8418)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="searchKey")
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "searchKey"))

    @search_key.setter
    def search_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09a2a522f20330ab6186e80fdb0d02d8c0a28478ecfdd437051ca52a464994f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchKey", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1d7d2533228d32ed6420d0b876fa51dab8f6606d33f07abd3b451ea5a52b0d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adf493d3204c377b6bf48b66ac2d327804eaf784eb316116c2e03621385c5e7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8f555335d500ecd06fb5aa0f1ae3405067f4bf1d17489f85144af6fac30ce46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-redis.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "architecture_type": "architectureType",
        "charge_type": "chargeType",
        "edition_type": "editionType",
        "engine_version": "engineVersion",
        "expired": "expired",
        "global_instance": "globalInstance",
        "instance_class": "instanceClass",
        "instance_ids": "instanceIds",
        "instance_status": "instanceStatus",
        "instance_type": "instanceType",
        "network_type": "networkType",
        "private_ip": "privateIp",
        "resource_group_id": "resourceGroupId",
        "search_key": "searchKey",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        architecture_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        global_instance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_ids: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances

        :param architecture_type: 
        :param charge_type: 
        :param edition_type: 
        :param engine_version: 
        :param expired: 
        :param global_instance: 
        :param instance_class: 
        :param instance_ids: 
        :param instance_status: 
        :param instance_type: 
        :param network_type: 
        :param private_ip: 
        :param resource_group_id: 
        :param search_key: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e8955ea3558fe45847b525b5e18956ae514585f4c4ed0833c29de5cc7d4ecc4)
            check_type(argname="argument architecture_type", value=architecture_type, expected_type=type_hints["architecture_type"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument edition_type", value=edition_type, expected_type=type_hints["edition_type"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument global_instance", value=global_instance, expected_type=type_hints["global_instance"])
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument instance_status", value=instance_status, expected_type=type_hints["instance_status"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument private_ip", value=private_ip, expected_type=type_hints["private_ip"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_key", value=search_key, expected_type=type_hints["search_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if architecture_type is not None:
            self._values["architecture_type"] = architecture_type
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if edition_type is not None:
            self._values["edition_type"] = edition_type
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if global_instance is not None:
            self._values["global_instance"] = global_instance
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_ids is not None:
            self._values["instance_ids"] = instance_ids
        if instance_status is not None:
            self._values["instance_status"] = instance_status
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if network_type is not None:
            self._values["network_type"] = network_type
        if private_ip is not None:
            self._values["private_ip"] = private_ip
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_key is not None:
            self._values["search_key"] = search_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def architecture_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        architectureType: The architecture of the instance. Valid values:
        cluster: The instance is a cluster instance.
        standard: The instance is a standard instance.
        rwsplit: The instance is a read/write splitting instance.
        '''
        result = self._values.get("architecture_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        editionType: The edition of the instance. Valid values:
        Community: Community Edition
        Enterprise: Enhance Edition (Tair)
        '''
        result = self._values.get("edition_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Specifies whether the instance has expired. Valid values:
        true: The instance has expired.
        false: The instance has not expired.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def global_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
        true: Only child instances are returned.
        false: Child instances are not returned.
        '''
        result = self._values.get("global_instance")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceClass: The instance type.
        '''
        result = self._values.get("instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceIds: The IDs of instances.
        If you specify multiple instance IDs, separate the instance IDs with commas (,).
        '''
        result = self._values.get("instance_ids")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceStatus: The state of the instance. Valid values:
        Normal: The instance is normal.
        Creating: The instance is being created.
        Changing: The configurations of the instance are being changed.
        Inactive: The instance is disabled.
        Flushing: The instance is being released.
        Released: The instance is released.
        Transforming: The instance is being transformed.
        Unavailable: The instance is suspended.
        Error: The instance cannot be created.
        Migrating: The instance is being migrated.
        BackupRecovering: The instance is being restored from a backup.
        MinorVersionUpgrading: The minor version of the instance is being updated.
        NetworkModifying: The network type of the instance is being changed.
        SSLModifying: The SSL certificate of the instance is being changed.
        MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
        '''
        result = self._values.get("instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The category of the instance. Valid values:
        Tair
        Redis
        Memcache
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the instance. Valid values:
        CLASSIC: classic network
        VPC: Virtual Private Cloud (VPC)
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIp: The private IP address of the instance.
        '''
        result = self._values.get("private_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
        '''
        result = self._values.get("search_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Accounts",
    "AccountsProps",
    "Instance",
    "InstanceClasses",
    "InstanceClassesProps",
    "InstanceProps",
    "Instances",
    "InstancesProps",
    "RosAccounts",
    "RosAccountsProps",
    "RosInstance",
    "RosInstanceClasses",
    "RosInstanceClassesProps",
    "RosInstanceProps",
    "RosInstances",
    "RosInstancesProps",
]

publication.publish()

def _typecheckingstub__be856133523179c24cac3a9810e3777a08a3cab8b351fce5df3e8aa005449b83(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ab4f82335659622caf61a97e4a0afaab147c2f0310df14df7ca221f446a3457(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4643042792aa3b027a28c7d36d7c189734b31ca7d27f45d8a0d93af816ee0a9b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9f944b897ddb39e49861094dd123b3bec46e3165b961e61e9bc71d288ddb081(
    value: AccountsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dc06a9b79b89bd69d5ee838526d4f9c3e54d11d24e3ef0f18b3d9a45fab02ad(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c1a20c6787c92425b3e29d54f9beded7ac47c9ab39d687b085eb5a7f55c8556(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b83fcd6e6e014aa043ccec1d6431076b77e5d9bfa258ac7293a5defe7cb0d858(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9dccb140e5f3a2eff8ecebfbe9c99931b77349b814de37713280dc35dcc56c3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fae0711416d614dd2aa51356fa81b98ac1281664fa4f2ac46300c3f9a9aeaef(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bf2ad8e481e56e2a897dc6dc206b3ca56f56df38d2e45d53ae86cd5ad362083(
    value: InstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa5966efca85da62094c2a628688c98bb407fdebdc93af28ea81dfadee406018(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f740a186ec4a35418cd34b7ee45a89c5caeec7d8f468c74757420e6d82711e98(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstanceClassesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__221986c1e59d168d57c1f7d753272d5530241b4c78fdfd9273bf62a5fcc6c1d0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de845e985a660b0036b3d35dd28f4279ea8f630d7482ab5beb016f2210c7110e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d983aa0ba99bfdd9f74bb841d801893db18820dcec8058459505da72dfeca9c(
    value: InstanceClassesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__160a0c1c840b0b4584ee4b74072930eb6a2d3e0f33eec6f806788dba4ab2469b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44ea1fce5c2bebff16fcab7f0257ae73f15bbdd48b8b495e8f80c3da8bf342ed(
    *,
    accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed14d9115def17885a624722a59326989f5cad70bfb6ac78b4f8a883190cdc11(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7f83f0bb0e66f4ac6e8e186293e23292c818b23758fdad5093adb2badea6b46(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b258fa7ffae9fe8f658f964a05917bb0c73896a5f18609b6cb12e5d522d8f790(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dec915ec77d01ff1bfbc2a4ce1eb97f1638a803718725461b152f0231cbbadcb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b94f2ec57edd210fd20dd9a6d8b89f4d4d1d5d7f7d30bbdfb7227ea0cfd5dc3(
    value: InstancesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c9adbc0718c97b22ec2c5b19d366110531a68baf8b6256f06e836acdcd281cb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f02485db071fde0c06915cf528023620e9fb42935cf19d9df9e638e16d98228d(
    *,
    architecture_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    global_instance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_ids: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53ddf457100b758a6c05bd59f5fd7e9189e478a99ba629160cf5a9626d85b190(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ac23236be3514d48bd964226398dd7f8d627151238e0974df30057bf4d03e5a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfb405aa87c40c1a74e0b7ced3a725e3224b053604703d832bf456f3cf46e0d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d228ac090a971dfd48391095a3f92f2b37d14cf9f67b8c1c8238d72e5d48cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a306011e028fd7c4e4f961f31590aae9ad5b9c95c1b9b68cb04b9161514d340c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d45150aae4f2272e8a8d777c4c3c7c3bc4584d979d7afca031439c025069f9f2(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3407b27596a1e7b9b3e79f9134d6bbc55fe070902665e65c704bd9d9827750b9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ceb94d8e0e99cb97fcacf5468e2438196cde6a0ce8d3be1fab4f01ebc33179d0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8a57f2c466a7188aebd614e2b5154a5f878edb40191786cd4eadfeb0fbac920(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5790718a67a889d3bf884a8d62413f00896a4d60935063673dd52da17519ca5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__313a3d48ecf49367e497d2dc904d2a51c8c3af55ecac97b907c13848be25f63f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceClassesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ba82c84d4dc7a86b8721a61d58220b98231a31dfc642e6d0379a92394b9a522(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__634baadbbda60d46e7f88745e9cb70b7c6b74732f9a8121e218ed6e3a6b5c192(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a79250c31f15198f43438ad7c9a46c2d866d33a27eb21fc8d7fe41d668657610(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__781b234595e25c820b91661e439259c6a0827600d07979aa7280a9bf31b27157(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9da0b5f37c5e73e1d9399f262af1e7fd02a2b74377482e4b11008cc3e3e385f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__287fdd06912e58c9b46e017dcae140356ae2b06f60cc4888b8c38a00b2cc91f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba934862b7fea79a31ca6c05125cb24901d54e9918bfddc6066f28456ea58787(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__399f96673a872be729ca922fea342923cc8944452c88516cbb3fe8ff84d57035(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92774ab966afce9ce57b86580ae8eb4409a5ae57d02bee4b66987f2d50bebc9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83598d963cbb8e9d3ac27fdebe8e0845838fa685240a2d7143a762f8a483fbc4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0f0d3a559994b92a862f0c7441b0d37b085966b6c3772c7bb226d3687778f47(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1666af083bf2cbe25fdc6f8b43ce80a0e58172a1fe3927444acac0ed29a9ac85(
    *,
    accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258692269660977c7e20c5ef940f9edd1aa6bfcb7333dc02c21e207efb729538(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__debf0495c03c07ea8bc79909904834227feea3b7d881a3e7d76ae7c6dfcfbac0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd5fb3c154f3551392e378ff08c3cadcced3a07e88eb69955ccd2b3231cd1f18(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38793085d01b5c22bf06b109e830f49f8f96bdb59367a15ed6ad92e8fda2c898(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c0a0aefc0c64e7b059205de3cd2852402874800e28e1d6f1638b01ed8711bc4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3111165a0577fb2e154c8e1340a6b89caed4ba9826c6fa9f0a95a58857587f4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c814f014a033c9cdda51c638ddd9d3292efcc60cd08677a7df2d8543069305d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05af21a6982a4dd3c55b065d7b99282d3d7f31d2fccb2ddc2dcb9236517d02a9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb27053c7e260f790b109b47fe9212d8d0cd2fda2decb92d24374813a0d26fb3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3b2c7c3125e93ec65724c1922481e2d10dba1523a5cf2859e9eea64d7608200(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a933cfa69371592630970cb7b7ec5ee7d20c101e635eba7f0b4d02566544997(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad33112192e5871691e7298b8dac8d6448595a5563088129ccd1af9505d2f2be(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c80ad7f58a7b95100ee150651bd35b1302f2eb152bda5225d97c6ae74b824da(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8b5261f8c2fa4de66c0eb366b09009f969189d45beb8050f41775b9e0190224(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46998a6be644fe4182bc0cfce3c3b2cf71bd77a0495bc4f30dcf041a8101ed10(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55f70d4ba0c8e7114e23031542b83f3036cfb5848f2a658d027148bc07f50b27(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9e64f48e743150a99521c5b35240b62fdf89257accc33ea53f798a83cad8418(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09a2a522f20330ab6186e80fdb0d02d8c0a28478ecfdd437051ca52a464994f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1d7d2533228d32ed6420d0b876fa51dab8f6606d33f07abd3b451ea5a52b0d7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adf493d3204c377b6bf48b66ac2d327804eaf784eb316116c2e03621385c5e7e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8f555335d500ecd06fb5aa0f1ae3405067f4bf1d17489f85144af6fac30ce46(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e8955ea3558fe45847b525b5e18956ae514585f4c4ed0833c29de5cc7d4ecc4(
    *,
    architecture_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    global_instance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_ids: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
