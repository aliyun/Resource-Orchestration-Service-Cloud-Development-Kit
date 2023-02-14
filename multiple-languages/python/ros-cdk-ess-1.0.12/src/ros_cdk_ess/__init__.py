'''
## Aliyun ROS ESS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ESS from '@alicloud/ros-cdk-ess';
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


class AlarmTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.AlarmTask",
):
    '''A ROS resource type:  ``ALIYUN::ESS::AlarmTask``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AlarmTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::AlarmTask``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__764fd1e9940f9a4c2bd11667c7fcd7ef227eff77dfff31f08b24eeba648816c2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAlarmTaskId")
    def attr_alarm_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AlarmTaskId: The alarm task ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarmTaskId"))


class AlarmTaskEnable(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.AlarmTaskEnable",
):
    '''A ROS resource type:  ``ALIYUN::ESS::AlarmTaskEnable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AlarmTaskEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::AlarmTaskEnable``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77a2d7f90f91a5d104a5e4d7bfb6465099d560e28e764973f09d0ece596d4cb8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.AlarmTaskEnableProps",
    jsii_struct_bases=[],
    name_mapping={"alarm_task_id": "alarmTaskId", "enable": "enable"},
)
class AlarmTaskEnableProps:
    def __init__(
        self,
        *,
        alarm_task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::AlarmTaskEnable``.

        :param alarm_task_id: Property alarmTaskId: The id of alarm task.
        :param enable: Property enable: Enable alarm task or not.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75a8133c27a4af819b5d126cd149ee508c1190e31b974a1e5fc006293bc5a9dd)
            check_type(argname="argument alarm_task_id", value=alarm_task_id, expected_type=type_hints["alarm_task_id"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "alarm_task_id": alarm_task_id,
            "enable": enable,
        }

    @builtins.property
    def alarm_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property alarmTaskId: The id of alarm task.'''
        result = self._values.get("alarm_task_id")
        assert result is not None, "Required property 'alarm_task_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property enable: Enable alarm task or not.'''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        alarm_action: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        comparison_operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dimensions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlarmTask.DimensionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        metric_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        statistics: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::AlarmTask``.

        :param alarm_action: Property alarmAction: Alarm Actions.
        :param metric_name: Property metricName: Metric Name.
        :param scaling_group_id: Property scalingGroupId: The ID of the scaling group.
        :param threshold: Property threshold: Threshold.
        :param comparison_operator: Property comparisonOperator: Comparison Operator.
        :param description: Property description: Description.
        :param dimensions: Property dimensions: Dimensions.
        :param evaluation_count: Property evaluationCount: Evaluation Count.
        :param group_id: Property groupId: Group Id.
        :param metric_type: Property metricType: Metric Type.
        :param name: Property name: Name.
        :param period: Property period: Period.
        :param statistics: Property statistics: Statistics.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe1bbef50f679260f65ae6805fe47532b6529a1892faf30864bd62d2686929dc)
            check_type(argname="argument alarm_action", value=alarm_action, expected_type=type_hints["alarm_action"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
            check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dimensions", value=dimensions, expected_type=type_hints["dimensions"])
            check_type(argname="argument evaluation_count", value=evaluation_count, expected_type=type_hints["evaluation_count"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument metric_type", value=metric_type, expected_type=type_hints["metric_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def alarm_action(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property alarmAction: Alarm Actions.'''
        result = self._values.get("alarm_action")
        assert result is not None, "Required property 'alarm_action' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property metricName: Metric Name.'''
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scalingGroupId: The ID of the scaling group.'''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def threshold(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property threshold: Threshold.'''
        result = self._values.get("threshold")
        assert result is not None, "Required property 'threshold' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comparison_operator(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comparisonOperator: Comparison Operator.'''
        result = self._values.get("comparison_operator")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlarmTask.DimensionsProperty"]]]]:
        '''Property dimensions: Dimensions.'''
        result = self._values.get("dimensions")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlarmTask.DimensionsProperty"]]]], result)

    @builtins.property
    def evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property evaluationCount: Evaluation Count.'''
        result = self._values.get("evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: Group Id.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def metric_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property metricType: Metric Type.'''
        result = self._values.get("metric_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: Name.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Period.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def statistics(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property statistics: Statistics.'''
        result = self._values.get("statistics")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlarmTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LifecycleHook(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.LifecycleHook",
):
    '''A ROS resource type:  ``ALIYUN::ESS::LifecycleHook``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LifecycleHookProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::LifecycleHook``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a46acbc5eea4a5d296bd421987f038384ed987aab61df47d148ad1b4a2652d98)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLifecycleHookId")
    def attr_lifecycle_hook_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LifecycleHookId: The lifecycle hook ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLifecycleHookId"))


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
        lifecycle_transition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_result: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        heartbeat_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_hook_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_metadata: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::LifecycleHook``.

        :param lifecycle_transition: Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range: SCALE_OUT: scale-out event SCALE_IN: scale-in event.
        :param scaling_group_id: Property scalingGroupId: The ID of the scaling group.
        :param default_result: Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range: CONTINUE: the scaling group continues with the scale-in or scale-out process. ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event. Default value: CONTINUE If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        :param heartbeat_timeout: Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds. You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        :param lifecycle_hook_name: Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.). Default value: Lifecycle Hook ID
        :param notification_arn: Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}. region: the region to which the scaling group locates account-id: Alibaba Cloud ID For example: MNS queue: acs:ess:{region}:{account-id}:queue/{queuename} MNS topic: acs:ess:{region}:{account-id}:topic/{topicname} OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        :param notification_metadata: Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39288e4e5a908e6823a89dff616afc7789d49b00d3caa357804e5bc122c3e567)
            check_type(argname="argument lifecycle_transition", value=lifecycle_transition, expected_type=type_hints["lifecycle_transition"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument default_result", value=default_result, expected_type=type_hints["default_result"])
            check_type(argname="argument heartbeat_timeout", value=heartbeat_timeout, expected_type=type_hints["heartbeat_timeout"])
            check_type(argname="argument lifecycle_hook_name", value=lifecycle_hook_name, expected_type=type_hints["lifecycle_hook_name"])
            check_type(argname="argument notification_arn", value=notification_arn, expected_type=type_hints["notification_arn"])
            check_type(argname="argument notification_metadata", value=notification_metadata, expected_type=type_hints["notification_metadata"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def lifecycle_transition(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:   SCALE_OUT: scale-out event   SCALE_IN: scale-in event.'''
        result = self._values.get("lifecycle_transition")
        assert result is not None, "Required property 'lifecycle_transition' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scalingGroupId: The ID of the scaling group.'''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_result(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultResult: The action that the scaling group takes when the lifecycle hook times out.

        Value range:
        CONTINUE: the scaling group continues with the scale-in or scale-out process.
        ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        Default value: CONTINUE
        If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        '''
        result = self._values.get("default_result")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def heartbeat_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out.

        If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
        You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        '''
        result = self._values.get("heartbeat_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle_hook_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lifecycleHookName: The name of the lifecycle hook.

        Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        Default value: Lifecycle Hook ID
        '''
        result = self._values.get("lifecycle_hook_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook.

        This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        region: the region to which the scaling group locates
        account-id: Alibaba Cloud ID
        For example:
        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        '''
        result = self._values.get("notification_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_metadata(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target.

        The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        '''
        result = self._values.get("notification_metadata")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LifecycleHookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlarmTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosAlarmTask",
):
    '''A ROS template type:  ``ALIYUN::ESS::AlarmTask``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlarmTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::AlarmTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3eb80b3c31c2b41e5d5e8306df2ab31c4ff39f81b50fe27869f0670ea1bfb40a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6796c5bba06fb562ed8b27c1c6fc84b2909c57695b8e15e7830e8839fb9387fb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarmTaskId")
    def attr_alarm_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AlarmTaskId: The alarm task ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarmTaskId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="alarmAction")
    def alarm_action(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: alarmAction: Alarm Actions
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "alarmAction"))

    @alarm_action.setter
    def alarm_action(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d13091f926f7657bec2ab7c0cd1af9a4512f4bc5ffa61c0cd120418385223df8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alarmAction", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5be23e1c30e0fbae43c2696d9b53c74a9a5e2b247c81f3466d5a127a799d60f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="metricName")
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: metricName: Metric Name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "metricName"))

    @metric_name.setter
    def metric_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f9dfdbb38418540a3d26cd424eeb263ef91660ec877023f7c95d7c0e12fd5a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metricName", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: The ID of the scaling group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8136464bf45f1d4649f7aa3ce5212fb707030b8defb693fadf82de892c2a11c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="threshold")
    def threshold(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: threshold: Threshold
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "threshold"))

    @threshold.setter
    def threshold(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e63f19e679a5784a82c81a2b5b95a27fdff751e74206b3b98c7b1ae69249c615)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threshold", value)

    @builtins.property
    @jsii.member(jsii_name="comparisonOperator")
    def comparison_operator(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comparisonOperator: Comparison Operator
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comparisonOperator"))

    @comparison_operator.setter
    def comparison_operator(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f04064a2f89e1ac709550173c46556bc9ae4907a64088c2ba0ec7ad51e7563e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comparisonOperator", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d678fc56c0f275e2b7d239bb27d284ca197989f69738f6d40b4f02d2f721aeeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dimensions")
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlarmTask.DimensionsProperty"]]]]:
        '''
        :Property: dimensions: Dimensions
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlarmTask.DimensionsProperty"]]]], jsii.get(self, "dimensions"))

    @dimensions.setter
    def dimensions(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlarmTask.DimensionsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bf48aa27bda8ead168e18ce80b7e0a45dc2cfcc6ebd5e3edc02bc3d44bc578d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dimensions", value)

    @builtins.property
    @jsii.member(jsii_name="evaluationCount")
    def evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evaluationCount: Evaluation Count
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "evaluationCount"))

    @evaluation_count.setter
    def evaluation_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ab01163c87782e041f2f0bfbf071af73581984504f002b705c2722f362b25ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "evaluationCount", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: Group Id
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17931261e9b56f5f58c5171c0f60301ccb8a2bcefb7a3b3eb833044ed170ac59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="metricType")
    def metric_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: metricType: Metric Type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "metricType"))

    @metric_type.setter
    def metric_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccc57156b5d9f1d2228b9ac46f7627fecfeea0acec4ace57edb6317bc70badc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metricType", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: Name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a013839a3b7b21230a3f8e9e7325093061786b809abb176f5dda53d02e2a5405)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Period
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cdfaba7837beb53a11dbaf264a0b400a5c20ef658526e476b8a8282fa48cbea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="statistics")
    def statistics(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: statistics: Statistics
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "statistics"))

    @statistics.setter
    def statistics(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c54d43d13fd887073f924482638470f8912d843b7ed472754f29ec8d2a24da77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            dimension_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            dimension_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param dimension_key: 
            :param dimension_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__927873148fe5fdcb8f53aef85bccbbe2b446c081291af2be6a7f5f9232e9895a)
                check_type(argname="argument dimension_key", value=dimension_key, expected_type=type_hints["dimension_key"])
                check_type(argname="argument dimension_value", value=dimension_value, expected_type=type_hints["dimension_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "dimension_key": dimension_key,
                "dimension_value": dimension_value,
            }

        @builtins.property
        def dimension_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dimensionKey: DimensionKey
            '''
            result = self._values.get("dimension_key")
            assert result is not None, "Required property 'dimension_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def dimension_value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dimensionValue: DimensionValue
            '''
            result = self._values.get("dimension_value")
            assert result is not None, "Required property 'dimension_value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DimensionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosAlarmTaskEnable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosAlarmTaskEnable",
):
    '''A ROS template type:  ``ALIYUN::ESS::AlarmTaskEnable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlarmTaskEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::AlarmTaskEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86714b938065c8c7d6551a5b836f5b46d7cf74e5faccc01f30939895d0504650)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d1970446a951382325d8bec921e95b93e0485e8f35b67350dc17f65380c338d2)
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
    @jsii.member(jsii_name="alarmTaskId")
    def alarm_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: alarmTaskId: The id of alarm task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "alarmTaskId"))

    @alarm_task_id.setter
    def alarm_task_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34b3fadf57d5228431617808f59a3be4380027130b828d42a521dfb6de499dc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alarmTaskId", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Enable alarm task or not
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d619ff674ae5d503a6a7fa65e2e003480eaedefc0f4a732de13c065df2eaa5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e31943b5be512c8bde7ae0e7022c0afe238ce1916157a33ea595a13e8c320b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        alarm_task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::AlarmTaskEnable``.

        :param alarm_task_id: 
        :param enable: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2de0f32081aceab0bd1817d06a630419b7a6bbb55ef1059547c5a925dd800847)
            check_type(argname="argument alarm_task_id", value=alarm_task_id, expected_type=type_hints["alarm_task_id"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "alarm_task_id": alarm_task_id,
            "enable": enable,
        }

    @builtins.property
    def alarm_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: alarmTaskId: The id of alarm task.
        '''
        result = self._values.get("alarm_task_id")
        assert result is not None, "Required property 'alarm_task_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Enable alarm task or not
        '''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        alarm_action: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        comparison_operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dimensions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlarmTask.DimensionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        metric_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        statistics: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::AlarmTask``.

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
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0c045eb527f889a67d502b0666891d9bb0b606496d0933a7ee0844124901b24)
            check_type(argname="argument alarm_action", value=alarm_action, expected_type=type_hints["alarm_action"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
            check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dimensions", value=dimensions, expected_type=type_hints["dimensions"])
            check_type(argname="argument evaluation_count", value=evaluation_count, expected_type=type_hints["evaluation_count"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument metric_type", value=metric_type, expected_type=type_hints["metric_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def alarm_action(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: alarmAction: Alarm Actions
        '''
        result = self._values.get("alarm_action")
        assert result is not None, "Required property 'alarm_action' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: metricName: Metric Name
        '''
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: The ID of the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def threshold(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: threshold: Threshold
        '''
        result = self._values.get("threshold")
        assert result is not None, "Required property 'threshold' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comparison_operator(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comparisonOperator: Comparison Operator
        '''
        result = self._values.get("comparison_operator")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAlarmTask.DimensionsProperty]]]]:
        '''
        :Property: dimensions: Dimensions
        '''
        result = self._values.get("dimensions")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAlarmTask.DimensionsProperty]]]], result)

    @builtins.property
    def evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evaluationCount: Evaluation Count
        '''
        result = self._values.get("evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: Group Id
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def metric_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: metricType: Metric Type
        '''
        result = self._values.get("metric_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: Name
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Period
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def statistics(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: statistics: Statistics
        '''
        result = self._values.get("statistics")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlarmTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLifecycleHook(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosLifecycleHook",
):
    '''A ROS template type:  ``ALIYUN::ESS::LifecycleHook``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLifecycleHookProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::LifecycleHook``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57fc91d59300f2336a829dda4336fca4ac11f861ae726b5665cbaf2ac7896d7a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__563fbf537f7f2273e12479327c31d8505c72a5d4c26cb8d51e655fac84f91f1b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLifecycleHookId")
    def attr_lifecycle_hook_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LifecycleHookId: The lifecycle hook ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLifecycleHookId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__95d065d4f23e8eef8aa5fd7edd92721e2245694e4654f50a736876a5ef7b7643)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycleTransition")
    def lifecycle_transition(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
        SCALE_OUT: scale-out event
        SCALE_IN: scale-in event
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "lifecycleTransition"))

    @lifecycle_transition.setter
    def lifecycle_transition(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c13363b80b50095519ed91f638b1d9eb01b904905e81366d97081b667916733)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycleTransition", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: The ID of the scaling group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37fe5fbf2a782dff958f12ba54369b88a85baede98b47d7330f8902aa0415cb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="defaultResult")
    def default_result(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
        CONTINUE: the scaling group continues with the scale-in or scale-out process.
        ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        Default value: CONTINUE
        If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultResult"))

    @default_result.setter
    def default_result(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6745b82ad4e1c00bf9b973d8ef3581f023e2e79433be4bfe28e56fe4f1a721b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultResult", value)

    @builtins.property
    @jsii.member(jsii_name="heartbeatTimeout")
    def heartbeat_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
        You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "heartbeatTimeout"))

    @heartbeat_timeout.setter
    def heartbeat_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5bb60926d7f23fa1e74fcd7976e770f42260bab55175f08aaa3e908ed90dae8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "heartbeatTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycleHookName")
    def lifecycle_hook_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        Default value: Lifecycle Hook ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lifecycleHookName"))

    @lifecycle_hook_name.setter
    def lifecycle_hook_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95d2e9b29a1a604979ea9d8aaf662758fedb0b9572bccd910da9291841aebb16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycleHookName", value)

    @builtins.property
    @jsii.member(jsii_name="notificationArn")
    def notification_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        region: the region to which the scaling group locates
        account-id: Alibaba Cloud ID
        For example:
        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "notificationArn"))

    @notification_arn.setter
    def notification_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29048251e06c6a5e43b470a7f61fd643c99d57c1c9a954b45604da8537bd9541)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "notificationArn", value)

    @builtins.property
    @jsii.member(jsii_name="notificationMetadata")
    def notification_metadata(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "notificationMetadata"))

    @notification_metadata.setter
    def notification_metadata(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7adee079de4117785e3460431cc7da7925ecc448c7685c32e09f6c7583383077)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        lifecycle_transition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_result: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        heartbeat_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_hook_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_metadata: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::LifecycleHook``.

        :param lifecycle_transition: 
        :param scaling_group_id: 
        :param default_result: 
        :param heartbeat_timeout: 
        :param lifecycle_hook_name: 
        :param notification_arn: 
        :param notification_metadata: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__345795d75b456d230f585dd18d3f509731a817828c61adb2a97fcb035a1b6979)
            check_type(argname="argument lifecycle_transition", value=lifecycle_transition, expected_type=type_hints["lifecycle_transition"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument default_result", value=default_result, expected_type=type_hints["default_result"])
            check_type(argname="argument heartbeat_timeout", value=heartbeat_timeout, expected_type=type_hints["heartbeat_timeout"])
            check_type(argname="argument lifecycle_hook_name", value=lifecycle_hook_name, expected_type=type_hints["lifecycle_hook_name"])
            check_type(argname="argument notification_arn", value=notification_arn, expected_type=type_hints["notification_arn"])
            check_type(argname="argument notification_metadata", value=notification_metadata, expected_type=type_hints["notification_metadata"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def lifecycle_transition(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
        SCALE_OUT: scale-out event
        SCALE_IN: scale-in event
        '''
        result = self._values.get("lifecycle_transition")
        assert result is not None, "Required property 'lifecycle_transition' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: The ID of the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_result(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
        CONTINUE: the scaling group continues with the scale-in or scale-out process.
        ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
        Default value: CONTINUE
        If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
        '''
        result = self._values.get("default_result")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def heartbeat_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
        You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
        '''
        result = self._values.get("heartbeat_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle_hook_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
        Default value: Lifecycle Hook ID
        '''
        result = self._values.get("lifecycle_hook_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
        region: the region to which the scaling group locates
        account-id: Alibaba Cloud ID
        For example:
        MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
        MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
        OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
        '''
        result = self._values.get("notification_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_metadata(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
        '''
        result = self._values.get("notification_metadata")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLifecycleHookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingConfiguration(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingConfiguration",
):
    '''A ROS template type:  ``ALIYUN::ESS::ScalingConfiguration``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingConfigurationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingConfiguration``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc3736789ace51b21bdd3a49d37f206468c342c52ac58836d144f0ad0bf4c0b3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ce5fc6b0b04b705dcb94889a9b28263700dd07e064088a31128d0dcca0bfd6ff)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: The scaling configuration id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__677601f93c951dbba697f77d3d43fbc56744a2ebf62b9311403cd99503cfae57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: Scaling group id to create the scaling configuration.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef08af6738238cf4e4c1164bfcb6d0ba5a2090cc7daad9c422f998fc46bf2976)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="creditSpecification")
    def credit_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        creditSpecification: The performance mode of the burstable instance. Valid values:
        Standard: the standard mode.
        Unlimited: the unlimited mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "creditSpecification"))

    @credit_specification.setter
    def credit_specification(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59cad1eda38f8b1f3a519eda8eec57034069181365df94b7181c64191b3904ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "creditSpecification", value)

    @builtins.property
    @jsii.member(jsii_name="deploymentSetId")
    def deployment_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploymentSetId: Deployment set ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deploymentSetId"))

    @deployment_set_id.setter
    def deployment_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bccf97da4f501af5332dd1a446d88c6df992a21ff423811246dd338878510db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deploymentSetId", value)

    @builtins.property
    @jsii.member(jsii_name="diskMappings")
    def disk_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingConfiguration.DiskMappingsProperty"]]]]:
        '''
        :Property: diskMappings: Disk mappings to attach to instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingConfiguration.DiskMappingsProperty"]]]], jsii.get(self, "diskMappings"))

    @disk_mappings.setter
    def disk_mappings(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingConfiguration.DiskMappingsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__606c2339da212d24c73c450529b9fe22b8f0e42dc81d501c22c35e1e70974bee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskMappings", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
        Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
        Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7454d0761f0ff372c417eb10319e916f7a9bd9096020f78f95808ac1ed433324)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="hpcClusterId")
    def hpc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hpcClusterId: The HPC cluster ID to which the instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hpcClusterId"))

    @hpc_cluster_id.setter
    def hpc_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc8259f421174d1c0e8469b66ff1ca8ba738dfb74325daa2013c4019dba223ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hpcClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="imageFamily")
    def image_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageFamily"))

    @image_family.setter
    def image_family(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e7f892fd57c1468945a1e8d0aef617f820f835724ea5e103df5281cc8cf2a2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageFamily", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Image ID to create ecs instance .
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73ce4f619c8e8d29bee52fbba82dca5a791764d5e3b6f947c6c57e1b9408b868)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa70661252f24661fcab63e263e524859463b15f7ad7030f6a0827c66d9e6c8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the instance launched from the current scaling configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90a7b777c5e3e9c274f9abefe866f66d0374573092a3c712d2c2c8d7e9583085)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: ecs supported instance type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__499b99e8e9caf3e37220501480d14ffcdd37f171bc281b947c91b11e27ad984f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceTypes")
    def instance_types(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceTypes"))

    @instance_types.setter
    def instance_types(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c40e0ecaf94abb2433f8ee24dd27aef0953fb451acf9a7ff5bb95b818102ad0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62bce03693933e15732b4dce2e438265e6eb8b152b7da5d639f8d5df2e327ac9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="internetMaxBandwidthIn")
    def internet_max_bandwidth_in(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetMaxBandwidthIn"))

    @internet_max_bandwidth_in.setter
    def internet_max_bandwidth_in(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afe3eb121d779ad7a4f2b1a000e290a01dfc6ac1112763362511f54abf004459)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetMaxBandwidthIn", value)

    @builtins.property
    @jsii.member(jsii_name="internetMaxBandwidthOut")
    def internet_max_bandwidth_out(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetMaxBandwidthOut"))

    @internet_max_bandwidth_out.setter
    def internet_max_bandwidth_out(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ebca14c40b2e5f8dafd24f736f6e7cddb5ac1fcda6f79ec0dd5a00bcf59c0fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetMaxBandwidthOut", value)

    @builtins.property
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d9337c47a3c04319e70c6e3e08aff2b439ca37f711547a69e148cbca33a9e89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="ipv6AddressCount")
    def ipv6_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipv6AddressCount"))

    @ipv6_address_count.setter
    def ipv6_address_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4e77bb5a6076dc184e17fe78d20d63bd473daecddd345ff77afc7ef0be861f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv6AddressCount", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: SSH key pair name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf8507da5e2684304087d5457b6af939b823a7f1b8eaa4352218db6ba016c2bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerWeight")
    def load_balancer_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
        Default value: 50.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerWeight"))

    @load_balancer_weight.setter
    def load_balancer_weight(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0e1476480a95d457d5860b75481675cb823c4c68737693da803b912f4a883c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerWeight", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f97d659ac8c2000d609920da7ec42611e7e47fdf53b6a542ff353da520d0b097)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="passwordInherit")
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "passwordInherit"))

    @password_inherit.setter
    def password_inherit(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e11312a10a96ffda3ba1a28a4a45086695bc163669c649cf51f575038a97cf2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "passwordInherit", value)

    @builtins.property
    @jsii.member(jsii_name="ramRoleName")
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ramRoleName"))

    @ram_role_name.setter
    def ram_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6957f0fbf659bbfddecc46e4b1bd454b6e6f6a101dc7a56bd2054ad870b4bae4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ramRoleName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__285e84e0da51e82ee3070d78b5a37cfb677b64889900647873c13b34c4265bae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scalingConfigurationName")
    def scaling_configuration_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingConfigurationName: Name of created scaling configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingConfigurationName"))

    @scaling_configuration_name.setter
    def scaling_configuration_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f326fb86f2d25015d3e15b87ed4b673bb36d3f822c8382804bfbf236bdd73031)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingConfigurationName", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security Group to create ecs instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0a9c4e8fd23c88aee36c37063331c06480078aa58234cb0bd0de61d40b1bf28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="spotPriceLimit")
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotPriceLimit"))

    @spot_price_limit.setter
    def spot_price_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5923896a7836c06a59c03cf6dfae4661aee5e0262516a32d908422e5303f95e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotPriceLimit", value)

    @builtins.property
    @jsii.member(jsii_name="spotPriceLimitForInstanceType")
    def spot_price_limit_for_instance_type(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 50 items can be specified.
        Key
        ecs instance type
        Value
        Supports a maximum of 3 decimal places.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "spotPriceLimitForInstanceType"))

    @spot_price_limit_for_instance_type.setter
    def spot_price_limit_for_instance_type(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84df159d08dbf2b916e17aecb46858724488564bd2c2bbcd74f879ff441f4994)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotPriceLimitForInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        NoSpot: Normal pay-per-use instance
        SpotWithPriceLimit: Set a preemptive instance of the cap price
        SpotAsPriceGo: System automatic bidding, following the current market actual price
        Default: NoSpot.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotStrategy"))

    @spot_strategy.setter
    def spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82183a4e74d7c5bf1696a2dacad67d9a6b499c7b9586f0895533b69a7b1bd447)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskAutoSnapshotPolicyId")
    def system_disk_auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskAutoSnapshotPolicyId"))

    @system_disk_auto_snapshot_policy_id.setter
    def system_disk_auto_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__005e62578e59057a9e0c73dd92bea6e8961433c82cab3490c637ce3357dd83d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskAutoSnapshotPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskCategory")
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskCategory"))

    @system_disk_category.setter
    def system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53c95809a2d2aa1a7a5db90b65f1f5ddb03fa7dd67386f85ee7bb31324c7f5c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskPerformanceLevel")
    def system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskPerformanceLevel: The performance level of an ESSD.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskPerformanceLevel"))

    @system_disk_performance_level.setter
    def system_disk_performance_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20ef09969b6c99e34652e5b2667ded51363e7a7c313f96f346c2d497d8cc3d5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskPerformanceLevel", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskSize: Size of system disk. Unit is GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskSize"))

    @system_disk_size.setter
    def system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67afe00d58cf231eb7ac3fb6d20a5d57f5a5d97715838efea03719bb35274d87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="tagList")
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingConfiguration.TagListProperty"]]]]:
        '''
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
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingConfiguration.TagListProperty"]]]], jsii.get(self, "tagList"))

    @tag_list.setter
    def tag_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingConfiguration.TagListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4d794f90bc9a0d9a63fac47f839b7179ea525633a90bbfb1e5e25df0f1479fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagList", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a35c288ff84684af77eecedbac0b5b5e3e217408c1bc24487558436ace951c36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            device: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disk_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            encrypted: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            size: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
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
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7b66734dff1e85145b6907c20fedb10194946ad52ef783e3df39fede6235aab5)
                check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument device", value=device, expected_type=type_hints["device"])
                check_type(argname="argument disk_name", value=disk_name, expected_type=type_hints["disk_name"])
                check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
                check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        def auto_snapshot_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: autoSnapshotPolicyId: Auto snapshot policy ID.
            '''
            result = self._values.get("auto_snapshot_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: category: The volume type to create.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssdDefault is cloud.
            '''
            result = self._values.get("category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def device(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: device: A device name where the volume will be attached in the system at /dev/xvd[id]. Range from '/dev/xvdb' to '/dev/xvdz'.
            '''
            result = self._values.get("device")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disk_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
            '''
            result = self._values.get("disk_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            encrypted: Whether the data disk is encrypted or not. Options:
            true: Encrypted.
            false: Not encrypted.
            Default value: false.
            '''
            result = self._values.get("encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def kms_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: kmsKeyId: The KMS key ID for the data disk.
            '''
            result = self._values.get("kms_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: performanceLevel: The performance level of an ESSD.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def size(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: size: The size of the volume, in GB. Must be equal or greater than the size of the snapshot. It is safe to leave this blank and have the Compute service infer the size.
            '''
            result = self._values.get("size")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def snapshot_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: snapshotId: ID of the snapshot to create the volume.
            '''
            result = self._values.get("snapshot_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7fc9909d468266827c82c3c6fd1c807046dd022f01a8aca3c828f004e50bae89)
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
            return "TagListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScalingConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "credit_specification": "creditSpecification",
        "deployment_set_id": "deploymentSetId",
        "disk_mappings": "diskMappings",
        "host_name": "hostName",
        "hpc_cluster_id": "hpcClusterId",
        "image_family": "imageFamily",
        "image_id": "imageId",
        "instance_id": "instanceId",
        "instance_name": "instanceName",
        "instance_type": "instanceType",
        "instance_types": "instanceTypes",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_in": "internetMaxBandwidthIn",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "io_optimized": "ioOptimized",
        "ipv6_address_count": "ipv6AddressCount",
        "key_pair_name": "keyPairName",
        "load_balancer_weight": "loadBalancerWeight",
        "password": "password",
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
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        credit_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.DiskMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_types: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_max_bandwidth_in: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_configuration_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit_for_instance_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingConfiguration``.

        :param scaling_group_id: 
        :param credit_specification: 
        :param deployment_set_id: 
        :param disk_mappings: 
        :param host_name: 
        :param hpc_cluster_id: 
        :param image_family: 
        :param image_id: 
        :param instance_id: 
        :param instance_name: 
        :param instance_type: 
        :param instance_types: 
        :param internet_charge_type: 
        :param internet_max_bandwidth_in: 
        :param internet_max_bandwidth_out: 
        :param io_optimized: 
        :param ipv6_address_count: 
        :param key_pair_name: 
        :param load_balancer_weight: 
        :param password: 
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
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__905bee6bae5d29de4a63d35773e0cffe2dc5253364ba66148204dae2c1fce9fb)
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument credit_specification", value=credit_specification, expected_type=type_hints["credit_specification"])
            check_type(argname="argument deployment_set_id", value=deployment_set_id, expected_type=type_hints["deployment_set_id"])
            check_type(argname="argument disk_mappings", value=disk_mappings, expected_type=type_hints["disk_mappings"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument hpc_cluster_id", value=hpc_cluster_id, expected_type=type_hints["hpc_cluster_id"])
            check_type(argname="argument image_family", value=image_family, expected_type=type_hints["image_family"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument internet_max_bandwidth_in", value=internet_max_bandwidth_in, expected_type=type_hints["internet_max_bandwidth_in"])
            check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument ipv6_address_count", value=ipv6_address_count, expected_type=type_hints["ipv6_address_count"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument load_balancer_weight", value=load_balancer_weight, expected_type=type_hints["load_balancer_weight"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument password_inherit", value=password_inherit, expected_type=type_hints["password_inherit"])
            check_type(argname="argument ram_role_name", value=ram_role_name, expected_type=type_hints["ram_role_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scaling_configuration_name", value=scaling_configuration_name, expected_type=type_hints["scaling_configuration_name"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_price_limit_for_instance_type", value=spot_price_limit_for_instance_type, expected_type=type_hints["spot_price_limit_for_instance_type"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            check_type(argname="argument system_disk_auto_snapshot_policy_id", value=system_disk_auto_snapshot_policy_id, expected_type=type_hints["system_disk_auto_snapshot_policy_id"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
            check_type(argname="argument system_disk_performance_level", value=system_disk_performance_level, expected_type=type_hints["system_disk_performance_level"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument tag_list", value=tag_list, expected_type=type_hints["tag_list"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if credit_specification is not None:
            self._values["credit_specification"] = credit_specification
        if deployment_set_id is not None:
            self._values["deployment_set_id"] = deployment_set_id
        if disk_mappings is not None:
            self._values["disk_mappings"] = disk_mappings
        if host_name is not None:
            self._values["host_name"] = host_name
        if hpc_cluster_id is not None:
            self._values["hpc_cluster_id"] = hpc_cluster_id
        if image_family is not None:
            self._values["image_family"] = image_family
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
        if ipv6_address_count is not None:
            self._values["ipv6_address_count"] = ipv6_address_count
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if load_balancer_weight is not None:
            self._values["load_balancer_weight"] = load_balancer_weight
        if password is not None:
            self._values["password"] = password
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
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: Scaling group id to create the scaling configuration.
        '''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def credit_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        creditSpecification: The performance mode of the burstable instance. Valid values:
        Standard: the standard mode.
        Unlimited: the unlimited mode.
        '''
        result = self._values.get("credit_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deployment_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploymentSetId: Deployment set ID.
        '''
        result = self._values.get("deployment_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]]:
        '''
        :Property: diskMappings: Disk mappings to attach to instance.
        '''
        result = self._values.get("disk_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
        Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
        Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hpc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hpcClusterId: The HPC cluster ID to which the instance belongs.
        '''
        result = self._values.get("hpc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
        '''
        result = self._values.get("image_family")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Image ID to create ecs instance .
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the instance launched from the current scaling configuration.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: ecs supported instance type.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_types(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        '''
        result = self._values.get("instance_types")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_max_bandwidth_in(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        '''
        result = self._values.get("internet_max_bandwidth_in")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_max_bandwidth_out(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        '''
        result = self._values.get("internet_max_bandwidth_out")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
        '''
        result = self._values.get("ipv6_address_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: SSH key pair name.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
        Default value: 50.
        '''
        result = self._values.get("load_balancer_weight")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        '''
        result = self._values.get("password_inherit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        '''
        result = self._values.get("ram_role_name")
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
    def scaling_configuration_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingConfigurationName: Name of created scaling configuration.
        '''
        result = self._values.get("scaling_configuration_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security Group to create ecs instance.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit_for_instance_type(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 50 items can be specified.
        Key
        ecs instance type
        Value
        Supports a maximum of 3 decimal places.
        '''
        result = self._values.get("spot_price_limit_for_instance_type")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        NoSpot: Normal pay-per-use instance
        SpotWithPriceLimit: Set a preemptive instance of the cap price
        SpotAsPriceGo: System automatic bidding, following the current market actual price
        Default: NoSpot.
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        '''
        result = self._values.get("system_disk_auto_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskPerformanceLevel: The performance level of an ESSD.
        '''
        result = self._values.get("system_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemDiskSize: Size of system disk. Unit is GB.
        '''
        result = self._values.get("system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.TagListProperty]]]]:
        '''
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
        '''
        result = self._values.get("tag_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.TagListProperty]]]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroup",
):
    '''A ROS template type:  ``ALIYUN::ESS::ScalingGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfa8b82548057b4e9d5f9c6bd95ae16437c0db8d85167b967047184a24f0a34b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7398d701f1411574f7cd0f34f85c5290dd37a39695ad3d0ea3df46c073c00358)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group Id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupName")
    def attr_scaling_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupName: Scaling group name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ae7fa6593d4f0ea468c6cc425c55de188d9e0de2cd943d4dc09b0bb61700d2fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="maxSize")
    def max_size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "maxSize"))

    @max_size.setter
    def max_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__259d3ba494d0f568e0bece082a54d68311b0fe3761742166fd72c7a0cbc8c618)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxSize", value)

    @builtins.property
    @jsii.member(jsii_name="minSize")
    def min_size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "minSize"))

    @min_size.setter
    def min_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a856925e6a009a3cc49de033c3276063254e99fdc4199f22d9b0d27a2fb739e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "minSize", value)

    @builtins.property
    @jsii.member(jsii_name="compensateWithOnDemand")
    def compensate_with_on_demand(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "compensateWithOnDemand"))

    @compensate_with_on_demand.setter
    def compensate_with_on_demand(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__622e769201dfa85f491249382aa53de1745e68a31d350f7c47449add7de8d6aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compensateWithOnDemand", value)

    @builtins.property
    @jsii.member(jsii_name="containerGroupId")
    def container_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerGroupId: The ID of the elastic container instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerGroupId"))

    @container_group_id.setter
    def container_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba6e0b53d0a7502850e4c9644d38a94b48668220098ada358e96431b9276ed1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceIds")
    def db_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceIds"))

    @db_instance_ids.setter
    def db_instance_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a30f6746f533d8bfd535369285272c733415eb661498aab045acd6bfe09822b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="defaultCooldown")
    def default_cooldown(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        The default value is 300s.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultCooldown"))

    @default_cooldown.setter
    def default_cooldown(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f937972608ea2d4024eeed7b11364fec06288f2c7fdf5b2309c67078fe1c51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultCooldown", value)

    @builtins.property
    @jsii.member(jsii_name="desiredCapacity")
    def desired_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desiredCapacity"))

    @desired_capacity.setter
    def desired_capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4d5eb01602656e907db7fa24e08bbef91d742852c9a2e7fbf3b985b5b6a5721)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desiredCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="groupDeletionProtection")
    def group_deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupDeletionProtection: Whether to enable deletion protection for scaling group.
        Default to False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupDeletionProtection"))

    @group_deletion_protection.setter
    def group_deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2400a8e87ed65ba3de3bf8c4a801684544c22766a78437b98ac93a630feb9eea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupDeletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: The type of instances that are managed by the scaling group. Valid values:
        ECS
        ECI
        Default value: ECS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20e1ecf3ca71846d8209c14231525cd5c8634b6c8a11e18fcb393324775400a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckType")
    def health_check_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckType"))

    @health_check_type.setter
    def health_check_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39253d0e28ca008795d0e03f22a05e9eb793a226848740b2c8c93a87f40b002f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abd6d54f88a291134c2ab9e40c41139ef3fe50d4c4a0725117908c4194e784d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="launchTemplateId")
    def launch_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "launchTemplateId"))

    @launch_template_id.setter
    def launch_template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39df13437fa9d0f777138c254bbfdf5e177b9c7567289c0238c53d80f3baf93d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "launchTemplateId", value)

    @builtins.property
    @jsii.member(jsii_name="launchTemplateVersion")
    def launch_template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        launchTemplateVersion: The version of the instance launch template. Valid values:
        A fixed template version numbe.
        Default: The default template version is always used.
        Latest: The latest template version is always used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "launchTemplateVersion"))

    @launch_template_version.setter
    def launch_template_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a7c9656e1d9d041f0b9dccaa5f9c4490acce3611b5eb453537598aac85b0046)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "launchTemplateVersion", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerIds")
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerIds"))

    @load_balancer_ids.setter
    def load_balancer_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54a6b0c08e5cbb1033dd2411ccb79487a9b3b0454c38a47d1dbc63776b46187a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerIds", value)

    @builtins.property
    @jsii.member(jsii_name="multiAzPolicy")
    def multi_az_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:

        1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
        Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiAzPolicy"))

    @multi_az_policy.setter
    def multi_az_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aeb879a5358ae247001507514d85e74668f2fbf068b939a223caf731f19d8fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAzPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="notificationConfigurations")
    def notification_configurations(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroup.NotificationConfigurationsProperty"]]]]:
        '''
        :Property: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroup.NotificationConfigurationsProperty"]]]], jsii.get(self, "notificationConfigurations"))

    @notification_configurations.setter
    def notification_configurations(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroup.NotificationConfigurationsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a780f6d8e00e2de9fe9587c2335da4daed205a167b2778888fc9cba167ef7af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "notificationConfigurations", value)

    @builtins.property
    @jsii.member(jsii_name="onDemandBaseCapacity")
    def on_demand_base_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "onDemandBaseCapacity"))

    @on_demand_base_capacity.setter
    def on_demand_base_capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__677d6daacd8b880640a37b24380ed5f265f12a7686e4031c18876a953b4c5fdc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "onDemandBaseCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="onDemandPercentageAboveBaseCapacity")
    def on_demand_percentage_above_base_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "onDemandPercentageAboveBaseCapacity"))

    @on_demand_percentage_above_base_capacity.setter
    def on_demand_percentage_above_base_capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a47bff9878f440174c1d06ffe17ef4e291f072f8691c8f1745288f50fd2a7d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "onDemandPercentageAboveBaseCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="protectedInstances")
    def protected_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protectedInstances: ECS instances of protected mode in the scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protectedInstances"))

    @protected_instances.setter
    def protected_instances(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ba23d4f1b1b13986485448c4865c1d362996e81ee96cc8d218fb89f43a55a96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protectedInstances", value)

    @builtins.property
    @jsii.member(jsii_name="removalPolicys")
    def removal_policys(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        removalPolicys: Policy for removing ECS instances from the scaling group.
        Optional values:
        OldestInstance: removes the first ECS instance attached to the scaling group.
        NewestInstance: removes the first ECS instance attached to the scaling group.
        OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "removalPolicys"))

    @removal_policys.setter
    def removal_policys(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb1ae7bf69ce03ecdbf38049030bd93a03fe9edd6fe96d4bfce1e2e93b9f7437)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "removalPolicys", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupName")
    def scaling_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        If this parameter is not specified, the default value is ScalingGroupId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingGroupName"))

    @scaling_group_name.setter
    def scaling_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bea7851a0061153bcc143cb3c742b3a13f0f5cd4b7f09d3a120a41418304e4bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="scalingPolicy")
    def scaling_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingPolicy: The reclaim mode of the scaling group. Valid values:
        recycle
        release
        ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingPolicy"))

    @scaling_policy.setter
    def scaling_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ce2499e40584a3bd5f1841bc51e26bd5230900b632f0c7e37fc76821057c12f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="spotInstancePools")
    def spot_instance_pools(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotInstancePools"))

    @spot_instance_pools.setter
    def spot_instance_pools(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__250942cb908afa21269feab72a08272451f38f9a2fbaba3c788d007ce3041810)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotInstancePools", value)

    @builtins.property
    @jsii.member(jsii_name="spotInstanceRemedy")
    def spot_instance_remedy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotInstanceRemedy"))

    @spot_instance_remedy.setter
    def spot_instance_remedy(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6b4928d284d8a5350acf8f00970f9e38a3a4b404badfddf4cfe55229a465980)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotInstanceRemedy", value)

    @builtins.property
    @jsii.member(jsii_name="standbyInstances")
    def standby_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: standbyInstances: ECS instances of standby mode in the scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "standbyInstances"))

    @standby_instances.setter
    def standby_instances(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d9134ca622ee4a84454600eca80eaf573db508d200fa87f96aafe5ad5aaf74a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "standbyInstances", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosScalingGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosScalingGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosScalingGroup.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f2e42911155afe3a66f087f36a15fb0a83ceebffcac36295bf25ce501cc4767)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3daa4ce0b286e8173a9e1a47cf7593525e2cc43d1c96a8b2cac05773dbee6d33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
        The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
        When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36d11bd02cd8c7ad32271c095146f7debd4bdef9d154248513dc830616b9f1ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            notification_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            notification_types: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param notification_arn: 
            :param notification_types: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fa7fa1fd449930accb4c85d6202b4d7d427d20d67d67beb5ddbf1bc67b59f0d6)
                check_type(argname="argument notification_arn", value=notification_arn, expected_type=type_hints["notification_arn"])
                check_type(argname="argument notification_types", value=notification_types, expected_type=type_hints["notification_types"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "notification_arn": notification_arn,
                "notification_types": notification_types,
            }

        @builtins.property
        def notification_arn(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
            region: the region to which the scaling group locates
            account-id: Alibaba Cloud ID
            For example:
            MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
            MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
            Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
            '''
            result = self._values.get("notification_arn")
            assert result is not None, "Required property 'notification_arn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def notification_types(
            self,
        ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
            '''
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
            '''
            result = self._values.get("notification_types")
            assert result is not None, "Required property 'notification_types' is missing"
            return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotificationConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__fc33954b83be2fe3bd435e61f80f69cdb44ec4d010264a424306a240cb55df80)
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


