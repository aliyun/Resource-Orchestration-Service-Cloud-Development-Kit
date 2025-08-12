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


@jsii.interface(jsii_type="@alicloud/ros-cdk-ess.datasource.IScalingConfigurations")
class IScalingConfigurations(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ScalingConfigurations``.'''

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationIds")
    def attr_scaling_configuration_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurationIds: The list of scaling configuration IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurations")
    def attr_scaling_configurations(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurations: The list of scaling configurations.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingConfigurationsProps":
        ...


class _IScalingConfigurationsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ScalingConfigurations``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ess.datasource.IScalingConfigurations"

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationIds")
    def attr_scaling_configuration_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurationIds: The list of scaling configuration IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingConfigurationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurations")
    def attr_scaling_configurations(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurations: The list of scaling configurations.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingConfigurations"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingConfigurationsProps":
        return typing.cast("ScalingConfigurationsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IScalingConfigurations).__jsii_proxy_class__ = lambda : _IScalingConfigurationsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ess.datasource.IScalingGroups")
class IScalingGroups(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ScalingGroups``.'''

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupIds")
    def attr_scaling_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupIds: The list of scaling group IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroups")
    def attr_scaling_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroups: The list of scaling groups.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingGroupsProps":
        ...


class _IScalingGroupsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ScalingGroups``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ess.datasource.IScalingGroups"

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupIds")
    def attr_scaling_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupIds: The list of scaling group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroups")
    def attr_scaling_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroups: The list of scaling groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingGroupsProps":
        return typing.cast("ScalingGroupsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IScalingGroups).__jsii_proxy_class__ = lambda : _IScalingGroupsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ess.datasource.IScalingRule")
class IScalingRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ScalingRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentType")
    def attr_adjustment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdjustmentType: The adjustment method of the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentValue")
    def attr_adjustment_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAlarms")
    def attr_alarms(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.

        The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCooldown")
    def attr_cooldown(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cooldown: The cooldown period of the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisableScaleIn")
    def attr_disable_scale_in(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisableScaleIn: Indicates whether scale-in is disabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEstimatedInstanceWarmup")
    def attr_estimated_instance_warmup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EstimatedInstanceWarmup: The warm-up period of instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInitialMaxSize")
    def attr_initial_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaxSize")
    def attr_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMetricName")
    def attr_metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMinAdjustmentMagnitude")
    def attr_min_adjustment_magnitude(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMinSize")
    def attr_min_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveScalingMode")
    def attr_predictive_scaling_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveScalingMode: The mode of the predictive scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveTaskBufferTime")
    def attr_predictive_task_buffer_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBehavior")
    def attr_predictive_value_behavior(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveValueBehavior: The action on the predicted maximum value.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBuffer")
    def attr_predictive_value_buffer(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScaleInEvaluationCount")
    def attr_scale_in_evaluation_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutEvaluationCount")
    def attr_scale_out_evaluation_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupId: The ID of the scaling group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleAri: The unique identifier of the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleId: The ID of the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleName")
    def attr_scaling_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleName: The name of the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleType")
    def attr_scaling_rule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleType: The type of the scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStepAdjustments")
    def attr_step_adjustments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StepAdjustments: The step adjustments of the step scaling rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetValue")
    def attr_target_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetValue: The target value of the metric.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingRuleProps":
        ...


class _IScalingRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ScalingRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ess.datasource.IScalingRule"

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentType")
    def attr_adjustment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdjustmentType: The adjustment method of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAdjustmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentValue")
    def attr_adjustment_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAdjustmentValue"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarms")
    def attr_alarms(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.

        The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlarms"))

    @builtins.property
    @jsii.member(jsii_name="attrCooldown")
    def attr_cooldown(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cooldown: The cooldown period of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCooldown"))

    @builtins.property
    @jsii.member(jsii_name="attrDisableScaleIn")
    def attr_disable_scale_in(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisableScaleIn: Indicates whether scale-in is disabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisableScaleIn"))

    @builtins.property
    @jsii.member(jsii_name="attrEstimatedInstanceWarmup")
    def attr_estimated_instance_warmup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EstimatedInstanceWarmup: The warm-up period of instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEstimatedInstanceWarmup"))

    @builtins.property
    @jsii.member(jsii_name="attrInitialMaxSize")
    def attr_initial_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInitialMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxSize")
    def attr_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrMetricName")
    def attr_metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetricName"))

    @builtins.property
    @jsii.member(jsii_name="attrMinAdjustmentMagnitude")
    def attr_min_adjustment_magnitude(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMinAdjustmentMagnitude"))

    @builtins.property
    @jsii.member(jsii_name="attrMinSize")
    def attr_min_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMinSize"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveScalingMode")
    def attr_predictive_scaling_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveScalingMode: The mode of the predictive scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveScalingMode"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveTaskBufferTime")
    def attr_predictive_task_buffer_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveTaskBufferTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBehavior")
    def attr_predictive_value_behavior(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveValueBehavior: The action on the predicted maximum value.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveValueBehavior"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBuffer")
    def attr_predictive_value_buffer(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveValueBuffer"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleInEvaluationCount")
    def attr_scale_in_evaluation_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleInEvaluationCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutEvaluationCount")
    def attr_scale_out_evaluation_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleOutEvaluationCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupId: The ID of the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleAri: The unique identifier of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleAri"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleId: The ID of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleName")
    def attr_scaling_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleName: The name of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleType")
    def attr_scaling_rule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleType: The type of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleType"))

    @builtins.property
    @jsii.member(jsii_name="attrStepAdjustments")
    def attr_step_adjustments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StepAdjustments: The step adjustments of the step scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStepAdjustments"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetValue")
    def attr_target_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetValue: The target value of the metric.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetValue"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingRuleProps":
        return typing.cast("ScalingRuleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IScalingRule).__jsii_proxy_class__ = lambda : _IScalingRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ess.datasource.IScalingRules")
class IScalingRules(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ScalingRules``.'''

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleIds")
    def attr_scaling_rule_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleIds: The list of scaling rule IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingRules")
    def attr_scaling_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRules: The list of scaling rules.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingRulesProps":
        ...


class _IScalingRulesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ScalingRules``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ess.datasource.IScalingRules"

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleIds")
    def attr_scaling_rule_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleIds: The list of scaling rule IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRules")
    def attr_scaling_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRules: The list of scaling rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRules"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingRulesProps":
        return typing.cast("ScalingRulesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IScalingRules).__jsii_proxy_class__ = lambda : _IScalingRulesProxy


class RosScalingConfigurations(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingConfigurations",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ESS::ScalingConfigurations``, which is used to query the information about scaling configurations.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScalingConfigurations`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingConfigurationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30442118c43da20c8f60be524e8c6d012cf474cd16d80089d2e13d265197ff16)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3e304cad4b4abd21f5abebd163ea97d4e8f98ec65a7c047812c2db4818ce5dae)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationIds")
    def attr_scaling_configuration_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationIds: The list of scaling configuration IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurations")
    def attr_scaling_configurations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurations: The list of scaling configurations.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurations"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0a7df10b084e9f06fbfe39a0f253661b8ca7788cceab89f9228c5ca87cd94fbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ca2e7451b34a4e735a7e26aa0fe971faca6689e02b63829605d1552fb093f3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="scalingConfigurationIds")
    def scaling_configuration_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingConfigurationIds"))

    @scaling_configuration_ids.setter
    def scaling_configuration_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5a3bca47e68f75c02704a552e936004be213ed7b9c9bb57c66cbb5f34bfbf65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingConfigurationIds", value)

    @builtins.property
    @jsii.member(jsii_name="scalingConfigurationNames")
    def scaling_configuration_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingConfigurationNames"))

    @scaling_configuration_names.setter
    def scaling_configuration_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0ebdc6209cb2175634d3053fcd3ccf149c141d1b6ebc056c6556cbcd08c1461)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingConfigurationNames", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ddb8c2c880b0195b06c6cbfda754a713ea6f61a4556be05cb0dd39b82e87d75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingConfigurationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "scaling_configuration_ids": "scalingConfigurationIds",
        "scaling_configuration_names": "scalingConfigurationNames",
        "scaling_group_id": "scalingGroupId",
    },
)
class RosScalingConfigurationsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosScalingConfigurations``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations

        :param refresh_options: 
        :param scaling_configuration_ids: 
        :param scaling_configuration_names: 
        :param scaling_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a097b23d93fbfee9b34991a7b50886cc3335ad5d96370486950d45e61294c06)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument scaling_configuration_ids", value=scaling_configuration_ids, expected_type=type_hints["scaling_configuration_ids"])
            check_type(argname="argument scaling_configuration_names", value=scaling_configuration_names, expected_type=type_hints["scaling_configuration_names"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if scaling_configuration_ids is not None:
            self._values["scaling_configuration_ids"] = scaling_configuration_ids
        if scaling_configuration_names is not None:
            self._values["scaling_configuration_names"] = scaling_configuration_names
        if scaling_group_id is not None:
            self._values["scaling_group_id"] = scaling_group_id

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_configuration_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        '''
        result = self._values.get("scaling_configuration_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_configuration_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_configuration_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingConfigurationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ESS::ScalingGroups``, which is used to query scaling groups.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScalingGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eb0a2d8c9f304d6bb27ddaffd3cf94a1e0ad5166edd44c4ceb90ff7f9914c02)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b75ea6c902c777ed58ef11908c9f86fc94132f50a42412085f0a0910b0c34e79)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupIds")
    def attr_scaling_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupIds: The list of scaling group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroups")
    def attr_scaling_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroups: The list of scaling groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fc8293008c3bd0fb46b4528e574736dff8e1b16b10ac39fb790545ab60d69c75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: The type of instances that are managed by the scaling group. Valid values:
        ECS: the Elastic Compute Service (ECS) instances
        ECI: the elastic container instances
        Default value: ECS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81965a2ce1ab806d915647865fa6a7e0090e34b0fa5d8624034a36201c13d2af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f41b1f8f1640b52f90240132b80b5b3a4746379a2fa3a4b9f377e9723437c4e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupIds")
    def scaling_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingGroupIds"))

    @scaling_group_ids.setter
    def scaling_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__696ad33dca0ca20cbbe7c4584de0b3fd2ee991de7212875d76740d370957a484)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupNames")
    def scaling_group_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingGroupNames"))

    @scaling_group_names.setter
    def scaling_group_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b784c506dc1d3935578dcdd30cb88fa8839e6366fc76d1b630a2826411aacea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupNames", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_type": "groupType",
        "refresh_options": "refreshOptions",
        "scaling_group_ids": "scalingGroupIds",
        "scaling_group_names": "scalingGroupNames",
    },
)
class RosScalingGroupsProps:
    def __init__(
        self,
        *,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosScalingGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups

        :param group_type: 
        :param refresh_options: 
        :param scaling_group_ids: 
        :param scaling_group_names: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6304951bcd440b722b1b51ce1d39e0132ffcafd3d42be70c65d3ac830e49958)
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument scaling_group_ids", value=scaling_group_ids, expected_type=type_hints["scaling_group_ids"])
            check_type(argname="argument scaling_group_names", value=scaling_group_names, expected_type=type_hints["scaling_group_names"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_type is not None:
            self._values["group_type"] = group_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if scaling_group_ids is not None:
            self._values["scaling_group_ids"] = scaling_group_ids
        if scaling_group_names is not None:
            self._values["scaling_group_names"] = scaling_group_names

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: The type of instances that are managed by the scaling group. Valid values:
        ECS: the Elastic Compute Service (ECS) instances
        ECI: the elastic container instances
        Default value: ECS.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_group_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingRule",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ESS::ScalingRule``, which is used to query the information about a scaling rule.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScalingRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b13942e17359a807ecc5cbb7cd99728773c7fd26d4d5d942a8a2a94f729d21e5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__45a750ac0db2ef69e17f06a9af4f8cbe5b6adb0cab415559c975e240f4daf32b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentType")
    def attr_adjustment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AdjustmentType: The adjustment method of the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAdjustmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentValue")
    def attr_adjustment_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAdjustmentValue"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarms")
    def attr_alarms(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Alarms: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarms"))

    @builtins.property
    @jsii.member(jsii_name="attrCooldown")
    def attr_cooldown(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cooldown: The cooldown period of the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCooldown"))

    @builtins.property
    @jsii.member(jsii_name="attrDisableScaleIn")
    def attr_disable_scale_in(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisableScaleIn: Indicates whether scale-in is disabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisableScaleIn"))

    @builtins.property
    @jsii.member(jsii_name="attrEstimatedInstanceWarmup")
    def attr_estimated_instance_warmup(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EstimatedInstanceWarmup: The warm-up period of instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEstimatedInstanceWarmup"))

    @builtins.property
    @jsii.member(jsii_name="attrInitialMaxSize")
    def attr_initial_max_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInitialMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxSize")
    def attr_max_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrMetricName")
    def attr_metric_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMetricName"))

    @builtins.property
    @jsii.member(jsii_name="attrMinAdjustmentMagnitude")
    def attr_min_adjustment_magnitude(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMinAdjustmentMagnitude"))

    @builtins.property
    @jsii.member(jsii_name="attrMinSize")
    def attr_min_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MinSize: The minimum number of ECS instances that must be contained in the scaling group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMinSize"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveScalingMode")
    def attr_predictive_scaling_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PredictiveScalingMode: The mode of the predictive scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPredictiveScalingMode"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveTaskBufferTime")
    def attr_predictive_task_buffer_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPredictiveTaskBufferTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBehavior")
    def attr_predictive_value_behavior(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PredictiveValueBehavior: The action on the predicted maximum value.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPredictiveValueBehavior"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBuffer")
    def attr_predictive_value_buffer(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPredictiveValueBuffer"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleInEvaluationCount")
    def attr_scale_in_evaluation_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScaleInEvaluationCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutEvaluationCount")
    def attr_scale_out_evaluation_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScaleOutEvaluationCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: The ID of the scaling group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleAri: The unique identifier of the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleAri"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: The ID of the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleName")
    def attr_scaling_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleName: The name of the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleType")
    def attr_scaling_rule_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleType: The type of the scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleType"))

    @builtins.property
    @jsii.member(jsii_name="attrStepAdjustments")
    def attr_step_adjustments(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StepAdjustments: The step adjustments of the step scaling rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStepAdjustments"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetValue")
    def attr_target_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetValue: The target value of the metric.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetValue"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d413041d39e8d9cd254dee0fac26913d92cf6dc91a85219aa173ff45e11be3fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleId")
    def scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingRuleId: The ID of the scaling rule that you want to query.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scalingRuleId"))

    @scaling_rule_id.setter
    def scaling_rule_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1100b8eab6e49fef5a93dd45c2eec1722b1b2f0f1f2d09fb956bbe6efbee889f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__831c806225ec1fdb073d5a69b6f49d3773aac70907c5ad7a2196a5842d932ff7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_rule_id": "scalingRuleId",
        "refresh_options": "refreshOptions",
    },
)
class RosScalingRuleProps:
    def __init__(
        self,
        *,
        scaling_rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosScalingRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule

        :param scaling_rule_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fa8b192be28994d63a7abeb0e42eddcc7f6afbbe1933e38ead30c5785deb1db)
            check_type(argname="argument scaling_rule_id", value=scaling_rule_id, expected_type=type_hints["scaling_rule_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "scaling_rule_id": scaling_rule_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scalingRuleId: The ID of the scaling rule that you want to query.
        '''
        result = self._values.get("scaling_rule_id")
        assert result is not None, "Required property 'scaling_rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingRules(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingRules",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ESS::ScalingRules``, which are used to query the information about scaling rules.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScalingRules`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingRulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55313107720e9fd58631485bac9a55d10f2b074f3137a0b3711009fd32454afa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b8645ee86e6cde129bdad03b9e9607d61a596d4bb31f8330ecd303db89056828)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleIds")
    def attr_scaling_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleIds: The list of scaling rule IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRules")
    def attr_scaling_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRules: The list of scaling rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRules"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__99026112a6ea791e89ac8ee4bf173dea7b4381f18af565a954d288f1658f9fe3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__479f239fd692eb50de08fbbc3464434fb02dfe3b0d00f715132218cb21d7b3eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingGroupId: The ID of the scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__189319c1d84f236b5f891e56344da0c440b49e629bb316023b4ebd00b868837a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleAris")
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleAris"))

    @scaling_rule_aris.setter
    def scaling_rule_aris(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37e4199716af8f0ddb88ebc52a240109f970b55fc859276361834316ed7d6ad5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleAris", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleIds")
    def scaling_rule_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleIds: The IDs of the scaling rules that you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleIds"))

    @scaling_rule_ids.setter
    def scaling_rule_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e62e143e81d4ece31317909235ba6c5000a3d49faf956a2844960b01850b5f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleIds", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleNames")
    def scaling_rule_names(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleNames: The names of the scaling rules that you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleNames"))

    @scaling_rule_names.setter
    def scaling_rule_names(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78479cbb53748f523644222de628c97cb3e6bc1a1b7a893725e83e34c8851b5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleNames", value)

    @builtins.property
    @jsii.member(jsii_name="scalingRuleType")
    def scaling_rule_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:
        SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
        TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
        StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
        PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingRuleType"))

    @scaling_rule_type.setter
    def scaling_rule_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b931a241352956d9779921037d9aba7204747bea0095740533ad57e216b4c603)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingRuleType", value)

    @builtins.property
    @jsii.member(jsii_name="showAlarmRules")
    def show_alarm_rules(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
        true
        false
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "showAlarmRules"))

    @show_alarm_rules.setter
    def show_alarm_rules(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b47b7d048eac3c49dc1f51cd81a180a59c531b655e9ef0ed9f4a00158b7cd9ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "showAlarmRules", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingRulesProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "scaling_group_id": "scalingGroupId",
        "scaling_rule_aris": "scalingRuleAris",
        "scaling_rule_ids": "scalingRuleIds",
        "scaling_rule_names": "scalingRuleNames",
        "scaling_rule_type": "scalingRuleType",
        "show_alarm_rules": "showAlarmRules",
    },
)
class RosScalingRulesProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_names: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        show_alarm_rules: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosScalingRules``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules

        :param refresh_options: 
        :param scaling_group_id: 
        :param scaling_rule_aris: 
        :param scaling_rule_ids: 
        :param scaling_rule_names: 
        :param scaling_rule_type: 
        :param show_alarm_rules: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31bef6bd115c596ad6ae1fbb4104940b8fe8397b2ccc6fa1d40b236593232779)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument scaling_rule_aris", value=scaling_rule_aris, expected_type=type_hints["scaling_rule_aris"])
            check_type(argname="argument scaling_rule_ids", value=scaling_rule_ids, expected_type=type_hints["scaling_rule_ids"])
            check_type(argname="argument scaling_rule_names", value=scaling_rule_names, expected_type=type_hints["scaling_rule_names"])
            check_type(argname="argument scaling_rule_type", value=scaling_rule_type, expected_type=type_hints["scaling_rule_type"])
            check_type(argname="argument show_alarm_rules", value=show_alarm_rules, expected_type=type_hints["show_alarm_rules"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if scaling_group_id is not None:
            self._values["scaling_group_id"] = scaling_group_id
        if scaling_rule_aris is not None:
            self._values["scaling_rule_aris"] = scaling_rule_aris
        if scaling_rule_ids is not None:
            self._values["scaling_rule_ids"] = scaling_rule_ids
        if scaling_rule_names is not None:
            self._values["scaling_rule_names"] = scaling_rule_names
        if scaling_rule_type is not None:
            self._values["scaling_rule_type"] = scaling_rule_type
        if show_alarm_rules is not None:
            self._values["show_alarm_rules"] = show_alarm_rules

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingGroupId: The ID of the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
        '''
        result = self._values.get("scaling_rule_aris")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleIds: The IDs of the scaling rules that you want to query.
        '''
        result = self._values.get("scaling_rule_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_names(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingRuleNames: The names of the scaling rules that you want to query.
        '''
        result = self._values.get("scaling_rule_names")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scalingRuleType: The type of the scaling rule. Valid values:
        SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
        TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
        StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
        PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
        '''
        result = self._values.get("scaling_rule_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def show_alarm_rules(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
        true
        false
        Default value: false.
        '''
        result = self._values.get("show_alarm_rules")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingRulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IScalingConfigurations)
class ScalingConfigurations(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingConfigurations",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ESS::ScalingConfigurations``, which is used to query the information about scaling configurations.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScalingConfigurations``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ScalingConfigurationsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ea03e374413b94b67d210ae82fdc443f0432b8485b89516983ecfc0896d534e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationIds")
    def attr_scaling_configuration_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurationIds: The list of scaling configuration IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingConfigurationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurations")
    def attr_scaling_configurations(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurations: The list of scaling configurations.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingConfigurations"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingConfigurationsProps":
        return typing.cast("ScalingConfigurationsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a42ac094949b10a12f98d17145f55f02874e1ebaf01ba0762754d1dfe3811773)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7548503a95df9f65e11582fb6f90c0b312daa44ed5e6fffca10b838f6c7fb20d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10b01b1af5f0832beff00b9602462c8de3b5f9f704edeca6ba3ceb88928c564a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingConfigurationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "scaling_configuration_ids": "scalingConfigurationIds",
        "scaling_configuration_names": "scalingConfigurationNames",
        "scaling_group_id": "scalingGroupId",
    },
)
class ScalingConfigurationsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ScalingConfigurations``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param scaling_configuration_ids: Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        :param scaling_configuration_names: Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        :param scaling_group_id: Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad4a16abfc5ed68792327bf166a78e3708aca4e54269765563c88160d9ac828c)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument scaling_configuration_ids", value=scaling_configuration_ids, expected_type=type_hints["scaling_configuration_ids"])
            check_type(argname="argument scaling_configuration_names", value=scaling_configuration_names, expected_type=type_hints["scaling_configuration_names"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if scaling_configuration_ids is not None:
            self._values["scaling_configuration_ids"] = scaling_configuration_ids
        if scaling_configuration_names is not None:
            self._values["scaling_configuration_names"] = scaling_configuration_names
        if scaling_group_id is not None:
            self._values["scaling_group_id"] = scaling_group_id

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_configuration_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingConfigurationIds: The ID of scaling configuration that you want to query.

        Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        '''
        result = self._values.get("scaling_configuration_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_configuration_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingConfigurationNames: The name of scaling configuration that you want to query.

        Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_configuration_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingGroupId: The ID of the scaling group.

        You can use the ID to query all scaling configurations in the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingConfigurationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IScalingGroups)
class ScalingGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ESS::ScalingGroups``, which is used to query scaling groups.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScalingGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ScalingGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__400e0a988a72bb13a5174c5bbfccae9dada9ddc1e819ac197318d69151118626)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupIds")
    def attr_scaling_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupIds: The list of scaling group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroups")
    def attr_scaling_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroups: The list of scaling groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingGroupsProps":
        return typing.cast("ScalingGroupsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__388dd6affebe1f2e86f8332c2acf9e5e47b58f447afbdecf56ec6cc8871961fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12a9605217a2df7ed8c347b39bb501a7fb9637d3b32e421f0473876317a51d5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e557f02e2a627699dbcbd556b6a14306048db48cc5f5d0d6fadc191d4d1f5f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_type": "groupType",
        "refresh_options": "refreshOptions",
        "scaling_group_ids": "scalingGroupIds",
        "scaling_group_names": "scalingGroupNames",
    },
)
class ScalingGroupsProps:
    def __init__(
        self,
        *,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ScalingGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups

        :param group_type: Property groupType: The type of instances that are managed by the scaling group. Valid values: ECS: the Elastic Compute Service (ECS) instances ECI: the elastic container instances Default value: ECS.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param scaling_group_ids: Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        :param scaling_group_names: Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fb5a30bbf5e6ee3a770175f7cf2e8a334e6ba29edf585151e42c2af185bd1b6)
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument scaling_group_ids", value=scaling_group_ids, expected_type=type_hints["scaling_group_ids"])
            check_type(argname="argument scaling_group_names", value=scaling_group_names, expected_type=type_hints["scaling_group_names"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_type is not None:
            self._values["group_type"] = group_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if scaling_group_ids is not None:
            self._values["scaling_group_ids"] = scaling_group_ids
        if scaling_group_names is not None:
            self._values["scaling_group_names"] = scaling_group_names

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupType: The type of instances that are managed by the scaling group.

        Valid values:
        ECS: the Elastic Compute Service (ECS) instances
        ECI: the elastic container instances
        Default value: ECS.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.'''
        result = self._values.get("scaling_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingGroupNames: The name of scaling group that you want to query.

        Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_group_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IScalingRule)
class ScalingRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingRule",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ESS::ScalingRule``, which is used to query the information about a scaling rule.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScalingRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScalingRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea3508aea13b5c83b197a989606fa8d122f73aa25f9aa10246e9a080bbff8979)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentType")
    def attr_adjustment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdjustmentType: The adjustment method of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAdjustmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrAdjustmentValue")
    def attr_adjustment_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAdjustmentValue"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarms")
    def attr_alarms(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Alarms: The event-triggered tasks that are associated with the scaling rule.

        The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlarms"))

    @builtins.property
    @jsii.member(jsii_name="attrCooldown")
    def attr_cooldown(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cooldown: The cooldown period of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCooldown"))

    @builtins.property
    @jsii.member(jsii_name="attrDisableScaleIn")
    def attr_disable_scale_in(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisableScaleIn: Indicates whether scale-in is disabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisableScaleIn"))

    @builtins.property
    @jsii.member(jsii_name="attrEstimatedInstanceWarmup")
    def attr_estimated_instance_warmup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EstimatedInstanceWarmup: The warm-up period of instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEstimatedInstanceWarmup"))

    @builtins.property
    @jsii.member(jsii_name="attrInitialMaxSize")
    def attr_initial_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInitialMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxSize")
    def attr_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrMetricName")
    def attr_metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetricName"))

    @builtins.property
    @jsii.member(jsii_name="attrMinAdjustmentMagnitude")
    def attr_min_adjustment_magnitude(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMinAdjustmentMagnitude"))

    @builtins.property
    @jsii.member(jsii_name="attrMinSize")
    def attr_min_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMinSize"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveScalingMode")
    def attr_predictive_scaling_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveScalingMode: The mode of the predictive scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveScalingMode"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveTaskBufferTime")
    def attr_predictive_task_buffer_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveTaskBufferTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBehavior")
    def attr_predictive_value_behavior(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveValueBehavior: The action on the predicted maximum value.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveValueBehavior"))

    @builtins.property
    @jsii.member(jsii_name="attrPredictiveValueBuffer")
    def attr_predictive_value_buffer(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPredictiveValueBuffer"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleInEvaluationCount")
    def attr_scale_in_evaluation_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleInEvaluationCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScaleOutEvaluationCount")
    def attr_scale_out_evaluation_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScaleOutEvaluationCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupId: The ID of the scaling group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleAri")
    def attr_scaling_rule_ari(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleAri: The unique identifier of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleAri"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleId: The ID of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleName")
    def attr_scaling_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleName: The name of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleType")
    def attr_scaling_rule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleType: The type of the scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleType"))

    @builtins.property
    @jsii.member(jsii_name="attrStepAdjustments")
    def attr_step_adjustments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StepAdjustments: The step adjustments of the step scaling rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStepAdjustments"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetValue")
    def attr_target_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetValue: The target value of the metric.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetValue"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingRuleProps":
        return typing.cast("ScalingRuleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50c92ef0ee7f03ec3d36f854004f87f2e130b33e3accee12ec61ad97af60aebd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad188d04f90e46c1c43d9d461e9dc866d3247c07edb6bbdf2695e02cbe5d4208)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bae352b47da03f0814f3e2a38573691bbdfa247242822990b3a807c007553959)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_rule_id": "scalingRuleId",
        "refresh_options": "refreshOptions",
    },
)
class ScalingRuleProps:
    def __init__(
        self,
        *,
        scaling_rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ScalingRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule

        :param scaling_rule_id: Property scalingRuleId: The ID of the scaling rule that you want to query.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54a3e1d21f3ee893d2413076b96dc53382c0da00a4ee3f9ac97526a339533958)
            check_type(argname="argument scaling_rule_id", value=scaling_rule_id, expected_type=type_hints["scaling_rule_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "scaling_rule_id": scaling_rule_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scalingRuleId: The ID of the scaling rule that you want to query.'''
        result = self._values.get("scaling_rule_id")
        assert result is not None, "Required property 'scaling_rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IScalingRules)
class ScalingRules(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingRules",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ESS::ScalingRules``, which are used to query the information about scaling rules.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScalingRules``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ScalingRulesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ab8e44b84bf193b9f8f30bc756fff1705665c2f3d2e4b093784bc437270db79)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleIds")
    def attr_scaling_rule_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleIds: The list of scaling rule IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRules")
    def attr_scaling_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRules: The list of scaling rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRules"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScalingRulesProps":
        return typing.cast("ScalingRulesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40fbea8f5f3de85abd307144c9b384c3ca1429d6554d08953b1376ffab6705e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3997711d910ef466eb68c054446421d98763b390283fd6f18f5bd993fb8367a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e9e8253908dd3334edb557b62a1ae31fa2ab28fb56a63633441d746e4e3a420)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingRulesProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "scaling_group_id": "scalingGroupId",
        "scaling_rule_aris": "scalingRuleAris",
        "scaling_rule_ids": "scalingRuleIds",
        "scaling_rule_names": "scalingRuleNames",
        "scaling_rule_type": "scalingRuleType",
        "show_alarm_rules": "showAlarmRules",
    },
)
class ScalingRulesProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_names: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        show_alarm_rules: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ScalingRules``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param scaling_group_id: Property scalingGroupId: The ID of the scaling group.
        :param scaling_rule_aris: Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
        :param scaling_rule_ids: Property scalingRuleIds: The IDs of the scaling rules that you want to query.
        :param scaling_rule_names: Property scalingRuleNames: The names of the scaling rules that you want to query.
        :param scaling_rule_type: Property scalingRuleType: The type of the scaling rule. Valid values: SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters. TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter. StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values. PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
        :param show_alarm_rules: Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values: true false Default value: false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd9f9a15e1515961d648b3d885569dcafaa64f4f786077893466643d9da33166)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
            check_type(argname="argument scaling_rule_aris", value=scaling_rule_aris, expected_type=type_hints["scaling_rule_aris"])
            check_type(argname="argument scaling_rule_ids", value=scaling_rule_ids, expected_type=type_hints["scaling_rule_ids"])
            check_type(argname="argument scaling_rule_names", value=scaling_rule_names, expected_type=type_hints["scaling_rule_names"])
            check_type(argname="argument scaling_rule_type", value=scaling_rule_type, expected_type=type_hints["scaling_rule_type"])
            check_type(argname="argument show_alarm_rules", value=show_alarm_rules, expected_type=type_hints["show_alarm_rules"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if scaling_group_id is not None:
            self._values["scaling_group_id"] = scaling_group_id
        if scaling_rule_aris is not None:
            self._values["scaling_rule_aris"] = scaling_rule_aris
        if scaling_rule_ids is not None:
            self._values["scaling_rule_ids"] = scaling_rule_ids
        if scaling_rule_names is not None:
            self._values["scaling_rule_names"] = scaling_rule_names
        if scaling_rule_type is not None:
            self._values["scaling_rule_type"] = scaling_rule_type
        if show_alarm_rules is not None:
            self._values["show_alarm_rules"] = show_alarm_rules

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingGroupId: The ID of the scaling group.'''
        result = self._values.get("scaling_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_aris(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.'''
        result = self._values.get("scaling_rule_aris")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleIds: The IDs of the scaling rules that you want to query.'''
        result = self._values.get("scaling_rule_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_names(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleNames: The names of the scaling rules that you want to query.'''
        result = self._values.get("scaling_rule_names")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_rule_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingRuleType: The type of the scaling rule.

        Valid values:
        SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
        TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
        StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
        PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
        '''
        result = self._values.get("scaling_rule_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def show_alarm_rules(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule.

        Valid values:
        true
        false
        Default value: false.
        '''
        result = self._values.get("show_alarm_rules")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingRulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IScalingConfigurations",
    "IScalingGroups",
    "IScalingRule",
    "IScalingRules",
    "RosScalingConfigurations",
    "RosScalingConfigurationsProps",
    "RosScalingGroups",
    "RosScalingGroupsProps",
    "RosScalingRule",
    "RosScalingRuleProps",
    "RosScalingRules",
    "RosScalingRulesProps",
    "ScalingConfigurations",
    "ScalingConfigurationsProps",
    "ScalingGroups",
    "ScalingGroupsProps",
    "ScalingRule",
    "ScalingRuleProps",
    "ScalingRules",
    "ScalingRulesProps",
]

publication.publish()

def _typecheckingstub__30442118c43da20c8f60be524e8c6d012cf474cd16d80089d2e13d265197ff16(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingConfigurationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e304cad4b4abd21f5abebd163ea97d4e8f98ec65a7c047812c2db4818ce5dae(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a7df10b084e9f06fbfe39a0f253661b8ca7788cceab89f9228c5ca87cd94fbb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ca2e7451b34a4e735a7e26aa0fe971faca6689e02b63829605d1552fb093f3e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5a3bca47e68f75c02704a552e936004be213ed7b9c9bb57c66cbb5f34bfbf65(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0ebdc6209cb2175634d3053fcd3ccf149c141d1b6ebc056c6556cbcd08c1461(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ddb8c2c880b0195b06c6cbfda754a713ea6f61a4556be05cb0dd39b82e87d75(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a097b23d93fbfee9b34991a7b50886cc3335ad5d96370486950d45e61294c06(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eb0a2d8c9f304d6bb27ddaffd3cf94a1e0ad5166edd44c4ceb90ff7f9914c02(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b75ea6c902c777ed58ef11908c9f86fc94132f50a42412085f0a0910b0c34e79(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc8293008c3bd0fb46b4528e574736dff8e1b16b10ac39fb790545ab60d69c75(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81965a2ce1ab806d915647865fa6a7e0090e34b0fa5d8624034a36201c13d2af(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f41b1f8f1640b52f90240132b80b5b3a4746379a2fa3a4b9f377e9723437c4e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__696ad33dca0ca20cbbe7c4584de0b3fd2ee991de7212875d76740d370957a484(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b784c506dc1d3935578dcdd30cb88fa8839e6366fc76d1b630a2826411aacea(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6304951bcd440b722b1b51ce1d39e0132ffcafd3d42be70c65d3ac830e49958(
    *,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b13942e17359a807ecc5cbb7cd99728773c7fd26d4d5d942a8a2a94f729d21e5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45a750ac0db2ef69e17f06a9af4f8cbe5b6adb0cab415559c975e240f4daf32b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d413041d39e8d9cd254dee0fac26913d92cf6dc91a85219aa173ff45e11be3fb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1100b8eab6e49fef5a93dd45c2eec1722b1b2f0f1f2d09fb956bbe6efbee889f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__831c806225ec1fdb073d5a69b6f49d3773aac70907c5ad7a2196a5842d932ff7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fa8b192be28994d63a7abeb0e42eddcc7f6afbbe1933e38ead30c5785deb1db(
    *,
    scaling_rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55313107720e9fd58631485bac9a55d10f2b074f3137a0b3711009fd32454afa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingRulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8645ee86e6cde129bdad03b9e9607d61a596d4bb31f8330ecd303db89056828(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99026112a6ea791e89ac8ee4bf173dea7b4381f18af565a954d288f1658f9fe3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__479f239fd692eb50de08fbbc3464434fb02dfe3b0d00f715132218cb21d7b3eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__189319c1d84f236b5f891e56344da0c440b49e629bb316023b4ebd00b868837a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37e4199716af8f0ddb88ebc52a240109f970b55fc859276361834316ed7d6ad5(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e62e143e81d4ece31317909235ba6c5000a3d49faf956a2844960b01850b5f1(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78479cbb53748f523644222de628c97cb3e6bc1a1b7a893725e83e34c8851b5a(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b931a241352956d9779921037d9aba7204747bea0095740533ad57e216b4c603(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b47b7d048eac3c49dc1f51cd81a180a59c531b655e9ef0ed9f4a00158b7cd9ac(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31bef6bd115c596ad6ae1fbb4104940b8fe8397b2ccc6fa1d40b236593232779(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_names: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    show_alarm_rules: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ea03e374413b94b67d210ae82fdc443f0432b8485b89516983ecfc0896d534e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ScalingConfigurationsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a42ac094949b10a12f98d17145f55f02874e1ebaf01ba0762754d1dfe3811773(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7548503a95df9f65e11582fb6f90c0b312daa44ed5e6fffca10b838f6c7fb20d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10b01b1af5f0832beff00b9602462c8de3b5f9f704edeca6ba3ceb88928c564a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad4a16abfc5ed68792327bf166a78e3708aca4e54269765563c88160d9ac828c(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__400e0a988a72bb13a5174c5bbfccae9dada9ddc1e819ac197318d69151118626(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ScalingGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__388dd6affebe1f2e86f8332c2acf9e5e47b58f447afbdecf56ec6cc8871961fb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12a9605217a2df7ed8c347b39bb501a7fb9637d3b32e421f0473876317a51d5e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e557f02e2a627699dbcbd556b6a14306048db48cc5f5d0d6fadc191d4d1f5f2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fb5a30bbf5e6ee3a770175f7cf2e8a334e6ba29edf585151e42c2af185bd1b6(
    *,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea3508aea13b5c83b197a989606fa8d122f73aa25f9aa10246e9a080bbff8979(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScalingRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50c92ef0ee7f03ec3d36f854004f87f2e130b33e3accee12ec61ad97af60aebd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad188d04f90e46c1c43d9d461e9dc866d3247c07edb6bbdf2695e02cbe5d4208(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bae352b47da03f0814f3e2a38573691bbdfa247242822990b3a807c007553959(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54a3e1d21f3ee893d2413076b96dc53382c0da00a4ee3f9ac97526a339533958(
    *,
    scaling_rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ab8e44b84bf193b9f8f30bc756fff1705665c2f3d2e4b093784bc437270db79(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ScalingRulesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40fbea8f5f3de85abd307144c9b384c3ca1429d6554d08953b1376ffab6705e9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3997711d910ef466eb68c054446421d98763b390283fd6f18f5bd993fb8367a3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e9e8253908dd3334edb557b62a1ae31fa2ab28fb56a63633441d746e4e3a420(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd9f9a15e1515961d648b3d885569dcafaa64f4f786077893466643d9da33166(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_aris: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_names: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_rule_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    show_alarm_rules: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
