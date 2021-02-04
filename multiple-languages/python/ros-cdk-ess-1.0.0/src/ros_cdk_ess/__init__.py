"""
## Aliyun ROS ESS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ess as ESS
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


class AlarmTask(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.AlarmTask",
):
    """A ROS resource type:  ``ALIYUN::ESS::AlarmTask``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AlarmTaskProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::AlarmTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AlarmTask, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAlarmTaskId")
    def attr_alarm_task_id(self) -> typing.Any:
        """
        :Attribute: AlarmTaskId: The alarm task ID
        """
        return jsii.get(self, "attrAlarmTaskId")


class AlarmTaskEnable(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.AlarmTaskEnable",
):
    """A ROS resource type:  ``ALIYUN::ESS::AlarmTaskEnable``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AlarmTaskEnableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::AlarmTaskEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AlarmTaskEnable, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.AlarmTaskEnableProps",
    jsii_struct_bases=[],
    name_mapping={"alarm_task_id": "alarmTaskId", "enable": "enable"},
)
class AlarmTaskEnableProps:
    def __init__(
        self,
        *,
        alarm_task_id: builtins.str,
        enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::AlarmTaskEnable``.

        :param alarm_task_id: 
        :param enable: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "alarm_task_id": alarm_task_id,
            "enable": enable,
        }

    @builtins.property
    def alarm_task_id(self) -> builtins.str:
        """
        :Property: alarmTaskId: The id of alarm task.
        """
        result = self._values.get("alarm_task_id")
        assert result is not None, "Required property 'alarm_task_id' is missing"
        return result

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        """
        :Property: enable: Enable alarm task or not
        """
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlarmTaskEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.AlarmTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "alarm_action": "alarmAction",
        "metric_name": "metricName",
        "scaling_group_id": "scalingGroupId",
        "threshold": "threshold",
        "comparison_operator": "comparisonOperator",
        "description": "description",
        "dimensions": "dimensions",
        "evaluation_count": "evaluationCount",
        "group_id": "groupId",
        "metric_type": "metricType",
        "name": "name",
        "period": "period",
        "statistics": "statistics",
    },
)
class AlarmTaskProps:
    def __init__(
        self,
        *,
        alarm_action: typing.List[builtins.str],
        metric_name: builtins.str,
        scaling_group_id: builtins.str,
        threshold: jsii.Number,
        comparison_operator: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        dimensions: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlarmTask.DimensionsProperty"]]]] = None,
        evaluation_count: typing.Optional[jsii.Number] = None,
        group_id: typing.Optional[jsii.Number] = None,
        metric_type: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        statistics: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::AlarmTask``.

        :param alarm_action: 
        :param metric_name: 
        :param scaling_group_id: 
        :param threshold: 
        :param comparison_operator: 
        :param description: 
        :param dimensions: 
        :param evaluation_count: 
        :param group_id: 
        :param metric_type: 
        :param name: 
        :param period: 
        :param statistics: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "alarm_action": alarm_action,
            "metric_name": metric_name,
            "scaling_group_id": scaling_group_id,
            "threshold": threshold,
        }
        if comparison_operator is not None:
            self._values["comparison_operator"] = comparison_operator
        if description is not None:
            self._values["description"] = description
        if dimensions is not None:
            self._values["dimensions"] = dimensions
        if evaluation_count is not None:
            self._values["evaluation_count"] = evaluation_count
        if group_id is not None:
            self._values["group_id"] = group_id
        if metric_type is not None:
            self._values["metric_type"] = metric_type
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if statistics is not None:
            self._values["statistics"] = statistics

    @builtins.property
    def alarm_action(self) -> typing.List[builtins.str]:
        """
        :Property: alarmAction: Alarm Actions
        """
        result = self._values.get("alarm_action")
        assert result is not None, "Required property 'alarm_action' is missing"
        return result

    @builtins.property
    def metric_name(self) -> builtins.str:
        """
        :Property: metricName: Metric Name
        """
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return result

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The ID of the scaling group.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def threshold(self) -> jsii.Number:
        """
        :Property: threshold: Threshold
        """
        result = self._values.get("threshold")
        assert result is not None, "Required property 'threshold' is missing"
        return result

    @builtins.property
    def comparison_operator(self) -> typing.Optional[builtins.str]:
        """
        :Property: comparisonOperator: Comparison Operator
        """
        result = self._values.get("comparison_operator")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlarmTask.DimensionsProperty"]]]]:
        """
        :Property: dimensions: Dimensions
        """
        result = self._values.get("dimensions")
        return result

    @builtins.property
    def evaluation_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: evaluationCount: Evaluation Count
        """
        result = self._values.get("evaluation_count")
        return result

    @builtins.property
    def group_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: groupId: Group Id
        """
        result = self._values.get("group_id")
        return result

    @builtins.property
    def metric_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: metricType: Metric Type
        """
        result = self._values.get("metric_type")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Name
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Period
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def statistics(self) -> typing.Optional[builtins.str]:
        """
        :Property: statistics: Statistics
        """
        result = self._values.get("statistics")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlarmTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LifecycleHook(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.LifecycleHook",
):
    """A ROS resource type:  ``ALIYUN::ESS::LifecycleHook``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LifecycleHookProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::LifecycleHook``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(LifecycleHook, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLifecycleHookId")
    def attr_lifecycle_hook_id(self) -> typing.Any:
        """
        :Attribute: LifecycleHookId: The lifecycle hook ID
        """
        return jsii.get(self, "attrLifecycleHookId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.LifecycleHookProps",
    jsii_struct_bases=[],
    name_mapping={
        "lifecycle_transition": "lifecycleTransition",
        "scaling_group_id": "scalingGroupId",
        "default_result": "defaultResult",
        "heartbeat_timeout": "heartbeatTimeout",
        "lifecycle_hook_name": "lifecycleHookName",
        "notification_arn": "notificationArn",
        "notification_metadata": "notificationMetadata",
    },
)
class LifecycleHookProps:
    def __init__(
        self,
        *,
        lifecycle_transition: builtins.str,
        scaling_group_id: builtins.str,
        default_result: typing.Optional[builtins.str] = None,
        heartbeat_timeout: typing.Optional[jsii.Number] = None,
        lifecycle_hook_name: typing.Optional[builtins.str] = None,
        notification_arn: typing.Optional[builtins.str] = None,
        notification_metadata: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::LifecycleHook``.

        :param lifecycle_transition: 
        :param scaling_group_id: 
        :param default_result: 
        :param heartbeat_timeout: 
        :param lifecycle_hook_name: 
        :param notification_arn: 
        :param notification_metadata: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "lifecycle_transition": lifecycle_transition,
            "scaling_group_id": scaling_group_id,
        }
        if default_result is not None:
            self._values["default_result"] = default_result
        if heartbeat_timeout is not None:
            self._values["heartbeat_timeout"] = heartbeat_timeout
        if lifecycle_hook_name is not None:
            self._values["lifecycle_hook_name"] = lifecycle_hook_name
        if notification_arn is not None:
            self._values["notification_arn"] = notification_arn
        if notification_metadata is not None:
            self._values["notification_metadata"] = notification_metadata

    @builtins.property
    def lifecycle_transition(self) -> builtins.str:
        """
        :Property:

        lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
        SCALE_OUT: scale-out event
        SCALE_IN: scale-in event
        """
        result = self._values.get("lifecycle_transition")
        assert result is not None, "Required property 'lifecycle_transition' is missing"
        return result

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The ID of the scaling group.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def default_result(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
        CONTINUE: the scaling group continues with the scale-in or scale-out process.
        ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        Default value: CONTINUE
        If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        """
        result = self._values.get("default_result")
        return result

    @builtins.property
    def heartbeat_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 21,600 seconds. The default value is 600 seconds.
        You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        """
        result = self._values.get("heartbeat_timeout")
        return result

    @builtins.property
    def lifecycle_hook_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        Default value: Lifecycle Hook ID
        """
        result = self._values.get("lifecycle_hook_name")
        return result

    @builtins.property
    def notification_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        region: the region to which the scaling group locates
        account-id: Alibaba Cloud ID
        For example:
        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        """
        result = self._values.get("notification_arn")
        return result

    @builtins.property
    def notification_metadata(self) -> typing.Optional[builtins.str]:
        """
        :Property: notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        """
        result = self._values.get("notification_metadata")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LifecycleHookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlarmTask(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosAlarmTask",
):
    """A ROS template type:  ``ALIYUN::ESS::AlarmTask``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAlarmTaskProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::AlarmTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlarmTask, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAlarmTaskId")
    def attr_alarm_task_id(self) -> typing.Any:
        """
        :Attribute: AlarmTaskId: The alarm task ID
        """
        return jsii.get(self, "attrAlarmTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="alarmAction")
    def alarm_action(self) -> typing.List[builtins.str]:
        """
        :Property: alarmAction: Alarm Actions
        """
        return jsii.get(self, "alarmAction")

    @alarm_action.setter # type: ignore
    def alarm_action(self, value: typing.List[builtins.str]) -> None:
        jsii.set(self, "alarmAction", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="metricName")
    def metric_name(self) -> builtins.str:
        """
        :Property: metricName: Metric Name
        """
        return jsii.get(self, "metricName")

    @metric_name.setter # type: ignore
    def metric_name(self, value: builtins.str) -> None:
        jsii.set(self, "metricName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The ID of the scaling group.
        """
        return jsii.get(self, "scalingGroupId")

    @scaling_group_id.setter # type: ignore
    def scaling_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "scalingGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="threshold")
    def threshold(self) -> jsii.Number:
        """
        :Property: threshold: Threshold
        """
        return jsii.get(self, "threshold")

    @threshold.setter # type: ignore
    def threshold(self, value: jsii.Number) -> None:
        jsii.set(self, "threshold", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="comparisonOperator")
    def comparison_operator(self) -> typing.Optional[builtins.str]:
        """
        :Property: comparisonOperator: Comparison Operator
        """
        return jsii.get(self, "comparisonOperator")

    @comparison_operator.setter # type: ignore
    def comparison_operator(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "comparisonOperator", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dimensions")
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlarmTask.DimensionsProperty"]]]]:
        """
        :Property: dimensions: Dimensions
        """
        return jsii.get(self, "dimensions")

    @dimensions.setter # type: ignore
    def dimensions(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlarmTask.DimensionsProperty"]]]],
    ) -> None:
        jsii.set(self, "dimensions", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="evaluationCount")
    def evaluation_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: evaluationCount: Evaluation Count
        """
        return jsii.get(self, "evaluationCount")

    @evaluation_count.setter # type: ignore
    def evaluation_count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "evaluationCount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: groupId: Group Id
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="metricType")
    def metric_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: metricType: Metric Type
        """
        return jsii.get(self, "metricType")

    @metric_type.setter # type: ignore
    def metric_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "metricType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Name
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Period
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="statistics")
    def statistics(self) -> typing.Optional[builtins.str]:
        """
        :Property: statistics: Statistics
        """
        return jsii.get(self, "statistics")

    @statistics.setter # type: ignore
    def statistics(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "statistics", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dimension_key": "dimensionKey",
            "dimension_value": "dimensionValue",
        },
    )
    class DimensionsProperty:
        def __init__(
            self,
            *,
            dimension_key: builtins.str,
            dimension_value: builtins.str,
        ) -> None:
            """
            :param dimension_key: 
            :param dimension_value: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "dimension_key": dimension_key,
                "dimension_value": dimension_value,
            }

        @builtins.property
        def dimension_key(self) -> builtins.str:
            """
            :Property: dimensionKey: DimensionKey
            """
            result = self._values.get("dimension_key")
            assert result is not None, "Required property 'dimension_key' is missing"
            return result

        @builtins.property
        def dimension_value(self) -> builtins.str:
            """
            :Property: dimensionValue: DimensionValue
            """
            result = self._values.get("dimension_value")
            assert result is not None, "Required property 'dimension_value' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DimensionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosAlarmTaskEnable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosAlarmTaskEnable",
):
    """A ROS template type:  ``ALIYUN::ESS::AlarmTaskEnable``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAlarmTaskEnableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::AlarmTaskEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlarmTaskEnable, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="alarmTaskId")
    def alarm_task_id(self) -> builtins.str:
        """
        :Property: alarmTaskId: The id of alarm task.
        """
        return jsii.get(self, "alarmTaskId")

    @alarm_task_id.setter # type: ignore
    def alarm_task_id(self, value: builtins.str) -> None:
        jsii.set(self, "alarmTaskId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        """
        :Property: enable: Enable alarm task or not
        """
        return jsii.get(self, "enable")

    @enable.setter # type: ignore
    def enable(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "enable", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps",
    jsii_struct_bases=[],
    name_mapping={"alarm_task_id": "alarmTaskId", "enable": "enable"},
)
class RosAlarmTaskEnableProps:
    def __init__(
        self,
        *,
        alarm_task_id: builtins.str,
        enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::AlarmTaskEnable``.

        :param alarm_task_id: 
        :param enable: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "alarm_task_id": alarm_task_id,
            "enable": enable,
        }

    @builtins.property
    def alarm_task_id(self) -> builtins.str:
        """
        :Property: alarmTaskId: The id of alarm task.
        """
        result = self._values.get("alarm_task_id")
        assert result is not None, "Required property 'alarm_task_id' is missing"
        return result

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        """
        :Property: enable: Enable alarm task or not
        """
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlarmTaskEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosAlarmTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "alarm_action": "alarmAction",
        "metric_name": "metricName",
        "scaling_group_id": "scalingGroupId",
        "threshold": "threshold",
        "comparison_operator": "comparisonOperator",
        "description": "description",
        "dimensions": "dimensions",
        "evaluation_count": "evaluationCount",
        "group_id": "groupId",
        "metric_type": "metricType",
        "name": "name",
        "period": "period",
        "statistics": "statistics",
    },
)
class RosAlarmTaskProps:
    def __init__(
        self,
        *,
        alarm_action: typing.List[builtins.str],
        metric_name: builtins.str,
        scaling_group_id: builtins.str,
        threshold: jsii.Number,
        comparison_operator: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        dimensions: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosAlarmTask.DimensionsProperty]]]] = None,
        evaluation_count: typing.Optional[jsii.Number] = None,
        group_id: typing.Optional[jsii.Number] = None,
        metric_type: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        statistics: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::AlarmTask``.

        :param alarm_action: 
        :param metric_name: 
        :param scaling_group_id: 
        :param threshold: 
        :param comparison_operator: 
        :param description: 
        :param dimensions: 
        :param evaluation_count: 
        :param group_id: 
        :param metric_type: 
        :param name: 
        :param period: 
        :param statistics: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "alarm_action": alarm_action,
            "metric_name": metric_name,
            "scaling_group_id": scaling_group_id,
            "threshold": threshold,
        }
        if comparison_operator is not None:
            self._values["comparison_operator"] = comparison_operator
        if description is not None:
            self._values["description"] = description
        if dimensions is not None:
            self._values["dimensions"] = dimensions
        if evaluation_count is not None:
            self._values["evaluation_count"] = evaluation_count
        if group_id is not None:
            self._values["group_id"] = group_id
        if metric_type is not None:
            self._values["metric_type"] = metric_type
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if statistics is not None:
            self._values["statistics"] = statistics

    @builtins.property
    def alarm_action(self) -> typing.List[builtins.str]:
        """
        :Property: alarmAction: Alarm Actions
        """
        result = self._values.get("alarm_action")
        assert result is not None, "Required property 'alarm_action' is missing"
        return result

    @builtins.property
    def metric_name(self) -> builtins.str:
        """
        :Property: metricName: Metric Name
        """
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return result

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The ID of the scaling group.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def threshold(self) -> jsii.Number:
        """
        :Property: threshold: Threshold
        """
        result = self._values.get("threshold")
        assert result is not None, "Required property 'threshold' is missing"
        return result

    @builtins.property
    def comparison_operator(self) -> typing.Optional[builtins.str]:
        """
        :Property: comparisonOperator: Comparison Operator
        """
        result = self._values.get("comparison_operator")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosAlarmTask.DimensionsProperty]]]]:
        """
        :Property: dimensions: Dimensions
        """
        result = self._values.get("dimensions")
        return result

    @builtins.property
    def evaluation_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: evaluationCount: Evaluation Count
        """
        result = self._values.get("evaluation_count")
        return result

    @builtins.property
    def group_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: groupId: Group Id
        """
        result = self._values.get("group_id")
        return result

    @builtins.property
    def metric_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: metricType: Metric Type
        """
        result = self._values.get("metric_type")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Name
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: Period
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def statistics(self) -> typing.Optional[builtins.str]:
        """
        :Property: statistics: Statistics
        """
        result = self._values.get("statistics")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlarmTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLifecycleHook(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosLifecycleHook",
):
    """A ROS template type:  ``ALIYUN::ESS::LifecycleHook``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLifecycleHookProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::LifecycleHook``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosLifecycleHook, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrLifecycleHookId")
    def attr_lifecycle_hook_id(self) -> typing.Any:
        """
        :Attribute: LifecycleHookId: The lifecycle hook ID
        """
        return jsii.get(self, "attrLifecycleHookId")

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
    @jsii.member(jsii_name="lifecycleTransition")
    def lifecycle_transition(self) -> builtins.str:
        """
        :Property:

        lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
        SCALE_OUT: scale-out event
        SCALE_IN: scale-in event
        """
        return jsii.get(self, "lifecycleTransition")

    @lifecycle_transition.setter # type: ignore
    def lifecycle_transition(self, value: builtins.str) -> None:
        jsii.set(self, "lifecycleTransition", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The ID of the scaling group.
        """
        return jsii.get(self, "scalingGroupId")

    @scaling_group_id.setter # type: ignore
    def scaling_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "scalingGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="defaultResult")
    def default_result(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
        CONTINUE: the scaling group continues with the scale-in or scale-out process.
        ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        Default value: CONTINUE
        If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        """
        return jsii.get(self, "defaultResult")

    @default_result.setter # type: ignore
    def default_result(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "defaultResult", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="heartbeatTimeout")
    def heartbeat_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 21,600 seconds. The default value is 600 seconds.
        You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        """
        return jsii.get(self, "heartbeatTimeout")

    @heartbeat_timeout.setter # type: ignore
    def heartbeat_timeout(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "heartbeatTimeout", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="lifecycleHookName")
    def lifecycle_hook_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        Default value: Lifecycle Hook ID
        """
        return jsii.get(self, "lifecycleHookName")

    @lifecycle_hook_name.setter # type: ignore
    def lifecycle_hook_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "lifecycleHookName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="notificationArn")
    def notification_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        region: the region to which the scaling group locates
        account-id: Alibaba Cloud ID
        For example:
        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        """
        return jsii.get(self, "notificationArn")

    @notification_arn.setter # type: ignore
    def notification_arn(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "notificationArn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="notificationMetadata")
    def notification_metadata(self) -> typing.Optional[builtins.str]:
        """
        :Property: notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        """
        return jsii.get(self, "notificationMetadata")

    @notification_metadata.setter # type: ignore
    def notification_metadata(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "notificationMetadata", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosLifecycleHookProps",
    jsii_struct_bases=[],
    name_mapping={
        "lifecycle_transition": "lifecycleTransition",
        "scaling_group_id": "scalingGroupId",
        "default_result": "defaultResult",
        "heartbeat_timeout": "heartbeatTimeout",
        "lifecycle_hook_name": "lifecycleHookName",
        "notification_arn": "notificationArn",
        "notification_metadata": "notificationMetadata",
    },
)
class RosLifecycleHookProps:
    def __init__(
        self,
        *,
        lifecycle_transition: builtins.str,
        scaling_group_id: builtins.str,
        default_result: typing.Optional[builtins.str] = None,
        heartbeat_timeout: typing.Optional[jsii.Number] = None,
        lifecycle_hook_name: typing.Optional[builtins.str] = None,
        notification_arn: typing.Optional[builtins.str] = None,
        notification_metadata: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::LifecycleHook``.

        :param lifecycle_transition: 
        :param scaling_group_id: 
        :param default_result: 
        :param heartbeat_timeout: 
        :param lifecycle_hook_name: 
        :param notification_arn: 
        :param notification_metadata: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "lifecycle_transition": lifecycle_transition,
            "scaling_group_id": scaling_group_id,
        }
        if default_result is not None:
            self._values["default_result"] = default_result
        if heartbeat_timeout is not None:
            self._values["heartbeat_timeout"] = heartbeat_timeout
        if lifecycle_hook_name is not None:
            self._values["lifecycle_hook_name"] = lifecycle_hook_name
        if notification_arn is not None:
            self._values["notification_arn"] = notification_arn
        if notification_metadata is not None:
            self._values["notification_metadata"] = notification_metadata

    @builtins.property
    def lifecycle_transition(self) -> builtins.str:
        """
        :Property:

        lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
        SCALE_OUT: scale-out event
        SCALE_IN: scale-in event
        """
        result = self._values.get("lifecycle_transition")
        assert result is not None, "Required property 'lifecycle_transition' is missing"
        return result

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The ID of the scaling group.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def default_result(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
        CONTINUE: the scaling group continues with the scale-in or scale-out process.
        ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        Default value: CONTINUE
        If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        """
        result = self._values.get("default_result")
        return result

    @builtins.property
    def heartbeat_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 21,600 seconds. The default value is 600 seconds.
        You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        """
        result = self._values.get("heartbeat_timeout")
        return result

    @builtins.property
    def lifecycle_hook_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        Default value: Lifecycle Hook ID
        """
        result = self._values.get("lifecycle_hook_name")
        return result

    @builtins.property
    def notification_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        region: the region to which the scaling group locates
        account-id: Alibaba Cloud ID
        For example:
        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        """
        result = self._values.get("notification_arn")
        return result

    @builtins.property
    def notification_metadata(self) -> typing.Optional[builtins.str]:
        """
        :Property: notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        """
        result = self._values.get("notification_metadata")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLifecycleHookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingConfiguration(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingConfiguration",
):
    """A ROS template type:  ``ALIYUN::ESS::ScalingConfiguration``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScalingConfigurationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingConfiguration``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosScalingConfiguration, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> typing.Any:
        """
        :Attribute: ScalingConfigurationId: The scaling configuration id
        """
        return jsii.get(self, "attrScalingConfigurationId")

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
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: Scaling group id to create the scaling configuration.
        """
        return jsii.get(self, "scalingGroupId")

    @scaling_group_id.setter # type: ignore
    def scaling_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "scalingGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deploymentSetId")
    def deployment_set_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: deploymentSetId: Deployment set ID.
        """
        return jsii.get(self, "deploymentSetId")

    @deployment_set_id.setter # type: ignore
    def deployment_set_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "deploymentSetId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="diskMappings")
    def disk_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingConfiguration.DiskMappingsProperty"]]]]:
        """
        :Property: diskMappings: Disk mappings to attach to instance.
        """
        return jsii.get(self, "diskMappings")

    @disk_mappings.setter # type: ignore
    def disk_mappings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingConfiguration.DiskMappingsProperty"]]]],
    ) -> None:
        jsii.set(self, "diskMappings", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="hpcClusterId")
    def hpc_cluster_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: hpcClusterId: The HPC cluster ID to which the instance belongs.
        """
        return jsii.get(self, "hpcClusterId")

    @hpc_cluster_id.setter # type: ignore
    def hpc_cluster_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "hpcClusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageId")
    def image_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageId: Image ID to create ecs instance .
        """
        return jsii.get(self, "imageId")

    @image_id.setter # type: ignore
    def image_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "imageId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: The name of the instance launched from the current scaling configuration.
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceType: ecs supported instance type.
        """
        return jsii.get(self, "instanceType")

    @instance_type.setter # type: ignore
    def instance_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceTypes")
    def instance_types(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        """
        return jsii.get(self, "instanceTypes")

    @instance_types.setter # type: ignore
    def instance_types(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceTypes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetMaxBandwidthIn")
    def internet_max_bandwidth_in(self) -> typing.Optional[jsii.Number]:
        """
        :Property: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        """
        return jsii.get(self, "internetMaxBandwidthIn")

    @internet_max_bandwidth_in.setter # type: ignore
    def internet_max_bandwidth_in(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "internetMaxBandwidthIn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetMaxBandwidthOut")
    def internet_max_bandwidth_out(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        """
        return jsii.get(self, "internetMaxBandwidthOut")

    @internet_max_bandwidth_out.setter # type: ignore
    def internet_max_bandwidth_out(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "internetMaxBandwidthOut", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(self) -> typing.Optional[builtins.str]:
        """
        :Property: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        """
        return jsii.get(self, "ioOptimized")

    @io_optimized.setter # type: ignore
    def io_optimized(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ioOptimized", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPairName: SSH key pair name.
        """
        return jsii.get(self, "keyPairName")

    @key_pair_name.setter # type: ignore
    def key_pair_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keyPairName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="passwordInherit")
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        """
        return jsii.get(self, "passwordInherit")

    @password_inherit.setter # type: ignore
    def password_inherit(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "passwordInherit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ramRoleName")
    def ram_role_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        """
        return jsii.get(self, "ramRoleName")

    @ram_role_name.setter # type: ignore
    def ram_role_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ramRoleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingConfigurationName")
    def scaling_configuration_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingConfigurationName: Name of created scaling configuration.
        """
        return jsii.get(self, "scalingConfigurationName")

    @scaling_configuration_name.setter # type: ignore
    def scaling_configuration_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scalingConfigurationName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Security Group to create ecs instance.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spotPriceLimit")
    def spot_price_limit(self) -> typing.Optional[jsii.Number]:
        """
        :Property: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        """
        return jsii.get(self, "spotPriceLimit")

    @spot_price_limit.setter # type: ignore
    def spot_price_limit(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "spotPriceLimit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spotPriceLimitForInstanceType")
    def spot_price_limit_for_instance_type(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 50 items can be specified.
        Key
        ecs instance type
        Value
        Supports a maximum of 3 decimal places.
        """
        return jsii.get(self, "spotPriceLimitForInstanceType")

    @spot_price_limit_for_instance_type.setter # type: ignore
    def spot_price_limit_for_instance_type(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "spotPriceLimitForInstanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        NoSpot: Normal pay-per-use instance
        SpotWithPriceLimit: Set a preemptive instance of the cap price
        SpotAsPriceGo: System automatic bidding, following the current market actual price
        Default: NoSpot.
        """
        return jsii.get(self, "spotStrategy")

    @spot_strategy.setter # type: ignore
    def spot_strategy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "spotStrategy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskAutoSnapshotPolicyId")
    def system_disk_auto_snapshot_policy_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        """
        return jsii.get(self, "systemDiskAutoSnapshotPolicyId")

    @system_disk_auto_snapshot_policy_id.setter # type: ignore
    def system_disk_auto_snapshot_policy_id(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "systemDiskAutoSnapshotPolicyId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskCategory")
    def system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        """
        return jsii.get(self, "systemDiskCategory")

    @system_disk_category.setter # type: ignore
    def system_disk_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "systemDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskPerformanceLevel")
    def system_disk_performance_level(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskPerformanceLevel: The performance level of an ESSD.
        """
        return jsii.get(self, "systemDiskPerformanceLevel")

    @system_disk_performance_level.setter # type: ignore
    def system_disk_performance_level(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "systemDiskPerformanceLevel", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: systemDiskSize: Size of system disk. Unit is GB.
        """
        return jsii.get(self, "systemDiskSize")

    @system_disk_size.setter # type: ignore
    def system_disk_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "systemDiskSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tagList")
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingConfiguration.TagListProperty"]]]]:
        """
        :Property:

        tagList: The tags of an instance in list format.
        Do not use with Tags at the same time.
        You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
        At most 20 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>*stack*<stack_id>") if possible.
        """
        return jsii.get(self, "tagList")

    @tag_list.setter # type: ignore
    def tag_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingConfiguration.TagListProperty"]]]],
    ) -> None:
        jsii.set(self, "tagList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="userData")
    def user_data(self) -> typing.Optional[builtins.str]:
        """
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        return jsii.get(self, "userData")

    @user_data.setter # type: ignore
    def user_data(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "userData", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingConfiguration.DiskMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_snapshot_policy_id": "autoSnapshotPolicyId",
            "category": "category",
            "description": "description",
            "device": "device",
            "disk_name": "diskName",
            "encrypted": "encrypted",
            "kms_key_id": "kmsKeyId",
            "performance_level": "performanceLevel",
            "size": "size",
            "snapshot_id": "snapshotId",
        },
    )
    class DiskMappingsProperty:
        def __init__(
            self,
            *,
            auto_snapshot_policy_id: typing.Optional[builtins.str] = None,
            category: typing.Optional[builtins.str] = None,
            description: typing.Optional[builtins.str] = None,
            device: typing.Optional[builtins.str] = None,
            disk_name: typing.Optional[builtins.str] = None,
            encrypted: typing.Optional[builtins.str] = None,
            kms_key_id: typing.Optional[builtins.str] = None,
            performance_level: typing.Optional[builtins.str] = None,
            size: typing.Optional[builtins.str] = None,
            snapshot_id: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param auto_snapshot_policy_id: 
            :param category: 
            :param description: 
            :param device: 
            :param disk_name: 
            :param encrypted: 
            :param kms_key_id: 
            :param performance_level: 
            :param size: 
            :param snapshot_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if auto_snapshot_policy_id is not None:
                self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
            if category is not None:
                self._values["category"] = category
            if description is not None:
                self._values["description"] = description
            if device is not None:
                self._values["device"] = device
            if disk_name is not None:
                self._values["disk_name"] = disk_name
            if encrypted is not None:
                self._values["encrypted"] = encrypted
            if kms_key_id is not None:
                self._values["kms_key_id"] = kms_key_id
            if performance_level is not None:
                self._values["performance_level"] = performance_level
            if size is not None:
                self._values["size"] = size
            if snapshot_id is not None:
                self._values["snapshot_id"] = snapshot_id

        @builtins.property
        def auto_snapshot_policy_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: autoSnapshotPolicyId: Auto snapshot policy ID.
            """
            result = self._values.get("auto_snapshot_policy_id")
            return result

        @builtins.property
        def category(self) -> typing.Optional[builtins.str]:
            """
            :Property: category: The volume type to create.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssdDefault is cloud.
            """
            result = self._values.get("category")
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
            """
            result = self._values.get("description")
            return result

        @builtins.property
        def device(self) -> typing.Optional[builtins.str]:
            """
            :Property: device: A device name where the volume will be attached in the system at /dev/xvd[id]. Range from '/dev/xvdb' to '/dev/xvdz'.
            """
            result = self._values.get("device")
            return result

        @builtins.property
        def disk_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
            """
            result = self._values.get("disk_name")
            return result

        @builtins.property
        def encrypted(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            encrypted: Whether the data disk is encrypted or not. Options:
            true: Encrypted.
            false: Not encrypted.
            Default value: false.
            """
            result = self._values.get("encrypted")
            return result

        @builtins.property
        def kms_key_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: kmsKeyId: The KMS key ID for the data disk.
            """
            result = self._values.get("kms_key_id")
            return result

        @builtins.property
        def performance_level(self) -> typing.Optional[builtins.str]:
            """
            :Property: performanceLevel: The performance level of an ESSD.
            """
            result = self._values.get("performance_level")
            return result

        @builtins.property
        def size(self) -> typing.Optional[builtins.str]:
            """
            :Property: size: The size of the volume, in GB. Must be equal or greater than the size of the snapshot. It is safe to leave this blank and have the Compute service infer the size.
            """
            result = self._values.get("size")
            return result

        @builtins.property
        def snapshot_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: snapshotId: ID of the snapshot to create the volume.
            """
            result = self._values.get("snapshot_id")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DiskMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingConfiguration.TagListProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagListProperty:
        def __init__(
            self,
            *,
            key: builtins.str,
            value: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param key: 
            :param value: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> builtins.str:
            """
            :Property: key: undefined
            """
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return result

        @builtins.property
        def value(self) -> typing.Optional[builtins.str]:
            """
            :Property: value: undefined
            """
            result = self._values.get("value")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScalingConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "deployment_set_id": "deploymentSetId",
        "disk_mappings": "diskMappings",
        "hpc_cluster_id": "hpcClusterId",
        "image_id": "imageId",
        "instance_id": "instanceId",
        "instance_name": "instanceName",
        "instance_type": "instanceType",
        "instance_types": "instanceTypes",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_in": "internetMaxBandwidthIn",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "io_optimized": "ioOptimized",
        "key_pair_name": "keyPairName",
        "password_inherit": "passwordInherit",
        "ram_role_name": "ramRoleName",
        "resource_group_id": "resourceGroupId",
        "scaling_configuration_name": "scalingConfigurationName",
        "security_group_id": "securityGroupId",
        "spot_price_limit": "spotPriceLimit",
        "spot_price_limit_for_instance_type": "spotPriceLimitForInstanceType",
        "spot_strategy": "spotStrategy",
        "system_disk_auto_snapshot_policy_id": "systemDiskAutoSnapshotPolicyId",
        "system_disk_category": "systemDiskCategory",
        "system_disk_performance_level": "systemDiskPerformanceLevel",
        "system_disk_size": "systemDiskSize",
        "tag_list": "tagList",
        "user_data": "userData",
    },
)
class RosScalingConfigurationProps:
    def __init__(
        self,
        *,
        scaling_group_id: builtins.str,
        deployment_set_id: typing.Optional[builtins.str] = None,
        disk_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]] = None,
        hpc_cluster_id: typing.Optional[builtins.str] = None,
        image_id: typing.Optional[builtins.str] = None,
        instance_id: typing.Optional[builtins.str] = None,
        instance_name: typing.Optional[builtins.str] = None,
        instance_type: typing.Optional[builtins.str] = None,
        instance_types: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        internet_max_bandwidth_in: typing.Optional[jsii.Number] = None,
        internet_max_bandwidth_out: typing.Optional[jsii.Number] = None,
        io_optimized: typing.Optional[builtins.str] = None,
        key_pair_name: typing.Optional[builtins.str] = None,
        password_inherit: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ram_role_name: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        scaling_configuration_name: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        spot_price_limit: typing.Optional[jsii.Number] = None,
        spot_price_limit_for_instance_type: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        spot_strategy: typing.Optional[builtins.str] = None,
        system_disk_auto_snapshot_policy_id: typing.Optional[builtins.str] = None,
        system_disk_category: typing.Optional[builtins.str] = None,
        system_disk_performance_level: typing.Optional[builtins.str] = None,
        system_disk_size: typing.Optional[jsii.Number] = None,
        tag_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.TagListProperty]]]] = None,
        user_data: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingConfiguration``.

        :param scaling_group_id: 
        :param deployment_set_id: 
        :param disk_mappings: 
        :param hpc_cluster_id: 
        :param image_id: 
        :param instance_id: 
        :param instance_name: 
        :param instance_type: 
        :param instance_types: 
        :param internet_charge_type: 
        :param internet_max_bandwidth_in: 
        :param internet_max_bandwidth_out: 
        :param io_optimized: 
        :param key_pair_name: 
        :param password_inherit: 
        :param ram_role_name: 
        :param resource_group_id: 
        :param scaling_configuration_name: 
        :param security_group_id: 
        :param spot_price_limit: 
        :param spot_price_limit_for_instance_type: 
        :param spot_strategy: 
        :param system_disk_auto_snapshot_policy_id: 
        :param system_disk_category: 
        :param system_disk_performance_level: 
        :param system_disk_size: 
        :param tag_list: 
        :param user_data: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if deployment_set_id is not None:
            self._values["deployment_set_id"] = deployment_set_id
        if disk_mappings is not None:
            self._values["disk_mappings"] = disk_mappings
        if hpc_cluster_id is not None:
            self._values["hpc_cluster_id"] = hpc_cluster_id
        if image_id is not None:
            self._values["image_id"] = image_id
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if instance_types is not None:
            self._values["instance_types"] = instance_types
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if internet_max_bandwidth_in is not None:
            self._values["internet_max_bandwidth_in"] = internet_max_bandwidth_in
        if internet_max_bandwidth_out is not None:
            self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if password_inherit is not None:
            self._values["password_inherit"] = password_inherit
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scaling_configuration_name is not None:
            self._values["scaling_configuration_name"] = scaling_configuration_name
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_price_limit_for_instance_type is not None:
            self._values["spot_price_limit_for_instance_type"] = spot_price_limit_for_instance_type
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if system_disk_auto_snapshot_policy_id is not None:
            self._values["system_disk_auto_snapshot_policy_id"] = system_disk_auto_snapshot_policy_id
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category
        if system_disk_performance_level is not None:
            self._values["system_disk_performance_level"] = system_disk_performance_level
        if system_disk_size is not None:
            self._values["system_disk_size"] = system_disk_size
        if tag_list is not None:
            self._values["tag_list"] = tag_list
        if user_data is not None:
            self._values["user_data"] = user_data

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: Scaling group id to create the scaling configuration.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def deployment_set_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: deploymentSetId: Deployment set ID.
        """
        result = self._values.get("deployment_set_id")
        return result

    @builtins.property
    def disk_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]]:
        """
        :Property: diskMappings: Disk mappings to attach to instance.
        """
        result = self._values.get("disk_mappings")
        return result

    @builtins.property
    def hpc_cluster_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: hpcClusterId: The HPC cluster ID to which the instance belongs.
        """
        result = self._values.get("hpc_cluster_id")
        return result

    @builtins.property
    def image_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageId: Image ID to create ecs instance .
        """
        result = self._values.get("image_id")
        return result

    @builtins.property
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        """
        result = self._values.get("instance_id")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: The name of the instance launched from the current scaling configuration.
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def instance_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceType: ecs supported instance type.
        """
        result = self._values.get("instance_type")
        return result

    @builtins.property
    def instance_types(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        """
        result = self._values.get("instance_types")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def internet_max_bandwidth_in(self) -> typing.Optional[jsii.Number]:
        """
        :Property: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        """
        result = self._values.get("internet_max_bandwidth_in")
        return result

    @builtins.property
    def internet_max_bandwidth_out(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        """
        result = self._values.get("internet_max_bandwidth_out")
        return result

    @builtins.property
    def io_optimized(self) -> typing.Optional[builtins.str]:
        """
        :Property: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        """
        result = self._values.get("io_optimized")
        return result

    @builtins.property
    def key_pair_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPairName: SSH key pair name.
        """
        result = self._values.get("key_pair_name")
        return result

    @builtins.property
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        """
        result = self._values.get("password_inherit")
        return result

    @builtins.property
    def ram_role_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        """
        result = self._values.get("ram_role_name")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def scaling_configuration_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingConfigurationName: Name of created scaling configuration.
        """
        result = self._values.get("scaling_configuration_name")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Security Group to create ecs instance.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def spot_price_limit(self) -> typing.Optional[jsii.Number]:
        """
        :Property: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        """
        result = self._values.get("spot_price_limit")
        return result

    @builtins.property
    def spot_price_limit_for_instance_type(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 50 items can be specified.
        Key
        ecs instance type
        Value
        Supports a maximum of 3 decimal places.
        """
        result = self._values.get("spot_price_limit_for_instance_type")
        return result

    @builtins.property
    def spot_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        NoSpot: Normal pay-per-use instance
        SpotWithPriceLimit: Set a preemptive instance of the cap price
        SpotAsPriceGo: System automatic bidding, following the current market actual price
        Default: NoSpot.
        """
        result = self._values.get("spot_strategy")
        return result

    @builtins.property
    def system_disk_auto_snapshot_policy_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        """
        result = self._values.get("system_disk_auto_snapshot_policy_id")
        return result

    @builtins.property
    def system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        """
        result = self._values.get("system_disk_category")
        return result

    @builtins.property
    def system_disk_performance_level(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskPerformanceLevel: The performance level of an ESSD.
        """
        result = self._values.get("system_disk_performance_level")
        return result

    @builtins.property
    def system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: systemDiskSize: Size of system disk. Unit is GB.
        """
        result = self._values.get("system_disk_size")
        return result

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.TagListProperty]]]]:
        """
        :Property:

        tagList: The tags of an instance in list format.
        Do not use with Tags at the same time.
        You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
        At most 20 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>*stack*<stack_id>") if possible.
        """
        result = self._values.get("tag_list")
        return result

    @builtins.property
    def user_data(self) -> typing.Optional[builtins.str]:
        """
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        result = self._values.get("user_data")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroup",
):
    """A ROS template type:  ``ALIYUN::ESS::ScalingGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScalingGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosScalingGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> typing.Any:
        """
        :Attribute: ScalingGroupId: Scaling group Id
        """
        return jsii.get(self, "attrScalingGroupId")

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
    @jsii.member(jsii_name="maxSize")
    def max_size(self) -> jsii.Number:
        """
        :Property: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        """
        return jsii.get(self, "maxSize")

    @max_size.setter # type: ignore
    def max_size(self, value: jsii.Number) -> None:
        jsii.set(self, "maxSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="minSize")
    def min_size(self) -> jsii.Number:
        """
        :Property: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        """
        return jsii.get(self, "minSize")

    @min_size.setter # type: ignore
    def min_size(self, value: jsii.Number) -> None:
        jsii.set(self, "minSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceIds")
    def db_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        """
        return jsii.get(self, "dbInstanceIds")

    @db_instance_ids.setter # type: ignore
    def db_instance_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dbInstanceIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="defaultCooldown")
    def default_cooldown(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        The default value is 300s.
        """
        return jsii.get(self, "defaultCooldown")

    @default_cooldown.setter # type: ignore
    def default_cooldown(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "defaultCooldown", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="desiredCapacity")
    def desired_capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        """
        return jsii.get(self, "desiredCapacity")

    @desired_capacity.setter # type: ignore
    def desired_capacity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "desiredCapacity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupDeletionProtection")
    def group_deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        groupDeletionProtection: Whether to enable deletion protection for scaling group.
        Default to False.
        """
        return jsii.get(self, "groupDeletionProtection")

    @group_deletion_protection.setter # type: ignore
    def group_deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groupDeletionProtection", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckType")
    def health_check_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        """
        return jsii.get(self, "healthCheckType")

    @health_check_type.setter # type: ignore
    def health_check_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "healthCheckType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="launchTemplateId")
    def launch_template_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        """
        return jsii.get(self, "launchTemplateId")

    @launch_template_id.setter # type: ignore
    def launch_template_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "launchTemplateId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="launchTemplateVersion")
    def launch_template_version(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        launchTemplateVersion: The version of the instance launch template. Valid values:
        A fixed template version numbe.
        Default: The default template version is always used.
        Latest: The latest template version is always used.
        """
        return jsii.get(self, "launchTemplateVersion")

    @launch_template_version.setter # type: ignore
    def launch_template_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "launchTemplateVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loadBalancerIds")
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        """
        return jsii.get(self, "loadBalancerIds")

    @load_balancer_ids.setter # type: ignore
    def load_balancer_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancerIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="multiAzPolicy")
    def multi_az_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:

        1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
        """
        return jsii.get(self, "multiAzPolicy")

    @multi_az_policy.setter # type: ignore
    def multi_az_policy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "multiAzPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="notificationConfigurations")
    def notification_configurations(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingGroup.NotificationConfigurationsProperty"]]]]:
        """
        :Property: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        """
        return jsii.get(self, "notificationConfigurations")

    @notification_configurations.setter # type: ignore
    def notification_configurations(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingGroup.NotificationConfigurationsProperty"]]]],
    ) -> None:
        jsii.set(self, "notificationConfigurations", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protectedInstances")
    def protected_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: protectedInstances: ECS instances of protected mode in the scaling group.
        """
        return jsii.get(self, "protectedInstances")

    @protected_instances.setter # type: ignore
    def protected_instances(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "protectedInstances", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="removalPolicys")
    def removal_policys(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        removalPolicys: Policy for removing ECS instances from the scaling group.
        Optional values:
        OldestInstance: removes the first ECS instance attached to the scaling group.
        NewestInstance: removes the first ECS instance attached to the scaling group.
        OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        """
        return jsii.get(self, "removalPolicys")

    @removal_policys.setter # type: ignore
    def removal_policys(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "removalPolicys", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingGroupName")
    def scaling_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        If this parameter is not specified, the default value is ScalingGroupId.
        """
        return jsii.get(self, "scalingGroupName")

    @scaling_group_name.setter # type: ignore
    def scaling_group_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scalingGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="standbyInstances")
    def standby_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: standbyInstances: ECS instances of standby mode in the scaling group.
        """
        return jsii.get(self, "standbyInstances")

    @standby_instances.setter # type: ignore
    def standby_instances(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "standbyInstances", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC.
        The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority.
        When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        """
        return jsii.get(self, "vSwitchIds")

    @v_switch_ids.setter # type: ignore
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "notification_arn": "notificationArn",
            "notification_types": "notificationTypes",
        },
    )
    class NotificationConfigurationsProperty:
        def __init__(
            self,
            *,
            notification_arn: builtins.str,
            notification_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        ) -> None:
            """
            :param notification_arn: 
            :param notification_types: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "notification_arn": notification_arn,
                "notification_types": notification_types,
            }

        @builtins.property
        def notification_arn(self) -> builtins.str:
            """
            :Property:

            notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
            region: the region to which the scaling group locates
            account-id: Alibaba Cloud ID
            For example:
            MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
            MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
            Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
            """
            result = self._values.get("notification_arn")
            assert result is not None, "Required property 'notification_arn' is missing"
            return result

        @builtins.property
        def notification_types(
            self,
        ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
            """
            :Property:

            notificationTypes: Ess events and resource change notification types. Possible values:
            AUTOSCALING:SCALE_OUT_SUCCESS
            AUTOSCALING:SCALE_IN_SUCCESS
            AUTOSCALING:SCALE_OUT_ERROR
            AUTOSCALING:SCALE_IN_ERROR
            AUTOSCALING:SCALE_REJECT
            AUTOSCALING:SCALE_OUT_START
            AUTOSCALING:SCALE_IN_START
            AUTOSCALING:SCHEDULE_TASK_EXPIRING
            """
            result = self._values.get("notification_types")
            assert result is not None, "Required property 'notification_types' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotificationConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosScalingGroupEnable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupEnable",
):
    """A ROS template type:  ``ALIYUN::ESS::ScalingGroupEnable``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScalingGroupEnableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosScalingGroupEnable, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrLifecycleState")
    def attr_lifecycle_state(self) -> typing.Any:
        """
        :Attribute: LifecycleState: The scaling group status
        """
        return jsii.get(self, "attrLifecycleState")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> typing.Any:
        """
        :Attribute: ScalingGroupId: The scaling group id
        """
        return jsii.get(self, "attrScalingGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingInstanceDetails")
    def attr_scaling_instance_details(self) -> typing.Any:
        """
        :Attribute: ScalingInstanceDetails: Detail information of auto created scaling instances
        """
        return jsii.get(self, "attrScalingInstanceDetails")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingInstances")
    def attr_scaling_instances(self) -> typing.Any:
        """
        :Attribute: ScalingInstances: The auto created scaling instances
        """
        return jsii.get(self, "attrScalingInstances")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteErrorInfo")
    def attr_scaling_rule_aris_execute_error_info(self) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteErrorInfo")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesAdded")
    def attr_scaling_rule_aris_execute_result_instances_added(self) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteResultInstancesAdded")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesRemoved")
    def attr_scaling_rule_aris_execute_result_instances_removed(self) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteResultInstancesRemoved")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultNumberOfAddedInstances")
    def attr_scaling_rule_aris_execute_result_number_of_added_instances(
        self,
    ) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteResultNumberOfAddedInstances")

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
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The id of operated scaling group.
        """
        return jsii.get(self, "scalingGroupId")

    @scaling_group_id.setter # type: ignore
    def scaling_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "scalingGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        """
        return jsii.get(self, "instanceIds")

    @instance_ids.setter # type: ignore
    def instance_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="removeInstanceIds")
    def remove_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        """
        return jsii.get(self, "removeInstanceIds")

    @remove_instance_ids.setter # type: ignore
    def remove_instance_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "removeInstanceIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingConfigurationId")
    def scaling_configuration_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingConfigurationId: The id of scaling configuration which will be activate.
        """
        return jsii.get(self, "scalingConfigurationId")

    @scaling_configuration_id.setter # type: ignore
    def scaling_configuration_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scalingConfigurationId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingRuleAris")
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        When creating the resource, all the scaling rule aris in the list will be executed.
        When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        """
        return jsii.get(self, "scalingRuleAris")

    @scaling_rule_aris.setter # type: ignore
    def scaling_rule_aris(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "scalingRuleAris", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingRuleArisExecuteVersion")
    def scaling_rule_aris_execute_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        """
        return jsii.get(self, "scalingRuleArisExecuteVersion")

    @scaling_rule_aris_execute_version.setter # type: ignore
    def scaling_rule_aris_execute_version(
        self,
        value: typing.Optional[jsii.Number],
    ) -> None:
        jsii.set(self, "scalingRuleArisExecuteVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupEnableProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "instance_ids": "instanceIds",
        "remove_instance_ids": "removeInstanceIds",
        "scaling_configuration_id": "scalingConfigurationId",
        "scaling_rule_aris": "scalingRuleAris",
        "scaling_rule_aris_execute_version": "scalingRuleArisExecuteVersion",
    },
)
class RosScalingGroupEnableProps:
    def __init__(
        self,
        *,
        scaling_group_id: builtins.str,
        instance_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        remove_instance_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        scaling_configuration_id: typing.Optional[builtins.str] = None,
        scaling_rule_aris: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        scaling_rule_aris_execute_version: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scaling_group_id: 
        :param instance_ids: 
        :param remove_instance_ids: 
        :param scaling_configuration_id: 
        :param scaling_rule_aris: 
        :param scaling_rule_aris_execute_version: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if instance_ids is not None:
            self._values["instance_ids"] = instance_ids
        if remove_instance_ids is not None:
            self._values["remove_instance_ids"] = remove_instance_ids
        if scaling_configuration_id is not None:
            self._values["scaling_configuration_id"] = scaling_configuration_id
        if scaling_rule_aris is not None:
            self._values["scaling_rule_aris"] = scaling_rule_aris
        if scaling_rule_aris_execute_version is not None:
            self._values["scaling_rule_aris_execute_version"] = scaling_rule_aris_execute_version

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The id of operated scaling group.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        """
        result = self._values.get("instance_ids")
        return result

    @builtins.property
    def remove_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        """
        result = self._values.get("remove_instance_ids")
        return result

    @builtins.property
    def scaling_configuration_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingConfigurationId: The id of scaling configuration which will be activate.
        """
        result = self._values.get("scaling_configuration_id")
        return result

    @builtins.property
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        When creating the resource, all the scaling rule aris in the list will be executed.
        When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        """
        result = self._values.get("scaling_rule_aris")
        return result

    @builtins.property
    def scaling_rule_aris_execute_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        """
        result = self._values.get("scaling_rule_aris_execute_version")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingGroupEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "max_size": "maxSize",
        "min_size": "minSize",
        "db_instance_ids": "dbInstanceIds",
        "default_cooldown": "defaultCooldown",
        "desired_capacity": "desiredCapacity",
        "group_deletion_protection": "groupDeletionProtection",
        "health_check_type": "healthCheckType",
        "instance_id": "instanceId",
        "launch_template_id": "launchTemplateId",
        "launch_template_version": "launchTemplateVersion",
        "load_balancer_ids": "loadBalancerIds",
        "multi_az_policy": "multiAzPolicy",
        "notification_configurations": "notificationConfigurations",
        "protected_instances": "protectedInstances",
        "removal_policys": "removalPolicys",
        "scaling_group_name": "scalingGroupName",
        "standby_instances": "standbyInstances",
        "v_switch_id": "vSwitchId",
        "v_switch_ids": "vSwitchIds",
    },
)
class RosScalingGroupProps:
    def __init__(
        self,
        *,
        max_size: jsii.Number,
        min_size: jsii.Number,
        db_instance_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        default_cooldown: typing.Optional[jsii.Number] = None,
        desired_capacity: typing.Optional[jsii.Number] = None,
        group_deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        health_check_type: typing.Optional[builtins.str] = None,
        instance_id: typing.Optional[builtins.str] = None,
        launch_template_id: typing.Optional[builtins.str] = None,
        launch_template_version: typing.Optional[builtins.str] = None,
        load_balancer_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        multi_az_policy: typing.Optional[builtins.str] = None,
        notification_configurations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]] = None,
        protected_instances: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        removal_policys: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        scaling_group_name: typing.Optional[builtins.str] = None,
        standby_instances: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingGroup``.

        :param max_size: 
        :param min_size: 
        :param db_instance_ids: 
        :param default_cooldown: 
        :param desired_capacity: 
        :param group_deletion_protection: 
        :param health_check_type: 
        :param instance_id: 
        :param launch_template_id: 
        :param launch_template_version: 
        :param load_balancer_ids: 
        :param multi_az_policy: 
        :param notification_configurations: 
        :param protected_instances: 
        :param removal_policys: 
        :param scaling_group_name: 
        :param standby_instances: 
        :param v_switch_id: 
        :param v_switch_ids: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "max_size": max_size,
            "min_size": min_size,
        }
        if db_instance_ids is not None:
            self._values["db_instance_ids"] = db_instance_ids
        if default_cooldown is not None:
            self._values["default_cooldown"] = default_cooldown
        if desired_capacity is not None:
            self._values["desired_capacity"] = desired_capacity
        if group_deletion_protection is not None:
            self._values["group_deletion_protection"] = group_deletion_protection
        if health_check_type is not None:
            self._values["health_check_type"] = health_check_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if launch_template_id is not None:
            self._values["launch_template_id"] = launch_template_id
        if launch_template_version is not None:
            self._values["launch_template_version"] = launch_template_version
        if load_balancer_ids is not None:
            self._values["load_balancer_ids"] = load_balancer_ids
        if multi_az_policy is not None:
            self._values["multi_az_policy"] = multi_az_policy
        if notification_configurations is not None:
            self._values["notification_configurations"] = notification_configurations
        if protected_instances is not None:
            self._values["protected_instances"] = protected_instances
        if removal_policys is not None:
            self._values["removal_policys"] = removal_policys
        if scaling_group_name is not None:
            self._values["scaling_group_name"] = scaling_group_name
        if standby_instances is not None:
            self._values["standby_instances"] = standby_instances
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids

    @builtins.property
    def max_size(self) -> jsii.Number:
        """
        :Property: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        """
        result = self._values.get("max_size")
        assert result is not None, "Required property 'max_size' is missing"
        return result

    @builtins.property
    def min_size(self) -> jsii.Number:
        """
        :Property: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        """
        result = self._values.get("min_size")
        assert result is not None, "Required property 'min_size' is missing"
        return result

    @builtins.property
    def db_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        """
        result = self._values.get("db_instance_ids")
        return result

    @builtins.property
    def default_cooldown(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        The default value is 300s.
        """
        result = self._values.get("default_cooldown")
        return result

    @builtins.property
    def desired_capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        """
        result = self._values.get("desired_capacity")
        return result

    @builtins.property
    def group_deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        groupDeletionProtection: Whether to enable deletion protection for scaling group.
        Default to False.
        """
        result = self._values.get("group_deletion_protection")
        return result

    @builtins.property
    def health_check_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        """
        result = self._values.get("health_check_type")
        return result

    @builtins.property
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        """
        result = self._values.get("instance_id")
        return result

    @builtins.property
    def launch_template_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        """
        result = self._values.get("launch_template_id")
        return result

    @builtins.property
    def launch_template_version(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        launchTemplateVersion: The version of the instance launch template. Valid values:
        A fixed template version numbe.
        Default: The default template version is always used.
        Latest: The latest template version is always used.
        """
        result = self._values.get("launch_template_version")
        return result

    @builtins.property
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        """
        result = self._values.get("load_balancer_ids")
        return result

    @builtins.property
    def multi_az_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:

        1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
        """
        result = self._values.get("multi_az_policy")
        return result

    @builtins.property
    def notification_configurations(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]]:
        """
        :Property: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        """
        result = self._values.get("notification_configurations")
        return result

    @builtins.property
    def protected_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: protectedInstances: ECS instances of protected mode in the scaling group.
        """
        result = self._values.get("protected_instances")
        return result

    @builtins.property
    def removal_policys(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        removalPolicys: Policy for removing ECS instances from the scaling group.
        Optional values:
        OldestInstance: removes the first ECS instance attached to the scaling group.
        NewestInstance: removes the first ECS instance attached to the scaling group.
        OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        """
        result = self._values.get("removal_policys")
        return result

    @builtins.property
    def scaling_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        If this parameter is not specified, the default value is ScalingGroupId.
        """
        result = self._values.get("scaling_group_name")
        return result

    @builtins.property
    def standby_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: standbyInstances: ECS instances of standby mode in the scaling group.
        """
        result = self._values.get("standby_instances")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC.
        The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority.
        When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        """
        result = self._values.get("v_switch_ids")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingRule",
):
    """A ROS template type:  ``ALIYUN::ESS::ScalingRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScalingRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosScalingRule, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(self) -> typing.Any:
        """
        :Attribute: ScalingRuleAri: Unique identifier of a scaling rule.
        """
        return jsii.get(self, "attrScalingRuleAri")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> typing.Any:
        """
        :Attribute: ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
        """
        return jsii.get(self, "attrScalingRuleId")

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
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: ID of the scaling group of a scaling rule.
        """
        return jsii.get(self, "scalingGroupId")

    @scaling_group_id.setter # type: ignore
    def scaling_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "scalingGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="adjustmentType")
    def adjustment_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        adjustmentType: Adjustment mode of a scaling rule. Optional values:

        - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        """
        return jsii.get(self, "adjustmentType")

    @adjustment_type.setter # type: ignore
    def adjustment_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "adjustmentType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="adjustmentValue")
    def adjustment_value(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        adjustmentValue: Adjusted value of a scaling rule. Value range:

        - QuantityChangeInCapacity: [-500, 500]
        - PercentChangeInCapacity: [-100, 10000]
        - TotalCapacity: [0, 1000]
        """
        return jsii.get(self, "adjustmentValue")

    @adjustment_value.setter # type: ignore
    def adjustment_value(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "adjustmentValue", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cooldown")
    def cooldown(self) -> typing.Optional[jsii.Number]:
        """
        :Property: cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        """
        return jsii.get(self, "cooldown")

    @cooldown.setter # type: ignore
    def cooldown(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "cooldown", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="disableScaleIn")
    def disable_scale_in(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
        Default value: false
        """
        return jsii.get(self, "disableScaleIn")

    @disable_scale_in.setter # type: ignore
    def disable_scale_in(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableScaleIn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="estimatedInstanceWarmup")
    def estimated_instance_warmup(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        """
        return jsii.get(self, "estimatedInstanceWarmup")

    @estimated_instance_warmup.setter # type: ignore
    def estimated_instance_warmup(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "estimatedInstanceWarmup", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="initialMaxSize")
    def initial_max_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
        Default value: the same as the value of MaxSize
        """
        return jsii.get(self, "initialMaxSize")

    @initial_max_size.setter # type: ignore
    def initial_max_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "initialMaxSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="metricName")
    def metric_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
        Valid values of a target tracking scaling rule:

        - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
        - ClassicInternetTx: the average public network outbound traffic over the classic network
        - VpcInternetRx: the average public network inbound traffic over the VPC
        - VpcInternetTx: the average public network outbound traffic over the VPC
        - IntranetRx: the average internal network inbound traffic
        - IntranetTx: the average internal network outbound traffic
        Valid values of a predictive scaling rule:
        - CpuUtilization: the average CPU utilization
        - IntranetRx: the average internal network inbound traffic
        - IntranetTx: the average internal network outbound traffic
        """
        return jsii.get(self, "metricName")

    @metric_name.setter # type: ignore
    def metric_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "metricName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="minAdjustmentMagnitude")
    def min_adjustment_magnitude(self) -> typing.Optional[jsii.Number]:
        """
        :Property: minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        """
        return jsii.get(self, "minAdjustmentMagnitude")

    @min_adjustment_magnitude.setter # type: ignore
    def min_adjustment_magnitude(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "minAdjustmentMagnitude", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="predictiveScalingMode")
    def predictive_scaling_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        predictiveScalingMode: The mode of the predictive scaling rule. Valid values:

        - PredictAndScale: generates forecasts and creates forecast tasks.
        - PredictOnly: generates forecasts but does not create forecast tasks.
        Default value: PredictAndScale
        """
        return jsii.get(self, "predictiveScalingMode")

    @predictive_scaling_mode.setter # type: ignore
    def predictive_scaling_mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "predictiveScalingMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="predictiveTaskBufferTime")
    def predictive_task_buffer_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        Default value: 0
        """
        return jsii.get(self, "predictiveTaskBufferTime")

    @predictive_task_buffer_time.setter # type: ignore
    def predictive_task_buffer_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "predictiveTaskBufferTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="predictiveValueBehavior")
    def predictive_value_behavior(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:

        - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        Default value: MaxOverridePredictiveValue
        """
        return jsii.get(self, "predictiveValueBehavior")

    @predictive_value_behavior.setter # type: ignore
    def predictive_value_behavior(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "predictiveValueBehavior", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="predictiveValueBuffer")
    def predictive_value_buffer(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        Default value: 0
        """
        return jsii.get(self, "predictiveValueBuffer")

    @predictive_value_buffer.setter # type: ignore
    def predictive_value_buffer(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "predictiveValueBuffer", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingRuleName")
    def scaling_rule_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        """
        return jsii.get(self, "scalingRuleName")

    @scaling_rule_name.setter # type: ignore
    def scaling_rule_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scalingRuleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scalingRuleType")
    def scaling_rule_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:

        - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        If this parameter value is not specified, the default value is SimpleScalingRule.
        """
        return jsii.get(self, "scalingRuleType")

    @scaling_rule_type.setter # type: ignore
    def scaling_rule_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scalingRuleType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="stepAdjustment")
    def step_adjustment(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingRule.StepAdjustmentProperty"]]]]:
        """
        :Property: stepAdjustment:
        """
        return jsii.get(self, "stepAdjustment")

    @step_adjustment.setter # type: ignore
    def step_adjustment(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosScalingRule.StepAdjustmentProperty"]]]],
    ) -> None:
        jsii.set(self, "stepAdjustment", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetValue")
    def target_value(self) -> typing.Optional[jsii.Number]:
        """
        :Property: targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        """
        return jsii.get(self, "targetValue")

    @target_value.setter # type: ignore
    def target_value(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "targetValue", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingRule.StepAdjustmentProperty",
        jsii_struct_bases=[],
        name_mapping={
            "metric_interval_lower_bound": "metricIntervalLowerBound",
            "metric_interval_upper_bound": "metricIntervalUpperBound",
            "scaling_adjustment": "scalingAdjustment",
        },
    )
    class StepAdjustmentProperty:
        def __init__(
            self,
            *,
            metric_interval_lower_bound: typing.Optional[jsii.Number] = None,
            metric_interval_upper_bound: typing.Optional[jsii.Number] = None,
            scaling_adjustment: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param metric_interval_lower_bound: 
            :param metric_interval_upper_bound: 
            :param scaling_adjustment: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if metric_interval_lower_bound is not None:
                self._values["metric_interval_lower_bound"] = metric_interval_lower_bound
            if metric_interval_upper_bound is not None:
                self._values["metric_interval_upper_bound"] = metric_interval_upper_bound
            if scaling_adjustment is not None:
                self._values["scaling_adjustment"] = scaling_adjustment

        @builtins.property
        def metric_interval_lower_bound(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            metricIntervalLowerBound: The lower limit value specified in step adjustment N.
            Valid values: -9.999999E18 to 9.999999E18.
            """
            result = self._values.get("metric_interval_lower_bound")
            return result

        @builtins.property
        def metric_interval_upper_bound(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            metricIntervalUpperBound: The upper limit value specified in step adjustment N.
            Valid values: -9.999999E18 to 9.999999E18.
            """
            result = self._values.get("metric_interval_upper_bound")
            return result

        @builtins.property
        def scaling_adjustment(self) -> typing.Optional[jsii.Number]:
            """
            :Property: scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
            """
            result = self._values.get("scaling_adjustment")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StepAdjustmentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScalingRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "adjustment_type": "adjustmentType",
        "adjustment_value": "adjustmentValue",
        "cooldown": "cooldown",
        "disable_scale_in": "disableScaleIn",
        "estimated_instance_warmup": "estimatedInstanceWarmup",
        "initial_max_size": "initialMaxSize",
        "metric_name": "metricName",
        "min_adjustment_magnitude": "minAdjustmentMagnitude",
        "predictive_scaling_mode": "predictiveScalingMode",
        "predictive_task_buffer_time": "predictiveTaskBufferTime",
        "predictive_value_behavior": "predictiveValueBehavior",
        "predictive_value_buffer": "predictiveValueBuffer",
        "scaling_rule_name": "scalingRuleName",
        "scaling_rule_type": "scalingRuleType",
        "step_adjustment": "stepAdjustment",
        "target_value": "targetValue",
    },
)
class RosScalingRuleProps:
    def __init__(
        self,
        *,
        scaling_group_id: builtins.str,
        adjustment_type: typing.Optional[builtins.str] = None,
        adjustment_value: typing.Optional[jsii.Number] = None,
        cooldown: typing.Optional[jsii.Number] = None,
        disable_scale_in: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        estimated_instance_warmup: typing.Optional[jsii.Number] = None,
        initial_max_size: typing.Optional[jsii.Number] = None,
        metric_name: typing.Optional[builtins.str] = None,
        min_adjustment_magnitude: typing.Optional[jsii.Number] = None,
        predictive_scaling_mode: typing.Optional[builtins.str] = None,
        predictive_task_buffer_time: typing.Optional[jsii.Number] = None,
        predictive_value_behavior: typing.Optional[builtins.str] = None,
        predictive_value_buffer: typing.Optional[jsii.Number] = None,
        scaling_rule_name: typing.Optional[builtins.str] = None,
        scaling_rule_type: typing.Optional[builtins.str] = None,
        step_adjustment: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingRule.StepAdjustmentProperty]]]] = None,
        target_value: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingRule``.

        :param scaling_group_id: 
        :param adjustment_type: 
        :param adjustment_value: 
        :param cooldown: 
        :param disable_scale_in: 
        :param estimated_instance_warmup: 
        :param initial_max_size: 
        :param metric_name: 
        :param min_adjustment_magnitude: 
        :param predictive_scaling_mode: 
        :param predictive_task_buffer_time: 
        :param predictive_value_behavior: 
        :param predictive_value_buffer: 
        :param scaling_rule_name: 
        :param scaling_rule_type: 
        :param step_adjustment: 
        :param target_value: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if adjustment_type is not None:
            self._values["adjustment_type"] = adjustment_type
        if adjustment_value is not None:
            self._values["adjustment_value"] = adjustment_value
        if cooldown is not None:
            self._values["cooldown"] = cooldown
        if disable_scale_in is not None:
            self._values["disable_scale_in"] = disable_scale_in
        if estimated_instance_warmup is not None:
            self._values["estimated_instance_warmup"] = estimated_instance_warmup
        if initial_max_size is not None:
            self._values["initial_max_size"] = initial_max_size
        if metric_name is not None:
            self._values["metric_name"] = metric_name
        if min_adjustment_magnitude is not None:
            self._values["min_adjustment_magnitude"] = min_adjustment_magnitude
        if predictive_scaling_mode is not None:
            self._values["predictive_scaling_mode"] = predictive_scaling_mode
        if predictive_task_buffer_time is not None:
            self._values["predictive_task_buffer_time"] = predictive_task_buffer_time
        if predictive_value_behavior is not None:
            self._values["predictive_value_behavior"] = predictive_value_behavior
        if predictive_value_buffer is not None:
            self._values["predictive_value_buffer"] = predictive_value_buffer
        if scaling_rule_name is not None:
            self._values["scaling_rule_name"] = scaling_rule_name
        if scaling_rule_type is not None:
            self._values["scaling_rule_type"] = scaling_rule_type
        if step_adjustment is not None:
            self._values["step_adjustment"] = step_adjustment
        if target_value is not None:
            self._values["target_value"] = target_value

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: ID of the scaling group of a scaling rule.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def adjustment_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        adjustmentType: Adjustment mode of a scaling rule. Optional values:

        - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        """
        result = self._values.get("adjustment_type")
        return result

    @builtins.property
    def adjustment_value(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        adjustmentValue: Adjusted value of a scaling rule. Value range:

        - QuantityChangeInCapacity: [-500, 500]
        - PercentChangeInCapacity: [-100, 10000]
        - TotalCapacity: [0, 1000]
        """
        result = self._values.get("adjustment_value")
        return result

    @builtins.property
    def cooldown(self) -> typing.Optional[jsii.Number]:
        """
        :Property: cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        """
        result = self._values.get("cooldown")
        return result

    @builtins.property
    def disable_scale_in(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
        Default value: false
        """
        result = self._values.get("disable_scale_in")
        return result

    @builtins.property
    def estimated_instance_warmup(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        """
        result = self._values.get("estimated_instance_warmup")
        return result

    @builtins.property
    def initial_max_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
        Default value: the same as the value of MaxSize
        """
        result = self._values.get("initial_max_size")
        return result

    @builtins.property
    def metric_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
        Valid values of a target tracking scaling rule:

        - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
        - ClassicInternetTx: the average public network outbound traffic over the classic network
        - VpcInternetRx: the average public network inbound traffic over the VPC
        - VpcInternetTx: the average public network outbound traffic over the VPC
        - IntranetRx: the average internal network inbound traffic
        - IntranetTx: the average internal network outbound traffic
        Valid values of a predictive scaling rule:
        - CpuUtilization: the average CPU utilization
        - IntranetRx: the average internal network inbound traffic
        - IntranetTx: the average internal network outbound traffic
        """
        result = self._values.get("metric_name")
        return result

    @builtins.property
    def min_adjustment_magnitude(self) -> typing.Optional[jsii.Number]:
        """
        :Property: minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        """
        result = self._values.get("min_adjustment_magnitude")
        return result

    @builtins.property
    def predictive_scaling_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        predictiveScalingMode: The mode of the predictive scaling rule. Valid values:

        - PredictAndScale: generates forecasts and creates forecast tasks.
        - PredictOnly: generates forecasts but does not create forecast tasks.
        Default value: PredictAndScale
        """
        result = self._values.get("predictive_scaling_mode")
        return result

    @builtins.property
    def predictive_task_buffer_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        Default value: 0
        """
        result = self._values.get("predictive_task_buffer_time")
        return result

    @builtins.property
    def predictive_value_behavior(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:

        - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        Default value: MaxOverridePredictiveValue
        """
        result = self._values.get("predictive_value_behavior")
        return result

    @builtins.property
    def predictive_value_buffer(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        Default value: 0
        """
        result = self._values.get("predictive_value_buffer")
        return result

    @builtins.property
    def scaling_rule_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        """
        result = self._values.get("scaling_rule_name")
        return result

    @builtins.property
    def scaling_rule_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:

        - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        If this parameter value is not specified, the default value is SimpleScalingRule.
        """
        result = self._values.get("scaling_rule_type")
        return result

    @builtins.property
    def step_adjustment(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingRule.StepAdjustmentProperty]]]]:
        """
        :Property: stepAdjustment:
        """
        result = self._values.get("step_adjustment")
        return result

    @builtins.property
    def target_value(self) -> typing.Optional[jsii.Number]:
        """
        :Property: targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        """
        result = self._values.get("target_value")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScheduledTask(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScheduledTask",
):
    """A ROS template type:  ``ALIYUN::ESS::ScheduledTask``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScheduledTaskProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScheduledTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosScheduledTask, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrScheduledTaskId")
    def attr_scheduled_task_id(self) -> typing.Any:
        """
        :Attribute: ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
        """
        return jsii.get(self, "attrScheduledTaskId")

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
    @jsii.member(jsii_name="launchTime")
    def launch_time(self) -> builtins.str:
        """
        :Property:

        launchTime: Time point at which the scheduled task is triggered.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        A time point 90 days after creation or modification cannot be entered.
        """
        return jsii.get(self, "launchTime")

    @launch_time.setter # type: ignore
    def launch_time(self, value: builtins.str) -> None:
        jsii.set(self, "launchTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scheduledAction")
    def scheduled_action(self) -> builtins.str:
        """
        :Property: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        """
        return jsii.get(self, "scheduledAction")

    @scheduled_action.setter # type: ignore
    def scheduled_action(self, value: builtins.str) -> None:
        jsii.set(self, "scheduledAction", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="launchExpirationTime")
    def launch_expiration_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        launchExpirationTime: Time period within which the failed scheduled task is retried.
        The default value is 600s.
        Value range: [0, 21600]
        """
        return jsii.get(self, "launchExpirationTime")

    @launch_expiration_time.setter # type: ignore
    def launch_expiration_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "launchExpirationTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="recurrenceEndTime")
    def recurrence_end_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceEndTime: End time of the scheduled task to be repeated.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        A time point 90 days after creation or modification cannot be entered.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        return jsii.get(self, "recurrenceEndTime")

    @recurrence_end_time.setter # type: ignore
    def recurrence_end_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "recurrenceEndTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="recurrenceType")
    def recurrence_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceType: Type of the scheduled task to be repeated. Optional values:

        - Daily: Recurrence interval by day for a scheduled task.
        - Weekly: Recurrence interval by week for a scheduled task.
        - Monthly: Recurrence interval by month for a scheduled task.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        return jsii.get(self, "recurrenceType")

    @recurrence_type.setter # type: ignore
    def recurrence_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "recurrenceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="recurrenceValue")
    def recurrence_value(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceValue: Value of the scheduled task to be repeated.

        - Daily: Only one value in the range [1,31] can be filled.
        - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        return jsii.get(self, "recurrenceValue")

    @recurrence_value.setter # type: ignore
    def recurrence_value(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "recurrenceValue", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scheduledTaskName")
    def scheduled_task_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        The account name is unique in the same region.
        If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        """
        return jsii.get(self, "scheduledTaskName")

    @scheduled_task_name.setter # type: ignore
    def scheduled_task_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scheduledTaskName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="taskEnabled")
    def task_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        taskEnabled: Whether to enable the scheduled task.

        - When the parameter is set to true, the task is enabled.
        - When the parameter is set to false, the task is disabled.
        The default value is true.
        """
        return jsii.get(self, "taskEnabled")

    @task_enabled.setter # type: ignore
    def task_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "taskEnabled", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScheduledTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "launch_time": "launchTime",
        "scheduled_action": "scheduledAction",
        "description": "description",
        "launch_expiration_time": "launchExpirationTime",
        "recurrence_end_time": "recurrenceEndTime",
        "recurrence_type": "recurrenceType",
        "recurrence_value": "recurrenceValue",
        "scheduled_task_name": "scheduledTaskName",
        "task_enabled": "taskEnabled",
    },
)
class RosScheduledTaskProps:
    def __init__(
        self,
        *,
        launch_time: builtins.str,
        scheduled_action: builtins.str,
        description: typing.Optional[builtins.str] = None,
        launch_expiration_time: typing.Optional[jsii.Number] = None,
        recurrence_end_time: typing.Optional[builtins.str] = None,
        recurrence_type: typing.Optional[builtins.str] = None,
        recurrence_value: typing.Optional[builtins.str] = None,
        scheduled_task_name: typing.Optional[builtins.str] = None,
        task_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScheduledTask``.

        :param launch_time: 
        :param scheduled_action: 
        :param description: 
        :param launch_expiration_time: 
        :param recurrence_end_time: 
        :param recurrence_type: 
        :param recurrence_value: 
        :param scheduled_task_name: 
        :param task_enabled: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "launch_time": launch_time,
            "scheduled_action": scheduled_action,
        }
        if description is not None:
            self._values["description"] = description
        if launch_expiration_time is not None:
            self._values["launch_expiration_time"] = launch_expiration_time
        if recurrence_end_time is not None:
            self._values["recurrence_end_time"] = recurrence_end_time
        if recurrence_type is not None:
            self._values["recurrence_type"] = recurrence_type
        if recurrence_value is not None:
            self._values["recurrence_value"] = recurrence_value
        if scheduled_task_name is not None:
            self._values["scheduled_task_name"] = scheduled_task_name
        if task_enabled is not None:
            self._values["task_enabled"] = task_enabled

    @builtins.property
    def launch_time(self) -> builtins.str:
        """
        :Property:

        launchTime: Time point at which the scheduled task is triggered.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        A time point 90 days after creation or modification cannot be entered.
        """
        result = self._values.get("launch_time")
        assert result is not None, "Required property 'launch_time' is missing"
        return result

    @builtins.property
    def scheduled_action(self) -> builtins.str:
        """
        :Property: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        """
        result = self._values.get("scheduled_action")
        assert result is not None, "Required property 'scheduled_action' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def launch_expiration_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        launchExpirationTime: Time period within which the failed scheduled task is retried.
        The default value is 600s.
        Value range: [0, 21600]
        """
        result = self._values.get("launch_expiration_time")
        return result

    @builtins.property
    def recurrence_end_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceEndTime: End time of the scheduled task to be repeated.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        A time point 90 days after creation or modification cannot be entered.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        result = self._values.get("recurrence_end_time")
        return result

    @builtins.property
    def recurrence_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceType: Type of the scheduled task to be repeated. Optional values:

        - Daily: Recurrence interval by day for a scheduled task.
        - Weekly: Recurrence interval by week for a scheduled task.
        - Monthly: Recurrence interval by month for a scheduled task.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        result = self._values.get("recurrence_type")
        return result

    @builtins.property
    def recurrence_value(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceValue: Value of the scheduled task to be repeated.

        - Daily: Only one value in the range [1,31] can be filled.
        - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        result = self._values.get("recurrence_value")
        return result

    @builtins.property
    def scheduled_task_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        The account name is unique in the same region.
        If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        """
        result = self._values.get("scheduled_task_name")
        return result

    @builtins.property
    def task_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        taskEnabled: Whether to enable the scheduled task.

        - When the parameter is set to true, the task is enabled.
        - When the parameter is set to false, the task is disabled.
        The default value is true.
        """
        result = self._values.get("task_enabled")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScheduledTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingConfiguration(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingConfiguration",
):
    """A ROS resource type:  ``ALIYUN::ESS::ScalingConfiguration``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScalingConfigurationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingConfiguration``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ScalingConfiguration, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> typing.Any:
        """
        :Attribute: ScalingConfigurationId: The scaling configuration id
        """
        return jsii.get(self, "attrScalingConfigurationId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScalingConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "deployment_set_id": "deploymentSetId",
        "disk_mappings": "diskMappings",
        "hpc_cluster_id": "hpcClusterId",
        "image_id": "imageId",
        "instance_id": "instanceId",
        "instance_name": "instanceName",
        "instance_type": "instanceType",
        "instance_types": "instanceTypes",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_in": "internetMaxBandwidthIn",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "io_optimized": "ioOptimized",
        "key_pair_name": "keyPairName",
        "password_inherit": "passwordInherit",
        "ram_role_name": "ramRoleName",
        "resource_group_id": "resourceGroupId",
        "scaling_configuration_name": "scalingConfigurationName",
        "security_group_id": "securityGroupId",
        "spot_price_limit": "spotPriceLimit",
        "spot_price_limit_for_instance_type": "spotPriceLimitForInstanceType",
        "spot_strategy": "spotStrategy",
        "system_disk_auto_snapshot_policy_id": "systemDiskAutoSnapshotPolicyId",
        "system_disk_category": "systemDiskCategory",
        "system_disk_performance_level": "systemDiskPerformanceLevel",
        "system_disk_size": "systemDiskSize",
        "tag_list": "tagList",
        "user_data": "userData",
    },
)
class ScalingConfigurationProps:
    def __init__(
        self,
        *,
        scaling_group_id: builtins.str,
        deployment_set_id: typing.Optional[builtins.str] = None,
        disk_mappings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]] = None,
        hpc_cluster_id: typing.Optional[builtins.str] = None,
        image_id: typing.Optional[builtins.str] = None,
        instance_id: typing.Optional[builtins.str] = None,
        instance_name: typing.Optional[builtins.str] = None,
        instance_type: typing.Optional[builtins.str] = None,
        instance_types: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        internet_max_bandwidth_in: typing.Optional[jsii.Number] = None,
        internet_max_bandwidth_out: typing.Optional[jsii.Number] = None,
        io_optimized: typing.Optional[builtins.str] = None,
        key_pair_name: typing.Optional[builtins.str] = None,
        password_inherit: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ram_role_name: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        scaling_configuration_name: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        spot_price_limit: typing.Optional[jsii.Number] = None,
        spot_price_limit_for_instance_type: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        spot_strategy: typing.Optional[builtins.str] = None,
        system_disk_auto_snapshot_policy_id: typing.Optional[builtins.str] = None,
        system_disk_category: typing.Optional[builtins.str] = None,
        system_disk_performance_level: typing.Optional[builtins.str] = None,
        system_disk_size: typing.Optional[jsii.Number] = None,
        tag_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.TagListProperty]]]] = None,
        user_data: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingConfiguration``.

        :param scaling_group_id: 
        :param deployment_set_id: 
        :param disk_mappings: 
        :param hpc_cluster_id: 
        :param image_id: 
        :param instance_id: 
        :param instance_name: 
        :param instance_type: 
        :param instance_types: 
        :param internet_charge_type: 
        :param internet_max_bandwidth_in: 
        :param internet_max_bandwidth_out: 
        :param io_optimized: 
        :param key_pair_name: 
        :param password_inherit: 
        :param ram_role_name: 
        :param resource_group_id: 
        :param scaling_configuration_name: 
        :param security_group_id: 
        :param spot_price_limit: 
        :param spot_price_limit_for_instance_type: 
        :param spot_strategy: 
        :param system_disk_auto_snapshot_policy_id: 
        :param system_disk_category: 
        :param system_disk_performance_level: 
        :param system_disk_size: 
        :param tag_list: 
        :param user_data: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if deployment_set_id is not None:
            self._values["deployment_set_id"] = deployment_set_id
        if disk_mappings is not None:
            self._values["disk_mappings"] = disk_mappings
        if hpc_cluster_id is not None:
            self._values["hpc_cluster_id"] = hpc_cluster_id
        if image_id is not None:
            self._values["image_id"] = image_id
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if instance_types is not None:
            self._values["instance_types"] = instance_types
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if internet_max_bandwidth_in is not None:
            self._values["internet_max_bandwidth_in"] = internet_max_bandwidth_in
        if internet_max_bandwidth_out is not None:
            self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if password_inherit is not None:
            self._values["password_inherit"] = password_inherit
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scaling_configuration_name is not None:
            self._values["scaling_configuration_name"] = scaling_configuration_name
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_price_limit_for_instance_type is not None:
            self._values["spot_price_limit_for_instance_type"] = spot_price_limit_for_instance_type
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if system_disk_auto_snapshot_policy_id is not None:
            self._values["system_disk_auto_snapshot_policy_id"] = system_disk_auto_snapshot_policy_id
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category
        if system_disk_performance_level is not None:
            self._values["system_disk_performance_level"] = system_disk_performance_level
        if system_disk_size is not None:
            self._values["system_disk_size"] = system_disk_size
        if tag_list is not None:
            self._values["tag_list"] = tag_list
        if user_data is not None:
            self._values["user_data"] = user_data

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: Scaling group id to create the scaling configuration.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def deployment_set_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: deploymentSetId: Deployment set ID.
        """
        result = self._values.get("deployment_set_id")
        return result

    @builtins.property
    def disk_mappings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]]:
        """
        :Property: diskMappings: Disk mappings to attach to instance.
        """
        result = self._values.get("disk_mappings")
        return result

    @builtins.property
    def hpc_cluster_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: hpcClusterId: The HPC cluster ID to which the instance belongs.
        """
        result = self._values.get("hpc_cluster_id")
        return result

    @builtins.property
    def image_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageId: Image ID to create ecs instance .
        """
        result = self._values.get("image_id")
        return result

    @builtins.property
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        """
        result = self._values.get("instance_id")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceName: The name of the instance launched from the current scaling configuration.
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def instance_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceType: ecs supported instance type.
        """
        result = self._values.get("instance_type")
        return result

    @builtins.property
    def instance_types(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        """
        result = self._values.get("instance_types")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def internet_max_bandwidth_in(self) -> typing.Optional[jsii.Number]:
        """
        :Property: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        """
        result = self._values.get("internet_max_bandwidth_in")
        return result

    @builtins.property
    def internet_max_bandwidth_out(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        """
        result = self._values.get("internet_max_bandwidth_out")
        return result

    @builtins.property
    def io_optimized(self) -> typing.Optional[builtins.str]:
        """
        :Property: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        """
        result = self._values.get("io_optimized")
        return result

    @builtins.property
    def key_pair_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPairName: SSH key pair name.
        """
        result = self._values.get("key_pair_name")
        return result

    @builtins.property
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        """
        result = self._values.get("password_inherit")
        return result

    @builtins.property
    def ram_role_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        """
        result = self._values.get("ram_role_name")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group id.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def scaling_configuration_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingConfigurationName: Name of created scaling configuration.
        """
        result = self._values.get("scaling_configuration_name")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Security Group to create ecs instance.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def spot_price_limit(self) -> typing.Optional[jsii.Number]:
        """
        :Property: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        """
        result = self._values.get("spot_price_limit")
        return result

    @builtins.property
    def spot_price_limit_for_instance_type(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 50 items can be specified.
        Key
        ecs instance type
        Value
        Supports a maximum of 3 decimal places.
        """
        result = self._values.get("spot_price_limit_for_instance_type")
        return result

    @builtins.property
    def spot_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        NoSpot: Normal pay-per-use instance
        SpotWithPriceLimit: Set a preemptive instance of the cap price
        SpotAsPriceGo: System automatic bidding, following the current market actual price
        Default: NoSpot.
        """
        result = self._values.get("spot_strategy")
        return result

    @builtins.property
    def system_disk_auto_snapshot_policy_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        """
        result = self._values.get("system_disk_auto_snapshot_policy_id")
        return result

    @builtins.property
    def system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        """
        result = self._values.get("system_disk_category")
        return result

    @builtins.property
    def system_disk_performance_level(self) -> typing.Optional[builtins.str]:
        """
        :Property: systemDiskPerformanceLevel: The performance level of an ESSD.
        """
        result = self._values.get("system_disk_performance_level")
        return result

    @builtins.property
    def system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: systemDiskSize: Size of system disk. Unit is GB.
        """
        result = self._values.get("system_disk_size")
        return result

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingConfiguration.TagListProperty]]]]:
        """
        :Property:

        tagList: The tags of an instance in list format.
        Do not use with Tags at the same time.
        You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
        At most 20 tags can be specified.
        Key
        It can be up to 64 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Cannot be a null string.
        Value
        It can be up to 128 characters in length.
        Cannot begin with aliyun.
        Cannot begin with http:// or https://.
        Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>*stack*<stack_id>") if possible.
        """
        result = self._values.get("tag_list")
        return result

    @builtins.property
    def user_data(self) -> typing.Optional[builtins.str]:
        """
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        result = self._values.get("user_data")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroup",
):
    """A ROS resource type:  ``ALIYUN::ESS::ScalingGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScalingGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ScalingGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> typing.Any:
        """
        :Attribute: ScalingGroupId: Scaling group Id
        """
        return jsii.get(self, "attrScalingGroupId")


