'''
## Aliyun ROS DRDS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DRDS from '@alicloud/ros-cdk-drds';
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


class DrdsDB(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.DrdsDB",
):
    '''A ROS resource type:  ``ALIYUN::DRDS::DrdsDB``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DrdsDBProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DRDS::DrdsDB``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        drds_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        db_inst_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        inst_db_name: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rds_instance: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DRDS::DrdsDB``.

        :param drds_instance_id: Property drdsInstanceId: DRDS instance ID.
        :param account_name: Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        :param db_instance_is_creating: Property dbInstanceIsCreating: Check whether the RDS instance is being created.
        :param db_inst_type: Property dbInstType: The type of the attached storage. Valid values: RDS or POLARDB
        :param db_name: Property dbName: Database Name.
        :param encode: Property encode: Encoding used by the database.
        :param inst_db_name: Property instDbName:.
        :param password: Property password: The logon password of the database instance.
        :param rds_instance: Property rdsInstance: This property is required only for vertical partitioning.
        :param type: Property type: Database Sharding method. For more information, see scalability principle. Valid values: HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database and table sharding. VERTICAL: indicates VERTICAL partitioning.
        '''
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
    def drds_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property drdsInstanceId: DRDS instance ID.'''
        result = self._values.get("drds_instance_id")
        assert result is not None, "Required property 'drds_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.'''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property dbInstanceIsCreating: Check whether the RDS instance is being created.'''
        result = self._values.get("db_instance_is_creating")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_inst_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbInstType: The type of the attached storage.

        Valid values:
        RDS or POLARDB
        '''
        result = self._values.get("db_inst_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dbName: Database Name.'''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encode: Encoding used by the database.'''
        result = self._values.get("encode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]]:
        '''Property instDbName:.'''
        result = self._values.get("inst_db_name")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property password: The logon password of the database instance.'''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rds_instance(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property rdsInstance: This property is required only for vertical partitioning.'''
        result = self._values.get("rds_instance")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property type: Database Sharding method.

        For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::DRDS::DrdsInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DrdsInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DRDS::DrdsInstance``.

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
    @jsii.member(jsii_name="attrDrdsInstanceId")
    def attr_drds_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DrdsInstanceId: instance id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDrdsInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetEndpoint: Public endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute IntranetEndpoint: VPC endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: order number.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


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
        "tags": "tags",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
    },
)
class DrdsInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_series: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        quantity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        specification: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        is_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        my_sql_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosDrdsInstance.TagsProperty"]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vswitch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DRDS::DrdsInstance``.

        :param description: Property description: Description of the DRDS instance, 2-128 characters.
        :param instance_series: Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.
        :param pay_type: Property payType: For the type of payment, see "Payment Type Parameter Table".
        :param quantity: Property quantity: Purchase quantity.
        :param specification: Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.
        :param type: Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.
        :param zone_id: Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
        :param duration: Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        :param is_auto_renew: Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        :param my_sql_version: Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        :param pricing_cycle: Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
        :param vswitch_id: Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
        '''
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
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vswitch_id is not None:
            self._values["vswitch_id"] = vswitch_id

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property description: Description of the DRDS instance, 2-128 characters.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_series(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.'''
        result = self._values.get("instance_series")
        assert result is not None, "Required property 'instance_series' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property payType: For the type of payment, see "Payment Type Parameter Table".'''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def quantity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property quantity: Purchase quantity.'''
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def specification(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.'''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property duration: The number of cycles ordered.

        When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.

        The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("is_auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def my_sql_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property mySqlVersion: The MySQL protocol version supported by DRDS.

        Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        '''
        result = self._values.get("my_sql_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: The unit of the order period, year: year, month: month.

        The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDrdsInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDrdsInstance.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.'''
        result = self._values.get("vswitch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::DRDS::DrdsDB``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDrdsDBProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DRDS::DrdsDB``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="drdsInstanceId")
    def drds_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: drdsInstanceId: DRDS instance ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "drdsInstanceId"))

    @drds_instance_id.setter
    def drds_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "drdsInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accountName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstanceIsCreating")
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstanceIsCreating"))

    @db_instance_is_creating.setter
    def db_instance_is_creating(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceIsCreating", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbInstType")
    def db_inst_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbInstType"))

    @db_inst_type.setter
    def db_inst_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbName")
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbName: Database Name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encode")
    def encode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encode: Encoding used by the database
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encode"))

    @encode.setter
    def encode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instDbName")
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]]:
        '''
        :Property: instDbName:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]], jsii.get(self, "instDbName"))

    @inst_db_name.setter
    def inst_db_name(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]],
    ) -> None:
        jsii.set(self, "instDbName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: The logon password of the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rdsInstance")
    def rds_instance(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: rdsInstance: This property is required only for vertical partitioning.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "rdsInstance"))

    @rds_instance.setter
    def rds_instance(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "rdsInstance", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            db_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            shard_db_name: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        ) -> None:
            '''
            :param db_instance_id: 
            :param shard_db_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "db_instance_id": db_instance_id,
                "shard_db_name": shard_db_name,
            }

        @builtins.property
        def db_instance_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
            '''
            result = self._values.get("db_instance_id")
            assert result is not None, "Required property 'db_instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def shard_db_name(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
            '''
            :Property: shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
            '''
            result = self._values.get("shard_db_name")
            assert result is not None, "Required property 'shard_db_name' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

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
        drds_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        db_inst_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        db_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        inst_db_name: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDrdsDB.InstDbNameProperty]]]] = None,
        password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rds_instance: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DRDS::DrdsDB``.

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
        '''
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
    def drds_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: drdsInstanceId: DRDS instance ID
        '''
        result = self._values.get("drds_instance_id")
        assert result is not None, "Required property 'drds_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        '''
        result = self._values.get("db_instance_is_creating")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_inst_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        '''
        result = self._values.get("db_inst_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dbName: Database Name
        '''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encode: Encoding used by the database
        '''
        result = self._values.get("encode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDrdsDB.InstDbNameProperty]]]]:
        '''
        :Property: instDbName:
        '''
        result = self._values.get("inst_db_name")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDrdsDB.InstDbNameProperty]]]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: password: The logon password of the database instance.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rds_instance(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: rdsInstance: This property is required only for vertical partitioning.
        '''
        result = self._values.get("rds_instance")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::DRDS::DrdsInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDrdsInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DRDS::DrdsInstance``.

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
    @jsii.member(jsii_name="attrDrdsInstanceId")
    def attr_drds_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DrdsInstanceId: instance id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDrdsInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetEndpoint: Public endpoint
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IntranetEndpoint: VPC endpoint
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: order number
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Description of the DRDS instance, 2-128 characters
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceSeries")
    def instance_series(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceSeries"))

    @instance_series.setter
    def instance_series(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceSeries", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="quantity")
    def quantity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: quantity: Purchase quantity
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "quantity"))

    @quantity.setter
    def quantity(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "quantity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="specification")
    def specification(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "specification"))

    @specification.setter
    def specification(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "specification", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isAutoRenew")
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isAutoRenew"))

    @is_auto_renew.setter
    def is_auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isAutoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mySqlVersion")
    def my_sql_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "mySqlVersion"))

    @my_sql_version.setter
    def my_sql_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "mySqlVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDrdsInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDrdsInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDrdsInstance.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vswitchId")
    def vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vswitchId"))

    @vswitch_id.setter
    def vswitch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vswitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-drds.RosDrdsInstance.TagsProperty",
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
        "tags": "tags",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
    },
)
class RosDrdsInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_series: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        quantity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        specification: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        is_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        my_sql_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosDrdsInstance.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vswitch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DRDS::DrdsInstance``.

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
        :param tags: 
        :param vpc_id: 
        :param vswitch_id: 
        '''
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
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vswitch_id is not None:
            self._values["vswitch_id"] = vswitch_id

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Description of the DRDS instance, 2-128 characters
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_series(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        '''
        result = self._values.get("instance_series")
        assert result is not None, "Required property 'instance_series' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def quantity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: quantity: Purchase quantity
        '''
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def specification(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        '''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("is_auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def my_sql_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        '''
        result = self._values.get("my_sql_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDrdsInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDrdsInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        '''
        result = self._values.get("vswitch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
