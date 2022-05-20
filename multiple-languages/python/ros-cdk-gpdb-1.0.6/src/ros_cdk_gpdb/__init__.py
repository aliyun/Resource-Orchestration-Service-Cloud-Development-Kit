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

from ._jsii import *

import ros_cdk_core


class Account(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.Account",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountName: The name of the account.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))


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
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::Account``.

        :param account_name: Property accountName: The name of the privileged account. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or a digit. The name cannot start with gp. The name must be 2 to 16 characters in length.
        :param account_password: Property accountPassword: The password of the privileged account. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! @ # $ % ^ & * ( ) _ + - = The password must be 8 to 32 characters in length.
        :param db_instance_id: Property dbInstanceId: The ID of the instance. Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
        :param account_description: Property accountDescription: The description of the privileged account.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountName: The name of the privileged account.

        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a lowercase letter and end with a lowercase letter or a digit.
        The name cannot start with gp.
        The name must be 2 to 16 characters in length.
        '''
        result = self._values.get("account_name")
        assert result is not None, "Required property 'account_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountPassword: The password of the privileged account.

        The password must contain at least three of the following character types: uppercase
        letters, lowercase letters, digits, and special characters.
        Special characters include ! @ # $ % ^ & * ( ) _ + - =
        The password must be 8 to 32 characters in length.
        '''
        result = self._values.get("account_password")
        assert result is not None, "Required property 'account_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.

        Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        region, including instance IDs.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountDescription: The description of the privileged account.'''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.DBInstance",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::DBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DBInstanceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: The endpoint of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The order ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: The port used to connect to the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))


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
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_group_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosDBInstance.TagsProperty"]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceClass: The instance type.'''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_group_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbInstanceGroupCount: The number of compute nodes in the instance.'''
        result = self._values.get("db_instance_group_count")
        assert result is not None, "Required property 'db_instance_group_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engineVersion: The version of the database engine.'''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The vSwitch ID of the instance.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.

        You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.

        The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: The billing method of the instance.

        Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The subscription period.

        While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: Unit of subscription period, it could be Month/Year.

        Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.

        Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC ID of the instance.

        If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ElasticDBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.ElasticDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::ElasticDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ElasticDBInstanceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: The endpoint of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The order ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: The port used to connect to the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))


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
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        seg_node_num: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        seg_storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        storage_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_node_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosElasticDBInstance.TagsProperty"]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engineVersion: The version of the database engine.'''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceSpec: The specification of segment nodes.

        For example: 2C16G, 4C32G, 16C128G.
        '''
        result = self._values.get("instance_spec")
        assert result is not None, "Required property 'instance_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def seg_node_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property segNodeNum: The number of segment nodes.

        Minimum is 4, max is 512, step is 4.
        '''
        result = self._values.get("seg_node_num")
        assert result is not None, "Required property 'seg_node_num' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def seg_storage_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property segStorageType: The disk type of segment nodes.

        For example: cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("seg_storage_type")
        assert result is not None, "Required property 'seg_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def storage_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property storageSize: The storage capacity of per segment node.

        Unit: GB. Minimum is 50, max is 4000, step is 50.
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The vSwitch ID of the instance.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.

        You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.'''
        result = self._values.get("db_instance_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.

        The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.

        Otherwise, leave this parameter empty.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionType: The type of the encryption.

        Default value: NULL. Valid values:
        NULL: Encryption is disabled.
        CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        Note: Disk encryption cannot be disabled after it is enabled.
        '''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property masterNodeNum: The number of master nodes.

        Minimum is 1, max is 2.
        '''
        result = self._values.get("master_node_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: The billing method of the instance.

        Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The subscription period.

        While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: Unit of subscription period, it could be Month/Year.

        Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.

        Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC ID of the instance.

        If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ElasticDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InstancePublicConnection(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.InstancePublicConnection",
):
    '''A ROS resource type:  ``ALIYUN::GPDB::InstancePublicConnection``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstancePublicConnectionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: The connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBInstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))


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
        connection_string_prefix: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::InstancePublicConnection``.

        :param connection_string_prefix: Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param port: Property port: The port number of the instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "connection_string_prefix": connection_string_prefix,
            "db_instance_id": db_instance_id,
            "port": port,
        }

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property connectionStringPrefix: The endpoint that is used to connect to the specified database.'''
        result = self._values.get("connection_string_prefix")
        assert result is not None, "Required property 'connection_string_prefix' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property port: The port number of the instance.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancePublicConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::GPDB::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::Account``.

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
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountName: The name of the privileged account.
        The name can contain lowercase letters, digits, and underscores (_).
        The name must start with a lowercase letter and end with a lowercase letter or a digit.
        The name cannot start with gp.
        The name must be 2 to 16 characters in length.
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



        $ % ^ & * ( ) _ + - =

        The password must be 8 to 32 characters in length.
        :Property:

        accountPassword: The password of the privileged account.
        The password must contain at least three of the following character types: uppercase
        letters, lowercase letters, digits, and special characters.
        Special characters include !
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountPassword"))

    @account_password.setter
    def account_password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbInstanceId: The ID of the instance.
        Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        region, including instance IDs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountDescription")
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountDescription: The description of the privileged account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountDescription"))

    @account_description.setter
    def account_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        account_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::Account``.

        :param account_name: 
        :param account_password: 
        :param db_instance_id: 
        :param account_description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_name": account_name,
            "account_password": account_password,
            "db_instance_id": db_instance_id,
        }
        if account_description is not None:
            self._values["account_description"] = account_description

    @builtins.property
    def account_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbInstanceId: The ID of the instance.
        Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        region, including instance IDs.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountDescription: The description of the privileged account.
        '''
        result = self._values.get("account_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosDBInstance",
):
    '''A ROS template type:  ``ALIYUN::GPDB::DBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::DBInstance``.

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
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionString: The endpoint of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The order ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: The port used to connect to the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: The instance type.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceGroupCount")
    def db_instance_group_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceGroupCount: The number of compute nodes in the instance.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceGroupCount"))

    @db_instance_group_count.setter
    def db_instance_group_count(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceGroupCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engineVersion: The version of the database engine.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        db_instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_group_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosDBInstance.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def db_instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceClass: The instance type.
        '''
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_group_count(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceGroupCount: The number of compute nodes in the instance.
        '''
        result = self._values.get("db_instance_group_count")
        assert result is not None, "Required property 'db_instance_group_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engineVersion: The version of the database engine.
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosElasticDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
):
    '''A ROS template type:  ``ALIYUN::GPDB::ElasticDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosElasticDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::ElasticDBInstance``.

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
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionString: The endpoint of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The order ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: The port used to connect to the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

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
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engineVersion: The version of the database engine.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceSpec")
    def instance_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceSpec"))

    @instance_spec.setter
    def instance_spec(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="segNodeNum")
    def seg_node_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "segNodeNum"))

    @seg_node_num.setter
    def seg_node_num(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "segNodeNum", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="segStorageType")
    def seg_storage_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "segStorageType"))

    @seg_storage_type.setter
    def seg_storage_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "segStorageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="storageSize")
    def storage_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "storageSize"))

    @storage_size.setter
    def storage_size(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "storageSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceCategory")
    def db_instance_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceCategory"))

    @db_instance_category.setter
    def db_instance_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionType")
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        encryptionType: The type of the encryption. Default value: NULL. Valid values:
        NULL: Encryption is disabled.
        CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        Note: Disk encryption cannot be disabled after it is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionType"))

    @encryption_type.setter
    def encryption_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterNodeNum")
    def master_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "masterNodeNum"))

    @master_node_num.setter
    def master_node_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterNodeNum", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityIpList", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        engine_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        seg_node_num: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        seg_storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        storage_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_node_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosElasticDBInstance.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def engine_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engineVersion: The version of the database engine.
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
        '''
        result = self._values.get("instance_spec")
        assert result is not None, "Required property 'instance_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def seg_node_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
        '''
        result = self._values.get("seg_node_num")
        assert result is not None, "Required property 'seg_node_num' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def seg_storage_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
        '''
        result = self._values.get("seg_storage_type")
        assert result is not None, "Required property 'seg_storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def storage_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
        operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
        '''
        result = self._values.get("db_instance_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        encryptionType: The type of the encryption. Default value: NULL. Valid values:
        NULL: Encryption is disabled.
        CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        Note: Disk encryption cannot be disabled after it is enabled.
        '''
        result = self._values.get("encryption_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_node_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
        '''
        result = self._values.get("master_node_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. Default value: Postpaid. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
        127.0.0.1.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
        must also specify the VPCId parameter. The specified region of the VPC must be the
        same as the RegionId value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosElasticDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstancePublicConnection(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gpdb.RosInstancePublicConnection",
):
    '''A ROS template type:  ``ALIYUN::GPDB::InstancePublicConnection``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstancePublicConnectionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GPDB::InstancePublicConnection``.

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
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionString: The connection string of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBInstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionStringPrefix")
    def connection_string_prefix(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: connectionStringPrefix: The endpoint that is used to connect to the specified database.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "connectionStringPrefix"))

    @connection_string_prefix.setter
    def connection_string_prefix(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "connectionStringPrefix", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: port: The port number of the instance.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(self, value: typing.Union[jsii.Number, ros_cdk_core.IResolvable]) -> None:
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
        connection_string_prefix: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GPDB::InstancePublicConnection``.

        :param connection_string_prefix: 
        :param db_instance_id: 
        :param port: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "connection_string_prefix": connection_string_prefix,
            "db_instance_id": db_instance_id,
            "port": port,
        }

    @builtins.property
    def connection_string_prefix(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: connectionStringPrefix: The endpoint that is used to connect to the specified database.
        '''
        result = self._values.get("connection_string_prefix")
        assert result is not None, "Required property 'connection_string_prefix' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def db_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: port: The port number of the instance.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

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
