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

from ._jsii import *

import ros_cdk_core


class Pipeline(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.Pipeline",
):
    '''A ROS resource type:  ``ALIYUN::MPS::Pipeline``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PipelineProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MPS::Pipeline``.

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
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PipelineId: The ID of the MPS queue.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPipelineId"))


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
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        notify_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPipeline.NotifyConfigProperty"]] = None,
        role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        speed: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        speed_level: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        state: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MPS::Pipeline``.

        :param name: Property name: The new name of the MPS queue. The value can contain letters, digits, and special characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot start with a special character.
        :param notify_config: Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic. For more information, see NotifyConfig.
        :param role: Property role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        :param speed: Property speed: Pipe type. Value: Boost: Double-speed transcoding Standard: ordinary pipe NarrowBandHDV2: Narrowband HD 2.0 AIVideoCover: Smart Screenshots AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou). Default: Standard.
        :param speed_level: Property speedLevel: Speed level.
        :param state: Property state: The new state of the MPS queue. Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS. Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The new name of the MPS queue.

        The value can contain letters, digits, and special
        characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        start with a special character.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def notify_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPipeline.NotifyConfigProperty"]]:
        '''Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.

        For more information, see NotifyConfig.
        '''
        result = self._values.get("notify_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPipeline.NotifyConfigProperty"]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property role: The role that is assigned to the current RAM user.

        To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def speed(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def speed_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property speedLevel: Speed level.'''
        result = self._values.get("speed_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property state: The new state of the MPS queue.

        Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        result = self._values.get("state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PipelineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPipeline(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.RosPipeline",
):
    '''A ROS template type:  ``ALIYUN::MPS::Pipeline``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPipelineProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MPS::Pipeline``.

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
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PipelineId: The ID of the MPS queue.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPipelineId"))

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
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The new name of the MPS queue. The value can contain letters, digits, and special
        characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        start with a special character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="notifyConfig")
    def notify_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPipeline.NotifyConfigProperty"]]:
        '''
        :Property:

        notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
        or topic. For more information, see NotifyConfig.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPipeline.NotifyConfigProperty"]], jsii.get(self, "notifyConfig"))

    @notify_config.setter
    def notify_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosPipeline.NotifyConfigProperty"]],
    ) -> None:
        jsii.set(self, "notifyConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="role")
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "role"))

    @role.setter
    def role(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "role", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="speed")
    def speed(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "speed"))

    @speed.setter
    def speed(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "speed", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="speedLevel")
    def speed_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: speedLevel: Speed level.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "speedLevel"))

    @speed_level.setter
    def speed_level(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "speedLevel", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="state")
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        state: The new state of the MPS queue.
        Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "state"))

    @state.setter
    def state(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            queue_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            topic: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param queue_name: 
            :param topic: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if queue_name is not None:
                self._values["queue_name"] = queue_name
            if topic is not None:
                self._values["topic"] = topic

        @builtins.property
        def queue_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: queueName: undefined
            '''
            result = self._values.get("queue_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def topic(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: topic: undefined
            '''
            result = self._values.get("topic")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        notify_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPipeline.NotifyConfigProperty]] = None,
        role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        speed: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        speed_level: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        state: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MPS::Pipeline``.

        :param name: 
        :param notify_config: 
        :param role: 
        :param speed: 
        :param speed_level: 
        :param state: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The new name of the MPS queue. The value can contain letters, digits, and special
        characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        start with a special character.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def notify_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPipeline.NotifyConfigProperty]]:
        '''
        :Property:

        notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
        or topic. For more information, see NotifyConfig.
        '''
        result = self._values.get("notify_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosPipeline.NotifyConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def speed(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def speed_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: speedLevel: Speed level.
        '''
        result = self._values.get("speed_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        state: The new state of the MPS queue.
        Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        '''
        result = self._values.get("state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPipelineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Pipeline",
    "PipelineProps",
    "RosPipeline",
    "RosPipelineProps",
]

publication.publish()
