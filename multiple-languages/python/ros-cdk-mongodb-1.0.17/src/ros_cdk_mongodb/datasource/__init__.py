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


class InstanceClasses(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstanceClasses",
):
    '''A ROS resource type:  ``DATASOURCE::MONGODB::InstanceClasses``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstanceClassesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::MONGODB::InstanceClasses``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88e235f27aba92adf65ad6c60c4eb2e230aaf419396fcd0fbfbe5ab0f07f0886)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClasses: The list of The instance classes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceClassIds: The list of The instance class Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClassIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstanceClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_type": "dbType",
        "instance_charge_type": "instanceChargeType",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class InstanceClassesProps:
    def __init__(
        self,
        *,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::MONGODB::InstanceClasses``.

        :param db_type: Property dbType: The database engine type of the instance. normal: replica set instance sharding: sharded cluster instance
        :param instance_charge_type: Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values: PrePaid: subscription PostPaid: pay-as-you-go
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param zone_id: Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36c11cccdcc33f1daaf355250c1a553c95498650b8997bd9020ad236e28642bf)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_type is not None:
            self._values["db_type"] = db_type
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbType: The database engine type of the instance.

        normal: replica set instance
        sharding: sharded cluster instance
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the instance.

        Default value: PostPaid. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the instance.

        You can call the DescribeRegions operation to query the most recent zone list.
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


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.Instances",
):
    '''A ROS resource type:  ``DATASOURCE::MONGODB::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::MONGODB::Instances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5477ebd8528ae568dd5b31384ff11e46e6fe6833c0c171a3ad2d9bc7b63b4b49)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of The instance Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Instances: The list of The instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "connection_domain": "connectionDomain",
        "db_instance_class": "dbInstanceClass",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "engine_version": "engineVersion",
        "expired": "expired",
        "network_type": "networkType",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstancesProps:
    def __init__(
        self,
        *,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstances.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::MONGODB::Instances``.

        :param charge_type: Property chargeType: The billing method of the instance. Valid values: PostPaid: pay-as-you-go PrePaid: subscription
        :param connection_domain: Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        :param db_instance_class: Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
        :param db_instance_description: Property dbInstanceDescription: The description of the instance.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_instance_status: Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
        :param db_instance_type: Property dbInstanceType: The category of the instance. Default value: replicate. Valid values: sharding: sharded cluster instance replicate: replica set or standalone instance Note To query the list of sharded cluster instances, you must set the parameter to sharding. This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        :param engine_version: Property engineVersion: The database engine version of the instance. Valid values: 5.0 4.4 4.2 4.0 3.4
        :param expired: Property expired: Specifies whether the instance expires. Valid values: true: The instance expires. false: The instance does not expire.
        :param network_type: Property networkType: The network type of the instance. Valid values: Classic Vpc
        :param replication_factor: Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of instance.
        :param vpc_id: Property vpcId: The VPC ID of the instance.
        :param v_switch_id: Property vSwitchId: The vSwitch ID of the instance.
        :param zone_id: Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c2898a46ebde1869b9dff511f4ec12313ebb0e2150f0d52e88d6b1a1d61ab8b)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument connection_domain", value=connection_domain, expected_type=type_hints["connection_domain"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if connection_domain is not None:
            self._values["connection_domain"] = connection_domain
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if network_type is not None:
            self._values["network_type"] = network_type
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the instance.

        Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionDomain: The endpoint of the node.

        You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        '''
        result = self._values.get("connection_domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceClass: The instance type.

        For more information about valid values, see Instance types.
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStatus: The state of the instance.

        For more information about valid values, see Instance states.
        '''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceType: The category of the instance.

        Default value: replicate. Valid values:
        sharding: sharded cluster instance
        replicate: replica set or standalone instance
        Note
        To query the list of sharded cluster instances, you must set the parameter to sharding.
        This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        '''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The database engine version of the instance.

        Valid values:
        5.0
        4.4
        4.2
        4.0
        3.4
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property expired: Specifies whether the instance expires.

        Valid values:
        true: The instance expires.
        false: The instance does not expire.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The network type of the instance.

        Valid values:
        Classic
        Vpc
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property replicationFactor: The number of nodes in a replica set instance.

        Valid values: 3, 5, and 7.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''Property tags: Tags of instance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC ID of the instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch ID of the instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the instance.

        You can call the DescribeRegions operation to query the most recent zone list.
        '''
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