class ScalingGroupEnable(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroupEnable",
):
    """A ROS resource type:  ``ALIYUN::ESS::ScalingGroupEnable``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScalingGroupEnableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ScalingGroupEnable, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLifecycleState")
    def attr_lifecycle_state(self) -> typing.Any:
        """
        :Attribute: LifecycleState: The scaling group status
        """
        return jsii.get(self, "attrLifecycleState")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> typing.Any:
        """
        :Attribute: ScalingGroupId: The scaling group id
        """
        return jsii.get(self, "attrScalingGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingInstanceDetails")
    def attr_scaling_instance_details(self) -> typing.Any:
        """
        :Attribute: ScalingInstanceDetails: Detail information of auto created scaling instances
        """
        return jsii.get(self, "attrScalingInstanceDetails")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingInstances")
    def attr_scaling_instances(self) -> typing.Any:
        """
        :Attribute: ScalingInstances: The auto created scaling instances
        """
        return jsii.get(self, "attrScalingInstances")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteErrorInfo")
    def attr_scaling_rule_aris_execute_error_info(self) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteErrorInfo")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesAdded")
    def attr_scaling_rule_aris_execute_result_instances_added(self) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteResultInstancesAdded")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesRemoved")
    def attr_scaling_rule_aris_execute_result_instances_removed(self) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteResultInstancesRemoved")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultNumberOfAddedInstances")
    def attr_scaling_rule_aris_execute_result_number_of_added_instances(
        self,
    ) -> typing.Any:
        """
        :Attribute: ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
        """
        return jsii.get(self, "attrScalingRuleArisExecuteResultNumberOfAddedInstances")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroupEnableProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "instance_ids": "instanceIds",
        "remove_instance_ids": "removeInstanceIds",
        "scaling_configuration_id": "scalingConfigurationId",
        "scaling_rule_aris": "scalingRuleAris",
        "scaling_rule_aris_execute_version": "scalingRuleArisExecuteVersion",
    },
)
class ScalingGroupEnableProps:
    def __init__(
        self,
        *,
        scaling_group_id: builtins.str,
        instance_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        remove_instance_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        scaling_configuration_id: typing.Optional[builtins.str] = None,
        scaling_rule_aris: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        scaling_rule_aris_execute_version: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scaling_group_id: 
        :param instance_ids: 
        :param remove_instance_ids: 
        :param scaling_configuration_id: 
        :param scaling_rule_aris: 
        :param scaling_rule_aris_execute_version: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if instance_ids is not None:
            self._values["instance_ids"] = instance_ids
        if remove_instance_ids is not None:
            self._values["remove_instance_ids"] = remove_instance_ids
        if scaling_configuration_id is not None:
            self._values["scaling_configuration_id"] = scaling_configuration_id
        if scaling_rule_aris is not None:
            self._values["scaling_rule_aris"] = scaling_rule_aris
        if scaling_rule_aris_execute_version is not None:
            self._values["scaling_rule_aris_execute_version"] = scaling_rule_aris_execute_version

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: The id of operated scaling group.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        """
        result = self._values.get("instance_ids")
        return result

    @builtins.property
    def remove_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        """
        result = self._values.get("remove_instance_ids")
        return result

    @builtins.property
    def scaling_configuration_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingConfigurationId: The id of scaling configuration which will be activate.
        """
        result = self._values.get("scaling_configuration_id")
        return result

    @builtins.property
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        When creating the resource, all the scaling rule aris in the list will be executed.
        When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        """
        result = self._values.get("scaling_rule_aris")
        return result

    @builtins.property
    def scaling_rule_aris_execute_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        """
        result = self._values.get("scaling_rule_aris_execute_version")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingGroupEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "max_size": "maxSize",
        "min_size": "minSize",
        "db_instance_ids": "dbInstanceIds",
        "default_cooldown": "defaultCooldown",
        "desired_capacity": "desiredCapacity",
        "group_deletion_protection": "groupDeletionProtection",
        "health_check_type": "healthCheckType",
        "instance_id": "instanceId",
        "launch_template_id": "launchTemplateId",
        "launch_template_version": "launchTemplateVersion",
        "load_balancer_ids": "loadBalancerIds",
        "multi_az_policy": "multiAzPolicy",
        "notification_configurations": "notificationConfigurations",
        "protected_instances": "protectedInstances",
        "removal_policys": "removalPolicys",
        "scaling_group_name": "scalingGroupName",
        "standby_instances": "standbyInstances",
        "v_switch_id": "vSwitchId",
        "v_switch_ids": "vSwitchIds",
    },
)
class ScalingGroupProps:
    def __init__(
        self,
        *,
        max_size: jsii.Number,
        min_size: jsii.Number,
        db_instance_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        default_cooldown: typing.Optional[jsii.Number] = None,
        desired_capacity: typing.Optional[jsii.Number] = None,
        group_deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        health_check_type: typing.Optional[builtins.str] = None,
        instance_id: typing.Optional[builtins.str] = None,
        launch_template_id: typing.Optional[builtins.str] = None,
        launch_template_version: typing.Optional[builtins.str] = None,
        load_balancer_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        multi_az_policy: typing.Optional[builtins.str] = None,
        notification_configurations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]] = None,
        protected_instances: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        removal_policys: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        scaling_group_name: typing.Optional[builtins.str] = None,
        standby_instances: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingGroup``.

        :param max_size: 
        :param min_size: 
        :param db_instance_ids: 
        :param default_cooldown: 
        :param desired_capacity: 
        :param group_deletion_protection: 
        :param health_check_type: 
        :param instance_id: 
        :param launch_template_id: 
        :param launch_template_version: 
        :param load_balancer_ids: 
        :param multi_az_policy: 
        :param notification_configurations: 
        :param protected_instances: 
        :param removal_policys: 
        :param scaling_group_name: 
        :param standby_instances: 
        :param v_switch_id: 
        :param v_switch_ids: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "max_size": max_size,
            "min_size": min_size,
        }
        if db_instance_ids is not None:
            self._values["db_instance_ids"] = db_instance_ids
        if default_cooldown is not None:
            self._values["default_cooldown"] = default_cooldown
        if desired_capacity is not None:
            self._values["desired_capacity"] = desired_capacity
        if group_deletion_protection is not None:
            self._values["group_deletion_protection"] = group_deletion_protection
        if health_check_type is not None:
            self._values["health_check_type"] = health_check_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if launch_template_id is not None:
            self._values["launch_template_id"] = launch_template_id
        if launch_template_version is not None:
            self._values["launch_template_version"] = launch_template_version
        if load_balancer_ids is not None:
            self._values["load_balancer_ids"] = load_balancer_ids
        if multi_az_policy is not None:
            self._values["multi_az_policy"] = multi_az_policy
        if notification_configurations is not None:
            self._values["notification_configurations"] = notification_configurations
        if protected_instances is not None:
            self._values["protected_instances"] = protected_instances
        if removal_policys is not None:
            self._values["removal_policys"] = removal_policys
        if scaling_group_name is not None:
            self._values["scaling_group_name"] = scaling_group_name
        if standby_instances is not None:
            self._values["standby_instances"] = standby_instances
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids

    @builtins.property
    def max_size(self) -> jsii.Number:
        """
        :Property: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        """
        result = self._values.get("max_size")
        assert result is not None, "Required property 'max_size' is missing"
        return result

    @builtins.property
    def min_size(self) -> jsii.Number:
        """
        :Property: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        """
        result = self._values.get("min_size")
        assert result is not None, "Required property 'min_size' is missing"
        return result

    @builtins.property
    def db_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        """
        result = self._values.get("db_instance_ids")
        return result

    @builtins.property
    def default_cooldown(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        The default value is 300s.
        """
        result = self._values.get("default_cooldown")
        return result

    @builtins.property
    def desired_capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        """
        result = self._values.get("desired_capacity")
        return result

    @builtins.property
    def group_deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        groupDeletionProtection: Whether to enable deletion protection for scaling group.
        Default to False.
        """
        result = self._values.get("group_deletion_protection")
        return result

    @builtins.property
    def health_check_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        """
        result = self._values.get("health_check_type")
        return result

    @builtins.property
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        """
        result = self._values.get("instance_id")
        return result

    @builtins.property
    def launch_template_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        """
        result = self._values.get("launch_template_id")
        return result

    @builtins.property
    def launch_template_version(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        launchTemplateVersion: The version of the instance launch template. Valid values:
        A fixed template version numbe.
        Default: The default template version is always used.
        Latest: The latest template version is always used.
        """
        result = self._values.get("launch_template_version")
        return result

    @builtins.property
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        """
        result = self._values.get("load_balancer_ids")
        return result

    @builtins.property
    def multi_az_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:

        1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
        """
        result = self._values.get("multi_az_policy")
        return result

    @builtins.property
    def notification_configurations(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]]:
        """
        :Property: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        """
        result = self._values.get("notification_configurations")
        return result

    @builtins.property
    def protected_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: protectedInstances: ECS instances of protected mode in the scaling group.
        """
        result = self._values.get("protected_instances")
        return result

    @builtins.property
    def removal_policys(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        removalPolicys: Policy for removing ECS instances from the scaling group.
        Optional values:
        OldestInstance: removes the first ECS instance attached to the scaling group.
        NewestInstance: removes the first ECS instance attached to the scaling group.
        OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        """
        result = self._values.get("removal_policys")
        return result

    @builtins.property
    def scaling_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        If this parameter is not specified, the default value is ScalingGroupId.
        """
        result = self._values.get("scaling_group_name")
        return result

    @builtins.property
    def standby_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: standbyInstances: ECS instances of standby mode in the scaling group.
        """
        result = self._values.get("standby_instances")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        The valid range of N is [1, 5], and you can specify at most 5 VSwitches in a VPC.
        The priority of VSwitches descends from 1 to 5, and 1 indicates the highest priority.
        When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        """
        result = self._values.get("v_switch_ids")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingRule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingRule",
):
    """A ROS resource type:  ``ALIYUN::ESS::ScalingRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScalingRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScalingRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ScalingRule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(self) -> typing.Any:
        """
        :Attribute: ScalingRuleAri: Unique identifier of a scaling rule.
        """
        return jsii.get(self, "attrScalingRuleAri")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> typing.Any:
        """
        :Attribute: ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
        """
        return jsii.get(self, "attrScalingRuleId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScalingRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "adjustment_type": "adjustmentType",
        "adjustment_value": "adjustmentValue",
        "cooldown": "cooldown",
        "disable_scale_in": "disableScaleIn",
        "estimated_instance_warmup": "estimatedInstanceWarmup",
        "initial_max_size": "initialMaxSize",
        "metric_name": "metricName",
        "min_adjustment_magnitude": "minAdjustmentMagnitude",
        "predictive_scaling_mode": "predictiveScalingMode",
        "predictive_task_buffer_time": "predictiveTaskBufferTime",
        "predictive_value_behavior": "predictiveValueBehavior",
        "predictive_value_buffer": "predictiveValueBuffer",
        "scaling_rule_name": "scalingRuleName",
        "scaling_rule_type": "scalingRuleType",
        "step_adjustment": "stepAdjustment",
        "target_value": "targetValue",
    },
)
class ScalingRuleProps:
    def __init__(
        self,
        *,
        scaling_group_id: builtins.str,
        adjustment_type: typing.Optional[builtins.str] = None,
        adjustment_value: typing.Optional[jsii.Number] = None,
        cooldown: typing.Optional[jsii.Number] = None,
        disable_scale_in: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        estimated_instance_warmup: typing.Optional[jsii.Number] = None,
        initial_max_size: typing.Optional[jsii.Number] = None,
        metric_name: typing.Optional[builtins.str] = None,
        min_adjustment_magnitude: typing.Optional[jsii.Number] = None,
        predictive_scaling_mode: typing.Optional[builtins.str] = None,
        predictive_task_buffer_time: typing.Optional[jsii.Number] = None,
        predictive_value_behavior: typing.Optional[builtins.str] = None,
        predictive_value_buffer: typing.Optional[jsii.Number] = None,
        scaling_rule_name: typing.Optional[builtins.str] = None,
        scaling_rule_type: typing.Optional[builtins.str] = None,
        step_adjustment: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingRule.StepAdjustmentProperty]]]] = None,
        target_value: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScalingRule``.

        :param scaling_group_id: 
        :param adjustment_type: 
        :param adjustment_value: 
        :param cooldown: 
        :param disable_scale_in: 
        :param estimated_instance_warmup: 
        :param initial_max_size: 
        :param metric_name: 
        :param min_adjustment_magnitude: 
        :param predictive_scaling_mode: 
        :param predictive_task_buffer_time: 
        :param predictive_value_behavior: 
        :param predictive_value_buffer: 
        :param scaling_rule_name: 
        :param scaling_rule_type: 
        :param step_adjustment: 
        :param target_value: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if adjustment_type is not None:
            self._values["adjustment_type"] = adjustment_type
        if adjustment_value is not None:
            self._values["adjustment_value"] = adjustment_value
        if cooldown is not None:
            self._values["cooldown"] = cooldown
        if disable_scale_in is not None:
            self._values["disable_scale_in"] = disable_scale_in
        if estimated_instance_warmup is not None:
            self._values["estimated_instance_warmup"] = estimated_instance_warmup
        if initial_max_size is not None:
            self._values["initial_max_size"] = initial_max_size
        if metric_name is not None:
            self._values["metric_name"] = metric_name
        if min_adjustment_magnitude is not None:
            self._values["min_adjustment_magnitude"] = min_adjustment_magnitude
        if predictive_scaling_mode is not None:
            self._values["predictive_scaling_mode"] = predictive_scaling_mode
        if predictive_task_buffer_time is not None:
            self._values["predictive_task_buffer_time"] = predictive_task_buffer_time
        if predictive_value_behavior is not None:
            self._values["predictive_value_behavior"] = predictive_value_behavior
        if predictive_value_buffer is not None:
            self._values["predictive_value_buffer"] = predictive_value_buffer
        if scaling_rule_name is not None:
            self._values["scaling_rule_name"] = scaling_rule_name
        if scaling_rule_type is not None:
            self._values["scaling_rule_type"] = scaling_rule_type
        if step_adjustment is not None:
            self._values["step_adjustment"] = step_adjustment
        if target_value is not None:
            self._values["target_value"] = target_value

    @builtins.property
    def scaling_group_id(self) -> builtins.str:
        """
        :Property: scalingGroupId: ID of the scaling group of a scaling rule.
        """
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return result

    @builtins.property
    def adjustment_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        adjustmentType: Adjustment mode of a scaling rule. Optional values:

        - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        """
        result = self._values.get("adjustment_type")
        return result

    @builtins.property
    def adjustment_value(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        adjustmentValue: Adjusted value of a scaling rule. Value range:

        - QuantityChangeInCapacity: [-500, 500]
        - PercentChangeInCapacity: [-100, 10000]
        - TotalCapacity: [0, 1000]
        """
        result = self._values.get("adjustment_value")
        return result

    @builtins.property
    def cooldown(self) -> typing.Optional[jsii.Number]:
        """
        :Property: cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        """
        result = self._values.get("cooldown")
        return result

    @builtins.property
    def disable_scale_in(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
        Default value: false
        """
        result = self._values.get("disable_scale_in")
        return result

    @builtins.property
    def estimated_instance_warmup(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        """
        result = self._values.get("estimated_instance_warmup")
        return result

    @builtins.property
    def initial_max_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
        Default value: the same as the value of MaxSize
        """
        result = self._values.get("initial_max_size")
        return result

    @builtins.property
    def metric_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
        Valid values of a target tracking scaling rule:

        - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
        - ClassicInternetTx: the average public network outbound traffic over the classic network
        - VpcInternetRx: the average public network inbound traffic over the VPC
        - VpcInternetTx: the average public network outbound traffic over the VPC
        - IntranetRx: the average internal network inbound traffic
        - IntranetTx: the average internal network outbound traffic
        Valid values of a predictive scaling rule:
        - CpuUtilization: the average CPU utilization
        - IntranetRx: the average internal network inbound traffic
        - IntranetTx: the average internal network outbound traffic
        """
        result = self._values.get("metric_name")
        return result

    @builtins.property
    def min_adjustment_magnitude(self) -> typing.Optional[jsii.Number]:
        """
        :Property: minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        """
        result = self._values.get("min_adjustment_magnitude")
        return result

    @builtins.property
    def predictive_scaling_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        predictiveScalingMode: The mode of the predictive scaling rule. Valid values:

        - PredictAndScale: generates forecasts and creates forecast tasks.
        - PredictOnly: generates forecasts but does not create forecast tasks.
        Default value: PredictAndScale
        """
        result = self._values.get("predictive_scaling_mode")
        return result

    @builtins.property
    def predictive_task_buffer_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        Default value: 0
        """
        result = self._values.get("predictive_task_buffer_time")
        return result

    @builtins.property
    def predictive_value_behavior(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:

        - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        Default value: MaxOverridePredictiveValue
        """
        result = self._values.get("predictive_value_behavior")
        return result

    @builtins.property
    def predictive_value_buffer(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        Default value: 0
        """
        result = self._values.get("predictive_value_buffer")
        return result

    @builtins.property
    def scaling_rule_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        """
        result = self._values.get("scaling_rule_name")
        return result

    @builtins.property
    def scaling_rule_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:

        - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        If this parameter value is not specified, the default value is SimpleScalingRule.
        """
        result = self._values.get("scaling_rule_type")
        return result

    @builtins.property
    def step_adjustment(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosScalingRule.StepAdjustmentProperty]]]]:
        """
        :Property: stepAdjustment:
        """
        result = self._values.get("step_adjustment")
        return result

    @builtins.property
    def target_value(self) -> typing.Optional[jsii.Number]:
        """
        :Property: targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        """
        result = self._values.get("target_value")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScheduledTask(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScheduledTask",
):
    """A ROS resource type:  ``ALIYUN::ESS::ScheduledTask``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScheduledTaskProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ESS::ScheduledTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ScheduledTask, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScheduledTaskId")
    def attr_scheduled_task_id(self) -> typing.Any:
        """
        :Attribute: ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
        """
        return jsii.get(self, "attrScheduledTaskId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScheduledTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "launch_time": "launchTime",
        "scheduled_action": "scheduledAction",
        "description": "description",
        "launch_expiration_time": "launchExpirationTime",
        "recurrence_end_time": "recurrenceEndTime",
        "recurrence_type": "recurrenceType",
        "recurrence_value": "recurrenceValue",
        "scheduled_task_name": "scheduledTaskName",
        "task_enabled": "taskEnabled",
    },
)
class ScheduledTaskProps:
    def __init__(
        self,
        *,
        launch_time: builtins.str,
        scheduled_action: builtins.str,
        description: typing.Optional[builtins.str] = None,
        launch_expiration_time: typing.Optional[jsii.Number] = None,
        recurrence_end_time: typing.Optional[builtins.str] = None,
        recurrence_type: typing.Optional[builtins.str] = None,
        recurrence_value: typing.Optional[builtins.str] = None,
        scheduled_task_name: typing.Optional[builtins.str] = None,
        task_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ESS::ScheduledTask``.

        :param launch_time: 
        :param scheduled_action: 
        :param description: 
        :param launch_expiration_time: 
        :param recurrence_end_time: 
        :param recurrence_type: 
        :param recurrence_value: 
        :param scheduled_task_name: 
        :param task_enabled: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "launch_time": launch_time,
            "scheduled_action": scheduled_action,
        }
        if description is not None:
            self._values["description"] = description
        if launch_expiration_time is not None:
            self._values["launch_expiration_time"] = launch_expiration_time
        if recurrence_end_time is not None:
            self._values["recurrence_end_time"] = recurrence_end_time
        if recurrence_type is not None:
            self._values["recurrence_type"] = recurrence_type
        if recurrence_value is not None:
            self._values["recurrence_value"] = recurrence_value
        if scheduled_task_name is not None:
            self._values["scheduled_task_name"] = scheduled_task_name
        if task_enabled is not None:
            self._values["task_enabled"] = task_enabled

    @builtins.property
    def launch_time(self) -> builtins.str:
        """
        :Property:

        launchTime: Time point at which the scheduled task is triggered.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        A time point 90 days after creation or modification cannot be entered.
        """
        result = self._values.get("launch_time")
        assert result is not None, "Required property 'launch_time' is missing"
        return result

    @builtins.property
    def scheduled_action(self) -> builtins.str:
        """
        :Property: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        """
        result = self._values.get("scheduled_action")
        assert result is not None, "Required property 'scheduled_action' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def launch_expiration_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        launchExpirationTime: Time period within which the failed scheduled task is retried.
        The default value is 600s.
        Value range: [0, 21600]
        """
        result = self._values.get("launch_expiration_time")
        return result

    @builtins.property
    def recurrence_end_time(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceEndTime: End time of the scheduled task to be repeated.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        A time point 90 days after creation or modification cannot be entered.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        result = self._values.get("recurrence_end_time")
        return result

    @builtins.property
    def recurrence_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceType: Type of the scheduled task to be repeated. Optional values:

        - Daily: Recurrence interval by day for a scheduled task.
        - Weekly: Recurrence interval by week for a scheduled task.
        - Monthly: Recurrence interval by month for a scheduled task.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        result = self._values.get("recurrence_type")
        return result

    @builtins.property
    def recurrence_value(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        recurrenceValue: Value of the scheduled task to be repeated.

        - Daily: Only one value in the range [1,31] can be filled.
        - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        """
        result = self._values.get("recurrence_value")
        return result

    @builtins.property
    def scheduled_task_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        The account name is unique in the same region.
        If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        """
        result = self._values.get("scheduled_task_name")
        return result

    @builtins.property
    def task_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        taskEnabled: Whether to enable the scheduled task.

        - When the parameter is set to true, the task is enabled.
        - When the parameter is set to false, the task is disabled.
        The default value is true.
        """
        result = self._values.get("task_enabled")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScheduledTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AlarmTask",
    "AlarmTaskEnable",
    "AlarmTaskEnableProps",
    "AlarmTaskProps",
    "LifecycleHook",
    "LifecycleHookProps",
    "RosAlarmTask",
    "RosAlarmTaskEnable",
    "RosAlarmTaskEnableProps",
    "RosAlarmTaskProps",
    "RosLifecycleHook",
    "RosLifecycleHookProps",
    "RosScalingConfiguration",
    "RosScalingConfigurationProps",
    "RosScalingGroup",
    "RosScalingGroupEnable",
    "RosScalingGroupEnableProps",
    "RosScalingGroupProps",
    "RosScalingRule",
    "RosScalingRuleProps",
    "RosScheduledTask",
    "RosScheduledTaskProps",
    "ScalingConfiguration",
    "ScalingConfigurationProps",
    "ScalingGroup",
    "ScalingGroupEnable",
    "ScalingGroupEnableProps",
    "ScalingGroupProps",
    "ScalingRule",
    "ScalingRuleProps",
    "ScheduledTask",
    "ScheduledTaskProps",
]

publication.publish()
