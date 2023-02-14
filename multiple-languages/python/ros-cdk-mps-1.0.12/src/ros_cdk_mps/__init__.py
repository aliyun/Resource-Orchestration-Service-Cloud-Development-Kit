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


class Pipeline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.Pipeline",
):
    '''A ROS resource type:  ``ALIYUN::MPS::Pipeline``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PipelineProps", typing.Dict[builtins.str, typing.Any]],
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
        '''Properties for defining a ``ALIYUN::MPS::Pipeline``.

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


class RosPipeline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mps.RosPipeline",
):
    '''A ROS template type:  ``ALIYUN::MPS::Pipeline``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPipelineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MPS::Pipeline``.

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
        '''Properties for defining a ``ALIYUN::MPS::Pipeline``.

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
    "Pipeline",
    "PipelineProps",
    "RosPipeline",
    "RosPipelineProps",
]

publication.publish()

def _typecheckingstub__c34fa85b3e09b08bbb46d54b5f1ff43f9356eb7ef98c96b5059c6a64e522f2c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PipelineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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
