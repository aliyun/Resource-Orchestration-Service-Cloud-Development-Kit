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
        '''Properties for defining a ``AntiBruteForceRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfigProps",
    jsii_struct_bases=[],
    name_mapping={"attack_path_asset_list": "attackPathAssetList"},
)
class AttackPathSensitiveAssetConfigProps:
    def __init__(
        self,
        *,
        attack_path_asset_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``AttackPathSensitiveAssetConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig

        :param attack_path_asset_list: Property attackPathAssetList: The attack path sensitive asset configuration list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a1cba07e38261c08cb31375a787a9b6862b825322b1c26b21c7be6f1d5e6406)
            check_type(argname="argument attack_path_asset_list", value=attack_path_asset_list, expected_type=type_hints["attack_path_asset_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "attack_path_asset_list": attack_path_asset_list,
        }

    @builtins.property
    def attack_path_asset_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty"]]]:
        '''Property attackPathAssetList: The attack path sensitive asset configuration list.'''
        result = self._values.get("attack_path_asset_list")
        assert result is not None, "Required property 'attack_path_asset_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AttackPathSensitiveAssetConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "path_name": "pathName",
        "path_type": "pathType",
        "whitelist_name": "whitelistName",
        "whitelist_type": "whitelistType",
        "attack_path_asset_list": "attackPathAssetList",
        "remark": "remark",
    },
)
class AttackPathWhitelistProps:
    def __init__(
        self,
        *,
        path_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        path_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        whitelist_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        whitelist_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        attack_path_asset_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAttackPathWhitelist.AttackPathAssetListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AttackPathWhitelist``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist

        :param path_name: Property pathName: The whitelist path name.
        :param path_type: Property pathType: The whitelist path type.
        :param whitelist_name: Property whitelistName: The whitelist name.
        :param whitelist_type: Property whitelistType: The whitelist type. Values: - ALL_ASSET: All assets. - PART_ASSET: Partial assets.
        :param attack_path_asset_list: Property attackPathAssetList: List of attack path assets.
        :param remark: Property remark: Remark information.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a655886d0e54421e987e78f6a068946b0be94bc7fb2b90d7ffa575fc83ee7acc)
            check_type(argname="argument path_name", value=path_name, expected_type=type_hints["path_name"])
            check_type(argname="argument path_type", value=path_type, expected_type=type_hints["path_type"])
            check_type(argname="argument whitelist_name", value=whitelist_name, expected_type=type_hints["whitelist_name"])
            check_type(argname="argument whitelist_type", value=whitelist_type, expected_type=type_hints["whitelist_type"])
            check_type(argname="argument attack_path_asset_list", value=attack_path_asset_list, expected_type=type_hints["attack_path_asset_list"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "path_name": path_name,
            "path_type": path_type,
            "whitelist_name": whitelist_name,
            "whitelist_type": whitelist_type,
        }
        if attack_path_asset_list is not None:
            self._values["attack_path_asset_list"] = attack_path_asset_list
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def path_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pathName: The whitelist path name.'''
        result = self._values.get("path_name")
        assert result is not None, "Required property 'path_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def path_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pathType: The whitelist path type.'''
        result = self._values.get("path_type")
        assert result is not None, "Required property 'path_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def whitelist_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property whitelistName: The whitelist name.'''
        result = self._values.get("whitelist_name")
        assert result is not None, "Required property 'whitelist_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def whitelist_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property whitelistType: The whitelist type.

        Values:

        - ALL_ASSET: All assets.
        - PART_ASSET: Partial assets.
        '''
        result = self._values.get("whitelist_type")
        assert result is not None, "Required property 'whitelist_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def attack_path_asset_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathWhitelist.AttackPathAssetListProperty"]]]]:
        '''Property attackPathAssetList: List of attack path assets.'''
        result = self._values.get("attack_path_asset_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathWhitelist.AttackPathAssetListProperty"]]]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: Remark information.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AttackPathWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.BaselineStrategyProps",
    jsii_struct_bases=[],
    name_mapping={
        "baseline_strategy_name": "baselineStrategyName",
        "custom_type": "customType",
        "cycle_days": "cycleDays",
        "end_time": "endTime",
        "risk_sub_type_name": "riskSubTypeName",
        "start_time": "startTime",
        "target_type": "targetType",
    },
)
class BaselineStrategyProps:
    def __init__(
        self,
        *,
        baseline_strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        custom_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cycle_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        risk_sub_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        start_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``BaselineStrategy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy

        :param baseline_strategy_name: Property baselineStrategyName: The new name of the baseline check policy.
        :param custom_type: Property customType: The type of the baseline check policy. Valid values: - **custom**: a custom baseline check policy - **common**: a standard baseline check policy.
        :param cycle_days: Property cycleDays: The new interval of the baseline check. Valid values: - **1**: every 2 days - **3**: every 4 days - **7**: every 8 days - **30**: every 31 days.
        :param end_time: Property endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
        :param risk_sub_type_name: Property riskSubTypeName: The subtype of the baselines.
        :param start_time: Property startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
        :param target_type: Property targetType: The method that is used to apply the baseline check policy. Valid values: - **groupId**: asset groups - **uuid**: assets.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7b1ca10744798d50c6e2109e186dbfff98f07551b730e133a2a0f98ef0bef83)
            check_type(argname="argument baseline_strategy_name", value=baseline_strategy_name, expected_type=type_hints["baseline_strategy_name"])
            check_type(argname="argument custom_type", value=custom_type, expected_type=type_hints["custom_type"])
            check_type(argname="argument cycle_days", value=cycle_days, expected_type=type_hints["cycle_days"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument risk_sub_type_name", value=risk_sub_type_name, expected_type=type_hints["risk_sub_type_name"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "baseline_strategy_name": baseline_strategy_name,
            "custom_type": custom_type,
            "cycle_days": cycle_days,
            "end_time": end_time,
            "risk_sub_type_name": risk_sub_type_name,
            "start_time": start_time,
            "target_type": target_type,
        }

    @builtins.property
    def baseline_strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property baselineStrategyName: The new name of the baseline check policy.'''
        result = self._values.get("baseline_strategy_name")
        assert result is not None, "Required property 'baseline_strategy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def custom_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property customType: The type of the baseline check policy.

        Valid values:

        - **custom**: a custom baseline check policy
        - **common**: a standard baseline check policy.
        '''
        result = self._values.get("custom_type")
        assert result is not None, "Required property 'custom_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cycle_days(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cycleDays: The new interval of the baseline check.

        Valid values:

        - **1**: every 2 days
        - **3**: every 4 days
        - **7**: every 8 days
        - **30**: every 31 days.
        '''
        result = self._values.get("cycle_days")
        assert result is not None, "Required property 'cycle_days' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endTime: The time when the baseline check based on the baseline check policy ends.

        Specify the time in the hh:mm:ss format.
        '''
        result = self._values.get("end_time")
        assert result is not None, "Required property 'end_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def risk_sub_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property riskSubTypeName: The subtype of the baselines.'''
        result = self._values.get("risk_sub_type_name")
        assert result is not None, "Required property 'risk_sub_type_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property startTime: The time when the baseline check based on the baseline check policy starts.

        Specify the time in the hh:mm:ss format.
        '''
        result = self._values.get("start_time")
        assert result is not None, "Required property 'start_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetType: The method that is used to apply the baseline check policy.

        Valid values:

        - **groupId**: asset groups
        - **uuid**: assets.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BaselineStrategyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.ClientFileProtectProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_ops": "fileOps",
        "file_paths": "filePaths",
        "proc_paths": "procPaths",
        "rule_action": "ruleAction",
        "rule_name": "ruleName",
        "alert_level": "alertLevel",
        "platform": "platform",
        "status": "status",
        "switch_id": "switchId",
    },
)
class ClientFileProtectProps:
    def __init__(
        self,
        *,
        file_ops: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        file_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        proc_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        rule_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alert_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ClientFileProtect``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect

        :param file_ops: Property fileOps: The operations that you want to perform on the files.
        :param file_paths: Property filePaths: The paths to the monitored files. Wildcard characters are supported.
        :param proc_paths: Property procPaths: The paths to the monitored processes.
        :param rule_action: Property ruleAction: The handling method of the rule. Valid values: - pass: allow - alert.
        :param rule_name: Property ruleName: The name of the rule.
        :param alert_level: Property alertLevel: The severity of alerts. Valid values: - 0: does not generate alerts - 1: sends notifications - 2: suspicious - 3: high-risk.
        :param platform: Property platform: The type of the operating system. Valid values: - **windows**: Windows - **linux**: Linux.
        :param status: Property status: Rule status. 1: Enabled 0: Not enabled
        :param switch_id: Property switchId: The switch ID of the rule.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ac2c24d3c9270dce05052e3242852df733f156c67607be87323ec1dc444a05a)
            check_type(argname="argument file_ops", value=file_ops, expected_type=type_hints["file_ops"])
            check_type(argname="argument file_paths", value=file_paths, expected_type=type_hints["file_paths"])
            check_type(argname="argument proc_paths", value=proc_paths, expected_type=type_hints["proc_paths"])
            check_type(argname="argument rule_action", value=rule_action, expected_type=type_hints["rule_action"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument alert_level", value=alert_level, expected_type=type_hints["alert_level"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument switch_id", value=switch_id, expected_type=type_hints["switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_ops": file_ops,
            "file_paths": file_paths,
            "proc_paths": proc_paths,
            "rule_action": rule_action,
            "rule_name": rule_name,
        }
        if alert_level is not None:
            self._values["alert_level"] = alert_level
        if platform is not None:
            self._values["platform"] = platform
        if status is not None:
            self._values["status"] = status
        if switch_id is not None:
            self._values["switch_id"] = switch_id

    @builtins.property
    def file_ops(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property fileOps: The operations that you want to perform on the files.'''
        result = self._values.get("file_ops")
        assert result is not None, "Required property 'file_ops' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def file_paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property filePaths: The paths to the monitored files.

        Wildcard characters are supported.
        '''
        result = self._values.get("file_paths")
        assert result is not None, "Required property 'file_paths' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def proc_paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property procPaths: The paths to the monitored processes.'''
        result = self._values.get("proc_paths")
        assert result is not None, "Required property 'proc_paths' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleAction: The handling method of the rule.

        Valid values:

        - pass: allow
        - alert.
        '''
        result = self._values.get("rule_action")
        assert result is not None, "Required property 'rule_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alert_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alertLevel: The severity of alerts.

        Valid values:

        - 0: does not generate alerts
        - 1: sends notifications
        - 2: suspicious
        - 3: high-risk.
        '''
        result = self._values.get("alert_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property platform: The type of the operating system.

        Valid values:

        - **windows**: Windows
        - **linux**: Linux.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: Rule status.

        1: Enabled
        0: Not enabled
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property switchId: The switch ID of the rule.'''
        result = self._values.get("switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClientFileProtectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.ContainerDefenseRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "rule_action": "ruleAction",
        "rule_id": "ruleId",
        "rule_name": "ruleName",
        "rule_switch": "ruleSwitch",
        "rule_type": "ruleType",
        "scope": "scope",
        "whitelist": "whitelist",
        "whitelist_hash": "whitelistHash",
    },
)
class ContainerDefenseRuleProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_action: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_switch: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scope: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerDefenseRule.ScopeProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        whitelist: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerDefenseRule.WhitelistProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        whitelist_hash: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ContainerDefenseRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule

        :param description: Property description: Rule description.
        :param rule_action: Property ruleAction: The action that is performed when the rule is hit. Valid values: - **1**: alert - **2**: block.
        :param rule_id: Property ruleId: Rule Id.
        :param rule_name: Property ruleName: The name of the rule.
        :param rule_switch: Property ruleSwitch: The switch of the rule. Valid values: - 0: off. - 1: on.
        :param rule_type: Property ruleType: The rule type. Value: - 2: User Rules
        :param scope: Property scope: Rule scope.
        :param whitelist: Property whitelist: The whitelist of rule.
        :param whitelist_hash: Property whitelistHash: The whitelist Hash.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__037cfa946bd372d33fca8cf4c5c2f19f58ea935f7befad8e91404992286c4871)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument rule_action", value=rule_action, expected_type=type_hints["rule_action"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument rule_switch", value=rule_switch, expected_type=type_hints["rule_switch"])
            check_type(argname="argument rule_type", value=rule_type, expected_type=type_hints["rule_type"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument whitelist", value=whitelist, expected_type=type_hints["whitelist"])
            check_type(argname="argument whitelist_hash", value=whitelist_hash, expected_type=type_hints["whitelist_hash"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if rule_action is not None:
            self._values["rule_action"] = rule_action
        if rule_id is not None:
            self._values["rule_id"] = rule_id
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if rule_switch is not None:
            self._values["rule_switch"] = rule_switch
        if rule_type is not None:
            self._values["rule_type"] = rule_type
        if scope is not None:
            self._values["scope"] = scope
        if whitelist is not None:
            self._values["whitelist"] = whitelist
        if whitelist_hash is not None:
            self._values["whitelist_hash"] = whitelist_hash

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Rule description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleAction: The action that is performed when the rule is hit.

        Valid values:

        - **1**: alert
        - **2**: block.
        '''
        result = self._values.get("rule_action")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleId: Rule Id.'''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleName: The name of the rule.'''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_switch(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleSwitch: The switch of the rule.

        Valid values:

        - 0: off.
        - 1: on.
        '''
        result = self._values.get("rule_switch")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleType: The rule type.

        Value:

        - 2: User Rules
        '''
        result = self._values.get("rule_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scope(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.ScopeProperty"]]]]:
        '''Property scope: Rule scope.'''
        result = self._values.get("scope")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.ScopeProperty"]]]], result)

    @builtins.property
    def whitelist(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.WhitelistProperty"]]:
        '''Property whitelist: The whitelist of rule.'''
        result = self._values.get("whitelist")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.WhitelistProperty"]], result)

    @builtins.property
    def whitelist_hash(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property whitelistHash: The whitelist Hash.'''
        result = self._values.get("whitelist_hash")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ContainerDefenseRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.CustomCheckItemProps",
    jsii_struct_bases=[],
    name_mapping={
        "check_rule": "checkRule",
        "check_show_name": "checkShowName",
        "instance_sub_type": "instanceSubType",
        "instance_type": "instanceType",
        "risk_level": "riskLevel",
        "section_ids": "sectionIds",
        "status": "status",
        "vendor": "vendor",
        "assist_info": "assistInfo",
        "description": "description",
        "remark": "remark",
        "solution": "solution",
    },
)
class CustomCheckItemProps:
    def __init__(
        self,
        *,
        check_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        check_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        risk_level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        section_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vendor: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        assist_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomCheckItem.AssistInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomCheckItem.DescriptionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        solution: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomCheckItem.SolutionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``CustomCheckItem``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem

        :param check_rule: Property checkRule: Check Item Check Rules.
        :param check_show_name: Property checkShowName: Check item display name.
        :param instance_sub_type: Property instanceSubType: Asset subtype to which the check item belongs.
        :param instance_type: Property instanceType: Asset type to which the check item belongs.
        :param risk_level: Property riskLevel: Risk level of inspection items.
        :param section_ids: Property sectionIds: CHECK SECTION OF INSPECTIONS.
        :param status: Property status: Check item status. Values: EDIT: Editing in progress RELEASE: Published
        :param vendor: Property vendor: Vendor to which the item belongs.
        :param assist_info: Property assistInfo: Check Item Description Help Information.
        :param description: Property description: Check item description information.
        :param remark: Property remark: Remarks.
        :param solution: Property solution: Check Item Solution.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ee070bbc594874bdeb63d419d1d21d7309974263a9a67d190d24f2d6dc881e5)
            check_type(argname="argument check_rule", value=check_rule, expected_type=type_hints["check_rule"])
            check_type(argname="argument check_show_name", value=check_show_name, expected_type=type_hints["check_show_name"])
            check_type(argname="argument instance_sub_type", value=instance_sub_type, expected_type=type_hints["instance_sub_type"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument risk_level", value=risk_level, expected_type=type_hints["risk_level"])
            check_type(argname="argument section_ids", value=section_ids, expected_type=type_hints["section_ids"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vendor", value=vendor, expected_type=type_hints["vendor"])
            check_type(argname="argument assist_info", value=assist_info, expected_type=type_hints["assist_info"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument solution", value=solution, expected_type=type_hints["solution"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "check_rule": check_rule,
            "check_show_name": check_show_name,
            "instance_sub_type": instance_sub_type,
            "instance_type": instance_type,
            "risk_level": risk_level,
            "section_ids": section_ids,
            "status": status,
            "vendor": vendor,
        }
        if assist_info is not None:
            self._values["assist_info"] = assist_info
        if description is not None:
            self._values["description"] = description
        if remark is not None:
            self._values["remark"] = remark
        if solution is not None:
            self._values["solution"] = solution

    @builtins.property
    def check_rule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property checkRule: Check Item Check Rules.'''
        result = self._values.get("check_rule")
        assert result is not None, "Required property 'check_rule' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def check_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property checkShowName: Check item display name.'''
        result = self._values.get("check_show_name")
        assert result is not None, "Required property 'check_show_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceSubType: Asset subtype to which the check item belongs.'''
        result = self._values.get("instance_sub_type")
        assert result is not None, "Required property 'instance_sub_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceType: Asset type to which the check item belongs.'''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def risk_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property riskLevel: Risk level of inspection items.'''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def section_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property sectionIds: CHECK SECTION OF INSPECTIONS.'''
        result = self._values.get("section_ids")
        assert result is not None, "Required property 'section_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def status(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property status: Check item status.

        Values:
        EDIT: Editing in progress
        RELEASE: Published
        '''
        result = self._values.get("status")
        assert result is not None, "Required property 'status' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vendor(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vendor: Vendor to which the item belongs.'''
        result = self._values.get("vendor")
        assert result is not None, "Required property 'vendor' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def assist_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.AssistInfoProperty"]]:
        '''Property assistInfo: Check Item Description Help Information.'''
        result = self._values.get("assist_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.AssistInfoProperty"]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.DescriptionProperty"]]:
        '''Property description: Check item description information.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.DescriptionProperty"]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: Remarks.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def solution(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.SolutionProperty"]]:
        '''Property solution: Check Item Solution.'''
        result = self._values.get("solution")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.SolutionProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomCheckItemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_show_name": "policyShowName",
        "policy_type": "policyType",
        "dependent_policy_id": "dependentPolicyId",
        "type": "type",
    },
)
class CustomCheckStandardPolicyProps:
    def __init__(
        self,
        *,
        policy_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dependent_policy_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CustomCheckStandardPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy

        :param policy_show_name: Property policyShowName: The name of the custom policy.
        :param policy_type: Property policyType: The category type of the custom check policy: - STANDARD: standard. - REQUIREMENT: requirement. - SECTION: section.
        :param dependent_policy_id: Property dependentPolicyId: The ID of the parent policy. (Dependency order from low to high: Section -> Requirement -> Standard)
        :param type: Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM). - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM). - RISK: Security Risk. - COMPLIANCE: Compliance Risk.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__732f0b9dc9a3fc14ebc73817147f0039d64756556a9ca8319e0f4eb10388b23b)
            check_type(argname="argument policy_show_name", value=policy_show_name, expected_type=type_hints["policy_show_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument dependent_policy_id", value=dependent_policy_id, expected_type=type_hints["dependent_policy_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_show_name": policy_show_name,
            "policy_type": policy_type,
        }
        if dependent_policy_id is not None:
            self._values["dependent_policy_id"] = dependent_policy_id
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def policy_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyShowName: The name of the custom policy.'''
        result = self._values.get("policy_show_name")
        assert result is not None, "Required property 'policy_show_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: The category type of the custom check policy: - STANDARD: standard.

        - REQUIREMENT: requirement.
        - SECTION: section.
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dependent_policy_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dependentPolicyId: The ID of the parent policy.

        (Dependency order from low to high: Section -> Requirement -> Standard)
        '''
        result = self._values.get("dependent_policy_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).

        - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
        - RISK: Security Risk.
        - COMPLIANCE: Compliance Risk.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomCheckStandardPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.CycleTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "enable": "enable",
        "first_date_str": "firstDateStr",
        "interval_period": "intervalPeriod",
        "period_unit": "periodUnit",
        "target_end_time": "targetEndTime",
        "target_start_time": "targetStartTime",
        "task_name": "taskName",
        "task_type": "taskType",
        "param": "param",
        "source": "source",
    },
)
class CycleTaskProps:
    def __init__(
        self,
        *,
        enable: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        first_date_str: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        interval_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_end_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        target_start_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        param: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CycleTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask

        :param enable: Property enable: Specifies whether to enable the task. Valid values: - **1**: yes - **0**: no.
        :param first_date_str: Property firstDateStr: The first time when the task is performed.
        :param interval_period: Property intervalPeriod: The interval at which the task is run.
        :param period_unit: Property periodUnit: The unit of the scan interval. Valid values: - **day** - **hour**.
        :param target_end_time: Property targetEndTime: The time when the task ends. Unit: hours.
        :param target_start_time: Property targetStartTime: The time when the task is started. Unit: hours.
        :param task_name: Property taskName: The task name.
        :param task_type: Property taskType: The type of the task. Valid values: - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task - **IMAGE_SCAN**: image scan task - **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
        :param param: Property param: The additional information.
        :param source: Property source: The additional source for the task.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__296bc6966836b6c0aaef358302121a63d74c7b7d5c9399969cb3e539a8355c18)
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument first_date_str", value=first_date_str, expected_type=type_hints["first_date_str"])
            check_type(argname="argument interval_period", value=interval_period, expected_type=type_hints["interval_period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument target_end_time", value=target_end_time, expected_type=type_hints["target_end_time"])
            check_type(argname="argument target_start_time", value=target_start_time, expected_type=type_hints["target_start_time"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument task_type", value=task_type, expected_type=type_hints["task_type"])
            check_type(argname="argument param", value=param, expected_type=type_hints["param"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "enable": enable,
            "first_date_str": first_date_str,
            "interval_period": interval_period,
            "period_unit": period_unit,
            "target_end_time": target_end_time,
            "target_start_time": target_start_time,
            "task_name": task_name,
            "task_type": task_type,
        }
        if param is not None:
            self._values["param"] = param
        if source is not None:
            self._values["source"] = source

    @builtins.property
    def enable(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property enable: Specifies whether to enable the task.

        Valid values:

        - **1**: yes
        - **0**: no.
        '''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def first_date_str(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property firstDateStr: The first time when the task is performed.'''
        result = self._values.get("first_date_str")
        assert result is not None, "Required property 'first_date_str' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def interval_period(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property intervalPeriod: The interval at which the task is run.'''
        result = self._values.get("interval_period")
        assert result is not None, "Required property 'interval_period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property periodUnit: The unit of the scan interval.

        Valid values:

        - **day**
        - **hour**.
        '''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_end_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetEndTime: The time when the task ends.

        Unit: hours.
        '''
        result = self._values.get("target_end_time")
        assert result is not None, "Required property 'target_end_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_start_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetStartTime: The time when the task is started.

        Unit: hours.
        '''
        result = self._values.get("target_start_time")
        assert result is not None, "Required property 'target_start_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskName: The task name.'''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskType: The type of the task.

        Valid values:

        - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
        - **IMAGE_SCAN**: image scan task
        - **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
        '''
        result = self._values.get("task_type")
        assert result is not None, "Required property 'task_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def param(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property param: The additional information.'''
        result = self._values.get("param")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property source: The additional source for the task.'''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CycleTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.GroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_id": "groupId", "group_name": "groupName"},
)
class GroupProps:
    def __init__(
        self,
        *,
        group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Group``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group

        :param group_id: Property groupId: The ID of the server group for which you want to add to or remove servers. .. epigraph:: To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
        :param group_name: Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server. .. epigraph:: To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e00e127e373cfa806915d877a7d6843a176cc877f211156948cfa2b118f7b3d)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_id is not None:
            self._values["group_id"] = group_id
        if group_name is not None:
            self._values["group_name"] = group_name

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: The ID of the server group for which you want to add to or remove servers.

        .. epigraph::

           To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.

        .. epigraph::

           To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneyPotProps",
    jsii_struct_bases=[],
    name_mapping={
        "honeypot_image_id": "honeypotImageId",
        "honeypot_image_name": "honeypotImageName",
        "honeypot_name": "honeypotName",
        "node_id": "nodeId",
        "meta": "meta",
    },
)
class HoneyPotProps:
    def __init__(
        self,
        *,
        honeypot_image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        honeypot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``HoneyPot``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot

        :param honeypot_image_id: Property honeypotImageId: The ID of the honeypot image. .. epigraph:: You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the IDs of images from the **HoneypotImageId** response parameter.
        :param honeypot_image_name: Property honeypotImageName: The name of the honeypot image. .. epigraph:: You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the names of images from the **HoneypotImageName** response parameter.
        :param honeypot_name: Property honeypotName: The custom name of the honeypot.
        :param node_id: Property nodeId: The ID of the management node. .. epigraph:: You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        :param meta: Property meta: Honeypot custom configuration. JSON format. Contains the following fields: - **trojan_git**:Git counterplan. Value: - **zip**:Git source package - **web**:.git directory leak - **close**: close - **trojan_git_addr**:Git anti-control connection address - **Trojan_git.zip**:Git anti-Trojan package - **burp**:Burp counter. Value: - **open**: On - **close**: close - **portrait_option**: traceability configuration. Value: - **false**: Disabled - **true**: Enable.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c673c3af46f52221ac38861d3a1a92ebe1720a330de13d38c940b1a923a2812f)
            check_type(argname="argument honeypot_image_id", value=honeypot_image_id, expected_type=type_hints["honeypot_image_id"])
            check_type(argname="argument honeypot_image_name", value=honeypot_image_name, expected_type=type_hints["honeypot_image_name"])
            check_type(argname="argument honeypot_name", value=honeypot_name, expected_type=type_hints["honeypot_name"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument meta", value=meta, expected_type=type_hints["meta"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "honeypot_image_id": honeypot_image_id,
            "honeypot_image_name": honeypot_image_name,
            "honeypot_name": honeypot_name,
            "node_id": node_id,
        }
        if meta is not None:
            self._values["meta"] = meta

    @builtins.property
    def honeypot_image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property honeypotImageId: The ID of the honeypot image.

        .. epigraph::

           You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the IDs of images from the **HoneypotImageId** response parameter.
        '''
        result = self._values.get("honeypot_image_id")
        assert result is not None, "Required property 'honeypot_image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property honeypotImageName: The name of the honeypot image.

        .. epigraph::

           You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the names of images from the **HoneypotImageName** response parameter.
        '''
        result = self._values.get("honeypot_image_name")
        assert result is not None, "Required property 'honeypot_image_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def honeypot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property honeypotName: The custom name of the honeypot.'''
        result = self._values.get("honeypot_name")
        assert result is not None, "Required property 'honeypot_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeId: The ID of the management node.

        .. epigraph::

           You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        '''
        result = self._values.get("node_id")
        assert result is not None, "Required property 'node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def meta(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property meta: Honeypot custom configuration.

        JSON format. Contains the following fields:

        - **trojan_git**:Git counterplan. Value:
        - **zip**:Git source package
        - **web**:.git directory leak
        - **close**: close
        - **trojan_git_addr**:Git anti-control connection address
        - **Trojan_git.zip**:Git anti-Trojan package
        - **burp**:Burp counter. Value:
        - **open**: On
        - **close**: close
        - **portrait_option**: traceability configuration. Value:
        - **false**: Disabled
        - **true**: Enable.
        '''
        result = self._values.get("meta")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HoneyPotProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneypotNodeProps",
    jsii_struct_bases=[],
    name_mapping={
        "node_name": "nodeName",
        "allow_honeypot_access_internet": "allowHoneypotAccessInternet",
        "available_probe_num": "availableProbeNum",
        "security_group_probe_ip_list": "securityGroupProbeIpList",
    },
)
class HoneypotNodeProps:
    def __init__(
        self,
        *,
        node_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_honeypot_access_internet: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        available_probe_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_probe_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``HoneypotNode``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode

        :param node_name: Property nodeName: The name of the management node.
        :param allow_honeypot_access_internet: Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values: - **true**: allows honeypots to access the Internet. - **false**: does not allow honeypots to access the Internet.
        :param available_probe_num: Property availableProbeNum: The number of available probes.
        :param security_group_probe_ip_list: Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb5e5ea59a31a874da39fc9ec480347b49f64db2d996471bdc8092294ceccd53)
            check_type(argname="argument node_name", value=node_name, expected_type=type_hints["node_name"])
            check_type(argname="argument allow_honeypot_access_internet", value=allow_honeypot_access_internet, expected_type=type_hints["allow_honeypot_access_internet"])
            check_type(argname="argument available_probe_num", value=available_probe_num, expected_type=type_hints["available_probe_num"])
            check_type(argname="argument security_group_probe_ip_list", value=security_group_probe_ip_list, expected_type=type_hints["security_group_probe_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "node_name": node_name,
        }
        if allow_honeypot_access_internet is not None:
            self._values["allow_honeypot_access_internet"] = allow_honeypot_access_internet
        if available_probe_num is not None:
            self._values["available_probe_num"] = available_probe_num
        if security_group_probe_ip_list is not None:
            self._values["security_group_probe_ip_list"] = security_group_probe_ip_list

    @builtins.property
    def node_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeName: The name of the management node.'''
        result = self._values.get("node_name")
        assert result is not None, "Required property 'node_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_honeypot_access_internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.

        Valid values:

        - **true**: allows honeypots to access the Internet.
        - **false**: does not allow honeypots to access the Internet.
        '''
        result = self._values.get("allow_honeypot_access_internet")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def available_probe_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property availableProbeNum: The number of available probes.'''
        result = self._values.get("available_probe_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_probe_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.'''
        result = self._values.get("security_group_probe_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HoneypotNodeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneypotPresetProps",
    jsii_struct_bases=[],
    name_mapping={
        "honeypot_image_name": "honeypotImageName",
        "meta": "meta",
        "node_id": "nodeId",
        "preset_name": "presetName",
    },
)
class HoneypotPresetProps:
    def __init__(
        self,
        *,
        honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        meta: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosHoneypotPreset.MetaProperty", typing.Dict[builtins.str, typing.Any]]],
        node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``HoneypotPreset``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset

        :param honeypot_image_name: Property honeypotImageName: The name of the honeypot image.
        :param meta: Property meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields: - **PortraitOption**: Social Source Tracing - **Burp**: Burp-specific Defense - **TrojanGit**: Git-specific Defense.
        :param node_id: Property nodeId: The ID of the management node.
        :param preset_name: Property presetName: The custom name of the honeypot template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__004ed1b77b94c2eba5e9afb6cb60ed0176ed44edaa3d6a234d168fbc281d5f65)
            check_type(argname="argument honeypot_image_name", value=honeypot_image_name, expected_type=type_hints["honeypot_image_name"])
            check_type(argname="argument meta", value=meta, expected_type=type_hints["meta"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument preset_name", value=preset_name, expected_type=type_hints["preset_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "honeypot_image_name": honeypot_image_name,
            "meta": meta,
            "node_id": node_id,
            "preset_name": preset_name,
        }

    @builtins.property
    def honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property honeypotImageName: The name of the honeypot image.'''
        result = self._values.get("honeypot_image_name")
        assert result is not None, "Required property 'honeypot_image_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def meta(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotPreset.MetaProperty"]:
        '''Property meta: The custom configurations of the honeypot template.

        The value is a JSON string that contains the following fields:

        - **PortraitOption**: Social Source Tracing
        - **Burp**: Burp-specific Defense
        - **TrojanGit**: Git-specific Defense.
        '''
        result = self._values.get("meta")
        assert result is not None, "Required property 'meta' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotPreset.MetaProperty"], result)

    @builtins.property
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeId: The ID of the management node.'''
        result = self._values.get("node_id")
        assert result is not None, "Required property 'node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property presetName: The custom name of the honeypot template.'''
        result = self._values.get("preset_name")
        assert result is not None, "Required property 'preset_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HoneypotPresetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneypotProbeProps",
    jsii_struct_bases=[],
    name_mapping={
        "control_node_id": "controlNodeId",
        "display_name": "displayName",
        "probe_type": "probeType",
        "arp": "arp",
        "business_group_id": "businessGroupId",
        "honeypot_bind_list": "honeypotBindList",
        "ping": "ping",
        "probe_version": "probeVersion",
        "proxy_ip": "proxyIp",
        "service_ip_list": "serviceIpList",
        "uuid": "uuid",
        "vpc_id": "vpcId",
    },
)
class HoneypotProbeProps:
    def __init__(
        self,
        *,
        control_node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        probe_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arp: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        business_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosHoneypotProbe.HoneypotBindListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ping: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        probe_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``HoneypotProbe``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe

        :param control_node_id: Property controlNodeId: The ID of the management node. .. epigraph:: You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        :param display_name: Property displayName: The name of the probe.
        :param probe_type: Property probeType: The type of the probe. Valid values: - **host_probe**: host probe - **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
        :param arp: Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values: - **true**: yes - **false**: no.
        :param business_group_id: Property businessGroupId: Business grouping.
        :param honeypot_bind_list: Property honeypotBindList: The configuration of the probe.
        :param ping: Property ping: Specifies whether to enable ping scan. Valid values: - **true**: yes - **false**: no.
        :param probe_version: Property probeVersion: The version of the probe.
        :param proxy_ip: Property proxyIp: The IP address of the proxy.
        :param service_ip_list: Property serviceIpList: Listen to the IP address list.
        :param uuid: Property uuid: The UUID of the instance. .. epigraph:: If **ProbeType** is set to **host_probe**, this parameter is required.
        :param vpc_id: Property vpcId: The ID of the VPC. .. epigraph:: **ProbeType** is **vpc_Black _hole_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2031e2b6e7f161aa046ccc30b1492c555d44a26b2b20cde5594a6d9fa121eabd)
            check_type(argname="argument control_node_id", value=control_node_id, expected_type=type_hints["control_node_id"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument probe_type", value=probe_type, expected_type=type_hints["probe_type"])
            check_type(argname="argument arp", value=arp, expected_type=type_hints["arp"])
            check_type(argname="argument business_group_id", value=business_group_id, expected_type=type_hints["business_group_id"])
            check_type(argname="argument honeypot_bind_list", value=honeypot_bind_list, expected_type=type_hints["honeypot_bind_list"])
            check_type(argname="argument ping", value=ping, expected_type=type_hints["ping"])
            check_type(argname="argument probe_version", value=probe_version, expected_type=type_hints["probe_version"])
            check_type(argname="argument proxy_ip", value=proxy_ip, expected_type=type_hints["proxy_ip"])
            check_type(argname="argument service_ip_list", value=service_ip_list, expected_type=type_hints["service_ip_list"])
            check_type(argname="argument uuid", value=uuid, expected_type=type_hints["uuid"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "control_node_id": control_node_id,
            "display_name": display_name,
            "probe_type": probe_type,
        }
        if arp is not None:
            self._values["arp"] = arp
        if business_group_id is not None:
            self._values["business_group_id"] = business_group_id
        if honeypot_bind_list is not None:
            self._values["honeypot_bind_list"] = honeypot_bind_list
        if ping is not None:
            self._values["ping"] = ping
        if probe_version is not None:
            self._values["probe_version"] = probe_version
        if proxy_ip is not None:
            self._values["proxy_ip"] = proxy_ip
        if service_ip_list is not None:
            self._values["service_ip_list"] = service_ip_list
        if uuid is not None:
            self._values["uuid"] = uuid
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def control_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property controlNodeId: The ID of the management node.

        .. epigraph::

           You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        '''
        result = self._values.get("control_node_id")
        assert result is not None, "Required property 'control_node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: The name of the probe.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def probe_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property probeType: The type of the probe.

        Valid values:

        - **host_probe**: host probe
        - **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
        '''
        result = self._values.get("probe_type")
        assert result is not None, "Required property 'probe_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arp(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.

        Valid values:

        - **true**: yes
        - **false**: no.
        '''
        result = self._values.get("arp")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def business_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property businessGroupId: Business grouping.'''
        result = self._values.get("business_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot_bind_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.HoneypotBindListProperty"]]]]:
        '''Property honeypotBindList: The configuration of the probe.'''
        result = self._values.get("honeypot_bind_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.HoneypotBindListProperty"]]]], result)

    @builtins.property
    def ping(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ping: Specifies whether to enable ping scan.

        Valid values:

        - **true**: yes
        - **false**: no.
        '''
        result = self._values.get("ping")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def probe_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property probeVersion: The version of the probe.'''
        result = self._values.get("probe_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyIp: The IP address of the proxy.'''
        result = self._values.get("proxy_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property serviceIpList: Listen to the IP address list.'''
        result = self._values.get("service_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property uuid: The UUID of the instance.

        .. epigraph::

           If **ProbeType** is set to **host_probe**, this parameter is required.
        '''
        result = self._values.get("uuid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC.

        .. epigraph::

           **ProbeType** is **vpc_Black _hole_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HoneypotProbeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IAntiBruteForceRule")
class IAntiBruteForceRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AntiBruteForceRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleId")
    def attr_anti_brute_force_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AntiBruteForceRuleId: The ID of the defense rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AntiBruteForceRuleName: The name of the defense rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Span: The period of time during which logon failures from an account are measured.

        Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UuidList: The UUIDs of the server to which the defense rule is applied.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AntiBruteForceRuleProps:
        ...


class _IAntiBruteForceRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AntiBruteForceRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IAntiBruteForceRule"

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleId")
    def attr_anti_brute_force_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AntiBruteForceRuleId: The ID of the defense rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAntiBruteForceRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AntiBruteForceRuleName: The name of the defense rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAntiBruteForceRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefaultRule"))

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFailCount"))

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrForbiddenTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Span: The period of time during which logon failures from an account are measured.

        Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpan"))

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UuidList: The UUIDs of the server to which the defense rule is applied.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUuidList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AntiBruteForceRuleProps:
        return typing.cast(AntiBruteForceRuleProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAntiBruteForceRule).__jsii_proxy_class__ = lambda : _IAntiBruteForceRuleProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-threatdetection.IAttackPathSensitiveAssetConfig"
)
class IAttackPathSensitiveAssetConfig(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``AttackPathSensitiveAssetConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathAssetList: The attack path sensitive asset configuration list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathSensitiveAssetConfigId")
    def attr_attack_path_sensitive_asset_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AttackPathSensitiveAssetConfigProps:
        ...


class _IAttackPathSensitiveAssetConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AttackPathSensitiveAssetConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IAttackPathSensitiveAssetConfig"

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathAssetList: The attack path sensitive asset configuration list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathAssetList"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathSensitiveAssetConfigId")
    def attr_attack_path_sensitive_asset_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathSensitiveAssetConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AttackPathSensitiveAssetConfigProps:
        return typing.cast(AttackPathSensitiveAssetConfigProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAttackPathSensitiveAssetConfig).__jsii_proxy_class__ = lambda : _IAttackPathSensitiveAssetConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IAttackPathWhitelist")
class IAttackPathWhitelist(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``AttackPathWhitelist``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathAssetList: List of attack path assets.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathWhitelistId")
    def attr_attack_path_whitelist_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathWhitelistId: The attack path whitelist ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPathName")
    def attr_path_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PathName: The whitelist path name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPathType")
    def attr_path_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PathType: The whitelist path type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remark: Remark information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistName")
    def attr_whitelist_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistName: The whitelist name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistType")
    def attr_whitelist_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistType: The whitelist type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AttackPathWhitelistProps:
        ...


class _IAttackPathWhitelistProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AttackPathWhitelist``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IAttackPathWhitelist"

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathAssetList: List of attack path assets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathAssetList"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathWhitelistId")
    def attr_attack_path_whitelist_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathWhitelistId: The attack path whitelist ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathWhitelistId"))

    @builtins.property
    @jsii.member(jsii_name="attrPathName")
    def attr_path_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PathName: The whitelist path name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPathName"))

    @builtins.property
    @jsii.member(jsii_name="attrPathType")
    def attr_path_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PathType: The whitelist path type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPathType"))

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remark: Remark information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemark"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistName")
    def attr_whitelist_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistName: The whitelist name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelistName"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistType")
    def attr_whitelist_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistType: The whitelist type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelistType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AttackPathWhitelistProps:
        return typing.cast(AttackPathWhitelistProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAttackPathWhitelist).__jsii_proxy_class__ = lambda : _IAttackPathWhitelistProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IBaselineStrategy")
class IBaselineStrategy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``BaselineStrategy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyId")
    def attr_baseline_strategy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BaselineStrategyId: The ID of the baseline check policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyName")
    def attr_baseline_strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BaselineStrategyName: The new name of the baseline check policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCustomType")
    def attr_custom_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomType: The type of the baseline check policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCycleDays")
    def attr_cycle_days(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CycleDays: The new interval of the baseline check.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the baseline check based on the baseline check policy ends.

        Specify the time in the hh:mm:ss format.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRiskSubTypeName")
    def attr_risk_sub_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RiskSubTypeName: The subtype of the baselines.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStartTime")
    def attr_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartTime: The time when the baseline check based on the baseline check policy starts.

        Specify the time in the hh:mm:ss format.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetType: The method that is used to apply the baseline check policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BaselineStrategyProps:
        ...


class _IBaselineStrategyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``BaselineStrategy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IBaselineStrategy"

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyId")
    def attr_baseline_strategy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BaselineStrategyId: The ID of the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBaselineStrategyId"))

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyName")
    def attr_baseline_strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BaselineStrategyName: The new name of the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBaselineStrategyName"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomType")
    def attr_custom_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomType: The type of the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomType"))

    @builtins.property
    @jsii.member(jsii_name="attrCycleDays")
    def attr_cycle_days(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CycleDays: The new interval of the baseline check.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCycleDays"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the baseline check based on the baseline check policy ends.

        Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskSubTypeName")
    def attr_risk_sub_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RiskSubTypeName: The subtype of the baselines.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRiskSubTypeName"))

    @builtins.property
    @jsii.member(jsii_name="attrStartTime")
    def attr_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartTime: The time when the baseline check based on the baseline check policy starts.

        Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetType: The method that is used to apply the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BaselineStrategyProps:
        return typing.cast(BaselineStrategyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBaselineStrategy).__jsii_proxy_class__ = lambda : _IBaselineStrategyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IClientFileProtect")
class IClientFileProtect(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ClientFileProtect``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAlertLevel")
    def attr_alert_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AlertLevel: The severity of alerts.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFileOps")
    def attr_file_ops(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FileOps: The operations that you want to perform on the files.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFilePaths")
    def attr_file_paths(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FilePaths: The paths to the monitored files.

        Wildcard characters are supported.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Platform: The type of the operating system.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProcPaths")
    def attr_proc_paths(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProcPaths: The paths to the monitored processes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleAction: The handling method of the rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: The ID of the rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSwitchId")
    def attr_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SwitchId: The switch ID of the rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClientFileProtectProps:
        ...


class _IClientFileProtectProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ClientFileProtect``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IClientFileProtect"

    @builtins.property
    @jsii.member(jsii_name="attrAlertLevel")
    def attr_alert_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AlertLevel: The severity of alerts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlertLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrFileOps")
    def attr_file_ops(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FileOps: The operations that you want to perform on the files.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFileOps"))

    @builtins.property
    @jsii.member(jsii_name="attrFilePaths")
    def attr_file_paths(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FilePaths: The paths to the monitored files.

        Wildcard characters are supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFilePaths"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Platform: The type of the operating system.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProcPaths")
    def attr_proc_paths(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProcPaths: The paths to the monitored processes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProcPaths"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleAction: The handling method of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleAction"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: The ID of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSwitchId")
    def attr_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SwitchId: The switch ID of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClientFileProtectProps:
        return typing.cast(ClientFileProtectProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IClientFileProtect).__jsii_proxy_class__ = lambda : _IClientFileProtectProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IContainerDefenseRule")
class IContainerDefenseRule(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ContainerDefenseRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Rule description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleAction: The action that is performed when the rule is hit.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: Rule Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleSwitch")
    def attr_rule_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleSwitch: The switch of the rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleType")
    def attr_rule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleType: The rule type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scope: Rule scope.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Whitelist: The whitelist of rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ContainerDefenseRuleProps:
        ...


class _IContainerDefenseRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ContainerDefenseRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IContainerDefenseRule"

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Rule description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleAction: The action that is performed when the rule is hit.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleAction"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: Rule Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleSwitch")
    def attr_rule_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleSwitch: The switch of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleType")
    def attr_rule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleType: The rule type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleType"))

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scope: Rule scope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScope"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Whitelist: The whitelist of rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ContainerDefenseRuleProps:
        return typing.cast(ContainerDefenseRuleProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IContainerDefenseRule).__jsii_proxy_class__ = lambda : _IContainerDefenseRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.ICustomCheckItem")
class ICustomCheckItem(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CustomCheckItem``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAssistInfo")
    def attr_assist_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AssistInfo: Check Item Description Help Information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCheckId")
    def attr_check_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCheckRule")
    def attr_check_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckRule: Check Item Check Rules.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCheckShowName")
    def attr_check_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckShowName: Check item display name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Check item description information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSubType")
    def attr_instance_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceSubType: Asset subtype to which the check item belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceType: Asset type to which the check item belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remark: Remarks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RiskLevel: Risk level of inspection items.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSectionIds")
    def attr_section_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SectionIds: CHECK SECTION OF INSPECTIONS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSolution")
    def attr_solution(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Solution: Check Item Solution.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVendor")
    def attr_vendor(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vendor: Vendor to which the item belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomCheckItemProps:
        ...


class _ICustomCheckItemProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CustomCheckItem``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.ICustomCheckItem"

    @builtins.property
    @jsii.member(jsii_name="attrAssistInfo")
    def attr_assist_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AssistInfo: Check Item Description Help Information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAssistInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckId")
    def attr_check_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCheckId"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckRule")
    def attr_check_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckRule: Check Item Check Rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCheckRule"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckShowName")
    def attr_check_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckShowName: Check item display name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCheckShowName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Check item description information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSubType")
    def attr_instance_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceSubType: Asset subtype to which the check item belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceType: Asset type to which the check item belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remark: Remarks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemark"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RiskLevel: Risk level of inspection items.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRiskLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrSectionIds")
    def attr_section_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SectionIds: CHECK SECTION OF INSPECTIONS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSectionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSolution")
    def attr_solution(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Solution: Check Item Solution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSolution"))

    @builtins.property
    @jsii.member(jsii_name="attrVendor")
    def attr_vendor(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vendor: Vendor to which the item belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVendor"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomCheckItemProps:
        return typing.cast(CustomCheckItemProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICustomCheckItem).__jsii_proxy_class__ = lambda : _ICustomCheckItemProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-threatdetection.ICustomCheckStandardPolicy"
)
class ICustomCheckStandardPolicy(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``CustomCheckStandardPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the custom check policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomCheckStandardPolicyProps:
        ...


class _ICustomCheckStandardPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CustomCheckStandardPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.ICustomCheckStandardPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the custom check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomCheckStandardPolicyProps:
        return typing.cast(CustomCheckStandardPolicyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICustomCheckStandardPolicy).__jsii_proxy_class__ = lambda : _ICustomCheckStandardPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.ICycleTask")
class ICycleTask(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CycleTask``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Configuration ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable the task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFirstDateStr")
    def attr_first_date_str(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirstDateStr: The first time when the task is performed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntervalPeriod")
    def attr_interval_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntervalPeriod: The interval at which the task is run.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParam")
    def attr_param(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Param: The additional information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPeriodUnit")
    def attr_period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PeriodUnit: The unit of the scan interval.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetEndTime")
    def attr_target_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetEndTime: The time when the task ends.

        Unit: hours.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetStartTime")
    def attr_target_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetStartTime: The time when the task is started.

        Unit: hours.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTaskName")
    def attr_task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskName: The task name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTaskType")
    def attr_task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskType: The type of the task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CycleTaskProps:
        ...


class _ICycleTaskProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CycleTask``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.ICycleTask"

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Configuration ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable the task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrFirstDateStr")
    def attr_first_date_str(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirstDateStr: The first time when the task is performed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFirstDateStr"))

    @builtins.property
    @jsii.member(jsii_name="attrIntervalPeriod")
    def attr_interval_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntervalPeriod: The interval at which the task is run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntervalPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrParam")
    def attr_param(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Param: The additional information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParam"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriodUnit")
    def attr_period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PeriodUnit: The unit of the scan interval.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEndTime")
    def attr_target_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetEndTime: The time when the task ends.

        Unit: hours.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetStartTime")
    def attr_target_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetStartTime: The time when the task is started.

        Unit: hours.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskName")
    def attr_task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskName: The task name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskName"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskType")
    def attr_task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskType: The type of the task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CycleTaskProps:
        return typing.cast(CycleTaskProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICycleTask).__jsii_proxy_class__ = lambda : _ICycleTaskProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IGroup")
class IGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Group``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupFlag")
    def attr_group_flag(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupFlag: The type of the server group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The ID of the server group for which you want to add to or remove servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GroupProps:
        ...


class _IGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Group``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IGroup"

    @builtins.property
    @jsii.member(jsii_name="attrGroupFlag")
    def attr_group_flag(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupFlag: The type of the server group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupFlag"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The ID of the server group for which you want to add to or remove servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GroupProps:
        return typing.cast(GroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGroup).__jsii_proxy_class__ = lambda : _IGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IHoneyPot")
class IHoneyPot(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HoneyPot``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotId")
    def attr_honeypot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotId: The ID of the honeypot.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageId")
    def attr_honeypot_image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageId: The ID of the honeypot image.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageName: The name of the honeypot image.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotName")
    def attr_honeypot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotName: The custom name of the honeypot.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: The ID of the management node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: Honeypot status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneyPotProps:
        ...


class _IHoneyPotProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HoneyPot``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IHoneyPot"

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotId")
    def attr_honeypot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotId: The ID of the honeypot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotId"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageId")
    def attr_honeypot_image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageId: The ID of the honeypot image.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageName: The name of the honeypot image.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotName")
    def attr_honeypot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotName: The custom name of the honeypot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotName"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: The ID of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: Honeypot status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneyPotProps:
        return typing.cast(HoneyPotProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHoneyPot).__jsii_proxy_class__ = lambda : _IHoneyPotProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IHoneypotNode")
class IHoneypotNode(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HoneypotNode``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAllowHoneypotAccessInternet")
    def attr_allow_honeypot_access_internet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAvailableProbeNum")
    def attr_available_probe_num(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AvailableProbeNum: The number of available probes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the management node was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: Honeypot management node id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeName")
    def attr_node_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeName: The name of the management node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupProbeIpList")
    def attr_security_group_probe_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotNodeProps:
        ...


class _IHoneypotNodeProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HoneypotNode``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IHoneypotNode"

    @builtins.property
    @jsii.member(jsii_name="attrAllowHoneypotAccessInternet")
    def attr_allow_honeypot_access_internet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAllowHoneypotAccessInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrAvailableProbeNum")
    def attr_available_probe_num(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AvailableProbeNum: The number of available probes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAvailableProbeNum"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the management node was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: Honeypot management node id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeName")
    def attr_node_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeName: The name of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupProbeIpList")
    def attr_security_group_probe_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupProbeIpList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotNodeProps:
        return typing.cast(HoneypotNodeProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHoneypotNode).__jsii_proxy_class__ = lambda : _IHoneypotNodeProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IHoneypotPreset")
class IHoneypotPreset(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HoneypotPreset``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageName: The name of the honeypot image.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotPresetId")
    def attr_honeypot_preset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotPresetId: The ID of the honeypot template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMeta")
    def attr_meta(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Meta: The custom configurations of the honeypot template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: The ID of the management node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPresetName")
    def attr_preset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PresetName: The custom name of the honeypot template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotPresetProps:
        ...


class _IHoneypotPresetProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HoneypotPreset``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IHoneypotPreset"

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageName: The name of the honeypot image.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotPresetId")
    def attr_honeypot_preset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotPresetId: The ID of the honeypot template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotPresetId"))

    @builtins.property
    @jsii.member(jsii_name="attrMeta")
    def attr_meta(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Meta: The custom configurations of the honeypot template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMeta"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: The ID of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrPresetName")
    def attr_preset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PresetName: The custom name of the honeypot template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPresetName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotPresetProps:
        return typing.cast(HoneypotPresetProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHoneypotPreset).__jsii_proxy_class__ = lambda : _IHoneypotPresetProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IHoneypotProbe")
class IHoneypotProbe(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HoneypotProbe``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArp")
    def attr_arp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrControlNodeId")
    def attr_control_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ControlNodeId: The ID of the management node.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The name of the probe.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotBindList")
    def attr_honeypot_bind_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotBindList: The configuration of the probe.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotProbeId")
    def attr_honeypot_probe_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotProbeId: The ID of the probe.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPing")
    def attr_ping(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ping: Specifies whether to enable ping scan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProbeType")
    def attr_probe_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProbeType: The type of the probe.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProbeVersion")
    def attr_probe_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProbeVersion: The version of the probe.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceIpList")
    def attr_service_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceIpList: Listen to the IP address list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uuid: The UUID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotProbeProps:
        ...


class _IHoneypotProbeProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HoneypotProbe``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IHoneypotProbe"

    @builtins.property
    @jsii.member(jsii_name="attrArp")
    def attr_arp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArp"))

    @builtins.property
    @jsii.member(jsii_name="attrControlNodeId")
    def attr_control_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ControlNodeId: The ID of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrControlNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The name of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotBindList")
    def attr_honeypot_bind_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotBindList: The configuration of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotBindList"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotProbeId")
    def attr_honeypot_probe_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotProbeId: The ID of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotProbeId"))

    @builtins.property
    @jsii.member(jsii_name="attrPing")
    def attr_ping(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ping: Specifies whether to enable ping scan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPing"))

    @builtins.property
    @jsii.member(jsii_name="attrProbeType")
    def attr_probe_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProbeType: The type of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProbeType"))

    @builtins.property
    @jsii.member(jsii_name="attrProbeVersion")
    def attr_probe_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProbeVersion: The version of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProbeVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceIpList")
    def attr_service_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceIpList: Listen to the IP address list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uuid: The UUID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotProbeProps:
        return typing.cast(HoneypotProbeProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHoneypotProbe).__jsii_proxy_class__ = lambda : _IHoneypotProbeProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IImageEventOperation")
class IImageEventOperation(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ImageEventOperation``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConditions")
    def attr_conditions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Conditions: The rule conditions.

        Specify a value in the JSON format.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEventKey")
    def attr_event_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventKey: Image Event Key.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEventName")
    def attr_event_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventName: Image Event Name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEventType")
    def attr_event_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventType: Image Event Type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageEventOperationId")
    def attr_image_event_operation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageEventOperationId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Note: The remarks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOperationCode")
    def attr_operation_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationCode: Event Operation Code.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScenarios")
    def attr_scenarios(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scenarios: Event Scenarios.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSource")
    def attr_source(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Source: The source of the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageEventOperationProps":
        ...


class _IImageEventOperationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ImageEventOperation``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IImageEventOperation"

    @builtins.property
    @jsii.member(jsii_name="attrConditions")
    def attr_conditions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Conditions: The rule conditions.

        Specify a value in the JSON format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConditions"))

    @builtins.property
    @jsii.member(jsii_name="attrEventKey")
    def attr_event_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventKey: Image Event Key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEventName")
    def attr_event_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventName: Image Event Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventName"))

    @builtins.property
    @jsii.member(jsii_name="attrEventType")
    def attr_event_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventType: Image Event Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventType"))

    @builtins.property
    @jsii.member(jsii_name="attrImageEventOperationId")
    def attr_image_event_operation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageEventOperationId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageEventOperationId"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Note: The remarks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationCode")
    def attr_operation_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationCode: Event Operation Code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationCode"))

    @builtins.property
    @jsii.member(jsii_name="attrScenarios")
    def attr_scenarios(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scenarios: Event Scenarios.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScenarios"))

    @builtins.property
    @jsii.member(jsii_name="attrSource")
    def attr_source(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Source: The source of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSource"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageEventOperationProps":
        return typing.cast("ImageEventOperationProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IImageEventOperation).__jsii_proxy_class__ = lambda : _IImageEventOperationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBuyNumber")
    def attr_buy_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BuyNumber: Number of servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScan")
    def attr_container_image_scan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContainerImageScan: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScanNew")
    def attr_container_image_scan_new(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContainerImageScanNew: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypot")
    def attr_honeypot(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Honeypot: Number of cloud honeypot licenses.

        Interval type, value interval:[20,500].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotSwitch")
    def attr_honeypot_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotSwitch: Cloud honeypot.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRaspCount")
    def attr_rasp_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RaspCount: Number of application protection licenses.

        Interval type, value interval:[1,100000000].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRenewalPeriodUnit")
    def attr_renewal_period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalStatus: Automatic renewal status, value:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRenewPeriod")
    def attr_renew_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewPeriod: Automatic renewal cycle, in months.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasAntiRansomware")
    def attr_sas_anti_ransomware(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasAntiRansomware: Anti-ransomware capacity.

        Unit: GB. Interval type, value interval:[0,9999999999].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasCspm")
    def attr_sas_cspm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasCspmSwitch")
    def attr_sas_cspm_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasCspmSwitch: Cloud platform configuration check switch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasSc")
    def attr_sas_sc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSc: Security screen.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasSdk")
    def attr_sas_sdk(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSdk: Number of malicious file detections.

        Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasSdkSwitch")
    def attr_sas_sdk_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSdkSwitch: Malicious file detection SDK.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasSlsStorage")
    def attr_sas_sls_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSlsStorage: Log analysis storage capacity.

        Unit: GB. Interval type, value interval:[0,600000].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardBoolean")
    def attr_sas_webguard_boolean(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasWebguardBoolean: Web tamper-proof switch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardOrderNum")
    def attr_sas_webguard_order_num(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasWebguardOrderNum: Tamper-proof authorization number.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysis")
    def attr_threat_analysis(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ThreatAnalysis: Threat Analysis log storage capacity.

        Interval type, value interval:[0,9999999999].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysisSwitch")
    def attr_threat_analysis_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ThreatAnalysisSwitch: Threat analysis.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVCore")
    def attr_v_core(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VCore: Number of cores.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVersionCode")
    def attr_version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionCode: Select the security center version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVulCount")
    def attr_vul_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVulSwitch")
    def attr_vul_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulSwitch: Vulnerability fix switch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrBuyNumber")
    def attr_buy_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BuyNumber: Number of servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBuyNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScan")
    def attr_container_image_scan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContainerImageScan: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContainerImageScan"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScanNew")
    def attr_container_image_scan_new(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContainerImageScanNew: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContainerImageScanNew"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypot")
    def attr_honeypot(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Honeypot: Number of cloud honeypot licenses.

        Interval type, value interval:[20,500].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypot"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotSwitch")
    def attr_honeypot_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotSwitch: Cloud honeypot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRaspCount")
    def attr_rasp_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RaspCount: Number of application protection licenses.

        Interval type, value interval:[1,100000000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRaspCount"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalPeriodUnit")
    def attr_renewal_period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalStatus: Automatic renewal status, value:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewPeriod")
    def attr_renew_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewPeriod: Automatic renewal cycle, in months.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrSasAntiRansomware")
    def attr_sas_anti_ransomware(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasAntiRansomware: Anti-ransomware capacity.

        Unit: GB. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasAntiRansomware"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspm")
    def attr_sas_cspm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasCspm"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspmSwitch")
    def attr_sas_cspm_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasCspmSwitch: Cloud platform configuration check switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasCspmSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSc")
    def attr_sas_sc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSc: Security screen.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSc"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdk")
    def attr_sas_sdk(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSdk: Number of malicious file detections.

        Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSdk"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdkSwitch")
    def attr_sas_sdk_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSdkSwitch: Malicious file detection SDK.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSdkSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSlsStorage")
    def attr_sas_sls_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSlsStorage: Log analysis storage capacity.

        Unit: GB. Interval type, value interval:[0,600000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSlsStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardBoolean")
    def attr_sas_webguard_boolean(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasWebguardBoolean: Web tamper-proof switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasWebguardBoolean"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardOrderNum")
    def attr_sas_webguard_order_num(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasWebguardOrderNum: Tamper-proof authorization number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasWebguardOrderNum"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysis")
    def attr_threat_analysis(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ThreatAnalysis: Threat Analysis log storage capacity.

        Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrThreatAnalysis"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysisSwitch")
    def attr_threat_analysis_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ThreatAnalysisSwitch: Threat analysis.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrThreatAnalysisSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrVCore")
    def attr_v_core(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VCore: Number of cores.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVCore"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCode")
    def attr_version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionCode: Select the security center version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionCode"))

    @builtins.property
    @jsii.member(jsii_name="attrVulCount")
    def attr_vul_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVulCount"))

    @builtins.property
    @jsii.member(jsii_name="attrVulSwitch")
    def attr_vul_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulSwitch: Vulnerability fix switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVulSwitch"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IVulWhitelist")
class IVulWhitelist(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``VulWhitelist``.'''

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: The reason why you add the vulnerability to the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetInfo")
    def attr_target_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetInfo: The applicable scope of the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVulWhitelistId")
    def attr_vul_whitelist_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulWhitelistId: The ID of the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VulWhitelistProps":
        ...


class _IVulWhitelistProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VulWhitelist``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IVulWhitelist"

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: The reason why you add the vulnerability to the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetInfo")
    def attr_target_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetInfo: The applicable scope of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrVulWhitelistId")
    def attr_vul_whitelist_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulWhitelistId: The ID of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVulWhitelistId"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VulWhitelistProps":
        return typing.cast("VulWhitelistProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVulWhitelist).__jsii_proxy_class__ = lambda : _IVulWhitelistProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-threatdetection.IWebLockConfig")
class IWebLockConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``WebLockConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: The configuration ID of the protected directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDefenceMode")
    def attr_defence_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefenceMode: The prevention mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDir")
    def attr_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dir: The directory for which you want to enable web tamper proofing.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveDir")
    def attr_exclusive_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFile")
    def attr_exclusive_file(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFileType")
    def attr_exclusive_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.

        Separate multiple types with semicolons (;).
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFile")
    def attr_inclusive_file(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InclusiveFile: The file that has web tamper proofing enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFileType")
    def attr_inclusive_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.

        Separate multiple types with semicolons (;).
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLocalBackupDir")
    def attr_local_backup_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LocalBackupDir: The local path to the backup files of the protected directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMode")
    def attr_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Mode: The protection mode of web tamper proofing.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uuid: The UUID of the server for which you want to add a directory to protect.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WebLockConfigProps":
        ...


class _IWebLockConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WebLockConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-threatdetection.IWebLockConfig"

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: The configuration ID of the protected directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefenceMode")
    def attr_defence_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefenceMode: The prevention mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefenceMode"))

    @builtins.property
    @jsii.member(jsii_name="attrDir")
    def attr_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dir: The directory for which you want to enable web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDir"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveDir")
    def attr_exclusive_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExclusiveDir"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFile")
    def attr_exclusive_file(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExclusiveFile"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFileType")
    def attr_exclusive_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.

        Separate multiple types with semicolons (;).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExclusiveFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFile")
    def attr_inclusive_file(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InclusiveFile: The file that has web tamper proofing enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInclusiveFile"))

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFileType")
    def attr_inclusive_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.

        Separate multiple types with semicolons (;).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInclusiveFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrLocalBackupDir")
    def attr_local_backup_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LocalBackupDir: The local path to the backup files of the protected directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLocalBackupDir"))

    @builtins.property
    @jsii.member(jsii_name="attrMode")
    def attr_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Mode: The protection mode of web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMode"))

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uuid: The UUID of the server for which you want to add a directory to protect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WebLockConfigProps":
        return typing.cast("WebLockConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWebLockConfig).__jsii_proxy_class__ = lambda : _IWebLockConfigProxy


@jsii.implements(IImageEventOperation)
class ImageEventOperation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.ImageEventOperation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::ImageEventOperation``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImageEventOperation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageEventOperationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9120b4a05eb74e4440c4d2ff1a99d9c211a3e9377b525a060087a21cf461969)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConditions")
    def attr_conditions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Conditions: The rule conditions.

        Specify a value in the JSON format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConditions"))

    @builtins.property
    @jsii.member(jsii_name="attrEventKey")
    def attr_event_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventKey: Image Event Key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEventName")
    def attr_event_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventName: Image Event Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventName"))

    @builtins.property
    @jsii.member(jsii_name="attrEventType")
    def attr_event_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventType: Image Event Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventType"))

    @builtins.property
    @jsii.member(jsii_name="attrImageEventOperationId")
    def attr_image_event_operation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageEventOperationId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageEventOperationId"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Note: The remarks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationCode")
    def attr_operation_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationCode: Event Operation Code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationCode"))

    @builtins.property
    @jsii.member(jsii_name="attrScenarios")
    def attr_scenarios(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scenarios: Event Scenarios.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScenarios"))

    @builtins.property
    @jsii.member(jsii_name="attrSource")
    def attr_source(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Source: The source of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSource"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageEventOperationProps":
        return typing.cast("ImageEventOperationProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__139679439e38471e060251fdf9b9935da9b52059b6ae579a03c0c10d4334c1f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a370898f7ad5f7511d3cf744c40d050e960c6284ffb8d59d586d34e81affc77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38823686e41f14d0d362e8d979b29e404c182656f5f869ae7214cc6b7a40aa95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.ImageEventOperationProps",
    jsii_struct_bases=[],
    name_mapping={
        "conditions": "conditions",
        "event_type": "eventType",
        "operation_code": "operationCode",
        "event_key": "eventKey",
        "event_name": "eventName",
        "note": "note",
        "scenarios": "scenarios",
        "source": "source",
    },
)
class ImageEventOperationProps:
    def __init__(
        self,
        *,
        conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        event_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        operation_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        event_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scenarios: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ImageEventOperation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation

        :param conditions: Property conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys: - **condition**: the matching condition. - **type**: the matching type. - **value**: the matching value.
        :param event_type: Property eventType: Image Event Type.
        :param operation_code: Property operationCode: Event Operation Code.
        :param event_key: Property eventKey: The keyword of the alert item.
        :param event_name: Property eventName: The name of the alert item.
        :param note: Property note: The remarks that you want to add.
        :param scenarios: Property scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys: type value Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
        :param source: Property source: The source of the whitelist. Valid values: - **default**: image. - **agentless**: agentless detection.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0fe3f9c6ac22845d1bdc35c75fce4c45c45707ceadba77b762a5a1c65ecceaa)
            check_type(argname="argument conditions", value=conditions, expected_type=type_hints["conditions"])
            check_type(argname="argument event_type", value=event_type, expected_type=type_hints["event_type"])
            check_type(argname="argument operation_code", value=operation_code, expected_type=type_hints["operation_code"])
            check_type(argname="argument event_key", value=event_key, expected_type=type_hints["event_key"])
            check_type(argname="argument event_name", value=event_name, expected_type=type_hints["event_name"])
            check_type(argname="argument note", value=note, expected_type=type_hints["note"])
            check_type(argname="argument scenarios", value=scenarios, expected_type=type_hints["scenarios"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "conditions": conditions,
            "event_type": event_type,
            "operation_code": operation_code,
        }
        if event_key is not None:
            self._values["event_key"] = event_key
        if event_name is not None:
            self._values["event_name"] = event_name
        if note is not None:
            self._values["note"] = note
        if scenarios is not None:
            self._values["scenarios"] = scenarios
        if source is not None:
            self._values["source"] = source

    @builtins.property
    def conditions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property conditions: The rule conditions.

        Specify a value in the JSON format. You can specify the following keys:

        - **condition**: the matching condition.
        - **type**: the matching type.
        - **value**: the matching value.
        '''
        result = self._values.get("conditions")
        assert result is not None, "Required property 'conditions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def event_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property eventType: Image Event Type.'''
        result = self._values.get("event_type")
        assert result is not None, "Required property 'event_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def operation_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property operationCode: Event Operation Code.'''
        result = self._values.get("operation_code")
        assert result is not None, "Required property 'operation_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def event_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eventKey: The keyword of the alert item.'''
        result = self._values.get("event_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eventName: The name of the alert item.'''
        result = self._values.get("event_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property note: The remarks that you want to add.'''
        result = self._values.get("note")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scenarios(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property scenarios: The application scope of the rule.

        The value is in the JSON format. Valid values of keys:
        type
        value
        Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
        '''
        result = self._values.get("scenarios")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property source: The source of the whitelist.

        Valid values:

        - **default**: image.
        - **agentless**: agentless detection.
        '''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageEventOperationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75942e5f058c894ba363dec82c603e65f0c217242931be81f99c562705118e39)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBuyNumber")
    def attr_buy_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BuyNumber: Number of servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBuyNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScan")
    def attr_container_image_scan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContainerImageScan: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContainerImageScan"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScanNew")
    def attr_container_image_scan_new(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContainerImageScanNew: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContainerImageScanNew"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypot")
    def attr_honeypot(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Honeypot: Number of cloud honeypot licenses.

        Interval type, value interval:[20,500].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypot"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotSwitch")
    def attr_honeypot_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotSwitch: Cloud honeypot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRaspCount")
    def attr_rasp_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RaspCount: Number of application protection licenses.

        Interval type, value interval:[1,100000000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRaspCount"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalPeriodUnit")
    def attr_renewal_period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalStatus: Automatic renewal status, value:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewPeriod")
    def attr_renew_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewPeriod: Automatic renewal cycle, in months.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrSasAntiRansomware")
    def attr_sas_anti_ransomware(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasAntiRansomware: Anti-ransomware capacity.

        Unit: GB. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasAntiRansomware"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspm")
    def attr_sas_cspm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasCspm"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspmSwitch")
    def attr_sas_cspm_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasCspmSwitch: Cloud platform configuration check switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasCspmSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSc")
    def attr_sas_sc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSc: Security screen.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSc"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdk")
    def attr_sas_sdk(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSdk: Number of malicious file detections.

        Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSdk"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdkSwitch")
    def attr_sas_sdk_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSdkSwitch: Malicious file detection SDK.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSdkSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSlsStorage")
    def attr_sas_sls_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasSlsStorage: Log analysis storage capacity.

        Unit: GB. Interval type, value interval:[0,600000].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasSlsStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardBoolean")
    def attr_sas_webguard_boolean(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasWebguardBoolean: Web tamper-proof switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasWebguardBoolean"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardOrderNum")
    def attr_sas_webguard_order_num(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SasWebguardOrderNum: Tamper-proof authorization number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSasWebguardOrderNum"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysis")
    def attr_threat_analysis(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ThreatAnalysis: Threat Analysis log storage capacity.

        Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrThreatAnalysis"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysisSwitch")
    def attr_threat_analysis_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ThreatAnalysisSwitch: Threat analysis.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrThreatAnalysisSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrVCore")
    def attr_v_core(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VCore: Number of cores.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVCore"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCode")
    def attr_version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionCode: Select the security center version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionCode"))

    @builtins.property
    @jsii.member(jsii_name="attrVulCount")
    def attr_vul_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVulCount"))

    @builtins.property
    @jsii.member(jsii_name="attrVulSwitch")
    def attr_vul_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulSwitch: Vulnerability fix switch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVulSwitch"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f6336650270bc2e9452da58ed898f493100e726005516f3ba8bde5114d04d20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f8cf0279f358956dc6bb5e22f9d2962db9675310d970899dcb578596f0fadb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c221f7b3e92cad6701ba1e5cfb120ec53ed03c508ddb2d8f139fe0dbc25424a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "payment_type": "paymentType",
        "version_code": "versionCode",
        "buy_number": "buyNumber",
        "container_image_scan": "containerImageScan",
        "container_image_scan_new": "containerImageScanNew",
        "honeypot": "honeypot",
        "honeypot_switch": "honeypotSwitch",
        "modify_type": "modifyType",
        "period": "period",
        "product_type": "productType",
        "rasp_count": "raspCount",
        "renewal_period_unit": "renewalPeriodUnit",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
        "sas_anti_ransomware": "sasAntiRansomware",
        "sas_cspm": "sasCspm",
        "sas_cspm_switch": "sasCspmSwitch",
        "sas_sc": "sasSc",
        "sas_sdk": "sasSdk",
        "sas_sdk_switch": "sasSdkSwitch",
        "sas_sls_storage": "sasSlsStorage",
        "sas_webguard_boolean": "sasWebguardBoolean",
        "sas_webguard_order_num": "sasWebguardOrderNum",
        "threat_analysis": "threatAnalysis",
        "threat_analysis_switch": "threatAnalysisSwitch",
        "v_core": "vCore",
        "vul_count": "vulCount",
        "vul_switch": "vulSwitch",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance

        :param payment_type: Property paymentType: The payment type of the resource.
        :param version_code: Property versionCode: Select the security center version. Value: - level7: Antivirus Edition. - level3: Premium version. - level2: Enterprise Edition. - level8: Ultimate. - level10: Purchase value-added services only.
        :param buy_number: Property buyNumber: Number of servers.
        :param container_image_scan: Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000]. .. epigraph:: The step size is 20, that is, only multiples of 20 can be filled in.
        :param container_image_scan_new: Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000]. .. epigraph:: The step size is 20, that is, only multiples of 20 can be filled in.
        :param honeypot: Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500]. .. epigraph:: This module can only be purchased when honeypot_switch = 1, starting with 20.
        :param honeypot_switch: Property honeypotSwitch: Cloud honeypot. Value: - 1: Yes. - 2: No.
        :param modify_type: Property modifyType: Change configuration type, value - Upgrade: Upgrade. - Downgrade: Downgrade.
        :param period: Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products. .. epigraph:: must be set when creating a prepaid instance.
        :param product_type: Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
        :param rasp_count: Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        :param renewal_period_unit: Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month. - Y: years. .. epigraph:: Must be set when RenewalStatus = AutoRenewal.
        :param renewal_status: Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. - ManualRenewal: manual renewal. Default ManualRenewal.
        :param renew_period: Property renewPeriod: Automatic renewal cycle, in months. .. epigraph:: When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        :param sas_anti_ransomware: Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999]. .. epigraph:: The step size is 10, that is, only multiples of 10 can be filled in.
        :param sas_cspm: Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999]. .. epigraph:: You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        :param sas_cspm_switch: Property sasCspmSwitch: Cloud platform configuration check switch. Value: - 0: No. - 1: Yes.
        :param sas_sc: Property sasSc: Security screen. Value: - true: Yes. - false: No.
        :param sas_sdk: Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999]. .. epigraph:: This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        :param sas_sdk_switch: Property sasSdkSwitch: Malicious file detection SDK.
        :param sas_sls_storage: Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000]. .. epigraph:: The step size is 10, that is, only multiples of 10 can be filled in.
        :param sas_webguard_boolean: Property sasWebguardBoolean: Web tamper-proof switch. Value: - 0: No. - 1: Yes.
        :param sas_webguard_order_num: Property sasWebguardOrderNum: Tamper-proof authorization number. Value: - 0: No - 1: Yes.
        :param threat_analysis: Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999]. .. epigraph:: This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        :param threat_analysis_switch: Property threatAnalysisSwitch: Threat analysis. Value: - 0: No. - 1: Yes.
        :param v_core: Property vCore: Number of cores.
        :param vul_count: Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000]. .. epigraph:: This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        :param vul_switch: Property vulSwitch: Vulnerability fix switch. Value: - 0: No. - 1: Yes. .. epigraph:: When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d634b27a82f45ff70d30b663b3632c97500f94b6b81556222a6b8fe8f7b3f74d)
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument version_code", value=version_code, expected_type=type_hints["version_code"])
            check_type(argname="argument buy_number", value=buy_number, expected_type=type_hints["buy_number"])
            check_type(argname="argument container_image_scan", value=container_image_scan, expected_type=type_hints["container_image_scan"])
            check_type(argname="argument container_image_scan_new", value=container_image_scan_new, expected_type=type_hints["container_image_scan_new"])
            check_type(argname="argument honeypot", value=honeypot, expected_type=type_hints["honeypot"])
            check_type(argname="argument honeypot_switch", value=honeypot_switch, expected_type=type_hints["honeypot_switch"])
            check_type(argname="argument modify_type", value=modify_type, expected_type=type_hints["modify_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument rasp_count", value=rasp_count, expected_type=type_hints["rasp_count"])
            check_type(argname="argument renewal_period_unit", value=renewal_period_unit, expected_type=type_hints["renewal_period_unit"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument sas_anti_ransomware", value=sas_anti_ransomware, expected_type=type_hints["sas_anti_ransomware"])
            check_type(argname="argument sas_cspm", value=sas_cspm, expected_type=type_hints["sas_cspm"])
            check_type(argname="argument sas_cspm_switch", value=sas_cspm_switch, expected_type=type_hints["sas_cspm_switch"])
            check_type(argname="argument sas_sc", value=sas_sc, expected_type=type_hints["sas_sc"])
            check_type(argname="argument sas_sdk", value=sas_sdk, expected_type=type_hints["sas_sdk"])
            check_type(argname="argument sas_sdk_switch", value=sas_sdk_switch, expected_type=type_hints["sas_sdk_switch"])
            check_type(argname="argument sas_sls_storage", value=sas_sls_storage, expected_type=type_hints["sas_sls_storage"])
            check_type(argname="argument sas_webguard_boolean", value=sas_webguard_boolean, expected_type=type_hints["sas_webguard_boolean"])
            check_type(argname="argument sas_webguard_order_num", value=sas_webguard_order_num, expected_type=type_hints["sas_webguard_order_num"])
            check_type(argname="argument threat_analysis", value=threat_analysis, expected_type=type_hints["threat_analysis"])
            check_type(argname="argument threat_analysis_switch", value=threat_analysis_switch, expected_type=type_hints["threat_analysis_switch"])
            check_type(argname="argument v_core", value=v_core, expected_type=type_hints["v_core"])
            check_type(argname="argument vul_count", value=vul_count, expected_type=type_hints["vul_count"])
            check_type(argname="argument vul_switch", value=vul_switch, expected_type=type_hints["vul_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "payment_type": payment_type,
            "version_code": version_code,
        }
        if buy_number is not None:
            self._values["buy_number"] = buy_number
        if container_image_scan is not None:
            self._values["container_image_scan"] = container_image_scan
        if container_image_scan_new is not None:
            self._values["container_image_scan_new"] = container_image_scan_new
        if honeypot is not None:
            self._values["honeypot"] = honeypot
        if honeypot_switch is not None:
            self._values["honeypot_switch"] = honeypot_switch
        if modify_type is not None:
            self._values["modify_type"] = modify_type
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if rasp_count is not None:
            self._values["rasp_count"] = rasp_count
        if renewal_period_unit is not None:
            self._values["renewal_period_unit"] = renewal_period_unit
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if sas_anti_ransomware is not None:
            self._values["sas_anti_ransomware"] = sas_anti_ransomware
        if sas_cspm is not None:
            self._values["sas_cspm"] = sas_cspm
        if sas_cspm_switch is not None:
            self._values["sas_cspm_switch"] = sas_cspm_switch
        if sas_sc is not None:
            self._values["sas_sc"] = sas_sc
        if sas_sdk is not None:
            self._values["sas_sdk"] = sas_sdk
        if sas_sdk_switch is not None:
            self._values["sas_sdk_switch"] = sas_sdk_switch
        if sas_sls_storage is not None:
            self._values["sas_sls_storage"] = sas_sls_storage
        if sas_webguard_boolean is not None:
            self._values["sas_webguard_boolean"] = sas_webguard_boolean
        if sas_webguard_order_num is not None:
            self._values["sas_webguard_order_num"] = sas_webguard_order_num
        if threat_analysis is not None:
            self._values["threat_analysis"] = threat_analysis
        if threat_analysis_switch is not None:
            self._values["threat_analysis_switch"] = threat_analysis_switch
        if v_core is not None:
            self._values["v_core"] = v_core
        if vul_count is not None:
            self._values["vul_count"] = vul_count
        if vul_switch is not None:
            self._values["vul_switch"] = vul_switch

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property paymentType: The payment type of the resource.'''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property versionCode: Select the security center version.

        Value:

        - level7: Antivirus Edition.
        - level3: Premium version.
        - level2: Enterprise Edition.
        - level8: Ultimate.
        - level10: Purchase value-added services only.
        '''
        result = self._values.get("version_code")
        assert result is not None, "Required property 'version_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def buy_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property buyNumber: Number of servers.'''
        result = self._values.get("buy_number")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerImageScan: Container Image security scan.

        Interval type, value interval:[0,200000].
        .. epigraph::

           The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan_new(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerImageScanNew: Container Image security scan.

        Interval type, value interval:[0,200000].
        .. epigraph::

           The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan_new")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property honeypot: Number of cloud honeypot licenses.

        Interval type, value interval:[20,500].
        .. epigraph::

           This module can only be purchased when honeypot_switch = 1, starting with 20.
        '''
        result = self._values.get("honeypot")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property honeypotSwitch: Cloud honeypot.

        Value:

        - 1: Yes.
        - 2: No.
        '''
        result = self._values.get("honeypot_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property modifyType: Change configuration type, value - Upgrade: Upgrade.

        - Downgrade: Downgrade.
        '''
        result = self._values.get("modify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Prepaid cycle.

        The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        .. epigraph::

           must be set when creating a prepaid instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productType: Product type, only China station needs to be set to sas, international station does not need to set.'''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rasp_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property raspCount: Number of application protection licenses.

        Interval type, value interval:[1,100000000].
        '''
        result = self._values.get("rasp_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.

        - Y: years.

        .. epigraph::

           Must be set when RenewalStatus = AutoRenewal.
        '''
        result = self._values.get("renewal_period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.

        - ManualRenewal: manual renewal.
          Default ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewPeriod: Automatic renewal cycle, in months.

        .. epigraph::

           When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasAntiRansomware: Anti-ransomware capacity.

        Unit: GB. Interval type, value interval:[0,9999999999].
        .. epigraph::

           The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_anti_ransomware")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].

        .. epigraph::

           You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_cspm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasCspmSwitch: Cloud platform configuration check switch.

        Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_cspm_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSc: Security screen.

        Value:

        - true: Yes.
        - false: No.
        '''
        result = self._values.get("sas_sc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSdk: Number of malicious file detections.

        Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        .. epigraph::

           This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSdkSwitch: Malicious file detection SDK.'''
        result = self._values.get("sas_sdk_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sls_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSlsStorage: Log analysis storage capacity.

        Unit: GB. Interval type, value interval:[0,600000].
        .. epigraph::

           The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sls_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_boolean(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasWebguardBoolean: Web tamper-proof switch.

        Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_boolean")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_order_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasWebguardOrderNum: Tamper-proof authorization number.

        Value:

        - 0: No
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_order_num")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property threatAnalysis: Threat Analysis log storage capacity.

        Interval type, value interval:[0,9999999999].
        .. epigraph::

           This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("threat_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property threatAnalysisSwitch: Threat analysis.

        Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("threat_analysis_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vCore: Number of cores.'''
        result = self._values.get("v_core")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].

        .. epigraph::

           This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vulSwitch: Vulnerability fix switch.

        Value:

        - 0: No.
        - 1: Yes.

        .. epigraph::

           When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAntiBruteForceRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::AntiBruteForceRule``, which is used to create a defense rule against brute-force attacks.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AntiBruteForceRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAntiBruteForceRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosAntiBruteForceRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule

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


class RosAttackPathSensitiveAssetConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AttackPathSensitiveAssetConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAttackPathSensitiveAssetConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53dce3ea2a4a5bc7617056193a9a65ff51da6084fe0445d1c3081b316455fb34)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c5b2bfbae102c9754e855350a139a7403779fd21012fea3b08d51d303c971223)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttackPathAssetList: The attack path sensitive asset configuration list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttackPathAssetList"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathSensitiveAssetConfigId")
    def attr_attack_path_sensitive_asset_config_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttackPathSensitiveAssetConfigId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="attackPathAssetList")
    def attack_path_asset_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty"]]]:
        '''
        :Property: attackPathAssetList: The attack path sensitive asset configuration list.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty"]]], jsii.get(self, "attackPathAssetList"))

    @attack_path_asset_list.setter
    def attack_path_asset_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97460a33cf40e1b3e18975738c303be926e681cdf4d57b6e678a8aa0ae6426da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attackPathAssetList", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec97c055f077eaa979b94ee1fa25b481125406c11c7efb6b02b5ad06f54b37ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "asset_sub_type": "assetSubType",
            "asset_type": "assetType",
            "instance_id": "instanceId",
            "region_id": "regionId",
            "vendor": "vendor",
            "instance_name": "instanceName",
        },
    )
    class AttackPathAssetListProperty:
        def __init__(
            self,
            *,
            asset_sub_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            asset_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vendor: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param asset_sub_type: 
            :param asset_type: 
            :param instance_id: 
            :param region_id: 
            :param vendor: 
            :param instance_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__841ef72c804316f93901deb7bd0ef081d931d188549c69fc29f4ac41ad2dabdd)
                check_type(argname="argument asset_sub_type", value=asset_sub_type, expected_type=type_hints["asset_sub_type"])
                check_type(argname="argument asset_type", value=asset_type, expected_type=type_hints["asset_type"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
                check_type(argname="argument vendor", value=vendor, expected_type=type_hints["vendor"])
                check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "asset_sub_type": asset_sub_type,
                "asset_type": asset_type,
                "instance_id": instance_id,
                "region_id": region_id,
                "vendor": vendor,
            }
            if instance_name is not None:
                self._values["instance_name"] = instance_name

        @builtins.property
        def asset_sub_type(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: assetSubType: Subtype of the cloud product asset.
            '''
            result = self._values.get("asset_sub_type")
            assert result is not None, "Required property 'asset_sub_type' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def asset_type(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: assetType: Type of the cloud product asset.
            '''
            result = self._values.get("asset_type")
            assert result is not None, "Required property 'asset_type' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceId: Cloud product asset instance ID.
            '''
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: regionId: Region ID of the cloud product asset instance.
            '''
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vendor(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vendor: Cloud product asset vendor.
            '''
            result = self._values.get("vendor")
            assert result is not None, "Required property 'vendor' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceName: Instance name of the cloud product asset.
            '''
            result = self._values.get("instance_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AttackPathAssetListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfigProps",
    jsii_struct_bases=[],
    name_mapping={"attack_path_asset_list": "attackPathAssetList"},
)
class RosAttackPathSensitiveAssetConfigProps:
    def __init__(
        self,
        *,
        attack_path_asset_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``RosAttackPathSensitiveAssetConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig

        :param attack_path_asset_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7e33837869ebd4559c38a300b398ccc0810ba9bee37424b2bc0fc98a6f292d7)
            check_type(argname="argument attack_path_asset_list", value=attack_path_asset_list, expected_type=type_hints["attack_path_asset_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "attack_path_asset_list": attack_path_asset_list,
        }

    @builtins.property
    def attack_path_asset_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty]]]:
        '''
        :Property: attackPathAssetList: The attack path sensitive asset configuration list.
        '''
        result = self._values.get("attack_path_asset_list")
        assert result is not None, "Required property 'attack_path_asset_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAttackPathSensitiveAssetConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAttackPathWhitelist(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::AttackPathWhitelist``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AttackPathWhitelist`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAttackPathWhitelistProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dde8c0c9349489bbce59fe98762dd8e53b9eea94a312b25bb220702a085c056b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f1c6732d15108390599f586c1f2010919c65c123c1a3b7d4af84788991e58e7a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttackPathAssetList: List of attack path assets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttackPathAssetList"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathWhitelistId")
    def attr_attack_path_whitelist_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttackPathWhitelistId: The attack path whitelist ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttackPathWhitelistId"))

    @builtins.property
    @jsii.member(jsii_name="attrPathName")
    def attr_path_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PathName: The whitelist path name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPathName"))

    @builtins.property
    @jsii.member(jsii_name="attrPathType")
    def attr_path_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PathType: The whitelist path type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPathType"))

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Remark: Remark information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemark"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistName")
    def attr_whitelist_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WhitelistName: The whitelist name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWhitelistName"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistType")
    def attr_whitelist_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WhitelistType: The whitelist type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWhitelistType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2170923e03b9b9b44fc431f23235e67d991629a5479bc981f5a3913e455c7537)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="pathName")
    def path_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pathName: The whitelist path name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pathName"))

    @path_name.setter
    def path_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b92131cdd2a27bcfea4586d015aeea613b29540a9675d7637915cce8dc0a638)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pathName", value)

    @builtins.property
    @jsii.member(jsii_name="pathType")
    def path_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pathType: The whitelist path type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pathType"))

    @path_type.setter
    def path_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96a0d750046a39d50a5b0651bd8db932abfee73eb4e40df1b3ed35bcf2d336e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pathType", value)

    @builtins.property
    @jsii.member(jsii_name="whitelistName")
    def whitelist_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: whitelistName: The whitelist name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "whitelistName"))

    @whitelist_name.setter
    def whitelist_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10992d1196160c093ed15cb87e410cafe440237e8684d0edd7653e8d8f3db349)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whitelistName", value)

    @builtins.property
    @jsii.member(jsii_name="whitelistType")
    def whitelist_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        whitelistType: The whitelist type.  Values:

        - ALL_ASSET: All assets.
        - PART_ASSET: Partial assets.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "whitelistType"))

    @whitelist_type.setter
    def whitelist_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7459a06062f8913ff8de0cbdede4b683b0822ea358b554e21dda6b627c2409fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whitelistType", value)

    @builtins.property
    @jsii.member(jsii_name="attackPathAssetList")
    def attack_path_asset_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathWhitelist.AttackPathAssetListProperty"]]]]:
        '''
        :Property: attackPathAssetList: List of attack path assets.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathWhitelist.AttackPathAssetListProperty"]]]], jsii.get(self, "attackPathAssetList"))

    @attack_path_asset_list.setter
    def attack_path_asset_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAttackPathWhitelist.AttackPathAssetListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce03195f032e82b3ffcccc58766c15813f72be0fb512c9e40759b6310d55443a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attackPathAssetList", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remark information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d914c29b0b92b37ae190894d71f2d8736b236426566eb77180d61754577e2228)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "vendor": "vendor",
            "asset_sub_type": "assetSubType",
            "asset_type": "assetType",
            "instance_id": "instanceId",
            "node_type": "nodeType",
            "region_id": "regionId",
        },
    )
    class AttackPathAssetListProperty:
        def __init__(
            self,
            *,
            vendor: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            asset_sub_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            asset_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param vendor: 
            :param asset_sub_type: 
            :param asset_type: 
            :param instance_id: 
            :param node_type: 
            :param region_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b03fb0969d46830232bec3590068fe3b7e3373f9c61a62c4ba4d2b57b43222c7)
                check_type(argname="argument vendor", value=vendor, expected_type=type_hints["vendor"])
                check_type(argname="argument asset_sub_type", value=asset_sub_type, expected_type=type_hints["asset_sub_type"])
                check_type(argname="argument asset_type", value=asset_type, expected_type=type_hints["asset_type"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument node_type", value=node_type, expected_type=type_hints["node_type"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vendor": vendor,
            }
            if asset_sub_type is not None:
                self._values["asset_sub_type"] = asset_sub_type
            if asset_type is not None:
                self._values["asset_type"] = asset_type
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if node_type is not None:
                self._values["node_type"] = node_type
            if region_id is not None:
                self._values["region_id"] = region_id

        @builtins.property
        def vendor(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vendor: The cloud product cloud vendor ID.
            '''
            result = self._values.get("vendor")
            assert result is not None, "Required property 'vendor' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def asset_sub_type(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: assetSubType: Cloud product asset subtype.
            '''
            result = self._values.get("asset_sub_type")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def asset_type(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: assetType: The asset type of the cloud product.
            '''
            result = self._values.get("asset_type")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceId: The ID of the cloud product instance.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeType: The whitelist node type, with values:

            - start: Start point.
            - end: End point.
            '''
            result = self._values.get("node_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: regionId: The region ID of the cloud product.
            '''
            result = self._values.get("region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AttackPathAssetListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "path_name": "pathName",
        "path_type": "pathType",
        "whitelist_name": "whitelistName",
        "whitelist_type": "whitelistType",
        "attack_path_asset_list": "attackPathAssetList",
        "remark": "remark",
    },
)
class RosAttackPathWhitelistProps:
    def __init__(
        self,
        *,
        path_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        path_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        whitelist_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        whitelist_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        attack_path_asset_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAttackPathWhitelist.AttackPathAssetListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAttackPathWhitelist``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist

        :param path_name: 
        :param path_type: 
        :param whitelist_name: 
        :param whitelist_type: 
        :param attack_path_asset_list: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0faab6e874aca376a1fb9ba797601e9ba4d81dedc0d078e2820cbe78d54a82fc)
            check_type(argname="argument path_name", value=path_name, expected_type=type_hints["path_name"])
            check_type(argname="argument path_type", value=path_type, expected_type=type_hints["path_type"])
            check_type(argname="argument whitelist_name", value=whitelist_name, expected_type=type_hints["whitelist_name"])
            check_type(argname="argument whitelist_type", value=whitelist_type, expected_type=type_hints["whitelist_type"])
            check_type(argname="argument attack_path_asset_list", value=attack_path_asset_list, expected_type=type_hints["attack_path_asset_list"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "path_name": path_name,
            "path_type": path_type,
            "whitelist_name": whitelist_name,
            "whitelist_type": whitelist_type,
        }
        if attack_path_asset_list is not None:
            self._values["attack_path_asset_list"] = attack_path_asset_list
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def path_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pathName: The whitelist path name.
        '''
        result = self._values.get("path_name")
        assert result is not None, "Required property 'path_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def path_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pathType: The whitelist path type.
        '''
        result = self._values.get("path_type")
        assert result is not None, "Required property 'path_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def whitelist_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: whitelistName: The whitelist name.
        '''
        result = self._values.get("whitelist_name")
        assert result is not None, "Required property 'whitelist_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def whitelist_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        whitelistType: The whitelist type.  Values:

        - ALL_ASSET: All assets.
        - PART_ASSET: Partial assets.
        '''
        result = self._values.get("whitelist_type")
        assert result is not None, "Required property 'whitelist_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def attack_path_asset_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAttackPathWhitelist.AttackPathAssetListProperty]]]]:
        '''
        :Property: attackPathAssetList: List of attack path assets.
        '''
        result = self._values.get("attack_path_asset_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAttackPathWhitelist.AttackPathAssetListProperty]]]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remark information.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAttackPathWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBaselineStrategy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosBaselineStrategy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::BaselineStrategy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BaselineStrategy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBaselineStrategyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97a434427384375f23532259396a88c5346607d8a9cc893ec64ca1243511bf6a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f5614df2f5ea064791e38c5d5fbf4af1dfa8328502b1479654537ebf801bd710)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyId")
    def attr_baseline_strategy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BaselineStrategyId: The ID of the baseline check policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBaselineStrategyId"))

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyName")
    def attr_baseline_strategy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BaselineStrategyName: The new name of the baseline check policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBaselineStrategyName"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomType")
    def attr_custom_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomType: The type of the baseline check policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomType"))

    @builtins.property
    @jsii.member(jsii_name="attrCycleDays")
    def attr_cycle_days(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CycleDays: The new interval of the baseline check.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCycleDays"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskSubTypeName")
    def attr_risk_sub_type_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RiskSubTypeName: The subtype of the baselines.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRiskSubTypeName"))

    @builtins.property
    @jsii.member(jsii_name="attrStartTime")
    def attr_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StartTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetType: The method that is used to apply the baseline check policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="baselineStrategyName")
    def baseline_strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: baselineStrategyName: The new name of the baseline check policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "baselineStrategyName"))

    @baseline_strategy_name.setter
    def baseline_strategy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85f9911dbd50ba10ff009ebed3203ea38a5d48647ac479c5e1249ab8ef6fff06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "baselineStrategyName", value)

    @builtins.property
    @jsii.member(jsii_name="customType")
    def custom_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        customType: The type of the baseline check policy. Valid values:

        - **custom**: a custom baseline check policy
        - **common**: a standard baseline check policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "customType"))

    @custom_type.setter
    def custom_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbbc4e22907ae96a7bc1971e4ff0cad3a5e1c85b50751c8ee39052e8b6d1c6ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customType", value)

    @builtins.property
    @jsii.member(jsii_name="cycleDays")
    def cycle_days(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        cycleDays: The new interval of the baseline check. Valid values:

        - **1**: every 2 days
        - **3**: every 4 days
        - **7**: every 8 days
        - **30**: every 31 days.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cycleDays"))

    @cycle_days.setter
    def cycle_days(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37a35dfa8a30ded3954c11177f54c644e13cb259db56b613696f3afc5060972c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cycleDays", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9334076bb7720abcfce7615c69919e3ecdee81135af2e1bb07f5c227b29b68a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endTime")
    def end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endTime"))

    @end_time.setter
    def end_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f5c112f447583bc52dd5f5ae71952b2fea3d7d0ebbf58af2a4b02ce117208a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endTime", value)

    @builtins.property
    @jsii.member(jsii_name="riskSubTypeName")
    def risk_sub_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskSubTypeName: The subtype of the baselines.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "riskSubTypeName"))

    @risk_sub_type_name.setter
    def risk_sub_type_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31f115c1689496f27740a5ef95228d361837a997937c82e5d1259174588e5994)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "riskSubTypeName", value)

    @builtins.property
    @jsii.member(jsii_name="startTime")
    def start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "startTime"))

    @start_time.setter
    def start_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92cc92c870273da089dde04c5b5f19d613b9515901ed64e31584132015d8e7c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startTime", value)

    @builtins.property
    @jsii.member(jsii_name="targetType")
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        targetType: The method that is used to apply the baseline check policy. Valid values:

        - **groupId**: asset groups
        - **uuid**: assets.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetType"))

    @target_type.setter
    def target_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e0892b0bf27ea1feea1fd7f0cbd36ac71eb406bdb4fb8efd5f675eacd65a591)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosBaselineStrategyProps",
    jsii_struct_bases=[],
    name_mapping={
        "baseline_strategy_name": "baselineStrategyName",
        "custom_type": "customType",
        "cycle_days": "cycleDays",
        "end_time": "endTime",
        "risk_sub_type_name": "riskSubTypeName",
        "start_time": "startTime",
        "target_type": "targetType",
    },
)
class RosBaselineStrategyProps:
    def __init__(
        self,
        *,
        baseline_strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        custom_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cycle_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        risk_sub_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        start_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosBaselineStrategy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy

        :param baseline_strategy_name: 
        :param custom_type: 
        :param cycle_days: 
        :param end_time: 
        :param risk_sub_type_name: 
        :param start_time: 
        :param target_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26b47e6f13ba84204b09142ad864c2c94022de76b34c890cc451bfc2d535bcbb)
            check_type(argname="argument baseline_strategy_name", value=baseline_strategy_name, expected_type=type_hints["baseline_strategy_name"])
            check_type(argname="argument custom_type", value=custom_type, expected_type=type_hints["custom_type"])
            check_type(argname="argument cycle_days", value=cycle_days, expected_type=type_hints["cycle_days"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument risk_sub_type_name", value=risk_sub_type_name, expected_type=type_hints["risk_sub_type_name"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "baseline_strategy_name": baseline_strategy_name,
            "custom_type": custom_type,
            "cycle_days": cycle_days,
            "end_time": end_time,
            "risk_sub_type_name": risk_sub_type_name,
            "start_time": start_time,
            "target_type": target_type,
        }

    @builtins.property
    def baseline_strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: baselineStrategyName: The new name of the baseline check policy.
        '''
        result = self._values.get("baseline_strategy_name")
        assert result is not None, "Required property 'baseline_strategy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def custom_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        customType: The type of the baseline check policy. Valid values:

        - **custom**: a custom baseline check policy
        - **common**: a standard baseline check policy.
        '''
        result = self._values.get("custom_type")
        assert result is not None, "Required property 'custom_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cycle_days(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        cycleDays: The new interval of the baseline check. Valid values:

        - **1**: every 2 days
        - **3**: every 4 days
        - **7**: every 8 days
        - **30**: every 31 days.
        '''
        result = self._values.get("cycle_days")
        assert result is not None, "Required property 'cycle_days' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
        '''
        result = self._values.get("end_time")
        assert result is not None, "Required property 'end_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def risk_sub_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskSubTypeName: The subtype of the baselines.
        '''
        result = self._values.get("risk_sub_type_name")
        assert result is not None, "Required property 'risk_sub_type_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
        '''
        result = self._values.get("start_time")
        assert result is not None, "Required property 'start_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        targetType: The method that is used to apply the baseline check policy. Valid values:

        - **groupId**: asset groups
        - **uuid**: assets.
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBaselineStrategyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClientFileProtect(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosClientFileProtect",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::ClientFileProtect``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ClientFileProtect`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClientFileProtectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39884c2e5c8f6a3109b066cada0cf32f2ccf6aff6dfbce17be1b962ccd0634eb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f05bd5739ab0d9cf0e7330ff5f270d46141fa3b396c32ba68be5f8d07d840c76)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAlertLevel")
    def attr_alert_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AlertLevel: The severity of alerts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlertLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrFileOps")
    def attr_file_ops(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileOps: The operations that you want to perform on the files.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileOps"))

    @builtins.property
    @jsii.member(jsii_name="attrFilePaths")
    def attr_file_paths(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FilePaths: The paths to the monitored files. Wildcard characters are supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFilePaths"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Platform: The type of the operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProcPaths")
    def attr_proc_paths(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProcPaths: The paths to the monitored processes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProcPaths"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleAction: The handling method of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleAction"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: The ID of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSwitchId")
    def attr_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SwitchId: The switch ID of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSwitchId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e2cf1a284957e753713b7855df9a4c67da53d1f1ff60bf53302eb113657b450d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileOps")
    def file_ops(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: fileOps: The operations that you want to perform on the files.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "fileOps"))

    @file_ops.setter
    def file_ops(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5d267951d0cf046fb39fc36432565733e82355b045b6319a9a7251298ff2b65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileOps", value)

    @builtins.property
    @jsii.member(jsii_name="filePaths")
    def file_paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: filePaths: The paths to the monitored files. Wildcard characters are supported.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "filePaths"))

    @file_paths.setter
    def file_paths(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ae5825898685e85668bec77da87a15d9670f6448afab57f00eb9ee65692a843)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filePaths", value)

    @builtins.property
    @jsii.member(jsii_name="procPaths")
    def proc_paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: procPaths: The paths to the monitored processes.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "procPaths"))

    @proc_paths.setter
    def proc_paths(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c378635171a548acbc01f40f42e81a34c8cc9a99da43ba9aa4a86b9359a6640)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "procPaths", value)

    @builtins.property
    @jsii.member(jsii_name="ruleAction")
    def rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleAction: The handling method of the rule. Valid values:

        - pass: allow
        - alert.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleAction"))

    @rule_action.setter
    def rule_action(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6368f96e034aa4c84826f2c7dd94d6537acda1767a9c0cc28679760b05f754b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleAction", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a108f146e89d7ccc797ddd2ac514e937d59c3f5edc3601c977929ba7403810ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="alertLevel")
    def alert_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        alertLevel: The severity of alerts. Valid values:

        - 0: does not generate alerts
        - 1: sends notifications
        - 2: suspicious
        - 3: high-risk.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alertLevel"))

    @alert_level.setter
    def alert_level(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58fd588be809bb6cc70ea2ec9f8114448b20da34e2f80c2f836366af3e8ce481)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alertLevel", value)

    @builtins.property
    @jsii.member(jsii_name="platform")
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        platform: The type of the operating system. Valid values:

        - **windows**: Windows
        - **linux**: Linux.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "platform"))

    @platform.setter
    def platform(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c529cb9682cda658649e41d153bd82970a08730288d1c72ce33b46f51ca3b26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "platform", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: Rule status.
        1: Enabled
        0: Not enabled
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a579074ffa0df6ae81a4d6391a30b1b89d5a3f0c2bb775693b85f0871852b635)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="switchId")
    def switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: switchId: The switch ID of the rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "switchId"))

    @switch_id.setter
    def switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77b7df4f0645a971782baf62791f15b23f96e45f475738da07b3e9dca62bff8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "switchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosClientFileProtectProps",
    jsii_struct_bases=[],
    name_mapping={
        "file_ops": "fileOps",
        "file_paths": "filePaths",
        "proc_paths": "procPaths",
        "rule_action": "ruleAction",
        "rule_name": "ruleName",
        "alert_level": "alertLevel",
        "platform": "platform",
        "status": "status",
        "switch_id": "switchId",
    },
)
class RosClientFileProtectProps:
    def __init__(
        self,
        *,
        file_ops: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        file_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        proc_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        rule_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alert_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosClientFileProtect``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect

        :param file_ops: 
        :param file_paths: 
        :param proc_paths: 
        :param rule_action: 
        :param rule_name: 
        :param alert_level: 
        :param platform: 
        :param status: 
        :param switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adbca6e59a2d1e3d9af234f3f2d642160bd1f65b04ed0f0eb7a1adc245c1058a)
            check_type(argname="argument file_ops", value=file_ops, expected_type=type_hints["file_ops"])
            check_type(argname="argument file_paths", value=file_paths, expected_type=type_hints["file_paths"])
            check_type(argname="argument proc_paths", value=proc_paths, expected_type=type_hints["proc_paths"])
            check_type(argname="argument rule_action", value=rule_action, expected_type=type_hints["rule_action"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument alert_level", value=alert_level, expected_type=type_hints["alert_level"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument switch_id", value=switch_id, expected_type=type_hints["switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "file_ops": file_ops,
            "file_paths": file_paths,
            "proc_paths": proc_paths,
            "rule_action": rule_action,
            "rule_name": rule_name,
        }
        if alert_level is not None:
            self._values["alert_level"] = alert_level
        if platform is not None:
            self._values["platform"] = platform
        if status is not None:
            self._values["status"] = status
        if switch_id is not None:
            self._values["switch_id"] = switch_id

    @builtins.property
    def file_ops(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: fileOps: The operations that you want to perform on the files.
        '''
        result = self._values.get("file_ops")
        assert result is not None, "Required property 'file_ops' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def file_paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: filePaths: The paths to the monitored files. Wildcard characters are supported.
        '''
        result = self._values.get("file_paths")
        assert result is not None, "Required property 'file_paths' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def proc_paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: procPaths: The paths to the monitored processes.
        '''
        result = self._values.get("proc_paths")
        assert result is not None, "Required property 'proc_paths' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleAction: The handling method of the rule. Valid values:

        - pass: allow
        - alert.
        '''
        result = self._values.get("rule_action")
        assert result is not None, "Required property 'rule_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alert_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        alertLevel: The severity of alerts. Valid values:

        - 0: does not generate alerts
        - 1: sends notifications
        - 2: suspicious
        - 3: high-risk.
        '''
        result = self._values.get("alert_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        platform: The type of the operating system. Valid values:

        - **windows**: Windows
        - **linux**: Linux.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: Rule status.
        1: Enabled
        0: Not enabled
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: switchId: The switch ID of the rule.
        '''
        result = self._values.get("switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClientFileProtectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosContainerDefenseRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::ContainerDefenseRule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ContainerDefenseRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosContainerDefenseRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f95a5e9f45cd97eba5b02bda6dc6713f1d8395c58734bfde7cdddd6bb5c618d6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__92f3108f9afe3a2d40bf29fbd89205a6976c826e6c9ed18624b45986b1edb293)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Rule description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleAction: The action that is performed when the rule is hit.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleAction"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: Rule Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleSwitch")
    def attr_rule_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleSwitch: The switch of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleType")
    def attr_rule_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleType: The rule type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleType"))

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Scope: Rule scope.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScope"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Whitelist: The whitelist of rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWhitelist"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b61a4b4e748f6126d23a3a6b6e5c28fad55d042df21a66206502484e3ccc0daf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Rule description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71cbbc917a0cf471cebaaa99689f3db0a10d66741b5cefae5f56baa406f3b009)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="ruleAction")
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleAction: The action that is performed when the rule is hit. Valid values:

        - **1**: alert
        - **2**: block.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleAction"))

    @rule_action.setter
    def rule_action(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf3b9675675ddc33787dc8167635b86b116a83530ca9e76ab51e455d830013e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleAction", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleId: Rule Id.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0005c8b49a6ebecd130cf2d14ef9cc60a03e0ee48ef89e1e5b8d2def473b69ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: The name of the rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8755b29f75e6aba52a527ae8c21eeadddba68346d3c12c7f8f0c1d0102368fa7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="ruleSwitch")
    def rule_switch(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleSwitch: The switch of the rule. Valid values:

        - 0: off.
        - 1: on.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleSwitch"))

    @rule_switch.setter
    def rule_switch(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3a9371c3dbb7fcba8fd6dc430ea077b5a7071fa46d048373f033adebb9ae556)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="ruleType")
    def rule_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleType: The rule type. Value:

        - 2: User Rules
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleType"))

    @rule_type.setter
    def rule_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c6ec0427e953373525a89d317d96b7b4c7898a6179f14530a3ac183813e6edf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleType", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.ScopeProperty"]]]]:
        '''
        :Property: scope: Rule scope.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.ScopeProperty"]]]], jsii.get(self, "scope"))

    @scope.setter
    def scope(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.ScopeProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abd710b9c75b1c5a629149cf76a915d25f26b78f7c12aea728ffe27ff6917d24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)

    @builtins.property
    @jsii.member(jsii_name="whitelist")
    def whitelist(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.WhitelistProperty"]]:
        '''
        :Property: whitelist: The whitelist of rule.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.WhitelistProperty"]], jsii.get(self, "whitelist"))

    @whitelist.setter
    def whitelist(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerDefenseRule.WhitelistProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1722098d04b323571f84373faf71d74178930f34c4353dc23d6b7ac0f49cd199)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whitelist", value)

    @builtins.property
    @jsii.member(jsii_name="whitelistHash")
    def whitelist_hash(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: whitelistHash: The whitelist Hash.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "whitelistHash"))

    @whitelist_hash.setter
    def whitelist_hash(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec96e4e2cbd22e83fc89d3f21d9b5cd2f013966a1951d3a13565962ceffc9c7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whitelistHash", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.ScopeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "all_namespace": "allNamespace",
            "cluster_id": "clusterId",
            "namespaces": "namespaces",
        },
    )
    class ScopeProperty:
        def __init__(
            self,
            *,
            all_namespace: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            namespaces: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param all_namespace: 
            :param cluster_id: 
            :param namespaces: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__453c9c0f6e2b2dd9dd4c32ee1461a2bc3f467f2f65d41ddd34ba73ac884dcbd9)
                check_type(argname="argument all_namespace", value=all_namespace, expected_type=type_hints["all_namespace"])
                check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
                check_type(argname="argument namespaces", value=namespaces, expected_type=type_hints["namespaces"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if all_namespace is not None:
                self._values["all_namespace"] = all_namespace
            if cluster_id is not None:
                self._values["cluster_id"] = cluster_id
            if namespaces is not None:
                self._values["namespaces"] = namespaces

        @builtins.property
        def all_namespace(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            allNamespace: Specifies whether to include all namespaces. Valid values:

            - 0: You can use the Namespaces parameter to specify the namespaces to include.
            - 1: All namespaces are included.
            '''
            result = self._values.get("all_namespace")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cluster_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clusterId: The ID of the cluster.
            '''
            result = self._values.get("cluster_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def namespaces(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: namespaces: The namespaces to include.
            '''
            result = self._values.get("namespaces")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScopeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.WhitelistProperty",
        jsii_struct_bases=[],
        name_mapping={"image": "image", "path": "path"},
    )
    class WhitelistProperty:
        def __init__(
            self,
            *,
            image: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param image: 
            :param path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__46ec5d7b2048741c9eae73557716711df7b26c2611ee3fa0626ea03a0de3775a)
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if image is not None:
                self._values["image"] = image
            if path is not None:
                self._values["path"] = path

        @builtins.property
        def image(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: image: The images that need to be added to the whitelist.
            '''
            result = self._values.get("image")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: path: The paths to the files that need to be added to the whitelist.
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WhitelistProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosContainerDefenseRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "rule_action": "ruleAction",
        "rule_id": "ruleId",
        "rule_name": "ruleName",
        "rule_switch": "ruleSwitch",
        "rule_type": "ruleType",
        "scope": "scope",
        "whitelist": "whitelist",
        "whitelist_hash": "whitelistHash",
    },
)
class RosContainerDefenseRuleProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_action: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_switch: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scope: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerDefenseRule.ScopeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        whitelist: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerDefenseRule.WhitelistProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        whitelist_hash: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosContainerDefenseRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule

        :param description: 
        :param rule_action: 
        :param rule_id: 
        :param rule_name: 
        :param rule_switch: 
        :param rule_type: 
        :param scope: 
        :param whitelist: 
        :param whitelist_hash: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe1fc2531597e266d7d45364f094a195d805dba8bd51d7127c9461cc8bc6fb29)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument rule_action", value=rule_action, expected_type=type_hints["rule_action"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument rule_switch", value=rule_switch, expected_type=type_hints["rule_switch"])
            check_type(argname="argument rule_type", value=rule_type, expected_type=type_hints["rule_type"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument whitelist", value=whitelist, expected_type=type_hints["whitelist"])
            check_type(argname="argument whitelist_hash", value=whitelist_hash, expected_type=type_hints["whitelist_hash"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if rule_action is not None:
            self._values["rule_action"] = rule_action
        if rule_id is not None:
            self._values["rule_id"] = rule_id
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if rule_switch is not None:
            self._values["rule_switch"] = rule_switch
        if rule_type is not None:
            self._values["rule_type"] = rule_type
        if scope is not None:
            self._values["scope"] = scope
        if whitelist is not None:
            self._values["whitelist"] = whitelist
        if whitelist_hash is not None:
            self._values["whitelist_hash"] = whitelist_hash

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Rule description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleAction: The action that is performed when the rule is hit. Valid values:

        - **1**: alert
        - **2**: block.
        '''
        result = self._values.get("rule_action")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleId: Rule Id.
        '''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: The name of the rule.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_switch(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleSwitch: The switch of the rule. Valid values:

        - 0: off.
        - 1: on.
        '''
        result = self._values.get("rule_switch")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleType: The rule type. Value:

        - 2: User Rules
        '''
        result = self._values.get("rule_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scope(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerDefenseRule.ScopeProperty]]]]:
        '''
        :Property: scope: Rule scope.
        '''
        result = self._values.get("scope")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerDefenseRule.ScopeProperty]]]], result)

    @builtins.property
    def whitelist(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerDefenseRule.WhitelistProperty]]:
        '''
        :Property: whitelist: The whitelist of rule.
        '''
        result = self._values.get("whitelist")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerDefenseRule.WhitelistProperty]], result)

    @builtins.property
    def whitelist_hash(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: whitelistHash: The whitelist Hash.
        '''
        result = self._values.get("whitelist_hash")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosContainerDefenseRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomCheckItem(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckItem",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::CustomCheckItem``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomCheckItem`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomCheckItemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53762ab8f99b63b8f9f76a33c955745e9cdfb98a253535b901f19a1299eb64e7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e0f5be4bff6593a01a4e49a47b26aa66d837b483c3cd9513c8f1734f70a8b8f5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAssistInfo")
    def attr_assist_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AssistInfo: Check Item Description Help Information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssistInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckId")
    def attr_check_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CheckId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCheckId"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckRule")
    def attr_check_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CheckRule: Check Item Check Rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCheckRule"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckShowName")
    def attr_check_show_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CheckShowName: Check item display name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCheckShowName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Check item description information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSubType")
    def attr_instance_sub_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceSubType: Asset subtype to which the check item belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: Asset type to which the check item belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Remark: Remarks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemark"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RiskLevel: Risk level of inspection items.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrSectionIds")
    def attr_section_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SectionIds: CHECK SECTION OF INSPECTIONS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSectionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSolution")
    def attr_solution(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Solution: Check Item Solution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSolution"))

    @builtins.property
    @jsii.member(jsii_name="attrVendor")
    def attr_vendor(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Vendor: Vendor to which the item belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVendor"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="checkRule")
    def check_rule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: checkRule: Check Item Check Rules.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "checkRule"))

    @check_rule.setter
    def check_rule(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2c350eb7a8f83972a0246a7369dfe58ec5a8badd1396944453c542b0885ded9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkRule", value)

    @builtins.property
    @jsii.member(jsii_name="checkShowName")
    def check_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: checkShowName: Check item display name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "checkShowName"))

    @check_show_name.setter
    def check_show_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03c2ba0fc3fb4eed77899245f40b0e572ff1f9485cc1394a5da4426b9f508fce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkShowName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f019ce5aeb2cc567710458c0bbfbee9fa859bbf984146014ac8d923f43d965d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceSubType")
    def instance_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceSubType: Asset subtype to which the check item belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceSubType"))

    @instance_sub_type.setter
    def instance_sub_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35af4c1444adc2fec43ec957695836112a7956f15f7a18ff00d24bc5454f1598)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceSubType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: Asset type to which the check item belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69bdbb161a7cdb1c6a7ca8ce4bbf8380d6ef9eb4c3d8479a00909969f14c5491)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="riskLevel")
    def risk_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskLevel: Risk level of inspection items.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "riskLevel"))

    @risk_level.setter
    def risk_level(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__144f38b0c194b3d61a6916ca1c935b5fb7e01a9655e26efcfd806b0f7962763f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "riskLevel", value)

    @builtins.property
    @jsii.member(jsii_name="sectionIds")
    def section_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: sectionIds: CHECK SECTION OF INSPECTIONS.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "sectionIds"))

    @section_ids.setter
    def section_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39adca2c66a7bc714e1d9de1bc88bc6a9c2ea92af580a4e705671735936184c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sectionIds", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        status: Check item status. Values:
        EDIT: Editing in progress
        RELEASE: Published
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a231fd8df4777e00093d7ae270f24dd08735b173ddacd0f040ea7ea46c4dd979)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="vendor")
    def vendor(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vendor: Vendor to which the item belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vendor"))

    @vendor.setter
    def vendor(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ae9ef4559dac83a0b794c85e59128ce6108a950eb3e73d2f30376e1b7d32952)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vendor", value)

    @builtins.property
    @jsii.member(jsii_name="assistInfo")
    def assist_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.AssistInfoProperty"]]:
        '''
        :Property: assistInfo: Check Item Description Help Information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.AssistInfoProperty"]], jsii.get(self, "assistInfo"))

    @assist_info.setter
    def assist_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.AssistInfoProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2483cb0dbfef13b154068f5517ea0c79972345a3c83425cd4dd0c5def21d62af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "assistInfo", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.DescriptionProperty"]]:
        '''
        :Property: description: Check item description information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.DescriptionProperty"]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.DescriptionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25e10e97ec59c0304d2830e6f1c156e31153991c0a4df20a644f608168081f7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remarks.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93afb55b3b7ee3621e523bd031d3172c71115dcb1e69023062736aa866ed3332)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="solution")
    def solution(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.SolutionProperty"]]:
        '''
        :Property: solution: Check Item Solution.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.SolutionProperty"]], jsii.get(self, "solution"))

    @solution.setter
    def solution(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomCheckItem.SolutionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cf344e2c0c623bab12d82d05612b250705702cd8b953d8cab8df079f8a5a19f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "solution", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.AssistInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "value": "value"},
    )
    class AssistInfoProperty:
        def __init__(
            self,
            *,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8b9039bd04ed4b11bdd6fcb0b4a3be046ca6e6332d93904f27ab55f2256a8e73)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Check Item Description Help Information Type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Check Item Description Help Information Value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AssistInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.DescriptionProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "value": "value"},
    )
    class DescriptionProperty:
        def __init__(
            self,
            *,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cd1b9e527e29d47c7fd93a8ba6f6122418513cad1797ac51c32abdf706d59990)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Check Item Description Information Type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Check item description information value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DescriptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckItem.SolutionProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "value": "value"},
    )
    class SolutionProperty:
        def __init__(
            self,
            *,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6d34dee1b8a5f99578082d63c0808b4edab66f9f6b464090b411f8e2f395b68e)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Check Item Solution Type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Check Item Solution Value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SolutionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckItemProps",
    jsii_struct_bases=[],
    name_mapping={
        "check_rule": "checkRule",
        "check_show_name": "checkShowName",
        "instance_sub_type": "instanceSubType",
        "instance_type": "instanceType",
        "risk_level": "riskLevel",
        "section_ids": "sectionIds",
        "status": "status",
        "vendor": "vendor",
        "assist_info": "assistInfo",
        "description": "description",
        "remark": "remark",
        "solution": "solution",
    },
)
class RosCustomCheckItemProps:
    def __init__(
        self,
        *,
        check_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        check_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        risk_level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        section_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vendor: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        assist_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.AssistInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.DescriptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        solution: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.SolutionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosCustomCheckItem``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem

        :param check_rule: 
        :param check_show_name: 
        :param instance_sub_type: 
        :param instance_type: 
        :param risk_level: 
        :param section_ids: 
        :param status: 
        :param vendor: 
        :param assist_info: 
        :param description: 
        :param remark: 
        :param solution: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac36570a22e611fb8d5e06ef9a33e6020256ad94ec2fbee4cf0cb9b7382b2117)
            check_type(argname="argument check_rule", value=check_rule, expected_type=type_hints["check_rule"])
            check_type(argname="argument check_show_name", value=check_show_name, expected_type=type_hints["check_show_name"])
            check_type(argname="argument instance_sub_type", value=instance_sub_type, expected_type=type_hints["instance_sub_type"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument risk_level", value=risk_level, expected_type=type_hints["risk_level"])
            check_type(argname="argument section_ids", value=section_ids, expected_type=type_hints["section_ids"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vendor", value=vendor, expected_type=type_hints["vendor"])
            check_type(argname="argument assist_info", value=assist_info, expected_type=type_hints["assist_info"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument solution", value=solution, expected_type=type_hints["solution"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "check_rule": check_rule,
            "check_show_name": check_show_name,
            "instance_sub_type": instance_sub_type,
            "instance_type": instance_type,
            "risk_level": risk_level,
            "section_ids": section_ids,
            "status": status,
            "vendor": vendor,
        }
        if assist_info is not None:
            self._values["assist_info"] = assist_info
        if description is not None:
            self._values["description"] = description
        if remark is not None:
            self._values["remark"] = remark
        if solution is not None:
            self._values["solution"] = solution

    @builtins.property
    def check_rule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: checkRule: Check Item Check Rules.
        '''
        result = self._values.get("check_rule")
        assert result is not None, "Required property 'check_rule' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def check_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: checkShowName: Check item display name.
        '''
        result = self._values.get("check_show_name")
        assert result is not None, "Required property 'check_show_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceSubType: Asset subtype to which the check item belongs.
        '''
        result = self._values.get("instance_sub_type")
        assert result is not None, "Required property 'instance_sub_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: Asset type to which the check item belongs.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def risk_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskLevel: Risk level of inspection items.
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def section_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: sectionIds: CHECK SECTION OF INSPECTIONS.
        '''
        result = self._values.get("section_ids")
        assert result is not None, "Required property 'section_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def status(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        status: Check item status. Values:
        EDIT: Editing in progress
        RELEASE: Published
        '''
        result = self._values.get("status")
        assert result is not None, "Required property 'status' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vendor(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vendor: Vendor to which the item belongs.
        '''
        result = self._values.get("vendor")
        assert result is not None, "Required property 'vendor' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def assist_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.AssistInfoProperty]]:
        '''
        :Property: assistInfo: Check Item Description Help Information.
        '''
        result = self._values.get("assist_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.AssistInfoProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.DescriptionProperty]]:
        '''
        :Property: description: Check item description information.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.DescriptionProperty]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remarks.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def solution(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.SolutionProperty]]:
        '''
        :Property: solution: Check Item Solution.
        '''
        result = self._values.get("solution")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.SolutionProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomCheckItemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomCheckStandardPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckStandardPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::CustomCheckStandardPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomCheckStandardPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomCheckStandardPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__675cd53840c43ba6adb854788776a2cb7acffa4a47976e8650d2e106ad928c11)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ab8d288eae3e76bc72db41cd3e1447575bf2b7636ad08c39373245a6d55f3cc5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: The ID of the custom check policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9f78ecfe56cd2ad0fdd07b90e300af6b3de14341cb9d481701eda022733ed0e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyShowName")
    def policy_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyShowName: The name of the custom policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyShowName"))

    @policy_show_name.setter
    def policy_show_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58b4e67e64886f898672340a7493d6ba6ff49c6b105faf2f35ab2b0182337bc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyShowName", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        policyType: The category type of the custom check policy:

        - STANDARD: standard.
        - REQUIREMENT: requirement.
        - SECTION: section.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26c97345fe7198d516b184cde84b71ecb35e6d4b58660631fa2b6a726a9700c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="dependentPolicyId")
    def dependent_policy_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dependentPolicyId: The ID of the parent policy.
        (Dependency order from low to high: Section -> Requirement -> Standard)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dependentPolicyId"))

    @dependent_policy_id.setter
    def dependent_policy_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e27ab63cfa7f84dc25ec962ad35e1ebb3c5b4efd5037e2b30c4bee46fe737679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dependentPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The category name of the associated policy (required when PolicyType is STANDARD):

        - AISPM: AI Security Posture Management (AISPM).
        - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
        - RISK: Security Risk.
        - COMPLIANCE: Compliance Risk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb57d5ce5b9b35eb7170dfd1092efa10412f9ccf99b7341a7634dadcebaf1902)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosCustomCheckStandardPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_show_name": "policyShowName",
        "policy_type": "policyType",
        "dependent_policy_id": "dependentPolicyId",
        "type": "type",
    },
)
class RosCustomCheckStandardPolicyProps:
    def __init__(
        self,
        *,
        policy_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dependent_policy_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCustomCheckStandardPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy

        :param policy_show_name: 
        :param policy_type: 
        :param dependent_policy_id: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9d4f631c12f2583ad3e1a74ce5e500218f71ffcc7c9f8b527b023e79313e8e8)
            check_type(argname="argument policy_show_name", value=policy_show_name, expected_type=type_hints["policy_show_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument dependent_policy_id", value=dependent_policy_id, expected_type=type_hints["dependent_policy_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_show_name": policy_show_name,
            "policy_type": policy_type,
        }
        if dependent_policy_id is not None:
            self._values["dependent_policy_id"] = dependent_policy_id
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def policy_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyShowName: The name of the custom policy.
        '''
        result = self._values.get("policy_show_name")
        assert result is not None, "Required property 'policy_show_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        policyType: The category type of the custom check policy:

        - STANDARD: standard.
        - REQUIREMENT: requirement.
        - SECTION: section.
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dependent_policy_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dependentPolicyId: The ID of the parent policy.
        (Dependency order from low to high: Section -> Requirement -> Standard)
        '''
        result = self._values.get("dependent_policy_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The category name of the associated policy (required when PolicyType is STANDARD):

        - AISPM: AI Security Posture Management (AISPM).
        - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
        - RISK: Security Risk.
        - COMPLIANCE: Compliance Risk.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomCheckStandardPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCycleTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosCycleTask",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::CycleTask``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CycleTask`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCycleTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c533c04fa560cfb21c320981d969a4f9287cd2cff28eb1776a1a785d2fe88957)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7d66b638a4c07940fb4c170fa8988ef9c9929b2e7929f6ab097f9767fcc2dac3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigId: Configuration ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Enable: Specifies whether to enable the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrFirstDateStr")
    def attr_first_date_str(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FirstDateStr: The first time when the task is performed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFirstDateStr"))

    @builtins.property
    @jsii.member(jsii_name="attrIntervalPeriod")
    def attr_interval_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntervalPeriod: The interval at which the task is run.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntervalPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrParam")
    def attr_param(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Param: The additional information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParam"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriodUnit")
    def attr_period_unit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PeriodUnit: The unit of the scan interval.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEndTime")
    def attr_target_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetEndTime: The time when the task ends. Unit: hours.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetStartTime")
    def attr_target_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetStartTime: The time when the task is started. Unit: hours.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskName")
    def attr_task_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskName: The task name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskName"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskType")
    def attr_task_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskType: The type of the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        enable: Specifies whether to enable the task. Valid values:

        - **1**: yes
        - **0**: no.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__145357ec8c4c1ae663a8ede6fa23f15d05756057eccb3c09de613027a2eea098)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__263411ed93f700a4f0be06858ac0a284e07751c121c0decc6125e3701b5e1678)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="firstDateStr")
    def first_date_str(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firstDateStr: The first time when the task is performed.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "firstDateStr"))

    @first_date_str.setter
    def first_date_str(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3de861d7845a9be9af99ddf734f0c91dc46133a323d7bed632346363aa27b52b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firstDateStr", value)

    @builtins.property
    @jsii.member(jsii_name="intervalPeriod")
    def interval_period(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: intervalPeriod: The interval at which the task is run.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "intervalPeriod"))

    @interval_period.setter
    def interval_period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69b04507c19799580b31e6fd8ae090847077d42a817359ce45d073f0b5d78b0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "intervalPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        periodUnit: The unit of the scan interval. Valid values:

        - **day**
        - **hour**.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f816e4df244a0912f96e54981609bfb45b33c1c214b208e5d8cf842a529e8add)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="targetEndTime")
    def target_end_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetEndTime: The time when the task ends. Unit: hours.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetEndTime"))

    @target_end_time.setter
    def target_end_time(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18f8acafb7f3d9d5eaa25c7409e22559e927f5bf17092c060992cf6ec96e023a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetEndTime", value)

    @builtins.property
    @jsii.member(jsii_name="targetStartTime")
    def target_start_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetStartTime: The time when the task is started. Unit: hours.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetStartTime"))

    @target_start_time.setter
    def target_start_time(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e81824deece0b3599b85f5805f8d35568d86977ae1b332808543185c39883544)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetStartTime", value)

    @builtins.property
    @jsii.member(jsii_name="taskName")
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskName: The task name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskName"))

    @task_name.setter
    def task_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9638b3966b8ce4aefbc8ce4bd4f91d72c678c9e7ddf3e519a84c5f45e2bfd9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskName", value)

    @builtins.property
    @jsii.member(jsii_name="taskType")
    def task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        taskType: The type of the task. Valid values:

        - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
        - **IMAGE_SCAN**: image scan task
        - **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskType"))

    @task_type.setter
    def task_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d684d59b1b5984d1052deb2caaaf195f28aff59550eb1a1d27e6005f0f1a01f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskType", value)

    @builtins.property
    @jsii.member(jsii_name="param")
    def param(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: param: The additional information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "param"))

    @param.setter
    def param(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8452b26e47a822722759a00567a2ebf08bf1128959c1abc8011e897c8beb132)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "param", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: source: The additional source for the task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__345e4141333c717ba8dbe06a42a1ae48f27bc60c8e9683aa2878d2e60bec73fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosCycleTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "enable": "enable",
        "first_date_str": "firstDateStr",
        "interval_period": "intervalPeriod",
        "period_unit": "periodUnit",
        "target_end_time": "targetEndTime",
        "target_start_time": "targetStartTime",
        "task_name": "taskName",
        "task_type": "taskType",
        "param": "param",
        "source": "source",
    },
)
class RosCycleTaskProps:
    def __init__(
        self,
        *,
        enable: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        first_date_str: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        interval_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_end_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        target_start_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        param: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCycleTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask

        :param enable: 
        :param first_date_str: 
        :param interval_period: 
        :param period_unit: 
        :param target_end_time: 
        :param target_start_time: 
        :param task_name: 
        :param task_type: 
        :param param: 
        :param source: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b43be5f607de02998068b4bd5349b44563bc2884af287f2c40eb777dcc7030f2)
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument first_date_str", value=first_date_str, expected_type=type_hints["first_date_str"])
            check_type(argname="argument interval_period", value=interval_period, expected_type=type_hints["interval_period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument target_end_time", value=target_end_time, expected_type=type_hints["target_end_time"])
            check_type(argname="argument target_start_time", value=target_start_time, expected_type=type_hints["target_start_time"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument task_type", value=task_type, expected_type=type_hints["task_type"])
            check_type(argname="argument param", value=param, expected_type=type_hints["param"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "enable": enable,
            "first_date_str": first_date_str,
            "interval_period": interval_period,
            "period_unit": period_unit,
            "target_end_time": target_end_time,
            "target_start_time": target_start_time,
            "task_name": task_name,
            "task_type": task_type,
        }
        if param is not None:
            self._values["param"] = param
        if source is not None:
            self._values["source"] = source

    @builtins.property
    def enable(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        enable: Specifies whether to enable the task. Valid values:

        - **1**: yes
        - **0**: no.
        '''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def first_date_str(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firstDateStr: The first time when the task is performed.
        '''
        result = self._values.get("first_date_str")
        assert result is not None, "Required property 'first_date_str' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def interval_period(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: intervalPeriod: The interval at which the task is run.
        '''
        result = self._values.get("interval_period")
        assert result is not None, "Required property 'interval_period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        periodUnit: The unit of the scan interval. Valid values:

        - **day**
        - **hour**.
        '''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_end_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetEndTime: The time when the task ends. Unit: hours.
        '''
        result = self._values.get("target_end_time")
        assert result is not None, "Required property 'target_end_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_start_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetStartTime: The time when the task is started. Unit: hours.
        '''
        result = self._values.get("target_start_time")
        assert result is not None, "Required property 'target_start_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskName: The task name.
        '''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        taskType: The type of the task. Valid values:

        - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
        - **IMAGE_SCAN**: image scan task
        - **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
        '''
        result = self._values.get("task_type")
        assert result is not None, "Required property 'task_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def param(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: param: The additional information.
        '''
        result = self._values.get("param")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: source: The additional source for the task.
        '''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCycleTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::Group``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Group`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__471d5beb4e2082af3ee72a22a2a7a44e857db0de439ccb50343fa4b1f236f55b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__55b2f5cc54422cd1da1fe800e7d76b44ccc23e8059e2deb643b09ff0bcff5d7e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupFlag")
    def attr_group_flag(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupFlag: The type of the server group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupFlag"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: The ID of the server group for which you want to add to or remove servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b3a5646290e669a7e19ed756b79752be43514173b3948d18e5b55b5d4fa08d13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupId: The ID of the server group for which you want to add to or remove servers.
        .. epigraph::

        To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0088444aac5e3e17b2fcc620a89a6a8b45c4b8bbbd4fa9daf25c377bf3f6f4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
        .. epigraph::

        To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9ee18dd780d1de3562c70832cc9d81d4f53c164130a0f2f25a85c68f6459d5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_id": "groupId", "group_name": "groupName"},
)
class RosGroupProps:
    def __init__(
        self,
        *,
        group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group

        :param group_id: 
        :param group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__574d1b655400f2af8a60410b1fab7d237a5f407adb8457d2060f1580f799427c)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_id is not None:
            self._values["group_id"] = group_id
        if group_name is not None:
            self._values["group_name"] = group_name

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupId: The ID of the server group for which you want to add to or remove servers.
        .. epigraph::

        To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
        .. epigraph::

        To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the `DescribeAllGroups <~~DescribeAllGroups~~>`_ operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHoneyPot(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneyPot",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::HoneyPot``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HoneyPot`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHoneyPotProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4a8c59ea44ec58eeacc6f5c477b478a6b727c9f4eb23be22742a9eb71ee769a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__939cff27922a6edebc83cb05c7e2ab711577552fea03e475e7eb459778883f7e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotId")
    def attr_honeypot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotId: The ID of the honeypot.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotId"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageId")
    def attr_honeypot_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotImageId: The ID of the honeypot image.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotImageName: The name of the honeypot image.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotName")
    def attr_honeypot_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotName: The custom name of the honeypot.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotName"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeId: The ID of the management node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: State: Honeypot status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__50c7f5e06100b30751f4980c5f4f3be77c502f4fcb411471a1d4676f3bbeab60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotImageId")
    def honeypot_image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        honeypotImageId: The ID of the honeypot image.
        .. epigraph::

        You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the IDs of images from the **HoneypotImageId** response parameter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "honeypotImageId"))

    @honeypot_image_id.setter
    def honeypot_image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78f3d185c79ec8c2237ca911a995c76e6fa6d427a2ea9aebdfb3cb4d2aab958e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotImageId", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotImageName")
    def honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        honeypotImageName: The name of the honeypot image.
        .. epigraph::

        You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the names of images from the **HoneypotImageName** response parameter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "honeypotImageName"))

    @honeypot_image_name.setter
    def honeypot_image_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79cba2f79296a64f43023da1ff1cb925ed1a953567cb6d033282f4e922ef9757)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotImageName", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotName")
    def honeypot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: honeypotName: The custom name of the honeypot.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "honeypotName"))

    @honeypot_name.setter
    def honeypot_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d015c535fdbad501f7d588cca8a7272c1b8e446a0abd91b0550c318204650fbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotName", value)

    @builtins.property
    @jsii.member(jsii_name="nodeId")
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeId: The ID of the management node.
        .. epigraph::

        You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeId"))

    @node_id.setter
    def node_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__485381af275ddd20aaaa7d583852762a358c3fbbcf1f0b534d46afe255936a21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeId", value)

    @builtins.property
    @jsii.member(jsii_name="meta")
    def meta(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        meta: Honeypot custom configuration. JSON format. Contains the following fields:

        - **trojan_git**:Git counterplan. Value:
        - **zip**:Git source package
        - **web**:.git directory leak
        - **close**: close
        - **trojan_git_addr**:Git anti-control connection address
        - **Trojan_git.zip**:Git anti-Trojan package
        - **burp**:Burp counter. Value:
        - **open**: On
        - **close**: close
        - **portrait_option**: traceability configuration. Value:
        - **false**: Disabled
        - **true**: Enable.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "meta"))

    @meta.setter
    def meta(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7f11e71aac2fcce43de7e8a9a4a957ae77c0195ef3c34c8dda82d4423a7df50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "meta", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneyPotProps",
    jsii_struct_bases=[],
    name_mapping={
        "honeypot_image_id": "honeypotImageId",
        "honeypot_image_name": "honeypotImageName",
        "honeypot_name": "honeypotName",
        "node_id": "nodeId",
        "meta": "meta",
    },
)
class RosHoneyPotProps:
    def __init__(
        self,
        *,
        honeypot_image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        honeypot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosHoneyPot``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot

        :param honeypot_image_id: 
        :param honeypot_image_name: 
        :param honeypot_name: 
        :param node_id: 
        :param meta: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5187f9cc439cb829ce8c7ade1ab0871c5c3fdc154feaaa927024833ebecad54a)
            check_type(argname="argument honeypot_image_id", value=honeypot_image_id, expected_type=type_hints["honeypot_image_id"])
            check_type(argname="argument honeypot_image_name", value=honeypot_image_name, expected_type=type_hints["honeypot_image_name"])
            check_type(argname="argument honeypot_name", value=honeypot_name, expected_type=type_hints["honeypot_name"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument meta", value=meta, expected_type=type_hints["meta"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "honeypot_image_id": honeypot_image_id,
            "honeypot_image_name": honeypot_image_name,
            "honeypot_name": honeypot_name,
            "node_id": node_id,
        }
        if meta is not None:
            self._values["meta"] = meta

    @builtins.property
    def honeypot_image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        honeypotImageId: The ID of the honeypot image.
        .. epigraph::

        You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the IDs of images from the **HoneypotImageId** response parameter.
        '''
        result = self._values.get("honeypot_image_id")
        assert result is not None, "Required property 'honeypot_image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        honeypotImageName: The name of the honeypot image.
        .. epigraph::

        You can call the `ListAvailableHoneypot <~~ListAvailableHoneypot~~>`_ operation to query the names of images from the **HoneypotImageName** response parameter.
        '''
        result = self._values.get("honeypot_image_name")
        assert result is not None, "Required property 'honeypot_image_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def honeypot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: honeypotName: The custom name of the honeypot.
        '''
        result = self._values.get("honeypot_name")
        assert result is not None, "Required property 'honeypot_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeId: The ID of the management node.
        .. epigraph::

        You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        '''
        result = self._values.get("node_id")
        assert result is not None, "Required property 'node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def meta(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        meta: Honeypot custom configuration. JSON format. Contains the following fields:

        - **trojan_git**:Git counterplan. Value:
        - **zip**:Git source package
        - **web**:.git directory leak
        - **close**: close
        - **trojan_git_addr**:Git anti-control connection address
        - **Trojan_git.zip**:Git anti-Trojan package
        - **burp**:Burp counter. Value:
        - **open**: On
        - **close**: close
        - **portrait_option**: traceability configuration. Value:
        - **false**: Disabled
        - **true**: Enable.
        '''
        result = self._values.get("meta")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHoneyPotProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHoneypotNode(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotNode",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::HoneypotNode``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HoneypotNode`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHoneypotNodeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1b5e6305f2a0228b4d7c855961d85c6e142b6d6cbdba148c9c20fa86a804fc5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d8f06596913c15a3deb25301aa5ce48982d34741bda3b6564875c04f8ea511c7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowHoneypotAccessInternet")
    def attr_allow_honeypot_access_internet(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowHoneypotAccessInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrAvailableProbeNum")
    def attr_available_probe_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AvailableProbeNum: The number of available probes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAvailableProbeNum"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the management node was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeId: Honeypot management node id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeName")
    def attr_node_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeName: The name of the management node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupProbeIpList")
    def attr_security_group_probe_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupProbeIpList"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__36e60312574263cf8f9de8edfeebe729af83da623fb56d3988a244e1dbc0966b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="nodeName")
    def node_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeName: The name of the management node.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeName"))

    @node_name.setter
    def node_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b075e2c0fc167a1fc5821fcfb81c137241964d98d350e23df41a34b63d8969d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeName", value)

    @builtins.property
    @jsii.member(jsii_name="allowHoneypotAccessInternet")
    def allow_honeypot_access_internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:

        - **true**: allows honeypots to access the Internet.
        - **false**: does not allow honeypots to access the Internet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowHoneypotAccessInternet"))

    @allow_honeypot_access_internet.setter
    def allow_honeypot_access_internet(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64b6654bd27f2a5cb6fce8d85bcdd00c17244cc825d23a12d2fe7487c880edfd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowHoneypotAccessInternet", value)

    @builtins.property
    @jsii.member(jsii_name="availableProbeNum")
    def available_probe_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: availableProbeNum: The number of available probes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "availableProbeNum"))

    @available_probe_num.setter
    def available_probe_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acacbecfe48c9b8d988b0152136fc67d952573efaeea2efafbdbe6b37d0fc9a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "availableProbeNum", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupProbeIpList")
    def security_group_probe_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityGroupProbeIpList"))

    @security_group_probe_ip_list.setter
    def security_group_probe_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b57a1a153ffb558357ff0961f6c86edc25d3fc68bd7973aa815bb17b73108b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupProbeIpList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotNodeProps",
    jsii_struct_bases=[],
    name_mapping={
        "node_name": "nodeName",
        "allow_honeypot_access_internet": "allowHoneypotAccessInternet",
        "available_probe_num": "availableProbeNum",
        "security_group_probe_ip_list": "securityGroupProbeIpList",
    },
)
class RosHoneypotNodeProps:
    def __init__(
        self,
        *,
        node_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_honeypot_access_internet: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        available_probe_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_probe_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosHoneypotNode``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode

        :param node_name: 
        :param allow_honeypot_access_internet: 
        :param available_probe_num: 
        :param security_group_probe_ip_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1d2000dacfcec83f2e5f10d3995a9df9a00823545713ff83c04298e95950adc)
            check_type(argname="argument node_name", value=node_name, expected_type=type_hints["node_name"])
            check_type(argname="argument allow_honeypot_access_internet", value=allow_honeypot_access_internet, expected_type=type_hints["allow_honeypot_access_internet"])
            check_type(argname="argument available_probe_num", value=available_probe_num, expected_type=type_hints["available_probe_num"])
            check_type(argname="argument security_group_probe_ip_list", value=security_group_probe_ip_list, expected_type=type_hints["security_group_probe_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "node_name": node_name,
        }
        if allow_honeypot_access_internet is not None:
            self._values["allow_honeypot_access_internet"] = allow_honeypot_access_internet
        if available_probe_num is not None:
            self._values["available_probe_num"] = available_probe_num
        if security_group_probe_ip_list is not None:
            self._values["security_group_probe_ip_list"] = security_group_probe_ip_list

    @builtins.property
    def node_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeName: The name of the management node.
        '''
        result = self._values.get("node_name")
        assert result is not None, "Required property 'node_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_honeypot_access_internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:

        - **true**: allows honeypots to access the Internet.
        - **false**: does not allow honeypots to access the Internet.
        '''
        result = self._values.get("allow_honeypot_access_internet")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def available_probe_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: availableProbeNum: The number of available probes.
        '''
        result = self._values.get("available_probe_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_probe_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
        '''
        result = self._values.get("security_group_probe_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHoneypotNodeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHoneypotPreset(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotPreset",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::HoneypotPreset``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HoneypotPreset`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHoneypotPresetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64644125d30129f5724565380b53a1ca45d04764f74084566b010133eea29fa2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d16833e4c99b426dbe691b20c7c7ad140d36fa157d3c04b26bf3eeffe2fa2c20)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotImageName: The name of the honeypot image.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotPresetId")
    def attr_honeypot_preset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotPresetId: The ID of the honeypot template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotPresetId"))

    @builtins.property
    @jsii.member(jsii_name="attrMeta")
    def attr_meta(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Meta: The custom configurations of the honeypot template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMeta"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeId: The ID of the management node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrPresetName")
    def attr_preset_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PresetName: The custom name of the honeypot template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPresetName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c3713c05092e0d9614ef3cfc5a610ca10f23e5edeefe85a660012cf2b5fcbeff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotImageName")
    def honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: honeypotImageName: The name of the honeypot image.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "honeypotImageName"))

    @honeypot_image_name.setter
    def honeypot_image_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93353b1ab63765791c45a3f441e90c7d4dbf37bfe32f31daa3622e04297c759d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotImageName", value)

    @builtins.property
    @jsii.member(jsii_name="meta")
    def meta(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotPreset.MetaProperty"]:
        '''
        :Property:

        meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:

        - **PortraitOption**: Social Source Tracing
        - **Burp**: Burp-specific Defense
        - **TrojanGit**: Git-specific Defense.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotPreset.MetaProperty"], jsii.get(self, "meta"))

    @meta.setter
    def meta(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotPreset.MetaProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17ff18c6660742bbb8e6fd866ac099bbcc01425f42eeb401a88e5975a1c5baa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "meta", value)

    @builtins.property
    @jsii.member(jsii_name="nodeId")
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeId: The ID of the management node.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeId"))

    @node_id.setter
    def node_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__271c1c5e4d1b7c9cb344c8f236f904aa399b7467d19e1d586142e21b3d516c92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeId", value)

    @builtins.property
    @jsii.member(jsii_name="presetName")
    def preset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: presetName: The custom name of the honeypot template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "presetName"))

    @preset_name.setter
    def preset_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f4cb5aae102d3425d0a4ad3dbb124b8ed18d1229226b52af6e6f8bdab4e8c0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "presetName", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotPreset.MetaProperty",
        jsii_struct_bases=[],
        name_mapping={
            "burp": "burp",
            "portrait_option": "portraitOption",
            "trojan_git": "trojanGit",
        },
    )
    class MetaProperty:
        def __init__(
            self,
            *,
            burp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            portrait_option: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            trojan_git: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param burp: 
            :param portrait_option: 
            :param trojan_git: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ce2f6f66457fcd0ec57b902563e4392141b8ef4a46a36b04389616de8ee75a4a)
                check_type(argname="argument burp", value=burp, expected_type=type_hints["burp"])
                check_type(argname="argument portrait_option", value=portrait_option, expected_type=type_hints["portrait_option"])
                check_type(argname="argument trojan_git", value=trojan_git, expected_type=type_hints["trojan_git"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if burp is not None:
                self._values["burp"] = burp
            if portrait_option is not None:
                self._values["portrait_option"] = portrait_option
            if trojan_git is not None:
                self._values["trojan_git"] = trojan_git

        @builtins.property
        def burp(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: burp: Burp-specific Defense.
            '''
            result = self._values.get("burp")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def portrait_option(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: portraitOption: Social Source Tracing.
            '''
            result = self._values.get("portrait_option")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def trojan_git(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: trojanGit: Git-specific Defense.
            '''
            result = self._values.get("trojan_git")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MetaProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotPresetProps",
    jsii_struct_bases=[],
    name_mapping={
        "honeypot_image_name": "honeypotImageName",
        "meta": "meta",
        "node_id": "nodeId",
        "preset_name": "presetName",
    },
)
class RosHoneypotPresetProps:
    def __init__(
        self,
        *,
        honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        meta: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotPreset.MetaProperty, typing.Dict[builtins.str, typing.Any]]],
        node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosHoneypotPreset``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset

        :param honeypot_image_name: 
        :param meta: 
        :param node_id: 
        :param preset_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c13eb5e2cf0b86561ff9f5b9c02e6c5032274e872d4c76e9d600fb841dc4e67)
            check_type(argname="argument honeypot_image_name", value=honeypot_image_name, expected_type=type_hints["honeypot_image_name"])
            check_type(argname="argument meta", value=meta, expected_type=type_hints["meta"])
            check_type(argname="argument node_id", value=node_id, expected_type=type_hints["node_id"])
            check_type(argname="argument preset_name", value=preset_name, expected_type=type_hints["preset_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "honeypot_image_name": honeypot_image_name,
            "meta": meta,
            "node_id": node_id,
            "preset_name": preset_name,
        }

    @builtins.property
    def honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: honeypotImageName: The name of the honeypot image.
        '''
        result = self._values.get("honeypot_image_name")
        assert result is not None, "Required property 'honeypot_image_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def meta(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHoneypotPreset.MetaProperty]:
        '''
        :Property:

        meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:

        - **PortraitOption**: Social Source Tracing
        - **Burp**: Burp-specific Defense
        - **TrojanGit**: Git-specific Defense.
        '''
        result = self._values.get("meta")
        assert result is not None, "Required property 'meta' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHoneypotPreset.MetaProperty], result)

    @builtins.property
    def node_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: nodeId: The ID of the management node.
        '''
        result = self._values.get("node_id")
        assert result is not None, "Required property 'node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: presetName: The custom name of the honeypot template.
        '''
        result = self._values.get("preset_name")
        assert result is not None, "Required property 'preset_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHoneypotPresetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHoneypotProbe(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotProbe",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::HoneypotProbe``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HoneypotProbe`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHoneypotProbeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acf56934c77c92be30e249a52e88b632f6cea1a3808ca8fba6a06bc60af59a2f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__85cc192598e287df8078655a03332866890b264eeaf03992f195ca7fa8ff655b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArp")
    def attr_arp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArp"))

    @builtins.property
    @jsii.member(jsii_name="attrControlNodeId")
    def attr_control_node_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ControlNodeId: The ID of the management node.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrControlNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: The name of the probe.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotBindList")
    def attr_honeypot_bind_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotBindList: The configuration of the probe.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotBindList"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotProbeId")
    def attr_honeypot_probe_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotProbeId: The ID of the probe.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotProbeId"))

    @builtins.property
    @jsii.member(jsii_name="attrPing")
    def attr_ping(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ping: Specifies whether to enable ping scan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPing"))

    @builtins.property
    @jsii.member(jsii_name="attrProbeType")
    def attr_probe_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProbeType: The type of the probe.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProbeType"))

    @builtins.property
    @jsii.member(jsii_name="attrProbeVersion")
    def attr_probe_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProbeVersion: The version of the probe.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProbeVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceIpList")
    def attr_service_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceIpList: Listen to the IP address list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Uuid: The UUID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="controlNodeId")
    def control_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        controlNodeId: The ID of the management node.
        .. epigraph::

        You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "controlNodeId"))

    @control_node_id.setter
    def control_node_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__872c59d59cfcf0ca9d6d63dace93b668cfdeb41354d3c0e3577011e443b52fb0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "controlNodeId", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The name of the probe.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62bb2dc8e692d73fb0dd8b24f59b892be447c18c6dc902ef2bb2d6912128ca67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7af675c4d5c4a6421a00ee6ce5c076c51ee111496acf438810b2e055ba39ebbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="probeType")
    def probe_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        probeType: The type of the probe. Valid values:

        - **host_probe**: host probe
        - **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "probeType"))

    @probe_type.setter
    def probe_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa0f7333033f2b92a1bb83a980e90b396bf593fb131c42b4ba2f08bea5f4d203)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "probeType", value)

    @builtins.property
    @jsii.member(jsii_name="arp")
    def arp(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:

        - **true**: yes
        - **false**: no.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "arp"))

    @arp.setter
    def arp(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4d3e4bb6e26e0372690f3bec2a8f7ddc0f84820d12f5efb109239fd48148c0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "arp", value)

    @builtins.property
    @jsii.member(jsii_name="businessGroupId")
    def business_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: businessGroupId: Business grouping.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "businessGroupId"))

    @business_group_id.setter
    def business_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf8a032443b71b8adf7806c13a7d43df90953584a4ef2b5fb566542230bb2b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "businessGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotBindList")
    def honeypot_bind_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.HoneypotBindListProperty"]]]]:
        '''
        :Property: honeypotBindList: The configuration of the probe.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.HoneypotBindListProperty"]]]], jsii.get(self, "honeypotBindList"))

    @honeypot_bind_list.setter
    def honeypot_bind_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.HoneypotBindListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c7df4f1a5e96309da04ccb862db105f6f4c79df6e92db09c01b8fddd5a63f22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotBindList", value)

    @builtins.property
    @jsii.member(jsii_name="ping")
    def ping(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ping: Specifies whether to enable ping scan. Valid values:

        - **true**: yes
        - **false**: no.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ping"))

    @ping.setter
    def ping(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53331558e20b11f55c52a43659e8c87489f0d3bab73332411710cdadea302403)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ping", value)

    @builtins.property
    @jsii.member(jsii_name="probeVersion")
    def probe_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: probeVersion: The version of the probe.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "probeVersion"))

    @probe_version.setter
    def probe_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f2b14e3069006b83d8fee8baeae8d9bf40a3bb76827ddede19be654b9f23a80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "probeVersion", value)

    @builtins.property
    @jsii.member(jsii_name="proxyIp")
    def proxy_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyIp: The IP address of the proxy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyIp"))

    @proxy_ip.setter
    def proxy_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6eed980a0f20877e4269b01ddc27a40620b7999842177d54a1b4eb727127c3de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyIp", value)

    @builtins.property
    @jsii.member(jsii_name="serviceIpList")
    def service_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: serviceIpList: Listen to the IP address list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "serviceIpList"))

    @service_ip_list.setter
    def service_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3cf0395985850d1db6c997e21ac0d8f7346cb7e5cde7979f781c2d39679a43d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceIpList", value)

    @builtins.property
    @jsii.member(jsii_name="uuid")
    def uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        uuid: The UUID of the instance.
        .. epigraph::

        If **ProbeType** is set to **host_probe**, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "uuid"))

    @uuid.setter
    def uuid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fa72615e2a03c005c53798ea31cb11015b813942c5dc2c3e2bef530d848bf54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uuid", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VPC.
        .. epigraph::

        **ProbeType** is **vpc_Black _hole_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__044040af1fdf8d6a523701ead6a1079d72839fa15302baa480276c4681424154)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.BindPortListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "bind_port": "bindPort",
            "end_port": "endPort",
            "fixed": "fixed",
            "start_port": "startPort",
            "target_port": "targetPort",
        },
    )
    class BindPortListProperty:
        def __init__(
            self,
            *,
            bind_port: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            end_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            fixed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            start_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            target_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param bind_port: 
            :param end_port: 
            :param fixed: 
            :param start_port: 
            :param target_port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a1e3606fd0d8c56a7fb011352a3e8e4fdf9635d8eeb8f26623fea9bf1d0b3191)
                check_type(argname="argument bind_port", value=bind_port, expected_type=type_hints["bind_port"])
                check_type(argname="argument end_port", value=end_port, expected_type=type_hints["end_port"])
                check_type(argname="argument fixed", value=fixed, expected_type=type_hints["fixed"])
                check_type(argname="argument start_port", value=start_port, expected_type=type_hints["start_port"])
                check_type(argname="argument target_port", value=target_port, expected_type=type_hints["target_port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if bind_port is not None:
                self._values["bind_port"] = bind_port
            if end_port is not None:
                self._values["end_port"] = end_port
            if fixed is not None:
                self._values["fixed"] = fixed
            if start_port is not None:
                self._values["start_port"] = start_port
            if target_port is not None:
                self._values["target_port"] = target_port

        @builtins.property
        def bind_port(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            bindPort: Specifies whether to bind a port. Valid values:

            - **true**: yes
            - **false**: no.
            '''
            result = self._values.get("bind_port")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def end_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endPort: The end of the port range.
            '''
            result = self._values.get("end_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def fixed(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fixed: Specifies whether the port is a fixed port. Valid values:

            - **false**: no
            - **true**: yes.
            '''
            result = self._values.get("fixed")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def start_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: startPort: The start of the port range.
            '''
            result = self._values.get("start_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def target_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            targetPort: The destination port.
            .. epigraph::

            If **HoneypotId** is specified, this parameter is required.
            '''
            result = self._values.get("target_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BindPortListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty",
        jsii_struct_bases=[],
        name_mapping={"bind_port_list": "bindPortList", "honeypot_id": "honeypotId"},
    )
    class HoneypotBindListProperty:
        def __init__(
            self,
            *,
            bind_port_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosHoneypotProbe.BindPortListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            honeypot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param bind_port_list: 
            :param honeypot_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4a169a24d742889ff0e730f297a6ab417711f5fe9f89b71fb821a514bc209f55)
                check_type(argname="argument bind_port_list", value=bind_port_list, expected_type=type_hints["bind_port_list"])
                check_type(argname="argument honeypot_id", value=honeypot_id, expected_type=type_hints["honeypot_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if bind_port_list is not None:
                self._values["bind_port_list"] = bind_port_list
            if honeypot_id is not None:
                self._values["honeypot_id"] = honeypot_id

        @builtins.property
        def bind_port_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.BindPortListProperty"]]]]:
            '''
            :Property: bindPortList: The listener ports.
            '''
            result = self._values.get("bind_port_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHoneypotProbe.BindPortListProperty"]]]], result)

        @builtins.property
        def honeypot_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            honeypotId: The ID of the honeypot.
            .. epigraph::

            You can call the `ListHoneypot <~~ListHoneypot~~>`_ operation to query the IDs of honeypots.
            '''
            result = self._values.get("honeypot_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HoneypotBindListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosHoneypotProbeProps",
    jsii_struct_bases=[],
    name_mapping={
        "control_node_id": "controlNodeId",
        "display_name": "displayName",
        "probe_type": "probeType",
        "arp": "arp",
        "business_group_id": "businessGroupId",
        "honeypot_bind_list": "honeypotBindList",
        "ping": "ping",
        "probe_version": "probeVersion",
        "proxy_ip": "proxyIp",
        "service_ip_list": "serviceIpList",
        "uuid": "uuid",
        "vpc_id": "vpcId",
    },
)
class RosHoneypotProbeProps:
    def __init__(
        self,
        *,
        control_node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        probe_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arp: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        business_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotProbe.HoneypotBindListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ping: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        probe_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHoneypotProbe``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe

        :param control_node_id: 
        :param display_name: 
        :param probe_type: 
        :param arp: 
        :param business_group_id: 
        :param honeypot_bind_list: 
        :param ping: 
        :param probe_version: 
        :param proxy_ip: 
        :param service_ip_list: 
        :param uuid: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90dcc6d1ec605a05e00f8e2c127819ce3dcf2fca7ecaa5137f1665946441f1c7)
            check_type(argname="argument control_node_id", value=control_node_id, expected_type=type_hints["control_node_id"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument probe_type", value=probe_type, expected_type=type_hints["probe_type"])
            check_type(argname="argument arp", value=arp, expected_type=type_hints["arp"])
            check_type(argname="argument business_group_id", value=business_group_id, expected_type=type_hints["business_group_id"])
            check_type(argname="argument honeypot_bind_list", value=honeypot_bind_list, expected_type=type_hints["honeypot_bind_list"])
            check_type(argname="argument ping", value=ping, expected_type=type_hints["ping"])
            check_type(argname="argument probe_version", value=probe_version, expected_type=type_hints["probe_version"])
            check_type(argname="argument proxy_ip", value=proxy_ip, expected_type=type_hints["proxy_ip"])
            check_type(argname="argument service_ip_list", value=service_ip_list, expected_type=type_hints["service_ip_list"])
            check_type(argname="argument uuid", value=uuid, expected_type=type_hints["uuid"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "control_node_id": control_node_id,
            "display_name": display_name,
            "probe_type": probe_type,
        }
        if arp is not None:
            self._values["arp"] = arp
        if business_group_id is not None:
            self._values["business_group_id"] = business_group_id
        if honeypot_bind_list is not None:
            self._values["honeypot_bind_list"] = honeypot_bind_list
        if ping is not None:
            self._values["ping"] = ping
        if probe_version is not None:
            self._values["probe_version"] = probe_version
        if proxy_ip is not None:
            self._values["proxy_ip"] = proxy_ip
        if service_ip_list is not None:
            self._values["service_ip_list"] = service_ip_list
        if uuid is not None:
            self._values["uuid"] = uuid
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def control_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        controlNodeId: The ID of the management node.
        .. epigraph::

        You can call the `ListHoneypotNode <~~ListHoneypotNode~~>`_ operation to query the IDs of management nodes.
        '''
        result = self._values.get("control_node_id")
        assert result is not None, "Required property 'control_node_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The name of the probe.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def probe_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        probeType: The type of the probe. Valid values:

        - **host_probe**: host probe
        - **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
        '''
        result = self._values.get("probe_type")
        assert result is not None, "Required property 'probe_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arp(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:

        - **true**: yes
        - **false**: no.
        '''
        result = self._values.get("arp")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def business_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: businessGroupId: Business grouping.
        '''
        result = self._values.get("business_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot_bind_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHoneypotProbe.HoneypotBindListProperty]]]]:
        '''
        :Property: honeypotBindList: The configuration of the probe.
        '''
        result = self._values.get("honeypot_bind_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHoneypotProbe.HoneypotBindListProperty]]]], result)

    @builtins.property
    def ping(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ping: Specifies whether to enable ping scan. Valid values:

        - **true**: yes
        - **false**: no.
        '''
        result = self._values.get("ping")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def probe_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: probeVersion: The version of the probe.
        '''
        result = self._values.get("probe_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyIp: The IP address of the proxy.
        '''
        result = self._values.get("proxy_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: serviceIpList: Listen to the IP address list.
        '''
        result = self._values.get("service_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        uuid: The UUID of the instance.
        .. epigraph::

        If **ProbeType** is set to **host_probe**, this parameter is required.
        '''
        result = self._values.get("uuid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VPC.
        .. epigraph::

        **ProbeType** is **vpc_Black _hole_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHoneypotProbeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageEventOperation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosImageEventOperation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::ImageEventOperation``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ImageEventOperation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageEventOperationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20146cfb9002452510cffe76fc2815ca519183337bf2c239e852c94bc870fb2b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f154971dcaffd1b972a39fb45eb8415ef6006c1636d013ead5e6700e12943377)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConditions")
    def attr_conditions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Conditions: The rule conditions. Specify a value in the JSON format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConditions"))

    @builtins.property
    @jsii.member(jsii_name="attrEventKey")
    def attr_event_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventKey: Image Event Key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventKey"))

    @builtins.property
    @jsii.member(jsii_name="attrEventName")
    def attr_event_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventName: Image Event Name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventName"))

    @builtins.property
    @jsii.member(jsii_name="attrEventType")
    def attr_event_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventType: Image Event Type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventType"))

    @builtins.property
    @jsii.member(jsii_name="attrImageEventOperationId")
    def attr_image_event_operation_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageEventOperationId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageEventOperationId"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Note: The remarks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationCode")
    def attr_operation_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationCode: Event Operation Code.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationCode"))

    @builtins.property
    @jsii.member(jsii_name="attrScenarios")
    def attr_scenarios(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Scenarios: Event Scenarios.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScenarios"))

    @builtins.property
    @jsii.member(jsii_name="attrSource")
    def attr_source(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Source: The source of the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSource"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="conditions")
    def conditions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:

        - **condition**: the matching condition.
        - **type**: the matching type.
        - **value**: the matching value.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "conditions"))

    @conditions.setter
    def conditions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6609c7c396b0c2ed1c60ae64f3ad977b34bff5d19510c5c176f79dff1758360)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "conditions", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6dfe64160f7bebd8c3483d622ff63ca6b9bd27acb61d7cad864fb01f59c7c2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="eventType")
    def event_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: eventType: Image Event Type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "eventType"))

    @event_type.setter
    def event_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8da46170909e795c29c3b4a9a362ca479e471179c0a1543ed9d066d4c97ab68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventType", value)

    @builtins.property
    @jsii.member(jsii_name="operationCode")
    def operation_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: operationCode: Event Operation Code.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "operationCode"))

    @operation_code.setter
    def operation_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__448e09378cfc10fbe71877b06f5b8fb93be9d568833bf501c652b71feaee8eb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operationCode", value)

    @builtins.property
    @jsii.member(jsii_name="eventKey")
    def event_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventKey: The keyword of the alert item.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eventKey"))

    @event_key.setter
    def event_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00986f4b48af8403f5e54e78325fc1a78856d7384bd1227bfe635b5238998fdd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventKey", value)

    @builtins.property
    @jsii.member(jsii_name="eventName")
    def event_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventName: The name of the alert item.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eventName"))

    @event_name.setter
    def event_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99c76b09ba7e57a2448a3f926f4f26641e6c6aec280214f445981d141dcc084f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventName", value)

    @builtins.property
    @jsii.member(jsii_name="note")
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: note: The remarks that you want to add.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "note"))

    @note.setter
    def note(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30a2c555ffe1f1c6fa6180aea884b450e74053c7148c31517de926396ca83097)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "note", value)

    @builtins.property
    @jsii.member(jsii_name="scenarios")
    def scenarios(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
        type
        value
        Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "scenarios"))

    @scenarios.setter
    def scenarios(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed4565e8afc7cb3f09a3175f59d89ab146d59540de3a81fdfe9924544d323dee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scenarios", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        source: The source of the whitelist. Valid values:

        - **default**: image.
        - **agentless**: agentless detection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5f8c60ffc2ac5b7b06c2753018f46a6e3e09f5b43ae9df97121ce3cd91a4af3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosImageEventOperationProps",
    jsii_struct_bases=[],
    name_mapping={
        "conditions": "conditions",
        "event_type": "eventType",
        "operation_code": "operationCode",
        "event_key": "eventKey",
        "event_name": "eventName",
        "note": "note",
        "scenarios": "scenarios",
        "source": "source",
    },
)
class RosImageEventOperationProps:
    def __init__(
        self,
        *,
        conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        event_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        operation_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        event_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scenarios: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImageEventOperation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation

        :param conditions: 
        :param event_type: 
        :param operation_code: 
        :param event_key: 
        :param event_name: 
        :param note: 
        :param scenarios: 
        :param source: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__713aae7f3e0abd9b925e95d665606f526d7f70e7ea42ba543712929a59a49e71)
            check_type(argname="argument conditions", value=conditions, expected_type=type_hints["conditions"])
            check_type(argname="argument event_type", value=event_type, expected_type=type_hints["event_type"])
            check_type(argname="argument operation_code", value=operation_code, expected_type=type_hints["operation_code"])
            check_type(argname="argument event_key", value=event_key, expected_type=type_hints["event_key"])
            check_type(argname="argument event_name", value=event_name, expected_type=type_hints["event_name"])
            check_type(argname="argument note", value=note, expected_type=type_hints["note"])
            check_type(argname="argument scenarios", value=scenarios, expected_type=type_hints["scenarios"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "conditions": conditions,
            "event_type": event_type,
            "operation_code": operation_code,
        }
        if event_key is not None:
            self._values["event_key"] = event_key
        if event_name is not None:
            self._values["event_name"] = event_name
        if note is not None:
            self._values["note"] = note
        if scenarios is not None:
            self._values["scenarios"] = scenarios
        if source is not None:
            self._values["source"] = source

    @builtins.property
    def conditions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:

        - **condition**: the matching condition.
        - **type**: the matching type.
        - **value**: the matching value.
        '''
        result = self._values.get("conditions")
        assert result is not None, "Required property 'conditions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def event_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: eventType: Image Event Type.
        '''
        result = self._values.get("event_type")
        assert result is not None, "Required property 'event_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def operation_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: operationCode: Event Operation Code.
        '''
        result = self._values.get("operation_code")
        assert result is not None, "Required property 'operation_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def event_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventKey: The keyword of the alert item.
        '''
        result = self._values.get("event_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventName: The name of the alert item.
        '''
        result = self._values.get("event_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: note: The remarks that you want to add.
        '''
        result = self._values.get("note")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scenarios(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
        type
        value
        Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
        '''
        result = self._values.get("scenarios")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        source: The source of the whitelist. Valid values:

        - **default**: image.
        - **agentless**: agentless detection.
        '''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageEventOperationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ea9ded8f595988af6486ec9ebf760fa91f399715ca94ad70c00d7e7989f1ce1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a8b2efbed5fd210748661ffc699a238b00891f6bdb2db7c17565926df54d84b1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBuyNumber")
    def attr_buy_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BuyNumber: Number of servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBuyNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScan")
    def attr_container_image_scan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerImageScan"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScanNew")
    def attr_container_image_scan_new(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerImageScanNew"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypot")
    def attr_honeypot(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypot"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotSwitch")
    def attr_honeypot_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotSwitch: Cloud honeypot.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRaspCount")
    def attr_rasp_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RaspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRaspCount"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalPeriodUnit")
    def attr_renewal_period_unit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalPeriodUnit: Automatic renewal period unit, value:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalStatus: Automatic renewal status, value:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewPeriod")
    def attr_renew_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewPeriod: Automatic renewal cycle, in months.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrSasAntiRansomware")
    def attr_sas_anti_ransomware(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasAntiRansomware"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspm")
    def attr_sas_cspm(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasCspm"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspmSwitch")
    def attr_sas_cspm_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasCspmSwitch: Cloud platform configuration check switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasCspmSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSc")
    def attr_sas_sc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSc: Security screen.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSc"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdk")
    def attr_sas_sdk(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSdk"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdkSwitch")
    def attr_sas_sdk_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSdkSwitch: Malicious file detection SDK.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSdkSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSlsStorage")
    def attr_sas_sls_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSlsStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardBoolean")
    def attr_sas_webguard_boolean(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasWebguardBoolean: Web tamper-proof switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasWebguardBoolean"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardOrderNum")
    def attr_sas_webguard_order_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasWebguardOrderNum: Tamper-proof authorization number.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasWebguardOrderNum"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysis")
    def attr_threat_analysis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ThreatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThreatAnalysis"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysisSwitch")
    def attr_threat_analysis_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ThreatAnalysisSwitch: Threat analysis.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThreatAnalysisSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrVCore")
    def attr_v_core(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VCore: Number of cores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVCore"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCode")
    def attr_version_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionCode: Select the security center version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionCode"))

    @builtins.property
    @jsii.member(jsii_name="attrVulCount")
    def attr_vul_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulCount"))

    @builtins.property
    @jsii.member(jsii_name="attrVulSwitch")
    def attr_vul_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VulSwitch: Vulnerability fix switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulSwitch"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7228f2d6db6256b40caf0967a0cb7320f5a50e00222960bbffa02c7d92d873d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: The payment type of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__696c243a1391601966d944ad93dcdfad8c9ae0d0011ce40887c2e56db88b6995)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="versionCode")
    def version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        versionCode: Select the security center version. Value:

        - level7: Antivirus Edition.
        - level3: Premium version.
        - level2: Enterprise Edition.
        - level8: Ultimate.
        - level10: Purchase value-added services only.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "versionCode"))

    @version_code.setter
    def version_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a65e4954ad7bfb7dd9a991c3079cf0bafeb7fc7f61cdded838248d1fed96cfbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionCode", value)

    @builtins.property
    @jsii.member(jsii_name="buyNumber")
    def buy_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: buyNumber: Number of servers.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "buyNumber"))

    @buy_number.setter
    def buy_number(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f72d60aa3ffaf36828d11ad4fa9efaaa0e70f7554790e7d844a391780aaf1de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "buyNumber", value)

    @builtins.property
    @jsii.member(jsii_name="containerImageScan")
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerImageScan"))

    @container_image_scan.setter
    def container_image_scan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b09cb3c1f73240d33518c74d9c494610b5453fe1c8398d485ca30cf855fa6294)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerImageScan", value)

    @builtins.property
    @jsii.member(jsii_name="containerImageScanNew")
    def container_image_scan_new(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerImageScanNew"))

    @container_image_scan_new.setter
    def container_image_scan_new(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c281f671aa3db96ce307d540012fd93524037ba27f8447f30a3ad96a0997bf8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerImageScanNew", value)

    @builtins.property
    @jsii.member(jsii_name="honeypot")
    def honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        .. epigraph::

        This module can only be purchased when honeypot_switch = 1, starting with 20.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "honeypot"))

    @honeypot.setter
    def honeypot(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e1730ac5646079649a32ac754b63872bf734dcd4fc304ec78e5992748580037)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypot", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotSwitch")
    def honeypot_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypotSwitch: Cloud honeypot. Value:

        - 1: Yes.
        - 2: No.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "honeypotSwitch"))

    @honeypot_switch.setter
    def honeypot_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c98fc4e3dd40ccc1f7fa43179d11f22202338fcef56ed206b82a21b96ab8ccbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="modifyType")
    def modify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modifyType: Change configuration type, value

        - Upgrade: Upgrade.
        - Downgrade: Downgrade.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "modifyType"))

    @modify_type.setter
    def modify_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07b1a5c119710b00dc65696de70b19fe53f6d3a4173df44540afee6b651a3857)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modifyType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        .. epigraph::

        must be set when creating a prepaid instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f93ec6463505e07c8ed8aefacafbc6a9a14c8a4cf45823f96825c1dd5de9d679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type, only China station needs to be set to sas, international station does not need to set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae7977f5516d2fc0f5ba0e78f78427e3bb57db2d751acc36d6de9964e2cca469)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productType", value)

    @builtins.property
    @jsii.member(jsii_name="raspCount")
    def rasp_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "raspCount"))

    @rasp_count.setter
    def rasp_count(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2774bac4b685828dd54d1dacfa7a418d236a391f4e0f49526f378763a3e0db6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "raspCount", value)

    @builtins.property
    @jsii.member(jsii_name="renewalPeriodUnit")
    def renewal_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalPeriodUnit: Automatic renewal period unit, value:

        - M: month.
        - Y: years.

        .. epigraph::

        Must be set when RenewalStatus = AutoRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalPeriodUnit"))

    @renewal_period_unit.setter
    def renewal_period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30aa76dcf303193122a4541555fb8a98729d7b14d68d3aa8a86a03ceeec78c02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalPeriodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: Automatic renewal status, value:

        - AutoRenewal: automatic renewal.
        - ManualRenewal: manual renewal.
        Default ManualRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a7c076770cce20d055d898fdcd27583d716b8b86a73f1c0dc093e9f1cd4e3de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)

    @builtins.property
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewPeriod: Automatic renewal cycle, in months.
        .. epigraph::

        When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewPeriod"))

    @renew_period.setter
    def renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e61162da60e5c06fc3b07da02bfa23f881f6fc747f2b7eb174eab1a81bc062a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="sasAntiRansomware")
    def sas_anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasAntiRansomware"))

    @sas_anti_ransomware.setter
    def sas_anti_ransomware(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fab180aeaa2b07311ce5de5ed84d5e6e35a6e0537b67a5c75f864465ae21f3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasAntiRansomware", value)

    @builtins.property
    @jsii.member(jsii_name="sasCspm")
    def sas_cspm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        .. epigraph::

        You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasCspm"))

    @sas_cspm.setter
    def sas_cspm(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2aab862db9d6876b198c7f5d714c7eb78c31c00a0e4264c20ae7db0c84f2c32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasCspm", value)

    @builtins.property
    @jsii.member(jsii_name="sasCspmSwitch")
    def sas_cspm_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspmSwitch: Cloud platform configuration check switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasCspmSwitch"))

    @sas_cspm_switch.setter
    def sas_cspm_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fa113160d1544dff9578885c215c0227d34d0d707fa88c7a9b23f908d6d1804)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasCspmSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="sasSc")
    def sas_sc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSc: Security screen. Value:

        - true: Yes.
        - false: No.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSc"))

    @sas_sc.setter
    def sas_sc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05159a17185b019f5332e79857ede4c630da520fdbcb74c65d72d1f3091347c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSc", value)

    @builtins.property
    @jsii.member(jsii_name="sasSdk")
    def sas_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        .. epigraph::

        This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSdk"))

    @sas_sdk.setter
    def sas_sdk(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87abd72a9aea30656c26bc11314a73efb2d9c98ab0372164f9decd0e085c5d73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSdk", value)

    @builtins.property
    @jsii.member(jsii_name="sasSdkSwitch")
    def sas_sdk_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sasSdkSwitch: Malicious file detection SDK.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSdkSwitch"))

    @sas_sdk_switch.setter
    def sas_sdk_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaaca46e4281aad3712865007757221d6ad0d60efb5dd384e3d9685987e4800f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSdkSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="sasSlsStorage")
    def sas_sls_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSlsStorage"))

    @sas_sls_storage.setter
    def sas_sls_storage(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55fa02c0967a81b71236e88194d8b3949d7fad9a62cb478fd95b280150722a1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSlsStorage", value)

    @builtins.property
    @jsii.member(jsii_name="sasWebguardBoolean")
    def sas_webguard_boolean(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardBoolean: Web tamper-proof switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasWebguardBoolean"))

    @sas_webguard_boolean.setter
    def sas_webguard_boolean(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e3533b6f50c672e107493122492d1e8b79510d42f05a1615a7a2658eaaa47cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasWebguardBoolean", value)

    @builtins.property
    @jsii.member(jsii_name="sasWebguardOrderNum")
    def sas_webguard_order_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardOrderNum: Tamper-proof authorization number. Value:

        - 0: No
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasWebguardOrderNum"))

    @sas_webguard_order_num.setter
    def sas_webguard_order_num(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7b6dcff40c6c4efad8abc71bd6efaef546ee533c35e4bbe8129c2214d5dd8ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasWebguardOrderNum", value)

    @builtins.property
    @jsii.member(jsii_name="threatAnalysis")
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        .. epigraph::

        This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "threatAnalysis"))

    @threat_analysis.setter
    def threat_analysis(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14b31150fe723a7b914798a93f36550596c4e4b4bec299098f8909d6fc5b7695)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threatAnalysis", value)

    @builtins.property
    @jsii.member(jsii_name="threatAnalysisSwitch")
    def threat_analysis_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysisSwitch: Threat analysis. Value:

        - 0: No.
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "threatAnalysisSwitch"))

    @threat_analysis_switch.setter
    def threat_analysis_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afc00822c0a769f6e7849d12e7db79713bae4cf445ee73dd2f7dda3f8d5ca70b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threatAnalysisSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="vCore")
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vCore: Number of cores.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vCore"))

    @v_core.setter
    def v_core(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6d77309e60298e9daed82eaf20af43ef25061e13ab9aaccc3df837b4d1a6e24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vCore", value)

    @builtins.property
    @jsii.member(jsii_name="vulCount")
    def vul_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        .. epigraph::

        This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vulCount"))

    @vul_count.setter
    def vul_count(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__739b9d54bf5a52431ad5fba5d1325ace0f91a430cde68cf9d1fb0f137c1290ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vulCount", value)

    @builtins.property
    @jsii.member(jsii_name="vulSwitch")
    def vul_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulSwitch: Vulnerability fix switch. Value:

        - 0: No.
        - 1: Yes.

        .. epigraph::

        When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vulSwitch"))

    @vul_switch.setter
    def vul_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7cecc45822ec2762adf7d4f7d073d7821f798285e5c9c651737058b05b28765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vulSwitch", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "payment_type": "paymentType",
        "version_code": "versionCode",
        "buy_number": "buyNumber",
        "container_image_scan": "containerImageScan",
        "container_image_scan_new": "containerImageScanNew",
        "honeypot": "honeypot",
        "honeypot_switch": "honeypotSwitch",
        "modify_type": "modifyType",
        "period": "period",
        "product_type": "productType",
        "rasp_count": "raspCount",
        "renewal_period_unit": "renewalPeriodUnit",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
        "sas_anti_ransomware": "sasAntiRansomware",
        "sas_cspm": "sasCspm",
        "sas_cspm_switch": "sasCspmSwitch",
        "sas_sc": "sasSc",
        "sas_sdk": "sasSdk",
        "sas_sdk_switch": "sasSdkSwitch",
        "sas_sls_storage": "sasSlsStorage",
        "sas_webguard_boolean": "sasWebguardBoolean",
        "sas_webguard_order_num": "sasWebguardOrderNum",
        "threat_analysis": "threatAnalysis",
        "threat_analysis_switch": "threatAnalysisSwitch",
        "v_core": "vCore",
        "vul_count": "vulCount",
        "vul_switch": "vulSwitch",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance

        :param payment_type: 
        :param version_code: 
        :param buy_number: 
        :param container_image_scan: 
        :param container_image_scan_new: 
        :param honeypot: 
        :param honeypot_switch: 
        :param modify_type: 
        :param period: 
        :param product_type: 
        :param rasp_count: 
        :param renewal_period_unit: 
        :param renewal_status: 
        :param renew_period: 
        :param sas_anti_ransomware: 
        :param sas_cspm: 
        :param sas_cspm_switch: 
        :param sas_sc: 
        :param sas_sdk: 
        :param sas_sdk_switch: 
        :param sas_sls_storage: 
        :param sas_webguard_boolean: 
        :param sas_webguard_order_num: 
        :param threat_analysis: 
        :param threat_analysis_switch: 
        :param v_core: 
        :param vul_count: 
        :param vul_switch: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19c7816fb2add7a906f0d7e5eab175b69dba2b08dfd15e8a635583417e9d39c3)
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument version_code", value=version_code, expected_type=type_hints["version_code"])
            check_type(argname="argument buy_number", value=buy_number, expected_type=type_hints["buy_number"])
            check_type(argname="argument container_image_scan", value=container_image_scan, expected_type=type_hints["container_image_scan"])
            check_type(argname="argument container_image_scan_new", value=container_image_scan_new, expected_type=type_hints["container_image_scan_new"])
            check_type(argname="argument honeypot", value=honeypot, expected_type=type_hints["honeypot"])
            check_type(argname="argument honeypot_switch", value=honeypot_switch, expected_type=type_hints["honeypot_switch"])
            check_type(argname="argument modify_type", value=modify_type, expected_type=type_hints["modify_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument rasp_count", value=rasp_count, expected_type=type_hints["rasp_count"])
            check_type(argname="argument renewal_period_unit", value=renewal_period_unit, expected_type=type_hints["renewal_period_unit"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument sas_anti_ransomware", value=sas_anti_ransomware, expected_type=type_hints["sas_anti_ransomware"])
            check_type(argname="argument sas_cspm", value=sas_cspm, expected_type=type_hints["sas_cspm"])
            check_type(argname="argument sas_cspm_switch", value=sas_cspm_switch, expected_type=type_hints["sas_cspm_switch"])
            check_type(argname="argument sas_sc", value=sas_sc, expected_type=type_hints["sas_sc"])
            check_type(argname="argument sas_sdk", value=sas_sdk, expected_type=type_hints["sas_sdk"])
            check_type(argname="argument sas_sdk_switch", value=sas_sdk_switch, expected_type=type_hints["sas_sdk_switch"])
            check_type(argname="argument sas_sls_storage", value=sas_sls_storage, expected_type=type_hints["sas_sls_storage"])
            check_type(argname="argument sas_webguard_boolean", value=sas_webguard_boolean, expected_type=type_hints["sas_webguard_boolean"])
            check_type(argname="argument sas_webguard_order_num", value=sas_webguard_order_num, expected_type=type_hints["sas_webguard_order_num"])
            check_type(argname="argument threat_analysis", value=threat_analysis, expected_type=type_hints["threat_analysis"])
            check_type(argname="argument threat_analysis_switch", value=threat_analysis_switch, expected_type=type_hints["threat_analysis_switch"])
            check_type(argname="argument v_core", value=v_core, expected_type=type_hints["v_core"])
            check_type(argname="argument vul_count", value=vul_count, expected_type=type_hints["vul_count"])
            check_type(argname="argument vul_switch", value=vul_switch, expected_type=type_hints["vul_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "payment_type": payment_type,
            "version_code": version_code,
        }
        if buy_number is not None:
            self._values["buy_number"] = buy_number
        if container_image_scan is not None:
            self._values["container_image_scan"] = container_image_scan
        if container_image_scan_new is not None:
            self._values["container_image_scan_new"] = container_image_scan_new
        if honeypot is not None:
            self._values["honeypot"] = honeypot
        if honeypot_switch is not None:
            self._values["honeypot_switch"] = honeypot_switch
        if modify_type is not None:
            self._values["modify_type"] = modify_type
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if rasp_count is not None:
            self._values["rasp_count"] = rasp_count
        if renewal_period_unit is not None:
            self._values["renewal_period_unit"] = renewal_period_unit
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if sas_anti_ransomware is not None:
            self._values["sas_anti_ransomware"] = sas_anti_ransomware
        if sas_cspm is not None:
            self._values["sas_cspm"] = sas_cspm
        if sas_cspm_switch is not None:
            self._values["sas_cspm_switch"] = sas_cspm_switch
        if sas_sc is not None:
            self._values["sas_sc"] = sas_sc
        if sas_sdk is not None:
            self._values["sas_sdk"] = sas_sdk
        if sas_sdk_switch is not None:
            self._values["sas_sdk_switch"] = sas_sdk_switch
        if sas_sls_storage is not None:
            self._values["sas_sls_storage"] = sas_sls_storage
        if sas_webguard_boolean is not None:
            self._values["sas_webguard_boolean"] = sas_webguard_boolean
        if sas_webguard_order_num is not None:
            self._values["sas_webguard_order_num"] = sas_webguard_order_num
        if threat_analysis is not None:
            self._values["threat_analysis"] = threat_analysis
        if threat_analysis_switch is not None:
            self._values["threat_analysis_switch"] = threat_analysis_switch
        if v_core is not None:
            self._values["v_core"] = v_core
        if vul_count is not None:
            self._values["vul_count"] = vul_count
        if vul_switch is not None:
            self._values["vul_switch"] = vul_switch

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: The payment type of the resource.
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        versionCode: Select the security center version. Value:

        - level7: Antivirus Edition.
        - level3: Premium version.
        - level2: Enterprise Edition.
        - level8: Ultimate.
        - level10: Purchase value-added services only.
        '''
        result = self._values.get("version_code")
        assert result is not None, "Required property 'version_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def buy_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: buyNumber: Number of servers.
        '''
        result = self._values.get("buy_number")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan_new(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan_new")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        .. epigraph::

        This module can only be purchased when honeypot_switch = 1, starting with 20.
        '''
        result = self._values.get("honeypot")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypotSwitch: Cloud honeypot. Value:

        - 1: Yes.
        - 2: No.
        '''
        result = self._values.get("honeypot_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modifyType: Change configuration type, value

        - Upgrade: Upgrade.
        - Downgrade: Downgrade.
        '''
        result = self._values.get("modify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        .. epigraph::

        must be set when creating a prepaid instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type, only China station needs to be set to sas, international station does not need to set.
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rasp_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        '''
        result = self._values.get("rasp_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalPeriodUnit: Automatic renewal period unit, value:

        - M: month.
        - Y: years.

        .. epigraph::

        Must be set when RenewalStatus = AutoRenewal.
        '''
        result = self._values.get("renewal_period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: Automatic renewal status, value:

        - AutoRenewal: automatic renewal.
        - ManualRenewal: manual renewal.
        Default ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewPeriod: Automatic renewal cycle, in months.
        .. epigraph::

        When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_anti_ransomware")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        .. epigraph::

        You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_cspm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspmSwitch: Cloud platform configuration check switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_cspm_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSc: Security screen. Value:

        - true: Yes.
        - false: No.
        '''
        result = self._values.get("sas_sc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        .. epigraph::

        This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sasSdkSwitch: Malicious file detection SDK.
        '''
        result = self._values.get("sas_sdk_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sls_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sls_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_boolean(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardBoolean: Web tamper-proof switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_boolean")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_order_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardOrderNum: Tamper-proof authorization number. Value:

        - 0: No
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_order_num")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        .. epigraph::

        This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("threat_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysisSwitch: Threat analysis. Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("threat_analysis_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vCore: Number of cores.
        '''
        result = self._values.get("v_core")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        .. epigraph::

        This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulSwitch: Vulnerability fix switch. Value:

        - 0: No.
        - 1: Yes.

        .. epigraph::

        When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVulWhitelist(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosVulWhitelist",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::VulWhitelist``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VulWhitelist`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVulWhitelistProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02461563b9d91aeca8c8a8801e75095f50887e6eb1cc44e321e31f4c8baf402a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__45d55d8a966071925c192c175bbeaa6c396401a288b9396e81da2feae7cf3d6a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Reason: The reason why you add the vulnerability to the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetInfo")
    def attr_target_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetInfo: The applicable scope of the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrVulWhitelistId")
    def attr_vul_whitelist_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VulWhitelistId: The ID of the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulWhitelistId"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Whitelist: The information about the vulnerability that you want to add to the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWhitelist"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d9806ae218c088dc21cf08ed04a91c8311fdf901edb512df41eb1629a78dada5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="targetInfo")
    def target_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:

        - **type**: the type of the applicable scope. Valid values:
        - **GroupId**: the ID of a server group.
        - **Uuid**: the UUID of a server.
        - **uuids**: the UUIDs of servers. This field is of the string type.
        - **groupIds**: the IDs of server groups. This field is of the long type.

        .. epigraph::

        If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "targetInfo"))

    @target_info.setter
    def target_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c065f40945ba491685c7fbec089f7a5727831ed2551970bd838fd585e88ad45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetInfo", value)

    @builtins.property
    @jsii.member(jsii_name="whitelist")
    def whitelist(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:

        - **Status**: the status of the vulnerability.
        - **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
        - **LaterCount**: the number of vulnerabilities that have the medium priority.
        - **AsapCount**: the number of vulnerabilities that have the high priority.
        - **Name**: the name of the vulnerability.
        - **Type**: the type of the vulnerability. Valid values:
        - **cve**: Linux software vulnerability
        - **sys**: Windows system vulnerability
        - **cms**: Web-CMS vulnerability
        - **app**: application vulnerability
        - **emg**: urgent vulnerability
        - **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
        - **HandledCount**: the number of handled vulnerabilities.
        - **AliasName**: the alias of the vulnerability.
        - **RuleModifyTime**: the time when the vulnerability was last disclosed.
        - **NntfCount**: the number of vulnerabilities that have the low priority.
        - **TotalFixCount**: the total number of fixed vulnerabilities.
        - **Tags**: the tag that is added to the vulnerability.

        .. epigraph::

        You can call the `DescribeGroupedVul <~~DescribeGroupedVul~~>`_ operation to query the information about the vulnerability that you want to add to the whitelist.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "whitelist"))

    @whitelist.setter
    def whitelist(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22247f6b079e1cd59b612085f38b380f3f0aa9c5449180f832ff4418189d1d2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whitelist", value)

    @builtins.property
    @jsii.member(jsii_name="reason")
    def reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: reason: The reason why you add the vulnerability to the whitelist.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "reason"))

    @reason.setter
    def reason(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__017cb7aa4c4ab1b7c8286af191186df73d2000b16f7fa0bb3e7c89e2aa71fe49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "reason", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosVulWhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "target_info": "targetInfo",
        "whitelist": "whitelist",
        "reason": "reason",
    },
)
class RosVulWhitelistProps:
    def __init__(
        self,
        *,
        target_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        whitelist: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVulWhitelist``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist

        :param target_info: 
        :param whitelist: 
        :param reason: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0c3d8a4c0d873fe0f0359505b0813df9dffebd722ca13288c97d8821a5e6c04)
            check_type(argname="argument target_info", value=target_info, expected_type=type_hints["target_info"])
            check_type(argname="argument whitelist", value=whitelist, expected_type=type_hints["whitelist"])
            check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "target_info": target_info,
            "whitelist": whitelist,
        }
        if reason is not None:
            self._values["reason"] = reason

    @builtins.property
    def target_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:

        - **type**: the type of the applicable scope. Valid values:
        - **GroupId**: the ID of a server group.
        - **Uuid**: the UUID of a server.
        - **uuids**: the UUIDs of servers. This field is of the string type.
        - **groupIds**: the IDs of server groups. This field is of the long type.

        .. epigraph::

        If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
        '''
        result = self._values.get("target_info")
        assert result is not None, "Required property 'target_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def whitelist(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property:

        whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:

        - **Status**: the status of the vulnerability.
        - **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
        - **LaterCount**: the number of vulnerabilities that have the medium priority.
        - **AsapCount**: the number of vulnerabilities that have the high priority.
        - **Name**: the name of the vulnerability.
        - **Type**: the type of the vulnerability. Valid values:
        - **cve**: Linux software vulnerability
        - **sys**: Windows system vulnerability
        - **cms**: Web-CMS vulnerability
        - **app**: application vulnerability
        - **emg**: urgent vulnerability
        - **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
        - **HandledCount**: the number of handled vulnerabilities.
        - **AliasName**: the alias of the vulnerability.
        - **RuleModifyTime**: the time when the vulnerability was last disclosed.
        - **NntfCount**: the number of vulnerabilities that have the low priority.
        - **TotalFixCount**: the total number of fixed vulnerabilities.
        - **Tags**: the tag that is added to the vulnerability.

        .. epigraph::

        You can call the `DescribeGroupedVul <~~DescribeGroupedVul~~>`_ operation to query the information about the vulnerability that you want to add to the whitelist.
        '''
        result = self._values.get("whitelist")
        assert result is not None, "Required property 'whitelist' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: reason: The reason why you add the vulnerability to the whitelist.
        '''
        result = self._values.get("reason")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVulWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWebLockConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosWebLockConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::WebLockConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WebLockConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWebLockConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__016dbde8e093573b57da74d8012b43e972f6e6cd5dc976ecbea82ac27669ffe1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fa73093567fd78c700faaa780b713d6a436c53d9a3cb24a63a1b92c0e8026fd0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigId: The configuration ID of the protected directory.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefenceMode")
    def attr_defence_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefenceMode: The prevention mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefenceMode"))

    @builtins.property
    @jsii.member(jsii_name="attrDir")
    def attr_dir(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Dir: The directory for which you want to enable web tamper proofing.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDir"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveDir")
    def attr_exclusive_dir(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExclusiveDir: The directory for which you want to disable web tamper proofing.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExclusiveDir"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFile")
    def attr_exclusive_file(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExclusiveFile: The file for which you want to disable web tamper proofing.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExclusiveFile"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFileType")
    def attr_exclusive_file_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExclusiveFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFile")
    def attr_inclusive_file(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InclusiveFile: The file that has web tamper proofing enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInclusiveFile"))

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFileType")
    def attr_inclusive_file_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInclusiveFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrLocalBackupDir")
    def attr_local_backup_dir(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LocalBackupDir: The local path to the backup files of the protected directory.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLocalBackupDir"))

    @builtins.property
    @jsii.member(jsii_name="attrMode")
    def attr_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Mode: The protection mode of web tamper proofing.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMode"))

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Uuid: The UUID of the server for which you want to add a directory to protect.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUuid"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="defenceMode")
    def defence_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        defenceMode: The prevention mode. Valid values:

        - **block**: Interception Mode
        - **audit**: Alert Mode.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "defenceMode"))

    @defence_mode.setter
    def defence_mode(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec51db9db3120324fb4e6b913e3e59ff6a52233cad236da18a0839ec8951add2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defenceMode", value)

    @builtins.property
    @jsii.member(jsii_name="dir")
    def dir(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dir: The directory for which you want to enable web tamper proofing.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dir"))

    @dir.setter
    def dir(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2be91c2fdddb467dd28a20a94ee5ff355d803560db039bd16c04c19367feccda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dir", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc1471f02649df526cc5971a3de1ee220073bc5df9fc165d248f824859f5fd97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="localBackupDir")
    def local_backup_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        localBackupDir: The local path to the backup files of the protected directory.
        The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:

        - Linux server: /usr/local/aegis/bak
        - Windows server: C:\\Program Files (x86)\\xxx\\Aegis\\bak.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "localBackupDir"))

    @local_backup_dir.setter
    def local_backup_dir(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e361007d463468942f1f8f16c3ff6e75ca7cc8568b0ac393ff0e0235c9a208cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localBackupDir", value)

    @builtins.property
    @jsii.member(jsii_name="uuid")
    def uuid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uuid: The UUID of the server for which you want to add a directory to protect.
        .. epigraph::

        You can call the `DescribeCloudCenterInstances <~~DescribeCloudCenterInstances~~>`_ operation to query the UUIDs of servers.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "uuid"))

    @uuid.setter
    def uuid(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff864af28092fd46c1c4b948248114e8d7d8e52a8199563f4dbb9b75fbd80a8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uuid", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveDir")
    def exclusive_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveDir: The directory for which you want to disable web tamper proofing.
        .. epigraph::

        If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "exclusiveDir"))

    @exclusive_dir.setter
    def exclusive_dir(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afd9235182238394fc9c68ad974b703c4af3d7cd60196255bed185a5d1438055)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclusiveDir", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveFile")
    def exclusive_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveFile: The file for which you want to disable web tamper proofing.
        .. epigraph::

        If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "exclusiveFile"))

    @exclusive_file.setter
    def exclusive_file(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67098f71e53df8c6a9868f18a97c9cf9802347a67ccd4b083872e88e3bfa9950)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclusiveFile", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveFileType")
    def exclusive_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:

        - php
        - jsp
        - asp
        - aspx
        - js
        - cgi
        - html
        - htm
        - xml
        - shtml
        - shtm
        - jpg
        - gif
        - png

        .. epigraph::

        If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "exclusiveFileType"))

    @exclusive_file_type.setter
    def exclusive_file_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__716dbb5fc264771e9198522c4a7f62b563666cf17dc740e0c22e3044f18bce33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclusiveFileType", value)

    @builtins.property
    @jsii.member(jsii_name="inclusiveFile")
    def inclusive_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        inclusiveFile: The file that has web tamper proofing enabled.
        .. epigraph::

        If the value of **Mode** is **whitelist**, this parameter is returned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "inclusiveFile"))

    @inclusive_file.setter
    def inclusive_file(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0a42228199e0e29ab5346acbc9517443852e61cdd4cc73c84bed917d87b1110)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inclusiveFile", value)

    @builtins.property
    @jsii.member(jsii_name="inclusiveFileType")
    def inclusive_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:

        - php
        - jsp
        - asp
        - aspx
        - js
        - cgi
        - html
        - htm
        - xml
        - shtml
        - shtm
        - jpg
        - gif
        - png

        .. epigraph::

        If you set **Mode** to **whitelist**, you must specify this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "inclusiveFileType"))

    @inclusive_file_type.setter
    def inclusive_file_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29081570a7b6e2795a4a6beb655edbe52ff6e5ddce3a3f3ce51d900a393220bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inclusiveFileType", value)

    @builtins.property
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mode: The protection mode of web tamper proofing. Valid values:

        - **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
        - **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0808fa78b5d8d75a3de6ad059a99d42fe22ddc162c33b090f90a4e4ad8eb1cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosWebLockConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "defence_mode": "defenceMode",
        "dir": "dir",
        "local_backup_dir": "localBackupDir",
        "uuid": "uuid",
        "exclusive_dir": "exclusiveDir",
        "exclusive_file": "exclusiveFile",
        "exclusive_file_type": "exclusiveFileType",
        "inclusive_file": "inclusiveFile",
        "inclusive_file_type": "inclusiveFileType",
        "mode": "mode",
    },
)
class RosWebLockConfigProps:
    def __init__(
        self,
        *,
        defence_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_backup_dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        exclusive_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWebLockConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig

        :param defence_mode: 
        :param dir: 
        :param local_backup_dir: 
        :param uuid: 
        :param exclusive_dir: 
        :param exclusive_file: 
        :param exclusive_file_type: 
        :param inclusive_file: 
        :param inclusive_file_type: 
        :param mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad1ba7984f2bc8ae7e0bb4de1a4d8591494b788b39519873add85f622483d313)
            check_type(argname="argument defence_mode", value=defence_mode, expected_type=type_hints["defence_mode"])
            check_type(argname="argument dir", value=dir, expected_type=type_hints["dir"])
            check_type(argname="argument local_backup_dir", value=local_backup_dir, expected_type=type_hints["local_backup_dir"])
            check_type(argname="argument uuid", value=uuid, expected_type=type_hints["uuid"])
            check_type(argname="argument exclusive_dir", value=exclusive_dir, expected_type=type_hints["exclusive_dir"])
            check_type(argname="argument exclusive_file", value=exclusive_file, expected_type=type_hints["exclusive_file"])
            check_type(argname="argument exclusive_file_type", value=exclusive_file_type, expected_type=type_hints["exclusive_file_type"])
            check_type(argname="argument inclusive_file", value=inclusive_file, expected_type=type_hints["inclusive_file"])
            check_type(argname="argument inclusive_file_type", value=inclusive_file_type, expected_type=type_hints["inclusive_file_type"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "defence_mode": defence_mode,
            "dir": dir,
            "local_backup_dir": local_backup_dir,
            "uuid": uuid,
        }
        if exclusive_dir is not None:
            self._values["exclusive_dir"] = exclusive_dir
        if exclusive_file is not None:
            self._values["exclusive_file"] = exclusive_file
        if exclusive_file_type is not None:
            self._values["exclusive_file_type"] = exclusive_file_type
        if inclusive_file is not None:
            self._values["inclusive_file"] = inclusive_file
        if inclusive_file_type is not None:
            self._values["inclusive_file_type"] = inclusive_file_type
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def defence_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        defenceMode: The prevention mode. Valid values:

        - **block**: Interception Mode
        - **audit**: Alert Mode.
        '''
        result = self._values.get("defence_mode")
        assert result is not None, "Required property 'defence_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dir(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dir: The directory for which you want to enable web tamper proofing.
        '''
        result = self._values.get("dir")
        assert result is not None, "Required property 'dir' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_backup_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        localBackupDir: The local path to the backup files of the protected directory.
        The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:

        - Linux server: /usr/local/aegis/bak
        - Windows server: C:\\Program Files (x86)\\xxx\\Aegis\\bak.
        '''
        result = self._values.get("local_backup_dir")
        assert result is not None, "Required property 'local_backup_dir' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uuid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uuid: The UUID of the server for which you want to add a directory to protect.
        .. epigraph::

        You can call the `DescribeCloudCenterInstances <~~DescribeCloudCenterInstances~~>`_ operation to query the UUIDs of servers.
        '''
        result = self._values.get("uuid")
        assert result is not None, "Required property 'uuid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exclusive_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveDir: The directory for which you want to disable web tamper proofing.
        .. epigraph::

        If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        result = self._values.get("exclusive_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveFile: The file for which you want to disable web tamper proofing.
        .. epigraph::

        If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        result = self._values.get("exclusive_file")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:

        - php
        - jsp
        - asp
        - aspx
        - js
        - cgi
        - html
        - htm
        - xml
        - shtml
        - shtm
        - jpg
        - gif
        - png

        .. epigraph::

        If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        result = self._values.get("exclusive_file_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inclusive_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        inclusiveFile: The file that has web tamper proofing enabled.
        .. epigraph::

        If the value of **Mode** is **whitelist**, this parameter is returned.
        '''
        result = self._values.get("inclusive_file")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inclusive_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:

        - php
        - jsp
        - asp
        - aspx
        - js
        - cgi
        - html
        - htm
        - xml
        - shtml
        - shtm
        - jpg
        - gif
        - png

        .. epigraph::

        If you set **Mode** to **whitelist**, you must specify this parameter.
        '''
        result = self._values.get("inclusive_file_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mode: The protection mode of web tamper proofing. Valid values:

        - **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
        - **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWebLockConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVulWhitelist)
class VulWhitelist(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.VulWhitelist",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::VulWhitelist``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVulWhitelist``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VulWhitelistProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2b05d2af0a9bd5cd5cbe5617d6443add97a207f875ef7aef451ea46e57ae4b3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: The reason why you add the vulnerability to the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetInfo")
    def attr_target_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetInfo: The applicable scope of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrVulWhitelistId")
    def attr_vul_whitelist_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VulWhitelistId: The ID of the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVulWhitelistId"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VulWhitelistProps":
        return typing.cast("VulWhitelistProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7264a4257b45029ec6b792f1fe06850be75c5ebbdc028d096ee3da45ac707676)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4c478444f11cd6f86af4d0cd9579858b020bab0751677ba2215a38e67b5ecf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5959d796841b64fe7dfbbb43f0d3bf5f8e1378b8512e32dcb096b1382303bfb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.VulWhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "target_info": "targetInfo",
        "whitelist": "whitelist",
        "reason": "reason",
    },
)
class VulWhitelistProps:
    def __init__(
        self,
        *,
        target_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        whitelist: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VulWhitelist``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist

        :param target_info: Property targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields: - **type**: the type of the applicable scope. Valid values: - **GroupId**: the ID of a server group. - **Uuid**: the UUID of a server. - **uuids**: the UUIDs of servers. This field is of the string type. - **groupIds**: the IDs of server groups. This field is of the long type. .. epigraph:: If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
        :param whitelist: Property whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields: - **Status**: the status of the vulnerability. - **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds. - **LaterCount**: the number of vulnerabilities that have the medium priority. - **AsapCount**: the number of vulnerabilities that have the high priority. - **Name**: the name of the vulnerability. - **Type**: the type of the vulnerability. Valid values: - **cve**: Linux software vulnerability - **sys**: Windows system vulnerability - **cms**: Web-CMS vulnerability - **app**: application vulnerability - **emg**: urgent vulnerability - **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability. - **HandledCount**: the number of handled vulnerabilities. - **AliasName**: the alias of the vulnerability. - **RuleModifyTime**: the time when the vulnerability was last disclosed. - **NntfCount**: the number of vulnerabilities that have the low priority. - **TotalFixCount**: the total number of fixed vulnerabilities. - **Tags**: the tag that is added to the vulnerability. .. epigraph:: You can call the `DescribeGroupedVul <~~DescribeGroupedVul~~>`_ operation to query the information about the vulnerability that you want to add to the whitelist.
        :param reason: Property reason: The reason why you add the vulnerability to the whitelist.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__669f6149fbe0afb859b69553fcff59c4e10fe73b2b3f284c9c6420d46b8c12ed)
            check_type(argname="argument target_info", value=target_info, expected_type=type_hints["target_info"])
            check_type(argname="argument whitelist", value=whitelist, expected_type=type_hints["whitelist"])
            check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "target_info": target_info,
            "whitelist": whitelist,
        }
        if reason is not None:
            self._values["reason"] = reason

    @builtins.property
    def target_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property targetInfo: The applicable scope of the whitelist.

        The value of this parameter is in the JSON format and contains the following fields:

        - **type**: the type of the applicable scope. Valid values:

          - **GroupId**: the ID of a server group.
          - **Uuid**: the UUID of a server.

        - **uuids**: the UUIDs of servers. This field is of the string type.
        - **groupIds**: the IDs of server groups. This field is of the long type.

        .. epigraph::

           If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
        '''
        result = self._values.get("target_info")
        assert result is not None, "Required property 'target_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def whitelist(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property whitelist: The information about the vulnerability that you want to add to the whitelist.

        The value is a JSON string that contains the following fields:

        - **Status**: the status of the vulnerability.
        - **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
        - **LaterCount**: the number of vulnerabilities that have the medium priority.
        - **AsapCount**: the number of vulnerabilities that have the high priority.
        - **Name**: the name of the vulnerability.
        - **Type**: the type of the vulnerability. Valid values:

          - **cve**: Linux software vulnerability
          - **sys**: Windows system vulnerability
          - **cms**: Web-CMS vulnerability
          - **app**: application vulnerability
          - **emg**: urgent vulnerability

        - **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
        - **HandledCount**: the number of handled vulnerabilities.
        - **AliasName**: the alias of the vulnerability.
        - **RuleModifyTime**: the time when the vulnerability was last disclosed.
        - **NntfCount**: the number of vulnerabilities that have the low priority.
        - **TotalFixCount**: the total number of fixed vulnerabilities.
        - **Tags**: the tag that is added to the vulnerability.

        .. epigraph::

           You can call the `DescribeGroupedVul <~~DescribeGroupedVul~~>`_ operation to query the information about the vulnerability that you want to add to the whitelist.
        '''
        result = self._values.get("whitelist")
        assert result is not None, "Required property 'whitelist' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property reason: The reason why you add the vulnerability to the whitelist.'''
        result = self._values.get("reason")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VulWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWebLockConfig)
class WebLockConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.WebLockConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::WebLockConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWebLockConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WebLockConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70b4eafb05c667084e0028c663fdba3730e9fb80766ef5edbae5379852c4e379)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: The configuration ID of the protected directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefenceMode")
    def attr_defence_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefenceMode: The prevention mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefenceMode"))

    @builtins.property
    @jsii.member(jsii_name="attrDir")
    def attr_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dir: The directory for which you want to enable web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDir"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveDir")
    def attr_exclusive_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExclusiveDir"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFile")
    def attr_exclusive_file(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExclusiveFile"))

    @builtins.property
    @jsii.member(jsii_name="attrExclusiveFileType")
    def attr_exclusive_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.

        Separate multiple types with semicolons (;).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExclusiveFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFile")
    def attr_inclusive_file(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InclusiveFile: The file that has web tamper proofing enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInclusiveFile"))

    @builtins.property
    @jsii.member(jsii_name="attrInclusiveFileType")
    def attr_inclusive_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.

        Separate multiple types with semicolons (;).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInclusiveFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrLocalBackupDir")
    def attr_local_backup_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LocalBackupDir: The local path to the backup files of the protected directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLocalBackupDir"))

    @builtins.property
    @jsii.member(jsii_name="attrMode")
    def attr_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Mode: The protection mode of web tamper proofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMode"))

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uuid: The UUID of the server for which you want to add a directory to protect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WebLockConfigProps":
        return typing.cast("WebLockConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb6644d6b3a6fedc0f71c10bc57b8b17a566f2d8eb38855d49dc0922f7f42dba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9040867a4ea6b19159352bd25b56f81ff60a1d41b306a208ea0cf2512a06ba23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e8ce34dd4123463fc88b4a3897f7ebe14b45fa5cff90ea8880dac5557152639)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.WebLockConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "defence_mode": "defenceMode",
        "dir": "dir",
        "local_backup_dir": "localBackupDir",
        "uuid": "uuid",
        "exclusive_dir": "exclusiveDir",
        "exclusive_file": "exclusiveFile",
        "exclusive_file_type": "exclusiveFileType",
        "inclusive_file": "inclusiveFile",
        "inclusive_file_type": "inclusiveFileType",
        "mode": "mode",
    },
)
class WebLockConfigProps:
    def __init__(
        self,
        *,
        defence_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_backup_dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        exclusive_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WebLockConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig

        :param defence_mode: Property defenceMode: The prevention mode. Valid values: - **block**: Interception Mode - **audit**: Alert Mode.
        :param dir: Property dir: The directory for which you want to enable web tamper proofing.
        :param local_backup_dir: Property localBackupDir: The local path to the backup files of the protected directory.\\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: * Linux server: /usr/local/aegis/bak * Windows server: C:\\Program Files (x86)\\xxx\\Aegis\\bak.
        :param uuid: Property uuid: The UUID of the server for which you want to add a directory to protect. .. epigraph:: You can call the `DescribeCloudCenterInstances <~~DescribeCloudCenterInstances~~>`_ operation to query the UUIDs of servers.
        :param exclusive_dir: Property exclusiveDir: The directory for which you want to disable web tamper proofing. .. epigraph:: If you set **Mode** to **blacklist**, you must specify this parameter.
        :param exclusive_file: Property exclusiveFile: The file for which you want to disable web tamper proofing. .. epigraph:: If you set **Mode** to **blacklist**, you must specify this parameter.
        :param exclusive_file_type: Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values: - php - jsp - asp - aspx - js - cgi - html - htm - xml - shtml - shtm - jpg - gif - png .. epigraph:: If you set **Mode** to **blacklist**, you must specify this parameter.
        :param inclusive_file: Property inclusiveFile: The file that has web tamper proofing enabled. .. epigraph:: If the value of **Mode** is **whitelist**, this parameter is returned.
        :param inclusive_file_type: Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values: - php - jsp - asp - aspx - js - cgi - html - htm - xml - shtml - shtm - jpg - gif - png .. epigraph:: If you set **Mode** to **whitelist**, you must specify this parameter.
        :param mode: Property mode: The protection mode of web tamper proofing. Valid values: - **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types. - **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53774ccec50b2818e28640cfa13a84b913c02ae388077c49198b2bf26093b5e4)
            check_type(argname="argument defence_mode", value=defence_mode, expected_type=type_hints["defence_mode"])
            check_type(argname="argument dir", value=dir, expected_type=type_hints["dir"])
            check_type(argname="argument local_backup_dir", value=local_backup_dir, expected_type=type_hints["local_backup_dir"])
            check_type(argname="argument uuid", value=uuid, expected_type=type_hints["uuid"])
            check_type(argname="argument exclusive_dir", value=exclusive_dir, expected_type=type_hints["exclusive_dir"])
            check_type(argname="argument exclusive_file", value=exclusive_file, expected_type=type_hints["exclusive_file"])
            check_type(argname="argument exclusive_file_type", value=exclusive_file_type, expected_type=type_hints["exclusive_file_type"])
            check_type(argname="argument inclusive_file", value=inclusive_file, expected_type=type_hints["inclusive_file"])
            check_type(argname="argument inclusive_file_type", value=inclusive_file_type, expected_type=type_hints["inclusive_file_type"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "defence_mode": defence_mode,
            "dir": dir,
            "local_backup_dir": local_backup_dir,
            "uuid": uuid,
        }
        if exclusive_dir is not None:
            self._values["exclusive_dir"] = exclusive_dir
        if exclusive_file is not None:
            self._values["exclusive_file"] = exclusive_file
        if exclusive_file_type is not None:
            self._values["exclusive_file_type"] = exclusive_file_type
        if inclusive_file is not None:
            self._values["inclusive_file"] = inclusive_file
        if inclusive_file_type is not None:
            self._values["inclusive_file_type"] = inclusive_file_type
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def defence_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property defenceMode: The prevention mode.

        Valid values:

        - **block**: Interception Mode
        - **audit**: Alert Mode.
        '''
        result = self._values.get("defence_mode")
        assert result is not None, "Required property 'defence_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dir(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dir: The directory for which you want to enable web tamper proofing.'''
        result = self._values.get("dir")
        assert result is not None, "Required property 'dir' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_backup_dir(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property localBackupDir: The local path to the backup files of the protected directory.\\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\\Program Files (x86)\\xxx\\Aegis\\bak.'''
        result = self._values.get("local_backup_dir")
        assert result is not None, "Required property 'local_backup_dir' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uuid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property uuid: The UUID of the server for which you want to add a directory to protect.

        .. epigraph::

           You can call the `DescribeCloudCenterInstances <~~DescribeCloudCenterInstances~~>`_ operation to query the UUIDs of servers.
        '''
        result = self._values.get("uuid")
        assert result is not None, "Required property 'uuid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exclusive_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property exclusiveDir: The directory for which you want to disable web tamper proofing.

        .. epigraph::

           If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        result = self._values.get("exclusive_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property exclusiveFile: The file for which you want to disable web tamper proofing.

        .. epigraph::

           If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        result = self._values.get("exclusive_file")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.

        Separate multiple types with semicolons (;). Valid values:

        - php
        - jsp
        - asp
        - aspx
        - js
        - cgi
        - html
        - htm
        - xml
        - shtml
        - shtm
        - jpg
        - gif
        - png

        .. epigraph::

           If you set **Mode** to **blacklist**, you must specify this parameter.
        '''
        result = self._values.get("exclusive_file_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inclusive_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property inclusiveFile: The file that has web tamper proofing enabled.

        .. epigraph::

           If the value of **Mode** is **whitelist**, this parameter is returned.
        '''
        result = self._values.get("inclusive_file")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inclusive_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.

        Separate multiple types with semicolons (;). Valid values:

        - php
        - jsp
        - asp
        - aspx
        - js
        - cgi
        - html
        - htm
        - xml
        - shtml
        - shtm
        - jpg
        - gif
        - png

        .. epigraph::

           If you set **Mode** to **whitelist**, you must specify this parameter.
        '''
        result = self._values.get("inclusive_file_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mode: The protection mode of web tamper proofing.

        Valid values:

        - **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
        - **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WebLockConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAntiBruteForceRule)
class AntiBruteForceRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.AntiBruteForceRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::AntiBruteForceRule``, which is used to create a defense rule against brute-force attacks.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAntiBruteForceRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AntiBruteForceRuleProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_anti_brute_force_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AntiBruteForceRuleId: The ID of the defense rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAntiBruteForceRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AntiBruteForceRuleName: The name of the defense rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAntiBruteForceRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefaultRule"))

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFailCount"))

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrForbiddenTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Span: The period of time during which logon failures from an account are measured.

        Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpan"))

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UuidList: The UUIDs of the server to which the defense rule is applied.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUuidList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AntiBruteForceRuleProps:
        return typing.cast(AntiBruteForceRuleProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7dfc08d5898a9520a10c63958725b12bd77c4c2ff1abc2cf1e6f53d0152e5df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b92daeff4699d9261b0018b47691700d5d7bc018b35dee972b416e5d878cad67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa6a3d32cbbdf1ef1a7e200e7ed25867f9d3dee731fb95bd588cf5821e647b01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAttackPathSensitiveAssetConfig)
class AttackPathSensitiveAssetConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAttackPathSensitiveAssetConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AttackPathSensitiveAssetConfigProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc6ba6fb28840817311e0662e61b47a56d83f10606dc612d07954f0b93570da4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathAssetList: The attack path sensitive asset configuration list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathAssetList"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathSensitiveAssetConfigId")
    def attr_attack_path_sensitive_asset_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathSensitiveAssetConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AttackPathSensitiveAssetConfigProps:
        return typing.cast(AttackPathSensitiveAssetConfigProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17f7acf03d221927bb05ef313ac046ecc348ff2a9747a3ad892aad972bd98df3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c178e3636d10be4e14bf07d700dcbba8ab631e58ae1f993cd95a1016d7bd5b3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c8d53ffdec198747e39b71bb1220c357f07720e16be833402fa2df22e8f4650)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAttackPathWhitelist)
class AttackPathWhitelist(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.AttackPathWhitelist",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::AttackPathWhitelist``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAttackPathWhitelist``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AttackPathWhitelistProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31a40ca98e6ef6ba1f4735bc5c4735e7a809a49ca4538160595a4502e7baa51d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathAssetList")
    def attr_attack_path_asset_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathAssetList: List of attack path assets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathAssetList"))

    @builtins.property
    @jsii.member(jsii_name="attrAttackPathWhitelistId")
    def attr_attack_path_whitelist_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttackPathWhitelistId: The attack path whitelist ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttackPathWhitelistId"))

    @builtins.property
    @jsii.member(jsii_name="attrPathName")
    def attr_path_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PathName: The whitelist path name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPathName"))

    @builtins.property
    @jsii.member(jsii_name="attrPathType")
    def attr_path_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PathType: The whitelist path type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPathType"))

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remark: Remark information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemark"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistName")
    def attr_whitelist_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistName: The whitelist name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelistName"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelistType")
    def attr_whitelist_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WhitelistType: The whitelist type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelistType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AttackPathWhitelistProps:
        return typing.cast(AttackPathWhitelistProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea96bf22415c1b979deec235febab13500b04403c36c0ef77f482a1f6f9ed325)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bc0e7f82538d90be774f4e53cad55949c7d90787c93f4fadd7c6c9743a92ffb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__891a8a152f0e6bf524f8908370ed80903559f1fb524094c1856d4e51cb558864)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IBaselineStrategy)
class BaselineStrategy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.BaselineStrategy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::BaselineStrategy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBaselineStrategy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BaselineStrategyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__524ffec8287c6c367d9ed65c0dd0f92e7a7febe3383c454469c869746baad2e5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyId")
    def attr_baseline_strategy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BaselineStrategyId: The ID of the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBaselineStrategyId"))

    @builtins.property
    @jsii.member(jsii_name="attrBaselineStrategyName")
    def attr_baseline_strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BaselineStrategyName: The new name of the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBaselineStrategyName"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomType")
    def attr_custom_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomType: The type of the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomType"))

    @builtins.property
    @jsii.member(jsii_name="attrCycleDays")
    def attr_cycle_days(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CycleDays: The new interval of the baseline check.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCycleDays"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the baseline check based on the baseline check policy ends.

        Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskSubTypeName")
    def attr_risk_sub_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RiskSubTypeName: The subtype of the baselines.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRiskSubTypeName"))

    @builtins.property
    @jsii.member(jsii_name="attrStartTime")
    def attr_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartTime: The time when the baseline check based on the baseline check policy starts.

        Specify the time in the hh:mm:ss format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetType: The method that is used to apply the baseline check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BaselineStrategyProps:
        return typing.cast(BaselineStrategyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bebd27e2ec59940bab2843f87fe1609c1a971dc250920a04c6aa90c945d5066)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34c01f43cff6adab53ef476b6eb35773040c4cc6679578c82984f1eb2efbafef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7833f21a4cfefbc7650ca59615f9cbce380d501c322591704d086fb39f311b74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IClientFileProtect)
