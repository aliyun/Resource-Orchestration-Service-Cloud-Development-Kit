'''
## Aliyun ROS TSDB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as TSDB from '@alicloud/ros-cdk-tsdb';
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


class HiTSDBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.HiTSDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::TSDB::HiTSDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["HiTSDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::HiTSDBInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44220de53be3c5190b165bbe553292d286f6b05a0dba1e162bba46f78b048186)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: Connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineType")
    def attr_engine_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineType: Engine type of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: Order id of created instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicConnectionString: Public connection string of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrReverseVpcIp")
    def attr_reverse_vpc_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReverseVpcIp: Reverse vpc ip of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReverseVpcIp"))

    @builtins.property
    @jsii.member(jsii_name="attrReverseVpcPort")
    def attr_reverse_vpc_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReverseVpcPort: Reverse vpc port of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReverseVpcPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.HiTSDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_class": "instanceClass",
        "instance_storage": "instanceStorage",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "disk_category": "diskCategory",
        "duration": "duration",
        "instance_alias": "instanceAlias",
        "pay_type": "payType",
        "pricing_cycle": "pricingCycle",
        "security_ip_list": "securityIpList",
    },
)
class HiTSDBInstanceProps:
    def __init__(
        self,
        *,
        instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::HiTSDBInstance``.

        :param instance_class: Property instanceClass: The type of the instance. For more information, see Instance types: tsdb.1x.basic: Basic Edition I tsdb.3x.basic: Basic Edition II tsdb.4x.basic: Basic Edition III tsdb.12x.standard: Standard Edition I tsdb.24x.standard: Standard Edition II tsdb.48x.large: Ultimate Edition I tsdb.96x.large: Ultimate Edition II and so on.
        :param instance_storage: Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch in the specified VPC.
        :param zone_id: Property zoneId: The zone ID of the instance.
        :param disk_category: Property diskCategory: The category of disk.
        :param duration: Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        :param instance_alias: Property instanceAlias: The alias of the instance.
        :param pay_type: Property payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        :param pricing_cycle: Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        :param security_ip_list: Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__268cbd182c67915f4c44597f6b271664a7e621075693a34bf0c513e5c9c5218c)
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_storage", value=instance_storage, expected_type=type_hints["instance_storage"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument disk_category", value=disk_category, expected_type=type_hints["disk_category"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument instance_alias", value=instance_alias, expected_type=type_hints["instance_alias"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_class": instance_class,
            "instance_storage": instance_storage,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if disk_category is not None:
            self._values["disk_category"] = disk_category
        if duration is not None:
            self._values["duration"] = duration
        if instance_alias is not None:
            self._values["instance_alias"] = instance_alias
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceClass: The type of the instance.

        For more information, see Instance types:
        tsdb.1x.basic: Basic Edition I
        tsdb.3x.basic: Basic Edition II
        tsdb.4x.basic: Basic Edition III
        tsdb.12x.standard: Standard Edition I
        tsdb.24x.standard: Standard Edition II
        tsdb.48x.large: Ultimate Edition I
        tsdb.96x.large: Ultimate Edition II and so on.
        '''
        result = self._values.get("instance_class")
        assert result is not None, "Required property 'instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceStorage: The storage capacity of the instance.

        Unit: GB. For example, the value 50 indicates 50 GB.
        '''
        result = self._values.get("instance_storage")
        assert result is not None, "Required property 'instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of the VSwitch in the specified VPC.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The zone ID of the instance.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskCategory: The category of disk.'''
        result = self._values.get("disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration: The validity period of the instance.

        This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceAlias: The alias of the instance.'''
        result = self._values.get("instance_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method.

        Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: The unit of the validity period.

        This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HiTSDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InfluxDBDatabase(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBDatabase",
):
    '''A ROS resource type:  ``ALIYUN::TSDB::InfluxDBDatabase``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InfluxDBDatabaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::InfluxDBDatabase``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3868cae4870658cba510035b2f3c9b8cbcf296a239f90acf00462041239d0abc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBName: The name of database.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of TSDB for InfluxDB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={"db_name": "dbName", "instance_id": "instanceId"},
)
class InfluxDBDatabaseProps:
    def __init__(
        self,
        *,
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBDatabase``.

        :param db_name: Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        :param instance_id: Property instanceId: The ID of TSDB for InfluxDB.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef55670afcf70cb9224f9f1df86ca2f238b20b383b050bb057af21ef288ba26b)
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_name": db_name,
            "instance_id": instance_id,
        }

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbName: The name of database.

        The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of TSDB for InfluxDB.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InfluxDBDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InfluxDBUser(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBUser",
):
    '''A ROS resource type:  ``ALIYUN::TSDB::InfluxDBUser``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InfluxDBUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::InfluxDBUser``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d4e242f73db020871cb9c2b237a2cbdae2044c98f39e8c03aba0c07f1d5c210)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of TSDB for InfluxDB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserName: The name of user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserType")
    def attr_user_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserType: The type of user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "password": "password",
        "user_name": "userName",
        "user_type": "userType",
        "database_permissions": "databasePermissions",
    },
)
class InfluxDBUserProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_permissions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInfluxDBUser.DatabasePermissionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBUser``.

        :param instance_id: Property instanceId: The ID of TSDB for InfluxDB.
        :param password: Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=.
        :param user_name: Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        :param user_type: Property userType: The type of user. Valid values: normal: normal user admin: administrator user.
        :param database_permissions: Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__090f30ff5b1237e294e2d72b6b706ee32eaaba35ca11ad28d85b17de21e89bf8)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument user_type", value=user_type, expected_type=type_hints["user_type"])
            check_type(argname="argument database_permissions", value=database_permissions, expected_type=type_hints["database_permissions"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "user_name": user_name,
            "user_type": user_type,
        }
        if database_permissions is not None:
            self._values["database_permissions"] = database_permissions

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of TSDB for InfluxDB.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=.'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userName: The name of user.

        The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userType: The type of user.

        Valid values:
        normal: normal user
        admin: administrator user.
        '''
        result = self._values.get("user_type")
        assert result is not None, "Required property 'user_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_permissions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]]:
        '''Property databasePermissions: The list of databases that the user can access.

        If the user type is admin, do not specify this parameter.
        '''
        result = self._values.get("database_permissions")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InfluxDBUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHiTSDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.RosHiTSDBInstance",
):
    '''A ROS template type:  ``ALIYUN::TSDB::HiTSDBInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHiTSDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::HiTSDBInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2ce2e120e08ca16a9aec061f434bb839f408f5cd0f6f8d078a32f85c2506c6b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c16cb4b03f027ce265824edbfb1dfaf258b71ecbb7ef590384c770aff21b7a2f)
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
        :Attribute: ConnectionString: Connection string of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineType")
    def attr_engine_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineType: Engine type of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Order id of created instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicConnectionString: Public connection string of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrReverseVpcIp")
    def attr_reverse_vpc_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReverseVpcIp: Reverse vpc ip of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReverseVpcIp"))

    @builtins.property
    @jsii.member(jsii_name="attrReverseVpcPort")
    def attr_reverse_vpc_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReverseVpcPort: Reverse vpc port of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReverseVpcPort"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__210a8076760fcb5298ddaa5d3a77325e8e6f4de95c0c6e7b4ebf8e8e9a2c04cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceClass: The type of the instance. For more information, see Instance types:
        tsdb.1x.basic: Basic Edition I
        tsdb.3x.basic: Basic Edition II
        tsdb.4x.basic: Basic Edition III
        tsdb.12x.standard: Standard Edition I
        tsdb.24x.standard: Standard Edition II
        tsdb.48x.large: Ultimate Edition I
        tsdb.96x.large: Ultimate Edition II and so on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4134b77d30fa275c5ad39ee5243a7f28d127b78179d1d20bb8095d3fcca3f985)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="instanceStorage")
    def instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceStorage"))

    @instance_storage.setter
    def instance_storage(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b88113180f2e54d3483727cc31e789b819ffad448f7297e36fd4eccd8bbe43f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bede355a3121e53ad834189ae595a55d24041d6a8dbc4fb91cb3211941de7f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch in the specified VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__052fc7120b265f3cb6a30e749404e57134dc498719a96af65c7dc3ea9b2f1843)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4634db5831921c35a3f1446022601808dfb0bcd76c0decf997b5fd3ed2f814e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="diskCategory")
    def disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskCategory: The category of disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskCategory"))

    @disk_category.setter
    def disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8dad3130222c4c53af402e3329fcb4ccf57f64efd1d2bf31251f07743c95c99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b17ecc72a2f6c3d57bccdaeb035872a768baecaa3e81f0b3c8119d9fb657f9c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="instanceAlias")
    def instance_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceAlias: The alias of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceAlias"))

    @instance_alias.setter
    def instance_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee25cadeafc1cbebcb2a21da42f07772995476a96be2b27b7b032aacfa31e4e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceAlias", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7a8ea48bd813c6879f73fda40d32aab8e12a680656c8bc90a6af1163efffd0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__802dc829686182afc96eefdcc2cc4c98ed33688651aaf35d965917c51829aca1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5efe6ae98032acdc34c5241ba169dc9cdb9a5a3746a073a5a8de3a1d00f24126)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.RosHiTSDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_class": "instanceClass",
        "instance_storage": "instanceStorage",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "disk_category": "diskCategory",
        "duration": "duration",
        "instance_alias": "instanceAlias",
        "pay_type": "payType",
        "pricing_cycle": "pricingCycle",
        "security_ip_list": "securityIpList",
    },
)
class RosHiTSDBInstanceProps:
    def __init__(
        self,
        *,
        instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::HiTSDBInstance``.

        :param instance_class: 
        :param instance_storage: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        :param disk_category: 
        :param duration: 
        :param instance_alias: 
        :param pay_type: 
        :param pricing_cycle: 
        :param security_ip_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a1081499f6e47250e0eef5ea6679423b240ba5b42544e2a148d88172c0cb7e7)
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument instance_storage", value=instance_storage, expected_type=type_hints["instance_storage"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument disk_category", value=disk_category, expected_type=type_hints["disk_category"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument instance_alias", value=instance_alias, expected_type=type_hints["instance_alias"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_class": instance_class,
            "instance_storage": instance_storage,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if disk_category is not None:
            self._values["disk_category"] = disk_category
        if duration is not None:
            self._values["duration"] = duration
        if instance_alias is not None:
            self._values["instance_alias"] = instance_alias
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceClass: The type of the instance. For more information, see Instance types:
        tsdb.1x.basic: Basic Edition I
        tsdb.3x.basic: Basic Edition II
        tsdb.4x.basic: Basic Edition III
        tsdb.12x.standard: Standard Edition I
        tsdb.24x.standard: Standard Edition II
        tsdb.48x.large: Ultimate Edition I
        tsdb.96x.large: Ultimate Edition II and so on.
        '''
        result = self._values.get("instance_class")
        assert result is not None, "Required property 'instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_storage(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
        '''
        result = self._values.get("instance_storage")
        assert result is not None, "Required property 'instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch in the specified VPC.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskCategory: The category of disk.
        '''
        result = self._values.get("disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceAlias: The alias of the instance.
        '''
        result = self._values.get("instance_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHiTSDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInfluxDBDatabase(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBDatabase",
):
    '''A ROS template type:  ``ALIYUN::TSDB::InfluxDBDatabase``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInfluxDBDatabaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::InfluxDBDatabase``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ff32d394e7cbbd6cb70f99b5f8d9d58527e79cd0bbced2aa00e35bf1cf30d6f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e1a3fc72e25efeff615560fe9b0c0be37d30a0b0089a211800cd270369e6b293)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBName: The name of database.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7745d157124d12782bde41ab84d9d21ad0788c4d2596cbe1c226758b10348182)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6ec1b834de0f5918c9e4694865e5d79ed37e011eb0fa7fcd36ee0291b192285)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1249956423176b36b0b4e50f37dc775b68d722a262d21262a0c91b2abd936e07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={"db_name": "dbName", "instance_id": "instanceId"},
)
class RosInfluxDBDatabaseProps:
    def __init__(
        self,
        *,
        db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBDatabase``.

        :param db_name: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72e2c308ab94b6c527223cb090d00e6687cd74797ac39972a60dec4855a3a6cb)
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_name": db_name,
            "instance_id": instance_id,
        }

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInfluxDBDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInfluxDBUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBUser",
):
    '''A ROS template type:  ``ALIYUN::TSDB::InfluxDBUser``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInfluxDBUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::InfluxDBUser``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d100add69f53ba8759f85dddd80adf855609d2e1320e7e8fd0fbe4a695fff73)
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
            type_hints = typing.get_type_hints(_typecheckingstub__82c67c4866540f5dab4757f32592712e3e3ddafd43b42b17afc70d3a3c64c40e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserName: The name of user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserType")
    def attr_user_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserType: The type of user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7e6232b3a4285eb33161b55db050939583a7fc36aa7e5a4b7d104462b865fedd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e401e963cff95ee29f988652c52fb5dc6235d6ddf6160a2c364b3ba96dc53283)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: #$%^&*()_+-=
        :Property: password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aab47b7415cb3ed48100c85fda04008636aa759089a4315b31f910ff347fea8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a69cdc85e818eaf32642b66fa9301ac7c400a1c087c5b76d55f8e9b122f23dc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)

    @builtins.property
    @jsii.member(jsii_name="userType")
    def user_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userType: The type of user. Valid values:
        normal: normal user
        admin: administrator user.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userType"))

    @user_type.setter
    def user_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2c4a7c24a0067a60d567a34bd3dfd9c83c14287e866ff7c94905b6bba90ce7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userType", value)

    @builtins.property
    @jsii.member(jsii_name="databasePermissions")
    def database_permissions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]]:
        '''
        :Property: databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]], jsii.get(self, "databasePermissions"))

    @database_permissions.setter
    def database_permissions(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbecda69f36d49534e423afe116cb417683402cc9316a0bee963aea3536932dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databasePermissions", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBUser.DatabasePermissionsProperty",
        jsii_struct_bases=[],
        name_mapping={"db_name": "dbName", "permission": "permission"},
    )
    class DatabasePermissionsProperty:
        def __init__(
            self,
            *,
            db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            permission: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param db_name: 
            :param permission: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0ad4c03805e6286744c372d5e270011ecd505dad7a24e82b4e34f069c4fb6f0f)
                check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
                check_type(argname="argument permission", value=permission, expected_type=type_hints["permission"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "db_name": db_name,
                "permission": permission,
            }

        @builtins.property
        def db_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def permission(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: permission: The database privilege the user has. Valid values: read, write, all.
            '''
            result = self._values.get("permission")
            assert result is not None, "Required property 'permission' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DatabasePermissionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "password": "password",
        "user_name": "userName",
        "user_type": "userType",
        "database_permissions": "databasePermissions",
    },
)
class RosInfluxDBUserProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_permissions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInfluxDBUser.DatabasePermissionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBUser``.

        :param instance_id: 
        :param password: 
        :param user_name: 
        :param user_type: 
        :param database_permissions: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__120ac730cf1872415f64c5943fb751957de0591aeb331be3f3af270d43cc9850)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument user_type", value=user_type, expected_type=type_hints["user_type"])
            check_type(argname="argument database_permissions", value=database_permissions, expected_type=type_hints["database_permissions"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "user_name": user_name,
            "user_type": user_type,
        }
        if database_permissions is not None:
            self._values["database_permissions"] = database_permissions

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: #$%^&*()_+-=
        :Property: password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userType: The type of user. Valid values:
        normal: normal user
        admin: administrator user.
        '''
        result = self._values.get("user_type")
        assert result is not None, "Required property 'user_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_permissions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInfluxDBUser.DatabasePermissionsProperty]]]]:
        '''
        :Property: databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
        '''
        result = self._values.get("database_permissions")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInfluxDBUser.DatabasePermissionsProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInfluxDBUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "HiTSDBInstance",
    "HiTSDBInstanceProps",
    "InfluxDBDatabase",
    "InfluxDBDatabaseProps",
    "InfluxDBUser",
    "InfluxDBUserProps",
    "RosHiTSDBInstance",
    "RosHiTSDBInstanceProps",
    "RosInfluxDBDatabase",
    "RosInfluxDBDatabaseProps",
    "RosInfluxDBUser",
    "RosInfluxDBUserProps",
]

publication.publish()

def _typecheckingstub__44220de53be3c5190b165bbe553292d286f6b05a0dba1e162bba46f78b048186(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HiTSDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__268cbd182c67915f4c44597f6b271664a7e621075693a34bf0c513e5c9c5218c(
    *,
    instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3868cae4870658cba510035b2f3c9b8cbcf296a239f90acf00462041239d0abc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InfluxDBDatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef55670afcf70cb9224f9f1df86ca2f238b20b383b050bb057af21ef288ba26b(
    *,
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d4e242f73db020871cb9c2b237a2cbdae2044c98f39e8c03aba0c07f1d5c210(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InfluxDBUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__090f30ff5b1237e294e2d72b6b706ee32eaaba35ca11ad28d85b17de21e89bf8(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_permissions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInfluxDBUser.DatabasePermissionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2ce2e120e08ca16a9aec061f434bb839f408f5cd0f6f8d078a32f85c2506c6b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHiTSDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c16cb4b03f027ce265824edbfb1dfaf258b71ecbb7ef590384c770aff21b7a2f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__210a8076760fcb5298ddaa5d3a77325e8e6f4de95c0c6e7b4ebf8e8e9a2c04cc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4134b77d30fa275c5ad39ee5243a7f28d127b78179d1d20bb8095d3fcca3f985(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b88113180f2e54d3483727cc31e789b819ffad448f7297e36fd4eccd8bbe43f(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bede355a3121e53ad834189ae595a55d24041d6a8dbc4fb91cb3211941de7f5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__052fc7120b265f3cb6a30e749404e57134dc498719a96af65c7dc3ea9b2f1843(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4634db5831921c35a3f1446022601808dfb0bcd76c0decf997b5fd3ed2f814e9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8dad3130222c4c53af402e3329fcb4ccf57f64efd1d2bf31251f07743c95c99(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b17ecc72a2f6c3d57bccdaeb035872a768baecaa3e81f0b3c8119d9fb657f9c2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee25cadeafc1cbebcb2a21da42f07772995476a96be2b27b7b032aacfa31e4e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7a8ea48bd813c6879f73fda40d32aab8e12a680656c8bc90a6af1163efffd0a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__802dc829686182afc96eefdcc2cc4c98ed33688651aaf35d965917c51829aca1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5efe6ae98032acdc34c5241ba169dc9cdb9a5a3746a073a5a8de3a1d00f24126(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a1081499f6e47250e0eef5ea6679423b240ba5b42544e2a148d88172c0cb7e7(
    *,
    instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_storage: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ff32d394e7cbbd6cb70f99b5f8d9d58527e79cd0bbced2aa00e35bf1cf30d6f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInfluxDBDatabaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a3fc72e25efeff615560fe9b0c0be37d30a0b0089a211800cd270369e6b293(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7745d157124d12782bde41ab84d9d21ad0788c4d2596cbe1c226758b10348182(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6ec1b834de0f5918c9e4694865e5d79ed37e011eb0fa7fcd36ee0291b192285(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1249956423176b36b0b4e50f37dc775b68d722a262d21262a0c91b2abd936e07(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72e2c308ab94b6c527223cb090d00e6687cd74797ac39972a60dec4855a3a6cb(
    *,
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d100add69f53ba8759f85dddd80adf855609d2e1320e7e8fd0fbe4a695fff73(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInfluxDBUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c67c4866540f5dab4757f32592712e3e3ddafd43b42b17afc70d3a3c64c40e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e6232b3a4285eb33161b55db050939583a7fc36aa7e5a4b7d104462b865fedd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e401e963cff95ee29f988652c52fb5dc6235d6ddf6160a2c364b3ba96dc53283(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aab47b7415cb3ed48100c85fda04008636aa759089a4315b31f910ff347fea8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a69cdc85e818eaf32642b66fa9301ac7c400a1c087c5b76d55f8e9b122f23dc3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2c4a7c24a0067a60d567a34bd3dfd9c83c14287e866ff7c94905b6bba90ce7d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbecda69f36d49534e423afe116cb417683402cc9316a0bee963aea3536932dc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInfluxDBUser.DatabasePermissionsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ad4c03805e6286744c372d5e270011ecd505dad7a24e82b4e34f069c4fb6f0f(
    *,
    db_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__120ac730cf1872415f64c5943fb751957de0591aeb331be3f3af270d43cc9850(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_permissions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInfluxDBUser.DatabasePermissionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
