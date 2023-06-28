'''
## Aliyun ROS MNS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MNS from '@alicloud/ros-cdk-mns';
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


class Queue(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Queue",
):
    '''A ROS resource type:  ``ALIYUN::MNS::Queue``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["QueueProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Queue``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc734d712b9d2ea1c702bece02e32a920c336c54e6f2af5e749881c57cb46502)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QueueName: Queue name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQueueName"))

    @builtins.property
    @jsii.member(jsii_name="attrQueueUrl")
    def attr_queue_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QueueUrl: URL of created queue.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQueueUrl"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mns.QueueProps",
    jsii_struct_bases=[],
    name_mapping={
        "queue_name": "queueName",
        "delay_seconds": "delaySeconds",
        "logging_enabled": "loggingEnabled",
        "maximum_message_size": "maximumMessageSize",
        "message_retention_period": "messageRetentionPeriod",
        "polling_wait_seconds": "pollingWaitSeconds",
        "visibility_timeout": "visibilityTimeout",
    },
)
class QueueProps:
    def __init__(
        self,
        *,
        queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        message_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        polling_wait_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        visibility_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Queue``.

        :param queue_name: Property queueName: Queue name.
        :param delay_seconds: Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires. An integer between 0 and 604800 (7 days). The default value is 0
        :param logging_enabled: Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. The default value is false
        :param maximum_message_size: Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes. An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        :param message_retention_period: Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not. An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        :param polling_wait_seconds: Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds. An integer between 0 and 30 seconds. The default value is 0 (seconds)
        :param visibility_timeout: Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds. An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a0746398da24aec89085303e83ed0992921c1f0d480d4371af0d2ce16de68ff)
            check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
            check_type(argname="argument delay_seconds", value=delay_seconds, expected_type=type_hints["delay_seconds"])
            check_type(argname="argument logging_enabled", value=logging_enabled, expected_type=type_hints["logging_enabled"])
            check_type(argname="argument maximum_message_size", value=maximum_message_size, expected_type=type_hints["maximum_message_size"])
            check_type(argname="argument message_retention_period", value=message_retention_period, expected_type=type_hints["message_retention_period"])
            check_type(argname="argument polling_wait_seconds", value=polling_wait_seconds, expected_type=type_hints["polling_wait_seconds"])
            check_type(argname="argument visibility_timeout", value=visibility_timeout, expected_type=type_hints["visibility_timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "queue_name": queue_name,
        }
        if delay_seconds is not None:
            self._values["delay_seconds"] = delay_seconds
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size
        if message_retention_period is not None:
            self._values["message_retention_period"] = message_retention_period
        if polling_wait_seconds is not None:
            self._values["polling_wait_seconds"] = polling_wait_seconds
        if visibility_timeout is not None:
            self._values["visibility_timeout"] = visibility_timeout

    @builtins.property
    def queue_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property queueName: Queue name.'''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delay_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delaySeconds: It is measured in seconds.

        All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        '''
        result = self._values.get("delay_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loggingEnabled: Whether to enable log management.

        "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.

        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def message_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.

        After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        '''
        result = self._values.get("message_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def polling_wait_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.

        Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        '''
        result = self._values.get("polling_wait_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def visibility_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.

        Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        result = self._values.get("visibility_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQueue(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.RosQueue",
):
    '''A ROS template type:  ``ALIYUN::MNS::Queue``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosQueueProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Queue``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eae8b0a235a1760a4a068319fd4c7d41920e60d38da35da03088c7785c519c37)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3537a6a3d905b35115e0b4daa24b30a89cb8f7b761b4b6e6a979b12018280e90)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QueueName: Queue name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQueueName"))

    @builtins.property
    @jsii.member(jsii_name="attrQueueUrl")
    def attr_queue_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QueueUrl: URL of created queue
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQueueUrl"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0b69a5c162718e9ad6091f4da9e314de0a463e348510066479c20a5dcb8373af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="queueName")
    def queue_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: queueName: Queue name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "queueName"))

    @queue_name.setter
    def queue_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__849bb27528bacdc62edbb5e1311b943114da24e0b2a32a7dd83925aedebc163e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queueName", value)

    @builtins.property
    @jsii.member(jsii_name="delaySeconds")
    def delay_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delaySeconds"))

    @delay_seconds.setter
    def delay_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b803b7411b5697a34170c5a92f0dfc6763a6ef12b4abed6a66437cb07b1ba45a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delaySeconds", value)

    @builtins.property
    @jsii.member(jsii_name="loggingEnabled")
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loggingEnabled"))

    @logging_enabled.setter
    def logging_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82985804cde7e67f3bf8d6a73890a396bdbf1971262220d41edcf958e4ea9e86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loggingEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="maximumMessageSize")
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maximumMessageSize"))

    @maximum_message_size.setter
    def maximum_message_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1d2f148b8d676ad7c113b71f26382df67affb65930bf015e219279184f5e339)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maximumMessageSize", value)

    @builtins.property
    @jsii.member(jsii_name="messageRetentionPeriod")
    def message_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "messageRetentionPeriod"))

    @message_retention_period.setter
    def message_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee63bb6104f98cc00660a8c9811dcdd35ac67893efaef205b502d543c636d739)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "messageRetentionPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="pollingWaitSeconds")
    def polling_wait_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pollingWaitSeconds"))

    @polling_wait_seconds.setter
    def polling_wait_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1533bf08bb1a6b513bcb692b83388094ceeb4d7d14667ffdd5c4eaa8e04990f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pollingWaitSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="visibilityTimeout")
    def visibility_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "visibilityTimeout"))

    @visibility_timeout.setter
    def visibility_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a2db31c234230eb23c40a5c35c360633265667e8e4eac91b612e9ef10fd1a88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "visibilityTimeout", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mns.RosQueueProps",
    jsii_struct_bases=[],
    name_mapping={
        "queue_name": "queueName",
        "delay_seconds": "delaySeconds",
        "logging_enabled": "loggingEnabled",
        "maximum_message_size": "maximumMessageSize",
        "message_retention_period": "messageRetentionPeriod",
        "polling_wait_seconds": "pollingWaitSeconds",
        "visibility_timeout": "visibilityTimeout",
    },
)
class RosQueueProps:
    def __init__(
        self,
        *,
        queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        message_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        polling_wait_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        visibility_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Queue``.

        :param queue_name: 
        :param delay_seconds: 
        :param logging_enabled: 
        :param maximum_message_size: 
        :param message_retention_period: 
        :param polling_wait_seconds: 
        :param visibility_timeout: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb02b6f360a7809decd207d55ca4b197951877b219a2b3843a717a03b05e47d9)
            check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
            check_type(argname="argument delay_seconds", value=delay_seconds, expected_type=type_hints["delay_seconds"])
            check_type(argname="argument logging_enabled", value=logging_enabled, expected_type=type_hints["logging_enabled"])
            check_type(argname="argument maximum_message_size", value=maximum_message_size, expected_type=type_hints["maximum_message_size"])
            check_type(argname="argument message_retention_period", value=message_retention_period, expected_type=type_hints["message_retention_period"])
            check_type(argname="argument polling_wait_seconds", value=polling_wait_seconds, expected_type=type_hints["polling_wait_seconds"])
            check_type(argname="argument visibility_timeout", value=visibility_timeout, expected_type=type_hints["visibility_timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "queue_name": queue_name,
        }
        if delay_seconds is not None:
            self._values["delay_seconds"] = delay_seconds
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size
        if message_retention_period is not None:
            self._values["message_retention_period"] = message_retention_period
        if polling_wait_seconds is not None:
            self._values["polling_wait_seconds"] = polling_wait_seconds
        if visibility_timeout is not None:
            self._values["visibility_timeout"] = visibility_timeout

    @builtins.property
    def queue_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: queueName: Queue name
        '''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delay_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        '''
        result = self._values.get("delay_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def message_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        '''
        result = self._values.get("message_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def polling_wait_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        '''
        result = self._values.get("polling_wait_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def visibility_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        result = self._values.get("visibility_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSubscription(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.RosSubscription",
):
    '''A ROS template type:  ``ALIYUN::MNS::Subscription``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSubscriptionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Subscription``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83952c9b96ab5a12ca3bad3851ee6350de85cd6ccb440039ddc1c001092833ea)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a283b2bf99189be7ca1ced69c05a727a559e24a833b7f184c746f4148fb9e3e0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionName")
    def attr_subscription_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscriptionName: Subscription name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionName"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionUrl")
    def attr_subscription_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscriptionUrl: URL of created subscription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicName: Topic name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9e2dbe3d7694bc66dbd6193f2c2343729f5c92c78d3339d7a2f9a164e136e55a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpoint")
    def endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        endpoint: Terminal address of the message recipient for the created subscription.
        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpoint"))

    @endpoint.setter
    def endpoint(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32c7302d64229ecefc0340616f40b20af136ef0362e909df03844f6250a6347a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpoint", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionName")
    def subscription_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionName: Subscription name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "subscriptionName"))

    @subscription_name.setter
    def subscription_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45c6ef3651f571fe074f53508294a2af96bf963723295e161d47ba800f367fa6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionName", value)

    @builtins.property
    @jsii.member(jsii_name="topicName")
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a09689e0ec0c5769d8447fd3ce900053dee344fae9769c2eec91bedc16489135)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicName", value)

    @builtins.property
    @jsii.member(jsii_name="filterTag")
    def filter_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filterTag"))

    @filter_tag.setter
    def filter_tag(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a34dbe80cdafb696676e4190269b364fc9b01f175196f41cca79db3f6f81f603)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filterTag", value)

    @builtins.property
    @jsii.member(jsii_name="notifyContentFormat")
    def notify_content_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "notifyContentFormat"))

    @notify_content_format.setter
    def notify_content_format(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5617f915d41621ea94206317dda906b578c3729b167ff70c80193534639053e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "notifyContentFormat", value)

    @builtins.property
    @jsii.member(jsii_name="notifyStrategy")
    def notify_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "notifyStrategy"))

    @notify_strategy.setter
    def notify_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff890117df2d2ed0b1be400a0c5ab16de2fdc20584878da1e16c50d9297cfe14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "notifyStrategy", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mns.RosSubscriptionProps",
    jsii_struct_bases=[],
    name_mapping={
        "endpoint": "endpoint",
        "subscription_name": "subscriptionName",
        "topic_name": "topicName",
        "filter_tag": "filterTag",
        "notify_content_format": "notifyContentFormat",
        "notify_strategy": "notifyStrategy",
    },
)
class RosSubscriptionProps:
    def __init__(
        self,
        *,
        endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        filter_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notify_content_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notify_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Subscription``.

        :param endpoint: 
        :param subscription_name: 
        :param topic_name: 
        :param filter_tag: 
        :param notify_content_format: 
        :param notify_strategy: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a916d99c0da03eec942ea71d10e4a0f3599d91f36bc45567a5ca1f9ad6e50953)
            check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
            check_type(argname="argument subscription_name", value=subscription_name, expected_type=type_hints["subscription_name"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument filter_tag", value=filter_tag, expected_type=type_hints["filter_tag"])
            check_type(argname="argument notify_content_format", value=notify_content_format, expected_type=type_hints["notify_content_format"])
            check_type(argname="argument notify_strategy", value=notify_strategy, expected_type=type_hints["notify_strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "endpoint": endpoint,
            "subscription_name": subscription_name,
            "topic_name": topic_name,
        }
        if filter_tag is not None:
            self._values["filter_tag"] = filter_tag
        if notify_content_format is not None:
            self._values["notify_content_format"] = notify_content_format
        if notify_strategy is not None:
            self._values["notify_strategy"] = notify_strategy

    @builtins.property
    def endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        endpoint: Terminal address of the message recipient for the created subscription.
        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        '''
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionName: Subscription name
        '''
        result = self._values.get("subscription_name")
        assert result is not None, "Required property 'subscription_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def filter_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        '''
        result = self._values.get("filter_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notify_content_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        '''
        result = self._values.get("notify_content_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notify_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        result = self._values.get("notify_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSubscriptionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.RosTopic",
):
    '''A ROS template type:  ``ALIYUN::MNS::Topic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07e7073cfb7a61f185e84bee9ea3de6eea82675ef96a4111cbf4ea13c7166c15)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea4727b584978472688c5d67393aab62f801fa223c2c54461736e0be7d027ed0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicName: Topic name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicUrl")
    def attr_topic_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicUrl: URL of created topic
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicUrl"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__602ca0162239cea4dda8ccf10ba7241c16394987718a5988a05583a6ae4e7af8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="topicName")
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__333ae6f17531f0810fe241e162d050ad572c0201a201860e574ce8b5448880d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicName", value)

    @builtins.property
    @jsii.member(jsii_name="loggingEnabled")
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loggingEnabled"))

    @logging_enabled.setter
    def logging_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2dd027e5c21808c52dd7e1ae7bc244573fc2a3191afb8a9f52c65a334e1b668)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loggingEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="maximumMessageSize")
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maximumMessageSize"))

    @maximum_message_size.setter
    def maximum_message_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e01386d54e423dabc90b1332de947cdbee8b142d2bce93158661279bedf29314)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maximumMessageSize", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mns.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "topic_name": "topicName",
        "logging_enabled": "loggingEnabled",
        "maximum_message_size": "maximumMessageSize",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Topic``.

        :param topic_name: 
        :param logging_enabled: 
        :param maximum_message_size: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6c2e5f7aa5df3ed5d4978d18218976bc66bcfc74cd6e940a1c2aea80580c056)
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument logging_enabled", value=logging_enabled, expected_type=type_hints["logging_enabled"])
            check_type(argname="argument maximum_message_size", value=maximum_message_size, expected_type=type_hints["maximum_message_size"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "topic_name": topic_name,
        }
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Subscription(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Subscription",
):
    '''A ROS resource type:  ``ALIYUN::MNS::Subscription``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SubscriptionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Subscription``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b3d8d19fc3491db82d674ef7bdf2a5a245db7f95bc4cfbd0e280d0aea507f9e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionName")
    def attr_subscription_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscriptionName: Subscription name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionName"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionUrl")
    def attr_subscription_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscriptionUrl: URL of created subscription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TopicName: Topic name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mns.SubscriptionProps",
    jsii_struct_bases=[],
    name_mapping={
        "endpoint": "endpoint",
        "subscription_name": "subscriptionName",
        "topic_name": "topicName",
        "filter_tag": "filterTag",
        "notify_content_format": "notifyContentFormat",
        "notify_strategy": "notifyStrategy",
    },
)
class SubscriptionProps:
    def __init__(
        self,
        *,
        endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        filter_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notify_content_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notify_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Subscription``.

        :param endpoint: Property endpoint: Terminal address of the message recipient for the created subscription. Currently, four types of endpoints are supported: 1. HttpEndpoint, which must be prefixed with "http://"; 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        :param subscription_name: Property subscriptionName: Subscription name.
        :param topic_name: Property topicName: Topic name.
        :param filter_tag: Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
        :param notify_content_format: Property notifyContentFormat: Format of the message content pushed to the endpoint. XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        :param notify_strategy: Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint. BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52df6a37d5734787845f4c6da8d40ce6b3dfa4d1724de55905c71e3b5c07891f)
            check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
            check_type(argname="argument subscription_name", value=subscription_name, expected_type=type_hints["subscription_name"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument filter_tag", value=filter_tag, expected_type=type_hints["filter_tag"])
            check_type(argname="argument notify_content_format", value=notify_content_format, expected_type=type_hints["notify_content_format"])
            check_type(argname="argument notify_strategy", value=notify_strategy, expected_type=type_hints["notify_strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "endpoint": endpoint,
            "subscription_name": subscription_name,
            "topic_name": topic_name,
        }
        if filter_tag is not None:
            self._values["filter_tag"] = filter_tag
        if notify_content_format is not None:
            self._values["notify_content_format"] = notify_content_format
        if notify_strategy is not None:
            self._values["notify_strategy"] = notify_strategy

    @builtins.property
    def endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpoint: Terminal address of the message recipient for the created subscription.

        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        '''
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property subscriptionName: Subscription name.'''
        result = self._values.get("subscription_name")
        assert result is not None, "Required property 'subscription_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topicName: Topic name.'''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def filter_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.'''
        result = self._values.get("filter_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notify_content_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property notifyContentFormat: Format of the message content pushed to the endpoint.

        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        '''
        result = self._values.get("notify_content_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notify_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.

        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        result = self._values.get("notify_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SubscriptionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topic(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Topic",
):
    '''A ROS resource type:  ``ALIYUN::MNS::Topic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Topic``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41b90bb79d86cdbd2d0bdc0fadf1cb1db36abf9fd7e6b8502d77caaaad4dc432)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TopicName: Topic name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicUrl")
    def attr_topic_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TopicUrl: URL of created topic.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicUrl"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mns.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "topic_name": "topicName",
        "logging_enabled": "loggingEnabled",
        "maximum_message_size": "maximumMessageSize",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Topic``.

        :param topic_name: Property topicName: Topic name.
        :param logging_enabled: Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. The default value is false
        :param maximum_message_size: Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes. An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8824d4a7faa9f616c520bf348dcfcdc5abdca53d5e61d0ef751d4a20a7729a9e)
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument logging_enabled", value=logging_enabled, expected_type=type_hints["logging_enabled"])
            check_type(argname="argument maximum_message_size", value=maximum_message_size, expected_type=type_hints["maximum_message_size"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "topic_name": topic_name,
        }
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topicName: Topic name.'''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loggingEnabled: Whether to enable log management.

        "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.

        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Queue",
    "QueueProps",
    "RosQueue",
    "RosQueueProps",
    "RosSubscription",
    "RosSubscriptionProps",
    "RosTopic",
    "RosTopicProps",
    "Subscription",
    "SubscriptionProps",
    "Topic",
    "TopicProps",
]

publication.publish()

def _typecheckingstub__dc734d712b9d2ea1c702bece02e32a920c336c54e6f2af5e749881c57cb46502(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[QueueProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a0746398da24aec89085303e83ed0992921c1f0d480d4371af0d2ce16de68ff(
    *,
    queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    message_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polling_wait_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    visibility_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eae8b0a235a1760a4a068319fd4c7d41920e60d38da35da03088c7785c519c37(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosQueueProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3537a6a3d905b35115e0b4daa24b30a89cb8f7b761b4b6e6a979b12018280e90(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b69a5c162718e9ad6091f4da9e314de0a463e348510066479c20a5dcb8373af(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__849bb27528bacdc62edbb5e1311b943114da24e0b2a32a7dd83925aedebc163e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b803b7411b5697a34170c5a92f0dfc6763a6ef12b4abed6a66437cb07b1ba45a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82985804cde7e67f3bf8d6a73890a396bdbf1971262220d41edcf958e4ea9e86(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1d2f148b8d676ad7c113b71f26382df67affb65930bf015e219279184f5e339(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee63bb6104f98cc00660a8c9811dcdd35ac67893efaef205b502d543c636d739(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1533bf08bb1a6b513bcb692b83388094ceeb4d7d14667ffdd5c4eaa8e04990f9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a2db31c234230eb23c40a5c35c360633265667e8e4eac91b612e9ef10fd1a88(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb02b6f360a7809decd207d55ca4b197951877b219a2b3843a717a03b05e47d9(
    *,
    queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    message_retention_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polling_wait_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    visibility_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83952c9b96ab5a12ca3bad3851ee6350de85cd6ccb440039ddc1c001092833ea(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSubscriptionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a283b2bf99189be7ca1ced69c05a727a559e24a833b7f184c746f4148fb9e3e0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e2dbe3d7694bc66dbd6193f2c2343729f5c92c78d3339d7a2f9a164e136e55a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32c7302d64229ecefc0340616f40b20af136ef0362e909df03844f6250a6347a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45c6ef3651f571fe074f53508294a2af96bf963723295e161d47ba800f367fa6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a09689e0ec0c5769d8447fd3ce900053dee344fae9769c2eec91bedc16489135(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a34dbe80cdafb696676e4190269b364fc9b01f175196f41cca79db3f6f81f603(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5617f915d41621ea94206317dda906b578c3729b167ff70c80193534639053e4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff890117df2d2ed0b1be400a0c5ab16de2fdc20584878da1e16c50d9297cfe14(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a916d99c0da03eec942ea71d10e4a0f3599d91f36bc45567a5ca1f9ad6e50953(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    filter_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notify_content_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notify_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07e7073cfb7a61f185e84bee9ea3de6eea82675ef96a4111cbf4ea13c7166c15(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea4727b584978472688c5d67393aab62f801fa223c2c54461736e0be7d027ed0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__602ca0162239cea4dda8ccf10ba7241c16394987718a5988a05583a6ae4e7af8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__333ae6f17531f0810fe241e162d050ad572c0201a201860e574ce8b5448880d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2dd027e5c21808c52dd7e1ae7bc244573fc2a3191afb8a9f52c65a334e1b668(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e01386d54e423dabc90b1332de947cdbee8b142d2bce93158661279bedf29314(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6c2e5f7aa5df3ed5d4978d18218976bc66bcfc74cd6e940a1c2aea80580c056(
    *,
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b3d8d19fc3491db82d674ef7bdf2a5a245db7f95bc4cfbd0e280d0aea507f9e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SubscriptionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52df6a37d5734787845f4c6da8d40ce6b3dfa4d1724de55905c71e3b5c07891f(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    filter_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notify_content_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notify_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41b90bb79d86cdbd2d0bdc0fadf1cb1db36abf9fd7e6b8502d77caaaad4dc432(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8824d4a7faa9f616c520bf348dcfcdc5abdca53d5e61d0ef751d4a20a7729a9e(
    *,
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logging_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maximum_message_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