class ClientFileProtect(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.ClientFileProtect",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::ClientFileProtect``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosClientFileProtect``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClientFileProtectProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__180a2d4442e74c27191d56c722c8671654b0397b90bb32c7ecdc8e68f1c34a2b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAlertLevel")
    def attr_alert_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AlertLevel: The severity of alerts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlertLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrFileOps")
    def attr_file_ops(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FileOps: The operations that you want to perform on the files.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFileOps"))

    @builtins.property
    @jsii.member(jsii_name="attrFilePaths")
    def attr_file_paths(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FilePaths: The paths to the monitored files.

        Wildcard characters are supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFilePaths"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Platform: The type of the operating system.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProcPaths")
    def attr_proc_paths(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProcPaths: The paths to the monitored processes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProcPaths"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleAction: The handling method of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleAction"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: The ID of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSwitchId")
    def attr_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SwitchId: The switch ID of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClientFileProtectProps:
        return typing.cast(ClientFileProtectProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f059299443729398aa6b0842b4fc6865fe0783dd36a0ebdcd741a44362b9fb26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d01da880ce0aafb9b2f777392e7f34095377d598eeb1679b4a3f3ed492c52282)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59b478b1310af3c653e3d0b34bb4a397ada0f4cfe670735a1bc16298d572e677)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IContainerDefenseRule)
class ContainerDefenseRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.ContainerDefenseRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::ContainerDefenseRule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosContainerDefenseRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ContainerDefenseRuleProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb918b0b0c799c2313928a2ec17a8190aa1e1e5955d288a1b6ee00fb094b6c7b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Rule description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleAction")
    def attr_rule_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleAction: The action that is performed when the rule is hit.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleAction"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: Rule Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleSwitch")
    def attr_rule_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleSwitch: The switch of the rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleType")
    def attr_rule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleType: The rule type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleType"))

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scope: Rule scope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScope"))

    @builtins.property
    @jsii.member(jsii_name="attrWhitelist")
    def attr_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Whitelist: The whitelist of rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ContainerDefenseRuleProps:
        return typing.cast(ContainerDefenseRuleProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad2d4a67069f6a8742f46b8d73f85ba48be9b2bda9284a0d0e2a85a2e938db4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b6a39f8e1d8f58da6ad12240e4e042dfcc8184cc55ec1a8705bf8587c3ef899)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9928815299d9e0c0391c11f77391d6305b634d29d641b3667a88e062597f7df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICustomCheckItem)
class CustomCheckItem(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.CustomCheckItem",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::CustomCheckItem``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomCheckItem``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CustomCheckItemProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d049252afe9a7254b82ff654d08c879b222742dc099ef556aa2b5feff51fe26)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAssistInfo")
    def attr_assist_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AssistInfo: Check Item Description Help Information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAssistInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckId")
    def attr_check_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCheckId"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckRule")
    def attr_check_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckRule: Check Item Check Rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCheckRule"))

    @builtins.property
    @jsii.member(jsii_name="attrCheckShowName")
    def attr_check_show_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CheckShowName: Check item display name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCheckShowName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Check item description information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSubType")
    def attr_instance_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceSubType: Asset subtype to which the check item belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceType: Asset type to which the check item belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrRemark")
    def attr_remark(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remark: Remarks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemark"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RiskLevel: Risk level of inspection items.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRiskLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrSectionIds")
    def attr_section_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SectionIds: CHECK SECTION OF INSPECTIONS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSectionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSolution")
    def attr_solution(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Solution: Check Item Solution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSolution"))

    @builtins.property
    @jsii.member(jsii_name="attrVendor")
    def attr_vendor(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vendor: Vendor to which the item belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVendor"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomCheckItemProps:
        return typing.cast(CustomCheckItemProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4efde96f577a5ead6566e44bdcbc304c204f9f8af20ae1d4bf65c901138879dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d7c72dcfa89170a6973f2ee07d2d9ef337856ee05c15167fcb7fcc882ec2d32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a36dbe3fca2fd80706c0f064b6a6bc0efa91acab3c43816717f5ad713b44bf97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICustomCheckStandardPolicy)
class CustomCheckStandardPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::CustomCheckStandardPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomCheckStandardPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CustomCheckStandardPolicyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1571a93df8f939396406f86349f07340f8de383723ce4b902679855226301ef)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the custom check policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomCheckStandardPolicyProps:
        return typing.cast(CustomCheckStandardPolicyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e45c9e96bea45b183fdf5fd8ce027472e9c1bec4d76bc25a5cc22cfe1326c02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e404dd2ab69b41c04f953da87f2e254ed6645607cf55a2b95134793faf98313)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4886db5e77adfbc0acc49b34adc2e0f5b035ac2a0c8aff10dd412639acb2f68c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICycleTask)
class CycleTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.CycleTask",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::CycleTask``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCycleTask``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CycleTaskProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98b4407e13fb71ac82ef211c14bc1b080da4970b5f79a541a12a896bfec3e0e3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Configuration ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable the task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrFirstDateStr")
    def attr_first_date_str(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirstDateStr: The first time when the task is performed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFirstDateStr"))

    @builtins.property
    @jsii.member(jsii_name="attrIntervalPeriod")
    def attr_interval_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntervalPeriod: The interval at which the task is run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntervalPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrParam")
    def attr_param(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Param: The additional information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParam"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriodUnit")
    def attr_period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PeriodUnit: The unit of the scan interval.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEndTime")
    def attr_target_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetEndTime: The time when the task ends.

        Unit: hours.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetStartTime")
    def attr_target_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetStartTime: The time when the task is started.

        Unit: hours.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskName")
    def attr_task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskName: The task name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskName"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskType")
    def attr_task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskType: The type of the task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CycleTaskProps:
        return typing.cast(CycleTaskProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3173372f0a3419ce2da87b8a0612d9ae225c24864b0154ac8e0a8c059607388)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ec0d68601f6c330709600dafea67cdc006398be58958bf19e65a586f2df62fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49ded5ded3b74ca1215a3a055729f8453116cf2423ce0daccef769c1ff66660b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGroup)