class RosInstanceClasses(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstanceClasses",
):
    '''A ROS template type:  ``DATASOURCE::MONGODB::InstanceClasses``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceClassesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::MONGODB::InstanceClasses``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__557943b2ae71a7a483e141328e4d202c46150fca1d56213603b303993859fcb7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dc3057d047ef37e35473c86cc385ef8951cfb49f984d18d9222a5e4e3fa8eb8b)
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
        :Attribute: InstanceClasses: The list of The instance classes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClassIds: The list of The instance class Ids.
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
            type_hints = typing.get_type_hints(_typecheckingstub__6fa2673123eda7a278146c5de8b31a74336c7223db8372e063abd3843367012c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbType: The database engine type of the instance.
        normal: replica set instance
        sharding: sharded cluster instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4c032538e17c41c60b8eaf51b14c8b2aba3a2253bda1112dcf3a85bd726702b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70fc6967a76ed47e465d6f3df138669158fdf511416c7c4b475df8e8954e622a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77f2ecf1f8aa1c3b3509c90f2cb9a4c0a14ebae9586b26a700049fe311fa1ef5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b82a510470f161f848b573355cac87b195f91409d3c79df7afc92623a2569ecc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstanceClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_type": "dbType",
        "instance_charge_type": "instanceChargeType",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class RosInstanceClassesProps:
    def __init__(
        self,
        *,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::MONGODB::InstanceClasses``.

        :param db_type: 
        :param instance_charge_type: 
        :param resource_group_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfa148beffb52e6776358468d867529fdcac2b6dc3ec8fcc0b956cebfe6db1ab)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_type is not None:
            self._values["db_type"] = db_type
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbType: The database engine type of the instance.
        normal: replica set instance
        sharding: sharded cluster instance
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
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


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstances",
):
    '''A ROS template type:  ``DATASOURCE::MONGODB::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::MONGODB::Instances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9fc864bcdbfbcdb6827b6010ca9898f7dbda381c98178b1d93595fe28c5db79)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f708a9517ee0234569db8aae269ff7c43308a0a2b6f7418ba7987533be9e4dfb)
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
        :Attribute: InstanceIds: The list of The instance Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of The instances.
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
            type_hints = typing.get_type_hints(_typecheckingstub__95f7bc40e21dff61623ed062f689f5d53444af6aeeae6010cca7c75ae70442c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf6706aebf305dff377332de3039428b8ce3c8d8a3579746f55146cd92c0e6c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="connectionDomain")
    def connection_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionDomain"))

    @connection_domain.setter
    def connection_domain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab5c998ce3892bbf3811786a86b18e6b4be985084085bc256a876f333569b74b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionDomain", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type. For more information about valid values, see Instance types.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d34bd03c55e08c04bd8ca93272dc22b07f7b2b113d5e42098037c7c6a5ec9551)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5693df14645b90d9c23968cda06867f69b95805cffe9863083661443f1649b33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af2a08ba749f2350024218020162dbe4a13451cbfde8e08742b306e6605f6b98)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStatus")
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStatus"))

    @db_instance_status.setter
    def db_instance_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__815a09fd0646607cd440a249c1a39fd80a8f2c3737763cc9738c9d46817b1130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStatus", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceType")
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceType: The category of the instance. Default value: replicate. Valid values:
        sharding: sharded cluster instance
        replicate: replica set or standalone instance
        Note
        To query the list of sharded cluster instances, you must set the parameter to sharding.
        This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceType"))

    @db_instance_type.setter
    def db_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__267ed30a0cdaae8bd479099d57c64efc440fe54c2ef2b2d510f8bd3b6460e212)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        engineVersion: The database engine version of the instance. Valid values:
        5.0
        4.4
        4.2
        4.0
        3.4
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fbe91998afb3186e9b5d5078648e6fc216ba392a6f455ce3238e869e1434fe2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="expired")
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Specifies whether the instance expires. Valid values:
        true: The instance expires.
        false: The instance does not expire.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "expired"))

    @expired.setter
    def expired(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbd415ece4b2c138be0d70683527017ad885c715243b83423c24d71c6c258387)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expired", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the instance. Valid values:
        Classic
        Vpc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7ef4644c84d4898d60a96568e9445dad322683bc10c63d01818fd8caf574fe6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "replicationFactor"))

    @replication_factor.setter
    def replication_factor(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4495a1bcecd5523b3b0d9834d81e2216151e2e951f2864d5f717d9c36ec86e93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationFactor", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1bff38fd1d626cd78cd2ad5af05695d2f28f839998a97bcc45cc65ea2f7f97b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''
        :Property: tags: Tags of instance.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstances.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__786995b97ead900814e3e1458f1326a0935a65b3201648d2a1f59053f5f37c9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__013993a805f21a5d31eb4d4e1012af241d3f1330fd44dcf6ae1f43ee0b82b5e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39d8c2f0c03224c0f01eb7564e32a97c84711f0e52e1908e44471e2a1ff5c009)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fdf1c330b2d60b42f6696bbffa5d1ed72abc64f26a6a8794d1191627f9402e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstances.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__01917631b462fc00e43e68d1be4e653b1af610e837184e868503c5ebaf7aa531)
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
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "connection_domain": "connectionDomain",
        "db_instance_class": "dbInstanceClass",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "engine_version": "engineVersion",
        "expired": "expired",
        "network_type": "networkType",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::MONGODB::Instances``.

        :param charge_type: 
        :param connection_domain: 
        :param db_instance_class: 
        :param db_instance_description: 
        :param db_instance_id: 
        :param db_instance_status: 
        :param db_instance_type: 
        :param engine_version: 
        :param expired: 
        :param network_type: 
        :param replication_factor: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feb8946901e2547979a3e7f615ac9988a0e0e6654911987a09d434f8a4b18574)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument connection_domain", value=connection_domain, expected_type=type_hints["connection_domain"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if connection_domain is not None:
            self._values["connection_domain"] = connection_domain
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if network_type is not None:
            self._values["network_type"] = network_type
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        '''
        result = self._values.get("connection_domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type. For more information about valid values, see Instance types.
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
        '''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceType: The category of the instance. Default value: replicate. Valid values:
        sharding: sharded cluster instance
        replicate: replica set or standalone instance
        Note
        To query the list of sharded cluster instances, you must set the parameter to sharding.
        This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        '''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        engineVersion: The database engine version of the instance. Valid values:
        5.0
        4.4
        4.2
        4.0
        3.4
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Specifies whether the instance expires. Valid values:
        true: The instance expires.
        false: The instance does not expire.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the instance. Valid values:
        Classic
        Vpc
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstances.TagsProperty]]:
        '''
        :Property: tags: Tags of instance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstances.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC ID of the instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
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
    "InstanceClasses",
    "InstanceClassesProps",
    "Instances",
    "InstancesProps",
    "RosInstanceClasses",
    "RosInstanceClassesProps",
    "RosInstances",
    "RosInstancesProps",
]

