'''
## Aliyun ROS GPDB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as GPDB from '@alicloud/ros-cdk-gpdb';
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
    jsii_type="@alicloud/ros-cdk-gpdb.Account",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::Account``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__626fe14fa2d762e0dcc84a1a0b1aa4d97e6714972017d08eb58355a1dc21fa87)
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
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gpdb.AccountProps",
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
        '''Properties for defining a ``ALIYUN::GPDB::Account``.

        :param account_name: Property accountName: The name of the privileged account. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or a digit. The name cannot start with gp. The name must be 2 to 16 characters in length.
        :param account_password: Property accountPassword: The password of the privileged account. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! @ # $ % ^ & * ( ) _ + - = The password must be 8 to 32 characters in length.
        :param db_instance_id: Property dbInstanceId: The ID of the instance. Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
        :param account_description: Property accountDescription: The description of the privileged account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b896ba00b09a90fabeb323569de4d08bb539272ddca78c295a33f0782800bf96)
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
        '''Property accountName: The name of the privileged account.

        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a lowercase letter and end with a lowercase letter or a digit.
        The name cannot start with gp.
        The name must be 2 to 16 characters in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountPassword: The password of the privileged account.

        The password must contain at least three of the following character types: uppercase
        letters, lowercase letters, digits, and special characters.
        Special characters include ! @ # $ % ^ & * ( ) _ + - =
        The password must be 8 to 32 characters in length.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.

        Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        region, including instance IDs.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountDescription: The description of the privileged account.'''
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
    jsii_type="@alicloud/ros-cdk-gpdb.DBInstance",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::DBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ac5d3d197db2461e111c98b052eeee02d0fc03f17a683073e66a3d597f7a030)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The endpoint of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The order ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: The port used to connect to the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gpdb.DBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_group_count": "dbInstanceGroupCount",
        "engine_version": "engineVersion",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "db_instance_description": "dbInstanceDescription",
        "pay_type": "payType",
        "period": "period",
        "period_unit": "periodUnit",
        "security_ip_list": "securityIpList",
        "tags": "tags",
        "vpc_id": "vpcId",
    },
)
class DBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_group_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDBInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::DBInstance``.

        :param db_instance_class: Property dbInstanceClass: The instance type.
        :param db_instance_group_count: Property dbInstanceGroupCount: The number of compute nodes in the instance.
        :param engine_version: Property engineVersion: The version of the database engine.
        :param v_switch_id: Property vSwitchId: The vSwitch ID of the instance.
        :param zone_id: Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions operation to query the most recent zone list.
        :param db_instance_description: Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        :param pay_type: Property payType: The billing method of the instance. Default value: Postpaid. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param period: Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        :param period_unit: Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        :param security_ip_list: Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value: 127.0.0.1.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you must also specify the VPCId parameter. The specified region of the VPC must be the same as the RegionId value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__777da448732a953451d42cdf65572b1b2e1df0fbb772a44ee39827922339ff39)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_group_count", value=db_instance_group_count, expected_type=type_hints["db_instance_group_count"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_group_count": db_instance_group_count,
            "engine_version": engine_version,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceClass: The instance type.'''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_group_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceGroupCount: The number of compute nodes in the instance.'''
        result = self._values.get("db_instance_group_count")
        assert result is not None, "Required property 'db_instance_group_count' is missing"
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
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The vSwitch ID of the instance.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.

        You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.

        The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method of the instance.

        Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period.

        While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: Unit of subscription period, it could be Month/Year.

        Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.

        Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDBInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDBInstance.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC ID of the instance.

        If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ElasticDBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.ElasticDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::ElasticDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ElasticDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::ElasticDBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afb41ab807caa4ef994103ba46105f295d1116b7a47d1f04b83115ed59994f69)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The endpoint of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The order ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: The port used to connect to the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gpdb.ElasticDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine_version": "engineVersion",
        "instance_spec": "instanceSpec",
        "seg_node_num": "segNodeNum",
        "seg_storage_type": "segStorageType",
        "storage_size": "storageSize",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "db_instance_category": "dbInstanceCategory",
        "db_instance_description": "dbInstanceDescription",
        "encryption_key": "encryptionKey",
        "encryption_type": "encryptionType",
        "master_node_num": "masterNodeNum",
        "pay_type": "payType",
        "period": "period",
        "period_unit": "periodUnit",
        "security_ip_list": "securityIpList",
        "tags": "tags",
        "vpc_id": "vpcId",
    },
)
class ElasticDBInstanceProps:
    def __init__(
        self,
        *,
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        seg_node_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        seg_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosElasticDBInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::ElasticDBInstance``.

        :param engine_version: Property engineVersion: The version of the database engine.
        :param instance_spec: Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
        :param seg_node_num: Property segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
        :param seg_storage_type: Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
        :param storage_size: Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
        :param v_switch_id: Property vSwitchId: The vSwitch ID of the instance.
        :param zone_id: Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions operation to query the most recent zone list.
        :param db_instance_category: Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
        :param db_instance_description: Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        :param encryption_key: Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
        :param encryption_type: Property encryptionType: The type of the encryption. Default value: NULL. Valid values: NULL: Encryption is disabled. CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter. Note: Disk encryption cannot be disabled after it is enabled.
        :param master_node_num: Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
        :param pay_type: Property payType: The billing method of the instance. Default value: Postpaid. Valid values: Postpaid: pay-as-you-go Prepaid: subscription
        :param period: Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        :param period_unit: Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        :param security_ip_list: Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value: 127.0.0.1.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you must also specify the VPCId parameter. The specified region of the VPC must be the same as the RegionId value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b50bd0f1c53fcb1f2492c8e557bc5a1871227ec9e19eb918772302abd834fde8)
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument instance_spec", value=instance_spec, expected_type=type_hints["instance_spec"])
            check_type(argname="argument seg_node_num", value=seg_node_num, expected_type=type_hints["seg_node_num"])
            check_type(argname="argument seg_storage_type", value=seg_storage_type, expected_type=type_hints["seg_storage_type"])
            check_type(argname="argument storage_size", value=storage_size, expected_type=type_hints["storage_size"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument db_instance_category", value=db_instance_category, expected_type=type_hints["db_instance_category"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument encryption_type", value=encryption_type, expected_type=type_hints["encryption_type"])
            check_type(argname="argument master_node_num", value=master_node_num, expected_type=type_hints["master_node_num"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine_version": engine_version,
            "instance_spec": instance_spec,
            "seg_node_num": seg_node_num,
            "seg_storage_type": seg_storage_type,
            "storage_size": storage_size,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if db_instance_category is not None:
            self._values["db_instance_category"] = db_instance_category
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if encryption_type is not None:
            self._values["encryption_type"] = encryption_type
        if master_node_num is not None:
            self._values["master_node_num"] = master_node_num
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: The version of the database engine.'''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceSpec: The specification of segment nodes.

        For example: 2C16G, 4C32G, 16C128G.
        '''
        result = self._values.get("instance_spec")
        assert result is not None, "Required property 'instance_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def seg_node_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property segNodeNum: The number of segment nodes.

        Minimum is 4, max is 512, step is 4.
        '''
        result = self._values.get("seg_node_num")
        assert result is not None, "Required property 'seg_node_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def seg_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property segStorageType: The disk type of segment nodes.

        For example: cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("seg_storage_type")
        assert result is not None, "Required property 'seg_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageSize: The storage capacity of per segment node.

        Unit: GB. Minimum is 50, max is 4000, step is 50.
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The vSwitch ID of the instance.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.

        You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.'''
        result = self._values.get("db_instance_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.

        The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.

        Otherwise, leave this parameter empty.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionType: The type of the encryption.

        Default value: NULL. Valid values:
        NULL: Encryption is disabled.
        CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        Note: Disk encryption cannot be disabled after it is enabled.
        '''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterNodeNum: The number of master nodes.

        Minimum is 1, max is 2.
        '''
        result = self._values.get("master_node_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method of the instance.

        Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period.

        While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: Unit of subscription period, it could be Month/Year.

        Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.

        Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosElasticDBInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosElasticDBInstance.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC ID of the instance.

        If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ElasticDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InstancePublicConnection(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.InstancePublicConnection",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::InstancePublicConnection``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstancePublicConnectionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::InstancePublicConnection``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aea14d34091cbdf41869d8355483911a5f080c68068fdefbfed38f85b972a571)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gpdb.InstancePublicConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_string_prefix": "connectionStringPrefix",
        "db_instance_id": "dbInstanceId",
        "port": "port",
    },
)
class InstancePublicConnectionProps:
    def __init__(
        self,
        *,
        connection_string_prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::InstancePublicConnection``.

        :param connection_string_prefix: Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param port: Property port: The port number of the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cee4236c08b63e7091ee29fd6b36fa1e107bdee356282b75ce12080220ff78e5)
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "connection_string_prefix": connection_string_prefix,
            "db_instance_id": db_instance_id,
            "port": port,
        }

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property connectionStringPrefix: The endpoint that is used to connect to the specified database.'''
        result = self._values.get("connection_string_prefix")
        assert result is not None, "Required property 'connection_string_prefix' is missing"
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
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property port: The port number of the instance.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancePublicConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::GPDB::Account``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56c85415ad5c3a2e3fa6805fa8f045cbda34d54e214235afb4e03c69085b814f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bf297c10f14eeed3e89f98a84988016d65e3fc269af72f1a3d3fe0b5295b405c)
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
        :Property:

        accountName: The name of the privileged account.
        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a lowercase letter and end with a lowercase letter or a digit.
        The name cannot start with gp.
        The name must be 2 to 16 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64b2b15304e8ed8a75fe6ec84d6ee1d069c05d764dc913deb233fcb9d7ba7fe4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="accountPassword")
    def account_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        ::



        $ % ^ & * ( ) _ + - =

        The password must be 8 to 32 characters in length.
        :Property:

        accountPassword: The password of the privileged account.
        The password must contain at least three of the following character types: uppercase
        letters, lowercase letters, digits, and special characters.
        Special characters include !
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db96de02923d764a6f7f5fbff83f18ad66a1135ba5cd21ba0837465a761370c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountPassword", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbInstanceId: The ID of the instance.
        Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        region, including instance IDs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edb7fa52bc478dfcd68abf8e4f9b72455171caac9a9f3dca5eb94c25479e3786)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60f7e8657e3def39d0e384cc415b6de1f3b9d73f1a62ae3e3d3d3b4b06f7416d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountDescription: The description of the privileged account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__806ced7a73d7e8844f06c183a7add7244719a7f5c58cf75e2ede4bd44d54bb4e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountDescription", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gpdb.RosAccountProps",
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
        '''Properties for defining a ``ALIYUN::GPDB::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dde61a3e29477468f8d60e9b12d581b8e8c20d15f25c8b5f24c4998dec7db5a1)
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
        :Property:

        accountName: The name of the privileged account.
        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a lowercase letter and end with a lowercase letter or a digit.
        The name cannot start with gp.
        The name must be 2 to 16 characters in length.
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



        $ % ^ & * ( ) _ + - =

        The password must be 8 to 32 characters in length.
        :Property:

        accountPassword: The password of the privileged account.
        The password must contain at least three of the following character types: uppercase
        letters, lowercase letters, digits, and special characters.
        Special characters include !
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbInstanceId: The ID of the instance.
        Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        region, including instance IDs.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountDescription: The description of the privileged account.
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
    jsii_type="@alicloud/ros-cdk-gpdb.RosDBInstance",
):
    '''A ROS template type:  ``ALIYUN::GPDB::DBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::DBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1ac5871bdf5eda60758a3f56134d6bc536d3421427c8646056634dd28789b93)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b4da4a02ca6762649ce6d834482ce0cec1bd252e488ee806453ce13274969a99)
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
        :Attribute: ConnectionString: The endpoint of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The order ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: The port used to connect to the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

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
        :Property: dbInstanceClass: The instance type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5770ba995a64bc46d7478a45b687eea2e3de524d8aa9d6314701b8ad10ab58b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceGroupCount")
    def db_instance_group_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceGroupCount: The number of compute nodes in the instance.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceGroupCount"))

    @db_instance_group_count.setter
    def db_instance_group_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bdad23d1b60401833f10a183b23ed0f4938313167e7e46180a1a5a937fe87cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceGroupCount", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__097e69af8a79977a70b892c24dc58d52a0ca7d25d25a7a0128cd7643b2f5ad71)
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
            type_hints = typing.get_type_hints(_typecheckingstub__03aea9fd80f1bcd09f065453fee4935e1e938640d10a779957681841e21febf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d2018019c2d652687405116b0a267d95331ea4ac129fcaa6f42ffcfc3ea0811)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3c51d9ed5ee9683f1aa565eefd5604341299f1107fafad10f12a24199e71eaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de2ea367343456b3819fece649d82be3622bda8ba238834af2e0a7c97e55cb32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1d771433f9bbebba21253100d385479413da746005cd80b3ca1494d46697520)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e9877d63ce7eb2ba0d47c72ab9d1b1352548afe3670db61f8b27e9bb9c3e497)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ae419b93987a5b888a593ee77c7453f6e3ada09b43dc097006ecccfdf9ecd95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc6fb832af7389686cba9ec143f920189f9c1f68029961d804a3a40891e827fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDBInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDBInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDBInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00ad71ac7fe2c264ec20770b02fffd8b3af4ee4a02aeb9adc8a253fc98875a56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e962829a5935162e80cde0cda7eb491fcca73ca46cb0d20639c137209f6c594a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-gpdb.RosDBInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__591c06a9522e824d65cc9cd6355d23819469eee76d979c6bc80d228fc619632d)
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
    jsii_type="@alicloud/ros-cdk-gpdb.RosDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_group_count": "dbInstanceGroupCount",
        "engine_version": "engineVersion",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "db_instance_description": "dbInstanceDescription",
        "pay_type": "payType",
        "period": "period",
        "period_unit": "periodUnit",
        "security_ip_list": "securityIpList",
        "tags": "tags",
        "vpc_id": "vpcId",
    },
)
class RosDBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_group_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDBInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::DBInstance``.

        :param db_instance_class: 
        :param db_instance_group_count: 
        :param engine_version: 
        :param v_switch_id: 
        :param zone_id: 
        :param db_instance_description: 
        :param pay_type: 
        :param period: 
        :param period_unit: 
        :param security_ip_list: 
        :param tags: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__721a4ff50df01d40cf6cc5df6e22043bfc3fa7f595e6f2b217c2b691258d6d17)
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_group_count", value=db_instance_group_count, expected_type=type_hints["db_instance_group_count"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_group_count": db_instance_group_count,
            "engine_version": engine_version,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceClass: The instance type.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_group_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceGroupCount: The number of compute nodes in the instance.
        '''
        result = self._values.get("db_instance_group_count")
        assert result is not None, "Required property 'db_instance_group_count' is missing"
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
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDBInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDBInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosElasticDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
):
    '''A ROS template type:  ``ALIYUN::GPDB::ElasticDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosElasticDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::ElasticDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89aad62043fc84e59bcce114e39f1f5fba3318425c1acece48c74056d4c1ca68)
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
            type_hints = typing.get_type_hints(_typecheckingstub__96d0fef3e1b16e30f97861f68a50b00f0477a22bf3d3d6a150ad4ec108b9fbdb)
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
        :Attribute: ConnectionString: The endpoint of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The order ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: The port used to connect to the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__50c15121cbf6399e2ada1d3597ac27d96b6437f8e0347fbffa6e6cc160a1ad38)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b799c1963b9eff6466440e4ac85f13235c4ece45cd3183faca5404e5c8d710c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="instanceSpec")
    def instance_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceSpec"))

    @instance_spec.setter
    def instance_spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15376d6a87045e74fb702444b606698d53c4345e02ea16e3da7951f0ce847662)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceSpec", value)

    @builtins.property
    @jsii.member(jsii_name="segNodeNum")
    def seg_node_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "segNodeNum"))

    @seg_node_num.setter
    def seg_node_num(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7eedd66b72c81a92aaeeb432556f363f974c62907cce508ad2779e49da9d6ca9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "segNodeNum", value)

    @builtins.property
    @jsii.member(jsii_name="segStorageType")
    def seg_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "segStorageType"))

    @seg_storage_type.setter
    def seg_storage_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc128867dd5a4f68bbf675d380e093963847d79bc7234e714da71896b8ba1e67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "segStorageType", value)

    @builtins.property
    @jsii.member(jsii_name="storageSize")
    def storage_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageSize"))

    @storage_size.setter
    def storage_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cb4bc51217bdf168b5b57a8f65efc60a09486a98396df706f29fb3026d609c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageSize", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__570ec1d9eabd46950d0d6f95eb32f1ee5e0a55c5c5e2e7c31fa8d3c1780f94b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8623cfccaf53796a6d75c78092cef0d666d35e814c8a70eb13efa75b4c258835)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceCategory")
    def db_instance_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceCategory"))

    @db_instance_category.setter
    def db_instance_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47a267c22b746bfa31008a52240fb91b683896c8ea0c6094bd6c35ca154b751f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceCategory", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__950b1ce01b1a36695f6f39c2c585d7f2d6045bc350bcd0375652338a07eac41e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__310b3630773edc96ac6b9024afe182b8d1ac1af210ed8cdffd51f251a0dea6ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionType")
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptionType: The type of the encryption. Default value: NULL. Valid values:
        NULL: Encryption is disabled.
        CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        Note: Disk encryption cannot be disabled after it is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionType"))

    @encryption_type.setter
    def encryption_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f80ad582306607618031c89d0439be17a886521fbffe815f8a9ec5f83a9ac11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionType", value)

    @builtins.property
    @jsii.member(jsii_name="masterNodeNum")
    def master_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterNodeNum"))

    @master_node_num.setter
    def master_node_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3e8e58aff6a052b8e2b3714a8bee52a496045b377f3eae99c71f60654599b40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterNodeNum", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43aba30bf680fed838bb422e5545c751b74676599cbb589a5b8ea50811dd406c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d57e4d182177e6047812ba9300106e4e448e3a3d3dc1c2441b6187da2e0f9de0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6e15a58fd553875254acc185ace46762b5b3d72716260dd639b1978df6dcf12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af80656e48bb08e8689717aa223478637f2f738b1c63c1ade0bd2f1d7a1a2e9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosElasticDBInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosElasticDBInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosElasticDBInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__360b928c6fda2ec27ee1a719fbccad942a961d5bb9984d3b870e4fe7e3fb7e8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6007f8297c4e20b3a55b15e1493d543ccdd7522b1113b81cd3054841acc1f7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-gpdb.RosElasticDBInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__4359d0b218a824b953b984fe52c61b8bf1c6987f32a9ed206eaa1f2c9c8c818b)
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
    jsii_type="@alicloud/ros-cdk-gpdb.RosElasticDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine_version": "engineVersion",
        "instance_spec": "instanceSpec",
        "seg_node_num": "segNodeNum",
        "seg_storage_type": "segStorageType",
        "storage_size": "storageSize",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "db_instance_category": "dbInstanceCategory",
        "db_instance_description": "dbInstanceDescription",
        "encryption_key": "encryptionKey",
        "encryption_type": "encryptionType",
        "master_node_num": "masterNodeNum",
        "pay_type": "payType",
        "period": "period",
        "period_unit": "periodUnit",
        "security_ip_list": "securityIpList",
        "tags": "tags",
        "vpc_id": "vpcId",
    },
)
class RosElasticDBInstanceProps:
    def __init__(
        self,
        *,
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        seg_node_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        seg_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosElasticDBInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::ElasticDBInstance``.

        :param engine_version: 
        :param instance_spec: 
        :param seg_node_num: 
        :param seg_storage_type: 
        :param storage_size: 
        :param v_switch_id: 
        :param zone_id: 
        :param db_instance_category: 
        :param db_instance_description: 
        :param encryption_key: 
        :param encryption_type: 
        :param master_node_num: 
        :param pay_type: 
        :param period: 
        :param period_unit: 
        :param security_ip_list: 
        :param tags: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0afafad2a21ec89df64c7cdb9a4a66a33d1b29a4b59f958823aa1060aabae4f)
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument instance_spec", value=instance_spec, expected_type=type_hints["instance_spec"])
            check_type(argname="argument seg_node_num", value=seg_node_num, expected_type=type_hints["seg_node_num"])
            check_type(argname="argument seg_storage_type", value=seg_storage_type, expected_type=type_hints["seg_storage_type"])
            check_type(argname="argument storage_size", value=storage_size, expected_type=type_hints["storage_size"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument db_instance_category", value=db_instance_category, expected_type=type_hints["db_instance_category"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument encryption_type", value=encryption_type, expected_type=type_hints["encryption_type"])
            check_type(argname="argument master_node_num", value=master_node_num, expected_type=type_hints["master_node_num"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine_version": engine_version,
            "instance_spec": instance_spec,
            "seg_node_num": seg_node_num,
            "seg_storage_type": seg_storage_type,
            "storage_size": storage_size,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if db_instance_category is not None:
            self._values["db_instance_category"] = db_instance_category
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if encryption_type is not None:
            self._values["encryption_type"] = encryption_type
        if master_node_num is not None:
            self._values["master_node_num"] = master_node_num
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

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
    def instance_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
        '''
        result = self._values.get("instance_spec")
        assert result is not None, "Required property 'instance_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def seg_node_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
        '''
        result = self._values.get("seg_node_num")
        assert result is not None, "Required property 'seg_node_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def seg_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("seg_storage_type")
        assert result is not None, "Required property 'seg_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_instance_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
        '''
        result = self._values.get("db_instance_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptionType: The type of the encryption. Default value: NULL. Valid values:
        NULL: Encryption is disabled.
        CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        Note: Disk encryption cannot be disabled after it is enabled.
        '''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
        '''
        result = self._values.get("master_node_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosElasticDBInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosElasticDBInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosElasticDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstancePublicConnection(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosInstancePublicConnection",
):
    '''A ROS template type:  ``ALIYUN::GPDB::InstancePublicConnection``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancePublicConnectionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::InstancePublicConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8b3b81c34939efe9d78314664a2eeccdf6fc228139638e9d4f0b202bb0d25b2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4a9767bb77e51c7b3ed6d48f280e37e2bbad92ceb53569209a655b82fe389857)
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
        :Attribute: ConnectionString: The connection string of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

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
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectionStringPrefix: The endpoint that is used to connect to the specified database.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e0c76e0183cf7f848b7df9af05b08ccd2e0b16ccca4dea3a8287234190bb8d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionStringPrefix", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__e063fe00164d14c9efedb6793a6fd31cb97d0276b17a3f59d33a97a33431fb34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88dcab8f968673bb2972d3617c0b8382b04cd443a1a8d55bb093722a5b7c2a6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: The port number of the instance.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48996cfd06449b1b5a352bddf9b867de8323bcd93daabf22440ad247633dbb5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gpdb.RosInstancePublicConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_string_prefix": "connectionStringPrefix",
        "db_instance_id": "dbInstanceId",
        "port": "port",
    },
)
class RosInstancePublicConnectionProps:
    def __init__(
        self,
        *,
        connection_string_prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::InstancePublicConnection``.

        :param connection_string_prefix: 
        :param db_instance_id: 
        :param port: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f221b5354b5add6fc90e82f2074bfa127043100889621ee12aa4521347a66c8c)
            check_type(argname="argument connection_string_prefix", value=connection_string_prefix, expected_type=type_hints["connection_string_prefix"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "connection_string_prefix": connection_string_prefix,
            "db_instance_id": db_instance_id,
            "port": port,
        }

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectionStringPrefix: The endpoint that is used to connect to the specified database.
        '''
        result = self._values.get("connection_string_prefix")
        assert result is not None, "Required property 'connection_string_prefix' is missing"
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
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: The port number of the instance.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancePublicConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountProps",
    "DBInstance",
    "DBInstanceProps",
    "ElasticDBInstance",
    "ElasticDBInstanceProps",
    "InstancePublicConnection",
    "InstancePublicConnectionProps",
    "RosAccount",
    "RosAccountProps",
    "RosDBInstance",
    "RosDBInstanceProps",
    "RosElasticDBInstance",
    "RosElasticDBInstanceProps",
    "RosInstancePublicConnection",
    "RosInstancePublicConnectionProps",
]

