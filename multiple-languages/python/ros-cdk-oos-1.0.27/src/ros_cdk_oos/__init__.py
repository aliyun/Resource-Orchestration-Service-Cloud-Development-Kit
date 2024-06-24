'''
## Aliyun ROS OOS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as OOS from '@alicloud/ros-cdk-oos';
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


class DefaultPatchBaseline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.DefaultPatchBaseline",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::DefaultPatchBaseline``, which is used to register a default patch baseline.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDefaultPatchBaseline``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DefaultPatchBaselineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14c469157aa78aca5763eb64daccb9105b774172b4e5a39d0540f7b857a8a0e0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreatedBy: The creator of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedDate")
    def attr_created_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreatedDate: The time when the patch baseline was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OperationSystem: The type of the operating system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineId: The ID of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineName: The name of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ShareType: The share type of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedBy: The user who last modified the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedDate: The time when the patch baseline was last modified.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b206573b0d7b730907493bf6968ff139724f4cb78c63a34f204f00495dc2c72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__697ae11ec06fec5029b691f7bf26d5370d6f325e7426771524df667a3eac1eb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DefaultPatchBaselineProps":
        return typing.cast("DefaultPatchBaselineProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DefaultPatchBaselineProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ee14553b68ff88f11b3bad7dd43b565f4c2a4b1c81ca401bb7361e678977ad9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9adf148950cb38be4a458b531110ae153723e1adc603dca7cc3430b099be398a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.DefaultPatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={"patch_baseline_name": "patchBaselineName"},
)
class DefaultPatchBaselineProps:
    def __init__(
        self,
        *,
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DefaultPatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline

        :param patch_baseline_name: Property patchBaselineName: The name of the patch baseline.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebc86edc9e11b066874de46a8ab19cfc95eedde6fd54600e58a3bc8c9b7d39b5)
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "patch_baseline_name": patch_baseline_name,
        }

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property patchBaselineName: The name of the patch baseline.'''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DefaultPatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Execution(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.Execution",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::Execution``, which is used to start an execution.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosExecution``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ExecutionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef7ab6a8305d9e9f07355258bbf2fb19eb52f1b3ef6fa74847014c074854b830)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCounters")
    def attr_counters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCounters"))

    @builtins.property
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.

        You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
        You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrExecutionId")
    def attr_execution_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExecutionId: Execution ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExecutionId"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Outputs: Execution output.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.

        You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPowerShellCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Status: Execution status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusMessage")
    def attr_status_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StatusMessage: Execution status information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.

        You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWindowsCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fb1f02c59c99256a1d856c86747308005f0d41b29a29aac50be29aa56f727e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__928f4a94d1e0ead7318e20745eea13bf425629c32cdc3bd7626ddb162d56d0d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ExecutionProps":
        return typing.cast("ExecutionProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ExecutionProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56f473a06b0defa818af4d8dd20b8ee68738ca76f85c4db533161a0106fcfaa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98ecf08953fe8961e92a964f286b70c43a47229089970b22abd58758d2c8d15d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.ExecutionProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "description": "description",
        "loop_mode": "loopMode",
        "mode": "mode",
        "parameters": "parameters",
        "parent_execution_id": "parentExecutionId",
        "resource_group_id": "resourceGroupId",
        "resource_options": "resourceOptions",
        "safety_check": "safetyCheck",
        "tags": "tags",
        "template_version": "templateVersion",
    },
)
class ExecutionProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loop_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        parent_execution_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosExecution.ResourceOptionsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        safety_check: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Execution``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution

        :param template_name: Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        :param description: Property description: The description of OOS Execution.
        :param loop_mode: Property loopMode: The loop mode of OOS Execution. Valid values: - Automatic(Default): does not pause. - FirstBatchPause: The first batch of pauses. - EveryBatchPause: pause each batch.
        :param mode: Property mode: Execution mode.
        :param parameters: Property parameters: Parameters for the execution of template.
        :param parent_execution_id: Property parentExecutionId: Parent execution ID.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param resource_options: Property resourceOptions: Resource options user by ROS.
        :param safety_check: Property safetyCheck: Security check mode. Allowed values: - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic. - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        :param tags: Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
        :param template_version: Property templateVersion: Version number of template. Default to the latest version.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de89d034c6c8252e127960e0abaeacedd5940c4159c7fd9ef309c4d925f48bba)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument loop_mode", value=loop_mode, expected_type=type_hints["loop_mode"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument parent_execution_id", value=parent_execution_id, expected_type=type_hints["parent_execution_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument resource_options", value=resource_options, expected_type=type_hints["resource_options"])
            check_type(argname="argument safety_check", value=safety_check, expected_type=type_hints["safety_check"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_name": template_name,
        }
        if description is not None:
            self._values["description"] = description
        if loop_mode is not None:
            self._values["loop_mode"] = loop_mode
        if mode is not None:
            self._values["mode"] = mode
        if parameters is not None:
            self._values["parameters"] = parameters
        if parent_execution_id is not None:
            self._values["parent_execution_id"] = parent_execution_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if resource_options is not None:
            self._values["resource_options"] = resource_options
        if safety_check is not None:
            self._values["safety_check"] = safety_check
        if tags is not None:
            self._values["tags"] = tags
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateName: Template name.

        Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of OOS Execution.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loop_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loopMode: The loop mode of OOS Execution.

        Valid values:

        - Automatic(Default): does not pause.
        - FirstBatchPause: The first batch of pauses.
        - EveryBatchPause: pause each batch.
        '''
        result = self._values.get("loop_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mode: Execution mode.'''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: Parameters for the execution of template.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def parent_execution_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parentExecutionId: Parent execution ID.'''
        result = self._values.get("parent_execution_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosExecution.ResourceOptionsProperty"]]:
        '''Property resourceOptions: Resource options user by ROS.'''
        result = self._values.get("resource_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosExecution.ResourceOptionsProperty"]], result)

    @builtins.property
    def safety_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property safetyCheck: Security check mode.

        Allowed values:

        - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        '''
        result = self._values.get("safety_check")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Tag value and the key mapping, the label of the key number can be up to 20.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateVersion: Version number of template.

        Default to the latest version.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExecutionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Parameter(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.Parameter",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::Parameter``, which is used to create a common parameter.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosParameter``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ParameterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef6336f04bdcab1091d376e237074996f141d3d7ef6c61c86a6a81b6b67e800e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The Name of the parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Value: The Value of the parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrValue"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c88d473122a38bd7a61478107e3d4a5a8c9a19501fe754cabc436419c5f8305)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e384876e839be81ff37436072048c8dd61454a62e5fc911b2d1c309165b2a922)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ParameterProps":
        return typing.cast("ParameterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ParameterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfc0d508b30e1d3cce280861a8d0748db4b058fc6fe5af74a2b74e0d802972d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8c32e6ad2517447460c7969f7605d242589fdd48cdea90f6f97f04617040135)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.ParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "type": "type",
        "value": "value",
        "constraints": "constraints",
        "description": "description",
        "resource_group_id": "resourceGroupId",
    },
)
class ParameterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        constraints: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Parameter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter

        :param name: Property name: The name of the parameter. The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        :param type: Property type: The data type of the common parameter. Valid values: String and StringList.
        :param value: Property value: The value of the parameter. The value must be 1 to 4096 characters in length.
        :param constraints: Property constraints: The constraints of the parameter. By default, this parameter is null. Valid values: AllowedValues: The value that is allowed for the parameter. It must be an array string. AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression. MinLength: The minimum length of the parameter. MaxLength: The maximum length of the parameter.
        :param description: Property description: The description of the parameter. The description must be 1 to 200 characters in length.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db79a66d75e75fd8833d3e23539d2ae8345eacc213785d60dc4fc6068534090e)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument constraints", value=constraints, expected_type=type_hints["constraints"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "type": type,
            "value": value,
        }
        if constraints is not None:
            self._values["constraints"] = constraints
        if description is not None:
            self._values["description"] = description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the parameter.

        The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The data type of the common parameter.

        Valid values: String and StringList.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property value: The value of the parameter.

        The value must be 1 to 4096 characters in length.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property constraints: The constraints of the parameter.

        By default, this parameter is null. Valid values:
        AllowedValues: The value that is allowed for the parameter. It must be an array string.
        AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        MinLength: The minimum length of the parameter.
        MaxLength: The maximum length of the parameter.
        '''
        result = self._values.get("constraints")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the parameter.

        The description must be 1 to 200 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PatchBaseline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.PatchBaseline",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::PatchBaseline``, which is used to create a patch baseline.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPatchBaseline``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PatchBaselineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f17c3900670e14b7035482864062723d1532eac65119b7dc792a4513a887a97)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovedPatches: Approved patch list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatchesEnableNonSecurity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreatedBy: The creator of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the patch baseline was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OperationSystem: The type of the operating system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineId: The ID of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineName: The name of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RejectedPatches: Reject the name of the patch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RejectedPatchesAction: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatchesAction"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Approve whether the patch includes updates other than security.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ShareType: The share type of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Sources: Patch source configuration list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSources"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: Tags of patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedBy: The user who last modified the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedDate: The time when the patch baseline was last modified.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f76c678d1e79fc9598e347351c54420da9937fbff93498f46360a15f0d217d45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbb679aa77669b588f982e27245e822edc476cb36bc3e47971eb588c6b44b129)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PatchBaselineProps":
        return typing.cast("PatchBaselineProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PatchBaselineProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45bca5fdfb14ce6d8ed7f29338724a5dabd818d93a8e1c766f3910df1f116669)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f165ff96fc0d3e27ed91622a0bb54c7b275466eba9ed22eeeaa13449455f3c16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.PatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={
        "approval_rules": "approvalRules",
        "operation_system": "operationSystem",
        "patch_baseline_name": "patchBaselineName",
        "approved_patches": "approvedPatches",
        "approved_patches_enable_non_security": "approvedPatchesEnableNonSecurity",
        "description": "description",
        "rejected_patches": "rejectedPatches",
        "rejected_patches_action": "rejectedPatchesAction",
        "resource_group_id": "resourceGroupId",
        "sources": "sources",
        "tags": "tags",
    },
)
class PatchBaselineProps:
    def __init__(
        self,
        *,
        approval_rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        operation_system: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        approved_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        approved_patches_enable_non_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rejected_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        rejected_patches_action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosPatchBaseline.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``PatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline

        :param approval_rules: Property approvalRules: The rules of scanning and installing patches for the specified operating system.
        :param operation_system: Property operationSystem: The type of the operating system.
        :param patch_baseline_name: Property patchBaselineName: The name of the patch baseline.
        :param approved_patches: Property approvedPatches: Approved patch list.
        :param approved_patches_enable_non_security: Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
        :param description: Property description: The description of the patch baseline.
        :param rejected_patches: Property rejectedPatches: Rejected patch list.
        :param rejected_patches_action: Property rejectedPatchesAction: The operation of rejecting the patch.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param sources: Property sources: Patch source configuration list.
        :param tags: Property tags: Tags of patch baseline.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__789068e430b067319c5785056277f77f8dda60d8274b9a7a6149b4b125be05f1)
            check_type(argname="argument approval_rules", value=approval_rules, expected_type=type_hints["approval_rules"])
            check_type(argname="argument operation_system", value=operation_system, expected_type=type_hints["operation_system"])
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument approved_patches", value=approved_patches, expected_type=type_hints["approved_patches"])
            check_type(argname="argument approved_patches_enable_non_security", value=approved_patches_enable_non_security, expected_type=type_hints["approved_patches_enable_non_security"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument rejected_patches", value=rejected_patches, expected_type=type_hints["rejected_patches"])
            check_type(argname="argument rejected_patches_action", value=rejected_patches_action, expected_type=type_hints["rejected_patches_action"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument sources", value=sources, expected_type=type_hints["sources"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "approval_rules": approval_rules,
            "operation_system": operation_system,
            "patch_baseline_name": patch_baseline_name,
        }
        if approved_patches is not None:
            self._values["approved_patches"] = approved_patches
        if approved_patches_enable_non_security is not None:
            self._values["approved_patches_enable_non_security"] = approved_patches_enable_non_security
        if description is not None:
            self._values["description"] = description
        if rejected_patches is not None:
            self._values["rejected_patches"] = rejected_patches
        if rejected_patches_action is not None:
            self._values["rejected_patches_action"] = rejected_patches_action
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if sources is not None:
            self._values["sources"] = sources
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def approval_rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property approvalRules: The rules of scanning and installing patches for the specified operating system.'''
        result = self._values.get("approval_rules")
        assert result is not None, "Required property 'approval_rules' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def operation_system(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property operationSystem: The type of the operating system.'''
        result = self._values.get("operation_system")
        assert result is not None, "Required property 'operation_system' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property patchBaselineName: The name of the patch baseline.'''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def approved_patches(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property approvedPatches: Approved patch list.'''
        result = self._values.get("approved_patches")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def approved_patches_enable_non_security(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.'''
        result = self._values.get("approved_patches_enable_non_security")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the patch baseline.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rejected_patches(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property rejectedPatches: Rejected patch list.'''
        result = self._values.get("rejected_patches")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def rejected_patches_action(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rejectedPatchesAction: The operation of rejecting the patch.'''
        result = self._values.get("rejected_patches_action")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property sources: Patch source configuration list.'''
        result = self._values.get("sources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosPatchBaseline.TagsProperty"]]:
        '''Property tags: Tags of patch baseline.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosPatchBaseline.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDefaultPatchBaseline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosDefaultPatchBaseline",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::DefaultPatchBaseline``, which is used to register a default patch baseline.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DefaultPatchBaseline`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDefaultPatchBaselineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7677c34e3b4a69782e2afce94ce1f9fbc7a4cf67f66065a5a92957ca00a53ca7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cb42b83c106acbcb82a11e5f9be68f859530082fc078e03f54b6d54136ef5119)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovalRules: The rules of scanning and installing patches for the specified operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedBy: The creator of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedDate")
    def attr_created_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedDate: The time when the patch baseline was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationSystem: The type of the operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineId: The ID of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShareType: The share type of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedBy: The user who last modified the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedDate: The time when the patch baseline was last modified.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f7d654ff38295f0560b9ff9fa1a086690ae43a5b561436e632115666cf8a268f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="patchBaselineName")
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "patchBaselineName"))

    @patch_baseline_name.setter
    def patch_baseline_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d9078dba4a2fbb2fc544731aeb609a49c86206b71eec331bd44158045085f69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "patchBaselineName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosDefaultPatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={"patch_baseline_name": "patchBaselineName"},
)
class RosDefaultPatchBaselineProps:
    def __init__(
        self,
        *,
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDefaultPatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-defaultpatchbaseline

        :param patch_baseline_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de9ec7b3252d79156c0cdb3f48c5833e0e5e997669a9f2c6c403bd6702631c27)
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "patch_baseline_name": patch_baseline_name,
        }

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDefaultPatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosExecution(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosExecution",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::Execution``, which is used to start an execution.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Execution`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosExecutionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d90d4fe1b3d374bde956c99c34dfea13ab2a483a6d3e94561c5e74cc04072377)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ce87d040ad189d300831ad6e6d8c13eac58f05db07dadc335ff3374850eacbd6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCounters")
    def attr_counters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCounters"))

    @builtins.property
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
        You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
        You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrExecutionId")
    def attr_execution_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExecutionId: Execution ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExecutionId"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Outputs: Execution output.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
        You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPowerShellCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Status: Execution status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusMessage")
    def attr_status_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StatusMessage: Execution status information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
        You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWindowsCurlCli"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5f43e2196b88c7ecb8487b43eaf2cf2a09a4ae3e6a2b2edfeec85e601f549b63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4b5aa473ec596ac3ce34167d6920984b33287d540115875722e3dcabbf0d1f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of OOS Execution.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a228c2bdd73d0959567031322576da2f56eb5fa56ccd893bfd07ed52e00e30f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="loopMode")
    def loop_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loopMode: The loop mode of OOS Execution. Valid values:

        - Automatic(Default): does not pause.
        - FirstBatchPause: The first batch of pauses.
        - EveryBatchPause: pause each batch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loopMode"))

    @loop_mode.setter
    def loop_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3d18e2cc35227be2df27b71b2fe4d792841baba1e2c69be6f3bb07b2268b7cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loopMode", value)

    @builtins.property
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mode: Execution mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3e4636c9bbc71e9c89a75c43a00d5fb9ff4497f49d606438c43bed9a911ed38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mode", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: Parameters for the execution of template.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4a69fa19caa4694d8c5907d06fe60a7b2d8b15ac3b2f59a7bf091b7cbfd9d95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="parentExecutionId")
    def parent_execution_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentExecutionId: Parent execution ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parentExecutionId"))

    @parent_execution_id.setter
    def parent_execution_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcfb4c77f349ad3e95a4611005125e83d00cda327aaa4a9eb3c24c9ce03a2175)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentExecutionId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__96e0b7171e86a4649be94f73d991f489bea009caf1b6ce958eb8a9482a508aae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceOptions")
    def resource_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosExecution.ResourceOptionsProperty"]]:
        '''
        :Property: resourceOptions: Resource options user by ROS.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosExecution.ResourceOptionsProperty"]], jsii.get(self, "resourceOptions"))

    @resource_options.setter
    def resource_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosExecution.ResourceOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74045c2c7c12de196e23e67ce3d1c2bca44c47da8b6fbcb545125939e52669bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceOptions", value)

    @builtins.property
    @jsii.member(jsii_name="safetyCheck")
    def safety_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        safetyCheck: Security check mode. Allowed values:

        - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "safetyCheck"))

    @safety_check.setter
    def safety_check(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62f50bf62a5b9ec3f05277587d384ce118ff5e158034a5db2d23c672a575123b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "safetyCheck", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14fc330c3b351d880b86a0198ad4f39f3f85a40ba138c536390529dced5ebbd0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="templateVersion")
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateVersion: Version number of template. Default to the latest version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateVersion"))

    @template_version.setter
    def template_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45b0976163341eab64bf8a4a9a7837554793a225b6eb77986babd2f99e88c803)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateVersion", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cancel_on_delete": "cancelOnDelete",
            "failure_statuses": "failureStatuses",
            "success_statuses": "successStatuses",
            "timeout": "timeout",
        },
    )
    class ResourceOptionsProperty:
        def __init__(
            self,
            *,
            cancel_on_delete: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            failure_statuses: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            success_statuses: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cancel_on_delete: 
            :param failure_statuses: 
            :param success_statuses: 
            :param timeout: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__09d95de7af5d15f0b2544aa4e623b52ca76645277df46e5f484ff234679876d3)
                check_type(argname="argument cancel_on_delete", value=cancel_on_delete, expected_type=type_hints["cancel_on_delete"])
                check_type(argname="argument failure_statuses", value=failure_statuses, expected_type=type_hints["failure_statuses"])
                check_type(argname="argument success_statuses", value=success_statuses, expected_type=type_hints["success_statuses"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cancel_on_delete is not None:
                self._values["cancel_on_delete"] = cancel_on_delete
            if failure_statuses is not None:
                self._values["failure_statuses"] = failure_statuses
            if success_statuses is not None:
                self._values["success_statuses"] = success_statuses
            if timeout is not None:
                self._values["timeout"] = timeout

        @builtins.property
        def cancel_on_delete(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cancelOnDelete: Whether to cancel execution for resource deletion, if the execution is not completed. Default to false.
            '''
            result = self._values.get("cancel_on_delete")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def failure_statuses(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            failureStatuses: It is used for ROS to judge if resource creation fails.
            Default to [Failed, Cancelled].
            ROS will wait util some status in SuccessStatuses or FailureStatuses.
            FailureStatuses has higher priority.
            '''
            result = self._values.get("failure_statuses")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def success_statuses(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            successStatuses: It is used for ROS to judge if resource creation is successful.
            Default to [Success].
            ROS will wait util some status in SuccessStatuses or FailureStatuses.
            FailureStatuses has higher priority.
            Specified all statuses(Started,Queued,Running,Waiting,Success,Failed,Cancelled) if you do not want to wait for the completion of execution.
            '''
            result = self._values.get("success_statuses")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeout: Timeout seconds before the completion of execution. Default to 1800.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosExecutionProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "description": "description",
        "loop_mode": "loopMode",
        "mode": "mode",
        "parameters": "parameters",
        "parent_execution_id": "parentExecutionId",
        "resource_group_id": "resourceGroupId",
        "resource_options": "resourceOptions",
        "safety_check": "safetyCheck",
        "tags": "tags",
        "template_version": "templateVersion",
    },
)
class RosExecutionProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        loop_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        parent_execution_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosExecution.ResourceOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        safety_check: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosExecution``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution

        :param template_name: 
        :param description: 
        :param loop_mode: 
        :param mode: 
        :param parameters: 
        :param parent_execution_id: 
        :param resource_group_id: 
        :param resource_options: 
        :param safety_check: 
        :param tags: 
        :param template_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24652a0ed70912c0955aa44b7189f1c6504c5b008535ec649c7a537d92e07676)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument loop_mode", value=loop_mode, expected_type=type_hints["loop_mode"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument parent_execution_id", value=parent_execution_id, expected_type=type_hints["parent_execution_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument resource_options", value=resource_options, expected_type=type_hints["resource_options"])
            check_type(argname="argument safety_check", value=safety_check, expected_type=type_hints["safety_check"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_name": template_name,
        }
        if description is not None:
            self._values["description"] = description
        if loop_mode is not None:
            self._values["loop_mode"] = loop_mode
        if mode is not None:
            self._values["mode"] = mode
        if parameters is not None:
            self._values["parameters"] = parameters
        if parent_execution_id is not None:
            self._values["parent_execution_id"] = parent_execution_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if resource_options is not None:
            self._values["resource_options"] = resource_options
        if safety_check is not None:
            self._values["safety_check"] = safety_check
        if tags is not None:
            self._values["tags"] = tags
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of OOS Execution.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def loop_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loopMode: The loop mode of OOS Execution. Valid values:

        - Automatic(Default): does not pause.
        - FirstBatchPause: The first batch of pauses.
        - EveryBatchPause: pause each batch.
        '''
        result = self._values.get("loop_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mode: Execution mode.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: Parameters for the execution of template.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def parent_execution_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentExecutionId: Parent execution ID.
        '''
        result = self._values.get("parent_execution_id")
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
    def resource_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosExecution.ResourceOptionsProperty]]:
        '''
        :Property: resourceOptions: Resource options user by ROS.
        '''
        result = self._values.get("resource_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosExecution.ResourceOptionsProperty]], result)

    @builtins.property
    def safety_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        safetyCheck: Security check mode. Allowed values:

        - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        '''
        result = self._values.get("safety_check")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateVersion: Version number of template. Default to the latest version.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExecutionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosParameter(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosParameter",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::Parameter``, which is used to create a common parameter.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Parameter`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosParameterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba01228417465ee1849bf0eadf79aaa9ded8be2b2eac4f416814b7eb9d2c8ce4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a8a6be21541ea4fc513fecd418c644310c1cb9d5666612e62c438b890414a14c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The Name of the parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Value: The Value of the parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrValue"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__420e11f680c135b965f48fe38dbd0bae5a31b7bfa47b2845ee39d4d7db47b5c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the parameter.
        The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__563b0f54567b7cd37832d274458988c257f521096ac5583eb07623643630750a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The data type of the common parameter.
        Valid values: String and StringList.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37937f7fa3da26985e51185aed596e96cd09b90f9d23a3123acd7bac57782bd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        value: The value of the parameter.
        The value must be 1 to 4096 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__858a03e370e4cc53d4a445c9522782b80d1b9e68e591747c4b876ae0e294b7f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "value", value)

    @builtins.property
    @jsii.member(jsii_name="constraints")
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        constraints: The constraints of the parameter.
        By default, this parameter is null. Valid values:
        AllowedValues: The value that is allowed for the parameter. It must be an array string.
        AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        MinLength: The minimum length of the parameter.
        MaxLength: The maximum length of the parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "constraints"))

    @constraints.setter
    def constraints(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88507586e5b9d5ca3a3e9a93798bf2f1d34d281d88c17cb24a16f83558b8a30f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "constraints", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the parameter.
        The description must be 1 to 200 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5dfb881886341cacb33eebfa90037ee321af12959ee3c95a9bbb9b4cdab5b2fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5943b645a392fa0663f2530c903367f4315f1492e777cf6b92e3243cb279e1a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "type": "type",
        "value": "value",
        "constraints": "constraints",
        "description": "description",
        "resource_group_id": "resourceGroupId",
    },
)
class RosParameterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        constraints: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosParameter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter

        :param name: 
        :param type: 
        :param value: 
        :param constraints: 
        :param description: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17a9f792abc1f1585188259b7afc3fe98555aeab6460596664a312d5f5dfb9e1)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument constraints", value=constraints, expected_type=type_hints["constraints"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "type": type,
            "value": value,
        }
        if constraints is not None:
            self._values["constraints"] = constraints
        if description is not None:
            self._values["description"] = description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the parameter.
        The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The data type of the common parameter.
        Valid values: String and StringList.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        value: The value of the parameter.
        The value must be 1 to 4096 characters in length.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        constraints: The constraints of the parameter.
        By default, this parameter is null. Valid values:
        AllowedValues: The value that is allowed for the parameter. It must be an array string.
        AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        MinLength: The minimum length of the parameter.
        MaxLength: The maximum length of the parameter.
        '''
        result = self._values.get("constraints")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the parameter.
        The description must be 1 to 200 characters in length.
        '''
        result = self._values.get("description")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPatchBaseline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosPatchBaseline",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::PatchBaseline``, which is used to create a patch baseline.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PatchBaseline`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPatchBaselineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06e0a721006e371aaf00d4926974dda452be6e935a8ca5973d2e681d95ac872a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e8376eaa5f59921b21c46c2e686fcf4ec9e0a572b628eb6fb4e35f659ecef8a5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovalRules: The rules of scanning and installing patches for the specified operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovedPatches: Approved patch list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatchesEnableNonSecurity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedBy: The creator of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the patch baseline was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationSystem: The type of the operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineId: The ID of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RejectedPatches: Reject the name of the patch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RejectedPatchesAction: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatchesAction"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Approve whether the patch includes updates other than security
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShareType: The share type of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Sources: Patch source configuration list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSources"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: Tags of patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedBy: The user who last modified the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedDate: The time when the patch baseline was last modified.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="approvalRules")
    def approval_rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: approvalRules: The rules of scanning and installing patches for the specified operating system.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "approvalRules"))

    @approval_rules.setter
    def approval_rules(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e98c6ee257a7152cbb5ef8b22d45f15d81da26562c5c1f4b0df371ff2c01ade)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "approvalRules", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6051148e7f2b97963e64a50ed4baa99194ebe61f7cad3a5652af40093599a7c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="operationSystem")
    def operation_system(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: operationSystem: The type of the operating system.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "operationSystem"))

    @operation_system.setter
    def operation_system(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d08d153b40516a99eedfa1c10359c8257a192a035b237f1ff3aa65beefd3df52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operationSystem", value)

    @builtins.property
    @jsii.member(jsii_name="patchBaselineName")
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "patchBaselineName"))

    @patch_baseline_name.setter
    def patch_baseline_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eafb07a4b2ab464328ac3c158e861fcb0c418d1d30036b3d31e63792b73705cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "patchBaselineName", value)

    @builtins.property
    @jsii.member(jsii_name="approvedPatches")
    def approved_patches(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: approvedPatches: Approved patch list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "approvedPatches"))

    @approved_patches.setter
    def approved_patches(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2629e3fa5255ff69dc098b4cbd85796d21fe148369dbaee82cb97337c88a164)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "approvedPatches", value)

    @builtins.property
    @jsii.member(jsii_name="approvedPatchesEnableNonSecurity")
    def approved_patches_enable_non_security(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "approvedPatchesEnableNonSecurity"))

    @approved_patches_enable_non_security.setter
    def approved_patches_enable_non_security(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__623a9ba0570a5b0afdb25a1c72078a47309558f5d92c6915050d49561786e699)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "approvedPatchesEnableNonSecurity", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the patch baseline.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d7410bf564d856da803fe41fe651cced9a8dda5bd5f957080e0647b0f1518d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="rejectedPatches")
    def rejected_patches(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: rejectedPatches: Rejected patch list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "rejectedPatches"))

    @rejected_patches.setter
    def rejected_patches(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e08c15824f616cbeaa4f85642abcf05ed2f79def1227e29079c68b41679576d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rejectedPatches", value)

    @builtins.property
    @jsii.member(jsii_name="rejectedPatchesAction")
    def rejected_patches_action(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rejectedPatchesAction: The operation of rejecting the patch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rejectedPatchesAction"))

    @rejected_patches_action.setter
    def rejected_patches_action(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66b2cdbf51e8556d9b15a179ceb9cb389b3f7a15c8001018a6101b06e560a571)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rejectedPatchesAction", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__794adaf2a2d79a9f55b179ed3fc85b2fc0723f81ce6ecdd895752cb75f06b819)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sources")
    def sources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: sources: Patch source configuration list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "sources"))

    @sources.setter
    def sources(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0f23e5a7fa53fa6de25de301070495ae6deefe4743a7c249197a280e6be7cf2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sources", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosPatchBaseline.TagsProperty"]]:
        '''
        :Property: tags: Tags of patch baseline.
        '''
        return typing.cast(typing.Optional[typing.List["RosPatchBaseline.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosPatchBaseline.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__014200a01e9ca07bc234ed8548e2b0dc88a0df2a56ffa5f12f0a00f0866184e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oos.RosPatchBaseline.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__3e931f1a531c6a5545be48bf71a509d8bc1b45f7cad9f1bf003a7d20f34b91d4)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosPatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={
        "approval_rules": "approvalRules",
        "operation_system": "operationSystem",
        "patch_baseline_name": "patchBaselineName",
        "approved_patches": "approvedPatches",
        "approved_patches_enable_non_security": "approvedPatchesEnableNonSecurity",
        "description": "description",
        "rejected_patches": "rejectedPatches",
        "rejected_patches_action": "rejectedPatchesAction",
        "resource_group_id": "resourceGroupId",
        "sources": "sources",
        "tags": "tags",
    },
)
class RosPatchBaselineProps:
    def __init__(
        self,
        *,
        approval_rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        operation_system: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        approved_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        approved_patches_enable_non_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rejected_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        rejected_patches_action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosPatchBaseline.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosPatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline

        :param approval_rules: 
        :param operation_system: 
        :param patch_baseline_name: 
        :param approved_patches: 
        :param approved_patches_enable_non_security: 
        :param description: 
        :param rejected_patches: 
        :param rejected_patches_action: 
        :param resource_group_id: 
        :param sources: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41ffcc6a6924cb49bc3a56fbf535c3fd75fea7c7d65213d37669de885e4d9c0d)
            check_type(argname="argument approval_rules", value=approval_rules, expected_type=type_hints["approval_rules"])
            check_type(argname="argument operation_system", value=operation_system, expected_type=type_hints["operation_system"])
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument approved_patches", value=approved_patches, expected_type=type_hints["approved_patches"])
            check_type(argname="argument approved_patches_enable_non_security", value=approved_patches_enable_non_security, expected_type=type_hints["approved_patches_enable_non_security"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument rejected_patches", value=rejected_patches, expected_type=type_hints["rejected_patches"])
            check_type(argname="argument rejected_patches_action", value=rejected_patches_action, expected_type=type_hints["rejected_patches_action"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument sources", value=sources, expected_type=type_hints["sources"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "approval_rules": approval_rules,
            "operation_system": operation_system,
            "patch_baseline_name": patch_baseline_name,
        }
        if approved_patches is not None:
            self._values["approved_patches"] = approved_patches
        if approved_patches_enable_non_security is not None:
            self._values["approved_patches_enable_non_security"] = approved_patches_enable_non_security
        if description is not None:
            self._values["description"] = description
        if rejected_patches is not None:
            self._values["rejected_patches"] = rejected_patches
        if rejected_patches_action is not None:
            self._values["rejected_patches_action"] = rejected_patches_action
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if sources is not None:
            self._values["sources"] = sources
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def approval_rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: approvalRules: The rules of scanning and installing patches for the specified operating system.
        '''
        result = self._values.get("approval_rules")
        assert result is not None, "Required property 'approval_rules' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def operation_system(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: operationSystem: The type of the operating system.
        '''
        result = self._values.get("operation_system")
        assert result is not None, "Required property 'operation_system' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def approved_patches(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: approvedPatches: Approved patch list.
        '''
        result = self._values.get("approved_patches")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def approved_patches_enable_non_security(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
        '''
        result = self._values.get("approved_patches_enable_non_security")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the patch baseline.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rejected_patches(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: rejectedPatches: Rejected patch list.
        '''
        result = self._values.get("rejected_patches")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def rejected_patches_action(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rejectedPatchesAction: The operation of rejecting the patch.
        '''
        result = self._values.get("rejected_patches_action")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: sources: Patch source configuration list.
        '''
        result = self._values.get("sources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosPatchBaseline.TagsProperty]]:
        '''
        :Property: tags: Tags of patch baseline.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosPatchBaseline.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecretParameter(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosSecretParameter",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::SecretParameter``, which is used to create an encryption parameter.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SecretParameter`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecretParameterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36e7338b47a96ecef12d163df5d52484885f14cf83aaa6d6448e304a91b4ec02)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2c5b5d3513a99838bdee6f4133d03f70366ae52d7033da832bfd26c47fdce28d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConstraints")
    def attr_constraints(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Constraints: The constraints of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConstraints"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedBy: The user who created the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the encryption parameter was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterVersion")
    def attr_parameter_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterVersion: The version number of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterId")
    def attr_secret_parameter_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretParameterId: The ID of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterName")
    def attr_secret_parameter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretParameterName: The name of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShareType: The share type of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: Tags of encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The data type of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedBy: The user who updated the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedDate: The time when the encryption parameter was updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__90001dc70f6726afc97decf204a9a3e85ff2e1b53989e95cedff0df6d763f297)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="secretParameterName")
    def secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secretParameterName"))

    @secret_parameter_name.setter
    def secret_parameter_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__351f41ccb5cdc81e6d26cfbfa49e29a1ab4887587ba17be78e57ba0cef6962b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretParameterName", value)

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50407dd6a1ee29f8f3ce601a4ba6b9aa8b3d01922682e5011129b760a6837a96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "value", value)

    @builtins.property
    @jsii.member(jsii_name="constraints")
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: constraints: The constraints of the encryption parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "constraints"))

    @constraints.setter
    def constraints(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bd5514fc094a218969eb982cb11551a9a4ab779d8b5ac58740fbf5d156ee4dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "constraints", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ddb1d76f73da607dcf551704a9357b2c51aecedb6ef9f8c599cfd18abea009e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="keyId")
    def key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyId"))

    @key_id.setter
    def key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5df7be8e05da815e4a3fcf905b522d5021b5be50ac545fc237e63e920c22698c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__272c68679eb178f87b566793d523009766995fd4feff85a364d8c2ba3b769ab6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosSecretParameter.TagsProperty"]]:
        '''
        :Property: tags: Tags of encryption parameter.
        '''
        return typing.cast(typing.Optional[typing.List["RosSecretParameter.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosSecretParameter.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__197cc1ec53617fd408b21f42774341ceaae9666ec39905f7c4d759b4dd8675cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oos.RosSecretParameter.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__13f6c9ae54c047ccdedc573ebe2f034a725556d2d57fd7eb8fff899c3b65ad21)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosSecretParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_parameter_name": "secretParameterName",
        "value": "value",
        "constraints": "constraints",
        "description": "description",
        "key_id": "keyId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosSecretParameterProps:
    def __init__(
        self,
        *,
        secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        constraints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSecretParameter.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosSecretParameter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter

        :param secret_parameter_name: 
        :param value: 
        :param constraints: 
        :param description: 
        :param key_id: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__baa7ec9841f6e7c8d1a0d309b5abb60c016839d105bc513b5c84933ab618e5cb)
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument constraints", value=constraints, expected_type=type_hints["constraints"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument key_id", value=key_id, expected_type=type_hints["key_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "secret_parameter_name": secret_parameter_name,
            "value": value,
        }
        if constraints is not None:
            self._values["constraints"] = constraints
        if description is not None:
            self._values["description"] = description
        if key_id is not None:
            self._values["key_id"] = key_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        result = self._values.get("secret_parameter_name")
        assert result is not None, "Required property 'secret_parameter_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: constraints: The constraints of the encryption parameter.
        '''
        result = self._values.get("constraints")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
        '''
        result = self._values.get("key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSecretParameter.TagsProperty]]:
        '''
        :Property: tags: Tags of encryption parameter.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSecretParameter.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecretParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStateConfiguration(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosStateConfiguration",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::StateConfiguration``, which is used to create a desired-state configuration.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``StateConfiguration`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosStateConfigurationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4673477b9aa82fac867ef4a5869cb15b3e1f1ec42a97c24009436647e069590c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__befc78fbd80dfb42e16156a538d8b2d6399e8f64f3ce9133c371a19540ddecd0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrStateConfigurationId")
    def attr_state_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StateConfigurationId: The ID of the desired-state configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStateConfigurationId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__53d99e0632afaf582f222c4e53a951290f3d2a0e2657e86d4a57ae6392d90967)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scheduleExpression")
    def schedule_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scheduleExpression: The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scheduleExpression"))

    @schedule_expression.setter
    def schedule_expression(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4b4115b07e92ecbf92feb37edb79fb948ca8d507256d55a1a2088f47050da32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduleExpression", value)

    @builtins.property
    @jsii.member(jsii_name="scheduleType")
    def schedule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scheduleType: The schedule type. Set the value to rate.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scheduleType"))

    @schedule_type.setter
    def schedule_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__777f0ef5c98c23b8fde7d602056485baa4e9dc008620947e0fd3306b094e1504)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduleType", value)

    @builtins.property
    @jsii.member(jsii_name="targets")
    def targets(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targets: The resources to be queried.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf43f938801d969a13dc8bb705d1fd22bb0bc3f9ff358bc58267a57ffe6bfc29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targets", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e19be527c211f3b38febb90c30065c1c4bc06459edacc493d9f6a1c75b6c89b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="configureMode")
    def configure_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configureMode: The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configureMode"))

    @configure_mode.setter
    def configure_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9059c4832cb738cd25624dd1f61d00077c9892be47f19a1ff0db32ffc4e811fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configureMode", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the desired-state configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd13638fc06d4e9c7bf4baf75453f6c679afde969bb07990ddbe5899c2a0fe33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parameters: The parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f377eb7794cc5c3c77edc50990dd1d917971d9cb0db082da8a59017979a9fbb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb21af6e0c5592f7944efc96540dbedea7c243bfb3e94546fc33d3a3bee5dbc2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89a3b3686d234aaaa803b97735dff62ced4a964c7a1400bf3fa28712f666fd73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="templateVersion")
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateVersion: The version number of the template. If you do not specify this parameter, the latest version of the template is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateVersion"))

    @template_version.setter
    def template_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbc094643ff1a142c1a29a6f581d236471c7df939af27eefdf540e4d1f558c73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosStateConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "schedule_expression": "scheduleExpression",
        "schedule_type": "scheduleType",
        "targets": "targets",
        "template_name": "templateName",
        "configure_mode": "configureMode",
        "description": "description",
        "parameters": "parameters",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "template_version": "templateVersion",
    },
)
class RosStateConfigurationProps:
    def __init__(
        self,
        *,
        schedule_expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        configure_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosStateConfiguration``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration

        :param schedule_expression: 
        :param schedule_type: 
        :param targets: 
        :param template_name: 
        :param configure_mode: 
        :param description: 
        :param parameters: 
        :param resource_group_id: 
        :param tags: 
        :param template_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d64f6924582e1d0413216f033a145688a7b0252a69d45b8debaf13097dd84089)
            check_type(argname="argument schedule_expression", value=schedule_expression, expected_type=type_hints["schedule_expression"])
            check_type(argname="argument schedule_type", value=schedule_type, expected_type=type_hints["schedule_type"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument configure_mode", value=configure_mode, expected_type=type_hints["configure_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "schedule_expression": schedule_expression,
            "schedule_type": schedule_type,
            "targets": targets,
            "template_name": template_name,
        }
        if configure_mode is not None:
            self._values["configure_mode"] = configure_mode
        if description is not None:
            self._values["description"] = description
        if parameters is not None:
            self._values["parameters"] = parameters
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def schedule_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scheduleExpression: The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
        '''
        result = self._values.get("schedule_expression")
        assert result is not None, "Required property 'schedule_expression' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scheduleType: The schedule type. Set the value to rate.
        '''
        result = self._values.get("schedule_type")
        assert result is not None, "Required property 'schedule_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targets: The resources to be queried.
        '''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def configure_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configureMode: The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
        '''
        result = self._values.get("configure_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the desired-state configuration.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parameters: The parameters.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateVersion: The version number of the template. If you do not specify this parameter, the latest version of the template is used.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStateConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosTemplate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OOS::Template``, which is used to create a template.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Template`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__279edf5c65dbbea6f9ba993f450ee586f027e356346ddca462bc6023344fd9a9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a58fb51f6e4369df2729f0d9e7df268f9a138badf85f6a25ac8949c5bceeab54)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExecutionPolicy")
    def attr_execution_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExecutionPolicy: Execution Policy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExecutionPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateId: Template ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateName: Template Name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="content")
    def content(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1515ad14b327a2e467cb6ca7efd369ec89c774f12a1896ef55196461076daff3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "content", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37ea287d128df8bdee8d7ef0f8997123cc221cf5355e058f5597bb6477638e31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73fd3c9bf2693320724b9adb61dc838fbf1a2b92fc93af6f4a2a6b2949841c7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__b7eb89d8c8b1e9709729bb8b02eadf74be7088882dc535366a56fc8bf6597aa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10622062309036467e7b6c85807946752ba1689843f35a08620a4101a8085801)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "template_name": "templateName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosTemplateProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''Properties for defining a ``RosTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template

        :param content: 
        :param template_name: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6462544f17cff3e87e3ec68dde9ec2330cf1b54ac37d1df610fa7efb355a4b9)
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "content": content,
            "template_name": template_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def content(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        '''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecretParameter(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.SecretParameter",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::SecretParameter``, which is used to create an encryption parameter.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecretParameter``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SecretParameterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0adc6deb42ec6cf342dae2cf3c9184141bca374b81dc97c8889f41bb4e779735)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConstraints")
    def attr_constraints(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Constraints: The constraints of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConstraints"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreatedBy: The user who created the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the encryption parameter was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterVersion")
    def attr_parameter_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParameterVersion: The version number of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterId")
    def attr_secret_parameter_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecretParameterId: The ID of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterName")
    def attr_secret_parameter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecretParameterName: The name of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ShareType: The share type of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: Tags of encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Type: The data type of the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedBy: The user who updated the encryption parameter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedDate: The time when the encryption parameter was updated.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4a295fb9ca1c507966c7e80d89b73c48798deafa4912195d36bc070a27b2df2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12ba338966ec918ac75ba80536d63ede9694ad5f03056e53ddc91bdaa9836441)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SecretParameterProps":
        return typing.cast("SecretParameterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SecretParameterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73223940b350f3cac25cdedbac732eb72aa7ce5f967316d635738a58d14727b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eb910de035a3ab5a688a0c77d83a2f67f32598a54191e5a6cff8a65b548c942)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.SecretParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_parameter_name": "secretParameterName",
        "value": "value",
        "constraints": "constraints",
        "description": "description",
        "key_id": "keyId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class SecretParameterProps:
    def __init__(
        self,
        *,
        secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        constraints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSecretParameter.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``SecretParameter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter

        :param secret_parameter_name: Property secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        :param value: Property value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
        :param constraints: Property constraints: The constraints of the encryption parameter.
        :param description: Property description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
        :param key_id: Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param tags: Property tags: Tags of encryption parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11ea3d2f227e7777350e9f4e97d6e6cf0518e87c0d1df9820810ddb089b556d0)
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument constraints", value=constraints, expected_type=type_hints["constraints"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument key_id", value=key_id, expected_type=type_hints["key_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "secret_parameter_name": secret_parameter_name,
            "value": value,
        }
        if constraints is not None:
            self._values["constraints"] = constraints
        if description is not None:
            self._values["description"] = description
        if key_id is not None:
            self._values["key_id"] = key_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secretParameterName: The name of the encryption parameter.

        The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        result = self._values.get("secret_parameter_name")
        assert result is not None, "Required property 'secret_parameter_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property value: The value of the encryption parameter.

        The value must be 1 to 4096 characters in length.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property constraints: The constraints of the encryption parameter.'''
        result = self._values.get("constraints")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the encryption parameter.

        The description must be 1 to 200 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.'''
        result = self._values.get("key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSecretParameter.TagsProperty]]:
        '''Property tags: Tags of encryption parameter.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSecretParameter.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecretParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class StateConfiguration(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.StateConfiguration",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::StateConfiguration``, which is used to create a desired-state configuration.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosStateConfiguration``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["StateConfigurationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c78f544a3bd9ec1ca527663743fb346e437f784a2025af63dd5c513c9284f9a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrStateConfigurationId")
    def attr_state_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StateConfigurationId: The ID of the desired-state configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStateConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0422897f0ae0d89b8aa13c2699a6f9fbd8b798163e3f64038f2a2e870039de42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9138b467771b496a0b9da3ce26cedf3eede8feca6b9a9115e4aa0f2b84d93e7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "StateConfigurationProps":
        return typing.cast("StateConfigurationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "StateConfigurationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30acc293945cf740ff3a9e6c69a6db7cbf85e3e6cf1ceb97badc9abdb9e56d22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46091219a4442c70af076762d4efa8a368590d0d807d631fb6699366f7fe4fc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.StateConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "schedule_expression": "scheduleExpression",
        "schedule_type": "scheduleType",
        "targets": "targets",
        "template_name": "templateName",
        "configure_mode": "configureMode",
        "description": "description",
        "parameters": "parameters",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "template_version": "templateVersion",
    },
)
class StateConfigurationProps:
    def __init__(
        self,
        *,
        schedule_expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        configure_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``StateConfiguration``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration

        :param schedule_expression: Property scheduleExpression: The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
        :param schedule_type: Property scheduleType: The schedule type. Set the value to rate.
        :param targets: Property targets: The resources to be queried.
        :param template_name: Property templateName: The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
        :param configure_mode: Property configureMode: The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
        :param description: Property description: The description of the desired-state configuration.
        :param parameters: Property parameters: The parameters.
        :param resource_group_id: Property resourceGroupId: The resource group ID.
        :param tags: Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
        :param template_version: Property templateVersion: The version number of the template. If you do not specify this parameter, the latest version of the template is used.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36747cae3a7d89ae70c12505732d6c4dbd402f8ab9a23e6ea30c21acdf7191d6)
            check_type(argname="argument schedule_expression", value=schedule_expression, expected_type=type_hints["schedule_expression"])
            check_type(argname="argument schedule_type", value=schedule_type, expected_type=type_hints["schedule_type"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument configure_mode", value=configure_mode, expected_type=type_hints["configure_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "schedule_expression": schedule_expression,
            "schedule_type": schedule_type,
            "targets": targets,
            "template_name": template_name,
        }
        if configure_mode is not None:
            self._values["configure_mode"] = configure_mode
        if description is not None:
            self._values["description"] = description
        if parameters is not None:
            self._values["parameters"] = parameters
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def schedule_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scheduleExpression: The schedule expression.

        The interval between two schedules must be a minimum of 30 minutes.
        '''
        result = self._values.get("schedule_expression")
        assert result is not None, "Required property 'schedule_expression' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scheduleType: The schedule type.

        Set the value to rate.
        '''
        result = self._values.get("schedule_type")
        assert result is not None, "Required property 'schedule_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targets: The resources to be queried.'''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateName: The name of the template.

        The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def configure_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configureMode: The configuration mode.

        Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
        '''
        result = self._values.get("configure_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the desired-state configuration.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parameters: The parameters.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Tag value and the key mapping, the label of the key number can be up to 20.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateVersion: The version number of the template.

        If you do not specify this parameter, the latest version of the template is used.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StateConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Template(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.Template",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OOS::Template``, which is used to create a template.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTemplate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b567b48b7c0cec2cacf1bd73a8523324ea1b696535242daadaf3b4d20cbe2619)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExecutionPolicy")
    def attr_execution_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExecutionPolicy: Execution Policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExecutionPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TemplateId: Template ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TemplateName: Template Name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f03149083e6fd0cb58d7ff95b48d19d5e2a7b74ebec33a895038364dcf821d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4977943624209a853ce69ca613406d574f0a9e83faf752c90f5111eefa05e16d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "TemplateProps":
        return typing.cast("TemplateProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "TemplateProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1deccf71201807460c852065ae0009d9be02652ed6b764756c6fc92fa16d2414)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c1e4f236ca8296b183ea90569d8639ddc3ea9c19b14deac0619c937986fd036)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.TemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "template_name": "templateName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class TemplateProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''Properties for defining a ``Template``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template

        :param content: Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        :param template_name: Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0452e70f28ca0f01c3336f59ac93a67a619eb0f2d8f144c35948bcb893a0247c)
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "content": content,
            "template_name": template_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def content(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property content: The content of the template.

        The template must be in the JSON or YAML format. Maximum size: 64 KB.
        '''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateName: The name of the template.

        The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Tag value and the key mapping, the label of the key number can be up to 20.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DefaultPatchBaseline",
    "DefaultPatchBaselineProps",
    "Execution",
    "ExecutionProps",
    "Parameter",
    "ParameterProps",
    "PatchBaseline",
    "PatchBaselineProps",
    "RosDefaultPatchBaseline",
    "RosDefaultPatchBaselineProps",
    "RosExecution",
    "RosExecutionProps",
    "RosParameter",
    "RosParameterProps",
    "RosPatchBaseline",
    "RosPatchBaselineProps",
    "RosSecretParameter",
    "RosSecretParameterProps",
    "RosStateConfiguration",
    "RosStateConfigurationProps",
    "RosTemplate",
    "RosTemplateProps",
    "SecretParameter",
    "SecretParameterProps",
    "StateConfiguration",
    "StateConfigurationProps",
    "Template",
    "TemplateProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__14c469157aa78aca5763eb64daccb9105b774172b4e5a39d0540f7b857a8a0e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DefaultPatchBaselineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b206573b0d7b730907493bf6968ff139724f4cb78c63a34f204f00495dc2c72(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__697ae11ec06fec5029b691f7bf26d5370d6f325e7426771524df667a3eac1eb2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ee14553b68ff88f11b3bad7dd43b565f4c2a4b1c81ca401bb7361e678977ad9(
    value: DefaultPatchBaselineProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9adf148950cb38be4a458b531110ae153723e1adc603dca7cc3430b099be398a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebc86edc9e11b066874de46a8ab19cfc95eedde6fd54600e58a3bc8c9b7d39b5(
    *,
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef7ab6a8305d9e9f07355258bbf2fb19eb52f1b3ef6fa74847014c074854b830(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ExecutionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fb1f02c59c99256a1d856c86747308005f0d41b29a29aac50be29aa56f727e9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__928f4a94d1e0ead7318e20745eea13bf425629c32cdc3bd7626ddb162d56d0d1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56f473a06b0defa818af4d8dd20b8ee68738ca76f85c4db533161a0106fcfaa8(
    value: ExecutionProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98ecf08953fe8961e92a964f286b70c43a47229089970b22abd58758d2c8d15d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de89d034c6c8252e127960e0abaeacedd5940c4159c7fd9ef309c4d925f48bba(
    *,
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loop_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    parent_execution_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosExecution.ResourceOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    safety_check: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef6336f04bdcab1091d376e237074996f141d3d7ef6c61c86a6a81b6b67e800e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ParameterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c88d473122a38bd7a61478107e3d4a5a8c9a19501fe754cabc436419c5f8305(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e384876e839be81ff37436072048c8dd61454a62e5fc911b2d1c309165b2a922(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfc0d508b30e1d3cce280861a8d0748db4b058fc6fe5af74a2b74e0d802972d3(
    value: ParameterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8c32e6ad2517447460c7969f7605d242589fdd48cdea90f6f97f04617040135(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db79a66d75e75fd8833d3e23539d2ae8345eacc213785d60dc4fc6068534090e(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    constraints: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f17c3900670e14b7035482864062723d1532eac65119b7dc792a4513a887a97(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PatchBaselineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f76c678d1e79fc9598e347351c54420da9937fbff93498f46360a15f0d217d45(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbb679aa77669b588f982e27245e822edc476cb36bc3e47971eb588c6b44b129(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45bca5fdfb14ce6d8ed7f29338724a5dabd818d93a8e1c766f3910df1f116669(
    value: PatchBaselineProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f165ff96fc0d3e27ed91622a0bb54c7b275466eba9ed22eeeaa13449455f3c16(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__789068e430b067319c5785056277f77f8dda60d8274b9a7a6149b4b125be05f1(
    *,
    approval_rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    operation_system: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    approved_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    approved_patches_enable_non_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rejected_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    rejected_patches_action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPatchBaseline.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7677c34e3b4a69782e2afce94ce1f9fbc7a4cf67f66065a5a92957ca00a53ca7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDefaultPatchBaselineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb42b83c106acbcb82a11e5f9be68f859530082fc078e03f54b6d54136ef5119(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7d654ff38295f0560b9ff9fa1a086690ae43a5b561436e632115666cf8a268f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d9078dba4a2fbb2fc544731aeb609a49c86206b71eec331bd44158045085f69(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de9ec7b3252d79156c0cdb3f48c5833e0e5e997669a9f2c6c403bd6702631c27(
    *,
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d90d4fe1b3d374bde956c99c34dfea13ab2a483a6d3e94561c5e74cc04072377(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosExecutionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce87d040ad189d300831ad6e6d8c13eac58f05db07dadc335ff3374850eacbd6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f43e2196b88c7ecb8487b43eaf2cf2a09a4ae3e6a2b2edfeec85e601f549b63(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4b5aa473ec596ac3ce34167d6920984b33287d540115875722e3dcabbf0d1f1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a228c2bdd73d0959567031322576da2f56eb5fa56ccd893bfd07ed52e00e30f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3d18e2cc35227be2df27b71b2fe4d792841baba1e2c69be6f3bb07b2268b7cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3e4636c9bbc71e9c89a75c43a00d5fb9ff4497f49d606438c43bed9a911ed38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4a69fa19caa4694d8c5907d06fe60a7b2d8b15ac3b2f59a7bf091b7cbfd9d95(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcfb4c77f349ad3e95a4611005125e83d00cda327aaa4a9eb3c24c9ce03a2175(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96e0b7171e86a4649be94f73d991f489bea009caf1b6ce958eb8a9482a508aae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74045c2c7c12de196e23e67ce3d1c2bca44c47da8b6fbcb545125939e52669bf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosExecution.ResourceOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62f50bf62a5b9ec3f05277587d384ce118ff5e158034a5db2d23c672a575123b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14fc330c3b351d880b86a0198ad4f39f3f85a40ba138c536390529dced5ebbd0(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45b0976163341eab64bf8a4a9a7837554793a225b6eb77986babd2f99e88c803(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09d95de7af5d15f0b2544aa4e623b52ca76645277df46e5f484ff234679876d3(
    *,
    cancel_on_delete: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failure_statuses: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_statuses: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24652a0ed70912c0955aa44b7189f1c6504c5b008535ec649c7a537d92e07676(
    *,
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    loop_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    parent_execution_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosExecution.ResourceOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    safety_check: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba01228417465ee1849bf0eadf79aaa9ded8be2b2eac4f416814b7eb9d2c8ce4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosParameterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8a6be21541ea4fc513fecd418c644310c1cb9d5666612e62c438b890414a14c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__420e11f680c135b965f48fe38dbd0bae5a31b7bfa47b2845ee39d4d7db47b5c6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__563b0f54567b7cd37832d274458988c257f521096ac5583eb07623643630750a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37937f7fa3da26985e51185aed596e96cd09b90f9d23a3123acd7bac57782bd1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__858a03e370e4cc53d4a445c9522782b80d1b9e68e591747c4b876ae0e294b7f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88507586e5b9d5ca3a3e9a93798bf2f1d34d281d88c17cb24a16f83558b8a30f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dfb881886341cacb33eebfa90037ee321af12959ee3c95a9bbb9b4cdab5b2fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5943b645a392fa0663f2530c903367f4315f1492e777cf6b92e3243cb279e1a3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17a9f792abc1f1585188259b7afc3fe98555aeab6460596664a312d5f5dfb9e1(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    constraints: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06e0a721006e371aaf00d4926974dda452be6e935a8ca5973d2e681d95ac872a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPatchBaselineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8376eaa5f59921b21c46c2e686fcf4ec9e0a572b628eb6fb4e35f659ecef8a5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e98c6ee257a7152cbb5ef8b22d45f15d81da26562c5c1f4b0df371ff2c01ade(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6051148e7f2b97963e64a50ed4baa99194ebe61f7cad3a5652af40093599a7c8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d08d153b40516a99eedfa1c10359c8257a192a035b237f1ff3aa65beefd3df52(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eafb07a4b2ab464328ac3c158e861fcb0c418d1d30036b3d31e63792b73705cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2629e3fa5255ff69dc098b4cbd85796d21fe148369dbaee82cb97337c88a164(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__623a9ba0570a5b0afdb25a1c72078a47309558f5d92c6915050d49561786e699(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d7410bf564d856da803fe41fe651cced9a8dda5bd5f957080e0647b0f1518d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e08c15824f616cbeaa4f85642abcf05ed2f79def1227e29079c68b41679576d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66b2cdbf51e8556d9b15a179ceb9cb389b3f7a15c8001018a6101b06e560a571(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__794adaf2a2d79a9f55b179ed3fc85b2fc0723f81ce6ecdd895752cb75f06b819(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0f23e5a7fa53fa6de25de301070495ae6deefe4743a7c249197a280e6be7cf2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__014200a01e9ca07bc234ed8548e2b0dc88a0df2a56ffa5f12f0a00f0866184e0(
    value: typing.Optional[typing.List[RosPatchBaseline.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e931f1a531c6a5545be48bf71a509d8bc1b45f7cad9f1bf003a7d20f34b91d4(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41ffcc6a6924cb49bc3a56fbf535c3fd75fea7c7d65213d37669de885e4d9c0d(
    *,
    approval_rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    operation_system: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    approved_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    approved_patches_enable_non_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rejected_patches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    rejected_patches_action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPatchBaseline.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36e7338b47a96ecef12d163df5d52484885f14cf83aaa6d6448e304a91b4ec02(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecretParameterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c5b5d3513a99838bdee6f4133d03f70366ae52d7033da832bfd26c47fdce28d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90001dc70f6726afc97decf204a9a3e85ff2e1b53989e95cedff0df6d763f297(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__351f41ccb5cdc81e6d26cfbfa49e29a1ab4887587ba17be78e57ba0cef6962b0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50407dd6a1ee29f8f3ce601a4ba6b9aa8b3d01922682e5011129b760a6837a96(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bd5514fc094a218969eb982cb11551a9a4ab779d8b5ac58740fbf5d156ee4dd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ddb1d76f73da607dcf551704a9357b2c51aecedb6ef9f8c599cfd18abea009e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5df7be8e05da815e4a3fcf905b522d5021b5be50ac545fc237e63e920c22698c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__272c68679eb178f87b566793d523009766995fd4feff85a364d8c2ba3b769ab6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__197cc1ec53617fd408b21f42774341ceaae9666ec39905f7c4d759b4dd8675cc(
    value: typing.Optional[typing.List[RosSecretParameter.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13f6c9ae54c047ccdedc573ebe2f034a725556d2d57fd7eb8fff899c3b65ad21(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__baa7ec9841f6e7c8d1a0d309b5abb60c016839d105bc513b5c84933ab618e5cb(
    *,
    secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    constraints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSecretParameter.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4673477b9aa82fac867ef4a5869cb15b3e1f1ec42a97c24009436647e069590c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosStateConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__befc78fbd80dfb42e16156a538d8b2d6399e8f64f3ce9133c371a19540ddecd0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53d99e0632afaf582f222c4e53a951290f3d2a0e2657e86d4a57ae6392d90967(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4b4115b07e92ecbf92feb37edb79fb948ca8d507256d55a1a2088f47050da32(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__777f0ef5c98c23b8fde7d602056485baa4e9dc008620947e0fd3306b094e1504(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf43f938801d969a13dc8bb705d1fd22bb0bc3f9ff358bc58267a57ffe6bfc29(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e19be527c211f3b38febb90c30065c1c4bc06459edacc493d9f6a1c75b6c89b0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9059c4832cb738cd25624dd1f61d00077c9892be47f19a1ff0db32ffc4e811fa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd13638fc06d4e9c7bf4baf75453f6c679afde969bb07990ddbe5899c2a0fe33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f377eb7794cc5c3c77edc50990dd1d917971d9cb0db082da8a59017979a9fbb5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb21af6e0c5592f7944efc96540dbedea7c243bfb3e94546fc33d3a3bee5dbc2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89a3b3686d234aaaa803b97735dff62ced4a964c7a1400bf3fa28712f666fd73(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbc094643ff1a142c1a29a6f581d236471c7df939af27eefdf540e4d1f558c73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d64f6924582e1d0413216f033a145688a7b0252a69d45b8debaf13097dd84089(
    *,
    schedule_expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    configure_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__279edf5c65dbbea6f9ba993f450ee586f027e356346ddca462bc6023344fd9a9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a58fb51f6e4369df2729f0d9e7df268f9a138badf85f6a25ac8949c5bceeab54(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1515ad14b327a2e467cb6ca7efd369ec89c774f12a1896ef55196461076daff3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37ea287d128df8bdee8d7ef0f8997123cc221cf5355e058f5597bb6477638e31(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73fd3c9bf2693320724b9adb61dc838fbf1a2b92fc93af6f4a2a6b2949841c7d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7eb89d8c8b1e9709729bb8b02eadf74be7088882dc535366a56fc8bf6597aa8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10622062309036467e7b6c85807946752ba1689843f35a08620a4101a8085801(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6462544f17cff3e87e3ec68dde9ec2330cf1b54ac37d1df610fa7efb355a4b9(
    *,
    content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0adc6deb42ec6cf342dae2cf3c9184141bca374b81dc97c8889f41bb4e779735(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SecretParameterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4a295fb9ca1c507966c7e80d89b73c48798deafa4912195d36bc070a27b2df2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12ba338966ec918ac75ba80536d63ede9694ad5f03056e53ddc91bdaa9836441(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73223940b350f3cac25cdedbac732eb72aa7ce5f967316d635738a58d14727b5(
    value: SecretParameterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb910de035a3ab5a688a0c77d83a2f67f32598a54191e5a6cff8a65b548c942(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11ea3d2f227e7777350e9f4e97d6e6cf0518e87c0d1df9820810ddb089b556d0(
    *,
    secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    constraints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSecretParameter.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c78f544a3bd9ec1ca527663743fb346e437f784a2025af63dd5c513c9284f9a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[StateConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0422897f0ae0d89b8aa13c2699a6f9fbd8b798163e3f64038f2a2e870039de42(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9138b467771b496a0b9da3ce26cedf3eede8feca6b9a9115e4aa0f2b84d93e7d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30acc293945cf740ff3a9e6c69a6db7cbf85e3e6cf1ceb97badc9abdb9e56d22(
    value: StateConfigurationProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46091219a4442c70af076762d4efa8a368590d0d807d631fb6699366f7fe4fc1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36747cae3a7d89ae70c12505732d6c4dbd402f8ab9a23e6ea30c21acdf7191d6(
    *,
    schedule_expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    schedule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    configure_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b567b48b7c0cec2cacf1bd73a8523324ea1b696535242daadaf3b4d20cbe2619(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f03149083e6fd0cb58d7ff95b48d19d5e2a7b74ebec33a895038364dcf821d9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4977943624209a853ce69ca613406d574f0a9e83faf752c90f5111eefa05e16d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1deccf71201807460c852065ae0009d9be02652ed6b764756c6fc92fa16d2414(
    value: TemplateProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c1e4f236ca8296b183ea90569d8639ddc3ea9c19b14deac0619c937986fd036(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0452e70f28ca0f01c3336f59ac93a67a619eb0f2d8f144c35948bcb893a0247c(
    *,
    content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass
