'''
## Aliyun ROS POLARDBX Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as POLARDBX from '@alicloud/ros-cdk-polardbx';
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
    jsii_type="@alicloud/ros-cdk-polardbx.Account",
):
    '''A ROS resource type:  ``ALIYUN::PolarDBX::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PolarDBX::Account``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13598db63787ba5b323e5439e584521dd1571baf91fbfbecd29e1448b2e0512b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountDescription: Account description information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountName: Account name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountType: Account type.

        0 represents an ordinary account, and 1 represents a high-privilege account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardbx.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_instance_id": "dbInstanceId",
        "account_description": "accountDescription",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PolarDBX::Account``.

        :param account_name: Property accountName: Account name.
        :param account_password: Property accountPassword: The password of the account.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param account_description: Property accountDescription: Account description information.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7165a20c6a92f9e68d67aded83f36a45b80ecc0e303ad622f7120ed6f9a1455)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountName: Account name.'''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPassword: The password of the account.'''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountDescription: Account description information.'''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardbx.DBInstance",
):
    '''A ROS resource type:  ``ALIYUN::PolarDBX::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PolarDBX::DBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22bde9a4bd833d58940af0c51694b5b99a2f145ec43d38a38f9a88c3de78b366)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: Intranet connection string.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceName")
    def attr_db_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceName: The name of the instance that you create.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The ID of the order.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: Intranet connection port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardbx.DBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_node_class": "dbNodeClass",
        "db_node_count": "dbNodeCount",
        "engine_version": "engineVersion",
        "primary_zone": "primaryZone",
        "topology_type": "topologyType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "auto_renew": "autoRenew",
        "db_instance_description": "dbInstanceDescription",
        "pay_type": "payType",
        "period": "period",
        "resource_group_id": "resourceGroupId",
        "secondary_zone": "secondaryZone",
        "security_ip_config": "securityIpConfig",
        "tertiary_zone": "tertiaryZone",
        "used_time": "usedTime",
    },
)
class DBInstanceProps:
    def __init__(
        self,
        *,
        db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_zone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topology_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDBInstance.SecurityIpConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tertiary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PolarDBX::DBInstance``.

        :param db_node_class: Property dbNodeClass: The specification of the nodes in the instance you want to create.
        :param db_node_count: Property dbNodeCount: The number of nodes in the instance you want to create.
        :param engine_version: Property engineVersion: The version of the database engine.
        :param primary_zone: Property primaryZone: The primary zone.
        :param topology_type: Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
        :param vpc_id: Property vpcId: The ID of the VPC to which the instance belongs.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
        :param db_instance_description: Property dbInstanceDescription: The description of the instance.
        :param pay_type: Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
        :param period: Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param secondary_zone: Property secondaryZone: The secondary zone.
        :param security_ip_config: Property securityIpConfig: Instance whitelist configuration.
        :param tertiary_zone: Property tertiaryZone: The tertiary zone.
        :param used_time: Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ac9e98b8d343b8b47ff13d552a54c106c88b7eb70572942e1d8710be726dc22)
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_node_count", value=db_node_count, expected_type=type_hints["db_node_count"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument primary_zone", value=primary_zone, expected_type=type_hints["primary_zone"])
            check_type(argname="argument topology_type", value=topology_type, expected_type=type_hints["topology_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secondary_zone", value=secondary_zone, expected_type=type_hints["secondary_zone"])
            check_type(argname="argument security_ip_config", value=security_ip_config, expected_type=type_hints["security_ip_config"])
            check_type(argname="argument tertiary_zone", value=tertiary_zone, expected_type=type_hints["tertiary_zone"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_node_class": db_node_class,
            "db_node_count": db_node_count,
            "engine_version": engine_version,
            "primary_zone": primary_zone,
            "topology_type": topology_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secondary_zone is not None:
            self._values["secondary_zone"] = secondary_zone
        if security_ip_config is not None:
            self._values["security_ip_config"] = security_ip_config
        if tertiary_zone is not None:
            self._values["tertiary_zone"] = tertiary_zone
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeClass: The specification of the nodes in the instance you want to create.'''
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbNodeCount: The number of nodes in the instance you want to create.'''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: The version of the database engine.'''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primaryZone: The primary zone.'''
        result = self._values.get("primary_zone")
        assert result is not None, "Required property 'primary_zone' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topology_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topologyType: The topology type of the instance.

        Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
        '''
        result = self._values.get("topology_type")
        assert result is not None, "Required property 'topology_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC to which the instance belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of the vSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal for the instance.

        Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method of the instance.

        Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The unit of the billing cycle for the instance.

        The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondaryZone: The secondary zone.'''
        result = self._values.get("secondary_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.SecurityIpConfigProperty"]]:
        '''Property securityIpConfig: Instance whitelist configuration.'''
        result = self._values.get("security_ip_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.SecurityIpConfigProperty"]], result)

    @builtins.property
    def tertiary_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tertiaryZone: The tertiary zone.'''
        result = self._values.get("tertiary_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usedTime: The subscription period of the instance.

        Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Database(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardbx.Database",
):
    '''A ROS resource type:  ``ALIYUN::PolarDBX::Database``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DatabaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PolarDBX::Database``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8426c156f0c63e55d3d5182f44c27d777a00e32f21c9902434eb136c218bf987)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accounts: List of accounts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="attrCharacterSetName")
    def attr_character_set_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CharacterSetName: Character set, which supports the following character sets:.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCharacterSetName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseDescription")
    def attr_database_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DatabaseDescription: Database description information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabaseDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseName")
    def attr_database_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DatabaseName: The name of the database.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabaseName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardbx.DatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "accounts": "accounts",
        "character_set_name": "characterSetName",
        "database_name": "databaseName",
        "db_instance_id": "dbInstanceId",
        "database_description": "databaseDescription",
        "mode": "mode",
    },
)
class DatabaseProps:
    def __init__(
        self,
        *,
        accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDatabase.AccountsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PolarDBX::Database``.

        :param accounts: Property accounts: List of accounts.
        :param character_set_name: Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - **gbk** - **latin1 * * - **utf8mb4 * *.
        :param database_name: Property databaseName: The name of the database.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param database_description: Property databaseDescription: Database description information.
        :param mode: Property mode: The mode selected when creating the database. The values are as follows: - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table; - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90c77697d1a2d03a4f961ed491664f43c9f5ba8f3e9e88cf000fbb59d63057ba)
            check_type(argname="argument accounts", value=accounts, expected_type=type_hints["accounts"])
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument database_description", value=database_description, expected_type=type_hints["database_description"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accounts": accounts,
            "character_set_name": character_set_name,
            "database_name": database_name,
            "db_instance_id": db_instance_id,
        }
        if database_description is not None:
            self._values["database_description"] = database_description
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def accounts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatabase.AccountsProperty"]]]:
        '''Property accounts: List of accounts.'''
        result = self._values.get("accounts")
        assert result is not None, "Required property 'accounts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatabase.AccountsProperty"]]], result)

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - **gbk** - **latin1 * * - **utf8mb4 * *.'''
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property databaseName: The name of the database.'''
        result = self._values.get("database_name")
        assert result is not None, "Required property 'database_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property databaseDescription: Database description information.'''
        result = self._values.get("database_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mode: The mode selected when creating the database.

        The values are as follows:

        - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
        - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardbx.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::PolarDBX::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PolarDBX::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc30304e14497288141349228cca3c9996587eaf79b27b28693746131ff22de8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__23c4877730cf141f70190277acdee75910be06c4fa5aaa1e695d8cbb10fa5357)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountDescription: Account description information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountName: Account name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountType")
    def attr_account_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

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
        :Property: accountName: Account name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50fe348561aa2a345e3b02596bbf0524215bc3d3690b26b65480a2808973a393)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPassword: The password of the account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__113087444870876045a2db00aafac1a73bb9a1065eab5c31d4f0070f3341e51b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27939533f0975918c0e0e87f78e039f78f7958adc64b2a68549a8edeafe8ffaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c31e6e2e3e8e8fe64290630ab9435e8c6564d2f66403573a2831f9e7b223697b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountDescription: Account description information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2ffffbaa452e8ee22a966203f5ce7fdeb1beabda99bd03aeb057cd5fce976d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardbx.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "account_name": "accountName",
        "account_password": "accountPassword",
        "db_instance_id": "dbInstanceId",
        "account_description": "accountDescription",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PolarDBX::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9707cb1c659ded1c745c1ce138feacff4fdd099281ae52fc7ce0e9a27871e285)
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument account_password", value=account_password, expected_type=type_hints["account_password"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_description", value=account_description, expected_type=type_hints["account_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description

    @builtins.property
    def account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountName: Account name.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountPassword: The password of the account.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountDescription: Account description information.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardbx.RosDBInstance",
):
    '''A ROS template type:  ``ALIYUN::PolarDBX::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PolarDBX::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78de18f07bbe811921761e23b08c135e9e7bc06e0e6fb4b1a161112a9dfa888d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e237c787708cc1dc8297b34261deb087492d9f8a80915ff2866593ab72faefce)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: Intranet connection string.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceName")
    def attr_db_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceName: The name of the instance that you create.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The ID of the order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Intranet connection port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbNodeClass")
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeClass: The specification of the nodes in the instance you want to create.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeClass"))

    @db_node_class.setter
    def db_node_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deaf93f418b4d92fd285a8e8a0e793a5953c1d12960845343889af617dec5ee7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeCount")
    def db_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeCount: The number of nodes in the instance you want to create.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbNodeCount"))

    @db_node_count.setter
    def db_node_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b43719079c38b8c9cda76f9b4fbd7539a0dce9774a68ac3710f9c013103e4f76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeCount", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7867737da7a06fa3cd8ba2eb0d97cf763b4d7d0d774ad9125550a3339a54390e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engineVersion: The version of the database engine.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6497275aca72ae3359b796525b73cff7e05fbdda4e3d6c55a441c32356e0c03e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="primaryZone")
    def primary_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primaryZone: The primary zone.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primaryZone"))

    @primary_zone.setter
    def primary_zone(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__017f5a026f7044efdc6aa5a03f5aed0c0b387d2c68228fa3b14a16fe03f70a22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryZone", value)

    @builtins.property
    @jsii.member(jsii_name="topologyType")
    def topology_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topologyType"))

    @topology_type.setter
    def topology_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__516ca8ce80fb0555a53d913ed3a60f165c31537653c681e60ba43106c4ae5c21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topologyType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the instance belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b069f31aae6f3543c17c8c0e3b7c8b8b2bf6c41413235e1fb3c753571f88bc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__378c85e8a5f81eda3f99e20ce1ef86aa0d78db4006c378cd5b86aeba75f1afd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__375b2103aa0515b67433aab82fadbb6d4a4f296f8a08e60a4c52ce20475640c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__675edc06f1f33d6e1f6f8f7a550b84ca64aee5386e9b4501f5de7574919d7a19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31e8bb30d0f0864ee75960c8579bad81d24c3b248dcff49dcd0851c760323c2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fe14167312b7e971d66c4b27e1e8356cd39c1eeb4e7bd26cf123349a390b48d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce1beae381f06e8906dc291e219e8754e17aa10e5fd269cc5697451d859197cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryZone")
    def secondary_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryZone: The secondary zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondaryZone"))

    @secondary_zone.setter
    def secondary_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fdb6c32cf0ad02ea36be96023eb6072d23fe12afd6b59edfe44791163694142)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryZone", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpConfig")
    def security_ip_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.SecurityIpConfigProperty"]]:
        '''
        :Property: securityIpConfig: Instance whitelist configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.SecurityIpConfigProperty"]], jsii.get(self, "securityIpConfig"))

    @security_ip_config.setter
    def security_ip_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDBInstance.SecurityIpConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c82ec536d78aee6cb527da82f555d58e27fef6149717ace80bf1b955aa6bcb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpConfig", value)

    @builtins.property
    @jsii.member(jsii_name="tertiaryZone")
    def tertiary_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tertiaryZone: The tertiary zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tertiaryZone"))

    @tertiary_zone.setter
    def tertiary_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb6cdba83dd100d8293839de7f9e01d095e76f5a7a05ad638dc6a366b90419d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tertiaryZone", value)

    @builtins.property
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28e811cf8ad48f3b107d10e2a7c1af47032ca483ef48572588afe9ad1732b487)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usedTime", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-polardbx.RosDBInstance.SecurityIpConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "group_name": "groupName",
            "modify_mode": "modifyMode",
            "security_ip_list": "securityIpList",
        },
    )
    class SecurityIpConfigProperty:
        def __init__(
            self,
            *,
            group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            modify_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param group_name: 
            :param modify_mode: 
            :param security_ip_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6a9e25182cc226ae99da2d8dd738a5569e258e4f6b80ceb8982ff5213a743e5c)
                check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
                check_type(argname="argument modify_mode", value=modify_mode, expected_type=type_hints["modify_mode"])
                check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if group_name is not None:
                self._values["group_name"] = group_name
            if modify_mode is not None:
                self._values["modify_mode"] = modify_mode
            if security_ip_list is not None:
                self._values["security_ip_list"] = security_ip_list

        @builtins.property
        def group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: groupName: The whitelist group name of the instance.
            '''
            result = self._values.get("group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def modify_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            modifyMode: Whitelist modification mode, the value range is as follows:
            0: Overwrite and modify the whitelist group;1: Add a whitelist group;2: Delete the whitelist group.
            '''
            result = self._values.get("modify_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def security_ip_list(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityIpList: The IP list in the whitelist group, multiple IP whitelists are separated by commas (,).
            '''
            result = self._values.get("security_ip_list")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecurityIpConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardbx.RosDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_node_class": "dbNodeClass",
        "db_node_count": "dbNodeCount",
        "engine_version": "engineVersion",
        "primary_zone": "primaryZone",
        "topology_type": "topologyType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "auto_renew": "autoRenew",
        "db_instance_description": "dbInstanceDescription",
        "pay_type": "payType",
        "period": "period",
        "resource_group_id": "resourceGroupId",
        "secondary_zone": "secondaryZone",
        "security_ip_config": "securityIpConfig",
        "tertiary_zone": "tertiaryZone",
        "used_time": "usedTime",
    },
)
class RosDBInstanceProps:
    def __init__(
        self,
        *,
        db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_zone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topology_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.SecurityIpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tertiary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PolarDBX::DBInstance``.

        :param db_node_class: 
        :param db_node_count: 
        :param engine_version: 
        :param primary_zone: 
        :param topology_type: 
        :param vpc_id: 
        :param v_switch_id: 
        :param auto_renew: 
        :param db_instance_description: 
        :param pay_type: 
        :param period: 
        :param resource_group_id: 
        :param secondary_zone: 
        :param security_ip_config: 
        :param tertiary_zone: 
        :param used_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0fb90d3ad780bf09141123f6310ccea74c317af069ded219e72c85ccc42acbb)
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_node_count", value=db_node_count, expected_type=type_hints["db_node_count"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument primary_zone", value=primary_zone, expected_type=type_hints["primary_zone"])
            check_type(argname="argument topology_type", value=topology_type, expected_type=type_hints["topology_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secondary_zone", value=secondary_zone, expected_type=type_hints["secondary_zone"])
            check_type(argname="argument security_ip_config", value=security_ip_config, expected_type=type_hints["security_ip_config"])
            check_type(argname="argument tertiary_zone", value=tertiary_zone, expected_type=type_hints["tertiary_zone"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_node_class": db_node_class,
            "db_node_count": db_node_count,
            "engine_version": engine_version,
            "primary_zone": primary_zone,
            "topology_type": topology_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secondary_zone is not None:
            self._values["secondary_zone"] = secondary_zone
        if security_ip_config is not None:
            self._values["security_ip_config"] = security_ip_config
        if tertiary_zone is not None:
            self._values["tertiary_zone"] = tertiary_zone
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeClass: The specification of the nodes in the instance you want to create.
        '''
        result = self._values.get("db_node_class")
        assert result is not None, "Required property 'db_node_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbNodeCount: The number of nodes in the instance you want to create.
        '''
        result = self._values.get("db_node_count")
        assert result is not None, "Required property 'db_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engineVersion: The version of the database engine.
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primaryZone: The primary zone.
        '''
        result = self._values.get("primary_zone")
        assert result is not None, "Required property 'primary_zone' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topology_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
        '''
        result = self._values.get("topology_type")
        assert result is not None, "Required property 'topology_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the instance belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondaryZone: The secondary zone.
        '''
        result = self._values.get("secondary_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.SecurityIpConfigProperty]]:
        '''
        :Property: securityIpConfig: Instance whitelist configuration.
        '''
        result = self._values.get("security_ip_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.SecurityIpConfigProperty]], result)

    @builtins.property
    def tertiary_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tertiaryZone: The tertiary zone.
        '''
        result = self._values.get("tertiary_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatabase(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardbx.RosDatabase",
):
    '''A ROS template type:  ``ALIYUN::PolarDBX::Database``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatabaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PolarDBX::Database``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0426d7f4a46b0b073a2bd4eee769e8134d3770494e8ab45f299a27e7a5542f8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3619c606500452c0a7adbf07d7ba8f9bfc5ff24bc37666324b09a2059a3f47fe)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accounts: List of accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="attrCharacterSetName")
    def attr_character_set_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CharacterSetName: Character set, which supports the following character sets:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCharacterSetName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseDescription")
    def attr_database_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatabaseDescription: Database description information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabaseDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseName")
    def attr_database_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatabaseName: The name of the database.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabaseName"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accounts")
    def accounts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatabase.AccountsProperty"]]]:
        '''
        :Property: accounts: List of accounts.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatabase.AccountsProperty"]]], jsii.get(self, "accounts"))

    @accounts.setter
    def accounts(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatabase.AccountsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e84c85199c77d46b5a0b60d2332e41a4c3da017e8186f5d661b1dbdf76a6d764)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accounts", value)

    @builtins.property
    @jsii.member(jsii_name="characterSetName")
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        characterSetName: Character set, which supports the following character sets:

        - **utf8 * *
        - **gbk**
        - **latin1 * *
        - **utf8mb4 * *.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "characterSetName"))

    @character_set_name.setter
    def character_set_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f40e167e02577ec31e943fb143d6745ff208cc2f4a321a57c3b3f48ffd022a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "characterSetName", value)

    @builtins.property
    @jsii.member(jsii_name="databaseName")
    def database_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: databaseName: The name of the database.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "databaseName"))

    @database_name.setter
    def database_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3a5ce7413f2bdae51426b2c8a1efa1881d17309f205eac47fcb473b63efe828)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databaseName", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dea483d7fb8a643b5b34d28e9c498c9e67335fe315c1293eac678dc452608cbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28f50c96d2ef785f0d741c59d9c7999cda225d85f4e6dbcf0865fb43e30b598b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="databaseDescription")
    def database_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: databaseDescription: Database description information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "databaseDescription"))

    @database_description.setter
    def database_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea2ae09a2fd88bfaef68c33a8f1e158f12faaa4fe15f090215f30e2a4b2562b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databaseDescription", value)

    @builtins.property
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mode: The mode selected when creating the database. The values are as follows:

        - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
        - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0943932ebacee4815f10f26d9401cb5d70bc554d5e8ac28faf4a0aad272de4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mode", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-polardbx.RosDatabase.AccountsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "account_name": "accountName",
            "account_privilege": "accountPrivilege",
        },
    )
    class AccountsProperty:
        def __init__(
            self,
            *,
            account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param account_name: 
            :param account_privilege: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2805285e597808ce1db134ebe7c7002cfb74bf6035e244db2a6a931990ffb59d)
                check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
                check_type(argname="argument account_privilege", value=account_privilege, expected_type=type_hints["account_privilege"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "account_name": account_name,
                "account_privilege": account_privilege,
            }

        @builtins.property
        def account_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: accountName: Account name.
            '''
            result = self._values.get("account_name")
            assert result is not None, "Required property 'account_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def account_privilege(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: accountPrivilege: Permission.
            '''
            result = self._values.get("account_privilege")
            assert result is not None, "Required property 'account_privilege' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AccountsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardbx.RosDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "accounts": "accounts",
        "character_set_name": "characterSetName",
        "database_name": "databaseName",
        "db_instance_id": "dbInstanceId",
        "database_description": "databaseDescription",
        "mode": "mode",
    },
)
class RosDatabaseProps:
    def __init__(
        self,
        *,
        accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDatabase.AccountsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PolarDBX::Database``.

        :param accounts: 
        :param character_set_name: 
        :param database_name: 
        :param db_instance_id: 
        :param database_description: 
        :param mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47336f9b7882c1cb35918b1f96e589612af0c597304efb843485a496801cb42c)
            check_type(argname="argument accounts", value=accounts, expected_type=type_hints["accounts"])
            check_type(argname="argument character_set_name", value=character_set_name, expected_type=type_hints["character_set_name"])
            check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument database_description", value=database_description, expected_type=type_hints["database_description"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accounts": accounts,
            "character_set_name": character_set_name,
            "database_name": database_name,
            "db_instance_id": db_instance_id,
        }
        if database_description is not None:
            self._values["database_description"] = database_description
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def accounts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDatabase.AccountsProperty]]]:
        '''
        :Property: accounts: List of accounts.
        '''
        result = self._values.get("accounts")
        assert result is not None, "Required property 'accounts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDatabase.AccountsProperty]]], result)

    @builtins.property
    def character_set_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        characterSetName: Character set, which supports the following character sets:

        - **utf8 * *
        - **gbk**
        - **latin1 * *
        - **utf8mb4 * *.
        '''
        result = self._values.get("character_set_name")
        assert result is not None, "Required property 'character_set_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: databaseName: The name of the database.
        '''
        result = self._values.get("database_name")
        assert result is not None, "Required property 'database_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: databaseDescription: Database description information.
        '''
        result = self._values.get("database_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mode: The mode selected when creating the database. The values are as follows:

        - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
        - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountProps",
    "DBInstance",
    "DBInstanceProps",
    "Database",
    "DatabaseProps",
    "RosAccount",
    "RosAccountProps",
    "RosDBInstance",
    "RosDBInstanceProps",
    "RosDatabase",
    "RosDatabaseProps",
]

