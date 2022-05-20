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

from ._jsii import *

import ros_cdk_core


class HiTSDBInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.HiTSDBInstance",
):
    '''A ROS resource type:  ``ALIYUN::TSDB::HiTSDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "HiTSDBInstanceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionString: Connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineType")
    def attr_engine_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute EngineType: Engine type of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order id of created instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicConnectionString: Public connection string of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrReverseVpcIp")
    def attr_reverse_vpc_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute ReverseVpcIp: Reverse vpc ip of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrReverseVpcIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrReverseVpcPort")
    def attr_reverse_vpc_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute ReverseVpcPort: Reverse vpc port of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrReverseVpcPort"))


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
        instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_storage(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property instanceStorage: The storage capacity of the instance.

        Unit: GB. For example, the value 50 indicates 50 GB.
        '''
        result = self._values.get("instance_storage")
        assert result is not None, "Required property 'instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The ID of the VSwitch in the specified VPC.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The zone ID of the instance.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property diskCategory: The category of disk.'''
        result = self._values.get("disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property duration: The validity period of the instance.

        This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceAlias: The alias of the instance.'''
        result = self._values.get("instance_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: The billing method.

        Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: The unit of the validity period.

        This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HiTSDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InfluxDBDatabase(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBDatabase",
):
    '''A ROS resource type:  ``ALIYUN::TSDB::InfluxDBDatabase``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InfluxDBDatabaseProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DBName: The name of database.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of TSDB for InfluxDB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps",
    jsii_struct_bases=[],
    name_mapping={"db_name": "dbName", "instance_id": "instanceId"},
)
class InfluxDBDatabaseProps:
    def __init__(
        self,
        *,
        db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBDatabase``.

        :param db_name: Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        :param instance_id: Property instanceId: The ID of TSDB for InfluxDB.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_name": db_name,
            "instance_id": instance_id,
        }

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbName: The name of database.

        The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of TSDB for InfluxDB.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InfluxDBDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InfluxDBUser(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.InfluxDBUser",
):
    '''A ROS resource type:  ``ALIYUN::TSDB::InfluxDBUser``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InfluxDBUserProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of TSDB for InfluxDB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserName: The name of user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserType")
    def attr_user_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserType: The type of user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserType"))


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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        database_permissions: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBUser``.

        :param instance_id: Property instanceId: The ID of TSDB for InfluxDB.
        :param password: Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=.
        :param user_name: Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        :param user_type: Property userType: The type of user. Valid values: normal: normal user admin: administrator user.
        :param database_permissions: Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "user_name": user_name,
            "user_type": user_type,
        }
        if database_permissions is not None:
            self._values["database_permissions"] = database_permissions

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of TSDB for InfluxDB.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=.'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property userName: The name of user.

        The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property userType: The type of user.

        Valid values:
        normal: normal user
        admin: administrator user.
        '''
        result = self._values.get("user_type")
        assert result is not None, "Required property 'user_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def database_permissions(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]]:
        '''Property databasePermissions: The list of databases that the user can access.

        If the user type is admin, do not specify this parameter.
        '''
        result = self._values.get("database_permissions")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InfluxDBUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHiTSDBInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.RosHiTSDBInstance",
):
    '''A ROS template type:  ``ALIYUN::TSDB::HiTSDBInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosHiTSDBInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::HiTSDBInstance``.

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
        :Attribute: ConnectionString: Connection string of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngineType")
    def attr_engine_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EngineType: Engine type of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngineType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order id of created instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicConnectionString")
    def attr_public_connection_string(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicConnectionString: Public connection string of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicConnectionString"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrReverseVpcIp")
    def attr_reverse_vpc_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ReverseVpcIp: Reverse vpc ip of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrReverseVpcIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrReverseVpcPort")
    def attr_reverse_vpc_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ReverseVpcPort: Reverse vpc port of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrReverseVpcPort"))

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
    @jsii.member(jsii_name="instanceClass")
    def instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceStorage")
    def instance_storage(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "instanceStorage"))

    @instance_storage.setter
    def instance_storage(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch in the specified VPC.
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
        :Property: zoneId: The zone ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="diskCategory")
    def disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskCategory: The category of disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "diskCategory"))

    @disk_category.setter
    def disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "diskCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceAlias")
    def instance_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceAlias: The alias of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceAlias"))

    @instance_alias.setter
    def instance_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceAlias", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
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
        instance_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_storage: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def instance_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_storage(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
        '''
        result = self._values.get("instance_storage")
        assert result is not None, "Required property 'instance_storage' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch in the specified VPC.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskCategory: The category of disk.
        '''
        result = self._values.get("disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceAlias: The alias of the instance.
        '''
        result = self._values.get("instance_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHiTSDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInfluxDBDatabase(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBDatabase",
):
    '''A ROS template type:  ``ALIYUN::TSDB::InfluxDBDatabase``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInfluxDBDatabaseProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::InfluxDBDatabase``.

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
    @jsii.member(jsii_name="attrDbName")
    def attr_db_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DBName: The name of database.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbName", value)

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
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBDatabase``.

        :param db_name: 
        :param instance_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "db_name": db_name,
            "instance_id": instance_id,
        }

    @builtins.property
    def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("db_name")
        assert result is not None, "Required property 'db_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInfluxDBDatabaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInfluxDBUser(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-tsdb.RosInfluxDBUser",
):
    '''A ROS template type:  ``ALIYUN::TSDB::InfluxDBUser``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInfluxDBUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::TSDB::InfluxDBUser``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserName: The name of user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserType")
    def attr_user_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserType: The type of user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserType"))

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
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: #$%^&*()_+-=
        :Property: password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userName")
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "userName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userType")
    def user_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        userType: The type of user. Valid values:
        normal: normal user
        admin: administrator user.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "userType"))

    @user_type.setter
    def user_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "userType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="databasePermissions")
    def database_permissions(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]]:
        '''
        :Property: databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]], jsii.get(self, "databasePermissions"))

    @database_permissions.setter
    def database_permissions(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInfluxDBUser.DatabasePermissionsProperty"]]]],
    ) -> None:
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
            db_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            permission: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param db_name: 
            :param permission: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "db_name": db_name,
                "permission": permission,
            }

        @builtins.property
        def db_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
            '''
            result = self._values.get("db_name")
            assert result is not None, "Required property 'db_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def permission(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: permission: The database privilege the user has. Valid values: read, write, all.
            '''
            result = self._values.get("permission")
            assert result is not None, "Required property 'permission' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        database_permissions: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosInfluxDBUser.DatabasePermissionsProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::TSDB::InfluxDBUser``.

        :param instance_id: 
        :param password: 
        :param user_name: 
        :param user_type: 
        :param database_permissions: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "user_name": user_name,
            "user_type": user_type,
        }
        if database_permissions is not None:
            self._values["database_permissions"] = database_permissions

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of TSDB for InfluxDB.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: #$%^&*()_+-=
        :Property: password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        userType: The type of user. Valid values:
        normal: normal user
        admin: administrator user.
        '''
        result = self._values.get("user_type")
        assert result is not None, "Required property 'user_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def database_permissions(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosInfluxDBUser.DatabasePermissionsProperty]]]]:
        '''
        :Property: databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
        '''
        result = self._values.get("database_permissions")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosInfluxDBUser.DatabasePermissionsProperty]]]], result)

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