publication.publish()

def _typecheckingstub__626fe14fa2d762e0dcc84a1a0b1aa4d97e6714972017d08eb58355a1dc21fa87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b896ba00b09a90fabeb323569de4d08bb539272ddca78c295a33f0782800bf96(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ac5d3d197db2461e111c98b052eeee02d0fc03f17a683073e66a3d597f7a030(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__777da448732a953451d42cdf65572b1b2e1df0fbb772a44ee39827922339ff39(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_group_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afb41ab807caa4ef994103ba46105f295d1116b7a47d1f04b83115ed59994f69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ElasticDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b50bd0f1c53fcb1f2492c8e557bc5a1871227ec9e19eb918772302abd834fde8(
    *,
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    seg_node_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    seg_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosElasticDBInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aea14d34091cbdf41869d8355483911a5f080c68068fdefbfed38f85b972a571(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstancePublicConnectionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cee4236c08b63e7091ee29fd6b36fa1e107bdee356282b75ce12080220ff78e5(
    *,
    connection_string_prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56c85415ad5c3a2e3fa6805fa8f045cbda34d54e214235afb4e03c69085b814f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf297c10f14eeed3e89f98a84988016d65e3fc269af72f1a3d3fe0b5295b405c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b2b15304e8ed8a75fe6ec84d6ee1d069c05d764dc913deb233fcb9d7ba7fe4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db96de02923d764a6f7f5fbff83f18ad66a1135ba5cd21ba0837465a761370c8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edb7fa52bc478dfcd68abf8e4f9b72455171caac9a9f3dca5eb94c25479e3786(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60f7e8657e3def39d0e384cc415b6de1f3b9d73f1a62ae3e3d3d3b4b06f7416d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__806ced7a73d7e8844f06c183a7add7244719a7f5c58cf75e2ede4bd44d54bb4e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dde61a3e29477468f8d60e9b12d581b8e8c20d15f25c8b5f24c4998dec7db5a1(
    *,
    account_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ac5871bdf5eda60758a3f56134d6bc536d3421427c8646056634dd28789b93(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4da4a02ca6762649ce6d834482ce0cec1bd252e488ee806453ce13274969a99(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5770ba995a64bc46d7478a45b687eea2e3de524d8aa9d6314701b8ad10ab58b8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bdad23d1b60401833f10a183b23ed0f4938313167e7e46180a1a5a937fe87cf(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__097e69af8a79977a70b892c24dc58d52a0ca7d25d25a7a0128cd7643b2f5ad71(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03aea9fd80f1bcd09f065453fee4935e1e938640d10a779957681841e21febf9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d2018019c2d652687405116b0a267d95331ea4ac129fcaa6f42ffcfc3ea0811(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3c51d9ed5ee9683f1aa565eefd5604341299f1107fafad10f12a24199e71eaa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2ea367343456b3819fece649d82be3622bda8ba238834af2e0a7c97e55cb32(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1d771433f9bbebba21253100d385479413da746005cd80b3ca1494d46697520(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e9877d63ce7eb2ba0d47c72ab9d1b1352548afe3670db61f8b27e9bb9c3e497(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ae419b93987a5b888a593ee77c7453f6e3ada09b43dc097006ecccfdf9ecd95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc6fb832af7389686cba9ec143f920189f9c1f68029961d804a3a40891e827fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00ad71ac7fe2c264ec20770b02fffd8b3af4ee4a02aeb9adc8a253fc98875a56(
    value: typing.Optional[typing.List[RosDBInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e962829a5935162e80cde0cda7eb491fcca73ca46cb0d20639c137209f6c594a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__591c06a9522e824d65cc9cd6355d23819469eee76d979c6bc80d228fc619632d(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__721a4ff50df01d40cf6cc5df6e22043bfc3fa7f595e6f2b217c2b691258d6d17(
    *,
    db_instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_group_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDBInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89aad62043fc84e59bcce114e39f1f5fba3318425c1acece48c74056d4c1ca68(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosElasticDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96d0fef3e1b16e30f97861f68a50b00f0477a22bf3d3d6a150ad4ec108b9fbdb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50c15121cbf6399e2ada1d3597ac27d96b6437f8e0347fbffa6e6cc160a1ad38(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b799c1963b9eff6466440e4ac85f13235c4ece45cd3183faca5404e5c8d710c6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15376d6a87045e74fb702444b606698d53c4345e02ea16e3da7951f0ce847662(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7eedd66b72c81a92aaeeb432556f363f974c62907cce508ad2779e49da9d6ca9(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc128867dd5a4f68bbf675d380e093963847d79bc7234e714da71896b8ba1e67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cb4bc51217bdf168b5b57a8f65efc60a09486a98396df706f29fb3026d609c6(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__570ec1d9eabd46950d0d6f95eb32f1ee5e0a55c5c5e2e7c31fa8d3c1780f94b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8623cfccaf53796a6d75c78092cef0d666d35e814c8a70eb13efa75b4c258835(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47a267c22b746bfa31008a52240fb91b683896c8ea0c6094bd6c35ca154b751f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__950b1ce01b1a36695f6f39c2c585d7f2d6045bc350bcd0375652338a07eac41e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__310b3630773edc96ac6b9024afe182b8d1ac1af210ed8cdffd51f251a0dea6ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f80ad582306607618031c89d0439be17a886521fbffe815f8a9ec5f83a9ac11(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3e8e58aff6a052b8e2b3714a8bee52a496045b377f3eae99c71f60654599b40(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43aba30bf680fed838bb422e5545c751b74676599cbb589a5b8ea50811dd406c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d57e4d182177e6047812ba9300106e4e448e3a3d3dc1c2441b6187da2e0f9de0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6e15a58fd553875254acc185ace46762b5b3d72716260dd639b1978df6dcf12(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af80656e48bb08e8689717aa223478637f2f738b1c63c1ade0bd2f1d7a1a2e9d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__360b928c6fda2ec27ee1a719fbccad942a961d5bb9984d3b870e4fe7e3fb7e8a(
    value: typing.Optional[typing.List[RosElasticDBInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6007f8297c4e20b3a55b15e1493d543ccdd7522b1113b81cd3054841acc1f7e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4359d0b218a824b953b984fe52c61b8bf1c6987f32a9ed206eaa1f2c9c8c818b(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0afafad2a21ec89df64c7cdb9a4a66a33d1b29a4b59f958823aa1060aabae4f(
    *,
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    seg_node_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    seg_storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_node_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosElasticDBInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8b3b81c34939efe9d78314664a2eeccdf6fc228139638e9d4f0b202bb0d25b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancePublicConnectionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a9767bb77e51c7b3ed6d48f280e37e2bbad92ceb53569209a655b82fe389857(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e0c76e0183cf7f848b7df9af05b08ccd2e0b16ccca4dea3a8287234190bb8d5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e063fe00164d14c9efedb6793a6fd31cb97d0276b17a3f59d33a97a33431fb34(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88dcab8f968673bb2972d3617c0b8382b04cd443a1a8d55bb093722a5b7c2a6c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48996cfd06449b1b5a352bddf9b867de8323bcd93daabf22440ad247633dbb5b(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f221b5354b5add6fc90e82f2074bfa127043100889621ee12aa4521347a66c8c(
    *,
    connection_string_prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
