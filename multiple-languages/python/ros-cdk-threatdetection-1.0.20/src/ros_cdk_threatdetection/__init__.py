'''
## Aliyun ROS THREATDETECTION Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as THREATDETECTION from '@alicloud/ros-cdk-threatdetection';
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


class AntiBruteForceRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.AntiBruteForceRule",
):
    '''A ROS resource type:  ``ALIYUN::ThreatDetection::AntiBruteForceRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AntiBruteForceRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ThreatDetection::AntiBruteForceRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f8659f87b10c0fcf9d9fbf71d229cd6d78fbd380def248ca47c590aaba71e92)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleId")
    def attr_anti_brute_force_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AntiBruteForceRuleId: The ID of the defense rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AntiBruteForceRuleName: The name of the defense rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultRule"))

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFailCount"))

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrForbiddenTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Span: The period of time during which logon failures from an account are measured.

        Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpan"))

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UuidList: The UUIDs of the server to which the defense rule is applied.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUuidList"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "anti_brute_force_rule_name": "antiBruteForceRuleName",
        "fail_count": "failCount",
        "forbidden_time": "forbiddenTime",
        "span": "span",
        "uuid_list": "uuidList",
        "default_rule": "defaultRule",
    },
)
class AntiBruteForceRuleProps:
    def __init__(
        self,
        *,
        anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ThreatDetection::AntiBruteForceRule``.

        :param anti_brute_force_rule_name: Property antiBruteForceRuleName: The name of the defense rule.
        :param fail_count: Property failCount: The maximum number of failed logon attempts from an account. Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        :param forbidden_time: Property forbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes. Valid values: - 5: 5 minutes - 15: 15 minutes - 30: 30 minutes - 60: 1 hour - 120: 2 hours - 360: 6 hours - 720: 12 hours - 1440: 24 hours - 10080: 7 days - 52560000: permanent
        :param span: Property span: The maximum period of time during which failed logon attempts from an account can occur. Unit: minutes. Valid values: - 1 - 2 - 5 - 10 - 15
        :param uuid_list: Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        :param default_rule: Property defaultRule: Specifies whether to set the defense rule as the default rule. Valid values: - true: yes - false: no
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__833ae8cb35491a406ec6b074d3ea52516c205541d1800a976c9e12f1983661e2)
            check_type(argname="argument anti_brute_force_rule_name", value=anti_brute_force_rule_name, expected_type=type_hints["anti_brute_force_rule_name"])
            check_type(argname="argument fail_count", value=fail_count, expected_type=type_hints["fail_count"])
            check_type(argname="argument forbidden_time", value=forbidden_time, expected_type=type_hints["forbidden_time"])
            check_type(argname="argument span", value=span, expected_type=type_hints["span"])
            check_type(argname="argument uuid_list", value=uuid_list, expected_type=type_hints["uuid_list"])
            check_type(argname="argument default_rule", value=default_rule, expected_type=type_hints["default_rule"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "anti_brute_force_rule_name": anti_brute_force_rule_name,
            "fail_count": fail_count,
            "forbidden_time": forbidden_time,
            "span": span,
            "uuid_list": uuid_list,
        }
        if default_rule is not None:
            self._values["default_rule"] = default_rule

    @builtins.property
    def anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property antiBruteForceRuleName: The name of the defense rule.'''
        result = self._values.get("anti_brute_force_rule_name")
        assert result is not None, "Required property 'anti_brute_force_rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fail_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property failCount: The maximum number of failed logon attempts from an account.

        Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        '''
        result = self._values.get("fail_count")
        assert result is not None, "Required property 'fail_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def forbidden_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property forbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes. Valid values:

        - 5: 5 minutes
        - 15: 15 minutes
        - 30: 30 minutes
        - 60: 1 hour
        - 120: 2 hours
        - 360: 6 hours
        - 720: 12 hours
        - 1440: 24 hours
        - 10080: 7 days
        - 52560000: permanent
        '''
        result = self._values.get("forbidden_time")
        assert result is not None, "Required property 'forbidden_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def span(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property span: The maximum period of time during which failed logon attempts from an account can occur.

        Unit: minutes. Valid values:

        - 1
        - 2
        - 5
        - 10
        - 15
        '''
        result = self._values.get("span")
        assert result is not None, "Required property 'span' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uuid_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.'''
        result = self._values.get("uuid_list")
        assert result is not None, "Required property 'uuid_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def default_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        result = self._values.get("default_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AntiBruteForceRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAntiBruteForceRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRule",
):
    '''A ROS template type:  ``ALIYUN::ThreatDetection::AntiBruteForceRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAntiBruteForceRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ThreatDetection::AntiBruteForceRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4f5e49fe6474e073db6dd4d70039e455c895e18161e7c28f6c21f3c84c0940e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35cc99e373e0e82d27e976748a471f4a65213ecfc9de5ab23d462e4d1990437a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleId")
    def attr_anti_brute_force_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AntiBruteForceRuleId: The ID of the defense rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AntiBruteForceRuleName: The name of the defense rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DefaultRule: Specifies whether to set the defense rule as the default rule.
        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultRule"))

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFailCount"))

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrForbiddenTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpan"))

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UuidList: The UUIDs of the server to which the defense rule is applied.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUuidList"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="antiBruteForceRuleName")
    def anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: antiBruteForceRuleName: The name of the defense rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "antiBruteForceRuleName"))

    @anti_brute_force_rule_name.setter
    def anti_brute_force_rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1813e54b2aec4b1cec245827eca09d795d1c3be24f7769971f4f2252fe6f5950)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "antiBruteForceRuleName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d8040a936974fcc6afb22cb1899651f8613194ba2287ae0c406753b9d21d0c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="failCount")
    def fail_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        failCount: The maximum number of failed logon attempts from an account.
        Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "failCount"))

    @fail_count.setter
    def fail_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02755fbb78929b92f6d36cc8d76c6099803e871a020c716d7a383cc249c0a8e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failCount", value)

    @builtins.property
    @jsii.member(jsii_name="forbiddenTime")
    def forbidden_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        forbiddenTime: The period of time during which logons from an account are not allowed.
        Unit: minutes. Valid values:

        - 5: 5 minutes
        - 15: 15 minutes
        - 30: 30 minutes
        - 60: 1 hour
        - 120: 2 hours
        - 360: 6 hours
        - 720: 12 hours
        - 1440: 24 hours
        - 10080: 7 days
        - 52560000: permanent
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "forbiddenTime"))

    @forbidden_time.setter
    def forbidden_time(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3fae800ff0e50053dc1ef5a56f5a57a5631928267a28667605704d6ce238f07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "forbiddenTime", value)

    @builtins.property
    @jsii.member(jsii_name="span")
    def span(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        span: The maximum period of time during which failed logon attempts from an account can occur.
        Unit: minutes. Valid values:

        - 1
        - 2
        - 5
        - 10
        - 15
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "span"))

    @span.setter
    def span(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c9204843e8472833a4d8b1984c825632a49ffbe7650891c82a94a0b589ea4ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "span", value)

    @builtins.property
    @jsii.member(jsii_name="uuidList")
    def uuid_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "uuidList"))

    @uuid_list.setter
    def uuid_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94698ff5e2caebc141a70e4b6bb7d46f061f2fc91d222998a181baf02fb111dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uuidList", value)

    @builtins.property
    @jsii.member(jsii_name="defaultRule")
    def default_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultRule: Specifies whether to set the defense rule as the default rule.
        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultRule"))

    @default_rule.setter
    def default_rule(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8211a5caa7daa6f4a87b5871c1e9c303dd12f9277f2429192c3c6c0ab46657af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultRule", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "anti_brute_force_rule_name": "antiBruteForceRuleName",
        "fail_count": "failCount",
        "forbidden_time": "forbiddenTime",
        "span": "span",
        "uuid_list": "uuidList",
        "default_rule": "defaultRule",
    },
)
class RosAntiBruteForceRuleProps:
    def __init__(
        self,
        *,
        anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ThreatDetection::AntiBruteForceRule``.

        :param anti_brute_force_rule_name: 
        :param fail_count: 
        :param forbidden_time: 
        :param span: 
        :param uuid_list: 
        :param default_rule: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d101d0a61041898571c013b511320f2f140acab32dda658b6d40707e8d8bcb20)
            check_type(argname="argument anti_brute_force_rule_name", value=anti_brute_force_rule_name, expected_type=type_hints["anti_brute_force_rule_name"])
            check_type(argname="argument fail_count", value=fail_count, expected_type=type_hints["fail_count"])
            check_type(argname="argument forbidden_time", value=forbidden_time, expected_type=type_hints["forbidden_time"])
            check_type(argname="argument span", value=span, expected_type=type_hints["span"])
            check_type(argname="argument uuid_list", value=uuid_list, expected_type=type_hints["uuid_list"])
            check_type(argname="argument default_rule", value=default_rule, expected_type=type_hints["default_rule"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "anti_brute_force_rule_name": anti_brute_force_rule_name,
            "fail_count": fail_count,
            "forbidden_time": forbidden_time,
            "span": span,
            "uuid_list": uuid_list,
        }
        if default_rule is not None:
            self._values["default_rule"] = default_rule

    @builtins.property
    def anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: antiBruteForceRuleName: The name of the defense rule.
        '''
        result = self._values.get("anti_brute_force_rule_name")
        assert result is not None, "Required property 'anti_brute_force_rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fail_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        failCount: The maximum number of failed logon attempts from an account.
        Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        '''
        result = self._values.get("fail_count")
        assert result is not None, "Required property 'fail_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def forbidden_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        forbiddenTime: The period of time during which logons from an account are not allowed.
        Unit: minutes. Valid values:

        - 5: 5 minutes
        - 15: 15 minutes
        - 30: 30 minutes
        - 60: 1 hour
        - 120: 2 hours
        - 360: 6 hours
        - 720: 12 hours
        - 1440: 24 hours
        - 10080: 7 days
        - 52560000: permanent
        '''
        result = self._values.get("forbidden_time")
        assert result is not None, "Required property 'forbidden_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def span(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        span: The maximum period of time during which failed logon attempts from an account can occur.
        Unit: minutes. Valid values:

        - 1
        - 2
        - 5
        - 10
        - 15
        '''
        result = self._values.get("span")
        assert result is not None, "Required property 'span' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uuid_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        '''
        result = self._values.get("uuid_list")
        assert result is not None, "Required property 'uuid_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def default_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultRule: Specifies whether to set the defense rule as the default rule.
        Valid values:

        - true: yes
        - false: no
        '''
        result = self._values.get("default_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAntiBruteForceRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AntiBruteForceRule",
    "AntiBruteForceRuleProps",
    "RosAntiBruteForceRule",
    "RosAntiBruteForceRuleProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__9f8659f87b10c0fcf9d9fbf71d229cd6d78fbd380def248ca47c590aaba71e92(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AntiBruteForceRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__833ae8cb35491a406ec6b074d3ea52516c205541d1800a976c9e12f1983661e2(
    *,
    anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4f5e49fe6474e073db6dd4d70039e455c895e18161e7c28f6c21f3c84c0940e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAntiBruteForceRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35cc99e373e0e82d27e976748a471f4a65213ecfc9de5ab23d462e4d1990437a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1813e54b2aec4b1cec245827eca09d795d1c3be24f7769971f4f2252fe6f5950(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d8040a936974fcc6afb22cb1899651f8613194ba2287ae0c406753b9d21d0c8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02755fbb78929b92f6d36cc8d76c6099803e871a020c716d7a383cc249c0a8e8(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3fae800ff0e50053dc1ef5a56f5a57a5631928267a28667605704d6ce238f07(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c9204843e8472833a4d8b1984c825632a49ffbe7650891c82a94a0b589ea4ae(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94698ff5e2caebc141a70e4b6bb7d46f061f2fc91d222998a181baf02fb111dc(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8211a5caa7daa6f4a87b5871c1e9c303dd12f9277f2429192c3c6c0ab46657af(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d101d0a61041898571c013b511320f2f140acab32dda658b6d40707e8d8bcb20(
    *,
    anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