class Group(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.Group",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::Group``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[GroupProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05d176e3a6c984539767221c4dbc599411c5fefc69d8907c2f034b59d3fd2739)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupFlag")
    def attr_group_flag(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupFlag: The type of the server group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupFlag"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The ID of the server group for which you want to add to or remove servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GroupProps:
        return typing.cast(GroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61df9d77bf9a94a9ec89658e7b44405e0eb2cef75f368f46a4be9da3c2639069)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19a8c0e53edc1f41f957643e50a24569681b7c20f10a1e7ebeb8ad7cb34b33d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11a0a9d26c6f66b0eb7179c7235fa48c27bf2c7f0da351bbf62e786248b992eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHoneyPot)
class HoneyPot(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneyPot",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::HoneyPot``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHoneyPot``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HoneyPotProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea7753b47c29d1cbb0f0d9130adecf38a125490548a1041d5106c41fca800511)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotId")
    def attr_honeypot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotId: The ID of the honeypot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotId"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageId")
    def attr_honeypot_image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageId: The ID of the honeypot image.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageName: The name of the honeypot image.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotName")
    def attr_honeypot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotName: The custom name of the honeypot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotName"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: The ID of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: Honeypot status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneyPotProps:
        return typing.cast(HoneyPotProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5303c3e062d661bdd96e2ad78f0c13c1132ad676298ae3e6b34e3fe5a9b02a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__708edf105cf0dd7d4e5324ba3448abbfd873612f67cf0b638d5941d5c894f7ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4378f84f0b4df4515600f359e7babf21a8b9c9b04ad04853ee9f577e9e748831)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHoneypotNode)
class HoneypotNode(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneypotNode",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::HoneypotNode``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHoneypotNode``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HoneypotNodeProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32030f16e424d2cbd3193e200d09a30524f9e85bef18e632e8c4cb279d968c3b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAllowHoneypotAccessInternet")
    def attr_allow_honeypot_access_internet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAllowHoneypotAccessInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrAvailableProbeNum")
    def attr_available_probe_num(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AvailableProbeNum: The number of available probes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAvailableProbeNum"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the management node was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: Honeypot management node id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeName")
    def attr_node_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeName: The name of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupProbeIpList")
    def attr_security_group_probe_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupProbeIpList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotNodeProps:
        return typing.cast(HoneypotNodeProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__699d9426d27c10bb6fcc4660c6a1835d7f51e1ad8c7ef48b9db25353fed7b202)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3cbc6346bb31129ce7a9ff5f9a82503c2c799c57a7e5c56796e20e84220731f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ac9d87ed35b41e5f1b7e106eb4d1b88fb286bfb01e13a06e0e07f997144cf6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHoneypotPreset)
class HoneypotPreset(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneypotPreset",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::HoneypotPreset``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHoneypotPreset``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HoneypotPresetProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb92fee1b671b56202f4b6ae0b44b33a817f64af1a2b902d90da207c6a04472f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotImageName")
    def attr_honeypot_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotImageName: The name of the honeypot image.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotPresetId")
    def attr_honeypot_preset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotPresetId: The ID of the honeypot template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotPresetId"))

    @builtins.property
    @jsii.member(jsii_name="attrMeta")
    def attr_meta(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Meta: The custom configurations of the honeypot template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMeta"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeId")
    def attr_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodeId: The ID of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrPresetName")
    def attr_preset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PresetName: The custom name of the honeypot template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPresetName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotPresetProps:
        return typing.cast(HoneypotPresetProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d1722a68b82653733cff005486890a3ea357299abee4b850c52dfa3e9f9b6f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__065a24187bdc36b25d7a11db3c9b4411dc14eabd03d4853442fddc89f12601ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf193dbb252ef42499f6a421b16469fe30ae44df3e5cbb4d896a2f84568469b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHoneypotProbe)