publication.publish()

def _typecheckingstub__88e235f27aba92adf65ad6c60c4eb2e230aaf419396fcd0fbfbe5ab0f07f0886(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstanceClassesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36c11cccdcc33f1daaf355250c1a553c95498650b8997bd9020ad236e28642bf(
    *,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5477ebd8528ae568dd5b31384ff11e46e6fe6833c0c171a3ad2d9bc7b63b4b49(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c2898a46ebde1869b9dff511f4ec12313ebb0e2150f0d52e88d6b1a1d61ab8b(
    *,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__557943b2ae71a7a483e141328e4d202c46150fca1d56213603b303993859fcb7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceClassesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc3057d047ef37e35473c86cc385ef8951cfb49f984d18d9222a5e4e3fa8eb8b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fa2673123eda7a278146c5de8b31a74336c7223db8372e063abd3843367012c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4c032538e17c41c60b8eaf51b14c8b2aba3a2253bda1112dcf3a85bd726702b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70fc6967a76ed47e465d6f3df138669158fdf511416c7c4b475df8e8954e622a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77f2ecf1f8aa1c3b3509c90f2cb9a4c0a14ebae9586b26a700049fe311fa1ef5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b82a510470f161f848b573355cac87b195f91409d3c79df7afc92623a2569ecc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfa148beffb52e6776358468d867529fdcac2b6dc3ec8fcc0b956cebfe6db1ab(
    *,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9fc864bcdbfbcdb6827b6010ca9898f7dbda381c98178b1d93595fe28c5db79(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f708a9517ee0234569db8aae269ff7c43308a0a2b6f7418ba7987533be9e4dfb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95f7bc40e21dff61623ed062f689f5d53444af6aeeae6010cca7c75ae70442c0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf6706aebf305dff377332de3039428b8ce3c8d8a3579746f55146cd92c0e6c6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab5c998ce3892bbf3811786a86b18e6b4be985084085bc256a876f333569b74b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d34bd03c55e08c04bd8ca93272dc22b07f7b2b113d5e42098037c7c6a5ec9551(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5693df14645b90d9c23968cda06867f69b95805cffe9863083661443f1649b33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af2a08ba749f2350024218020162dbe4a13451cbfde8e08742b306e6605f6b98(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__815a09fd0646607cd440a249c1a39fd80a8f2c3737763cc9738c9d46817b1130(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__267ed30a0cdaae8bd479099d57c64efc440fe54c2ef2b2d510f8bd3b6460e212(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fbe91998afb3186e9b5d5078648e6fc216ba392a6f455ce3238e869e1434fe2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbd415ece4b2c138be0d70683527017ad885c715243b83423c24d71c6c258387(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7ef4644c84d4898d60a96568e9445dad322683bc10c63d01818fd8caf574fe6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4495a1bcecd5523b3b0d9834d81e2216151e2e951f2864d5f717d9c36ec86e93(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bff38fd1d626cd78cd2ad5af05695d2f28f839998a97bcc45cc65ea2f7f97b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__786995b97ead900814e3e1458f1326a0935a65b3201648d2a1f59053f5f37c9e(
    value: typing.Optional[typing.List[RosInstances.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__013993a805f21a5d31eb4d4e1012af241d3f1330fd44dcf6ae1f43ee0b82b5e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d8c2f0c03224c0f01eb7564e32a97c84711f0e52e1908e44471e2a1ff5c009(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fdf1c330b2d60b42f6696bbffa5d1ed72abc64f26a6a8794d1191627f9402e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01917631b462fc00e43e68d1be4e653b1af610e837184e868503c5ebaf7aa531(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb8946901e2547979a3e7f615ac9988a0e0e6654911987a09d434f8a4b18574(
    *,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
