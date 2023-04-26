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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class DrdsDB(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.DrdsDB",
):
    '''A ROS resource type:  ``ALIYUN::DRDS::DrdsDB``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DrdsDBProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__527bb6819fc0ee9ea9925136dca36f57d378924d95cf30c1c1ee9ca2ef9f2fef)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
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
        drds_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_inst_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inst_db_name: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDrdsDB.InstDbNameProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_instance: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__012fe0cf23b63933c7e8fe44e97870c6389f2325edb4ca5e36d05e8b76612f45)
            check_type(argname="argument drds_instance_id", value=drds_instance_id, expected_type=type_hints["drds_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument db_instance_is_creating", value=db_instance_is_creating, expected_type=type_hints["db_instance_is_creating"])
            check_type(argname="argument db_inst_type", value=db_inst_type, expected_type=type_hints["db_inst_type"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument encode", value=encode, expected_type=type_hints["encode"])
            check_type(argname="argument inst_db_name", value=inst_db_name, expected_type=type_hints["inst_db_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument rds_instance", value=rds_instance, expected_type=type_hints["rds_instance"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def drds_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property drdsInstanceId: DRDS instance ID.'''
        result = self._values.get("drds_instance_id")
        assert result is not None, "Required property 'drds_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.'''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceIsCreating: Check whether the RDS instance is being created.'''
        result = self._values.get("db_instance_is_creating")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_inst_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstType: The type of the attached storage.

        Valid values:
        RDS or POLARDB
        '''
        result = self._values.get("db_inst_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbName: Database Name.'''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encode: Encoding used by the database.'''
        result = self._values.get("encode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]]:
        '''Property instDbName:.'''
        result = self._values.get("inst_db_name")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: The logon password of the database instance.'''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_instance(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property rdsInstance: This property is required only for vertical partitioning.'''
        result = self._values.get("rds_instance")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: Database Sharding method.

        For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DrdsDBProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DrdsInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.DrdsInstance",
):
    '''A ROS resource type:  ``ALIYUN::DRDS::DrdsInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DrdsInstanceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41dc86bc5f03746f79080e695791dbb8a40e91c0476f5c65150bac894670e65a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDrdsInstanceId")
    def attr_drds_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DrdsInstanceId: instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDrdsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetEndpoint: Public endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IntranetEndpoint: VPC endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: order number.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-drds.DrdsInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "instance_series": "instanceSeries",
        "pay_type": "payType",
        "specification": "specification",
        "type": "type",
        "zone_id": "zoneId",
        "duration": "duration",
        "is_auto_renew": "isAutoRenew",
        "my_sql_version": "mySqlVersion",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
    },
)
class DrdsInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_series: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        my_sql_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDrdsInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DRDS::DrdsInstance``.

        :param description: Property description: Description of the DRDS instance, 2-128 characters.
        :param instance_series: Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.
        :param pay_type: Property payType: For the type of payment, see "Payment Type Parameter Table".
        :param specification: Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.
        :param type: Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.
        :param zone_id: Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
        :param duration: Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        :param is_auto_renew: Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        :param my_sql_version: Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        :param pricing_cycle: Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
        :param vswitch_id: Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0abf82668694b03c534af089ab6ad9aa6e647caabd7a6fc934eb8611e3a1d4fb)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument instance_series", value=instance_series, expected_type=type_hints["instance_series"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument specification", value=specification, expected_type=type_hints["specification"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument is_auto_renew", value=is_auto_renew, expected_type=type_hints["is_auto_renew"])
            check_type(argname="argument my_sql_version", value=my_sql_version, expected_type=type_hints["my_sql_version"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vswitch_id", value=vswitch_id, expected_type=type_hints["vswitch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "instance_series": instance_series,
            "pay_type": pay_type,
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
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vswitch_id is not None:
            self._values["vswitch_id"] = vswitch_id

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: Description of the DRDS instance, 2-128 characters.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_series(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.'''
        result = self._values.get("instance_series")
        assert result is not None, "Required property 'instance_series' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: For the type of payment, see "Payment Type Parameter Table".'''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.'''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration: The number of cycles ordered.

        When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.

        The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("is_auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def my_sql_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mySqlVersion: The MySQL protocol version supported by DRDS.

        Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        '''
        result = self._values.get("my_sql_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: The unit of the order period, year: year, month: month.

        The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.'''
        result = self._values.get("vswitch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DrdsInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDrdsDB(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsDB",
):
    '''A ROS template type:  ``ALIYUN::DRDS::DrdsDB``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDrdsDBProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DRDS::DrdsDB``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d34241ea07f25af86c1ad17f941941593008c114c8380e6ff2a0401a0d3de17)
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
            type_hints = typing.get_type_hints(_typecheckingstub__509fce85c692cff6460710749cc91696ccf85c2e0292a1087e88f738f90470b6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="drdsInstanceId")
    def drds_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: drdsInstanceId: DRDS instance ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "drdsInstanceId"))

    @drds_instance_id.setter
    def drds_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37f17b77a0e1221557e97aa4e991d1e2740baaed74d2da2f2d7fa034326f8b25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "drdsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5cb579c22575fbc828baad838fb6bc5113f90273b9bc5ed2982d9577085ba93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2da5bb4ad49ed00e8ab03cf87b663de2dee73bb875e6a265b4b4a0929cfb8e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceIsCreating")
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceIsCreating"))

    @db_instance_is_creating.setter
    def db_instance_is_creating(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__655ffcbcde9d0f8aa5cf0b9e3224a2506ef9b93dd80334b79bb4b9b0bc50c13f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceIsCreating", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstType")
    def db_inst_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstType"))

    @db_inst_type.setter
    def db_inst_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cc535cc26ef7c63324509cfe02d1bcbfe926e97fb841316105584de83f14601)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstType", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: Database Name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b57bd91e2ef178460353c239194a416afb9008d998a52e13425cf3dd3772358)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="encode")
    def encode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encode: Encoding used by the database
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encode"))

    @encode.setter
    def encode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b38a9b80996a18f49123673b76547bef18db0c80a05c52207e57b93e173ef0b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encode", value)

    @builtins.property
    @jsii.member(jsii_name="instDbName")
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]]:
        '''
        :Property: instDbName:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]], jsii.get(self, "instDbName"))

    @inst_db_name.setter
    def inst_db_name(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDrdsDB.InstDbNameProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bd2148da128a36a54119bea942b211922c2c714cee1ebc8bddc34191bea0dd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instDbName", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The logon password of the database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d742519314ba77b711b003f3080d8cb1cf4f82b10c8770ee8197d53e438a363)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="rdsInstance")
    def rds_instance(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: rdsInstance: This property is required only for vertical partitioning.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "rdsInstance"))

    @rds_instance.setter
    def rds_instance(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cdd312394d9da5b15de5465c414ff70fc7cc0c8430dd2f2b269714d1ed11939)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdsInstance", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d68ef5ab7151445f2b91559ad7933a3b8b4a89595982f8a861a1de59b8d58ddc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            shard_db_name: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        ) -> None:
            '''
            :param db_instance_id: 
            :param shard_db_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ec1ad7edb51a9fbd088953d09033c26dc808fd2c1d44e44ed966577d501b875a)
                check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
                check_type(argname="argument shard_db_name", value=shard_db_name, expected_type=type_hints["shard_db_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "db_instance_id": db_instance_id,
                "shard_db_name": shard_db_name,
            }

        @builtins.property
        def db_instance_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
            '''
            result = self._values.get("db_instance_id")
            assert result is not None, "Required property 'db_instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def shard_db_name(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
            '''
            result = self._values.get("shard_db_name")
            assert result is not None, "Required property 'shard_db_name' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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
        drds_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_inst_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inst_db_name: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDrdsDB.InstDbNameProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rds_instance: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89cc10ab05510d1e3bf21cdf264d4d15096a660f6a076f022c732d03019a1415)
            check_type(argname="argument drds_instance_id", value=drds_instance_id, expected_type=type_hints["drds_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
            check_type(argname="argument db_instance_is_creating", value=db_instance_is_creating, expected_type=type_hints["db_instance_is_creating"])
            check_type(argname="argument db_inst_type", value=db_inst_type, expected_type=type_hints["db_inst_type"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument encode", value=encode, expected_type=type_hints["encode"])
            check_type(argname="argument inst_db_name", value=inst_db_name, expected_type=type_hints["inst_db_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument rds_instance", value=rds_instance, expected_type=type_hints["rds_instance"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def drds_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: drdsInstanceId: DRDS instance ID
        '''
        result = self._values.get("drds_instance_id")
        assert result is not None, "Required property 'drds_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_is_creating(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceIsCreating: Check whether the RDS instance is being created.
        '''
        result = self._values.get("db_instance_is_creating")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_inst_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstType: The type of the attached storage. Valid values:
        RDS or POLARDB
        '''
        result = self._values.get("db_inst_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: Database Name
        '''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encode: Encoding used by the database
        '''
        result = self._values.get("encode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inst_db_name(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDrdsDB.InstDbNameProperty]]]]:
        '''
        :Property: instDbName:
        '''
        result = self._values.get("inst_db_name")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDrdsDB.InstDbNameProperty]]]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The logon password of the database instance.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rds_instance(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: rdsInstance: This property is required only for vertical partitioning.
        '''
        result = self._values.get("rds_instance")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: Database Sharding method. For more information, see scalability principle. Valid values:
        HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        and table sharding.
        VERTICAL: indicates VERTICAL partitioning.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDrdsDBProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDrdsInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsInstance",
):
    '''A ROS template type:  ``ALIYUN::DRDS::DrdsInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDrdsInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DRDS::DrdsInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa021bed6de091d19f19817606db409a360c0af393450d7264af0278b6e68afd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8c236314dbdb7898c0e83458506a877444e8a2d96940a654571220e671ebbd84)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDrdsInstanceId")
    def attr_drds_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DrdsInstanceId: instance id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDrdsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetEndpoint: Public endpoint
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetEndpoint: VPC endpoint
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: order number
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Description of the DRDS instance, 2-128 characters
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fa8e2a64c16b6aaa8372b54e936ecbcc40c9674d1aa5a8b61f306d7a78ae645)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c84c26edf72e16ddc3ffc83e4c67aca98b69e2d32f185c24d921aeeff100e94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceSeries")
    def instance_series(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceSeries"))

    @instance_series.setter
    def instance_series(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__120888baca2e6d4540a3b46f9864ee6b2d0c2ec86fdc451726ff12657483c954)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceSeries", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61d12aa3996f95f3d03544027cb9e4a7a1aa54088e133f3c9a783a95d735bae3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="specification")
    def specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "specification"))

    @specification.setter
    def specification(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258ea16f994f786f7078d416f908e71a1f8ad95574dc3647b6c68bad118f2423)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "specification", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20ecff970c3ac5e0ddb59e3e412eded7389673ff6d26c0886cff7cd1ca43f641)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62ef34249d1c07cc6d87f692afa4517300f51f3cfc51143fdeb1f8a28a1c1e01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0f105319998a05ef6eabe8455a449f9e399f52f2ab46f2911f1869422e8fdd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="isAutoRenew")
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isAutoRenew"))

    @is_auto_renew.setter
    def is_auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d53b1cac8bafe6060a88de7c82815132269ee2315cca23174936c6c974e218b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isAutoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="mySqlVersion")
    def my_sql_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mySqlVersion"))

    @my_sql_version.setter
    def my_sql_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b00280b41ce5ef0142a337577db646eccd48a78f1bce22300e759509c90f887)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mySqlVersion", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f33a07b07977f0aac980e32a7d1b01f3d2ceeb29f8ccba407bc7c0722fb9464)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f954121d62e7f3c3c39ccb84e08403b748562057f807c02f00778e787628770b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0844666562b79ab0c36ea53f6e030befbebd3f4e0fa41817bc44852254e0dea8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a5473719a595a43cbba555792b6ff856650214639dea6347a82f74836e53a7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vswitchId")
    def vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vswitchId"))

    @vswitch_id.setter
    def vswitch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fed7357ba5a91d83f5e43b6e612b056d37b686e5c4180eb23998b2761e640dd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4eed80b19db77e71738a3e00bcf1a46e6d6b5678b6b62e1f2bac148961aacabc)
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
    jsii_type="@alicloud/ros-cdk-drds.RosDrdsInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "instance_series": "instanceSeries",
        "pay_type": "payType",
        "specification": "specification",
        "type": "type",
        "zone_id": "zoneId",
        "duration": "duration",
        "is_auto_renew": "isAutoRenew",
        "my_sql_version": "mySqlVersion",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
    },
)
class RosDrdsInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_series: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        my_sql_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDrdsInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DRDS::DrdsInstance``.

        :param description: 
        :param instance_series: 
        :param pay_type: 
        :param specification: 
        :param type: 
        :param zone_id: 
        :param duration: 
        :param is_auto_renew: 
        :param my_sql_version: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_id: 
        :param vswitch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb3ddb23db37f1b66dbc0e4df8d9f3fcc910882743fe559c2f3abef6f9f91af7)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument instance_series", value=instance_series, expected_type=type_hints["instance_series"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument specification", value=specification, expected_type=type_hints["specification"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument is_auto_renew", value=is_auto_renew, expected_type=type_hints["is_auto_renew"])
            check_type(argname="argument my_sql_version", value=my_sql_version, expected_type=type_hints["my_sql_version"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vswitch_id", value=vswitch_id, expected_type=type_hints["vswitch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "instance_series": instance_series,
            "pay_type": pay_type,
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
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vswitch_id is not None:
            self._values["vswitch_id"] = vswitch_id

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Description of the DRDS instance, 2-128 characters
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_series(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        '''
        result = self._values.get("instance_series")
        assert result is not None, "Required property 'instance_series' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: payType: For the type of payment, see "Payment Type Parameter Table"
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        '''
        result = self._values.get("specification")
        assert result is not None, "Required property 'specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("is_auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def my_sql_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
        '''
        result = self._values.get("my_sql_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
        '''
        result = self._values.get("pricing_cycle")
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
    def tags(self) -> typing.Optional[typing.List[RosDrdsInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDrdsInstance.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        '''
        result = self._values.get("vswitch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__527bb6819fc0ee9ea9925136dca36f57d378924d95cf30c1c1ee9ca2ef9f2fef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DrdsDBProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__012fe0cf23b63933c7e8fe44e97870c6389f2325edb4ca5e36d05e8b76612f45(
    *,
    drds_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_inst_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inst_db_name: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDrdsDB.InstDbNameProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_instance: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41dc86bc5f03746f79080e695791dbb8a40e91c0476f5c65150bac894670e65a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DrdsInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0abf82668694b03c534af089ab6ad9aa6e647caabd7a6fc934eb8611e3a1d4fb(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_series: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    my_sql_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDrdsInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d34241ea07f25af86c1ad17f941941593008c114c8380e6ff2a0401a0d3de17(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDrdsDBProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__509fce85c692cff6460710749cc91696ccf85c2e0292a1087e88f738f90470b6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37f17b77a0e1221557e97aa4e991d1e2740baaed74d2da2f2d7fa034326f8b25(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5cb579c22575fbc828baad838fb6bc5113f90273b9bc5ed2982d9577085ba93(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2da5bb4ad49ed00e8ab03cf87b663de2dee73bb875e6a265b4b4a0929cfb8e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__655ffcbcde9d0f8aa5cf0b9e3224a2506ef9b93dd80334b79bb4b9b0bc50c13f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cc535cc26ef7c63324509cfe02d1bcbfe926e97fb841316105584de83f14601(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b57bd91e2ef178460353c239194a416afb9008d998a52e13425cf3dd3772358(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b38a9b80996a18f49123673b76547bef18db0c80a05c52207e57b93e173ef0b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bd2148da128a36a54119bea942b211922c2c714cee1ebc8bddc34191bea0dd3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDrdsDB.InstDbNameProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d742519314ba77b711b003f3080d8cb1cf4f82b10c8770ee8197d53e438a363(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cdd312394d9da5b15de5465c414ff70fc7cc0c8430dd2f2b269714d1ed11939(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d68ef5ab7151445f2b91559ad7933a3b8b4a89595982f8a861a1de59b8d58ddc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec1ad7edb51a9fbd088953d09033c26dc808fd2c1d44e44ed966577d501b875a(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    shard_db_name: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89cc10ab05510d1e3bf21cdf264d4d15096a660f6a076f022c732d03019a1415(
    *,
    drds_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_is_creating: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_inst_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inst_db_name: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDrdsDB.InstDbNameProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_instance: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa021bed6de091d19f19817606db409a360c0af393450d7264af0278b6e68afd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDrdsInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c236314dbdb7898c0e83458506a877444e8a2d96940a654571220e671ebbd84(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fa8e2a64c16b6aaa8372b54e936ecbcc40c9674d1aa5a8b61f306d7a78ae645(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c84c26edf72e16ddc3ffc83e4c67aca98b69e2d32f185c24d921aeeff100e94(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__120888baca2e6d4540a3b46f9864ee6b2d0c2ec86fdc451726ff12657483c954(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61d12aa3996f95f3d03544027cb9e4a7a1aa54088e133f3c9a783a95d735bae3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258ea16f994f786f7078d416f908e71a1f8ad95574dc3647b6c68bad118f2423(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20ecff970c3ac5e0ddb59e3e412eded7389673ff6d26c0886cff7cd1ca43f641(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62ef34249d1c07cc6d87f692afa4517300f51f3cfc51143fdeb1f8a28a1c1e01(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0f105319998a05ef6eabe8455a449f9e399f52f2ab46f2911f1869422e8fdd9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d53b1cac8bafe6060a88de7c82815132269ee2315cca23174936c6c974e218b1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b00280b41ce5ef0142a337577db646eccd48a78f1bce22300e759509c90f887(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f33a07b07977f0aac980e32a7d1b01f3d2ceeb29f8ccba407bc7c0722fb9464(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f954121d62e7f3c3c39ccb84e08403b748562057f807c02f00778e787628770b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0844666562b79ab0c36ea53f6e030befbebd3f4e0fa41817bc44852254e0dea8(
    value: typing.Optional[typing.List[RosDrdsInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a5473719a595a43cbba555792b6ff856650214639dea6347a82f74836e53a7b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fed7357ba5a91d83f5e43b6e612b056d37b686e5c4180eb23998b2761e640dd3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4eed80b19db77e71738a3e00bcf1a46e6d6b5678b6b62e1f2bac148961aacabc(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb3ddb23db37f1b66dbc0e4df8d9f3fcc910882743fe559c2f3abef6f9f91af7(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_series: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    my_sql_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDrdsInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
