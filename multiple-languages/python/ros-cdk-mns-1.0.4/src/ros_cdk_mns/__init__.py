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

from ._jsii import *

import ros_cdk_core


class Queue(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Queue",
):
    '''A ROS resource type:  ``ALIYUN::MNS::Queue``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "QueueProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> ros_cdk_core.IResolvable:
        '''Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute QueueName: Queue name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQueueName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQueueUrl")
    def attr_queue_url(self) -> ros_cdk_core.IResolvable:
        '''Attribute QueueUrl: URL of created queue.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQueueUrl"))


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
        queue_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delay_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        message_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        polling_wait_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        visibility_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def queue_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property queueName: Queue name.'''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delay_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property delaySeconds: It is measured in seconds.

        All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        '''
        result = self._values.get("delay_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property loggingEnabled: Whether to enable log management.

        "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.

        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def message_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.

        After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        '''
        result = self._values.get("message_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def polling_wait_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.

        Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        '''
        result = self._values.get("polling_wait_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def visibility_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.

        Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        result = self._values.get("visibility_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQueue(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.RosQueue",
):
    '''A ROS template type:  ``ALIYUN::MNS::Queue``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosQueueProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Queue``.

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
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: QueueName: Queue name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQueueName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQueueUrl")
    def attr_queue_url(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: QueueUrl: URL of created queue
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQueueUrl"))

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
    @jsii.member(jsii_name="queueName")
    def queue_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: queueName: Queue name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "queueName"))

    @queue_name.setter
    def queue_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "queueName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="delaySeconds")
    def delay_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "delaySeconds"))

    @delay_seconds.setter
    def delay_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "delaySeconds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loggingEnabled")
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "loggingEnabled"))

    @logging_enabled.setter
    def logging_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loggingEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maximumMessageSize")
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maximumMessageSize"))

    @maximum_message_size.setter
    def maximum_message_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maximumMessageSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="messageRetentionPeriod")
    def message_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "messageRetentionPeriod"))

    @message_retention_period.setter
    def message_retention_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "messageRetentionPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pollingWaitSeconds")
    def polling_wait_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "pollingWaitSeconds"))

    @polling_wait_seconds.setter
    def polling_wait_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pollingWaitSeconds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="visibilityTimeout")
    def visibility_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "visibilityTimeout"))

    @visibility_timeout.setter
    def visibility_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        queue_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delay_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        message_retention_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        polling_wait_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        visibility_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def queue_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: queueName: Queue name
        '''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delay_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        '''
        result = self._values.get("delay_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def message_retention_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        '''
        result = self._values.get("message_retention_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def polling_wait_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        '''
        result = self._values.get("polling_wait_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def visibility_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        '''
        result = self._values.get("visibility_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSubscription(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.RosSubscription",
):
    '''A ROS template type:  ``ALIYUN::MNS::Subscription``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSubscriptionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Subscription``.

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
    @jsii.member(jsii_name="attrSubscriptionName")
    def attr_subscription_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SubscriptionName: Subscription name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubscriptionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubscriptionUrl")
    def attr_subscription_url(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SubscriptionUrl: URL of created subscription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubscriptionUrl"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TopicName: Topic name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicName"))

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
    @jsii.member(jsii_name="endpoint")
    def endpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        endpoint: Terminal address of the message recipient for the created subscription.
        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "endpoint"))

    @endpoint.setter
    def endpoint(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "endpoint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="subscriptionName")
    def subscription_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: subscriptionName: Subscription name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "subscriptionName"))

    @subscription_name.setter
    def subscription_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "subscriptionName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topicName")
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topicName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="filterTag")
    def filter_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "filterTag"))

    @filter_tag.setter
    def filter_tag(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "filterTag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="notifyContentFormat")
    def notify_content_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "notifyContentFormat"))

    @notify_content_format.setter
    def notify_content_format(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "notifyContentFormat", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="notifyStrategy")
    def notify_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "notifyStrategy"))

    @notify_strategy.setter
    def notify_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        endpoint: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        subscription_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        filter_tag: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        notify_content_format: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        notify_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Subscription``.

        :param endpoint: 
        :param subscription_name: 
        :param topic_name: 
        :param filter_tag: 
        :param notify_content_format: 
        :param notify_strategy: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def endpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def subscription_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: subscriptionName: Subscription name
        '''
        result = self._values.get("subscription_name")
        assert result is not None, "Required property 'subscription_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def filter_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        '''
        result = self._values.get("filter_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def notify_content_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        '''
        result = self._values.get("notify_content_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def notify_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        result = self._values.get("notify_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSubscriptionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.RosTopic",
):
    '''A ROS template type:  ``ALIYUN::MNS::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MNS::Topic``.

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
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TopicName: Topic name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicUrl")
    def attr_topic_url(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TopicUrl: URL of created topic
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicUrl"))

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
    @jsii.member(jsii_name="topicName")
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topicName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loggingEnabled")
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "loggingEnabled"))

    @logging_enabled.setter
    def logging_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loggingEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maximumMessageSize")
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maximumMessageSize"))

    @maximum_message_size.setter
    def maximum_message_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        topic_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Topic``.

        :param topic_name: 
        :param logging_enabled: 
        :param maximum_message_size: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "topic_name": topic_name,
        }
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size

    @builtins.property
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: topicName: Topic name
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Subscription(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Subscription",
):
    '''A ROS resource type:  ``ALIYUN::MNS::Subscription``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SubscriptionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubscriptionName")
    def attr_subscription_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute SubscriptionName: Subscription name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubscriptionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubscriptionUrl")
    def attr_subscription_url(self) -> ros_cdk_core.IResolvable:
        '''Attribute SubscriptionUrl: URL of created subscription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubscriptionUrl"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TopicName: Topic name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicName"))


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
        endpoint: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        subscription_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        filter_tag: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        notify_content_format: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        notify_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Subscription``.

        :param endpoint: Property endpoint: Terminal address of the message recipient for the created subscription. Currently, four types of endpoints are supported: 1. HttpEndpoint, which must be prefixed with "http://"; 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        :param subscription_name: Property subscriptionName: Subscription name.
        :param topic_name: Property topicName: Topic name.
        :param filter_tag: Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
        :param notify_content_format: Property notifyContentFormat: Format of the message content pushed to the endpoint. XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        :param notify_strategy: Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint. BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def endpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property endpoint: Terminal address of the message recipient for the created subscription.

        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        '''
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def subscription_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property subscriptionName: Subscription name.'''
        result = self._values.get("subscription_name")
        assert result is not None, "Required property 'subscription_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property topicName: Topic name.'''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def filter_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.'''
        result = self._values.get("filter_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def notify_content_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property notifyContentFormat: Format of the message content pushed to the endpoint.

        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        '''
        result = self._values.get("notify_content_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def notify_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.

        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        '''
        result = self._values.get("notify_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SubscriptionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topic(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Topic",
):
    '''A ROS resource type:  ``ALIYUN::MNS::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> ros_cdk_core.IResolvable:
        '''Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArnWithSlash"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TopicName: Topic name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicUrl")
    def attr_topic_url(self) -> ros_cdk_core.IResolvable:
        '''Attribute TopicUrl: URL of created topic.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicUrl"))


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
        topic_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MNS::Topic``.

        :param topic_name: Property topicName: Topic name.
        :param logging_enabled: Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. The default value is false
        :param maximum_message_size: Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes. An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "topic_name": topic_name,
        }
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size

    @builtins.property
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property topicName: Topic name.'''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property loggingEnabled: Whether to enable log management.

        "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        '''
        result = self._values.get("logging_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maximum_message_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.

        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        '''
        result = self._values.get("maximum_message_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