class RosScalingGroupEnable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupEnable",
):
    '''A ROS template type:  ``ALIYUN::ESS::ScalingGroupEnable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingGroupEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__347186367dab8c2838a3b5398a7d156c3f4e5025a4de886e82129dd1ba41c169)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e8e7288c2591fe281bba6364a65ffa61dc280dcdbae28c8923890b3cd370a946)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLifecycleState")
    def attr_lifecycle_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LifecycleState: The scaling group status
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLifecycleState"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: The scaling group id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingInstanceDetails")
    def attr_scaling_instance_details(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingInstanceDetails: Detail information of auto created scaling instances
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingInstanceDetails"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingInstances")
    def attr_scaling_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingInstances: The auto created scaling instances
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingInstances"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteErrorInfo")
    def attr_scaling_rule_aris_execute_error_info(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteErrorInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesAdded")
    def attr_scaling_rule_aris_execute_result_instances_added(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteResultInstancesAdded"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesRemoved")
    def attr_scaling_rule_aris_execute_result_instances_removed(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteResultInstancesRemoved"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultNumberOfAddedInstances")
    def attr_scaling_rule_aris_execute_result_number_of_added_instances(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteResultNumberOfAddedInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4c384b1680b0320bbf43dc5611d960429649b8095fd63f17cfbd384caac52d9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: The id of operated scaling group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea368f54cc5fdae60852e1324fa97da9bbd07cc977bd449949ec35d3b8090e1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="attachOptions")
    def attach_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroupEnable.AttachOptionsProperty"]]:
        '''
        :Property: attachOptions: Options for attaching instances.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroupEnable.AttachOptionsProperty"]], jsii.get(self, "attachOptions"))

    @attach_options.setter
    def attach_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroupEnable.AttachOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73b2950b30fc844ecd2d8aac5fcf64d2bac8a36488f62c720a2a3b8e5a2d571b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attachOptions", value)

    @builtins.property
    @jsii.member(jsii_name="detachOptions")
    def detach_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroupEnable.DetachOptionsProperty"]]:
        '''
        :Property: detachOptions: Options for detaching instances.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroupEnable.DetachOptionsProperty"]], jsii.get(self, "detachOptions"))

    @detach_options.setter
    def detach_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingGroupEnable.DetachOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc2f9caf6b3eba7590f2192165362232567fa88bc3783179a48375c069c02fbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detachOptions", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3833515c0b41629f2fda361d9ef5538668c22cb3d8232b522468d281e5e0698)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="removeInstanceIds")
    def remove_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "removeInstanceIds"))

    @remove_instance_ids.setter
    def remove_instance_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9ef031b2973f79001952ee47d835cc810d376904191390090b0818757a45e29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "removeInstanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="scalingConfigurationId")
    def scaling_configuration_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingConfigurationId: The id of scaling configuration which will be activate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingConfigurationId"))

    @scaling_configuration_id.setter
    def scaling_configuration_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__300913eaef0df2391f749e278ca8589356ebfecf16fcb552d8c98a8f3b02b91c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingConfigurationId", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleAris")
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        When creating the resource, all the scaling rule aris in the list will be executed.
        When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleAris"))

    @scaling_rule_aris.setter
    def scaling_rule_aris(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c3c18288a0119ab7701236090591d4f28465a4a8656526525be25140d7444e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleAris", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleArisExecuteVersion")
    def scaling_rule_aris_execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleArisExecuteVersion"))

    @scaling_rule_aris_execute_version.setter
    def scaling_rule_aris_execute_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc33c8b007ec3836c344a45b6e7f6616f99acfbbdfd9d4cbf5d4d872106c19c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleArisExecuteVersion", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={"entrusted": "entrusted", "lifecycle_hook": "lifecycleHook"},
    )
    class AttachOptionsProperty:
        def __init__(
            self,
            *,
            entrusted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            lifecycle_hook: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param entrusted: 
            :param lifecycle_hook: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ae68c32181514bf62b7a3ce7d5d23e3c8c9df1a43ad7ab86bc8c64e6ffcbbdfc)
                check_type(argname="argument entrusted", value=entrusted, expected_type=type_hints["entrusted"])
                check_type(argname="argument lifecycle_hook", value=lifecycle_hook, expected_type=type_hints["lifecycle_hook"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if entrusted is not None:
                self._values["entrusted"] = entrusted
            if lifecycle_hook is not None:
                self._values["lifecycle_hook"] = lifecycle_hook

        @builtins.property
        def entrusted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            entrusted: Specifies whether the scaling group manages the lifecycle of instances that are manually added to the scaling group. Valid values:

            - true: The scaling group manages the lifecycle of instances that are manually added in a similar manner in which the scaling group manages the lifecycle of automatically created instances. When the instances are removed from the scaling group, the instances are automatically released. However, if you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released.
            - false: The scaling group does not manage the lifecycle of instances that are manually added. After the instances are removed from the scaling group, the instances are not released.
            Default value: false.
            Note: This property is unavailable for subscription instances.
            '''
            result = self._values.get("entrusted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def lifecycle_hook(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            lifecycleHook: Specifies whether to trigger a lifecycle hook for the scaling group to which instances are being added. Valid values:

            - true
            - false
            Default value: false.
            '''
            result = self._values.get("lifecycle_hook")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AttachOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "decrease_desired_capacity": "decreaseDesiredCapacity",
            "detach_option": "detachOption",
            "lifecycle_hook": "lifecycleHook",
        },
    )
    class DetachOptionsProperty:
        def __init__(
            self,
            *,
            decrease_desired_capacity: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            detach_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            lifecycle_hook: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param decrease_desired_capacity: 
            :param detach_option: 
            :param lifecycle_hook: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6c471aa1063b0248a3e90b088766fe7831bb33481b0b57231d71984ed6b171e1)
                check_type(argname="argument decrease_desired_capacity", value=decrease_desired_capacity, expected_type=type_hints["decrease_desired_capacity"])
                check_type(argname="argument detach_option", value=detach_option, expected_type=type_hints["detach_option"])
                check_type(argname="argument lifecycle_hook", value=lifecycle_hook, expected_type=type_hints["lifecycle_hook"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if decrease_desired_capacity is not None:
                self._values["decrease_desired_capacity"] = decrease_desired_capacity
            if detach_option is not None:
                self._values["detach_option"] = detach_option
            if lifecycle_hook is not None:
                self._values["lifecycle_hook"] = lifecycle_hook

        @builtins.property
        def decrease_desired_capacity(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            decreaseDesiredCapacity: Specifies whether to adjust the expected number of instances in the scaling group. Valid values:

            - true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
            - false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
            Default value: true.
            '''
            result = self._values.get("decrease_desired_capacity")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def detach_option(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            detachOption: Specifies whether to remove the instances from the default server groups and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of the instances from the whitelist that manages access to the ApsaraDB RDS instance that is associated with the scaling group.
            If you set this parameter to both, the instances are removed from the default sever groups and vServer groups of the associated SLB instance, and the IP addresses of the instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance.
            '''
            result = self._values.get("detach_option")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def lifecycle_hook(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            lifecycleHook: Specifies whether to trigger the lifecycle hook for the scaling group when you remove instances from the scaling group. Valid values:

            - true
            - false
            Default value: false.
            '''
            result = self._values.get("lifecycle_hook")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetachOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.RosScalingGroupEnableProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "attach_options": "attachOptions",
        "detach_options": "detachOptions",
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
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        attach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.AttachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        detach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.DetachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remove_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_configuration_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_aris_execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scaling_group_id: 
        :param attach_options: 
        :param detach_options: 
        :param instance_ids: 
        :param remove_instance_ids: 
        :param scaling_configuration_id: 
        :param scaling_rule_aris: 
        :param scaling_rule_aris_execute_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b65de3797a1bd96a4bdbb7a3cb2c3fb6fbbb3222213d00245060648693f3001b)
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument attach_options", value=attach_options, expected_type=type_hints["attach_options"])
            check_type(argname="argument detach_options", value=detach_options, expected_type=type_hints["detach_options"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument remove_instance_ids", value=remove_instance_ids, expected_type=type_hints["remove_instance_ids"])
            check_type(argname="argument scaling_configuration_id", value=scaling_configuration_id, expected_type=type_hints["scaling_configuration_id"])
            check_type(argname="argument scaling_rule_aris", value=scaling_rule_aris, expected_type=type_hints["scaling_rule_aris"])
            check_type(argname="argument scaling_rule_aris_execute_version", value=scaling_rule_aris_execute_version, expected_type=type_hints["scaling_rule_aris_execute_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if attach_options is not None:
            self._values["attach_options"] = attach_options
        if detach_options is not None:
            self._values["detach_options"] = detach_options
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
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: The id of operated scaling group.
        '''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def attach_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.AttachOptionsProperty]]:
        '''
        :Property: attachOptions: Options for attaching instances.
        '''
        result = self._values.get("attach_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.AttachOptionsProperty]], result)

    @builtins.property
    def detach_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.DetachOptionsProperty]]:
        '''
        :Property: detachOptions: Options for detaching instances.
        '''
        result = self._values.get("detach_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.DetachOptionsProperty]], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        '''
        result = self._values.get("instance_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remove_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        '''
        result = self._values.get("remove_instance_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_configuration_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingConfigurationId: The id of scaling configuration which will be activate.
        '''
        result = self._values.get("scaling_configuration_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        When creating the resource, all the scaling rule aris in the list will be executed.
        When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        '''
        result = self._values.get("scaling_rule_aris")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_aris_execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        '''
        result = self._values.get("scaling_rule_aris_execute_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        "compensate_with_on_demand": "compensateWithOnDemand",
        "container_group_id": "containerGroupId",
        "db_instance_ids": "dbInstanceIds",
        "default_cooldown": "defaultCooldown",
        "desired_capacity": "desiredCapacity",
        "group_deletion_protection": "groupDeletionProtection",
        "group_type": "groupType",
        "health_check_type": "healthCheckType",
        "instance_id": "instanceId",
        "launch_template_id": "launchTemplateId",
        "launch_template_version": "launchTemplateVersion",
        "load_balancer_ids": "loadBalancerIds",
        "multi_az_policy": "multiAzPolicy",
        "notification_configurations": "notificationConfigurations",
        "on_demand_base_capacity": "onDemandBaseCapacity",
        "on_demand_percentage_above_base_capacity": "onDemandPercentageAboveBaseCapacity",
        "protected_instances": "protectedInstances",
        "removal_policys": "removalPolicys",
        "scaling_group_name": "scalingGroupName",
        "scaling_policy": "scalingPolicy",
        "spot_instance_pools": "spotInstancePools",
        "spot_instance_remedy": "spotInstanceRemedy",
        "standby_instances": "standbyInstances",
        "tags": "tags",
        "v_switch_id": "vSwitchId",
        "v_switch_ids": "vSwitchIds",
    },
)
class RosScalingGroupProps:
    def __init__(
        self,
        *,
        max_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        min_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desired_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_az_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroup.NotificationConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protected_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        removal_policys: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_instance_pools: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosScalingGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingGroup``.

        :param max_size: 
        :param min_size: 
        :param compensate_with_on_demand: 
        :param container_group_id: 
        :param db_instance_ids: 
        :param default_cooldown: 
        :param desired_capacity: 
        :param group_deletion_protection: 
        :param group_type: 
        :param health_check_type: 
        :param instance_id: 
        :param launch_template_id: 
        :param launch_template_version: 
        :param load_balancer_ids: 
        :param multi_az_policy: 
        :param notification_configurations: 
        :param on_demand_base_capacity: 
        :param on_demand_percentage_above_base_capacity: 
        :param protected_instances: 
        :param removal_policys: 
        :param scaling_group_name: 
        :param scaling_policy: 
        :param spot_instance_pools: 
        :param spot_instance_remedy: 
        :param standby_instances: 
        :param tags: 
        :param v_switch_id: 
        :param v_switch_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e755f6c8f9fe533d501c4e7f9273d2f128084280f4bc51b10d896f0712e52d9)
            check_type(argname="argument max_size", value=max_size, expected_type=type_hints["max_size"])
            check_type(argname="argument min_size", value=min_size, expected_type=type_hints["min_size"])
            check_type(argname="argument compensate_with_on_demand", value=compensate_with_on_demand, expected_type=type_hints["compensate_with_on_demand"])
            check_type(argname="argument container_group_id", value=container_group_id, expected_type=type_hints["container_group_id"])
            check_type(argname="argument db_instance_ids", value=db_instance_ids, expected_type=type_hints["db_instance_ids"])
            check_type(argname="argument default_cooldown", value=default_cooldown, expected_type=type_hints["default_cooldown"])
            check_type(argname="argument desired_capacity", value=desired_capacity, expected_type=type_hints["desired_capacity"])
            check_type(argname="argument group_deletion_protection", value=group_deletion_protection, expected_type=type_hints["group_deletion_protection"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument health_check_type", value=health_check_type, expected_type=type_hints["health_check_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument launch_template_id", value=launch_template_id, expected_type=type_hints["launch_template_id"])
            check_type(argname="argument launch_template_version", value=launch_template_version, expected_type=type_hints["launch_template_version"])
            check_type(argname="argument load_balancer_ids", value=load_balancer_ids, expected_type=type_hints["load_balancer_ids"])
            check_type(argname="argument multi_az_policy", value=multi_az_policy, expected_type=type_hints["multi_az_policy"])
            check_type(argname="argument notification_configurations", value=notification_configurations, expected_type=type_hints["notification_configurations"])
            check_type(argname="argument on_demand_base_capacity", value=on_demand_base_capacity, expected_type=type_hints["on_demand_base_capacity"])
            check_type(argname="argument on_demand_percentage_above_base_capacity", value=on_demand_percentage_above_base_capacity, expected_type=type_hints["on_demand_percentage_above_base_capacity"])
            check_type(argname="argument protected_instances", value=protected_instances, expected_type=type_hints["protected_instances"])
            check_type(argname="argument removal_policys", value=removal_policys, expected_type=type_hints["removal_policys"])
            check_type(argname="argument scaling_group_name", value=scaling_group_name, expected_type=type_hints["scaling_group_name"])
            check_type(argname="argument scaling_policy", value=scaling_policy, expected_type=type_hints["scaling_policy"])
            check_type(argname="argument spot_instance_pools", value=spot_instance_pools, expected_type=type_hints["spot_instance_pools"])
            check_type(argname="argument spot_instance_remedy", value=spot_instance_remedy, expected_type=type_hints["spot_instance_remedy"])
            check_type(argname="argument standby_instances", value=standby_instances, expected_type=type_hints["standby_instances"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "max_size": max_size,
            "min_size": min_size,
        }
        if compensate_with_on_demand is not None:
            self._values["compensate_with_on_demand"] = compensate_with_on_demand
        if container_group_id is not None:
            self._values["container_group_id"] = container_group_id
        if db_instance_ids is not None:
            self._values["db_instance_ids"] = db_instance_ids
        if default_cooldown is not None:
            self._values["default_cooldown"] = default_cooldown
        if desired_capacity is not None:
            self._values["desired_capacity"] = desired_capacity
        if group_deletion_protection is not None:
            self._values["group_deletion_protection"] = group_deletion_protection
        if group_type is not None:
            self._values["group_type"] = group_type
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
        if on_demand_base_capacity is not None:
            self._values["on_demand_base_capacity"] = on_demand_base_capacity
        if on_demand_percentage_above_base_capacity is not None:
            self._values["on_demand_percentage_above_base_capacity"] = on_demand_percentage_above_base_capacity
        if protected_instances is not None:
            self._values["protected_instances"] = protected_instances
        if removal_policys is not None:
            self._values["removal_policys"] = removal_policys
        if scaling_group_name is not None:
            self._values["scaling_group_name"] = scaling_group_name
        if scaling_policy is not None:
            self._values["scaling_policy"] = scaling_policy
        if spot_instance_pools is not None:
            self._values["spot_instance_pools"] = spot_instance_pools
        if spot_instance_remedy is not None:
            self._values["spot_instance_remedy"] = spot_instance_remedy
        if standby_instances is not None:
            self._values["standby_instances"] = standby_instances
        if tags is not None:
            self._values["tags"] = tags
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids

    @builtins.property
    def max_size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        '''
        result = self._values.get("max_size")
        assert result is not None, "Required property 'max_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def min_size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        '''
        result = self._values.get("min_size")
        assert result is not None, "Required property 'min_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compensate_with_on_demand(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
        Default value: true.
        '''
        result = self._values.get("compensate_with_on_demand")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerGroupId: The ID of the elastic container instance.
        '''
        result = self._values.get("container_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        '''
        result = self._values.get("db_instance_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_cooldown(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
        The default value is 300s.
        '''
        result = self._values.get("default_cooldown")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desired_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        '''
        result = self._values.get("desired_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupDeletionProtection: Whether to enable deletion protection for scaling group.
        Default to False.
        '''
        result = self._values.get("group_deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: The type of instances that are managed by the scaling group. Valid values:
        ECS
        ECI
        Default value: ECS.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        '''
        result = self._values.get("health_check_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        '''
        result = self._values.get("launch_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        launchTemplateVersion: The version of the instance launch template. Valid values:
        A fixed template version numbe.
        Default: The default template version is always used.
        Latest: The latest template version is always used.
        '''
        result = self._values.get("launch_template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        '''
        result = self._values.get("load_balancer_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_az_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:

        1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
        Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
        '''
        result = self._values.get("multi_az_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_configurations(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]]:
        '''
        :Property: notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        '''
        result = self._values.get("notification_configurations")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]], result)

    @builtins.property
    def on_demand_base_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
        '''
        result = self._values.get("on_demand_base_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def on_demand_percentage_above_base_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
        '''
        result = self._values.get("on_demand_percentage_above_base_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protected_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protectedInstances: ECS instances of protected mode in the scaling group.
        '''
        result = self._values.get("protected_instances")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def removal_policys(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        removalPolicys: Policy for removing ECS instances from the scaling group.
        Optional values:
        OldestInstance: removes the first ECS instance attached to the scaling group.
        NewestInstance: removes the first ECS instance attached to the scaling group.
        OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        '''
        result = self._values.get("removal_policys")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        If this parameter is not specified, the default value is ScalingGroupId.
        '''
        result = self._values.get("scaling_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingPolicy: The reclaim mode of the scaling group. Valid values:
        recycle
        release
        ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
        '''
        result = self._values.get("scaling_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_instance_pools(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
        '''
        result = self._values.get("spot_instance_pools")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_instance_remedy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
        '''
        result = self._values.get("spot_instance_remedy")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: standbyInstances: ECS instances of standby mode in the scaling group.
        '''
        result = self._values.get("standby_instances")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosScalingGroup.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosScalingGroup.TagsProperty]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
        The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
        The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
        When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScalingRule",
):
    '''A ROS template type:  ``ALIYUN::ESS::ScalingRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__129b235f4eebc982530995cc5c759cbfddbf9d61bdc476c26f55e55462c0a47c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a8f5df0f2651efca94af2ad637c4d076fee945e41d4b9c13f77e7ba12c76aab5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleAri: Unique identifier of a scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleAri"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__57c0a09d4b44ab20f853c445d3fd3cc56234dadce859970e1a0a0f8419f2d531)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: ID of the scaling group of a scaling rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c786db50f0a0f208c14558dcff68da6ff01f36305987e4643999f0d33b726238)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="adjustmentType")
    def adjustment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        adjustmentType: Adjustment mode of a scaling rule. Optional values:

        - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "adjustmentType"))

    @adjustment_type.setter
    def adjustment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0d08278a5941d5fc64f3cda4e1f20843b36184fdd09b8083d6df2b650413803)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "adjustmentType", value)

    @builtins.property
    @jsii.member(jsii_name="adjustmentValue")
    def adjustment_value(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        adjustmentValue: Adjusted value of a scaling rule. Value range:

        - QuantityChangeInCapacity: [-500, 500]
        - PercentChangeInCapacity: [-100, 10000]
        - TotalCapacity: [0, 1000]
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "adjustmentValue"))

    @adjustment_value.setter
    def adjustment_value(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3087f00334aaf4ee344fd254d89a2c4643e8236560017433383aafadae3bd15a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "adjustmentValue", value)

    @builtins.property
    @jsii.member(jsii_name="cooldown")
    def cooldown(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cooldown"))

    @cooldown.setter
    def cooldown(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83751912a78083bfe569a097fbedc39acb72ea9202ae8ddd81b5e9c493e65304)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cooldown", value)

    @builtins.property
    @jsii.member(jsii_name="disableScaleIn")
    def disable_scale_in(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disableScaleIn"))

    @disable_scale_in.setter
    def disable_scale_in(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37102122d52769f82116ce2761888967a01f71d319ac85fb878664a7a488d3bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disableScaleIn", value)

    @builtins.property
    @jsii.member(jsii_name="estimatedInstanceWarmup")
    def estimated_instance_warmup(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "estimatedInstanceWarmup"))

    @estimated_instance_warmup.setter
    def estimated_instance_warmup(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b33d48f90948bb29e1ead1998a5cfb53d5da5b6baf4bb800ebf47e3dc6cd4a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "estimatedInstanceWarmup", value)

    @builtins.property
    @jsii.member(jsii_name="initialMaxSize")
    def initial_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
        Default value: the same as the value of MaxSize
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "initialMaxSize"))

    @initial_max_size.setter
    def initial_max_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5cd06447e1435c72ef1948e66e5738a1e71d1b925533926d2824bede3f7ab48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "initialMaxSize", value)

    @builtins.property
    @jsii.member(jsii_name="metricName")
    def metric_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
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
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "metricName"))

    @metric_name.setter
    def metric_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__765812aec3b0ba0dfcbc69e1347f72c82021308c7efd977d51c04cef169b9c04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metricName", value)

    @builtins.property
    @jsii.member(jsii_name="minAdjustmentMagnitude")
    def min_adjustment_magnitude(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "minAdjustmentMagnitude"))

    @min_adjustment_magnitude.setter
    def min_adjustment_magnitude(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b38a038b71ef903e183940ec184860def6fed0982ffedd1c4b5fbb1c17ad765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "minAdjustmentMagnitude", value)

    @builtins.property
    @jsii.member(jsii_name="predictiveScalingMode")
    def predictive_scaling_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveScalingMode: The mode of the predictive scaling rule. Valid values:

        - PredictAndScale: generates forecasts and creates forecast tasks.
        - PredictOnly: generates forecasts but does not create forecast tasks.
        Default value: PredictAndScale
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "predictiveScalingMode"))

    @predictive_scaling_mode.setter
    def predictive_scaling_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9732fed780bba511e36c946c860307ba4e43f521887ed5969bd24f51cd89fdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "predictiveScalingMode", value)

    @builtins.property
    @jsii.member(jsii_name="predictiveTaskBufferTime")
    def predictive_task_buffer_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        Default value: 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "predictiveTaskBufferTime"))

    @predictive_task_buffer_time.setter
    def predictive_task_buffer_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ecadcf7d9ae6085d18fb768f68f2c5f193ba68ff8e80f320521be434333dc29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "predictiveTaskBufferTime", value)

    @builtins.property
    @jsii.member(jsii_name="predictiveValueBehavior")
    def predictive_value_behavior(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:

        - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        Default value: MaxOverridePredictiveValue
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "predictiveValueBehavior"))

    @predictive_value_behavior.setter
    def predictive_value_behavior(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2e8f2b798bb2ffe28dae2451cbd9d2e91a9b506b087cf06a14a56fcab5750fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "predictiveValueBehavior", value)

    @builtins.property
    @jsii.member(jsii_name="predictiveValueBuffer")
    def predictive_value_buffer(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        Default value: 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "predictiveValueBuffer"))

    @predictive_value_buffer.setter
    def predictive_value_buffer(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60b00be9933eaaaa3ca12b96b1ce5a9298888ab2b96d413f7c024d4f695b6182)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "predictiveValueBuffer", value)

    @builtins.property
    @jsii.member(jsii_name="scaleInEvaluationCount")
    def scale_in_evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        Default value: 15.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scaleInEvaluationCount"))

    @scale_in_evaluation_count.setter
    def scale_in_evaluation_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e944483e08ddeb0e7c19cb4f0e53cb0fabf2388aba72b723de37dff4d3286b6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scaleInEvaluationCount", value)

    @builtins.property
    @jsii.member(jsii_name="scaleOutEvaluationCount")
    def scale_out_evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scaleOutEvaluationCount"))

    @scale_out_evaluation_count.setter
    def scale_out_evaluation_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6071067a4d7e8288aee6f29d57af947d67dd9af024ecd42fbe8156336fa50f1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scaleOutEvaluationCount", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleName")
    def scaling_rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleName"))

    @scaling_rule_name.setter
    def scaling_rule_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b02c61d6b611e4a6b430a7bb7315cf8502d84d38d25450bdfa0e4c51ea58686d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleName", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleType")
    def scaling_rule_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:

        - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        If this parameter value is not specified, the default value is SimpleScalingRule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleType"))

    @scaling_rule_type.setter
    def scaling_rule_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99914e36616f4c5c8ad3cbd2f4cc409802dbc438af82e13fe264c20e4a0e5c7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleType", value)

    @builtins.property
    @jsii.member(jsii_name="stepAdjustment")
    def step_adjustment(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingRule.StepAdjustmentProperty"]]]]:
        '''
        :Property: stepAdjustment:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingRule.StepAdjustmentProperty"]]]], jsii.get(self, "stepAdjustment"))

    @step_adjustment.setter
    def step_adjustment(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosScalingRule.StepAdjustmentProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a4ba87bab268177a60fd866c0368f70f81f77db523524df16c020287892a9ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "stepAdjustment", value)

    @builtins.property
    @jsii.member(jsii_name="targetValue")
    def target_value(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetValue"))

    @target_value.setter
    def target_value(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8558041a7aa6a89b3a438f65522624bad1cb351b19ee16e2aa031baa036ba992)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            metric_interval_lower_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            metric_interval_upper_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            scaling_adjustment: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param metric_interval_lower_bound: 
            :param metric_interval_upper_bound: 
            :param scaling_adjustment: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__821668dd812ead5b65c516c242d21b27465f7caae0485b61275e9c845cea774b)
                check_type(argname="argument metric_interval_lower_bound", value=metric_interval_lower_bound, expected_type=type_hints["metric_interval_lower_bound"])
                check_type(argname="argument metric_interval_upper_bound", value=metric_interval_upper_bound, expected_type=type_hints["metric_interval_upper_bound"])
                check_type(argname="argument scaling_adjustment", value=scaling_adjustment, expected_type=type_hints["scaling_adjustment"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if metric_interval_lower_bound is not None:
                self._values["metric_interval_lower_bound"] = metric_interval_lower_bound
            if metric_interval_upper_bound is not None:
                self._values["metric_interval_upper_bound"] = metric_interval_upper_bound
            if scaling_adjustment is not None:
                self._values["scaling_adjustment"] = scaling_adjustment

        @builtins.property
        def metric_interval_lower_bound(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            metricIntervalLowerBound: The lower limit value specified in step adjustment N.
            Valid values: -9.999999E18 to 9.999999E18.
            '''
            result = self._values.get("metric_interval_lower_bound")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def metric_interval_upper_bound(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            metricIntervalUpperBound: The upper limit value specified in step adjustment N.
            Valid values: -9.999999E18 to 9.999999E18.
            '''
            result = self._values.get("metric_interval_upper_bound")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def scaling_adjustment(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
            '''
            result = self._values.get("scaling_adjustment")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        "scale_in_evaluation_count": "scaleInEvaluationCount",
        "scale_out_evaluation_count": "scaleOutEvaluationCount",
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
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        adjustment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        adjustment_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_scale_in: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        estimated_instance_warmup: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        initial_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        metric_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_adjustment_magnitude: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_scaling_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_task_buffer_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_value_behavior: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_value_buffer: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_in_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_out_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        step_adjustment: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingRule.StepAdjustmentProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        target_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingRule``.

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
        :param scale_in_evaluation_count: 
        :param scale_out_evaluation_count: 
        :param scaling_rule_name: 
        :param scaling_rule_type: 
        :param step_adjustment: 
        :param target_value: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbe292b0457dab715dd98b25a68cdefe5eca34a305fe53a40b812a933ae11822)
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument adjustment_type", value=adjustment_type, expected_type=type_hints["adjustment_type"])
            check_type(argname="argument adjustment_value", value=adjustment_value, expected_type=type_hints["adjustment_value"])
            check_type(argname="argument cooldown", value=cooldown, expected_type=type_hints["cooldown"])
            check_type(argname="argument disable_scale_in", value=disable_scale_in, expected_type=type_hints["disable_scale_in"])
            check_type(argname="argument estimated_instance_warmup", value=estimated_instance_warmup, expected_type=type_hints["estimated_instance_warmup"])
            check_type(argname="argument initial_max_size", value=initial_max_size, expected_type=type_hints["initial_max_size"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument min_adjustment_magnitude", value=min_adjustment_magnitude, expected_type=type_hints["min_adjustment_magnitude"])
            check_type(argname="argument predictive_scaling_mode", value=predictive_scaling_mode, expected_type=type_hints["predictive_scaling_mode"])
            check_type(argname="argument predictive_task_buffer_time", value=predictive_task_buffer_time, expected_type=type_hints["predictive_task_buffer_time"])
            check_type(argname="argument predictive_value_behavior", value=predictive_value_behavior, expected_type=type_hints["predictive_value_behavior"])
            check_type(argname="argument predictive_value_buffer", value=predictive_value_buffer, expected_type=type_hints["predictive_value_buffer"])
            check_type(argname="argument scale_in_evaluation_count", value=scale_in_evaluation_count, expected_type=type_hints["scale_in_evaluation_count"])
            check_type(argname="argument scale_out_evaluation_count", value=scale_out_evaluation_count, expected_type=type_hints["scale_out_evaluation_count"])
            check_type(argname="argument scaling_rule_name", value=scaling_rule_name, expected_type=type_hints["scaling_rule_name"])
            check_type(argname="argument scaling_rule_type", value=scaling_rule_type, expected_type=type_hints["scaling_rule_type"])
            check_type(argname="argument step_adjustment", value=step_adjustment, expected_type=type_hints["step_adjustment"])
            check_type(argname="argument target_value", value=target_value, expected_type=type_hints["target_value"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if scale_in_evaluation_count is not None:
            self._values["scale_in_evaluation_count"] = scale_in_evaluation_count
        if scale_out_evaluation_count is not None:
            self._values["scale_out_evaluation_count"] = scale_out_evaluation_count
        if scaling_rule_name is not None:
            self._values["scaling_rule_name"] = scaling_rule_name
        if scaling_rule_type is not None:
            self._values["scaling_rule_type"] = scaling_rule_type
        if step_adjustment is not None:
            self._values["step_adjustment"] = step_adjustment
        if target_value is not None:
            self._values["target_value"] = target_value

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingGroupId: ID of the scaling group of a scaling rule.
        '''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def adjustment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        adjustmentType: Adjustment mode of a scaling rule. Optional values:

        - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        '''
        result = self._values.get("adjustment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def adjustment_value(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        adjustmentValue: Adjusted value of a scaling rule. Value range:

        - QuantityChangeInCapacity: [-500, 500]
        - PercentChangeInCapacity: [-100, 10000]
        - TotalCapacity: [0, 1000]
        '''
        result = self._values.get("adjustment_value")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cooldown(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        '''
        result = self._values.get("cooldown")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_scale_in(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
        Default value: false
        '''
        result = self._values.get("disable_scale_in")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def estimated_instance_warmup(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        '''
        result = self._values.get("estimated_instance_warmup")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def initial_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
        Default value: the same as the value of MaxSize
        '''
        result = self._values.get("initial_max_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
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
        '''
        result = self._values.get("metric_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_adjustment_magnitude(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        '''
        result = self._values.get("min_adjustment_magnitude")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_scaling_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveScalingMode: The mode of the predictive scaling rule. Valid values:

        - PredictAndScale: generates forecasts and creates forecast tasks.
        - PredictOnly: generates forecasts but does not create forecast tasks.
        Default value: PredictAndScale
        '''
        result = self._values.get("predictive_scaling_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_task_buffer_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        Default value: 0
        '''
        result = self._values.get("predictive_task_buffer_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_value_behavior(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:

        - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
        - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
        Default value: MaxOverridePredictiveValue
        '''
        result = self._values.get("predictive_value_behavior")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_value_buffer(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        Default value: 0
        '''
        result = self._values.get("predictive_value_buffer")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_in_evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        Default value: 15.
        '''
        result = self._values.get("scale_in_evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_out_evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        Default value: 3.
        '''
        result = self._values.get("scale_out_evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        '''
        result = self._values.get("scaling_rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:

        - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
        If this parameter value is not specified, the default value is SimpleScalingRule.
        '''
        result = self._values.get("scaling_rule_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def step_adjustment(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingRule.StepAdjustmentProperty]]]]:
        '''
        :Property: stepAdjustment:
        '''
        result = self._values.get("step_adjustment")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingRule.StepAdjustmentProperty]]]], result)

    @builtins.property
    def target_value(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        '''
        result = self._values.get("target_value")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScheduledTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.RosScheduledTask",
):
    '''A ROS template type:  ``ALIYUN::ESS::ScheduledTask``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScheduledTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScheduledTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e70bc04b53edd53f3bce0d503df1523fd03bd0bb516a961c08ff699dce3b0d94)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8fd96b316a1db63f4c53ecbf41f6c0e15447938bc46d7e6dd994c797869bc0d7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduledTaskId")
    def attr_scheduled_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduledTaskId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7d682d90f2764c362b0de59bffcb4db1466d1c383f844873148e15df9d978b2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="launchTime")
    def launch_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        launchTime: Time point at which the scheduled task is triggered.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        A time point 90 days after creation or modification cannot be entered.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "launchTime"))

    @launch_time.setter
    def launch_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb31aa7f563691cd64cc155834eac90ec976155d775b5c706c8d6fb0b4f9bb68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "launchTime", value)

    @builtins.property
    @jsii.member(jsii_name="scheduledAction")
    def scheduled_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scheduledAction"))

    @scheduled_action.setter
    def scheduled_action(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe8c4ff427551c663031027c2073507221d497209aa1910de654a5ac9a9ab9b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduledAction", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eaa8eddc926f15444baa0faaddf87b3525da669452adebcf9549227412b6ac2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="launchExpirationTime")
    def launch_expiration_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        launchExpirationTime: Time period within which the failed scheduled task is retried.
        The default value is 600s.
        Value range: [0, 21600]
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "launchExpirationTime"))

    @launch_expiration_time.setter
    def launch_expiration_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e700a30e7f61f86e59e301f681b402ab4341088b6d35971b4e9b05f6d5f5867)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "launchExpirationTime", value)

    @builtins.property
    @jsii.member(jsii_name="recurrenceEndTime")
    def recurrence_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        recurrenceEndTime: End time of the scheduled task to be repeated.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        A time point 90 days after creation or modification cannot be entered.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "recurrenceEndTime"))

    @recurrence_end_time.setter
    def recurrence_end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bb418b7d86edd47711bdab2f47a953a6b008bae794e5aeb7546a62f48263115)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "recurrenceEndTime", value)

    @builtins.property
    @jsii.member(jsii_name="recurrenceType")
    def recurrence_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        recurrenceType: Type of the scheduled task to be repeated. Optional values:

        - Daily: Recurrence interval by day for a scheduled task.
        - Weekly: Recurrence interval by week for a scheduled task.
        - Monthly: Recurrence interval by month for a scheduled task.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "recurrenceType"))

    @recurrence_type.setter
    def recurrence_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6285fe5c3af7751d4321494438fe4d1639cb594587bd7e2d2c6678abb74f87fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "recurrenceType", value)

    @builtins.property
    @jsii.member(jsii_name="recurrenceValue")
    def recurrence_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        recurrenceValue: Value of the scheduled task to be repeated.

        - Daily: Only one value in the range [1,31] can be filled.
        - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "recurrenceValue"))

    @recurrence_value.setter
    def recurrence_value(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1879f07c89ce8b289202d204538baf837ed6631d533a729a3b67443b096e479)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "recurrenceValue", value)

    @builtins.property
    @jsii.member(jsii_name="scheduledTaskName")
    def scheduled_task_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        The account name is unique in the same region.
        If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scheduledTaskName"))

    @scheduled_task_name.setter
    def scheduled_task_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0c23ca1c33c432e39e4e13c90c13d50e98cac54b7e6ba7060b2161752e983d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduledTaskName", value)

    @builtins.property
    @jsii.member(jsii_name="taskEnabled")
    def task_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        taskEnabled: Whether to enable the scheduled task.

        - When the parameter is set to true, the task is enabled.
        - When the parameter is set to false, the task is disabled.
        The default value is true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "taskEnabled"))

    @task_enabled.setter
    def task_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3033cc4ab6eb4a69c3792d5564a9c17dfd649986fea21f84f7eedf279ee4fe2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        launch_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scheduled_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_expiration_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recurrence_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recurrence_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recurrence_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduled_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScheduledTask``.

        :param launch_time: 
        :param scheduled_action: 
        :param description: 
        :param launch_expiration_time: 
        :param recurrence_end_time: 
        :param recurrence_type: 
        :param recurrence_value: 
        :param scheduled_task_name: 
        :param task_enabled: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7edbad4a9e9b4186746734093edc2a4cde597d704007910bdb61acd82821ecbd)
            check_type(argname="argument launch_time", value=launch_time, expected_type=type_hints["launch_time"])
            check_type(argname="argument scheduled_action", value=scheduled_action, expected_type=type_hints["scheduled_action"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument launch_expiration_time", value=launch_expiration_time, expected_type=type_hints["launch_expiration_time"])
            check_type(argname="argument recurrence_end_time", value=recurrence_end_time, expected_type=type_hints["recurrence_end_time"])
            check_type(argname="argument recurrence_type", value=recurrence_type, expected_type=type_hints["recurrence_type"])
            check_type(argname="argument recurrence_value", value=recurrence_value, expected_type=type_hints["recurrence_value"])
            check_type(argname="argument scheduled_task_name", value=scheduled_task_name, expected_type=type_hints["scheduled_task_name"])
            check_type(argname="argument task_enabled", value=task_enabled, expected_type=type_hints["task_enabled"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def launch_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        launchTime: Time point at which the scheduled task is triggered.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        A time point 90 days after creation or modification cannot be entered.
        '''
        result = self._values.get("launch_time")
        assert result is not None, "Required property 'launch_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scheduled_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        '''
        result = self._values.get("scheduled_action")
        assert result is not None, "Required property 'scheduled_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_expiration_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        launchExpirationTime: Time period within which the failed scheduled task is retried.
        The default value is 600s.
        Value range: [0, 21600]
        '''
        result = self._values.get("launch_expiration_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recurrence_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        recurrenceEndTime: End time of the scheduled task to be repeated.
        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        A time point 90 days after creation or modification cannot be entered.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        result = self._values.get("recurrence_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recurrence_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        recurrenceType: Type of the scheduled task to be repeated. Optional values:

        - Daily: Recurrence interval by day for a scheduled task.
        - Weekly: Recurrence interval by week for a scheduled task.
        - Monthly: Recurrence interval by month for a scheduled task.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        result = self._values.get("recurrence_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recurrence_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        recurrenceValue: Value of the scheduled task to be repeated.

        - Daily: Only one value in the range [1,31] can be filled.
        - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        result = self._values.get("recurrence_value")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduled_task_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        The account name is unique in the same region.
        If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        '''
        result = self._values.get("scheduled_task_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        taskEnabled: Whether to enable the scheduled task.

        - When the parameter is set to true, the task is enabled.
        - When the parameter is set to false, the task is disabled.
        The default value is true.
        '''
        result = self._values.get("task_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScheduledTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingConfiguration(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingConfiguration",
):
    '''A ROS resource type:  ``ALIYUN::ESS::ScalingConfiguration``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScalingConfigurationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingConfiguration``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a01e47ae6081577d2e6bcdab5668699ae058a3f0638a8fa9db1cdf5079c0c36)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurationId: The scaling configuration id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScalingConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "credit_specification": "creditSpecification",
        "deployment_set_id": "deploymentSetId",
        "disk_mappings": "diskMappings",
        "host_name": "hostName",
        "hpc_cluster_id": "hpcClusterId",
        "image_family": "imageFamily",
        "image_id": "imageId",
        "instance_id": "instanceId",
        "instance_name": "instanceName",
        "instance_type": "instanceType",
        "instance_types": "instanceTypes",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_in": "internetMaxBandwidthIn",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "io_optimized": "ioOptimized",
        "ipv6_address_count": "ipv6AddressCount",
        "key_pair_name": "keyPairName",
        "load_balancer_weight": "loadBalancerWeight",
        "password": "password",
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
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        credit_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.DiskMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_types: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_max_bandwidth_in: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_configuration_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit_for_instance_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingConfiguration``.

        :param scaling_group_id: Property scalingGroupId: Scaling group id to create the scaling configuration.
        :param credit_specification: Property creditSpecification: The performance mode of the burstable instance. Valid values: Standard: the standard mode. Unlimited: the unlimited mode.
        :param deployment_set_id: Property deploymentSetId: Deployment set ID.
        :param disk_mappings: Property diskMappings: Disk mappings to attach to instance.
        :param host_name: Property hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances: Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits. Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
        :param hpc_cluster_id: Property hpcClusterId: The HPC cluster ID to which the instance belongs.
        :param image_family: Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
        :param image_id: Property imageId: Image ID to create ecs instance .
        :param instance_id: Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        :param instance_name: Property instanceName: The name of the instance launched from the current scaling configuration.
        :param instance_type: Property instanceType: ecs supported instance type.
        :param instance_types: Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        :param internet_charge_type: Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        :param internet_max_bandwidth_in: Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        :param internet_max_bandwidth_out: Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second). The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps. The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        :param io_optimized: Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        :param ipv6_address_count: Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
        :param key_pair_name: Property keyPairName: SSH key pair name.
        :param load_balancer_weight: Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100. Default value: 50.
        :param password: Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        :param password_inherit: Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        :param ram_role_name: Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param scaling_configuration_name: Property scalingConfigurationName: Name of created scaling configuration.
        :param security_group_id: Property securityGroupId: Security Group to create ecs instance.
        :param spot_price_limit: Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        :param spot_price_limit_for_instance_type: Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type. The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit. You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}. At most 50 items can be specified. Key ecs instance type Value Supports a maximum of 3 decimal places.
        :param spot_strategy: Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges: NoSpot: Normal pay-per-use instance SpotWithPriceLimit: Set a preemptive instance of the cap price SpotAsPriceGo: System automatic bidding, following the current market actual price Default: NoSpot.
        :param system_disk_auto_snapshot_policy_id: Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        :param system_disk_category: Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
        :param system_disk_performance_level: Property systemDiskPerformanceLevel: The performance level of an ESSD.
        :param system_disk_size: Property systemDiskSize: Size of system disk. Unit is GB.
        :param tag_list: Property tagList: The tags of an instance in list format. Do not use with Tags at the same time. You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...]. At most 20 tags can be specified. Key It can be up to 64 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Cannot be a null string. Value It can be up to 128 characters in length. Cannot begin with aliyun. Cannot begin with http:// or https://. Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>*stack*<stack_id>") if possible.
        :param user_data: Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be85fb0fd4f1e809db57a66f784b75c19396cdd108753cbbde82e04a20a72d09)
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument credit_specification", value=credit_specification, expected_type=type_hints["credit_specification"])
            check_type(argname="argument deployment_set_id", value=deployment_set_id, expected_type=type_hints["deployment_set_id"])
            check_type(argname="argument disk_mappings", value=disk_mappings, expected_type=type_hints["disk_mappings"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument hpc_cluster_id", value=hpc_cluster_id, expected_type=type_hints["hpc_cluster_id"])
            check_type(argname="argument image_family", value=image_family, expected_type=type_hints["image_family"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument internet_max_bandwidth_in", value=internet_max_bandwidth_in, expected_type=type_hints["internet_max_bandwidth_in"])
            check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument ipv6_address_count", value=ipv6_address_count, expected_type=type_hints["ipv6_address_count"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument load_balancer_weight", value=load_balancer_weight, expected_type=type_hints["load_balancer_weight"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument password_inherit", value=password_inherit, expected_type=type_hints["password_inherit"])
            check_type(argname="argument ram_role_name", value=ram_role_name, expected_type=type_hints["ram_role_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scaling_configuration_name", value=scaling_configuration_name, expected_type=type_hints["scaling_configuration_name"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_price_limit_for_instance_type", value=spot_price_limit_for_instance_type, expected_type=type_hints["spot_price_limit_for_instance_type"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            check_type(argname="argument system_disk_auto_snapshot_policy_id", value=system_disk_auto_snapshot_policy_id, expected_type=type_hints["system_disk_auto_snapshot_policy_id"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
            check_type(argname="argument system_disk_performance_level", value=system_disk_performance_level, expected_type=type_hints["system_disk_performance_level"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument tag_list", value=tag_list, expected_type=type_hints["tag_list"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if credit_specification is not None:
            self._values["credit_specification"] = credit_specification
        if deployment_set_id is not None:
            self._values["deployment_set_id"] = deployment_set_id
        if disk_mappings is not None:
            self._values["disk_mappings"] = disk_mappings
        if host_name is not None:
            self._values["host_name"] = host_name
        if hpc_cluster_id is not None:
            self._values["hpc_cluster_id"] = hpc_cluster_id
        if image_family is not None:
            self._values["image_family"] = image_family
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
        if ipv6_address_count is not None:
            self._values["ipv6_address_count"] = ipv6_address_count
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if load_balancer_weight is not None:
            self._values["load_balancer_weight"] = load_balancer_weight
        if password is not None:
            self._values["password"] = password
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
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scalingGroupId: Scaling group id to create the scaling configuration.'''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def credit_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property creditSpecification: The performance mode of the burstable instance.

        Valid values:
        Standard: the standard mode.
        Unlimited: the unlimited mode.
        '''
        result = self._values.get("credit_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deployment_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deploymentSetId: Deployment set ID.'''
        result = self._values.get("deployment_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_mappings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]]:
        '''Property diskMappings: Disk mappings to attach to instance.'''
        result = self._values.get("disk_mappings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostName: The hostname of the ECS instance.

        The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
        Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
        Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hpc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hpcClusterId: The HPC cluster ID to which the instance belongs.'''
        result = self._values.get("hpc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageFamily: The name of the image family.

        You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
        '''
        result = self._values.get("image_family")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: Image ID to create ecs instance .'''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The name of the instance launched from the current scaling configuration.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: ecs supported instance type.'''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_types(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceTypes: ecs supported instance types.

        Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        '''
        result = self._values.get("instance_types")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.'''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_max_bandwidth_in(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).

        The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        '''
        result = self._values.get("internet_max_bandwidth_in")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_max_bandwidth_out(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).

        The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        '''
        result = self._values.get("internet_max_bandwidth_out")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioOptimized: The 'optimized' instance can provide better IO performance.

        Support 'none' and 'optimized' only, default is 'none'.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).'''
        result = self._values.get("ipv6_address_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: SSH key pair name.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerWeight: The weight of the ECS instance as a backend server.

        Valid values: 1 to 100.
        Default value: 50.
        '''
        result = self._values.get("load_balancer_weight")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: Password of created ecs instance.

        Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property passwordInherit: Whether to use the password pre-configured in the image you select or not.

        When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        '''
        result = self._values.get("password_inherit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ramRoleName: Instance RAM role name.

        The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        '''
        result = self._values.get("ram_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_configuration_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingConfigurationName: Name of created scaling configuration.'''
        result = self._values.get("scaling_configuration_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Security Group to create ecs instance.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotPriceLimit: Set the hourly maximum price for the instance.

        Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit_for_instance_type(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.

        The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        At most 50 items can be specified.
        Key
        ecs instance type
        Value
        Supports a maximum of 3 decimal places.
        '''
        result = self._values.get("spot_price_limit_for_instance_type")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotStrategy: Preemption strategy for post-paid instances.

        It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        NoSpot: Normal pay-per-use instance
        SpotWithPriceLimit: Set a preemptive instance of the cap price
        SpotAsPriceGo: System automatic bidding, following the current market actual price
        Default: NoSpot.
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.'''
        result = self._values.get("system_disk_auto_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskCategory: Category of system disk.

        Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskPerformanceLevel: The performance level of an ESSD.'''
        result = self._values.get("system_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskSize: Size of system disk.

        Unit is GB.
        '''
        result = self._values.get("system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.TagListProperty]]]]:
        '''Property tagList: The tags of an instance in list format.

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
        '''
        result = self._values.get("tag_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.TagListProperty]]]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userData: User data to pass to instance.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroup",
):
    '''A ROS resource type:  ``ALIYUN::ESS::ScalingGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScalingGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68b84de07d5e2051623b6d18059552a6bcb0125c57e505bde03ea2c19f8aec8d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupId: Scaling group Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupName")
    def attr_scaling_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupName: Scaling group name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupName"))


class ScalingGroupEnable(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroupEnable",
):
    '''A ROS resource type:  ``ALIYUN::ESS::ScalingGroupEnable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScalingGroupEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingGroupEnable``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d396c56ec076a081bf3195c789f7b407df745b52da435f8622a04bc50a684ec9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLifecycleState")
    def attr_lifecycle_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LifecycleState: The scaling group status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLifecycleState"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupId: The scaling group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingInstanceDetails")
    def attr_scaling_instance_details(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingInstanceDetails"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingInstances")
    def attr_scaling_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingInstances: The auto created scaling instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingInstances"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteErrorInfo")
    def attr_scaling_rule_aris_execute_error_info(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteErrorInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesAdded")
    def attr_scaling_rule_aris_execute_result_instances_added(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteResultInstancesAdded"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultInstancesRemoved")
    def attr_scaling_rule_aris_execute_result_instances_removed(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteResultInstancesRemoved"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleArisExecuteResultNumberOfAddedInstances")
    def attr_scaling_rule_aris_execute_result_number_of_added_instances(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleArisExecuteResultNumberOfAddedInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.ScalingGroupEnableProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_group_id": "scalingGroupId",
        "attach_options": "attachOptions",
        "detach_options": "detachOptions",
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
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        attach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.AttachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        detach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.DetachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remove_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_configuration_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_aris_execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingGroupEnable``.

        :param scaling_group_id: Property scalingGroupId: The id of operated scaling group.
        :param attach_options: Property attachOptions: Options for attaching instances.
        :param detach_options: Property detachOptions: Options for detaching instances.
        :param instance_ids: Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        :param remove_instance_ids: Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        :param scaling_configuration_id: Property scalingConfigurationId: The id of scaling configuration which will be activate.
        :param scaling_rule_aris: Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris. When creating the resource, all the scaling rule aris in the list will be executed. When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        :param scaling_rule_aris_execute_version: Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27aa303aa686a6ae2cb5d268aa52c8632e0533ee95ea0d8c480839bc60d34365)
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument attach_options", value=attach_options, expected_type=type_hints["attach_options"])
            check_type(argname="argument detach_options", value=detach_options, expected_type=type_hints["detach_options"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument remove_instance_ids", value=remove_instance_ids, expected_type=type_hints["remove_instance_ids"])
            check_type(argname="argument scaling_configuration_id", value=scaling_configuration_id, expected_type=type_hints["scaling_configuration_id"])
            check_type(argname="argument scaling_rule_aris", value=scaling_rule_aris, expected_type=type_hints["scaling_rule_aris"])
            check_type(argname="argument scaling_rule_aris_execute_version", value=scaling_rule_aris_execute_version, expected_type=type_hints["scaling_rule_aris_execute_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "scaling_group_id": scaling_group_id,
        }
        if attach_options is not None:
            self._values["attach_options"] = attach_options
        if detach_options is not None:
            self._values["detach_options"] = detach_options
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
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scalingGroupId: The id of operated scaling group.'''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def attach_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.AttachOptionsProperty]]:
        '''Property attachOptions: Options for attaching instances.'''
        result = self._values.get("attach_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.AttachOptionsProperty]], result)

    @builtins.property
    def detach_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.DetachOptionsProperty]]:
        '''Property detachOptions: Options for detaching instances.'''
        result = self._values.get("detach_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.DetachOptionsProperty]], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceIds: The id list of ECS instance which will be attached.

        Max support 1000 instances.
        '''
        result = self._values.get("instance_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remove_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property removeInstanceIds: The id list of ECS instance which will be removed.

        Max support 1000 instances.
        '''
        result = self._values.get("remove_instance_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_configuration_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingConfigurationId: The id of scaling configuration which will be activate.'''
        result = self._values.get("scaling_configuration_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleAris: A list of scaling rule aris which will be executed.

        Max support 10 scaling rule aris.
        When creating the resource, all the scaling rule aris in the list will be executed.
        When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        '''
        result = self._values.get("scaling_rule_aris")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_aris_execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.'''
        result = self._values.get("scaling_rule_aris_execute_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        "compensate_with_on_demand": "compensateWithOnDemand",
        "container_group_id": "containerGroupId",
        "db_instance_ids": "dbInstanceIds",
        "default_cooldown": "defaultCooldown",
        "desired_capacity": "desiredCapacity",
        "group_deletion_protection": "groupDeletionProtection",
        "group_type": "groupType",
        "health_check_type": "healthCheckType",
        "instance_id": "instanceId",
        "launch_template_id": "launchTemplateId",
        "launch_template_version": "launchTemplateVersion",
        "load_balancer_ids": "loadBalancerIds",
        "multi_az_policy": "multiAzPolicy",
        "notification_configurations": "notificationConfigurations",
        "on_demand_base_capacity": "onDemandBaseCapacity",
        "on_demand_percentage_above_base_capacity": "onDemandPercentageAboveBaseCapacity",
        "protected_instances": "protectedInstances",
        "removal_policys": "removalPolicys",
        "scaling_group_name": "scalingGroupName",
        "scaling_policy": "scalingPolicy",
        "spot_instance_pools": "spotInstancePools",
        "spot_instance_remedy": "spotInstanceRemedy",
        "standby_instances": "standbyInstances",
        "tags": "tags",
        "v_switch_id": "vSwitchId",
        "v_switch_ids": "vSwitchIds",
    },
)
class ScalingGroupProps:
    def __init__(
        self,
        *,
        max_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        min_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desired_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_az_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroup.NotificationConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protected_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        removal_policys: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_instance_pools: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosScalingGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingGroup``.

        :param max_size: Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
        :param min_size: Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
        :param compensate_with_on_demand: Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED. Default value: true.
        :param container_group_id: Property containerGroupId: The ID of the elastic container instance.
        :param db_instance_ids: Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        :param default_cooldown: Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400]. The default value is 300s.
        :param desired_capacity: Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        :param group_deletion_protection: Property groupDeletionProtection: Whether to enable deletion protection for scaling group. Default to False.
        :param group_type: Property groupType: The type of instances that are managed by the scaling group. Valid values: ECS ECI Default value: ECS.
        :param health_check_type: Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
        :param instance_id: Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
        :param launch_template_id: Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
        :param launch_template_version: Property launchTemplateVersion: The version of the instance launch template. Valid values: A fixed template version numbe. Default: The default template version is always used. Latest: The latest template version is always used.
        :param load_balancer_ids: Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        :param multi_az_policy: Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value: 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone. 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources. Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
        :param notification_configurations: Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
        :param on_demand_base_capacity: Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
        :param on_demand_percentage_above_base_capacity: Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
        :param protected_instances: Property protectedInstances: ECS instances of protected mode in the scaling group.
        :param removal_policys: Property removalPolicys: Policy for removing ECS instances from the scaling group. Optional values: OldestInstance: removes the first ECS instance attached to the scaling group. NewestInstance: removes the first ECS instance attached to the scaling group. OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration. Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        :param scaling_group_name: Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region. If this parameter is not specified, the default value is ScalingGroupId.
        :param scaling_policy: Property scalingPolicy: The reclaim mode of the scaling group. Valid values: recycle release ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
        :param spot_instance_pools: Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
        :param spot_instance_remedy: Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
        :param standby_instances: Property standbyInstances: ECS instances of standby mode in the scaling group.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param v_switch_id: Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
        :param v_switch_ids: Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6837af1a639272cbc496040a393943d064eb5b0b946dc9e706e4ca881d10b4ba)
            check_type(argname="argument max_size", value=max_size, expected_type=type_hints["max_size"])
            check_type(argname="argument min_size", value=min_size, expected_type=type_hints["min_size"])
            check_type(argname="argument compensate_with_on_demand", value=compensate_with_on_demand, expected_type=type_hints["compensate_with_on_demand"])
            check_type(argname="argument container_group_id", value=container_group_id, expected_type=type_hints["container_group_id"])
            check_type(argname="argument db_instance_ids", value=db_instance_ids, expected_type=type_hints["db_instance_ids"])
            check_type(argname="argument default_cooldown", value=default_cooldown, expected_type=type_hints["default_cooldown"])
            check_type(argname="argument desired_capacity", value=desired_capacity, expected_type=type_hints["desired_capacity"])
            check_type(argname="argument group_deletion_protection", value=group_deletion_protection, expected_type=type_hints["group_deletion_protection"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument health_check_type", value=health_check_type, expected_type=type_hints["health_check_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument launch_template_id", value=launch_template_id, expected_type=type_hints["launch_template_id"])
            check_type(argname="argument launch_template_version", value=launch_template_version, expected_type=type_hints["launch_template_version"])
            check_type(argname="argument load_balancer_ids", value=load_balancer_ids, expected_type=type_hints["load_balancer_ids"])
            check_type(argname="argument multi_az_policy", value=multi_az_policy, expected_type=type_hints["multi_az_policy"])
            check_type(argname="argument notification_configurations", value=notification_configurations, expected_type=type_hints["notification_configurations"])
            check_type(argname="argument on_demand_base_capacity", value=on_demand_base_capacity, expected_type=type_hints["on_demand_base_capacity"])
            check_type(argname="argument on_demand_percentage_above_base_capacity", value=on_demand_percentage_above_base_capacity, expected_type=type_hints["on_demand_percentage_above_base_capacity"])
            check_type(argname="argument protected_instances", value=protected_instances, expected_type=type_hints["protected_instances"])
            check_type(argname="argument removal_policys", value=removal_policys, expected_type=type_hints["removal_policys"])
            check_type(argname="argument scaling_group_name", value=scaling_group_name, expected_type=type_hints["scaling_group_name"])
            check_type(argname="argument scaling_policy", value=scaling_policy, expected_type=type_hints["scaling_policy"])
            check_type(argname="argument spot_instance_pools", value=spot_instance_pools, expected_type=type_hints["spot_instance_pools"])
            check_type(argname="argument spot_instance_remedy", value=spot_instance_remedy, expected_type=type_hints["spot_instance_remedy"])
            check_type(argname="argument standby_instances", value=standby_instances, expected_type=type_hints["standby_instances"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "max_size": max_size,
            "min_size": min_size,
        }
        if compensate_with_on_demand is not None:
            self._values["compensate_with_on_demand"] = compensate_with_on_demand
        if container_group_id is not None:
            self._values["container_group_id"] = container_group_id
        if db_instance_ids is not None:
            self._values["db_instance_ids"] = db_instance_ids
        if default_cooldown is not None:
            self._values["default_cooldown"] = default_cooldown
        if desired_capacity is not None:
            self._values["desired_capacity"] = desired_capacity
        if group_deletion_protection is not None:
            self._values["group_deletion_protection"] = group_deletion_protection
        if group_type is not None:
            self._values["group_type"] = group_type
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
        if on_demand_base_capacity is not None:
            self._values["on_demand_base_capacity"] = on_demand_base_capacity
        if on_demand_percentage_above_base_capacity is not None:
            self._values["on_demand_percentage_above_base_capacity"] = on_demand_percentage_above_base_capacity
        if protected_instances is not None:
            self._values["protected_instances"] = protected_instances
        if removal_policys is not None:
            self._values["removal_policys"] = removal_policys
        if scaling_group_name is not None:
            self._values["scaling_group_name"] = scaling_group_name
        if scaling_policy is not None:
            self._values["scaling_policy"] = scaling_policy
        if spot_instance_pools is not None:
            self._values["spot_instance_pools"] = spot_instance_pools
        if spot_instance_remedy is not None:
            self._values["spot_instance_remedy"] = spot_instance_remedy
        if standby_instances is not None:
            self._values["standby_instances"] = standby_instances
        if tags is not None:
            self._values["tags"] = tags
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids

    @builtins.property
    def max_size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property maxSize: Maximum number of ECS instances in the scaling group.

        Value range: [0, 1000].
        '''
        result = self._values.get("max_size")
        assert result is not None, "Required property 'max_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def min_size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property minSize: Minimum number of ECS instances in the scaling group.

        Value range: [0, 1000].
        '''
        result = self._values.get("min_size")
        assert result is not None, "Required property 'min_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compensate_with_on_demand(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources.

        This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
        Default value: true.
        '''
        result = self._values.get("compensate_with_on_demand")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerGroupId: The ID of the elastic container instance.'''
        result = self._values.get("container_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceIds: ID list of an RDS instance.

        A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
        '''
        result = self._values.get("db_instance_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_cooldown(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.

        Value range: [0, 86400].
        The default value is 300s.
        '''
        result = self._values.get("default_cooldown")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desired_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desiredCapacity: The expected number of ECS instances in a scaling group.

        The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
        '''
        result = self._values.get("desired_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupDeletionProtection: Whether to enable deletion protection for scaling group.

        Default to False.
        '''
        result = self._values.get("group_deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupType: The type of instances that are managed by the scaling group.

        Valid values:
        ECS
        ECI
        Default value: ECS.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckType: The health check type.

        Allow values is "ECS" and "NONE", default to "ECS".
        '''
        result = self._values.get("health_check_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.'''
        result = self._values.get("launch_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property launchTemplateVersion: The version of the instance launch template.

        Valid values:
        A fixed template version numbe.
        Default: The default template version is always used.
        Latest: The latest template version is always used.
        '''
        result = self._values.get("launch_template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerIds: ID list of a Server Load Balancer instance.

        A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
        '''
        result = self._values.get("load_balancer_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_az_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiAzPolicy: ECS scaling strategy for multi availability zone.

        Allow value:

        1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
        2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
           Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
        '''
        result = self._values.get("multi_az_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_configurations(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]]:
        '''Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.'''
        result = self._values.get("notification_configurations")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]], result)

    @builtins.property
    def on_demand_base_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group.

        Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
        '''
        result = self._values.get("on_demand_base_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def on_demand_percentage_above_base_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group.

        This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
        '''
        result = self._values.get("on_demand_percentage_above_base_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protected_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protectedInstances: ECS instances of protected mode in the scaling group.'''
        result = self._values.get("protected_instances")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def removal_policys(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property removalPolicys: Policy for removing ECS instances from the scaling group.

        Optional values:
        OldestInstance: removes the first ECS instance attached to the scaling group.
        NewestInstance: removes the first ECS instance attached to the scaling group.
        OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
        Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
        '''
        result = self._values.get("removal_policys")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese).

        The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
        If this parameter is not specified, the default value is ScalingGroupId.
        '''
        result = self._values.get("scaling_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingPolicy: The reclaim mode of the scaling group.

        Valid values:
        recycle
        release
        ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
        '''
        result = self._values.get("scaling_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_instance_pools(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotInstancePools: The number of instance types that are available.

        The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
        '''
        result = self._values.get("spot_instance_pools")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_instance_remedy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotInstanceRemedy: Specifies whether to supplement preemptible instances.

        If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
        '''
        result = self._values.get("spot_instance_remedy")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_instances(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property standbyInstances: ECS instances of standby mode in the scaling group.'''
        result = self._values.get("standby_instances")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosScalingGroup.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosScalingGroup.TagsProperty]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId. The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC. The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority. When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.'''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScalingRule",
):
    '''A ROS resource type:  ``ALIYUN::ESS::ScalingRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScalingRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScalingRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28114355f5083d0439f61b045758db9345ad9c7c8c56da82f7d33b1cb5803910)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleAri: Unique identifier of a scaling rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleAri"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))


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
        "scale_in_evaluation_count": "scaleInEvaluationCount",
        "scale_out_evaluation_count": "scaleOutEvaluationCount",
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
        scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        adjustment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        adjustment_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_scale_in: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        estimated_instance_warmup: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        initial_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        metric_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_adjustment_magnitude: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_scaling_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_task_buffer_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_value_behavior: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predictive_value_buffer: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_in_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scale_out_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        step_adjustment: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingRule.StepAdjustmentProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        target_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScalingRule``.

        :param scaling_group_id: Property scalingGroupId: ID of the scaling group of a scaling rule.
        :param adjustment_type: Property adjustmentType: Adjustment mode of a scaling rule. Optional values: - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances. - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances. - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        :param adjustment_value: Property adjustmentValue: Adjusted value of a scaling rule. Value range: - QuantityChangeInCapacity: [-500, 500] - PercentChangeInCapacity: [-100, 10000] - TotalCapacity: [0, 1000]
        :param cooldown: Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
        :param disable_scale_in: Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules. Default value: false
        :param estimated_instance_warmup: Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor. Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group. Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        :param initial_max_size: Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior. Default value: the same as the value of MaxSize
        :param metric_name: Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. Valid values of a target tracking scaling rule: - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network - ClassicInternetTx: the average public network outbound traffic over the classic network - VpcInternetRx: the average public network inbound traffic over the VPC - VpcInternetTx: the average public network outbound traffic over the VPC - IntranetRx: the average internal network inbound traffic - IntranetTx: the average internal network outbound traffic Valid values of a predictive scaling rule: - CpuUtilization: the average CPU utilization - IntranetRx: the average internal network inbound traffic - IntranetTx: the average internal network outbound traffic
        :param min_adjustment_magnitude: Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        :param predictive_scaling_mode: Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values: - PredictAndScale: generates forecasts and creates forecast tasks. - PredictOnly: generates forecasts but does not create forecast tasks. Default value: PredictAndScale
        :param predictive_task_buffer_time: Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes. Default value: 0
        :param predictive_value_behavior: Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values: - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity. - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity. - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks. Default value: MaxOverridePredictiveValue
        :param predictive_value_buffer: Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100 Default value: 0
        :param scale_in_evaluation_count: Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule. Default value: 15.
        :param scale_out_evaluation_count: Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule. Default value: 3.
        :param scaling_rule_name: Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        :param scaling_rule_type: Property scalingRuleType: The type of the scaling rule. Valid values: - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue. - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue. - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values. - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group. If this parameter value is not specified, the default value is SimpleScalingRule.
        :param step_adjustment: Property stepAdjustment:.
        :param target_value: Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a303e009feea4147bbfda85fb8136affa7e8281bb9359bd8b6996aaf2647a1b)
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument adjustment_type", value=adjustment_type, expected_type=type_hints["adjustment_type"])
            check_type(argname="argument adjustment_value", value=adjustment_value, expected_type=type_hints["adjustment_value"])
            check_type(argname="argument cooldown", value=cooldown, expected_type=type_hints["cooldown"])
            check_type(argname="argument disable_scale_in", value=disable_scale_in, expected_type=type_hints["disable_scale_in"])
            check_type(argname="argument estimated_instance_warmup", value=estimated_instance_warmup, expected_type=type_hints["estimated_instance_warmup"])
            check_type(argname="argument initial_max_size", value=initial_max_size, expected_type=type_hints["initial_max_size"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument min_adjustment_magnitude", value=min_adjustment_magnitude, expected_type=type_hints["min_adjustment_magnitude"])
            check_type(argname="argument predictive_scaling_mode", value=predictive_scaling_mode, expected_type=type_hints["predictive_scaling_mode"])
            check_type(argname="argument predictive_task_buffer_time", value=predictive_task_buffer_time, expected_type=type_hints["predictive_task_buffer_time"])
            check_type(argname="argument predictive_value_behavior", value=predictive_value_behavior, expected_type=type_hints["predictive_value_behavior"])
            check_type(argname="argument predictive_value_buffer", value=predictive_value_buffer, expected_type=type_hints["predictive_value_buffer"])
            check_type(argname="argument scale_in_evaluation_count", value=scale_in_evaluation_count, expected_type=type_hints["scale_in_evaluation_count"])
            check_type(argname="argument scale_out_evaluation_count", value=scale_out_evaluation_count, expected_type=type_hints["scale_out_evaluation_count"])
            check_type(argname="argument scaling_rule_name", value=scaling_rule_name, expected_type=type_hints["scaling_rule_name"])
            check_type(argname="argument scaling_rule_type", value=scaling_rule_type, expected_type=type_hints["scaling_rule_type"])
            check_type(argname="argument step_adjustment", value=step_adjustment, expected_type=type_hints["step_adjustment"])
            check_type(argname="argument target_value", value=target_value, expected_type=type_hints["target_value"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if scale_in_evaluation_count is not None:
            self._values["scale_in_evaluation_count"] = scale_in_evaluation_count
        if scale_out_evaluation_count is not None:
            self._values["scale_out_evaluation_count"] = scale_out_evaluation_count
        if scaling_rule_name is not None:
            self._values["scaling_rule_name"] = scaling_rule_name
        if scaling_rule_type is not None:
            self._values["scaling_rule_type"] = scaling_rule_type
        if step_adjustment is not None:
            self._values["step_adjustment"] = step_adjustment
        if target_value is not None:
            self._values["target_value"] = target_value

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scalingGroupId: ID of the scaling group of a scaling rule.'''
        result = self._values.get("scaling_group_id")
        assert result is not None, "Required property 'scaling_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def adjustment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property adjustmentType: Adjustment mode of a scaling rule.

        Optional values:

        - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
        - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
        - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
        '''
        result = self._values.get("adjustment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def adjustment_value(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property adjustmentValue: Adjusted value of a scaling rule.

        Value range:

        - QuantityChangeInCapacity: [-500, 500]
        - PercentChangeInCapacity: [-100, 10000]
        - TotalCapacity: [0, 1000]
        '''
        result = self._values.get("adjustment_value")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cooldown(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cooldown: Cool-down time of a scaling rule.

        Value range: [0, 86,400], in seconds. The default value is empty.
        '''
        result = self._values.get("cooldown")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_scale_in(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disableScaleIn: Specifies whether to disable scale-in.

        This parameter is applicable only to target tracking scaling rules.
        Default value: false
        '''
        result = self._values.get("disable_scale_in")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def estimated_instance_warmup(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property estimatedInstanceWarmup: The warm-up period of the ECS instances.

        This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
        Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
        Valid values: 0 to 86400. Unit: seconds. Default value: 300.
        '''
        result = self._values.get("estimated_instance_warmup")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def initial_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.

        Default value: the same as the value of MaxSize
        '''
        result = self._values.get("initial_max_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property metricName: The predefined metric to monitor.

        This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
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
        '''
        result = self._values.get("metric_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_adjustment_magnitude(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule.

        This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
        '''
        result = self._values.get("min_adjustment_magnitude")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_scaling_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property predictiveScalingMode: The mode of the predictive scaling rule.

        Valid values:

        - PredictAndScale: generates forecasts and creates forecast tasks.
        - PredictOnly: generates forecasts but does not create forecast tasks.
          Default value: PredictAndScale
        '''
        result = self._values.get("predictive_scaling_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_task_buffer_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time.

        By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
        Default value: 0
        '''
        result = self._values.get("predictive_task_buffer_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_value_behavior(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property predictiveValueBehavior: The action taken on the predicted maximum value.

        Valid values:

        - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.

          - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
          - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
            Default value: MaxOverridePredictiveValue
        '''
        result = self._values.get("predictive_value_behavior")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predictive_value_buffer(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.

        When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
        Default value: 0
        '''
        result = self._values.get("predictive_value_buffer")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_in_evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered.

        After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        Default value: 15.
        '''
        result = self._values.get("scale_in_evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scale_out_evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered.

        After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
        Default value: 3.
        '''
        result = self._values.get("scale_out_evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters.

        It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
        '''
        result = self._values.get("scaling_rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleType: The type of the scaling rule.

        Valid values:

        - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
        - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
        - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
        - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
          If this parameter value is not specified, the default value is SimpleScalingRule.
        '''
        result = self._values.get("scaling_rule_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def step_adjustment(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingRule.StepAdjustmentProperty]]]]:
        '''Property stepAdjustment:.'''
        result = self._values.get("step_adjustment")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingRule.StepAdjustmentProperty]]]], result)

    @builtins.property
    def target_value(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetValue: The target value of a metric.

        This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
        '''
        result = self._values.get("target_value")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScheduledTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.ScheduledTask",
):
    '''A ROS resource type:  ``ALIYUN::ESS::ScheduledTask``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScheduledTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ESS::ScheduledTask``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__467b0ccce54c5e5c1a707486ece3255fafd9b19dcf2f7146927ec16858c4df14)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScheduledTaskId")
    def attr_scheduled_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduledTaskId"))


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
        launch_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scheduled_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_expiration_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recurrence_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recurrence_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recurrence_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduled_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ESS::ScheduledTask``.

        :param launch_time: Property launchTime: Time point at which the scheduled task is triggered. The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ. If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time. A time point 90 days after creation or modification cannot be entered.
        :param scheduled_action: Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
        :param description: Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
        :param launch_expiration_time: Property launchExpirationTime: Time period within which the failed scheduled task is retried. The default value is 600s. Value range: [0, 21600]
        :param recurrence_end_time: Property recurrenceEndTime: End time of the scheduled task to be repeated. The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ. A time point 90 days after creation or modification cannot be entered. RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        :param recurrence_type: Property recurrenceType: Type of the scheduled task to be repeated. Optional values: - Daily: Recurrence interval by day for a scheduled task. - Weekly: Recurrence interval by week for a scheduled task. - Monthly: Recurrence interval by month for a scheduled task. RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        :param recurrence_value: Property recurrenceValue: Value of the scheduled task to be repeated. - Daily: Only one value in the range [1,31] can be filled. - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",". - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value. RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        :param scheduled_task_name: Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region. If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        :param task_enabled: Property taskEnabled: Whether to enable the scheduled task. - When the parameter is set to true, the task is enabled. - When the parameter is set to false, the task is disabled. The default value is true.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7004c843a4bba26c274ecbc7e81a969c44737fec24320bbb2366215d1aaa92f9)
            check_type(argname="argument launch_time", value=launch_time, expected_type=type_hints["launch_time"])
            check_type(argname="argument scheduled_action", value=scheduled_action, expected_type=type_hints["scheduled_action"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument launch_expiration_time", value=launch_expiration_time, expected_type=type_hints["launch_expiration_time"])
            check_type(argname="argument recurrence_end_time", value=recurrence_end_time, expected_type=type_hints["recurrence_end_time"])
            check_type(argname="argument recurrence_type", value=recurrence_type, expected_type=type_hints["recurrence_type"])
            check_type(argname="argument recurrence_value", value=recurrence_value, expected_type=type_hints["recurrence_value"])
            check_type(argname="argument scheduled_task_name", value=scheduled_task_name, expected_type=type_hints["scheduled_task_name"])
            check_type(argname="argument task_enabled", value=task_enabled, expected_type=type_hints["task_enabled"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def launch_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property launchTime: Time point at which the scheduled task is triggered.

        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
        A time point 90 days after creation or modification cannot be entered.
        '''
        result = self._values.get("launch_time")
        assert result is not None, "Required property 'launch_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scheduled_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scheduledAction: Operations performed when the scheduled task is triggered.

        Fill in the unique identifier of the scaling rule.
        '''
        result = self._values.get("scheduled_action")
        assert result is not None, "Required property 'scheduled_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_expiration_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property launchExpirationTime: Time period within which the failed scheduled task is retried.

        The default value is 600s.
        Value range: [0, 21600]
        '''
        result = self._values.get("launch_expiration_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recurrence_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property recurrenceEndTime: End time of the scheduled task to be repeated.

        The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
        A time point 90 days after creation or modification cannot be entered.
        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        result = self._values.get("recurrence_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recurrence_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property recurrenceType: Type of the scheduled task to be repeated.

        Optional values:

        - Daily: Recurrence interval by day for a scheduled task.
        - Weekly: Recurrence interval by week for a scheduled task.
        - Monthly: Recurrence interval by month for a scheduled task.
          RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        result = self._values.get("recurrence_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recurrence_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property recurrenceValue: Value of the scheduled task to be repeated.

        - Daily: Only one value in the range [1,31] can be filled.
        - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
        - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
          RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
        '''
        result = self._values.get("recurrence_value")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduled_task_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.

        It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
        The account name is unique in the same region.
        If this parameter is not specified, the default value ScheduledScalingTaskId is used.
        '''
        result = self._values.get("scheduled_task_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property taskEnabled: Whether to enable the scheduled task.

        - When the parameter is set to true, the task is enabled.
        - When the parameter is set to false, the task is disabled.
          The default value is true.
        '''
        result = self._values.get("task_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__764fd1e9940f9a4c2bd11667c7fcd7ef227eff77dfff31f08b24eeba648816c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AlarmTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77a2d7f90f91a5d104a5e4d7bfb6465099d560e28e764973f09d0ece596d4cb8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AlarmTaskEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75a8133c27a4af819b5d126cd149ee508c1190e31b974a1e5fc006293bc5a9dd(
    *,
    alarm_task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe1bbef50f679260f65ae6805fe47532b6529a1892faf30864bd62d2686929dc(
    *,
    alarm_action: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    comparison_operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dimensions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlarmTask.DimensionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    metric_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    statistics: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a46acbc5eea4a5d296bd421987f038384ed987aab61df47d148ad1b4a2652d98(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LifecycleHookProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39288e4e5a908e6823a89dff616afc7789d49b00d3caa357804e5bc122c3e567(
    *,
    lifecycle_transition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_result: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    heartbeat_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_hook_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_metadata: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3eb80b3c31c2b41e5d5e8306df2ab31c4ff39f81b50fe27869f0670ea1bfb40a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAlarmTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6796c5bba06fb562ed8b27c1c6fc84b2909c57695b8e15e7830e8839fb9387fb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d13091f926f7657bec2ab7c0cd1af9a4512f4bc5ffa61c0cd120418385223df8(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5be23e1c30e0fbae43c2696d9b53c74a9a5e2b247c81f3466d5a127a799d60f0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f9dfdbb38418540a3d26cd424eeb263ef91660ec877023f7c95d7c0e12fd5a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8136464bf45f1d4649f7aa3ce5212fb707030b8defb693fadf82de892c2a11c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e63f19e679a5784a82c81a2b5b95a27fdff751e74206b3b98c7b1ae69249c615(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f04064a2f89e1ac709550173c46556bc9ae4907a64088c2ba0ec7ad51e7563e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d678fc56c0f275e2b7d239bb27d284ca197989f69738f6d40b4f02d2f721aeeb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bf48aa27bda8ead168e18ce80b7e0a45dc2cfcc6ebd5e3edc02bc3d44bc578d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAlarmTask.DimensionsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ab01163c87782e041f2f0bfbf071af73581984504f002b705c2722f362b25ab(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17931261e9b56f5f58c5171c0f60301ccb8a2bcefb7a3b3eb833044ed170ac59(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccc57156b5d9f1d2228b9ac46f7627fecfeea0acec4ace57edb6317bc70badc0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a013839a3b7b21230a3f8e9e7325093061786b809abb176f5dda53d02e2a5405(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cdfaba7837beb53a11dbaf264a0b400a5c20ef658526e476b8a8282fa48cbea(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c54d43d13fd887073f924482638470f8912d843b7ed472754f29ec8d2a24da77(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__927873148fe5fdcb8f53aef85bccbbe2b446c081291af2be6a7f5f9232e9895a(
    *,
    dimension_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dimension_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86714b938065c8c7d6551a5b836f5b46d7cf74e5faccc01f30939895d0504650(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAlarmTaskEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1970446a951382325d8bec921e95b93e0485e8f35b67350dc17f65380c338d2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34b3fadf57d5228431617808f59a3be4380027130b828d42a521dfb6de499dc5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d619ff674ae5d503a6a7fa65e2e003480eaedefc0f4a732de13c065df2eaa5(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e31943b5be512c8bde7ae0e7022c0afe238ce1916157a33ea595a13e8c320b3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2de0f32081aceab0bd1817d06a630419b7a6bbb55ef1059547c5a925dd800847(
    *,
    alarm_task_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0c045eb527f889a67d502b0666891d9bb0b606496d0933a7ee0844124901b24(
    *,
    alarm_action: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    comparison_operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dimensions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlarmTask.DimensionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    metric_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    statistics: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57fc91d59300f2336a829dda4336fca4ac11f861ae726b5665cbaf2ac7896d7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLifecycleHookProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__563fbf537f7f2273e12479327c31d8505c72a5d4c26cb8d51e655fac84f91f1b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95d065d4f23e8eef8aa5fd7edd92721e2245694e4654f50a736876a5ef7b7643(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c13363b80b50095519ed91f638b1d9eb01b904905e81366d97081b667916733(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37fe5fbf2a782dff958f12ba54369b88a85baede98b47d7330f8902aa0415cb8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6745b82ad4e1c00bf9b973d8ef3581f023e2e79433be4bfe28e56fe4f1a721b7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5bb60926d7f23fa1e74fcd7976e770f42260bab55175f08aaa3e908ed90dae8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95d2e9b29a1a604979ea9d8aaf662758fedb0b9572bccd910da9291841aebb16(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29048251e06c6a5e43b470a7f61fd643c99d57c1c9a954b45604da8537bd9541(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7adee079de4117785e3460431cc7da7925ecc448c7685c32e09f6c7583383077(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__345795d75b456d230f585dd18d3f509731a817828c61adb2a97fcb035a1b6979(
    *,
    lifecycle_transition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_result: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    heartbeat_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_hook_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_metadata: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc3736789ace51b21bdd3a49d37f206468c342c52ac58836d144f0ad0bf4c0b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce5fc6b0b04b705dcb94889a9b28263700dd07e064088a31128d0dcca0bfd6ff(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__677601f93c951dbba697f77d3d43fbc56744a2ebf62b9311403cd99503cfae57(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef08af6738238cf4e4c1164bfcb6d0ba5a2090cc7daad9c422f998fc46bf2976(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59cad1eda38f8b1f3a519eda8eec57034069181365df94b7181c64191b3904ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bccf97da4f501af5332dd1a446d88c6df992a21ff423811246dd338878510db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__606c2339da212d24c73c450529b9fe22b8f0e42dc81d501c22c35e1e70974bee(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.DiskMappingsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7454d0761f0ff372c417eb10319e916f7a9bd9096020f78f95808ac1ed433324(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc8259f421174d1c0e8469b66ff1ca8ba738dfb74325daa2013c4019dba223ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e7f892fd57c1468945a1e8d0aef617f820f835724ea5e103df5281cc8cf2a2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73ce4f619c8e8d29bee52fbba82dca5a791764d5e3b6f947c6c57e1b9408b868(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa70661252f24661fcab63e263e524859463b15f7ad7030f6a0827c66d9e6c8a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90a7b777c5e3e9c274f9abefe866f66d0374573092a3c712d2c2c8d7e9583085(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__499b99e8e9caf3e37220501480d14ffcdd37f171bc281b947c91b11e27ad984f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c40e0ecaf94abb2433f8ee24dd27aef0953fb451acf9a7ff5bb95b818102ad0(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62bce03693933e15732b4dce2e438265e6eb8b152b7da5d639f8d5df2e327ac9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afe3eb121d779ad7a4f2b1a000e290a01dfc6ac1112763362511f54abf004459(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ebca14c40b2e5f8dafd24f736f6e7cddb5ac1fcda6f79ec0dd5a00bcf59c0fe(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d9337c47a3c04319e70c6e3e08aff2b439ca37f711547a69e148cbca33a9e89(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4e77bb5a6076dc184e17fe78d20d63bd473daecddd345ff77afc7ef0be861f0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf8507da5e2684304087d5457b6af939b823a7f1b8eaa4352218db6ba016c2bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0e1476480a95d457d5860b75481675cb823c4c68737693da803b912f4a883c9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f97d659ac8c2000d609920da7ec42611e7e47fdf53b6a542ff353da520d0b097(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e11312a10a96ffda3ba1a28a4a45086695bc163669c649cf51f575038a97cf2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6957f0fbf659bbfddecc46e4b1bd454b6e6f6a101dc7a56bd2054ad870b4bae4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__285e84e0da51e82ee3070d78b5a37cfb677b64889900647873c13b34c4265bae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f326fb86f2d25015d3e15b87ed4b673bb36d3f822c8382804bfbf236bdd73031(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0a9c4e8fd23c88aee36c37063331c06480078aa58234cb0bd0de61d40b1bf28(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5923896a7836c06a59c03cf6dfae4661aee5e0262516a32d908422e5303f95e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84df159d08dbf2b916e17aecb46858724488564bd2c2bbcd74f879ff441f4994(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82183a4e74d7c5bf1696a2dacad67d9a6b499c7b9586f0895533b69a7b1bd447(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__005e62578e59057a9e0c73dd92bea6e8961433c82cab3490c637ce3357dd83d3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53c95809a2d2aa1a7a5db90b65f1f5ddb03fa7dd67386f85ee7bb31324c7f5c7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20ef09969b6c99e34652e5b2667ded51363e7a7c313f96f346c2d497d8cc3d5e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67afe00d58cf231eb7ac3fb6d20a5d57f5a5d97715838efea03719bb35274d87(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4d794f90bc9a0d9a63fac47f839b7179ea525633a90bbfb1e5e25df0f1479fb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingConfiguration.TagListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a35c288ff84684af77eecedbac0b5b5e3e217408c1bc24487558436ace951c36(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b66734dff1e85145b6907c20fedb10194946ad52ef783e3df39fede6235aab5(
    *,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    device: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    size: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fc9909d468266827c82c3c6fd1c807046dd022f01a8aca3c828f004e50bae89(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__905bee6bae5d29de4a63d35773e0cffe2dc5253364ba66148204dae2c1fce9fb(
    *,
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    credit_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.DiskMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_types: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_in: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_configuration_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit_for_instance_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfa8b82548057b4e9d5f9c6bd95ae16437c0db8d85167b967047184a24f0a34b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7398d701f1411574f7cd0f34f85c5290dd37a39695ad3d0ea3df46c073c00358(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae7fa6593d4f0ea468c6cc425c55de188d9e0de2cd943d4dc09b0bb61700d2fe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__259d3ba494d0f568e0bece082a54d68311b0fe3761742166fd72c7a0cbc8c618(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a856925e6a009a3cc49de033c3276063254e99fdc4199f22d9b0d27a2fb739e5(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__622e769201dfa85f491249382aa53de1745e68a31d350f7c47449add7de8d6aa(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba6e0b53d0a7502850e4c9644d38a94b48668220098ada358e96431b9276ed1d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a30f6746f533d8bfd535369285272c733415eb661498aab045acd6bfe09822b7(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f937972608ea2d4024eeed7b11364fec06288f2c7fdf5b2309c67078fe1c51(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4d5eb01602656e907db7fa24e08bbef91d742852c9a2e7fbf3b985b5b6a5721(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2400a8e87ed65ba3de3bf8c4a801684544c22766a78437b98ac93a630feb9eea(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20e1ecf3ca71846d8209c14231525cd5c8634b6c8a11e18fcb393324775400a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39253d0e28ca008795d0e03f22a05e9eb793a226848740b2c8c93a87f40b002f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abd6d54f88a291134c2ab9e40c41139ef3fe50d4c4a0725117908c4194e784d7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39df13437fa9d0f777138c254bbfdf5e177b9c7567289c0238c53d80f3baf93d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a7c9656e1d9d041f0b9dccaa5f9c4490acce3611b5eb453537598aac85b0046(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54a6b0c08e5cbb1033dd2411ccb79487a9b3b0454c38a47d1dbc63776b46187a(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aeb879a5358ae247001507514d85e74668f2fbf068b939a223caf731f19d8fd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a780f6d8e00e2de9fe9587c2335da4daed205a167b2778888fc9cba167ef7af(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroup.NotificationConfigurationsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__677d6daacd8b880640a37b24380ed5f265f12a7686e4031c18876a953b4c5fdc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a47bff9878f440174c1d06ffe17ef4e291f072f8691c8f1745288f50fd2a7d3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ba23d4f1b1b13986485448c4865c1d362996e81ee96cc8d218fb89f43a55a96(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb1ae7bf69ce03ecdbf38049030bd93a03fe9edd6fe96d4bfce1e2e93b9f7437(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bea7851a0061153bcc143cb3c742b3a13f0f5cd4b7f09d3a120a41418304e4bf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ce2499e40584a3bd5f1841bc51e26bd5230900b632f0c7e37fc76821057c12f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__250942cb908afa21269feab72a08272451f38f9a2fbaba3c788d007ce3041810(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6b4928d284d8a5350acf8f00970f9e38a3a4b404badfddf4cfe55229a465980(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d9134ca622ee4a84454600eca80eaf573db508d200fa87f96aafe5ad5aaf74a(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f2e42911155afe3a66f087f36a15fb0a83ceebffcac36295bf25ce501cc4767(
    value: typing.Optional[typing.List[RosScalingGroup.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3daa4ce0b286e8173a9e1a47cf7593525e2cc43d1c96a8b2cac05773dbee6d33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36d11bd02cd8c7ad32271c095146f7debd4bdef9d154248513dc830616b9f1ee(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa7fa1fd449930accb4c85d6202b4d7d427d20d67d67beb5ddbf1bc67b59f0d6(
    *,
    notification_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    notification_types: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc33954b83be2fe3bd435e61f80f69cdb44ec4d010264a424306a240cb55df80(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__347186367dab8c2838a3b5398a7d156c3f4e5025a4de886e82129dd1ba41c169(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingGroupEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8e7288c2591fe281bba6364a65ffa61dc280dcdbae28c8923890b3cd370a946(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c384b1680b0320bbf43dc5611d960429649b8095fd63f17cfbd384caac52d9e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea368f54cc5fdae60852e1324fa97da9bbd07cc977bd449949ec35d3b8090e1b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73b2950b30fc844ecd2d8aac5fcf64d2bac8a36488f62c720a2a3b8e5a2d571b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.AttachOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc2f9caf6b3eba7590f2192165362232567fa88bc3783179a48375c069c02fbf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingGroupEnable.DetachOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3833515c0b41629f2fda361d9ef5538668c22cb3d8232b522468d281e5e0698(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9ef031b2973f79001952ee47d835cc810d376904191390090b0818757a45e29(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__300913eaef0df2391f749e278ca8589356ebfecf16fcb552d8c98a8f3b02b91c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c3c18288a0119ab7701236090591d4f28465a4a8656526525be25140d7444e5(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc33c8b007ec3836c344a45b6e7f6616f99acfbbdfd9d4cbf5d4d872106c19c3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae68c32181514bf62b7a3ce7d5d23e3c8c9df1a43ad7ab86bc8c64e6ffcbbdfc(
    *,
    entrusted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_hook: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c471aa1063b0248a3e90b088766fe7831bb33481b0b57231d71984ed6b171e1(
    *,
    decrease_desired_capacity: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detach_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_hook: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b65de3797a1bd96a4bdbb7a3cb2c3fb6fbbb3222213d00245060648693f3001b(
    *,
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    attach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.AttachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    detach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.DetachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remove_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_configuration_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_aris_execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e755f6c8f9fe533d501c4e7f9273d2f128084280f4bc51b10d896f0712e52d9(
    *,
    max_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    min_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desired_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroup.NotificationConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protected_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    removal_policys: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_instance_pools: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosScalingGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__129b235f4eebc982530995cc5c759cbfddbf9d61bdc476c26f55e55462c0a47c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8f5df0f2651efca94af2ad637c4d076fee945e41d4b9c13f77e7ba12c76aab5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57c0a09d4b44ab20f853c445d3fd3cc56234dadce859970e1a0a0f8419f2d531(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c786db50f0a0f208c14558dcff68da6ff01f36305987e4643999f0d33b726238(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0d08278a5941d5fc64f3cda4e1f20843b36184fdd09b8083d6df2b650413803(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3087f00334aaf4ee344fd254d89a2c4643e8236560017433383aafadae3bd15a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83751912a78083bfe569a097fbedc39acb72ea9202ae8ddd81b5e9c493e65304(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37102122d52769f82116ce2761888967a01f71d319ac85fb878664a7a488d3bd(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b33d48f90948bb29e1ead1998a5cfb53d5da5b6baf4bb800ebf47e3dc6cd4a4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5cd06447e1435c72ef1948e66e5738a1e71d1b925533926d2824bede3f7ab48(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__765812aec3b0ba0dfcbc69e1347f72c82021308c7efd977d51c04cef169b9c04(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b38a038b71ef903e183940ec184860def6fed0982ffedd1c4b5fbb1c17ad765(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9732fed780bba511e36c946c860307ba4e43f521887ed5969bd24f51cd89fdf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ecadcf7d9ae6085d18fb768f68f2c5f193ba68ff8e80f320521be434333dc29(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2e8f2b798bb2ffe28dae2451cbd9d2e91a9b506b087cf06a14a56fcab5750fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60b00be9933eaaaa3ca12b96b1ce5a9298888ab2b96d413f7c024d4f695b6182(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e944483e08ddeb0e7c19cb4f0e53cb0fabf2388aba72b723de37dff4d3286b6c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6071067a4d7e8288aee6f29d57af947d67dd9af024ecd42fbe8156336fa50f1f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b02c61d6b611e4a6b430a7bb7315cf8502d84d38d25450bdfa0e4c51ea58686d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99914e36616f4c5c8ad3cbd2f4cc409802dbc438af82e13fe264c20e4a0e5c7f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a4ba87bab268177a60fd866c0368f70f81f77db523524df16c020287892a9ce(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosScalingRule.StepAdjustmentProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8558041a7aa6a89b3a438f65522624bad1cb351b19ee16e2aa031baa036ba992(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__821668dd812ead5b65c516c242d21b27465f7caae0485b61275e9c845cea774b(
    *,
    metric_interval_lower_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    metric_interval_upper_bound: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_adjustment: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbe292b0457dab715dd98b25a68cdefe5eca34a305fe53a40b812a933ae11822(
    *,
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    adjustment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    adjustment_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_scale_in: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    estimated_instance_warmup: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    metric_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_adjustment_magnitude: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_scaling_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_task_buffer_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_value_behavior: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_value_buffer: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_in_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_out_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    step_adjustment: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingRule.StepAdjustmentProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    target_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e70bc04b53edd53f3bce0d503df1523fd03bd0bb516a961c08ff699dce3b0d94(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScheduledTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fd96b316a1db63f4c53ecbf41f6c0e15447938bc46d7e6dd994c797869bc0d7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d682d90f2764c362b0de59bffcb4db1466d1c383f844873148e15df9d978b2a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb31aa7f563691cd64cc155834eac90ec976155d775b5c706c8d6fb0b4f9bb68(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe8c4ff427551c663031027c2073507221d497209aa1910de654a5ac9a9ab9b1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eaa8eddc926f15444baa0faaddf87b3525da669452adebcf9549227412b6ac2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e700a30e7f61f86e59e301f681b402ab4341088b6d35971b4e9b05f6d5f5867(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bb418b7d86edd47711bdab2f47a953a6b008bae794e5aeb7546a62f48263115(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6285fe5c3af7751d4321494438fe4d1639cb594587bd7e2d2c6678abb74f87fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1879f07c89ce8b289202d204538baf837ed6631d533a729a3b67443b096e479(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0c23ca1c33c432e39e4e13c90c13d50e98cac54b7e6ba7060b2161752e983d7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3033cc4ab6eb4a69c3792d5564a9c17dfd649986fea21f84f7eedf279ee4fe2a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7edbad4a9e9b4186746734093edc2a4cde597d704007910bdb61acd82821ecbd(
    *,
    launch_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scheduled_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_expiration_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recurrence_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recurrence_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recurrence_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduled_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a01e47ae6081577d2e6bcdab5668699ae058a3f0638a8fa9db1cdf5079c0c36(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScalingConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be85fb0fd4f1e809db57a66f784b75c19396cdd108753cbbde82e04a20a72d09(
    *,
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    credit_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_mappings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.DiskMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_types: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_in: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_configuration_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit_for_instance_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingConfiguration.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68b84de07d5e2051623b6d18059552a6bcb0125c57e505bde03ea2c19f8aec8d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScalingGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d396c56ec076a081bf3195c789f7b407df745b52da435f8622a04bc50a684ec9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScalingGroupEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27aa303aa686a6ae2cb5d268aa52c8632e0533ee95ea0d8c480839bc60d34365(
    *,
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    attach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.AttachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    detach_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroupEnable.DetachOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remove_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_configuration_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_aris_execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6837af1a639272cbc496040a393943d064eb5b0b946dc9e706e4ca881d10b4ba(
    *,
    max_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    min_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desired_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingGroup.NotificationConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protected_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    removal_policys: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_instance_pools: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_instances: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosScalingGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28114355f5083d0439f61b045758db9345ad9c7c8c56da82f7d33b1cb5803910(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScalingRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a303e009feea4147bbfda85fb8136affa7e8281bb9359bd8b6996aaf2647a1b(
    *,
    scaling_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    adjustment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    adjustment_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cooldown: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_scale_in: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    estimated_instance_warmup: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    metric_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_adjustment_magnitude: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_scaling_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_task_buffer_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_value_behavior: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predictive_value_buffer: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_in_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scale_out_evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    step_adjustment: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosScalingRule.StepAdjustmentProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    target_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__467b0ccce54c5e5c1a707486ece3255fafd9b19dcf2f7146927ec16858c4df14(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScheduledTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7004c843a4bba26c274ecbc7e81a969c44737fec24320bbb2366215d1aaa92f9(
    *,
    launch_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scheduled_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_expiration_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recurrence_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recurrence_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recurrence_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduled_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
