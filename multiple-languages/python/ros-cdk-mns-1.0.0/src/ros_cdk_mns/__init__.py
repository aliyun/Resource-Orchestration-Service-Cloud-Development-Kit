"""
## Aliyun ROS MNS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_mns as MNS
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


class Queue(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mns.Queue",
):
    """A ROS resource type:  ``ALIYUN::MNS::Queue``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "QueueProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MNS::Queue``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Queue, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> typing.Any:
        """
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
        """
        return jsii.get(self, "attrArnWithSlash")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQueueUrl")
    def attr_queue_url(self) -> typing.Any:
        """
        :Attribute: QueueUrl: URL of created queue
        """
        return jsii.get(self, "attrQueueUrl")


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
        queue_name: builtins.str,
        delay_seconds: typing.Optional[jsii.Number] = None,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[jsii.Number] = None,
        message_retention_period: typing.Optional[jsii.Number] = None,
        polling_wait_seconds: typing.Optional[jsii.Number] = None,
        visibility_timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MNS::Queue``.

        :param queue_name: 
        :param delay_seconds: 
        :param logging_enabled: 
        :param maximum_message_size: 
        :param message_retention_period: 
        :param polling_wait_seconds: 
        :param visibility_timeout: 
        """
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
    def queue_name(self) -> builtins.str:
        """
        :Property: queueName: Queue name
        """
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return result

    @builtins.property
    def delay_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        """
        result = self._values.get("delay_seconds")
        return result

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        """
        result = self._values.get("logging_enabled")
        return result

    @builtins.property
    def maximum_message_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        """
        result = self._values.get("maximum_message_size")
        return result

    @builtins.property
    def message_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        """
        result = self._values.get("message_retention_period")
        return result

    @builtins.property
    def polling_wait_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        """
        result = self._values.get("polling_wait_seconds")
        return result

    @builtins.property
    def visibility_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        """
        result = self._values.get("visibility_timeout")
        return result

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
    """A ROS template type:  ``ALIYUN::MNS::Queue``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosQueueProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MNS::Queue``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosQueue, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> typing.Any:
        """
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
        """
        return jsii.get(self, "attrArnWithSlash")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQueueUrl")
    def attr_queue_url(self) -> typing.Any:
        """
        :Attribute: QueueUrl: URL of created queue
        """
        return jsii.get(self, "attrQueueUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="queueName")
    def queue_name(self) -> builtins.str:
        """
        :Property: queueName: Queue name
        """
        return jsii.get(self, "queueName")

    @queue_name.setter # type: ignore
    def queue_name(self, value: builtins.str) -> None:
        jsii.set(self, "queueName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="delaySeconds")
    def delay_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        """
        return jsii.get(self, "delaySeconds")

    @delay_seconds.setter # type: ignore
    def delay_seconds(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "delaySeconds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loggingEnabled")
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        """
        return jsii.get(self, "loggingEnabled")

    @logging_enabled.setter # type: ignore
    def logging_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loggingEnabled", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maximumMessageSize")
    def maximum_message_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        """
        return jsii.get(self, "maximumMessageSize")

    @maximum_message_size.setter # type: ignore
    def maximum_message_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "maximumMessageSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="messageRetentionPeriod")
    def message_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        """
        return jsii.get(self, "messageRetentionPeriod")

    @message_retention_period.setter # type: ignore
    def message_retention_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "messageRetentionPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pollingWaitSeconds")
    def polling_wait_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        """
        return jsii.get(self, "pollingWaitSeconds")

    @polling_wait_seconds.setter # type: ignore
    def polling_wait_seconds(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "pollingWaitSeconds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="visibilityTimeout")
    def visibility_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        """
        return jsii.get(self, "visibilityTimeout")

    @visibility_timeout.setter # type: ignore
    def visibility_timeout(self, value: typing.Optional[jsii.Number]) -> None:
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
        queue_name: builtins.str,
        delay_seconds: typing.Optional[jsii.Number] = None,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[jsii.Number] = None,
        message_retention_period: typing.Optional[jsii.Number] = None,
        polling_wait_seconds: typing.Optional[jsii.Number] = None,
        visibility_timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MNS::Queue``.

        :param queue_name: 
        :param delay_seconds: 
        :param logging_enabled: 
        :param maximum_message_size: 
        :param message_retention_period: 
        :param polling_wait_seconds: 
        :param visibility_timeout: 
        """
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
    def queue_name(self) -> builtins.str:
        """
        :Property: queueName: Queue name
        """
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return result

    @builtins.property
    def delay_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
        An integer between 0 and 604800 (7 days). The default value is 0
        """
        result = self._values.get("delay_seconds")
        return result

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        """
        result = self._values.get("logging_enabled")
        return result

    @builtins.property
    def maximum_message_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
        An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
        """
        result = self._values.get("maximum_message_size")
        return result

    @builtins.property
    def message_retention_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
        An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
        """
        result = self._values.get("message_retention_period")
        return result

    @builtins.property
    def polling_wait_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
        An integer between 0 and 30 seconds. The default value is 0 (seconds)
        """
        result = self._values.get("polling_wait_seconds")
        return result

    @builtins.property
    def visibility_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
        An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
        """
        result = self._values.get("visibility_timeout")
        return result

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
    """A ROS template type:  ``ALIYUN::MNS::Subscription``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSubscriptionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MNS::Subscription``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSubscription, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSubscriptionUrl")
    def attr_subscription_url(self) -> typing.Any:
        """
        :Attribute: SubscriptionUrl: URL of created subscription
        """
        return jsii.get(self, "attrSubscriptionUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpoint")
    def endpoint(self) -> builtins.str:
        """
        :Property:

        endpoint: Terminal address of the message recipient for the created subscription.
        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        """
        return jsii.get(self, "endpoint")

    @endpoint.setter # type: ignore
    def endpoint(self, value: builtins.str) -> None:
        jsii.set(self, "endpoint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="subscriptionName")
    def subscription_name(self) -> builtins.str:
        """
        :Property: subscriptionName: Subscription name
        """
        return jsii.get(self, "subscriptionName")

    @subscription_name.setter # type: ignore
    def subscription_name(self, value: builtins.str) -> None:
        jsii.set(self, "subscriptionName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topicName")
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: Topic name
        """
        return jsii.get(self, "topicName")

    @topic_name.setter # type: ignore
    def topic_name(self, value: builtins.str) -> None:
        jsii.set(self, "topicName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="filterTag")
    def filter_tag(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        """
        return jsii.get(self, "filterTag")

    @filter_tag.setter # type: ignore
    def filter_tag(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "filterTag", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="notifyContentFormat")
    def notify_content_format(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        """
        return jsii.get(self, "notifyContentFormat")

    @notify_content_format.setter # type: ignore
    def notify_content_format(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "notifyContentFormat", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="notifyStrategy")
    def notify_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        """
        return jsii.get(self, "notifyStrategy")

    @notify_strategy.setter # type: ignore
    def notify_strategy(self, value: typing.Optional[builtins.str]) -> None:
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
        endpoint: builtins.str,
        subscription_name: builtins.str,
        topic_name: builtins.str,
        filter_tag: typing.Optional[builtins.str] = None,
        notify_content_format: typing.Optional[builtins.str] = None,
        notify_strategy: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MNS::Subscription``.

        :param endpoint: 
        :param subscription_name: 
        :param topic_name: 
        :param filter_tag: 
        :param notify_content_format: 
        :param notify_strategy: 
        """
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
    def endpoint(self) -> builtins.str:
        """
        :Property:

        endpoint: Terminal address of the message recipient for the created subscription.
        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        """
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return result

    @builtins.property
    def subscription_name(self) -> builtins.str:
        """
        :Property: subscriptionName: Subscription name
        """
        result = self._values.get("subscription_name")
        assert result is not None, "Required property 'subscription_name' is missing"
        return result

    @builtins.property
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: Topic name
        """
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return result

    @builtins.property
    def filter_tag(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        """
        result = self._values.get("filter_tag")
        return result

    @builtins.property
    def notify_content_format(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        """
        result = self._values.get("notify_content_format")
        return result

    @builtins.property
    def notify_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        """
        result = self._values.get("notify_strategy")
        return result

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
    """A ROS template type:  ``ALIYUN::MNS::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MNS::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTopic, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> typing.Any:
        """
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
        """
        return jsii.get(self, "attrArnWithSlash")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> typing.Any:
        """
        :Attribute: TopicName: Topic name
        """
        return jsii.get(self, "attrTopicName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicUrl")
    def attr_topic_url(self) -> typing.Any:
        """
        :Attribute: TopicUrl: URL of created topic
        """
        return jsii.get(self, "attrTopicUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topicName")
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: Topic name
        """
        return jsii.get(self, "topicName")

    @topic_name.setter # type: ignore
    def topic_name(self, value: builtins.str) -> None:
        jsii.set(self, "topicName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loggingEnabled")
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        """
        return jsii.get(self, "loggingEnabled")

    @logging_enabled.setter # type: ignore
    def logging_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loggingEnabled", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maximumMessageSize")
    def maximum_message_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        """
        return jsii.get(self, "maximumMessageSize")

    @maximum_message_size.setter # type: ignore
    def maximum_message_size(self, value: typing.Optional[jsii.Number]) -> None:
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
        topic_name: builtins.str,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MNS::Topic``.

        :param topic_name: 
        :param logging_enabled: 
        :param maximum_message_size: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "topic_name": topic_name,
        }
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size

    @builtins.property
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: Topic name
        """
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return result

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        """
        result = self._values.get("logging_enabled")
        return result

    @builtins.property
    def maximum_message_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        """
        result = self._values.get("maximum_message_size")
        return result

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
    """A ROS resource type:  ``ALIYUN::MNS::Subscription``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SubscriptionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MNS::Subscription``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Subscription, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSubscriptionUrl")
    def attr_subscription_url(self) -> typing.Any:
        """
        :Attribute: SubscriptionUrl: URL of created subscription
        """
        return jsii.get(self, "attrSubscriptionUrl")


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
        endpoint: builtins.str,
        subscription_name: builtins.str,
        topic_name: builtins.str,
        filter_tag: typing.Optional[builtins.str] = None,
        notify_content_format: typing.Optional[builtins.str] = None,
        notify_strategy: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MNS::Subscription``.

        :param endpoint: 
        :param subscription_name: 
        :param topic_name: 
        :param filter_tag: 
        :param notify_content_format: 
        :param notify_strategy: 
        """
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
    def endpoint(self) -> builtins.str:
        """
        :Property:

        endpoint: Terminal address of the message recipient for the created subscription.
        Currently, four types of endpoints are supported:

        1. HttpEndpoint, which must be prefixed with "http://";
        2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
        3. MailEndpoint, in the format of mail:directmail:{MailAddress};
        4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        """
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return result

    @builtins.property
    def subscription_name(self) -> builtins.str:
        """
        :Property: subscriptionName: Subscription name
        """
        result = self._values.get("subscription_name")
        assert result is not None, "Required property 'subscription_name' is missing"
        return result

    @builtins.property
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: Topic name
        """
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return result

    @builtins.property
    def filter_tag(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        The value is a string of no more than 16 characters. The default value is no message filter.
        """
        result = self._values.get("filter_tag")
        return result

    @builtins.property
    def notify_content_format(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notifyContentFormat: Format of the message content pushed to the endpoint.
        XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        """
        result = self._values.get("notify_content_format")
        return result

    @builtins.property
    def notify_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        """
        result = self._values.get("notify_strategy")
        return result

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
    """A ROS resource type:  ``ALIYUN::MNS::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MNS::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Topic, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArnWithSlash")
    def attr_arn_with_slash(self) -> typing.Any:
        """
        :Attribute: ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
        """
        return jsii.get(self, "attrArnWithSlash")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> typing.Any:
        """
        :Attribute: TopicName: Topic name
        """
        return jsii.get(self, "attrTopicName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicUrl")
    def attr_topic_url(self) -> typing.Any:
        """
        :Attribute: TopicUrl: URL of created topic
        """
        return jsii.get(self, "attrTopicUrl")


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
        topic_name: builtins.str,
        logging_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_message_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MNS::Topic``.

        :param topic_name: 
        :param logging_enabled: 
        :param maximum_message_size: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "topic_name": topic_name,
        }
        if logging_enabled is not None:
            self._values["logging_enabled"] = logging_enabled
        if maximum_message_size is not None:
            self._values["maximum_message_size"] = maximum_message_size

    @builtins.property
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: Topic name
        """
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return result

    @builtins.property
    def logging_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        The default value is false
        """
        result = self._values.get("logging_enabled")
        return result

    @builtins.property
    def maximum_message_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
        An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        """
        result = self._values.get("maximum_message_size")
        return result

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
