'''
## Aliyun ROS MPS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MPS from '@alicloud/ros-cdk-mps';
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


class MediaWorkflow(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.MediaWorkflow",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MPS::MediaWorkflow``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMediaWorkflow``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MediaWorkflowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a9aee86760c31713be1f268ebd8939613d84fd713b4fec84e295a98f4a71861)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreationTime")
    def attr_creation_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreationTime: The time when the media workflow was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaWorkflowId")
    def attr_media_workflow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MediaWorkflowId: The ID of the media workflow.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMediaWorkflowId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The name of the media workflow.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute State: The state of the media workflow.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrTopology")
    def attr_topology(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Topology: The topology of the media workflow.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopology"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerMode")
    def attr_trigger_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TriggerMode: The trigger mode of the media workflow.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerMode"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2f113aede54eea4c0da8f280489f1fbce8dc23345de2857435eba47f09a031f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf5b22e8d55497fdb36052469b756f9897dc47f7723887b02082f13182739679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "MediaWorkflowProps":
        return typing.cast("MediaWorkflowProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "MediaWorkflowProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f977c3ca3a412587d0780acf21dc05c41db5e42ef5a3da1e0f0ce8ca137e64ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfb53fa7401c81c67e8842101895fde808bce442ec2895dea03f6382795f1416)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mps.MediaWorkflowProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "topology": "topology",
        "trigger_mode": "triggerMode",
    },
)
class MediaWorkflowProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topology: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MediaWorkflow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow

        :param name: Property name: The topology of the media workflow. The value cannot be empty. The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account. The name can be up to 64 characters in length. The value must be encoded in the UTF-8 format.
        :param topology: Property topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
        :param trigger_mode: Property triggerMode: The triggering mode of the media workflow. Valid values: OssAutoTrigger: The media workflow is automatically triggered. NotInAuto: The media workflow is not automatically triggered.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77ac5855e1c6ae5430396400a8e64de92a684f664e9a64e513a20f56c1c2d987)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument topology", value=topology, expected_type=type_hints["topology"])
            check_type(argname="argument trigger_mode", value=trigger_mode, expected_type=type_hints["trigger_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "topology": topology,
        }
        if trigger_mode is not None:
            self._values["trigger_mode"] = trigger_mode

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The topology of the media workflow.

        The value cannot be empty.
        The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
        The name can be up to 64 characters in length.
        The value must be encoded in the UTF-8 format.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topology(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property topology: The topology of the media workflow.

        The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
        '''
        result = self._values.get("topology")
        assert result is not None, "Required property 'topology' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property triggerMode: The triggering mode of the media workflow.

        Valid values:
        OssAutoTrigger: The media workflow is automatically triggered.
        NotInAuto: The media workflow is not automatically triggered.
        '''
        result = self._values.get("trigger_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MediaWorkflowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Pipeline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.Pipeline",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MPS::Pipeline``, which is used to create an ApsaraVideo Media Processing (MPS) queue.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPipeline``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PipelineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c34fa85b3e09b08bbb46d54b5f1ff43f9356eb7ef98c96b5059c6a64e522f2c2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PipelineId: The ID of the MPS queue.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPipelineId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__171fe33521901b88e870303ce2e14ebd733847a3ed6b803dec4c22b1ad42dd42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51b88e7a1c243799b4283d15fcd022b84fcb8a77e65186562201ab96351ebfdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PipelineProps":
        return typing.cast("PipelineProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PipelineProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a647ffb98ee3344387601386314d4e70b1072defc00e9ac8714b4b31c73a4d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f90cd514db5baba2164b867a4424d25a4bb35fde479532f17095e2fda81e300)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mps.PipelineProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "notify_config": "notifyConfig",
        "role": "role",
        "speed": "speed",
        "speed_level": "speedLevel",
        "state": "state",
    },
)
class PipelineProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        notify_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPipeline.NotifyConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        speed: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        speed_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Pipeline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline

        :param name: Property name: The new name of the MPS queue. The value can contain letters, digits, and special characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot start with a special character.
        :param notify_config: Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic. For more information, see NotifyConfig.
        :param role: Property role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        :param speed: Property speed: Pipe type. Value: Boost: Double-speed transcoding Standard: ordinary pipe NarrowBandHDV2: Narrowband HD 2.0 AIVideoCover: Smart Screenshots AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou). Default: Standard.
        :param speed_level: Property speedLevel: Speed level.
        :param state: Property state: The new state of the MPS queue. Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS. Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba9ffc6b88ce88179af71c7f3f1d5eb164f95d57d47581e3f71ee56e43c75b19)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument notify_config", value=notify_config, expected_type=type_hints["notify_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            check_type(argname="argument speed", value=speed, expected_type=type_hints["speed"])
            check_type(argname="argument speed_level", value=speed_level, expected_type=type_hints["speed_level"])
            check_type(argname="argument state", value=state, expected_type=type_hints["state"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if notify_config is not None:
            self._values["notify_config"] = notify_config
        if role is not None:
            self._values["role"] = role
        if speed is not None:
            self._values["speed"] = speed
        if speed_level is not None:
            self._values["speed_level"] = speed_level
        if state is not None:
            self._values["state"] = state

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The new name of the MPS queue.

        The value can contain letters, digits, and special
        characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        start with a special character.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def notify_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPipeline.NotifyConfigProperty"]]:
        '''Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.

        For more information, see NotifyConfig.
        '''
        result = self._values.get("notify_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPipeline.NotifyConfigProperty"]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property role: The role that is assigned to the current RAM user.

        To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def speed(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property speed: Pipe type.

        Value:
        Boost: Double-speed transcoding
        Standard: ordinary pipe
        NarrowBandHDV2: Narrowband HD 2.0
        AIVideoCover: Smart Screenshots
        AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
        Default: Standard.
        '''
        result = self._values.get("speed")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def speed_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property speedLevel: Speed level.'''
        result = self._values.get("speed_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property state: The new state of the MPS queue.

        Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        result = self._values.get("state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PipelineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMediaWorkflow(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.RosMediaWorkflow",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MPS::MediaWorkflow``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MediaWorkflow`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMediaWorkflowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd2e6b9d7d56cd4888ab8189467fb58495f29fd467adb859951472ddff7da769)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2f61bf8f328ed61887eb787ccf7375d147d23784b440ea76abb24d42499e07c6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreationTime")
    def attr_creation_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreationTime: The time when the media workflow was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaWorkflowId")
    def attr_media_workflow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MediaWorkflowId: The ID of the media workflow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMediaWorkflowId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of the media workflow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: State: The state of the media workflow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrTopology")
    def attr_topology(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Topology: The topology of the media workflow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopology"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerMode")
    def attr_trigger_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TriggerMode: The trigger mode of the media workflow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerMode"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0d2ed6813cc2f6ed6b2e5bcfec73f15dafbc6dc1c56b541c966ccff66c4b5622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The topology of the media workflow.
        The value cannot be empty.
        The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
        The name can be up to 64 characters in length.
        The value must be encoded in the UTF-8 format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c4476450598b1cacc2365a808dd34f3aa8a75b0736a8baadbe9c50b279915ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="topology")
    def topology(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "topology"))

    @topology.setter
    def topology(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2261d6c0703b1a5452da50d2ad676e1e1972ac50e3c31d26f49ff70ea614c65f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topology", value)

    @builtins.property
    @jsii.member(jsii_name="triggerMode")
    def trigger_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        triggerMode: The triggering mode of the media workflow. Valid values:
        OssAutoTrigger: The media workflow is automatically triggered.
        NotInAuto: The media workflow is not automatically triggered.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "triggerMode"))

    @trigger_mode.setter
    def trigger_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c64c76a2023283f2025038e9644adf5d9dcd37d4181c90413f4509548ffc7e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mps.RosMediaWorkflowProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "topology": "topology",
        "trigger_mode": "triggerMode",
    },
)
class RosMediaWorkflowProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topology: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMediaWorkflow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow

        :param name: 
        :param topology: 
        :param trigger_mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d788228330824354a2372937b73235900335e859f7c9d9030974b9398cf19b86)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument topology", value=topology, expected_type=type_hints["topology"])
            check_type(argname="argument trigger_mode", value=trigger_mode, expected_type=type_hints["trigger_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "topology": topology,
        }
        if trigger_mode is not None:
            self._values["trigger_mode"] = trigger_mode

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The topology of the media workflow.
        The value cannot be empty.
        The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
        The name can be up to 64 characters in length.
        The value must be encoded in the UTF-8 format.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topology(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
        '''
        result = self._values.get("topology")
        assert result is not None, "Required property 'topology' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        triggerMode: The triggering mode of the media workflow. Valid values:
        OssAutoTrigger: The media workflow is automatically triggered.
        NotInAuto: The media workflow is not automatically triggered.
        '''
        result = self._values.get("trigger_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMediaWorkflowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPipeline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.RosPipeline",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MPS::Pipeline``, which is used to create an ApsaraVideo Media Processing (MPS) queue.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Pipeline`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPipelineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__495d8b51dd1e6c508994271ce3137e365e077767dd14e1fb2cf34ab707e320a3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__de1beef9d117cfc42c06de99777a78393be3beda523c14417b9f2fa5fa480d9c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PipelineId: The ID of the MPS queue.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPipelineId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e007d522ea7e8862f4d49ff225cc6cfccdcf9f0bd60ae52e68b71cc4c8502b86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The new name of the MPS queue. The value can contain letters, digits, and special
        characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        start with a special character.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__679431cd8af4d7adb2c48f003ae60576cabccd2ac16ca01e661dd541bf3eb1c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="notifyConfig")
    def notify_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPipeline.NotifyConfigProperty"]]:
        '''
        :Property:

        notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
        or topic. For more information, see NotifyConfig.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPipeline.NotifyConfigProperty"]], jsii.get(self, "notifyConfig"))

    @notify_config.setter
    def notify_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPipeline.NotifyConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d46b1f5444045316e5ce778a8c088a682e2bf7885c139e8197817ce6371f9f78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "notifyConfig", value)

    @builtins.property
    @jsii.member(jsii_name="role")
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "role"))

    @role.setter
    def role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f464cb1eff47ed68e818cd17ee30f28e06bfee77fbab0e64c7c60a443f0bb223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "role", value)

    @builtins.property
    @jsii.member(jsii_name="speed")
    def speed(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        speed: Pipe type. Value:
        Boost: Double-speed transcoding
        Standard: ordinary pipe
        NarrowBandHDV2: Narrowband HD 2.0
        AIVideoCover: Smart Screenshots
        AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
        Default: Standard.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "speed"))

    @speed.setter
    def speed(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fae9113464f733e991df85ec0b6084d6db57cbc1d0f0de7f3896b026ce160687)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "speed", value)

    @builtins.property
    @jsii.member(jsii_name="speedLevel")
    def speed_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: speedLevel: Speed level.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "speedLevel"))

    @speed_level.setter
    def speed_level(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0da350506beafd3690a3a63a67248f2f5db4882148d21ba166693940ec255bed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "speedLevel", value)

    @builtins.property
    @jsii.member(jsii_name="state")
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        state: The new state of the MPS queue.
        Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "state"))

    @state.setter
    def state(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__324bee693e3228711d84295cbd59868b6ba0e6b7782ed8173d6ce3092efe6fdd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "state", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"queue_name": "queueName", "topic": "topic"},
    )
    class NotifyConfigProperty:
        def __init__(
            self,
            *,
            queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param queue_name: 
            :param topic: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__49ca89b0528221844489052e15956933aa7a7af997c851fd5088cd2053e37a48)
                check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
                check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if queue_name is not None:
                self._values["queue_name"] = queue_name
            if topic is not None:
                self._values["topic"] = topic

        @builtins.property
        def queue_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: queueName: undefined
            '''
            result = self._values.get("queue_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def topic(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: topic: undefined
            '''
            result = self._values.get("topic")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotifyConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mps.RosPipelineProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "notify_config": "notifyConfig",
        "role": "role",
        "speed": "speed",
        "speed_level": "speedLevel",
        "state": "state",
    },
)
class RosPipelineProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        notify_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPipeline.NotifyConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        speed: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        speed_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPipeline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline

        :param name: 
        :param notify_config: 
        :param role: 
        :param speed: 
        :param speed_level: 
        :param state: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__732efec3bd0e9ebaac86783200e3665817b4dd72ca5c52f804d2fc0ab6190c3b)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument notify_config", value=notify_config, expected_type=type_hints["notify_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            check_type(argname="argument speed", value=speed, expected_type=type_hints["speed"])
            check_type(argname="argument speed_level", value=speed_level, expected_type=type_hints["speed_level"])
            check_type(argname="argument state", value=state, expected_type=type_hints["state"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if notify_config is not None:
            self._values["notify_config"] = notify_config
        if role is not None:
            self._values["role"] = role
        if speed is not None:
            self._values["speed"] = speed
        if speed_level is not None:
            self._values["speed_level"] = speed_level
        if state is not None:
            self._values["state"] = state

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The new name of the MPS queue. The value can contain letters, digits, and special
        characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        start with a special character.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def notify_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPipeline.NotifyConfigProperty]]:
        '''
        :Property:

        notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
        or topic. For more information, see NotifyConfig.
        '''
        result = self._values.get("notify_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPipeline.NotifyConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def speed(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        speed: Pipe type. Value:
        Boost: Double-speed transcoding
        Standard: ordinary pipe
        NarrowBandHDV2: Narrowband HD 2.0
        AIVideoCover: Smart Screenshots
        AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
        Default: Standard.
        '''
        result = self._values.get("speed")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def speed_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: speedLevel: Speed level.
        '''
        result = self._values.get("speed_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        state: The new state of the MPS queue.
        Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        result = self._values.get("state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPipelineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "MediaWorkflow",
    "MediaWorkflowProps",
    "Pipeline",
    "PipelineProps",
    "RosMediaWorkflow",
    "RosMediaWorkflowProps",
    "RosPipeline",
    "RosPipelineProps",
]

publication.publish()

def _typecheckingstub__9a9aee86760c31713be1f268ebd8939613d84fd713b4fec84e295a98f4a71861(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MediaWorkflowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2f113aede54eea4c0da8f280489f1fbce8dc23345de2857435eba47f09a031f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf5b22e8d55497fdb36052469b756f9897dc47f7723887b02082f13182739679(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f977c3ca3a412587d0780acf21dc05c41db5e42ef5a3da1e0f0ce8ca137e64ca(
    value: MediaWorkflowProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfb53fa7401c81c67e8842101895fde808bce442ec2895dea03f6382795f1416(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77ac5855e1c6ae5430396400a8e64de92a684f664e9a64e513a20f56c1c2d987(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topology: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    trigger_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c34fa85b3e09b08bbb46d54b5f1ff43f9356eb7ef98c96b5059c6a64e522f2c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PipelineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__171fe33521901b88e870303ce2e14ebd733847a3ed6b803dec4c22b1ad42dd42(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51b88e7a1c243799b4283d15fcd022b84fcb8a77e65186562201ab96351ebfdb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a647ffb98ee3344387601386314d4e70b1072defc00e9ac8714b4b31c73a4d7(
    value: PipelineProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f90cd514db5baba2164b867a4424d25a4bb35fde479532f17095e2fda81e300(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba9ffc6b88ce88179af71c7f3f1d5eb164f95d57d47581e3f71ee56e43c75b19(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    notify_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPipeline.NotifyConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    speed: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    speed_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd2e6b9d7d56cd4888ab8189467fb58495f29fd467adb859951472ddff7da769(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMediaWorkflowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f61bf8f328ed61887eb787ccf7375d147d23784b440ea76abb24d42499e07c6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d2ed6813cc2f6ed6b2e5bcfec73f15dafbc6dc1c56b541c966ccff66c4b5622(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c4476450598b1cacc2365a808dd34f3aa8a75b0736a8baadbe9c50b279915ab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2261d6c0703b1a5452da50d2ad676e1e1972ac50e3c31d26f49ff70ea614c65f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c64c76a2023283f2025038e9644adf5d9dcd37d4181c90413f4509548ffc7e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d788228330824354a2372937b73235900335e859f7c9d9030974b9398cf19b86(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topology: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    trigger_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__495d8b51dd1e6c508994271ce3137e365e077767dd14e1fb2cf34ab707e320a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPipelineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de1beef9d117cfc42c06de99777a78393be3beda523c14417b9f2fa5fa480d9c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e007d522ea7e8862f4d49ff225cc6cfccdcf9f0bd60ae52e68b71cc4c8502b86(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__679431cd8af4d7adb2c48f003ae60576cabccd2ac16ca01e661dd541bf3eb1c0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d46b1f5444045316e5ce778a8c088a682e2bf7885c139e8197817ce6371f9f78(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPipeline.NotifyConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f464cb1eff47ed68e818cd17ee30f28e06bfee77fbab0e64c7c60a443f0bb223(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fae9113464f733e991df85ec0b6084d6db57cbc1d0f0de7f3896b026ce160687(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0da350506beafd3690a3a63a67248f2f5db4882148d21ba166693940ec255bed(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__324bee693e3228711d84295cbd59868b6ba0e6b7782ed8173d6ce3092efe6fdd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49ca89b0528221844489052e15956933aa7a7af997c851fd5088cd2053e37a48(
    *,
    queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__732efec3bd0e9ebaac86783200e3665817b4dd72ca5c52f804d2fc0ab6190c3b(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    notify_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPipeline.NotifyConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    speed: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    speed_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
