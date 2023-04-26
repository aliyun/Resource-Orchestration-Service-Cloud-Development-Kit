'''
## Aliyun ROS DTS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DTS from '@alicloud/ros-cdk-dts';
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


class ConsumerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.ConsumerGroup",
):
    '''A ROS resource type:  ``ALIYUN::DTS::ConsumerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ConsumerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::ConsumerGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f463f651965585cbf8d348d1b3e433fc1d513184fb35b21149686cbd534b179)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConsumerGroupID: Consumer group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupName")
    def attr_consumer_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConsumerGroupName: Consumer group name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionInstanceId")
    def attr_subscription_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscriptionInstanceId: Subscription instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.ConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_group_name": "consumerGroupName",
        "consumer_group_password": "consumerGroupPassword",
        "consumer_group_user_name": "consumerGroupUserName",
        "subscription_instance_id": "subscriptionInstanceId",
    },
)
class ConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::ConsumerGroup``.

        :param consumer_group_name: Property consumerGroupName: Consumer group name.
        :param consumer_group_password: Property consumerGroupPassword: Password of consumer group.
        :param consumer_group_user_name: Property consumerGroupUserName: User name of consumer group.
        :param subscription_instance_id: Property subscriptionInstanceId: Subscription instance ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__922d6c12e6c66043ca355053c590e476d7b3996c7fc99f5e47eb79016b51fc19)
            check_type(argname="argument consumer_group_name", value=consumer_group_name, expected_type=type_hints["consumer_group_name"])
            check_type(argname="argument consumer_group_password", value=consumer_group_password, expected_type=type_hints["consumer_group_password"])
            check_type(argname="argument consumer_group_user_name", value=consumer_group_user_name, expected_type=type_hints["consumer_group_user_name"])
            check_type(argname="argument subscription_instance_id", value=subscription_instance_id, expected_type=type_hints["subscription_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_group_name": consumer_group_name,
            "consumer_group_password": consumer_group_password,
            "consumer_group_user_name": consumer_group_user_name,
            "subscription_instance_id": subscription_instance_id,
        }

    @builtins.property
    def consumer_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupName: Consumer group name.'''
        result = self._values.get("consumer_group_name")
        assert result is not None, "Required property 'consumer_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupPassword: Password of consumer group.'''
        result = self._values.get("consumer_group_password")
        assert result is not None, "Required property 'consumer_group_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupUserName: User name of consumer group.'''
        result = self._values.get("consumer_group_user_name")
        assert result is not None, "Required property 'consumer_group_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property subscriptionInstanceId: Subscription instance ID.'''
        result = self._values.get("subscription_instance_id")
        assert result is not None, "Required property 'subscription_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MigrationJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.MigrationJob",
):
    '''A ROS resource type:  ``ALIYUN::DTS::MigrationJob``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MigrationJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::MigrationJob``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c0d3cfa27fbded39d43275dd3cbdff2c814a6f2ab888b3503c5baa36a5c7bbc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMigrationJobId")
    def attr_migration_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MigrationJobId: Migration tasks task ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMigrationJobId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.MigrationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "migration_job_class": "migrationJobClass",
        "destination_endpoint": "destinationEndpoint",
        "migration_job_name": "migrationJobName",
        "migration_mode": "migrationMode",
        "migration_object": "migrationObject",
        "source_endpoint": "sourceEndpoint",
    },
)
class MigrationJobProps:
    def __init__(
        self,
        *,
        migration_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.DestinationEndpointProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        migration_job_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        migration_mode: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.MigrationModeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        migration_object: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.MigrationObjectProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        source_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.SourceEndpointProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::MigrationJob``.

        :param migration_job_class: Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on. Various specifications of the reference data migration test performance specifications
        :param destination_endpoint: Property destinationEndpoint: Migration target configuration.
        :param migration_job_name: Property migrationJobName: Migrating job name.
        :param migration_mode: Property migrationMode: Migration mode.
        :param migration_object: Property migrationObject: Objects that need to be migrated.
        :param source_endpoint: Property sourceEndpoint: Migration source configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9836e348721a481d1298505da5ad1c5323fba838513d712b059c0b373a949229)
            check_type(argname="argument migration_job_class", value=migration_job_class, expected_type=type_hints["migration_job_class"])
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument migration_job_name", value=migration_job_name, expected_type=type_hints["migration_job_name"])
            check_type(argname="argument migration_mode", value=migration_mode, expected_type=type_hints["migration_mode"])
            check_type(argname="argument migration_object", value=migration_object, expected_type=type_hints["migration_object"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "migration_job_class": migration_job_class,
        }
        if destination_endpoint is not None:
            self._values["destination_endpoint"] = destination_endpoint
        if migration_job_name is not None:
            self._values["migration_job_name"] = migration_job_name
        if migration_mode is not None:
            self._values["migration_mode"] = migration_mode
        if migration_object is not None:
            self._values["migration_object"] = migration_object
        if source_endpoint is not None:
            self._values["source_endpoint"] = source_endpoint

    @builtins.property
    def migration_job_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.

        Various specifications of the reference data migration test performance specifications
        '''
        result = self._values.get("migration_job_class")
        assert result is not None, "Required property 'migration_job_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]]:
        '''Property destinationEndpoint: Migration target configuration.'''
        result = self._values.get("destination_endpoint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]], result)

    @builtins.property
    def migration_job_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property migrationJobName: Migrating job name.'''
        result = self._values.get("migration_job_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def migration_mode(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationModeProperty"]]:
        '''Property migrationMode: Migration mode.'''
        result = self._values.get("migration_mode")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationModeProperty"]], result)

    @builtins.property
    def migration_object(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]]:
        '''Property migrationObject: Objects that need to be migrated.'''
        result = self._values.get("migration_object")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.SourceEndpointProperty"]]:
        '''Property sourceEndpoint: Migration source configuration.'''
        result = self._values.get("source_endpoint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.SourceEndpointProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MigrationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConsumerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosConsumerGroup",
):
    '''A ROS template type:  ``ALIYUN::DTS::ConsumerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConsumerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::ConsumerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6649a4d196a85f7f9f55f5441b2cc8b417f0e2d05044dc03949e8ea13be8af62)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bd6b304b9eedc282f36085b98cea1a4bb93d075f6d45ce4cef36594ccd2b5592)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerGroupID: Consumer group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupName")
    def attr_consumer_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerGroupName: Consumer group name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionInstanceId")
    def attr_subscription_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscriptionInstanceId: Subscription instance ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="consumerGroupName")
    def consumer_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupName: Consumer group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupName"))

    @consumer_group_name.setter
    def consumer_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a893db5aaa0f7d0e24ecd5945f8a56b765840bc783b7a11b7032d532567d7c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="consumerGroupPassword")
    def consumer_group_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupPassword: Password of consumer group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupPassword"))

    @consumer_group_password.setter
    def consumer_group_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a645087e2f6c7248fe4f1e034170ff998122cec38d3390977e99c3dd0eed1f97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupPassword", value)

    @builtins.property
    @jsii.member(jsii_name="consumerGroupUserName")
    def consumer_group_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupUserName: User name of consumer group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupUserName"))

    @consumer_group_user_name.setter
    def consumer_group_user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8605ab8e16a3ed258c13d2a5d1df14304cb46b402fa2239f376775e2591be49c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupUserName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__043124c9553aa7e00212ebbdc7138247cf2d638fbcba794855ec1a7c73f8569e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionInstanceId")
    def subscription_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionInstanceId: Subscription instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "subscriptionInstanceId"))

    @subscription_instance_id.setter
    def subscription_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db9a3c0bf5403ab71aba277e309802346987631c2deebf7cb857befd0f02336e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_group_name": "consumerGroupName",
        "consumer_group_password": "consumerGroupPassword",
        "consumer_group_user_name": "consumerGroupUserName",
        "subscription_instance_id": "subscriptionInstanceId",
    },
)
class RosConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::ConsumerGroup``.

        :param consumer_group_name: 
        :param consumer_group_password: 
        :param consumer_group_user_name: 
        :param subscription_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3042d13d44d117264f0a9e6aef2c904becef6569ab321865366786474d6bdbff)
            check_type(argname="argument consumer_group_name", value=consumer_group_name, expected_type=type_hints["consumer_group_name"])
            check_type(argname="argument consumer_group_password", value=consumer_group_password, expected_type=type_hints["consumer_group_password"])
            check_type(argname="argument consumer_group_user_name", value=consumer_group_user_name, expected_type=type_hints["consumer_group_user_name"])
            check_type(argname="argument subscription_instance_id", value=subscription_instance_id, expected_type=type_hints["subscription_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_group_name": consumer_group_name,
            "consumer_group_password": consumer_group_password,
            "consumer_group_user_name": consumer_group_user_name,
            "subscription_instance_id": subscription_instance_id,
        }

    @builtins.property
    def consumer_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupName: Consumer group name.
        '''
        result = self._values.get("consumer_group_name")
        assert result is not None, "Required property 'consumer_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupPassword: Password of consumer group.
        '''
        result = self._values.get("consumer_group_password")
        assert result is not None, "Required property 'consumer_group_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupUserName: User name of consumer group.
        '''
        result = self._values.get("consumer_group_user_name")
        assert result is not None, "Required property 'consumer_group_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionInstanceId: Subscription instance ID.
        '''
        result = self._values.get("subscription_instance_id")
        assert result is not None, "Required property 'subscription_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMigrationJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob",
):
    '''A ROS template type:  ``ALIYUN::DTS::MigrationJob``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMigrationJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::MigrationJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c6b8322661f45333eb0e66117bda95da2e4c7b14ca85e6c80656efc91efd625)
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
            type_hints = typing.get_type_hints(_typecheckingstub__17f6e030a86257212a6551618bc31deb3823d56070d7d853563f3846b23e6125)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMigrationJobId")
    def attr_migration_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MigrationJobId: Migration tasks task ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMigrationJobId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__05d3bd0ab95a4d97f80878f8b224e8b2630255f19425dfaba25807aae2a6a545)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="migrationJobClass")
    def migration_job_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        migrationJobClass: Migrating instance specifications, which can be:
        small, medium, large and so on.
        Various specifications of the reference data migration test performance specifications
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "migrationJobClass"))

    @migration_job_class.setter
    def migration_job_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e496264d68ed1a49e9384e6875944144e4e5740ddd4fe9109f0cfb05fc25c722)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "migrationJobClass", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpoint")
    def destination_endpoint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]]:
        '''
        :Property: destinationEndpoint: Migration target configuration
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]], jsii.get(self, "destinationEndpoint"))

    @destination_endpoint.setter
    def destination_endpoint(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be6e8c9a9db5e5bf6a7c2831fd249a25eb0e376a692afc99cc6009331dee7d88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="migrationJobName")
    def migration_job_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: migrationJobName: Migrating job name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "migrationJobName"))

    @migration_job_name.setter
    def migration_job_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2c35d9849a02374e466696f2beba45caa6bf560eed704e1b3fecf43b12621fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "migrationJobName", value)

    @builtins.property
    @jsii.member(jsii_name="migrationMode")
    def migration_mode(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationModeProperty"]]:
        '''
        :Property: migrationMode: Migration mode
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationModeProperty"]], jsii.get(self, "migrationMode"))

    @migration_mode.setter
    def migration_mode(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationModeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37b796abcb2b3d88ab0bdd0d6ceaf8dcaa34292cdab0cb8fea5ad4eed600f902)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "migrationMode", value)

    @builtins.property
    @jsii.member(jsii_name="migrationObject")
    def migration_object(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]]:
        '''
        :Property: migrationObject: Objects that need to be migrated
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]], jsii.get(self, "migrationObject"))

    @migration_object.setter
    def migration_object(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bae4e44ffa7082283181c1522b20551d5b0f9e3ebd29cbb066239ff9b942b2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "migrationObject", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.SourceEndpointProperty"]]:
        '''
        :Property: sourceEndpoint: Migration source configuration
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.SourceEndpointProperty"]], jsii.get(self, "sourceEndpoint"))

    @source_endpoint.setter
    def source_endpoint(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.SourceEndpointProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd49cbd8b66aacdda142514f72634a00f5929b26d7f2f71f5c99baf438fb8a04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpoint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName"},
    )
    class ColumnExcludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param column_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__83b8730a937c7d6ebfd8ec2a85f7c9e1f2548469d6812453ac2d3cf6ba7944ca)
                check_type(argname="argument column_name", value=column_name, expected_type=type_hints["column_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name

        @builtins.property
        def column_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: columnName: Column names are not migrated in the table to be migrated
            '''
            result = self._values.get("column_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName", "new_column_name": "newColumnName"},
    )
    class ColumnIncludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param column_name: 
            :param new_column_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dee08b77671384a77e60961d2ffad066f56f253b3e96b183f5fddde72b6413cd)
                check_type(argname="argument column_name", value=column_name, expected_type=type_hints["column_name"])
                check_type(argname="argument new_column_name", value=new_column_name, expected_type=type_hints["new_column_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name
            if new_column_name is not None:
                self._values["new_column_name"] = new_column_name

        @builtins.property
        def column_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: columnName: The column name to be migrated in the table to be migrated
            '''
            result = self._values.get("column_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_column_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newColumnName: The name of the column to be migrated to be mapped in the target instance
            '''
            result = self._values.get("new_column_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "password": "password",
            "region": "region",
            "user_name": "userName",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "port": "port",
            "role": "role",
        },
    )
    class DestinationEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param password: 
            :param region: 
            :param user_name: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param port: 
            :param role: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b6771a46fa8e7665923a069b725910f4769ec6586610fa7fc21bf3549c9b595e)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
                "password": password,
                "region": region,
                "user_name": user_name,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The instance type of the target instance, including:
            RDS: Alibaba Cloud RDS instance
            ECS: Self-built database on ECS
            LocalInstance: Self-built database of local IDC
            MongoDB: Alibaba Cloud MongoDB instance
            Redis: Alibaba Cloud Redis instance
            DRDS: Alibaba Cloud DRDS instance
            PetaData: Alibaba Cloud PetaData instance
            OceanBase: Alibaba Cloud OceanBase instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: Target instance password
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            '''
            result = self._values.get("region")
            assert result is not None, "Required property 'region' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: userName: Target instance access account
            '''
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
            MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: Target instance ID
            When the DestinationEndpoint.InstanceType value is RDS, this parameter needs to be passed to the RDS instance ID.
            When the DestinationEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            When the DestinationEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            When the DestinationEndpoint.InstanceType value is Redis, this parameter needs to be passed in the Redis instance ID.
            When the DestinationEndpoint.InstanceType value is DRDS, this parameter needs to be passed to the DRDS instance ID.
            When the DestinationEndpoint.InstanceType value is PetaData, this parameter needs to pass in the PetaData instance ID.
            When the DestinationEndpoint.InstanceType value is OceanBase, this parameter needs to be passed to the OceanBase instance ID.
            When the DestinationEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to the POLARDB for MySQL cluster ID.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: The connection address of the target instance. Required when the source instance is a self-built database.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The listening port of the target instance, which is required when the source instance is a self-built database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "data_intialization": "dataIntialization",
            "data_synchronization": "dataSynchronization",
            "structure_intialization": "structureIntialization",
        },
    )
    class MigrationModeProperty:
        def __init__(
            self,
            *,
            data_intialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_synchronization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            structure_intialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param data_intialization: 
            :param data_synchronization: 
            :param structure_intialization: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__062504d6db9b3de622d347d26e2f9e61ff234dbeb27fd09df7e9e63c7d8867db)
                check_type(argname="argument data_intialization", value=data_intialization, expected_type=type_hints["data_intialization"])
                check_type(argname="argument data_synchronization", value=data_synchronization, expected_type=type_hints["data_synchronization"])
                check_type(argname="argument structure_intialization", value=structure_intialization, expected_type=type_hints["structure_intialization"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if data_intialization is not None:
                self._values["data_intialization"] = data_intialization
            if data_synchronization is not None:
                self._values["data_synchronization"] = data_synchronization
            if structure_intialization is not None:
                self._values["structure_intialization"] = structure_intialization

        @builtins.property
        def data_intialization(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataIntialization: Whether the migration task performs full data migration, and the values include:
            true: indicates that full data migration is required.
            false: indicates no structural migration
            '''
            result = self._values.get("data_intialization")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_synchronization(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataSynchronization: Whether the migration task synchronizes incremental data, including:
            true: Indicates that incremental data synchronization is required.
            false: Indicates that incremental data synchronization is not performed.
            '''
            result = self._values.get("data_synchronization")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def structure_intialization(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            structureIntialization: Whether the migration task performs structural migration, and the values include:
            true: indicates that a structure migration is required.
            false: indicates no structural migration
            '''
            result = self._values.get("structure_intialization")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MigrationModeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty",
        jsii_struct_bases=[],
        name_mapping={
            "db_name": "dbName",
            "new_db_name": "newDbName",
            "new_schema_name": "newSchemaName",
            "schema_name": "schemaName",
            "table_excludes": "tableExcludes",
            "table_includes": "tableIncludes",
        },
    )
    class MigrationObjectProperty:
        def __init__(
            self,
            *,
            db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            table_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.TableExcludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            table_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.TableIncludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param db_name: 
            :param new_db_name: 
            :param new_schema_name: 
            :param schema_name: 
            :param table_excludes: 
            :param table_includes: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1391132f0009617674c9e654179d22694807baa77f8222acfadb5f60087d7f69)
                check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
                check_type(argname="argument new_db_name", value=new_db_name, expected_type=type_hints["new_db_name"])
                check_type(argname="argument new_schema_name", value=new_schema_name, expected_type=type_hints["new_schema_name"])
                check_type(argname="argument schema_name", value=schema_name, expected_type=type_hints["schema_name"])
                check_type(argname="argument table_excludes", value=table_excludes, expected_type=type_hints["table_excludes"])
                check_type(argname="argument table_includes", value=table_includes, expected_type=type_hints["table_includes"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if db_name is not None:
                self._values["db_name"] = db_name
            if new_db_name is not None:
                self._values["new_db_name"] = new_db_name
            if new_schema_name is not None:
                self._values["new_schema_name"] = new_schema_name
            if schema_name is not None:
                self._values["schema_name"] = schema_name
            if table_excludes is not None:
                self._values["table_excludes"] = table_excludes
            if table_includes is not None:
                self._values["table_includes"] = table_includes

        @builtins.property
        def db_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dbName: db name to be migrated
            '''
            result = self._values.get("db_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_db_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newDbName: The name of the db to be migrated in the target instance.
            '''
            result = self._values.get("new_db_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_schema_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newSchemaName: Schema name to be migrated by Schema in the target instance
            '''
            result = self._values.get("new_schema_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def schema_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: schemaName: Schema name to be migrated
            '''
            result = self._values.get("schema_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def table_excludes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.TableExcludesProperty"]]]]:
            '''
            :Property: tableExcludes: Table excludes configuration
            '''
            result = self._values.get("table_excludes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.TableExcludesProperty"]]]], result)

        @builtins.property
        def table_includes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.TableIncludesProperty"]]]]:
            '''
            :Property: tableIncludes: Table configuration
            '''
            result = self._values.get("table_includes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.TableIncludesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MigrationObjectProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "password": "password",
            "region": "region",
            "user_name": "userName",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "port": "port",
            "role": "role",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param password: 
            :param region: 
            :param user_name: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param port: 
            :param role: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8767f903a056bc71d2a9ff5c676d974c6a6452b4204a0d8137f4f0c25ae6ce40)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
                "password": password,
                "region": region,
                "user_name": user_name,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The instance type of the migration source instance, including:
            RDS: Alibaba Cloud RDS instance
            ECS: Self-built database on ECS
            LocalInstance: Self-built database with public IP address
            Express: self-built database accessed via dedicated line
            MongoDB: Ali cloud MongoDB instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: Source instance password
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            '''
            result = self._values.get("region")
            assert result is not None, "Required property 'region' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: userName: Source instance access account
            '''
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
            MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: Source instance ID.
            When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
            When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
            When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"table_name": "tableName"},
    )
    class TableExcludesProperty:
        def __init__(
            self,
            *,
            table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param table_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__23f0a747495b741121a13ef1144622cb7964f95b014fc26b7caec375f3ebd21b)
                check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def table_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tableName: The name of the table to be migrated does not require the table name of the migration table.
            '''
            result = self._values.get("table_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "column_excludes": "columnExcludes",
            "column_includes": "columnIncludes",
            "filter_condition": "filterCondition",
            "new_table_name": "newTableName",
            "table_name": "tableName",
        },
    )
    class TableIncludesProperty:
        def __init__(
            self,
            *,
            column_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.ColumnExcludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            column_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob.ColumnIncludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            filter_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param column_excludes: 
            :param column_includes: 
            :param filter_condition: 
            :param new_table_name: 
            :param table_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__068fffbad23d4d436319489825cc14b1401c2d432b1054f4415959a81b509e3a)
                check_type(argname="argument column_excludes", value=column_excludes, expected_type=type_hints["column_excludes"])
                check_type(argname="argument column_includes", value=column_includes, expected_type=type_hints["column_includes"])
                check_type(argname="argument filter_condition", value=filter_condition, expected_type=type_hints["filter_condition"])
                check_type(argname="argument new_table_name", value=new_table_name, expected_type=type_hints["new_table_name"])
                check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if column_excludes is not None:
                self._values["column_excludes"] = column_excludes
            if column_includes is not None:
                self._values["column_includes"] = column_includes
            if filter_condition is not None:
                self._values["filter_condition"] = filter_condition
            if new_table_name is not None:
                self._values["new_table_name"] = new_table_name
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def column_excludes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.ColumnExcludesProperty"]]]]:
            '''
            :Property: columnExcludes: Column excludes configuration
            '''
            result = self._values.get("column_excludes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.ColumnExcludesProperty"]]]], result)

        @builtins.property
        def column_includes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.ColumnIncludesProperty"]]]]:
            '''
            :Property: columnIncludes: Column includes configuration
            '''
            result = self._values.get("column_includes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob.ColumnIncludesProperty"]]]], result)

        @builtins.property
        def filter_condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: filterCondition: Where condition
            '''
            result = self._values.get("filter_condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_table_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newTableName: The name of the table to be migrated in the target instance mapping
            '''
            result = self._values.get("new_table_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def table_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tableName: Table name to be migrated
            '''
            result = self._values.get("table_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosMigrationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "migration_job_class": "migrationJobClass",
        "destination_endpoint": "destinationEndpoint",
        "migration_job_name": "migrationJobName",
        "migration_mode": "migrationMode",
        "migration_object": "migrationObject",
        "source_endpoint": "sourceEndpoint",
    },
)
class RosMigrationJobProps:
    def __init__(
        self,
        *,
        migration_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        migration_job_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        migration_mode: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.MigrationModeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        migration_object: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.MigrationObjectProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        source_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::MigrationJob``.

        :param migration_job_class: 
        :param destination_endpoint: 
        :param migration_job_name: 
        :param migration_mode: 
        :param migration_object: 
        :param source_endpoint: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__761c343eff29de6b2aaf4e3c622d7ddeba32b12c063def8b67e0576b6aa7e3fd)
            check_type(argname="argument migration_job_class", value=migration_job_class, expected_type=type_hints["migration_job_class"])
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument migration_job_name", value=migration_job_name, expected_type=type_hints["migration_job_name"])
            check_type(argname="argument migration_mode", value=migration_mode, expected_type=type_hints["migration_mode"])
            check_type(argname="argument migration_object", value=migration_object, expected_type=type_hints["migration_object"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "migration_job_class": migration_job_class,
        }
        if destination_endpoint is not None:
            self._values["destination_endpoint"] = destination_endpoint
        if migration_job_name is not None:
            self._values["migration_job_name"] = migration_job_name
        if migration_mode is not None:
            self._values["migration_mode"] = migration_mode
        if migration_object is not None:
            self._values["migration_object"] = migration_object
        if source_endpoint is not None:
            self._values["source_endpoint"] = source_endpoint

    @builtins.property
    def migration_job_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        migrationJobClass: Migrating instance specifications, which can be:
        small, medium, large and so on.
        Various specifications of the reference data migration test performance specifications
        '''
        result = self._values.get("migration_job_class")
        assert result is not None, "Required property 'migration_job_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.DestinationEndpointProperty]]:
        '''
        :Property: destinationEndpoint: Migration target configuration
        '''
        result = self._values.get("destination_endpoint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.DestinationEndpointProperty]], result)

    @builtins.property
    def migration_job_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: migrationJobName: Migrating job name
        '''
        result = self._values.get("migration_job_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def migration_mode(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.MigrationModeProperty]]:
        '''
        :Property: migrationMode: Migration mode
        '''
        result = self._values.get("migration_mode")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.MigrationModeProperty]], result)

    @builtins.property
    def migration_object(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.MigrationObjectProperty]]]]:
        '''
        :Property: migrationObject: Objects that need to be migrated
        '''
        result = self._values.get("migration_object")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.MigrationObjectProperty]]]], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.SourceEndpointProperty]]:
        '''
        :Property: sourceEndpoint: Migration source configuration
        '''
        result = self._values.get("source_endpoint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.SourceEndpointProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMigrationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSubscriptionInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstance",
):
    '''A ROS template type:  ``ALIYUN::DTS::SubscriptionInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSubscriptionInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::SubscriptionInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87fc04100d901f05ab6c6ccb2ac41ff5d1ec760d959d870a4bc295dabaa16ae5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b58156c3e78f643f857fe61165e51f4d937e8b3daabae3c15652dbfa39f45ba3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateHost")
    def attr_private_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateHost: Private host.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateHost"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicHost")
    def attr_public_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicHost: Public host.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicHost"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscribeTopic")
    def attr_subscribe_topic(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscribeTopic: The topic of the change tracking instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscribeTopic"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionInstanceId")
    def attr_subscription_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscriptionInstanceId: The ID of Data subscription instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcHost")
    def attr_vpc_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VPCHost: VPC host.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcHost"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8e5bb74951b82bb337041edf389565773feeeba912b13fdbe8cd3972b9f91c87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="configuration")
    def configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.ConfigurationProperty"]]:
        '''
        :Property: configuration: Subscription configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.ConfigurationProperty"]], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.ConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac76c77871b8af0bb7f72412dc87b3450a662dd4687f9ddfa695db0ce1ce68cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configuration", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: Payment type. Valid value:
        PostPaid: Pay-as-you-go, which is default value.
        PrePaid: subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52a276ece79e86c326b2c6257e7c3c4d81080cffd8b948648b533ee0be6a533c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The unit of the subscription length. Valid values: Year and Month.
        Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52b1cfe31758c3bae281a07c18cf58891fc23afb9c9bb6ac4ea0e04cefe0b149)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpointInstanceType")
    def source_endpoint_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
        PolarDB: PolarDB for MySQL cluster.
        polardb_o: PolarDB O Edition cluster.
        polardb_pg: PolarDB for PostgreSQL cluster.
        DRDS: PolarDB-X instance V1.0 or V2.0.
        PostgreSQL: self-managed PostgreSQL database.
        Oracle: self-managed Oracle database.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceEndpointInstanceType"))

    @source_endpoint_instance_type.setter
    def source_endpoint_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1695dffd8d4de92412eb254b486e1fc4b3549a6cc477f85876f72e0b9e41d2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpointInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosSubscriptionInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosSubscriptionInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosSubscriptionInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd4c2a8c2e37b72f5b879b4f4a546163487c51833aa9ab727f781d02ec4a15d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usedTime: The subscription length.
        Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        You can set the Period parameter to specify the unit of the subscription length.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a812edfdfea2ae97dc3a7942a624ed207de06f0dfd3132f49048c2a50a3106d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usedTime", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "source_endpoint": "sourceEndpoint",
            "subscription_data_type": "subscriptionDataType",
            "db_list": "dbList",
            "subscription_instance": "subscriptionInstance",
            "subscription_instance_name": "subscriptionInstanceName",
            "subscription_instance_network_type": "subscriptionInstanceNetworkType",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSubscriptionInstance.SourceEndpointProperty", typing.Dict[builtins.str, typing.Any]]],
            subscription_data_type: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSubscriptionInstance.SubscriptionDataTypeProperty", typing.Dict[builtins.str, typing.Any]]],
            db_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            subscription_instance: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSubscriptionInstance.SubscriptionInstanceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            subscription_instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            subscription_instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param source_endpoint: 
            :param subscription_data_type: 
            :param db_list: 
            :param subscription_instance: 
            :param subscription_instance_name: 
            :param subscription_instance_network_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3e92c5b291a742749e5ebe58c56c1c9c9f89c10d721640a5c945069ee436b414)
                check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
                check_type(argname="argument subscription_data_type", value=subscription_data_type, expected_type=type_hints["subscription_data_type"])
                check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
                check_type(argname="argument subscription_instance", value=subscription_instance, expected_type=type_hints["subscription_instance"])
                check_type(argname="argument subscription_instance_name", value=subscription_instance_name, expected_type=type_hints["subscription_instance_name"])
                check_type(argname="argument subscription_instance_network_type", value=subscription_instance_network_type, expected_type=type_hints["subscription_instance_network_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "source_endpoint": source_endpoint,
                "subscription_data_type": subscription_data_type,
            }
            if db_list is not None:
                self._values["db_list"] = db_list
            if subscription_instance is not None:
                self._values["subscription_instance"] = subscription_instance
            if subscription_instance_name is not None:
                self._values["subscription_instance_name"] = subscription_instance_name
            if subscription_instance_network_type is not None:
                self._values["subscription_instance_network_type"] = subscription_instance_network_type

        @builtins.property
        def source_endpoint(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.SourceEndpointProperty"]:
            '''
            :Property: sourceEndpoint: Migration source configuration.
            '''
            result = self._values.get("source_endpoint")
            assert result is not None, "Required property 'source_endpoint' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.SourceEndpointProperty"], result)

        @builtins.property
        def subscription_data_type(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.SubscriptionDataTypeProperty"]:
            '''
            :Property: subscriptionDataType: undefined
            '''
            result = self._values.get("subscription_data_type")
            assert result is not None, "Required property 'subscription_data_type' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.SubscriptionDataTypeProperty"], result)

        @builtins.property
        def db_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dbList: Subscription object, formatted as a JSON string. For detailed definitions, see the description of the migration, synchronization or subscription objects.
            '''
            result = self._values.get("db_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def subscription_instance(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.SubscriptionInstanceProperty"]]:
            '''
            :Property: subscriptionInstance: undefined
            '''
            result = self._values.get("subscription_instance")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionInstance.SubscriptionInstanceProperty"]], result)

        @builtins.property
        def subscription_instance_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: subscriptionInstanceName: Subscription instance name.
            '''
            result = self._values.get("subscription_instance_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def subscription_instance_network_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: subscriptionInstanceNetworkType: Network type: classic or vpc.
            '''
            result = self._values.get("subscription_instance_network_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstance.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "password": "password",
            "user_name": "userName",
            "database_name": "databaseName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "port": "port",
            "role": "role",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param password: 
            :param user_name: 
            :param database_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param port: 
            :param role: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__88c90a85b2d1438404f5ed8a6f632d58bfeab753a4d48705d07153cbe255a250)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
                "password": password,
                "user_name": user_name,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The instance type of the subscription source instance, including:
            RDS: Alibaba Cloud RDS instance
            ECS: Self-built database on ECS
            PolarDB: PolarDB for MySQL cluster
            LocalInstance: self-managed database with a public IP address
            Express: self-managed database that is connected over Express Connect
            CEN: self-managed database that is connected over Cloud Enterprise Network (CEN)
            dg: self-managed database that is connected over Database Gateway
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: Source instance password
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: userName: Source instance access account
            '''
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: databaseName: The database library name used when creating the connection.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: Source instance ID.
            When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
            When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionDataTypeProperty",
        jsii_struct_bases=[],
        name_mapping={"ddl": "ddl", "dml": "dml"},
    )
    class SubscriptionDataTypeProperty:
        def __init__(
            self,
            *,
            ddl: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            dml: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param ddl: 
            :param dml: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bc854779bd2059af74723653b28c6954b23051325a3fab30c29d962da21fdfd1)
                check_type(argname="argument ddl", value=ddl, expected_type=type_hints["ddl"])
                check_type(argname="argument dml", value=dml, expected_type=type_hints["dml"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "ddl": ddl,
                "dml": dml,
            }

        @builtins.property
        def ddl(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ddl: Whether to subscribe to DDL type data.
            '''
            result = self._values.get("ddl")
            assert result is not None, "Required property 'ddl' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def dml(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dml: Whether to subscribe to DML type data.
            '''
            result = self._values.get("dml")
            assert result is not None, "Required property 'dml' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubscriptionDataTypeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionInstanceProperty",
        jsii_struct_bases=[],
        name_mapping={"vpc_id": "vpcId", "v_switch_id": "vSwitchId"},
    )
    class SubscriptionInstanceProperty:
        def __init__(
            self,
            *,
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param vpc_id: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a23a560398dfeddcc8188721b113ccfe54642ff0fad3d4ffe79c924bf36881f4)
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vpc_id": vpc_id,
                "v_switch_id": v_switch_id,
            }

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: undefined
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: undefined
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubscriptionInstanceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__6734b61b858a2d2823692b0dfc344c9098e4b0e239892bfdc9dcb49123616aa7)
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
    jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "pay_type": "payType",
        "period": "period",
        "source_endpoint_instance_type": "sourceEndpointInstanceType",
        "tags": "tags",
        "used_time": "usedTime",
    },
)
class RosSubscriptionInstanceProps:
    def __init__(
        self,
        *,
        configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_endpoint_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSubscriptionInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::SubscriptionInstance``.

        :param configuration: 
        :param pay_type: 
        :param period: 
        :param source_endpoint_instance_type: 
        :param tags: 
        :param used_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd5debbe0a8d4627ff11830e11c4a93fa93c07f8d9424cb870ec357f9a6d639c)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument source_endpoint_instance_type", value=source_endpoint_instance_type, expected_type=type_hints["source_endpoint_instance_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if configuration is not None:
            self._values["configuration"] = configuration
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if source_endpoint_instance_type is not None:
            self._values["source_endpoint_instance_type"] = source_endpoint_instance_type
        if tags is not None:
            self._values["tags"] = tags
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionInstance.ConfigurationProperty]]:
        '''
        :Property: configuration: Subscription configuration.
        '''
        result = self._values.get("configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionInstance.ConfigurationProperty]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: Payment type. Valid value:
        PostPaid: Pay-as-you-go, which is default value.
        PrePaid: subscription.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The unit of the subscription length. Valid values: Year and Month.
        Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_endpoint_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
        PolarDB: PolarDB for MySQL cluster.
        polardb_o: PolarDB O Edition cluster.
        polardb_pg: PolarDB for PostgreSQL cluster.
        DRDS: PolarDB-X instance V1.0 or V2.0.
        PostgreSQL: self-managed PostgreSQL database.
        Oracle: self-managed Oracle database.
        '''
        result = self._values.get("source_endpoint_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosSubscriptionInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSubscriptionInstance.TagsProperty]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usedTime: The subscription length.
        Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        You can set the Period parameter to specify the unit of the subscription length.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSubscriptionInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSynchronizationJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob",
):
    '''A ROS template type:  ``ALIYUN::DTS::SynchronizationJob``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSynchronizationJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::SynchronizationJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6db9de355b7c3d06e3ae09a069542bee59cf7737cdbb3227164160466cbb1d7a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__99aaa70e077e2627aa6c743460912cc84060181259cdf2d5203b9d0c90b85a1d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSynchronizationJobId")
    def attr_synchronization_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SynchronizationJobId: Synchronization instance ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSynchronizationJobId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="destinationEndpoint")
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.DestinationEndpointProperty"]:
        '''
        :Property: destinationEndpoint: Migration target configuration
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.DestinationEndpointProperty"], jsii.get(self, "destinationEndpoint"))

    @destination_endpoint.setter
    def destination_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.DestinationEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__341701a35b1c06a82c070498ad151817437c05850948cca0c9ebb2c41e28033b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="destRegion")
    def dest_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destRegion: Region where the synchronization target instance is located.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destRegion"))

    @dest_region.setter
    def dest_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b83962e76348abb9e4bc93bbac563449b96d33eb41dad9db4c72519a95e83021)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destRegion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b04724cd4a537b3cf6b9915b7344a601a2f815b5a466a9ad8f5f98382cf12e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.SourceEndpointProperty"]:
        '''
        :Property: sourceEndpoint: Migration source configuration
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.SourceEndpointProperty"], jsii.get(self, "sourceEndpoint"))

    @source_endpoint.setter
    def source_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.SourceEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2d0d89168f42189579c8924566dbfa080b9a7fc44739220398ac93c54ac7e94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceRegion")
    def source_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceRegion: Region where the synchronization source instance is located.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceRegion"))

    @source_region.setter
    def source_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8274f520698ec22ba1e2f221872e9c5fbf6e27152fe79ac3e6b5bc0513a6eb23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceRegion", value)

    @builtins.property
    @jsii.member(jsii_name="synchronizationJobClass")
    def synchronization_job_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        synchronizationJobClass: Synchronous instance specifications, which can be:
        micro, small, medium, large and so on. The default value is: small
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "synchronizationJobClass"))

    @synchronization_job_class.setter
    def synchronization_job_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b9c12daca95e6d4307061d680d7c927882628d3ea88b50750f47475b2f3143e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "synchronizationJobClass", value)

    @builtins.property
    @jsii.member(jsii_name="dataInitialization")
    def data_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
        false: no full data initialization
        The default value is: true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataInitialization"))

    @data_initialization.setter
    def data_initialization(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__890c9c4224b2226f66c7747f53ac77db2428f480d6c909c880ce58170603ab44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataInitialization", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a3df5e291ab384e0e8d3723f15c4271017ddc9b11da71a6d48aac30c0c86b7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: Payment type, which include:
        Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f60cc0cd8502d1c80f772cb64a329920c6a609f473aaf015a4f746df1e7d025)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        Year: Annual, Month: monthly
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbfe0cba1c27d852819cf689397108e312de382c61845f1f94ab4743cedd61bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="structureInitialization")
    def structure_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
        false: no result object initialization
        The default value is: true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "structureInitialization"))

    @structure_initialization.setter
    def structure_initialization(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0227ca457b5e6173ef54d6d9a1bf55e1cfcec214937fd1d5bf77c5610e5c984c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "structureInitialization", value)

    @builtins.property
    @jsii.member(jsii_name="synchronizationObjects")
    def synchronization_objects(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.SynchronizationObjectsProperty"]]]]:
        '''
        :Property: synchronizationObjects: Objects that need to be synchronized
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.SynchronizationObjectsProperty"]]]], jsii.get(self, "synchronizationObjects"))

    @synchronization_objects.setter
    def synchronization_objects(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.SynchronizationObjectsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16d82b335565fb721d9d9b8c1fadbb43cbc690f4f1811b85b24de09fe50898f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "synchronizationObjects", value)

    @builtins.property
    @jsii.member(jsii_name="topology")
    def topology(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "topology"))

    @topology.setter
    def topology(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d01b35fe066f4c20c06ec26839faa97dc08d534422d4dd7185fde6bdf135dc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topology", value)

    @builtins.property
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c2b787e2ca1be02da809c40df84d6372da3f0aae56863051514f0d2e50b6f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usedTime", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName"},
    )
    class ColumnExcludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param column_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__84605d6f63c45cae0d456b0f4dec84afc6c382e2cb73ef7a3023f3b5222ce4c8)
                check_type(argname="argument column_name", value=column_name, expected_type=type_hints["column_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name

        @builtins.property
        def column_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: columnName: Column names are not synchronized in the table to be synchronized
            '''
            result = self._values.get("column_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName", "new_column_name": "newColumnName"},
    )
    class ColumnIncludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param column_name: 
            :param new_column_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bc51d4c5e012e7206e7090380d9d000e28280d42afd8fd6a1857e9b95d44a50b)
                check_type(argname="argument column_name", value=column_name, expected_type=type_hints["column_name"])
                check_type(argname="argument new_column_name", value=new_column_name, expected_type=type_hints["new_column_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name
            if new_column_name is not None:
                self._values["new_column_name"] = new_column_name

        @builtins.property
        def column_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: columnName: The column name to be synchronized in the table to be synchronized
            '''
            result = self._values.get("column_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_column_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newColumnName: The name of the column to be synchronized to be mapped in the target instance
            '''
            result = self._values.get("new_column_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "instance_id": "instanceId",
            "instance_type_for_creation": "instanceTypeForCreation",
            "ip": "ip",
            "password": "password",
            "port": "port",
            "user_name": "userName",
        },
    )
    class DestinationEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type_for_creation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param instance_id: 
            :param instance_type_for_creation: 
            :param ip: 
            :param password: 
            :param port: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4ae454482264b61e7f1638e2d32f4fa62c6cfddf47dd407465c675ba623c0898)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument instance_type_for_creation", value=instance_type_for_creation, expected_type=type_hints["instance_type_for_creation"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
            }
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if instance_type_for_creation is not None:
                self._values["instance_type_for_creation"] = instance_type_for_creation
            if ip is not None:
                self._values["ip"] = ip
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The instance type of the synchronization target instance for configuration, including:
            Redis: Alibaba Cloud Redis instance
            RDS: Alibaba Cloud RDS instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            ECS: Self-built database on ECS
            Express: self-built database accessed via dedicated line
            MaxCompute: Alibaba Cloud MaxCompute instance
            DataHub: Alibaba Cloud DataHub instance
            AnalyticDB: Alibaba Cloud Analytic Database MySQL Version (2.0)
            AnalyticDB30: Alibaba Cloud Analytic Database MySQL Version (3.0)
            Greenplum: Cloud-native data warehouse ADB PostgreSQL version (formerly analytical database PostgreSQL version).
            The default value is RDS
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceId: Target instance ID.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type_for_creation(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
            MySQL: Alibaba Cloud MySQL instance
            PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            MaxCompute: Alibaba Cloud MaxCompute instance.
            If this property is not specified, it will be same with InstanceType
            '''
            result = self._values.get("instance_type_for_creation")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: Target instance password
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userName: Target instance access account
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "instance_id": "instanceId",
            "instance_type_for_creation": "instanceTypeForCreation",
            "ip": "ip",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "role": "role",
            "user_name": "userName",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type_for_creation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param instance_id: 
            :param instance_type_for_creation: 
            :param ip: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param role: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__40c456e575f20a4df55fd92b133410eae51c657ee43a32305795bd4bf25a6bdc)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument instance_type_for_creation", value=instance_type_for_creation, expected_type=type_hints["instance_type_for_creation"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
            }
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if instance_type_for_creation is not None:
                self._values["instance_type_for_creation"] = instance_type_for_creation
            if ip is not None:
                self._values["ip"] = ip
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The instance type of the synchronization source instance for configuration, including:
            Redis: Alibaba Cloud Redis instance
            RDS: Alibaba Cloud RDS instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            ECS: Self-built database on ECS
            Express: Self-built database accessed via dedicated line
            dg: Self-built database accessed via the database gateway DG
            cen: Self-built database accessed via the cloud enterprise network CEN.
            The default value is RDS.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceId: Source instance ID.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type_for_creation(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
            MySQL: Alibaba Cloud MySQL instance
            PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            Redis: Alibaba Cloud Redis instance.
            If this property is not specified, it will be same with InstanceType.
            '''
            result = self._values.get("instance_type_for_creation")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: Source instance password
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: role: When the synchronization source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the authorized role of the account to which the source instance belongs to the Alibaba Cloud account to which the target instance belongs, and the relevant permissions and authorization steps of the reference.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userName: Source instance access account
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "db_name": "dbName",
            "new_db_name": "newDbName",
            "new_schema_name": "newSchemaName",
            "schema_name": "schemaName",
            "table_excludes": "tableExcludes",
            "table_includes": "tableIncludes",
        },
    )
    class SynchronizationObjectsProperty:
        def __init__(
            self,
            *,
            db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            table_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSynchronizationJob.TableExcludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            table_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSynchronizationJob.TableIncludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param db_name: 
            :param new_db_name: 
            :param new_schema_name: 
            :param schema_name: 
            :param table_excludes: 
            :param table_includes: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fda5848e62a7ad66020762ad812333b2774f5bd72d296969a828b8870a53cb8e)
                check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
                check_type(argname="argument new_db_name", value=new_db_name, expected_type=type_hints["new_db_name"])
                check_type(argname="argument new_schema_name", value=new_schema_name, expected_type=type_hints["new_schema_name"])
                check_type(argname="argument schema_name", value=schema_name, expected_type=type_hints["schema_name"])
                check_type(argname="argument table_excludes", value=table_excludes, expected_type=type_hints["table_excludes"])
                check_type(argname="argument table_includes", value=table_includes, expected_type=type_hints["table_includes"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if db_name is not None:
                self._values["db_name"] = db_name
            if new_db_name is not None:
                self._values["new_db_name"] = new_db_name
            if new_schema_name is not None:
                self._values["new_schema_name"] = new_schema_name
            if schema_name is not None:
                self._values["schema_name"] = schema_name
            if table_excludes is not None:
                self._values["table_excludes"] = table_excludes
            if table_includes is not None:
                self._values["table_includes"] = table_includes

        @builtins.property
        def db_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dbName: db name to be synchronized
            '''
            result = self._values.get("db_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_db_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newDbName: The name of the db to be synchronized in the target instance.
            '''
            result = self._values.get("new_db_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_schema_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newSchemaName: Schema name to be synchronized by Schema in the target instance
            '''
            result = self._values.get("new_schema_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def schema_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: schemaName: Schema name to be synchronized
            '''
            result = self._values.get("schema_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def table_excludes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.TableExcludesProperty"]]]]:
            '''
            :Property: tableExcludes: Table excludes configuration
            '''
            result = self._values.get("table_excludes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.TableExcludesProperty"]]]], result)

        @builtins.property
        def table_includes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.TableIncludesProperty"]]]]:
            '''
            :Property: tableIncludes: Table configuration
            '''
            result = self._values.get("table_includes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.TableIncludesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SynchronizationObjectsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"table_name": "tableName"},
    )
    class TableExcludesProperty:
        def __init__(
            self,
            *,
            table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param table_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ec098d07b9f359130878af03d714bc3508eb7749f57ae961cc29486ecc8499dd)
                check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def table_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tableName: The name of the table to be synchronized does not require the table name of the migration table.
            '''
            result = self._values.get("table_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "column_excludes": "columnExcludes",
            "column_includes": "columnIncludes",
            "filter_condition": "filterCondition",
            "new_table_name": "newTableName",
            "table_name": "tableName",
        },
    )
    class TableIncludesProperty:
        def __init__(
            self,
            *,
            column_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSynchronizationJob.ColumnExcludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            column_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSynchronizationJob.ColumnIncludesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            filter_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            new_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param column_excludes: 
            :param column_includes: 
            :param filter_condition: 
            :param new_table_name: 
            :param table_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__df0cd3cfb9275b459f07933c3db1d356942a0a68db20fc19a3dbe50d47347a33)
                check_type(argname="argument column_excludes", value=column_excludes, expected_type=type_hints["column_excludes"])
                check_type(argname="argument column_includes", value=column_includes, expected_type=type_hints["column_includes"])
                check_type(argname="argument filter_condition", value=filter_condition, expected_type=type_hints["filter_condition"])
                check_type(argname="argument new_table_name", value=new_table_name, expected_type=type_hints["new_table_name"])
                check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if column_excludes is not None:
                self._values["column_excludes"] = column_excludes
            if column_includes is not None:
                self._values["column_includes"] = column_includes
            if filter_condition is not None:
                self._values["filter_condition"] = filter_condition
            if new_table_name is not None:
                self._values["new_table_name"] = new_table_name
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def column_excludes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.ColumnExcludesProperty"]]]]:
            '''
            :Property: columnExcludes: Column excludes configuration
            '''
            result = self._values.get("column_excludes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.ColumnExcludesProperty"]]]], result)

        @builtins.property
        def column_includes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.ColumnIncludesProperty"]]]]:
            '''
            :Property: columnIncludes: Column includes configuration
            '''
            result = self._values.get("column_includes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob.ColumnIncludesProperty"]]]], result)

        @builtins.property
        def filter_condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: filterCondition: Where condition
            '''
            result = self._values.get("filter_condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def new_table_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: newTableName: The name of the table to be synchronized in the target instance mapping
            '''
            result = self._values.get("new_table_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def table_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tableName: Table name to be synchronized
            '''
            result = self._values.get("table_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_endpoint": "destinationEndpoint",
        "dest_region": "destRegion",
        "source_endpoint": "sourceEndpoint",
        "source_region": "sourceRegion",
        "synchronization_job_class": "synchronizationJobClass",
        "data_initialization": "dataInitialization",
        "network_type": "networkType",
        "pay_type": "payType",
        "period": "period",
        "structure_initialization": "structureInitialization",
        "synchronization_objects": "synchronizationObjects",
        "topology": "topology",
        "used_time": "usedTime",
    },
)
class RosSynchronizationJobProps:
    def __init__(
        self,
        *,
        destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        dest_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        source_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        synchronization_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        structure_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        synchronization_objects: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SynchronizationObjectsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        topology: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::SynchronizationJob``.

        :param destination_endpoint: 
        :param dest_region: 
        :param source_endpoint: 
        :param source_region: 
        :param synchronization_job_class: 
        :param data_initialization: 
        :param network_type: 
        :param pay_type: 
        :param period: 
        :param structure_initialization: 
        :param synchronization_objects: 
        :param topology: 
        :param used_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d7bad6fdcfea8d62db8917d707f03e83d87bca105f9f6c30506e65ae1213160)
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument dest_region", value=dest_region, expected_type=type_hints["dest_region"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument source_region", value=source_region, expected_type=type_hints["source_region"])
            check_type(argname="argument synchronization_job_class", value=synchronization_job_class, expected_type=type_hints["synchronization_job_class"])
            check_type(argname="argument data_initialization", value=data_initialization, expected_type=type_hints["data_initialization"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument structure_initialization", value=structure_initialization, expected_type=type_hints["structure_initialization"])
            check_type(argname="argument synchronization_objects", value=synchronization_objects, expected_type=type_hints["synchronization_objects"])
            check_type(argname="argument topology", value=topology, expected_type=type_hints["topology"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_endpoint": destination_endpoint,
            "dest_region": dest_region,
            "source_endpoint": source_endpoint,
            "source_region": source_region,
            "synchronization_job_class": synchronization_job_class,
        }
        if data_initialization is not None:
            self._values["data_initialization"] = data_initialization
        if network_type is not None:
            self._values["network_type"] = network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if structure_initialization is not None:
            self._values["structure_initialization"] = structure_initialization
        if synchronization_objects is not None:
            self._values["synchronization_objects"] = synchronization_objects
        if topology is not None:
            self._values["topology"] = topology
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.DestinationEndpointProperty]:
        '''
        :Property: destinationEndpoint: Migration target configuration
        '''
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.DestinationEndpointProperty], result)

    @builtins.property
    def dest_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destRegion: Region where the synchronization target instance is located.
        '''
        result = self._values.get("dest_region")
        assert result is not None, "Required property 'dest_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SourceEndpointProperty]:
        '''
        :Property: sourceEndpoint: Migration source configuration
        '''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SourceEndpointProperty], result)

    @builtins.property
    def source_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceRegion: Region where the synchronization source instance is located.
        '''
        result = self._values.get("source_region")
        assert result is not None, "Required property 'source_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def synchronization_job_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        synchronizationJobClass: Synchronous instance specifications, which can be:
        micro, small, medium, large and so on. The default value is: small
        '''
        result = self._values.get("synchronization_job_class")
        assert result is not None, "Required property 'synchronization_job_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
        false: no full data initialization
        The default value is: true
        '''
        result = self._values.get("data_initialization")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: Payment type, which include:
        Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        Year: Annual, Month: monthly
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
        false: no result object initialization
        The default value is: true
        '''
        result = self._values.get("structure_initialization")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def synchronization_objects(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]]:
        '''
        :Property: synchronizationObjects: Objects that need to be synchronized
        '''
        result = self._values.get("synchronization_objects")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]], result)

    @builtins.property
    def topology(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        '''
        result = self._values.get("topology")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSynchronizationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SubscriptionInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.SubscriptionInstance",
):
    '''A ROS resource type:  ``ALIYUN::DTS::SubscriptionInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SubscriptionInstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::SubscriptionInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__555c660fe9027d774213d5f96a60e6a03df99d8caefc3049795aee606ee14772)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPrivateHost")
    def attr_private_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateHost: Private host.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateHost"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicHost")
    def attr_public_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicHost: Public host.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicHost"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscribeTopic")
    def attr_subscribe_topic(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscribeTopic: The topic of the change tracking instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscribeTopic"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionInstanceId")
    def attr_subscription_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscriptionInstanceId: The ID of Data subscription instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcHost")
    def attr_vpc_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VPCHost: VPC host.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcHost"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.SubscriptionInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "pay_type": "payType",
        "period": "period",
        "source_endpoint_instance_type": "sourceEndpointInstanceType",
        "tags": "tags",
        "used_time": "usedTime",
    },
)
class SubscriptionInstanceProps:
    def __init__(
        self,
        *,
        configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_endpoint_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSubscriptionInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::SubscriptionInstance``.

        :param configuration: Property configuration: Subscription configuration.
        :param pay_type: Property payType: Payment type. Valid value: PostPaid: Pay-as-you-go, which is default value. PrePaid: subscription.
        :param period: Property period: The unit of the subscription length. Valid values: Year and Month. Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        :param source_endpoint_instance_type: Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database. PolarDB: PolarDB for MySQL cluster. polardb_o: PolarDB O Edition cluster. polardb_pg: PolarDB for PostgreSQL cluster. DRDS: PolarDB-X instance V1.0 or V2.0. PostgreSQL: self-managed PostgreSQL database. Oracle: self-managed Oracle database.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param used_time: Property usedTime: The subscription length. Note: You must specify this parameter only if you set the PayType parameter to PrePaid. You can set the Period parameter to specify the unit of the subscription length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13fb13b852988c447bdca69469c5284fe2b0bf50944e5ddb8f96f39fd021666c)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument source_endpoint_instance_type", value=source_endpoint_instance_type, expected_type=type_hints["source_endpoint_instance_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if configuration is not None:
            self._values["configuration"] = configuration
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if source_endpoint_instance_type is not None:
            self._values["source_endpoint_instance_type"] = source_endpoint_instance_type
        if tags is not None:
            self._values["tags"] = tags
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionInstance.ConfigurationProperty]]:
        '''Property configuration: Subscription configuration.'''
        result = self._values.get("configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionInstance.ConfigurationProperty]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: Payment type.

        Valid value:
        PostPaid: Pay-as-you-go, which is default value.
        PrePaid: subscription.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The unit of the subscription length.

        Valid values: Year and Month.
        Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_endpoint_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.

        PolarDB: PolarDB for MySQL cluster.
        polardb_o: PolarDB O Edition cluster.
        polardb_pg: PolarDB for PostgreSQL cluster.
        DRDS: PolarDB-X instance V1.0 or V2.0.
        PostgreSQL: self-managed PostgreSQL database.
        Oracle: self-managed Oracle database.
        '''
        result = self._values.get("source_endpoint_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosSubscriptionInstance.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSubscriptionInstance.TagsProperty]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usedTime: The subscription length.

        Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        You can set the Period parameter to specify the unit of the subscription length.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SubscriptionInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SynchronizationJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.SynchronizationJob",
):
    '''A ROS resource type:  ``ALIYUN::DTS::SynchronizationJob``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SynchronizationJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DTS::SynchronizationJob``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dba7c07ec05d974e596a999164b1454ab0235c2d7ec5750eca9deb37f1a85788)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSynchronizationJobId")
    def attr_synchronization_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SynchronizationJobId: Synchronization instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSynchronizationJobId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.SynchronizationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_endpoint": "destinationEndpoint",
        "dest_region": "destRegion",
        "source_endpoint": "sourceEndpoint",
        "source_region": "sourceRegion",
        "synchronization_job_class": "synchronizationJobClass",
        "data_initialization": "dataInitialization",
        "network_type": "networkType",
        "pay_type": "payType",
        "period": "period",
        "structure_initialization": "structureInitialization",
        "synchronization_objects": "synchronizationObjects",
        "topology": "topology",
        "used_time": "usedTime",
    },
)
class SynchronizationJobProps:
    def __init__(
        self,
        *,
        destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        dest_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        source_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        synchronization_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        structure_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        synchronization_objects: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SynchronizationObjectsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        topology: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DTS::SynchronizationJob``.

        :param destination_endpoint: Property destinationEndpoint: Migration target configuration.
        :param dest_region: Property destRegion: Region where the synchronization target instance is located.
        :param source_endpoint: Property sourceEndpoint: Migration source configuration.
        :param source_region: Property sourceRegion: Region where the synchronization source instance is located.
        :param synchronization_job_class: Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on. The default value is: small
        :param data_initialization: Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization false: no full data initialization The default value is: true
        :param network_type: Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        :param pay_type: Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        :param period: Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.
        :param structure_initialization: Property structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized false: no result object initialization The default value is: true
        :param synchronization_objects: Property synchronizationObjects: Objects that need to be synchronized.
        :param topology: Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional.
        :param used_time: Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ad95566f4d5b40c2a09f03e59261dceec633bc8d718a8355e051f3c227f3335)
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument dest_region", value=dest_region, expected_type=type_hints["dest_region"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument source_region", value=source_region, expected_type=type_hints["source_region"])
            check_type(argname="argument synchronization_job_class", value=synchronization_job_class, expected_type=type_hints["synchronization_job_class"])
            check_type(argname="argument data_initialization", value=data_initialization, expected_type=type_hints["data_initialization"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument structure_initialization", value=structure_initialization, expected_type=type_hints["structure_initialization"])
            check_type(argname="argument synchronization_objects", value=synchronization_objects, expected_type=type_hints["synchronization_objects"])
            check_type(argname="argument topology", value=topology, expected_type=type_hints["topology"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_endpoint": destination_endpoint,
            "dest_region": dest_region,
            "source_endpoint": source_endpoint,
            "source_region": source_region,
            "synchronization_job_class": synchronization_job_class,
        }
        if data_initialization is not None:
            self._values["data_initialization"] = data_initialization
        if network_type is not None:
            self._values["network_type"] = network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if structure_initialization is not None:
            self._values["structure_initialization"] = structure_initialization
        if synchronization_objects is not None:
            self._values["synchronization_objects"] = synchronization_objects
        if topology is not None:
            self._values["topology"] = topology
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.DestinationEndpointProperty]:
        '''Property destinationEndpoint: Migration target configuration.'''
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.DestinationEndpointProperty], result)

    @builtins.property
    def dest_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destRegion: Region where the synchronization target instance is located.'''
        result = self._values.get("dest_region")
        assert result is not None, "Required property 'dest_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SourceEndpointProperty]:
        '''Property sourceEndpoint: Migration source configuration.'''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SourceEndpointProperty], result)

    @builtins.property
    def source_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceRegion: Region where the synchronization source instance is located.'''
        result = self._values.get("source_region")
        assert result is not None, "Required property 'source_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def synchronization_job_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.

        The default value is: small
        '''
        result = self._values.get("synchronization_job_class")
        assert result is not None, "Required property 'synchronization_job_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataInitialization: Whether to perform full data initialization before synchronization.

        The values include:true: means full data initialization
        false: no full data initialization
        The default value is: true
        '''
        result = self._values.get("data_initialization")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: When synchronization geographies, the type of data transmission network used.

        Value include: Internet, Intranet. The default value is: Internet
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.

        Default is Postpaid
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property structureInitialization: Whether to initialize the structure object before synchronization.

        The values include:true: indicates that the structure object is initialized
        false: no result object initialization
        The default value is: true
        '''
        result = self._values.get("structure_initialization")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def synchronization_objects(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]]:
        '''Property synchronizationObjects: Objects that need to be synchronized.'''
        result = self._values.get("synchronization_objects")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]], result)

    @builtins.property
    def topology(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional.'''
        result = self._values.get("topology")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.'''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynchronizationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ConsumerGroup",
    "ConsumerGroupProps",
    "MigrationJob",
    "MigrationJobProps",
    "RosConsumerGroup",
    "RosConsumerGroupProps",
    "RosMigrationJob",
    "RosMigrationJobProps",
    "RosSubscriptionInstance",
    "RosSubscriptionInstanceProps",
    "RosSynchronizationJob",
    "RosSynchronizationJobProps",
    "SubscriptionInstance",
    "SubscriptionInstanceProps",
    "SynchronizationJob",
    "SynchronizationJobProps",
]

publication.publish()

def _typecheckingstub__0f463f651965585cbf8d348d1b3e433fc1d513184fb35b21149686cbd534b179(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__922d6c12e6c66043ca355053c590e476d7b3996c7fc99f5e47eb79016b51fc19(
    *,
    consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c0d3cfa27fbded39d43275dd3cbdff2c814a6f2ab888b3503c5baa36a5c7bbc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MigrationJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9836e348721a481d1298505da5ad1c5323fba838513d712b059c0b373a949229(
    *,
    migration_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    migration_job_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    migration_mode: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.MigrationModeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    migration_object: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.MigrationObjectProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    source_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6649a4d196a85f7f9f55f5441b2cc8b417f0e2d05044dc03949e8ea13be8af62(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd6b304b9eedc282f36085b98cea1a4bb93d075f6d45ce4cef36594ccd2b5592(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a893db5aaa0f7d0e24ecd5945f8a56b765840bc783b7a11b7032d532567d7c7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a645087e2f6c7248fe4f1e034170ff998122cec38d3390977e99c3dd0eed1f97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8605ab8e16a3ed258c13d2a5d1df14304cb46b402fa2239f376775e2591be49c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__043124c9553aa7e00212ebbdc7138247cf2d638fbcba794855ec1a7c73f8569e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db9a3c0bf5403ab71aba277e309802346987631c2deebf7cb857befd0f02336e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3042d13d44d117264f0a9e6aef2c904becef6569ab321865366786474d6bdbff(
    *,
    consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c6b8322661f45333eb0e66117bda95da2e4c7b14ca85e6c80656efc91efd625(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMigrationJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17f6e030a86257212a6551618bc31deb3823d56070d7d853563f3846b23e6125(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05d3bd0ab95a4d97f80878f8b224e8b2630255f19425dfaba25807aae2a6a545(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e496264d68ed1a49e9384e6875944144e4e5740ddd4fe9109f0cfb05fc25c722(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be6e8c9a9db5e5bf6a7c2831fd249a25eb0e376a692afc99cc6009331dee7d88(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.DestinationEndpointProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2c35d9849a02374e466696f2beba45caa6bf560eed704e1b3fecf43b12621fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37b796abcb2b3d88ab0bdd0d6ceaf8dcaa34292cdab0cb8fea5ad4eed600f902(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.MigrationModeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bae4e44ffa7082283181c1522b20551d5b0f9e3ebd29cbb066239ff9b942b2b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.MigrationObjectProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd49cbd8b66aacdda142514f72634a00f5929b26d7f2f71f5c99baf438fb8a04(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob.SourceEndpointProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83b8730a937c7d6ebfd8ec2a85f7c9e1f2548469d6812453ac2d3cf6ba7944ca(
    *,
    column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dee08b77671384a77e60961d2ffad066f56f253b3e96b183f5fddde72b6413cd(
    *,
    column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6771a46fa8e7665923a069b725910f4769ec6586610fa7fc21bf3549c9b595e(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__062504d6db9b3de622d347d26e2f9e61ff234dbeb27fd09df7e9e63c7d8867db(
    *,
    data_intialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_synchronization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    structure_intialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1391132f0009617674c9e654179d22694807baa77f8222acfadb5f60087d7f69(
    *,
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.TableExcludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    table_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.TableIncludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8767f903a056bc71d2a9ff5c676d974c6a6452b4204a0d8137f4f0c25ae6ce40(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23f0a747495b741121a13ef1144622cb7964f95b014fc26b7caec375f3ebd21b(
    *,
    table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__068fffbad23d4d436319489825cc14b1401c2d432b1054f4415959a81b509e3a(
    *,
    column_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.ColumnExcludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    column_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.ColumnIncludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    filter_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__761c343eff29de6b2aaf4e3c622d7ddeba32b12c063def8b67e0576b6aa7e3fd(
    *,
    migration_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    migration_job_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    migration_mode: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.MigrationModeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    migration_object: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.MigrationObjectProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    source_endpoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87fc04100d901f05ab6c6ccb2ac41ff5d1ec760d959d870a4bc295dabaa16ae5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSubscriptionInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b58156c3e78f643f857fe61165e51f4d937e8b3daabae3c15652dbfa39f45ba3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e5bb74951b82bb337041edf389565773feeeba912b13fdbe8cd3972b9f91c87(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac76c77871b8af0bb7f72412dc87b3450a662dd4687f9ddfa695db0ce1ce68cc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionInstance.ConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52a276ece79e86c326b2c6257e7c3c4d81080cffd8b948648b533ee0be6a533c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52b1cfe31758c3bae281a07c18cf58891fc23afb9c9bb6ac4ea0e04cefe0b149(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1695dffd8d4de92412eb254b486e1fc4b3549a6cc477f85876f72e0b9e41d2a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd4c2a8c2e37b72f5b879b4f4a546163487c51833aa9ab727f781d02ec4a15d5(
    value: typing.Optional[typing.List[RosSubscriptionInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a812edfdfea2ae97dc3a7942a624ed207de06f0dfd3132f49048c2a50a3106d7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e92c5b291a742749e5ebe58c56c1c9c9f89c10d721640a5c945069ee436b414(
    *,
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    subscription_data_type: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.SubscriptionDataTypeProperty, typing.Dict[builtins.str, typing.Any]]],
    db_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    subscription_instance: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.SubscriptionInstanceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    subscription_instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    subscription_instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88c90a85b2d1438404f5ed8a6f632d58bfeab753a4d48705d07153cbe255a250(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc854779bd2059af74723653b28c6954b23051325a3fab30c29d962da21fdfd1(
    *,
    ddl: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    dml: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a23a560398dfeddcc8188721b113ccfe54642ff0fad3d4ffe79c924bf36881f4(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6734b61b858a2d2823692b0dfc344c9098e4b0e239892bfdc9dcb49123616aa7(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd5debbe0a8d4627ff11830e11c4a93fa93c07f8d9424cb870ec357f9a6d639c(
    *,
    configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_endpoint_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSubscriptionInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6db9de355b7c3d06e3ae09a069542bee59cf7737cdbb3227164160466cbb1d7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSynchronizationJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99aaa70e077e2627aa6c743460912cc84060181259cdf2d5203b9d0c90b85a1d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__341701a35b1c06a82c070498ad151817437c05850948cca0c9ebb2c41e28033b(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.DestinationEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b83962e76348abb9e4bc93bbac563449b96d33eb41dad9db4c72519a95e83021(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b04724cd4a537b3cf6b9915b7344a601a2f815b5a466a9ad8f5f98382cf12e7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2d0d89168f42189579c8924566dbfa080b9a7fc44739220398ac93c54ac7e94(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SourceEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8274f520698ec22ba1e2f221872e9c5fbf6e27152fe79ac3e6b5bc0513a6eb23(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b9c12daca95e6d4307061d680d7c927882628d3ea88b50750f47475b2f3143e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__890c9c4224b2226f66c7747f53ac77db2428f480d6c909c880ce58170603ab44(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a3df5e291ab384e0e8d3723f15c4271017ddc9b11da71a6d48aac30c0c86b7c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f60cc0cd8502d1c80f772cb64a329920c6a609f473aaf015a4f746df1e7d025(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbfe0cba1c27d852819cf689397108e312de382c61845f1f94ab4743cedd61bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0227ca457b5e6173ef54d6d9a1bf55e1cfcec214937fd1d5bf77c5610e5c984c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16d82b335565fb721d9d9b8c1fadbb43cbc690f4f1811b85b24de09fe50898f8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d01b35fe066f4c20c06ec26839faa97dc08d534422d4dd7185fde6bdf135dc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c2b787e2ca1be02da809c40df84d6372da3f0aae56863051514f0d2e50b6f6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84605d6f63c45cae0d456b0f4dec84afc6c382e2cb73ef7a3023f3b5222ce4c8(
    *,
    column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc51d4c5e012e7206e7090380d9d000e28280d42afd8fd6a1857e9b95d44a50b(
    *,
    column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_column_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ae454482264b61e7f1638e2d32f4fa62c6cfddf47dd407465c675ba623c0898(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type_for_creation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c456e575f20a4df55fd92b133410eae51c657ee43a32305795bd4bf25a6bdc(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type_for_creation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fda5848e62a7ad66020762ad812333b2774f5bd72d296969a828b8870a53cb8e(
    *,
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schema_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.TableExcludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    table_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.TableIncludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec098d07b9f359130878af03d714bc3508eb7749f57ae961cc29486ecc8499dd(
    *,
    table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df0cd3cfb9275b459f07933c3db1d356942a0a68db20fc19a3dbe50d47347a33(
    *,
    column_excludes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.ColumnExcludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    column_includes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.ColumnIncludesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    filter_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    new_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d7bad6fdcfea8d62db8917d707f03e83d87bca105f9f6c30506e65ae1213160(
    *,
    destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    dest_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    source_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    synchronization_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    structure_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    synchronization_objects: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SynchronizationObjectsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    topology: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__555c660fe9027d774213d5f96a60e6a03df99d8caefc3049795aee606ee14772(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SubscriptionInstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13fb13b852988c447bdca69469c5284fe2b0bf50944e5ddb8f96f39fd021666c(
    *,
    configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionInstance.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_endpoint_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSubscriptionInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dba7c07ec05d974e596a999164b1454ab0235c2d7ec5750eca9deb37f1a85788(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SynchronizationJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ad95566f4d5b40c2a09f03e59261dceec633bc8d718a8355e051f3c227f3335(
    *,
    destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    dest_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    source_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    synchronization_job_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    structure_initialization: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    synchronization_objects: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob.SynchronizationObjectsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    topology: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
