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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.RosRule",
):
    '''A ROS template type:  ``ALIYUN::EventBridge::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EventBridge::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc13b5639bd7417d66d906b66bf53a370e79ae5abfbccfbb6d326b221b609ff9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7cfcf0319147ca0336db8c550db372460c1f80fc1fd4071512da659855263236)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventBusName: The name of the event bus.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventBusName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the event rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b51f46e2b323bfc145490bcc9c53066810c6eb94b1ca936f1637dd35eb7136bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="eventBusName")
    def event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: eventBusName: The name of the event bus.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "eventBusName"))

    @event_bus_name.setter
    def event_bus_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcfb4d63f64e17fbcba8566bbbcd44263830be7d48f09be9e6d5e934f1b2f23a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventBusName", value)

    @builtins.property
    @jsii.member(jsii_name="filterPattern")
    def filter_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: filterPattern: The event pattern, in the JSON format.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "filterPattern"))

    @filter_pattern.setter
    def filter_pattern(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d6a3baaa97d488af2065b6672e5da9330c0f52ce3e442098c894bd9a1239da3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filterPattern", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the event rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcfdc4667d17b185a7b5da8a1cd14c04140b8c0b46c1c654da743fc282aad728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TargetsProperty"]]]:
        '''
        :Property: targets: The event target to which events are delivered.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TargetsProperty"]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TargetsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe8926d8ad8cd676209ae47c35bac30496596a713b69c0079e8bc7860ad070ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targets", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the event rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d0376daf5f660355d9ddf900f67c56ee01ddc539cd49c90e1b97d6d1acf1953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the event rule. Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6f5a7a53031ed2f15c7c0b622d7fb614a3d44890022b95ac84d0f556c8ad0ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            form: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            template: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param form: 
            :param resource_key: 
            :param value: 
            :param template: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7cbc44a0ebe784c2fe1a2239f0ddcdff2e89e13812a6e0ed8169e81920a9a77a)
                check_type(argname="argument form", value=form, expected_type=type_hints["form"])
                check_type(argname="argument resource_key", value=resource_key, expected_type=type_hints["resource_key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "form": form,
                "resource_key": resource_key,
                "value": value,
            }
            if template is not None:
                self._values["template"] = template

        @builtins.property
        def form(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: form: The transformation method.For more information, see Event target parameters.
            '''
            result = self._values.get("form")
            assert result is not None, "Required property 'form' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
            '''
            result = self._values.get("resource_key")
            assert result is not None, "Required property 'resource_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: The event value to be transformed.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def template(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: template: The format of the template.
            '''
            result = self._values.get("template")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            param_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ParamListProperty", typing.Dict[builtins.str, typing.Any]]]]],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            push_retry_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param endpoint: 
            :param id: 
            :param param_list: 
            :param type: 
            :param push_retry_strategy: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ffe9db6d519139b42455999db067a693a742784850c81b23650b403cf65d918d)
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument param_list", value=param_list, expected_type=type_hints["param_list"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument push_retry_strategy", value=push_retry_strategy, expected_type=type_hints["push_retry_strategy"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint": endpoint,
                "id": id,
                "param_list": param_list,
                "type": type,
            }
            if push_retry_strategy is not None:
                self._values["push_retry_strategy"] = push_retry_strategy

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpoint: The endpoint of the event target.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: id: The custom ID of the event target.
            '''
            result = self._values.get("id")
            assert result is not None, "Required property 'id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def param_list(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ParamListProperty"]]]:
            '''
            :Property: paramList: The parameters that the event passes.
            '''
            result = self._values.get("param_list")
            assert result is not None, "Required property 'param_list' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ParamListProperty"]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of the event target.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def push_retry_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
            '''
            result = self._values.get("push_retry_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EventBridge::Rule``.

        :param event_bus_name: 
        :param filter_pattern: 
        :param rule_name: 
        :param targets: 
        :param description: 
        :param status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f572b4c98953756f83a5ac0f4132927c35b8bda9e65062da1a3bcaae30a569c)
            check_type(argname="argument event_bus_name", value=event_bus_name, expected_type=type_hints["event_bus_name"])
            check_type(argname="argument filter_pattern", value=filter_pattern, expected_type=type_hints["filter_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: eventBusName: The name of the event bus.
        '''
        result = self._values.get("event_bus_name")
        assert result is not None, "Required property 'event_bus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def filter_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: filterPattern: The event pattern, in the JSON format.
        '''
        result = self._values.get("filter_pattern")
        assert result is not None, "Required property 'filter_pattern' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the event rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]]:
        '''
        :Property: targets: The event target to which events are delivered.
        '''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the event rule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the event rule. Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.Rule",
):
    '''A ROS resource type:  ``ALIYUN::EventBridge::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93838a325cf693f07463452ecd5b11c0782f604814b02977069320acb6c2f991)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EventBusName: The name of the event bus.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventBusName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.

        The ARN is used for authorization.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleName: The name of the event rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))


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
        event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EventBridge::Rule``.

        :param event_bus_name: Property eventBusName: The name of the event bus.
        :param filter_pattern: Property filterPattern: The event pattern, in the JSON format.
        :param rule_name: Property ruleName: The name of the event rule.
        :param targets: Property targets: The event target to which events are delivered.
        :param description: Property description: The description of the event rule.
        :param status: Property status: The status of the event rule. Valid values: ENABLE: The event rule is enabled. It is the default state of the event rule. DISABLE: The event rule is disabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e9b073799151a79aa1e3f05a76f86c2922740ef2ab3b3846a33f1a2e39d381d)
            check_type(argname="argument event_bus_name", value=event_bus_name, expected_type=type_hints["event_bus_name"])
            check_type(argname="argument filter_pattern", value=filter_pattern, expected_type=type_hints["filter_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property eventBusName: The name of the event bus.'''
        result = self._values.get("event_bus_name")
        assert result is not None, "Required property 'event_bus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def filter_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property filterPattern: The event pattern, in the JSON format.'''
        result = self._values.get("filter_pattern")
        assert result is not None, "Required property 'filter_pattern' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the event rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]]:
        '''Property targets: The event target to which events are delivered.'''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the event rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the event rule.

        Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__dc13b5639bd7417d66d906b66bf53a370e79ae5abfbccfbb6d326b221b609ff9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cfcf0319147ca0336db8c550db372460c1f80fc1fd4071512da659855263236(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51f46e2b323bfc145490bcc9c53066810c6eb94b1ca936f1637dd35eb7136bb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcfb4d63f64e17fbcba8566bbbcd44263830be7d48f09be9e6d5e934f1b2f23a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d6a3baaa97d488af2065b6672e5da9330c0f52ce3e442098c894bd9a1239da3(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcfdc4667d17b185a7b5da8a1cd14c04140b8c0b46c1c654da743fc282aad728(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe8926d8ad8cd676209ae47c35bac30496596a713b69c0079e8bc7860ad070ec(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d0376daf5f660355d9ddf900f67c56ee01ddc539cd49c90e1b97d6d1acf1953(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6f5a7a53031ed2f15c7c0b622d7fb614a3d44890022b95ac84d0f556c8ad0ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cbc44a0ebe784c2fe1a2239f0ddcdff2e89e13812a6e0ed8169e81920a9a77a(
    *,
    form: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffe9db6d519139b42455999db067a693a742784850c81b23650b403cf65d918d(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    param_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ParamListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    push_retry_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f572b4c98953756f83a5ac0f4132927c35b8bda9e65062da1a3bcaae30a569c(
    *,
    event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93838a325cf693f07463452ecd5b11c0782f604814b02977069320acb6c2f991(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e9b073799151a79aa1e3f05a76f86c2922740ef2ab3b3846a33f1a2e39d381d(
    *,
    event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