publication.publish()

def _typecheckingstub__13598db63787ba5b323e5439e584521dd1571baf91fbfbecd29e1448b2e0512b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7165a20c6a92f9e68d67aded83f36a45b80ecc0e303ad622f7120ed6f9a1455(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22bde9a4bd833d58940af0c51694b5b99a2f145ec43d38a38f9a88c3de78b366(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ac9e98b8d343b8b47ff13d552a54c106c88b7eb70572942e1d8710be726dc22(
    *,
    db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_zone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topology_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.SecurityIpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tertiary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8426c156f0c63e55d3d5182f44c27d777a00e32f21c9902434eb136c218bf987(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90c77697d1a2d03a4f961ed491664f43c9f5ba8f3e9e88cf000fbb59d63057ba(
    *,
    accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDatabase.AccountsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc30304e14497288141349228cca3c9996587eaf79b27b28693746131ff22de8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23c4877730cf141f70190277acdee75910be06c4fa5aaa1e695d8cbb10fa5357(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50fe348561aa2a345e3b02596bbf0524215bc3d3690b26b65480a2808973a393(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__113087444870876045a2db00aafac1a73bb9a1065eab5c31d4f0070f3341e51b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27939533f0975918c0e0e87f78e039f78f7958adc64b2a68549a8edeafe8ffaa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c31e6e2e3e8e8fe64290630ab9435e8c6564d2f66403573a2831f9e7b223697b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2ffffbaa452e8ee22a966203f5ce7fdeb1beabda99bd03aeb057cd5fce976d2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9707cb1c659ded1c745c1ce138feacff4fdd099281ae52fc7ce0e9a27871e285(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78de18f07bbe811921761e23b08c135e9e7bc06e0e6fb4b1a161112a9dfa888d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e237c787708cc1dc8297b34261deb087492d9f8a80915ff2866593ab72faefce(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deaf93f418b4d92fd285a8e8a0e793a5953c1d12960845343889af617dec5ee7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b43719079c38b8c9cda76f9b4fbd7539a0dce9774a68ac3710f9c013103e4f76(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7867737da7a06fa3cd8ba2eb0d97cf763b4d7d0d774ad9125550a3339a54390e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6497275aca72ae3359b796525b73cff7e05fbdda4e3d6c55a441c32356e0c03e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__017f5a026f7044efdc6aa5a03f5aed0c0b387d2c68228fa3b14a16fe03f70a22(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__516ca8ce80fb0555a53d913ed3a60f165c31537653c681e60ba43106c4ae5c21(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b069f31aae6f3543c17c8c0e3b7c8b8b2bf6c41413235e1fb3c753571f88bc0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__378c85e8a5f81eda3f99e20ce1ef86aa0d78db4006c378cd5b86aeba75f1afd3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__375b2103aa0515b67433aab82fadbb6d4a4f296f8a08e60a4c52ce20475640c1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__675edc06f1f33d6e1f6f8f7a550b84ca64aee5386e9b4501f5de7574919d7a19(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31e8bb30d0f0864ee75960c8579bad81d24c3b248dcff49dcd0851c760323c2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fe14167312b7e971d66c4b27e1e8356cd39c1eeb4e7bd26cf123349a390b48d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce1beae381f06e8906dc291e219e8754e17aa10e5fd269cc5697451d859197cc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fdb6c32cf0ad02ea36be96023eb6072d23fe12afd6b59edfe44791163694142(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c82ec536d78aee6cb527da82f555d58e27fef6149717ace80bf1b955aa6bcb2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDBInstance.SecurityIpConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb6cdba83dd100d8293839de7f9e01d095e76f5a7a05ad638dc6a366b90419d7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28e811cf8ad48f3b107d10e2a7c1af47032ca483ef48572588afe9ad1732b487(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a9e25182cc226ae99da2d8dd738a5569e258e4f6b80ceb8982ff5213a743e5c(
    *,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modify_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0fb90d3ad780bf09141123f6310ccea74c317af069ded219e72c85ccc42acbb(
    *,
    db_node_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_zone: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topology_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDBInstance.SecurityIpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tertiary_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0426d7f4a46b0b073a2bd4eee769e8134d3770494e8ab45f299a27e7a5542f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3619c606500452c0a7adbf07d7ba8f9bfc5ff24bc37666324b09a2059a3f47fe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e84c85199c77d46b5a0b60d2332e41a4c3da017e8186f5d661b1dbdf76a6d764(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDatabase.AccountsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f40e167e02577ec31e943fb143d6745ff208cc2f4a321a57c3b3f48ffd022a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3a5ce7413f2bdae51426b2c8a1efa1881d17309f205eac47fcb473b63efe828(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dea483d7fb8a643b5b34d28e9c498c9e67335fe315c1293eac678dc452608cbb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28f50c96d2ef785f0d741c59d9c7999cda225d85f4e6dbcf0865fb43e30b598b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea2ae09a2fd88bfaef68c33a8f1e158f12faaa4fe15f090215f30e2a4b2562b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0943932ebacee4815f10f26d9401cb5d70bc554d5e8ac28faf4a0aad272de4c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2805285e597808ce1db134ebe7c7002cfb74bf6035e244db2a6a931990ffb59d(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_privilege: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47336f9b7882c1cb35918b1f96e589612af0c597304efb843485a496801cb42c(
    *,
    accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDatabase.AccountsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    character_set_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
