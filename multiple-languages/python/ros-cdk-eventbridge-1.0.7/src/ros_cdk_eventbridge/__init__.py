'''
## Aliyun ROS EVENTBRIDGE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EVENTBRIDGE from '@alicloud/ros-cdk-eventbridge';
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


class RosRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.RosRule",
):
    '''A ROS template type:  ``ALIYUN::EventBridge::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EventBridge::Rule``.

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
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EventBusName: The name of the event bus.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEventBusName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RuleName: The name of the event rule.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleName"))

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
    @jsii.member(jsii_name="eventBusName")
    def event_bus_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: eventBusName: The name of the event bus.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "eventBusName"))

    @event_bus_name.setter
    def event_bus_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "eventBusName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="filterPattern")
    def filter_pattern(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: filterPattern: The event pattern, in the JSON format.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "filterPattern"))

    @filter_pattern.setter
    def filter_pattern(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "filterPattern", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleName")
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ruleName: The name of the event rule.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ruleName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.TargetsProperty"]]]:
        '''
        :Property: targets: The event target to which events are delivered.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.TargetsProperty"]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.TargetsProperty"]]],
    ) -> None:
        jsii.set(self, "targets", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the event rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        status: The status of the event rule. Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "status", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosRule.ParamListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "form": "form",
            "resource_key": "resourceKey",
            "value": "value",
            "template": "template",
        },
    )
    class ParamListProperty:
        def __init__(
            self,
            *,
            form: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            resource_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            template: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param form: 
            :param resource_key: 
            :param value: 
            :param template: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "form": form,
                "resource_key": resource_key,
                "value": value,
            }
            if template is not None:
                self._values["template"] = template

        @builtins.property
        def form(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: form: The transformation method.For more information, see Event target parameters.
            '''
            result = self._values.get("form")
            assert result is not None, "Required property 'form' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def resource_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
            '''
            result = self._values.get("resource_key")
            assert result is not None, "Required property 'resource_key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value: The event value to be transformed.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def template(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: template: The format of the template.
            '''
            result = self._values.get("template")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ParamListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint": "endpoint",
            "id": "id",
            "param_list": "paramList",
            "type": "type",
            "push_retry_strategy": "pushRetryStrategy",
        },
    )
    class TargetsProperty:
        def __init__(
            self,
            *,
            endpoint: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            param_list: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosRule.ParamListProperty"]]],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            push_retry_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param endpoint: 
            :param id: 
            :param param_list: 
            :param type: 
            :param push_retry_strategy: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "endpoint": endpoint,
                "id": id,
                "param_list": param_list,
                "type": type,
            }
            if push_retry_strategy is not None:
                self._values["push_retry_strategy"] = push_retry_strategy

        @builtins.property
        def endpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: endpoint: The endpoint of the event target.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: id: The custom ID of the event target.
            '''
            result = self._values.get("id")
            assert result is not None, "Required property 'id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def param_list(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.ParamListProperty"]]]:
            '''
            :Property: paramList: The parameters that the event passes.
            '''
            result = self._values.get("param_list")
            assert result is not None, "Required property 'param_list' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.ParamListProperty"]]], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: The type of the event target.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def push_retry_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
            '''
            result = self._values.get("push_retry_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TargetsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "event_bus_name": "eventBusName",
        "filter_pattern": "filterPattern",
        "rule_name": "ruleName",
        "targets": "targets",
        "description": "description",
        "status": "status",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        event_bus_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        filter_pattern: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        targets: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRule.TargetsProperty]]],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EventBridge::Rule``.

        :param event_bus_name: 
        :param filter_pattern: 
        :param rule_name: 
        :param targets: 
        :param description: 
        :param status: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "event_bus_name": event_bus_name,
            "filter_pattern": filter_pattern,
            "rule_name": rule_name,
            "targets": targets,
        }
        if description is not None:
            self._values["description"] = description
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def event_bus_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: eventBusName: The name of the event bus.
        '''
        result = self._values.get("event_bus_name")
        assert result is not None, "Required property 'event_bus_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def filter_pattern(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: filterPattern: The event pattern, in the JSON format.
        '''
        result = self._values.get("filter_pattern")
        assert result is not None, "Required property 'filter_pattern' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ruleName: The name of the event rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.TargetsProperty]]]:
        '''
        :Property: targets: The event target to which events are delivered.
        '''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.TargetsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the event rule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        status: The status of the event rule. Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.Rule",
):
    '''A ROS resource type:  ``ALIYUN::EventBridge::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EventBridge::Rule``.

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
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute EventBusName: The name of the event bus.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEventBusName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(self) -> ros_cdk_core.IResolvable:
        '''Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.

        The ARN is used for authorization.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RuleName: The name of the event rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "event_bus_name": "eventBusName",
        "filter_pattern": "filterPattern",
        "rule_name": "ruleName",
        "targets": "targets",
        "description": "description",
        "status": "status",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        event_bus_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        filter_pattern: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        targets: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRule.TargetsProperty]]],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EventBridge::Rule``.

        :param event_bus_name: Property eventBusName: The name of the event bus.
        :param filter_pattern: Property filterPattern: The event pattern, in the JSON format.
        :param rule_name: Property ruleName: The name of the event rule.
        :param targets: Property targets: The event target to which events are delivered.
        :param description: Property description: The description of the event rule.
        :param status: Property status: The status of the event rule. Valid values: ENABLE: The event rule is enabled. It is the default state of the event rule. DISABLE: The event rule is disabled.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "event_bus_name": event_bus_name,
            "filter_pattern": filter_pattern,
            "rule_name": rule_name,
            "targets": targets,
        }
        if description is not None:
            self._values["description"] = description
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def event_bus_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property eventBusName: The name of the event bus.'''
        result = self._values.get("event_bus_name")
        assert result is not None, "Required property 'event_bus_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def filter_pattern(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property filterPattern: The event pattern, in the JSON format.'''
        result = self._values.get("filter_pattern")
        assert result is not None, "Required property 'filter_pattern' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ruleName: The name of the event rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.TargetsProperty]]]:
        '''Property targets: The event target to which events are delivered.'''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.TargetsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the event rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property status: The status of the event rule.

        Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosRule",
    "RosRuleProps",
    "Rule",
    "RuleProps",
]

publication.publish()