class HoneypotProbe(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.HoneypotProbe",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::HoneypotProbe``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHoneypotProbe``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HoneypotProbeProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__597ffe2c5967c83e6e23edd33726a517ae8f24ba176ba33158a6812c8c4d1bfd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArp")
    def attr_arp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArp"))

    @builtins.property
    @jsii.member(jsii_name="attrControlNodeId")
    def attr_control_node_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ControlNodeId: The ID of the management node.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrControlNodeId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The name of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotBindList")
    def attr_honeypot_bind_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotBindList: The configuration of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotBindList"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotProbeId")
    def attr_honeypot_probe_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HoneypotProbeId: The ID of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHoneypotProbeId"))

    @builtins.property
    @jsii.member(jsii_name="attrPing")
    def attr_ping(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ping: Specifies whether to enable ping scan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPing"))

    @builtins.property
    @jsii.member(jsii_name="attrProbeType")
    def attr_probe_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProbeType: The type of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProbeType"))

    @builtins.property
    @jsii.member(jsii_name="attrProbeVersion")
    def attr_probe_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProbeVersion: The version of the probe.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProbeVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceIpList")
    def attr_service_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceIpList: Listen to the IP address list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrUuid")
    def attr_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uuid: The UUID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HoneypotProbeProps:
        return typing.cast(HoneypotProbeProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ee5d00114909e1394e2e022a36f6e8a82bd48974c54b05ddf7b75e6733ae6ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c31fbb9b830691a4b4822233f8c238b19342e601ed1074b6aef98162bb7d3cb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__975d1c23f1d4a3d8dc6d87b15b3bc24dc344e3a140f8a6c8001f55e3a4beb496)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AntiBruteForceRule",
    "AntiBruteForceRuleProps",
    "AttackPathSensitiveAssetConfig",
    "AttackPathSensitiveAssetConfigProps",
    "AttackPathWhitelist",
    "AttackPathWhitelistProps",
    "BaselineStrategy",
    "BaselineStrategyProps",
    "ClientFileProtect",
    "ClientFileProtectProps",
    "ContainerDefenseRule",
    "ContainerDefenseRuleProps",
    "CustomCheckItem",
    "CustomCheckItemProps",
    "CustomCheckStandardPolicy",
    "CustomCheckStandardPolicyProps",
    "CycleTask",
    "CycleTaskProps",
    "Group",
    "GroupProps",
    "HoneyPot",
    "HoneyPotProps",
    "HoneypotNode",
    "HoneypotNodeProps",
    "HoneypotPreset",
    "HoneypotPresetProps",
    "HoneypotProbe",
    "HoneypotProbeProps",
    "IAntiBruteForceRule",
    "IAttackPathSensitiveAssetConfig",
    "IAttackPathWhitelist",
    "IBaselineStrategy",
    "IClientFileProtect",
    "IContainerDefenseRule",
    "ICustomCheckItem",
    "ICustomCheckStandardPolicy",
    "ICycleTask",
    "IGroup",
    "IHoneyPot",
    "IHoneypotNode",
    "IHoneypotPreset",
    "IHoneypotProbe",
    "IImageEventOperation",
    "IInstance",
    "IVulWhitelist",
    "IWebLockConfig",
    "ImageEventOperation",
    "ImageEventOperationProps",
    "Instance",
    "InstanceProps",
    "RosAntiBruteForceRule",
    "RosAntiBruteForceRuleProps",
    "RosAttackPathSensitiveAssetConfig",
    "RosAttackPathSensitiveAssetConfigProps",
    "RosAttackPathWhitelist",
    "RosAttackPathWhitelistProps",
    "RosBaselineStrategy",
    "RosBaselineStrategyProps",
    "RosClientFileProtect",
    "RosClientFileProtectProps",
    "RosContainerDefenseRule",
    "RosContainerDefenseRuleProps",
    "RosCustomCheckItem",
    "RosCustomCheckItemProps",
    "RosCustomCheckStandardPolicy",
    "RosCustomCheckStandardPolicyProps",
    "RosCycleTask",
    "RosCycleTaskProps",
    "RosGroup",
    "RosGroupProps",
    "RosHoneyPot",
    "RosHoneyPotProps",
    "RosHoneypotNode",
    "RosHoneypotNodeProps",
    "RosHoneypotPreset",
    "RosHoneypotPresetProps",
    "RosHoneypotProbe",
    "RosHoneypotProbeProps",
    "RosImageEventOperation",
    "RosImageEventOperationProps",
    "RosInstance",
    "RosInstanceProps",
    "RosVulWhitelist",
    "RosVulWhitelistProps",
    "RosWebLockConfig",
    "RosWebLockConfigProps",
    "VulWhitelist",
    "VulWhitelistProps",
    "WebLockConfig",
    "WebLockConfigProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

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

def _typecheckingstub__3a1cba07e38261c08cb31375a787a9b6862b825322b1c26b21c7be6f1d5e6406(
    *,
    attack_path_asset_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a655886d0e54421e987e78f6a068946b0be94bc7fb2b90d7ffa575fc83ee7acc(
    *,
    path_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    whitelist_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    whitelist_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    attack_path_asset_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAttackPathWhitelist.AttackPathAssetListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7b1ca10744798d50c6e2109e186dbfff98f07551b730e133a2a0f98ef0bef83(
    *,
    baseline_strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    custom_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cycle_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    risk_sub_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    start_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ac2c24d3c9270dce05052e3242852df733f156c67607be87323ec1dc444a05a(
    *,
    file_ops: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    file_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    proc_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    rule_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alert_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__037cfa946bd372d33fca8cf4c5c2f19f58ea935f7befad8e91404992286c4871(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_action: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_switch: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scope: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerDefenseRule.ScopeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    whitelist: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerDefenseRule.WhitelistProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    whitelist_hash: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ee070bbc594874bdeb63d419d1d21d7309974263a9a67d190d24f2d6dc881e5(
    *,
    check_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    check_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    risk_level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    section_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vendor: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    assist_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.AssistInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.DescriptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    solution: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.SolutionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__732f0b9dc9a3fc14ebc73817147f0039d64756556a9ca8319e0f4eb10388b23b(
    *,
    policy_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dependent_policy_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__296bc6966836b6c0aaef358302121a63d74c7b7d5c9399969cb3e539a8355c18(
    *,
    enable: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    first_date_str: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    interval_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_end_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    target_start_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    param: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e00e127e373cfa806915d877a7d6843a176cc877f211156948cfa2b118f7b3d(
    *,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c673c3af46f52221ac38861d3a1a92ebe1720a330de13d38c940b1a923a2812f(
    *,
    honeypot_image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    honeypot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb5e5ea59a31a874da39fc9ec480347b49f64db2d996471bdc8092294ceccd53(
    *,
    node_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_honeypot_access_internet: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    available_probe_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_probe_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__004ed1b77b94c2eba5e9afb6cb60ed0176ed44edaa3d6a234d168fbc281d5f65(
    *,
    honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    meta: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotPreset.MetaProperty, typing.Dict[builtins.str, typing.Any]]],
    node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2031e2b6e7f161aa046ccc30b1492c555d44a26b2b20cde5594a6d9fa121eabd(
    *,
    control_node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    probe_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arp: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    business_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotProbe.HoneypotBindListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ping: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    probe_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9120b4a05eb74e4440c4d2ff1a99d9c211a3e9377b525a060087a21cf461969(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageEventOperationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__139679439e38471e060251fdf9b9935da9b52059b6ae579a03c0c10d4334c1f2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a370898f7ad5f7511d3cf744c40d050e960c6284ffb8d59d586d34e81affc77(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38823686e41f14d0d362e8d979b29e404c182656f5f869ae7214cc6b7a40aa95(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0fe3f9c6ac22845d1bdc35c75fce4c45c45707ceadba77b762a5a1c65ecceaa(
    *,
    conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    event_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    operation_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    event_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scenarios: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75942e5f058c894ba363dec82c603e65f0c217242931be81f99c562705118e39(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f6336650270bc2e9452da58ed898f493100e726005516f3ba8bde5114d04d20(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f8cf0279f358956dc6bb5e22f9d2962db9675310d970899dcb578596f0fadb2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c221f7b3e92cad6701ba1e5cfb120ec53ed03c508ddb2d8f139fe0dbc25424a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d634b27a82f45ff70d30b663b3632c97500f94b6b81556222a6b8fe8f7b3f74d(
    *,
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__53dce3ea2a4a5bc7617056193a9a65ff51da6084fe0445d1c3081b316455fb34(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAttackPathSensitiveAssetConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b2bfbae102c9754e855350a139a7403779fd21012fea3b08d51d303c971223(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97460a33cf40e1b3e18975738c303be926e681cdf4d57b6e678a8aa0ae6426da(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec97c055f077eaa979b94ee1fa25b481125406c11c7efb6b02b5ad06f54b37ea(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__841ef72c804316f93901deb7bd0ef081d931d188549c69fc29f4ac41ad2dabdd(
    *,
    asset_sub_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    asset_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vendor: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7e33837869ebd4559c38a300b398ccc0810ba9bee37424b2bc0fc98a6f292d7(
    *,
    attack_path_asset_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dde8c0c9349489bbce59fe98762dd8e53b9eea94a312b25bb220702a085c056b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAttackPathWhitelistProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1c6732d15108390599f586c1f2010919c65c123c1a3b7d4af84788991e58e7a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2170923e03b9b9b44fc431f23235e67d991629a5479bc981f5a3913e455c7537(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b92131cdd2a27bcfea4586d015aeea613b29540a9675d7637915cce8dc0a638(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96a0d750046a39d50a5b0651bd8db932abfee73eb4e40df1b3ed35bcf2d336e8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10992d1196160c093ed15cb87e410cafe440237e8684d0edd7653e8d8f3db349(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7459a06062f8913ff8de0cbdede4b683b0822ea358b554e21dda6b627c2409fd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce03195f032e82b3ffcccc58766c15813f72be0fb512c9e40759b6310d55443a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAttackPathWhitelist.AttackPathAssetListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d914c29b0b92b37ae190894d71f2d8736b236426566eb77180d61754577e2228(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b03fb0969d46830232bec3590068fe3b7e3373f9c61a62c4ba4d2b57b43222c7(
    *,
    vendor: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    asset_sub_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    asset_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0faab6e874aca376a1fb9ba797601e9ba4d81dedc0d078e2820cbe78d54a82fc(
    *,
    path_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    whitelist_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    whitelist_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    attack_path_asset_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAttackPathWhitelist.AttackPathAssetListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97a434427384375f23532259396a88c5346607d8a9cc893ec64ca1243511bf6a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBaselineStrategyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5614df2f5ea064791e38c5d5fbf4af1dfa8328502b1479654537ebf801bd710(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85f9911dbd50ba10ff009ebed3203ea38a5d48647ac479c5e1249ab8ef6fff06(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbbc4e22907ae96a7bc1971e4ff0cad3a5e1c85b50751c8ee39052e8b6d1c6ec(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37a35dfa8a30ded3954c11177f54c644e13cb259db56b613696f3afc5060972c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9334076bb7720abcfce7615c69919e3ecdee81135af2e1bb07f5c227b29b68a5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f5c112f447583bc52dd5f5ae71952b2fea3d7d0ebbf58af2a4b02ce117208a8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31f115c1689496f27740a5ef95228d361837a997937c82e5d1259174588e5994(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92cc92c870273da089dde04c5b5f19d613b9515901ed64e31584132015d8e7c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e0892b0bf27ea1feea1fd7f0cbd36ac71eb406bdb4fb8efd5f675eacd65a591(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26b47e6f13ba84204b09142ad864c2c94022de76b34c890cc451bfc2d535bcbb(
    *,
    baseline_strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    custom_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cycle_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    risk_sub_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    start_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39884c2e5c8f6a3109b066cada0cf32f2ccf6aff6dfbce17be1b962ccd0634eb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClientFileProtectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f05bd5739ab0d9cf0e7330ff5f270d46141fa3b396c32ba68be5f8d07d840c76(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2cf1a284957e753713b7855df9a4c67da53d1f1ff60bf53302eb113657b450d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5d267951d0cf046fb39fc36432565733e82355b045b6319a9a7251298ff2b65(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ae5825898685e85668bec77da87a15d9670f6448afab57f00eb9ee65692a843(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c378635171a548acbc01f40f42e81a34c8cc9a99da43ba9aa4a86b9359a6640(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6368f96e034aa4c84826f2c7dd94d6537acda1767a9c0cc28679760b05f754b1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a108f146e89d7ccc797ddd2ac514e937d59c3f5edc3601c977929ba7403810ce(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58fd588be809bb6cc70ea2ec9f8114448b20da34e2f80c2f836366af3e8ce481(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c529cb9682cda658649e41d153bd82970a08730288d1c72ce33b46f51ca3b26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a579074ffa0df6ae81a4d6391a30b1b89d5a3f0c2bb775693b85f0871852b635(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77b7df4f0645a971782baf62791f15b23f96e45f475738da07b3e9dca62bff8d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adbca6e59a2d1e3d9af234f3f2d642160bd1f65b04ed0f0eb7a1adc245c1058a(
    *,
    file_ops: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    file_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    proc_paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    rule_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alert_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f95a5e9f45cd97eba5b02bda6dc6713f1d8395c58734bfde7cdddd6bb5c618d6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosContainerDefenseRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92f3108f9afe3a2d40bf29fbd89205a6976c826e6c9ed18624b45986b1edb293(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b61a4b4e748f6126d23a3a6b6e5c28fad55d042df21a66206502484e3ccc0daf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71cbbc917a0cf471cebaaa99689f3db0a10d66741b5cefae5f56baa406f3b009(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf3b9675675ddc33787dc8167635b86b116a83530ca9e76ab51e455d830013e1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0005c8b49a6ebecd130cf2d14ef9cc60a03e0ee48ef89e1e5b8d2def473b69ae(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8755b29f75e6aba52a527ae8c21eeadddba68346d3c12c7f8f0c1d0102368fa7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3a9371c3dbb7fcba8fd6dc430ea077b5a7071fa46d048373f033adebb9ae556(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c6ec0427e953373525a89d317d96b7b4c7898a6179f14530a3ac183813e6edf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abd710b9c75b1c5a629149cf76a915d25f26b78f7c12aea728ffe27ff6917d24(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerDefenseRule.ScopeProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1722098d04b323571f84373faf71d74178930f34c4353dc23d6b7ac0f49cd199(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerDefenseRule.WhitelistProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec96e4e2cbd22e83fc89d3f21d9b5cd2f013966a1951d3a13565962ceffc9c7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__453c9c0f6e2b2dd9dd4c32ee1461a2bc3f467f2f65d41ddd34ba73ac884dcbd9(
    *,
    all_namespace: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespaces: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46ec5d7b2048741c9eae73557716711df7b26c2611ee3fa0626ea03a0de3775a(
    *,
    image: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe1fc2531597e266d7d45364f094a195d805dba8bd51d7127c9461cc8bc6fb29(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_action: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_switch: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scope: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerDefenseRule.ScopeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    whitelist: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerDefenseRule.WhitelistProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    whitelist_hash: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53762ab8f99b63b8f9f76a33c955745e9cdfb98a253535b901f19a1299eb64e7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomCheckItemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0f5be4bff6593a01a4e49a47b26aa66d837b483c3cd9513c8f1734f70a8b8f5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2c350eb7a8f83972a0246a7369dfe58ec5a8badd1396944453c542b0885ded9(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03c2ba0fc3fb4eed77899245f40b0e572ff1f9485cc1394a5da4426b9f508fce(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f019ce5aeb2cc567710458c0bbfbee9fa859bbf984146014ac8d923f43d965d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35af4c1444adc2fec43ec957695836112a7956f15f7a18ff00d24bc5454f1598(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69bdbb161a7cdb1c6a7ca8ce4bbf8380d6ef9eb4c3d8479a00909969f14c5491(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__144f38b0c194b3d61a6916ca1c935b5fb7e01a9655e26efcfd806b0f7962763f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39adca2c66a7bc714e1d9de1bc88bc6a9c2ea92af580a4e705671735936184c7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a231fd8df4777e00093d7ae270f24dd08735b173ddacd0f040ea7ea46c4dd979(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ae9ef4559dac83a0b794c85e59128ce6108a950eb3e73d2f30376e1b7d32952(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2483cb0dbfef13b154068f5517ea0c79972345a3c83425cd4dd0c5def21d62af(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.AssistInfoProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25e10e97ec59c0304d2830e6f1c156e31153991c0a4df20a644f608168081f7c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.DescriptionProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93afb55b3b7ee3621e523bd031d3172c71115dcb1e69023062736aa866ed3332(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cf344e2c0c623bab12d82d05612b250705702cd8b953d8cab8df079f8a5a19f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomCheckItem.SolutionProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b9039bd04ed4b11bdd6fcb0b4a3be046ca6e6332d93904f27ab55f2256a8e73(
    *,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd1b9e527e29d47c7fd93a8ba6f6122418513cad1797ac51c32abdf706d59990(
    *,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d34dee1b8a5f99578082d63c0808b4edab66f9f6b464090b411f8e2f395b68e(
    *,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac36570a22e611fb8d5e06ef9a33e6020256ad94ec2fbee4cf0cb9b7382b2117(
    *,
    check_rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    check_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    risk_level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    section_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vendor: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    assist_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.AssistInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.DescriptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    solution: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomCheckItem.SolutionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__675cd53840c43ba6adb854788776a2cb7acffa4a47976e8650d2e106ad928c11(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomCheckStandardPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab8d288eae3e76bc72db41cd3e1447575bf2b7636ad08c39373245a6d55f3cc5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f78ecfe56cd2ad0fdd07b90e300af6b3de14341cb9d481701eda022733ed0e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58b4e67e64886f898672340a7493d6ba6ff49c6b105faf2f35ab2b0182337bc7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26c97345fe7198d516b184cde84b71ecb35e6d4b58660631fa2b6a726a9700c7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e27ab63cfa7f84dc25ec962ad35e1ebb3c5b4efd5037e2b30c4bee46fe737679(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb57d5ce5b9b35eb7170dfd1092efa10412f9ccf99b7341a7634dadcebaf1902(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9d4f631c12f2583ad3e1a74ce5e500218f71ffcc7c9f8b527b023e79313e8e8(
    *,
    policy_show_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dependent_policy_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c533c04fa560cfb21c320981d969a4f9287cd2cff28eb1776a1a785d2fe88957(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCycleTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d66b638a4c07940fb4c170fa8988ef9c9929b2e7929f6ab097f9767fcc2dac3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__145357ec8c4c1ae663a8ede6fa23f15d05756057eccb3c09de613027a2eea098(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__263411ed93f700a4f0be06858ac0a284e07751c121c0decc6125e3701b5e1678(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3de861d7845a9be9af99ddf734f0c91dc46133a323d7bed632346363aa27b52b(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69b04507c19799580b31e6fd8ae090847077d42a817359ce45d073f0b5d78b0b(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f816e4df244a0912f96e54981609bfb45b33c1c214b208e5d8cf842a529e8add(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18f8acafb7f3d9d5eaa25c7409e22559e927f5bf17092c060992cf6ec96e023a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e81824deece0b3599b85f5805f8d35568d86977ae1b332808543185c39883544(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9638b3966b8ce4aefbc8ce4bd4f91d72c678c9e7ddf3e519a84c5f45e2bfd9e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d684d59b1b5984d1052deb2caaaf195f28aff59550eb1a1d27e6005f0f1a01f2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8452b26e47a822722759a00567a2ebf08bf1128959c1abc8011e897c8beb132(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__345e4141333c717ba8dbe06a42a1ae48f27bc60c8e9683aa2878d2e60bec73fd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b43be5f607de02998068b4bd5349b44563bc2884af287f2c40eb777dcc7030f2(
    *,
    enable: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    first_date_str: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    interval_period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_end_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    target_start_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    param: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__471d5beb4e2082af3ee72a22a2a7a44e857db0de439ccb50343fa4b1f236f55b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55b2f5cc54422cd1da1fe800e7d76b44ccc23e8059e2deb643b09ff0bcff5d7e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3a5646290e669a7e19ed756b79752be43514173b3948d18e5b55b5d4fa08d13(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0088444aac5e3e17b2fcc620a89a6a8b45c4b8bbbd4fa9daf25c377bf3f6f4f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9ee18dd780d1de3562c70832cc9d81d4f53c164130a0f2f25a85c68f6459d5d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__574d1b655400f2af8a60410b1fab7d237a5f407adb8457d2060f1580f799427c(
    *,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4a8c59ea44ec58eeacc6f5c477b478a6b727c9f4eb23be22742a9eb71ee769a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHoneyPotProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__939cff27922a6edebc83cb05c7e2ab711577552fea03e475e7eb459778883f7e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50c7f5e06100b30751f4980c5f4f3be77c502f4fcb411471a1d4676f3bbeab60(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78f3d185c79ec8c2237ca911a995c76e6fa6d427a2ea9aebdfb3cb4d2aab958e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79cba2f79296a64f43023da1ff1cb925ed1a953567cb6d033282f4e922ef9757(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d015c535fdbad501f7d588cca8a7272c1b8e446a0abd91b0550c318204650fbf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__485381af275ddd20aaaa7d583852762a358c3fbbcf1f0b534d46afe255936a21(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7f11e71aac2fcce43de7e8a9a4a957ae77c0195ef3c34c8dda82d4423a7df50(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5187f9cc439cb829ce8c7ade1ab0871c5c3fdc154feaaa927024833ebecad54a(
    *,
    honeypot_image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    honeypot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    meta: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1b5e6305f2a0228b4d7c855961d85c6e142b6d6cbdba148c9c20fa86a804fc5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHoneypotNodeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8f06596913c15a3deb25301aa5ce48982d34741bda3b6564875c04f8ea511c7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36e60312574263cf8f9de8edfeebe729af83da623fb56d3988a244e1dbc0966b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b075e2c0fc167a1fc5821fcfb81c137241964d98d350e23df41a34b63d8969d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b6654bd27f2a5cb6fce8d85bcdd00c17244cc825d23a12d2fe7487c880edfd(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acacbecfe48c9b8d988b0152136fc67d952573efaeea2efafbdbe6b37d0fc9a7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b57a1a153ffb558357ff0961f6c86edc25d3fc68bd7973aa815bb17b73108b8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1d2000dacfcec83f2e5f10d3995a9df9a00823545713ff83c04298e95950adc(
    *,
    node_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_honeypot_access_internet: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    available_probe_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_probe_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64644125d30129f5724565380b53a1ca45d04764f74084566b010133eea29fa2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHoneypotPresetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d16833e4c99b426dbe691b20c7c7ad140d36fa157d3c04b26bf3eeffe2fa2c20(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3713c05092e0d9614ef3cfc5a610ca10f23e5edeefe85a660012cf2b5fcbeff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93353b1ab63765791c45a3f441e90c7d4dbf37bfe32f31daa3622e04297c759d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17ff18c6660742bbb8e6fd866ac099bbcc01425f42eeb401a88e5975a1c5baa8(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHoneypotPreset.MetaProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__271c1c5e4d1b7c9cb344c8f236f904aa399b7467d19e1d586142e21b3d516c92(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f4cb5aae102d3425d0a4ad3dbb124b8ed18d1229226b52af6e6f8bdab4e8c0a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce2f6f66457fcd0ec57b902563e4392141b8ef4a46a36b04389616de8ee75a4a(
    *,
    burp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    portrait_option: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    trojan_git: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c13eb5e2cf0b86561ff9f5b9c02e6c5032274e872d4c76e9d600fb841dc4e67(
    *,
    honeypot_image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    meta: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotPreset.MetaProperty, typing.Dict[builtins.str, typing.Any]]],
    node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acf56934c77c92be30e249a52e88b632f6cea1a3808ca8fba6a06bc60af59a2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHoneypotProbeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85cc192598e287df8078655a03332866890b264eeaf03992f195ca7fa8ff655b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__872c59d59cfcf0ca9d6d63dace93b668cfdeb41354d3c0e3577011e443b52fb0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62bb2dc8e692d73fb0dd8b24f59b892be447c18c6dc902ef2bb2d6912128ca67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7af675c4d5c4a6421a00ee6ce5c076c51ee111496acf438810b2e055ba39ebbb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa0f7333033f2b92a1bb83a980e90b396bf593fb131c42b4ba2f08bea5f4d203(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4d3e4bb6e26e0372690f3bec2a8f7ddc0f84820d12f5efb109239fd48148c0f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf8a032443b71b8adf7806c13a7d43df90953584a4ef2b5fb566542230bb2b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c7df4f1a5e96309da04ccb862db105f6f4c79df6e92db09c01b8fddd5a63f22(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHoneypotProbe.HoneypotBindListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53331558e20b11f55c52a43659e8c87489f0d3bab73332411710cdadea302403(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f2b14e3069006b83d8fee8baeae8d9bf40a3bb76827ddede19be654b9f23a80(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6eed980a0f20877e4269b01ddc27a40620b7999842177d54a1b4eb727127c3de(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3cf0395985850d1db6c997e21ac0d8f7346cb7e5cde7979f781c2d39679a43d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fa72615e2a03c005c53798ea31cb11015b813942c5dc2c3e2bef530d848bf54(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__044040af1fdf8d6a523701ead6a1079d72839fa15302baa480276c4681424154(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1e3606fd0d8c56a7fb011352a3e8e4fdf9635d8eeb8f26623fea9bf1d0b3191(
    *,
    bind_port: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fixed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a169a24d742889ff0e730f297a6ab417711f5fe9f89b71fb821a514bc209f55(
    *,
    bind_port_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotProbe.BindPortListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    honeypot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90dcc6d1ec605a05e00f8e2c127819ce3dcf2fca7ecaa5137f1665946441f1c7(
    *,
    control_node_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    probe_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arp: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    business_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot_bind_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHoneypotProbe.HoneypotBindListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ping: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    probe_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20146cfb9002452510cffe76fc2815ca519183337bf2c239e852c94bc870fb2b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageEventOperationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f154971dcaffd1b972a39fb45eb8415ef6006c1636d013ead5e6700e12943377(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6609c7c396b0c2ed1c60ae64f3ad977b34bff5d19510c5c176f79dff1758360(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6dfe64160f7bebd8c3483d622ff63ca6b9bd27acb61d7cad864fb01f59c7c2b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8da46170909e795c29c3b4a9a362ca479e471179c0a1543ed9d066d4c97ab68(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__448e09378cfc10fbe71877b06f5b8fb93be9d568833bf501c652b71feaee8eb9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00986f4b48af8403f5e54e78325fc1a78856d7384bd1227bfe635b5238998fdd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99c76b09ba7e57a2448a3f926f4f26641e6c6aec280214f445981d141dcc084f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30a2c555ffe1f1c6fa6180aea884b450e74053c7148c31517de926396ca83097(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed4565e8afc7cb3f09a3175f59d89ab146d59540de3a81fdfe9924544d323dee(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5f8c60ffc2ac5b7b06c2753018f46a6e3e09f5b43ae9df97121ce3cd91a4af3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__713aae7f3e0abd9b925e95d665606f526d7f70e7ea42ba543712929a59a49e71(
    *,
    conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    event_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    operation_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    event_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scenarios: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ea9ded8f595988af6486ec9ebf760fa91f399715ca94ad70c00d7e7989f1ce1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8b2efbed5fd210748661ffc699a238b00891f6bdb2db7c17565926df54d84b1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7228f2d6db6256b40caf0967a0cb7320f5a50e00222960bbffa02c7d92d873d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__696c243a1391601966d944ad93dcdfad8c9ae0d0011ce40887c2e56db88b6995(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a65e4954ad7bfb7dd9a991c3079cf0bafeb7fc7f61cdded838248d1fed96cfbd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f72d60aa3ffaf36828d11ad4fa9efaaa0e70f7554790e7d844a391780aaf1de(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b09cb3c1f73240d33518c74d9c494610b5453fe1c8398d485ca30cf855fa6294(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c281f671aa3db96ce307d540012fd93524037ba27f8447f30a3ad96a0997bf8b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e1730ac5646079649a32ac754b63872bf734dcd4fc304ec78e5992748580037(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c98fc4e3dd40ccc1f7fa43179d11f22202338fcef56ed206b82a21b96ab8ccbe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07b1a5c119710b00dc65696de70b19fe53f6d3a4173df44540afee6b651a3857(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f93ec6463505e07c8ed8aefacafbc6a9a14c8a4cf45823f96825c1dd5de9d679(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae7977f5516d2fc0f5ba0e78f78427e3bb57db2d751acc36d6de9964e2cca469(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2774bac4b685828dd54d1dacfa7a418d236a391f4e0f49526f378763a3e0db6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30aa76dcf303193122a4541555fb8a98729d7b14d68d3aa8a86a03ceeec78c02(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a7c076770cce20d055d898fdcd27583d716b8b86a73f1c0dc093e9f1cd4e3de(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e61162da60e5c06fc3b07da02bfa23f881f6fc747f2b7eb174eab1a81bc062a1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fab180aeaa2b07311ce5de5ed84d5e6e35a6e0537b67a5c75f864465ae21f3f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2aab862db9d6876b198c7f5d714c7eb78c31c00a0e4264c20ae7db0c84f2c32(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fa113160d1544dff9578885c215c0227d34d0d707fa88c7a9b23f908d6d1804(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05159a17185b019f5332e79857ede4c630da520fdbcb74c65d72d1f3091347c9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87abd72a9aea30656c26bc11314a73efb2d9c98ab0372164f9decd0e085c5d73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaaca46e4281aad3712865007757221d6ad0d60efb5dd384e3d9685987e4800f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55fa02c0967a81b71236e88194d8b3949d7fad9a62cb478fd95b280150722a1d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e3533b6f50c672e107493122492d1e8b79510d42f05a1615a7a2658eaaa47cc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7b6dcff40c6c4efad8abc71bd6efaef546ee533c35e4bbe8129c2214d5dd8ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14b31150fe723a7b914798a93f36550596c4e4b4bec299098f8909d6fc5b7695(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afc00822c0a769f6e7849d12e7db79713bae4cf445ee73dd2f7dda3f8d5ca70b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6d77309e60298e9daed82eaf20af43ef25061e13ab9aaccc3df837b4d1a6e24(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__739b9d54bf5a52431ad5fba5d1325ace0f91a430cde68cf9d1fb0f137c1290ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7cecc45822ec2762adf7d4f7d073d7821f798285e5c9c651737058b05b28765(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19c7816fb2add7a906f0d7e5eab175b69dba2b08dfd15e8a635583417e9d39c3(
    *,
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02461563b9d91aeca8c8a8801e75095f50887e6eb1cc44e321e31f4c8baf402a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVulWhitelistProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45d55d8a966071925c192c175bbeaa6c396401a288b9396e81da2feae7cf3d6a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9806ae218c088dc21cf08ed04a91c8311fdf901edb512df41eb1629a78dada5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c065f40945ba491685c7fbec089f7a5727831ed2551970bd838fd585e88ad45(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22247f6b079e1cd59b612085f38b380f3f0aa9c5449180f832ff4418189d1d2b(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__017cb7aa4c4ab1b7c8286af191186df73d2000b16f7fa0bb3e7c89e2aa71fe49(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0c3d8a4c0d873fe0f0359505b0813df9dffebd722ca13288c97d8821a5e6c04(
    *,
    target_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    whitelist: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__016dbde8e093573b57da74d8012b43e972f6e6cd5dc976ecbea82ac27669ffe1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWebLockConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa73093567fd78c700faaa780b713d6a436c53d9a3cb24a63a1b92c0e8026fd0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec51db9db3120324fb4e6b913e3e59ff6a52233cad236da18a0839ec8951add2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2be91c2fdddb467dd28a20a94ee5ff355d803560db039bd16c04c19367feccda(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc1471f02649df526cc5971a3de1ee220073bc5df9fc165d248f824859f5fd97(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e361007d463468942f1f8f16c3ff6e75ca7cc8568b0ac393ff0e0235c9a208cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff864af28092fd46c1c4b948248114e8d7d8e52a8199563f4dbb9b75fbd80a8c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afd9235182238394fc9c68ad974b703c4af3d7cd60196255bed185a5d1438055(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67098f71e53df8c6a9868f18a97c9cf9802347a67ccd4b083872e88e3bfa9950(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__716dbb5fc264771e9198522c4a7f62b563666cf17dc740e0c22e3044f18bce33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0a42228199e0e29ab5346acbc9517443852e61cdd4cc73c84bed917d87b1110(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29081570a7b6e2795a4a6beb655edbe52ff6e5ddce3a3f3ce51d900a393220bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0808fa78b5d8d75a3de6ad059a99d42fe22ddc162c33b090f90a4e4ad8eb1cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad1ba7984f2bc8ae7e0bb4de1a4d8591494b788b39519873add85f622483d313(
    *,
    defence_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_backup_dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    exclusive_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2b05d2af0a9bd5cd5cbe5617d6443add97a207f875ef7aef451ea46e57ae4b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VulWhitelistProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7264a4257b45029ec6b792f1fe06850be75c5ebbdc028d096ee3da45ac707676(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4c478444f11cd6f86af4d0cd9579858b020bab0751677ba2215a38e67b5ecf9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5959d796841b64fe7dfbbb43f0d3bf5f8e1378b8512e32dcb096b1382303bfb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__669f6149fbe0afb859b69553fcff59c4e10fe73b2b3f284c9c6420d46b8c12ed(
    *,
    target_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    whitelist: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70b4eafb05c667084e0028c663fdba3730e9fb80766ef5edbae5379852c4e379(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WebLockConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb6644d6b3a6fedc0f71c10bc57b8b17a566f2d8eb38855d49dc0922f7f42dba(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9040867a4ea6b19159352bd25b56f81ff60a1d41b306a208ea0cf2512a06ba23(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e8ce34dd4123463fc88b4a3897f7ebe14b45fa5cff90ea8880dac5557152639(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53774ccec50b2818e28640cfa13a84b913c02ae388077c49198b2bf26093b5e4(
    *,
    defence_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_backup_dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    exclusive_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inclusive_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inclusive_file_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f8659f87b10c0fcf9d9fbf71d229cd6d78fbd380def248ca47c590aaba71e92(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AntiBruteForceRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7dfc08d5898a9520a10c63958725b12bd77c4c2ff1abc2cf1e6f53d0152e5df(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b92daeff4699d9261b0018b47691700d5d7bc018b35dee972b416e5d878cad67(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa6a3d32cbbdf1ef1a7e200e7ed25867f9d3dee731fb95bd588cf5821e647b01(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc6ba6fb28840817311e0662e61b47a56d83f10606dc612d07954f0b93570da4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AttackPathSensitiveAssetConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17f7acf03d221927bb05ef313ac046ecc348ff2a9747a3ad892aad972bd98df3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c178e3636d10be4e14bf07d700dcbba8ab631e58ae1f993cd95a1016d7bd5b3e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c8d53ffdec198747e39b71bb1220c357f07720e16be833402fa2df22e8f4650(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31a40ca98e6ef6ba1f4735bc5c4735e7a809a49ca4538160595a4502e7baa51d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AttackPathWhitelistProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea96bf22415c1b979deec235febab13500b04403c36c0ef77f482a1f6f9ed325(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bc0e7f82538d90be774f4e53cad55949c7d90787c93f4fadd7c6c9743a92ffb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__891a8a152f0e6bf524f8908370ed80903559f1fb524094c1856d4e51cb558864(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__524ffec8287c6c367d9ed65c0dd0f92e7a7febe3383c454469c869746baad2e5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BaselineStrategyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bebd27e2ec59940bab2843f87fe1609c1a971dc250920a04c6aa90c945d5066(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34c01f43cff6adab53ef476b6eb35773040c4cc6679578c82984f1eb2efbafef(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7833f21a4cfefbc7650ca59615f9cbce380d501c322591704d086fb39f311b74(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__180a2d4442e74c27191d56c722c8671654b0397b90bb32c7ecdc8e68f1c34a2b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClientFileProtectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f059299443729398aa6b0842b4fc6865fe0783dd36a0ebdcd741a44362b9fb26(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d01da880ce0aafb9b2f777392e7f34095377d598eeb1679b4a3f3ed492c52282(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59b478b1310af3c653e3d0b34bb4a397ada0f4cfe670735a1bc16298d572e677(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb918b0b0c799c2313928a2ec17a8190aa1e1e5955d288a1b6ee00fb094b6c7b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ContainerDefenseRuleProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad2d4a67069f6a8742f46b8d73f85ba48be9b2bda9284a0d0e2a85a2e938db4a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b6a39f8e1d8f58da6ad12240e4e042dfcc8184cc55ec1a8705bf8587c3ef899(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9928815299d9e0c0391c11f77391d6305b634d29d641b3667a88e062597f7df(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d049252afe9a7254b82ff654d08c879b222742dc099ef556aa2b5feff51fe26(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomCheckItemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4efde96f577a5ead6566e44bdcbc304c204f9f8af20ae1d4bf65c901138879dd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d7c72dcfa89170a6973f2ee07d2d9ef337856ee05c15167fcb7fcc882ec2d32(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a36dbe3fca2fd80706c0f064b6a6bc0efa91acab3c43816717f5ad713b44bf97(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1571a93df8f939396406f86349f07340f8de383723ce4b902679855226301ef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomCheckStandardPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e45c9e96bea45b183fdf5fd8ce027472e9c1bec4d76bc25a5cc22cfe1326c02(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e404dd2ab69b41c04f953da87f2e254ed6645607cf55a2b95134793faf98313(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4886db5e77adfbc0acc49b34adc2e0f5b035ac2a0c8aff10dd412639acb2f68c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98b4407e13fb71ac82ef211c14bc1b080da4970b5f79a541a12a896bfec3e0e3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CycleTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3173372f0a3419ce2da87b8a0612d9ae225c24864b0154ac8e0a8c059607388(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ec0d68601f6c330709600dafea67cdc006398be58958bf19e65a586f2df62fe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49ded5ded3b74ca1215a3a055729f8453116cf2423ce0daccef769c1ff66660b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05d176e3a6c984539767221c4dbc599411c5fefc69d8907c2f034b59d3fd2739(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[GroupProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61df9d77bf9a94a9ec89658e7b44405e0eb2cef75f368f46a4be9da3c2639069(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19a8c0e53edc1f41f957643e50a24569681b7c20f10a1e7ebeb8ad7cb34b33d6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11a0a9d26c6f66b0eb7179c7235fa48c27bf2c7f0da351bbf62e786248b992eb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea7753b47c29d1cbb0f0d9130adecf38a125490548a1041d5106c41fca800511(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HoneyPotProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5303c3e062d661bdd96e2ad78f0c13c1132ad676298ae3e6b34e3fe5a9b02a5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__708edf105cf0dd7d4e5324ba3448abbfd873612f67cf0b638d5941d5c894f7ae(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4378f84f0b4df4515600f359e7babf21a8b9c9b04ad04853ee9f577e9e748831(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32030f16e424d2cbd3193e200d09a30524f9e85bef18e632e8c4cb279d968c3b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HoneypotNodeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__699d9426d27c10bb6fcc4660c6a1835d7f51e1ad8c7ef48b9db25353fed7b202(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3cbc6346bb31129ce7a9ff5f9a82503c2c799c57a7e5c56796e20e84220731f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ac9d87ed35b41e5f1b7e106eb4d1b88fb286bfb01e13a06e0e07f997144cf6b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb92fee1b671b56202f4b6ae0b44b33a817f64af1a2b902d90da207c6a04472f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HoneypotPresetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d1722a68b82653733cff005486890a3ea357299abee4b850c52dfa3e9f9b6f1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__065a24187bdc36b25d7a11db3c9b4411dc14eabd03d4853442fddc89f12601ce(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf193dbb252ef42499f6a421b16469fe30ae44df3e5cbb4d896a2f84568469b9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__597ffe2c5967c83e6e23edd33726a517ae8f24ba176ba33158a6812c8c4d1bfd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HoneypotProbeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ee5d00114909e1394e2e022a36f6e8a82bd48974c54b05ddf7b75e6733ae6ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c31fbb9b830691a4b4822233f8c238b19342e601ed1074b6aef98162bb7d3cb8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__975d1c23f1d4a3d8dc6d87b15b3bc24dc344e3a140f8a6c8001f55e3a4beb496(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
