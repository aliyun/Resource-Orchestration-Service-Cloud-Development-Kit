"""
## Aliyun ROS DRDS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_drds as DRDS
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


class DrdsDB(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.DrdsDB",
):
    """A ROS resource type:  ``ALIYUN::DRDS::DrdsDB``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DrdsDBProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DRDS::DrdsDB``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DrdsDB, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-drds.DrdsDBProps",
    jsii_struct_bases=[],
    name_mapping={
        "drds_instance_id": "drdsInstanceId",
        "account_name": "accountName",
        "db_instance_is_creating": "dbInstanceIsCreating",
        "db_inst_type": "dbInstType",
        "db_name": "dbName",
        "encode": "encode",
        "inst_db_name": "instDbName",
        "password": "password",
        "rds_instance": "rdsInstance",
        "type": "type",
    },
)
class DrdsDBProps:
    def __init__(
        self,
        *,
        drds_instance_id: builtins.str,
        account_name: typing.Optional[builtins.str] = None,
        db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        db_inst_type: typing.Optional[builtins.str] = None,
        db_name: typing.Optional[builtins.str] = None,
        encode: typing.Optional[builtins.str] = None,
        inst_db_name: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]] = None,
        password: typing.Optional[builtins.str] = None,
        rds_instance: typing.Optional[typing.List[builtins.str]] = None,
        type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DRDS::DrdsDB``.

        :param drds_instance_id: 
        :param account_name: 
        :param db_instance_is_creating: 
        :param db_inst_type: 
        :param db_name: 
        :param encode: 
        :param inst_db_name: 
        :param password: 
        :param rds_instance: 
        :param type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "drds_instance_id": drds_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if db_instance_is_creating is not None:
            self._values["db_instance_is_creating"] = db_instance_is_creating
        if db_inst_type is not None:
            self._values["db_inst_type"] = db_inst_type
        if db_name is not None:
            self._values["db_name"] = db_name
        if encode is not None:
            self._values["encode"] = encode
        if inst_db_name is not None:
            self._values["inst_db_name"] = inst_db_name
        if password is not None:
            self._values["password"] = password
        if rds_instance is not None:
            self._values["rds_instance"] = rds_instance
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def drds_instance_id(self) -> builtins.str:
        """
        :Property: drdsInstanceId: DRDS instance ID
        """
        result = self._values.get("drds_instance_id")
        assert result is not None, "Required property 'drds_instance_id' is missing"
        return result

    @builtins.property
    def account_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        """
        result = self._values.get("account_name")
        return result

    @builtins.property
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        """
        result = self._values.get("db_instance_is_creating")
        return result

    @builtins.property
    def db_inst_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        """
        result = self._values.get("db_inst_type")
        return result

    @builtins.property
    def db_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbName: Database Name
        """
        result = self._values.get("db_name")
        return result

    @builtins.property
    def encode(self) -> typing.Optional[builtins.str]:
        """
        :Property: encode: Encoding used by the database
        """
        result = self._values.get("encode")
        return result

    @builtins.property
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]]:
        """
        :Property: instDbName:
        """
        result = self._values.get("inst_db_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The logon password of the database instance.
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def rds_instance(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: rdsInstance: This property is required only for vertical partitioning.
        """
        result = self._values.get("rds_instance")
        return result

    @builtins.property
    def type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        """
        result = self._values.get("type")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DrdsDBProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DrdsInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.DrdsInstance",
):
    """A ROS resource type:  ``ALIYUN::DRDS::DrdsInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DrdsInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DRDS::DrdsInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DrdsInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDrdsInstanceId")
    def attr_drds_instance_id(self) -> typing.Any:
        """
        :Attribute: DrdsInstanceId: instance id
        """
        return jsii.get(self, "attrDrdsInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> typing.Any:
        """
        :Attribute: InternetEndpoint: Public endpoint
        """
        return jsii.get(self, "attrInternetEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> typing.Any:
        """
        :Attribute: IntranetEndpoint: VPC endpoint
        """
        return jsii.get(self, "attrIntranetEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: order number
        """
        return jsii.get(self, "attrOrderId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-drds.DrdsInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "instance_series": "instanceSeries",
        "pay_type": "payType",
        "quantity": "quantity",
        "specification": "specification",
        "type": "type",
        "zone_id": "zoneId",
        "duration": "duration",
        "is_auto_renew": "isAutoRenew",
        "my_sql_version": "mySqlVersion",
        "pricing_cycle": "pricingCycle",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
    },
)
class DrdsInstanceProps:
    def __init__(
        self,
        *,
        description: builtins.str,
        instance_series: builtins.str,
        pay_type: builtins.str,
        quantity: jsii.Number,
        specification: builtins.str,
        type: builtins.str,
        zone_id: builtins.str,
        duration: typing.Optional[jsii.Number] = None,
        is_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        my_sql_version: typing.Optional[builtins.str] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vswitch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DRDS::DrdsInstance``.

        :param description: 
        :param instance_series: 
        :param pay_type: 
        :param quantity: 
        :param specification: 
        :param type: 
        :param zone_id: 
        :param duration: 
        :param is_auto_renew: 
        :param my_sql_version: 
        :param pricing_cycle: 
        :param vpc_id: 
        :param vswitch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "description": description,
            "instance_series": instance_series,
            "pay_type": pay_type,
            "quantity": quantity,
            "specification": specification,
            "type": type,
            "zone_id": zone_id,
        }
        if duration is not None:
            self._values["duration"] = duration
        if is_auto_renew is not None:
            self._values["is_auto_renew"] = is_auto_renew
        if my_sql_version is not None:
            self._values["my_sql_version"] = my_sql_version
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vswitch_id is not None:
            self._values["vswitch_id"] = vswitch_id

    @builtins.property
    def description(self) -> builtins.str:
        """
        :Property: description: Description of the DRDS instance, 2-128 characters
        """
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return result

    @builtins.property
    def instance_series(self) -> builtins.str:
        """
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        """
        result = self._values.get("instance_series")
        assert result is not None, "Required property 'instance_series' is missing"
        return result

    @builtins.property
    def pay_type(self) -> builtins.str:
        """
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        """
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return result

    @builtins.property
    def quantity(self) -> jsii.Number:
        """
        :Property: quantity: Purchase quantity
        """
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return result

    @builtins.property
    def specification(self) -> builtins.str:
        """
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        """
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return result

    @builtins.property
    def type(self) -> builtins.str:
        """
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        """
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        """
        result = self._values.get("is_auto_renew")
        return result

    @builtins.property
    def my_sql_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        """
        result = self._values.get("my_sql_version")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vswitch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        """
        result = self._values.get("vswitch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DrdsInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDrdsDB(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsDB",
):
    """A ROS template type:  ``ALIYUN::DRDS::DrdsDB``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDrdsDBProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DRDS::DrdsDB``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDrdsDB, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="drdsInstanceId")
    def drds_instance_id(self) -> builtins.str:
        """
        :Property: drdsInstanceId: DRDS instance ID
        """
        return jsii.get(self, "drdsInstanceId")

    @drds_instance_id.setter # type: ignore
    def drds_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "drdsInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountName")
    def account_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        """
        return jsii.get(self, "accountName")

    @account_name.setter # type: ignore
    def account_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceIsCreating")
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        """
        return jsii.get(self, "dbInstanceIsCreating")

    @db_instance_is_creating.setter # type: ignore
    def db_instance_is_creating(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceIsCreating", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstType")
    def db_inst_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        """
        return jsii.get(self, "dbInstType")

    @db_inst_type.setter # type: ignore
    def db_inst_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbName")
    def db_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbName: Database Name
        """
        return jsii.get(self, "dbName")

    @db_name.setter # type: ignore
    def db_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="encode")
    def encode(self) -> typing.Optional[builtins.str]:
        """
        :Property: encode: Encoding used by the database
        """
        return jsii.get(self, "encode")

    @encode.setter # type: ignore
    def encode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "encode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instDbName")
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]]:
        """
        :Property: instDbName:
        """
        return jsii.get(self, "instDbName")

    @inst_db_name.setter # type: ignore
    def inst_db_name(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]],
    ) -> None:
        jsii.set(self, "instDbName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The logon password of the database instance.
        """
        return jsii.get(self, "password")

    @password.setter # type: ignore
    def password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rdsInstance")
    def rds_instance(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: rdsInstance: This property is required only for vertical partitioning.
        """
        return jsii.get(self, "rdsInstance")

    @rds_instance.setter # type: ignore
    def rds_instance(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "rdsInstance", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        """
        return jsii.get(self, "type")

    @type.setter # type: ignore
    def type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "type", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty",
        jsii_struct_bases=[],
        name_mapping={
            "db_instance_id": "dbInstanceId",
            "shard_db_name": "shardDbName",
        },
    )
    class InstDbNameProperty:
        def __init__(
            self,
            *,
            db_instance_id: builtins.str,
            shard_db_name: typing.List[builtins.str],
        ) -> None:
            """
            :param db_instance_id: 
            :param shard_db_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "db_instance_id": db_instance_id,
                "shard_db_name": shard_db_name,
            }

        @builtins.property
        def db_instance_id(self) -> builtins.str:
            """
            :Property: dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
            """
            result = self._values.get("db_instance_id")
            assert result is not None, "Required property 'db_instance_id' is missing"
            return result

        @builtins.property
        def shard_db_name(self) -> typing.List[builtins.str]:
            """
            :Property: shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
            """
            result = self._values.get("shard_db_name")
            assert result is not None, "Required property 'shard_db_name' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstDbNameProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsDBProps",
    jsii_struct_bases=[],
    name_mapping={
        "drds_instance_id": "drdsInstanceId",
        "account_name": "accountName",
        "db_instance_is_creating": "dbInstanceIsCreating",
        "db_inst_type": "dbInstType",
        "db_name": "dbName",
        "encode": "encode",
        "inst_db_name": "instDbName",
        "password": "password",
        "rds_instance": "rdsInstance",
        "type": "type",
    },
)
class RosDrdsDBProps:
    def __init__(
        self,
        *,
        drds_instance_id: builtins.str,
        account_name: typing.Optional[builtins.str] = None,
        db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        db_inst_type: typing.Optional[builtins.str] = None,
        db_name: typing.Optional[builtins.str] = None,
        encode: typing.Optional[builtins.str] = None,
        inst_db_name: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDrdsDB.InstDbNameProperty]]]] = None,
        password: typing.Optional[builtins.str] = None,
        rds_instance: typing.Optional[typing.List[builtins.str]] = None,
        type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DRDS::DrdsDB``.

        :param drds_instance_id: 
        :param account_name: 
        :param db_instance_is_creating: 
        :param db_inst_type: 
        :param db_name: 
        :param encode: 
        :param inst_db_name: 
        :param password: 
        :param rds_instance: 
        :param type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "drds_instance_id": drds_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name
        if db_instance_is_creating is not None:
            self._values["db_instance_is_creating"] = db_instance_is_creating
        if db_inst_type is not None:
            self._values["db_inst_type"] = db_inst_type
        if db_name is not None:
            self._values["db_name"] = db_name
        if encode is not None:
            self._values["encode"] = encode
        if inst_db_name is not None:
            self._values["inst_db_name"] = inst_db_name
        if password is not None:
            self._values["password"] = password
        if rds_instance is not None:
            self._values["rds_instance"] = rds_instance
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def drds_instance_id(self) -> builtins.str:
        """
        :Property: drdsInstanceId: DRDS instance ID
        """
        result = self._values.get("drds_instance_id")
        assert result is not None, "Required property 'drds_instance_id' is missing"
        return result

    @builtins.property
    def account_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        """
        result = self._values.get("account_name")
        return result

    @builtins.property
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        """
        result = self._values.get("db_instance_is_creating")
        return result

    @builtins.property
    def db_inst_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        """
        result = self._values.get("db_inst_type")
        return result

    @builtins.property
    def db_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbName: Database Name
        """
        result = self._values.get("db_name")
        return result

    @builtins.property
    def encode(self) -> typing.Optional[builtins.str]:
        """
        :Property: encode: Encoding used by the database
        """
        result = self._values.get("encode")
        return result

    @builtins.property
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDrdsDB.InstDbNameProperty]]]]:
        """
        :Property: instDbName:
        """
        result = self._values.get("inst_db_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: The logon password of the database instance.
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def rds_instance(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: rdsInstance: This property is required only for vertical partitioning.
        """
        result = self._values.get("rds_instance")
        return result

    @builtins.property
    def type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        """
        result = self._values.get("type")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDrdsDBProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDrdsInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsInstance",
):
    """A ROS template type:  ``ALIYUN::DRDS::DrdsInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDrdsInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DRDS::DrdsInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDrdsInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDrdsInstanceId")
    def attr_drds_instance_id(self) -> typing.Any:
        """
        :Attribute: DrdsInstanceId: instance id
        """
        return jsii.get(self, "attrDrdsInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> typing.Any:
        """
        :Attribute: InternetEndpoint: Public endpoint
        """
        return jsii.get(self, "attrInternetEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> typing.Any:
        """
        :Attribute: IntranetEndpoint: VPC endpoint
        """
        return jsii.get(self, "attrIntranetEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: order number
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> builtins.str:
        """
        :Property: description: Description of the DRDS instance, 2-128 characters
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: builtins.str) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceSeries")
    def instance_series(self) -> builtins.str:
        """
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        """
        return jsii.get(self, "instanceSeries")

    @instance_series.setter # type: ignore
    def instance_series(self, value: builtins.str) -> None:
        jsii.set(self, "instanceSeries", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> builtins.str:
        """
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        """
        return jsii.get(self, "payType")

    @pay_type.setter # type: ignore
    def pay_type(self, value: builtins.str) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="quantity")
    def quantity(self) -> jsii.Number:
        """
        :Property: quantity: Purchase quantity
        """
        return jsii.get(self, "quantity")

    @quantity.setter # type: ignore
    def quantity(self, value: jsii.Number) -> None:
        jsii.set(self, "quantity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="specification")
    def specification(self) -> builtins.str:
        """
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        """
        return jsii.get(self, "specification")

    @specification.setter # type: ignore
    def specification(self, value: builtins.str) -> None:
        jsii.set(self, "specification", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="type")
    def type(self) -> builtins.str:
        """
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        """
        return jsii.get(self, "type")

    @type.setter # type: ignore
    def type(self, value: builtins.str) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: builtins.str) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        """
        return jsii.get(self, "duration")

    @duration.setter # type: ignore
    def duration(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="isAutoRenew")
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        """
        return jsii.get(self, "isAutoRenew")

    @is_auto_renew.setter # type: ignore
    def is_auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isAutoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mySqlVersion")
    def my_sql_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        """
        return jsii.get(self, "mySqlVersion")

    @my_sql_version.setter # type: ignore
    def my_sql_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mySqlVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vswitchId")
    def vswitch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        """
        return jsii.get(self, "vswitchId")

    @vswitch_id.setter # type: ignore
    def vswitch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vswitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "instance_series": "instanceSeries",
        "pay_type": "payType",
        "quantity": "quantity",
        "specification": "specification",
        "type": "type",
        "zone_id": "zoneId",
        "duration": "duration",
        "is_auto_renew": "isAutoRenew",
        "my_sql_version": "mySqlVersion",
        "pricing_cycle": "pricingCycle",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
    },
)
class RosDrdsInstanceProps:
    def __init__(
        self,
        *,
        description: builtins.str,
        instance_series: builtins.str,
        pay_type: builtins.str,
        quantity: jsii.Number,
        specification: builtins.str,
        type: builtins.str,
        zone_id: builtins.str,
        duration: typing.Optional[jsii.Number] = None,
        is_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        my_sql_version: typing.Optional[builtins.str] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vswitch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DRDS::DrdsInstance``.

        :param description: 
        :param instance_series: 
        :param pay_type: 
        :param quantity: 
        :param specification: 
        :param type: 
        :param zone_id: 
        :param duration: 
        :param is_auto_renew: 
        :param my_sql_version: 
        :param pricing_cycle: 
        :param vpc_id: 
        :param vswitch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "description": description,
            "instance_series": instance_series,
            "pay_type": pay_type,
            "quantity": quantity,
            "specification": specification,
            "type": type,
            "zone_id": zone_id,
        }
        if duration is not None:
            self._values["duration"] = duration
        if is_auto_renew is not None:
            self._values["is_auto_renew"] = is_auto_renew
        if my_sql_version is not None:
            self._values["my_sql_version"] = my_sql_version
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vswitch_id is not None:
            self._values["vswitch_id"] = vswitch_id

    @builtins.property
    def description(self) -> builtins.str:
        """
        :Property: description: Description of the DRDS instance, 2-128 characters
        """
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return result

    @builtins.property
    def instance_series(self) -> builtins.str:
        """
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        """
        result = self._values.get("instance_series")
        assert result is not None, "Required property 'instance_series' is missing"
        return result

    @builtins.property
    def pay_type(self) -> builtins.str:
        """
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        """
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return result

    @builtins.property
    def quantity(self) -> jsii.Number:
        """
        :Property: quantity: Purchase quantity
        """
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return result

    @builtins.property
    def specification(self) -> builtins.str:
        """
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        """
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return result

    @builtins.property
    def type(self) -> builtins.str:
        """
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        """
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        """
        result = self._values.get("is_auto_renew")
        return result

    @builtins.property
    def my_sql_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        """
        result = self._values.get("my_sql_version")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vswitch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        """
        result = self._values.get("vswitch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDrdsInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DrdsDB",
    "DrdsDBProps",
    "DrdsInstance",
    "DrdsInstanceProps",
    "RosDrdsDB",
    "RosDrdsDBProps",
    "RosDrdsInstance",
    "RosDrdsInstanceProps",
]

publication.publish()
