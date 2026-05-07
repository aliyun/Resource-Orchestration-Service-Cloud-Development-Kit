'''
## Aliyun ROS APPFLOW Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as APPFLOW from '@alicloud/ros-cdk-appflow';
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
    jsii_type="@alicloud/ros-cdk-appflow.ChatbotFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "chatbot_id": "chatbotId",
        "flow_config": "flowConfig",
        "flow_name": "flowName",
        "flow_type": "flowType",
    },
)
class ChatbotFlowProps:
    def __init__(
        self,
        *,
        chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        flow_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ChatbotFlow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow

        :param chatbot_id: Property chatbotId: The ID of the chatbot.
        :param flow_config: Property flowConfig: The config of the chatbot flow.
        :param flow_name: Property flowName: The name of the chatbot flow.
        :param flow_type: Property flowType: The type of the chatbot flow.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8267be8dc56dac35aeaf4125c204f4e6741cf3ee42a5a69e4bdfe5a2074bdc24)
            check_type(argname="argument chatbot_id", value=chatbot_id, expected_type=type_hints["chatbot_id"])
            check_type(argname="argument flow_config", value=flow_config, expected_type=type_hints["flow_config"])
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
            check_type(argname="argument flow_type", value=flow_type, expected_type=type_hints["flow_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chatbot_id": chatbot_id,
        }
        if flow_config is not None:
            self._values["flow_config"] = flow_config
        if flow_name is not None:
            self._values["flow_name"] = flow_name
        if flow_type is not None:
            self._values["flow_type"] = flow_type

    @builtins.property
    def chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chatbotId: The ID of the chatbot.'''
        result = self._values.get("chatbot_id")
        assert result is not None, "Required property 'chatbot_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property flowConfig: The config of the chatbot flow.'''
        result = self._values.get("flow_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowName: The name of the chatbot flow.'''
        result = self._values.get("flow_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowType: The type of the chatbot flow.'''
        result = self._values.get("flow_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ChatbotFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.ChatbotModelProps",
    jsii_struct_bases=[],
    name_mapping={
        "chatbot_id": "chatbotId",
        "model_action_id": "modelActionId",
        "model_id": "modelId",
        "parameters": "parameters",
        "status": "status",
        "user_auth_config_id": "userAuthConfigId",
    },
)
class ChatbotModelProps:
    def __init__(
        self,
        *,
        chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        model_action_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        model_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_auth_config_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ChatbotModel``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel

        :param chatbot_id: Property chatbotId: The ID of the chatbot.
        :param model_action_id: Property modelActionId: The ID of the model action.
        :param model_id: Property modelId: The ID of the model.
        :param parameters: Property parameters: The parameters of the model.
        :param status: Property status: The status of the model.
        :param user_auth_config_id: Property userAuthConfigId: The ID of the user auth config.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfb3f78aaa8e599f3aea3ec9c4eb16360d528a6c40556898603b241294b0bbf7)
            check_type(argname="argument chatbot_id", value=chatbot_id, expected_type=type_hints["chatbot_id"])
            check_type(argname="argument model_action_id", value=model_action_id, expected_type=type_hints["model_action_id"])
            check_type(argname="argument model_id", value=model_id, expected_type=type_hints["model_id"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument user_auth_config_id", value=user_auth_config_id, expected_type=type_hints["user_auth_config_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chatbot_id": chatbot_id,
        }
        if model_action_id is not None:
            self._values["model_action_id"] = model_action_id
        if model_id is not None:
            self._values["model_id"] = model_id
        if parameters is not None:
            self._values["parameters"] = parameters
        if status is not None:
            self._values["status"] = status
        if user_auth_config_id is not None:
            self._values["user_auth_config_id"] = user_auth_config_id

    @builtins.property
    def chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chatbotId: The ID of the chatbot.'''
        result = self._values.get("chatbot_id")
        assert result is not None, "Required property 'chatbot_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def model_action_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property modelActionId: The ID of the model action.'''
        result = self._values.get("model_action_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def model_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property modelId: The ID of the model.'''
        result = self._values.get("model_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: The parameters of the model.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the model.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_auth_config_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userAuthConfigId: The ID of the user auth config.'''
        result = self._values.get("user_auth_config_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ChatbotModelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.ChatbotProps",
    jsii_struct_bases=[],
    name_mapping={
        "chatbot_name": "chatbotName",
        "chatbot_config": "chatbotConfig",
        "chatbot_desc": "chatbotDesc",
        "chatbot_icon": "chatbotIcon",
        "from_": "from",
        "template_id": "templateId",
    },
)
class ChatbotProps:
    def __init__(
        self,
        *,
        chatbot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        chatbot_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosChatbot.ChatbotConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        chatbot_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        chatbot_icon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        from_: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Chatbot``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot

        :param chatbot_name: Property chatbotName: The name of the chatbot.
        :param chatbot_config: Property chatbotConfig: AI assistant configuration.
        :param chatbot_desc: Property chatbotDesc: The description of the chatbot.
        :param chatbot_icon: Property chatbotIcon: The icon of the chatbot.
        :param from_: Property from: The source of the request.
        :param template_id: Property templateId: The ID of the chatbot template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07299a7e2cca8217cff79fb077ed920b8289f9790b30910f90ed26a700bf601f)
            check_type(argname="argument chatbot_name", value=chatbot_name, expected_type=type_hints["chatbot_name"])
            check_type(argname="argument chatbot_config", value=chatbot_config, expected_type=type_hints["chatbot_config"])
            check_type(argname="argument chatbot_desc", value=chatbot_desc, expected_type=type_hints["chatbot_desc"])
            check_type(argname="argument chatbot_icon", value=chatbot_icon, expected_type=type_hints["chatbot_icon"])
            check_type(argname="argument from_", value=from_, expected_type=type_hints["from_"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chatbot_name": chatbot_name,
        }
        if chatbot_config is not None:
            self._values["chatbot_config"] = chatbot_config
        if chatbot_desc is not None:
            self._values["chatbot_desc"] = chatbot_desc
        if chatbot_icon is not None:
            self._values["chatbot_icon"] = chatbot_icon
        if from_ is not None:
            self._values["from_"] = from_
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def chatbot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chatbotName: The name of the chatbot.'''
        result = self._values.get("chatbot_name")
        assert result is not None, "Required property 'chatbot_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def chatbot_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ChatbotConfigProperty"]]:
        '''Property chatbotConfig: AI assistant configuration.'''
        result = self._values.get("chatbot_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ChatbotConfigProperty"]], result)

    @builtins.property
    def chatbot_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chatbotDesc: The description of the chatbot.'''
        result = self._values.get("chatbot_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def chatbot_icon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chatbotIcon: The icon of the chatbot.'''
        result = self._values.get("chatbot_icon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def from_(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property from: The source of the request.'''
        result = self._values.get("from_")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateId: The ID of the chatbot template.'''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ChatbotProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.FlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "flow_name": "flowName",
        "flow_desc": "flowDesc",
        "flow_id": "flowId",
        "flow_status": "flowStatus",
        "launch_flow": "launchFlow",
        "parameters": "parameters",
        "template": "template",
        "template_id": "templateId",
    },
)
class FlowProps:
    def __init__(
        self,
        *,
        flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Flow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow

        :param flow_name: Property flowName: The name of the flow.
        :param flow_desc: Property flowDesc: The description of the flow.
        :param flow_id: Property flowId: The ID of the flow.
        :param flow_status: Property flowStatus: The status of the flow. Allowed values: Enable: enable flow Disable: disable flow
        :param launch_flow: Property launchFlow: Whether to launch the flow.
        :param parameters: Property parameters: The parameters of the flow.
        :param template: Property template: The template of the flow.
        :param template_id: Property templateId: The ID of the template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bf8478ab424bf238e522a89500f2a35e0bb210265d3040ed7fad06d98ecb6d5)
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
            check_type(argname="argument flow_desc", value=flow_desc, expected_type=type_hints["flow_desc"])
            check_type(argname="argument flow_id", value=flow_id, expected_type=type_hints["flow_id"])
            check_type(argname="argument flow_status", value=flow_status, expected_type=type_hints["flow_status"])
            check_type(argname="argument launch_flow", value=launch_flow, expected_type=type_hints["launch_flow"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_name": flow_name,
        }
        if flow_desc is not None:
            self._values["flow_desc"] = flow_desc
        if flow_id is not None:
            self._values["flow_id"] = flow_id
        if flow_status is not None:
            self._values["flow_status"] = flow_status
        if launch_flow is not None:
            self._values["launch_flow"] = launch_flow
        if parameters is not None:
            self._values["parameters"] = parameters
        if template is not None:
            self._values["template"] = template
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property flowName: The name of the flow.'''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowDesc: The description of the flow.'''
        result = self._values.get("flow_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowId: The ID of the flow.'''
        result = self._values.get("flow_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowStatus: The status of the flow.

        Allowed values:
        Enable: enable flow
        Disable: disable flow
        '''
        result = self._values.get("flow_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property launchFlow: Whether to launch the flow.'''
        result = self._values.get("launch_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: The parameters of the flow.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property template: The template of the flow.'''
        result = self._values.get("template")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateId: The ID of the template.'''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IChatbot")
class IChatbot(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Chatbot``.'''

    @builtins.property
    @jsii.member(jsii_name="attrChatbotId")
    def attr_chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotId: The ID of the chatbot.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotProps:
        ...


class _IChatbotProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Chatbot``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IChatbot"

    @builtins.property
    @jsii.member(jsii_name="attrChatbotId")
    def attr_chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotId: The ID of the chatbot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChatbotId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotProps:
        return typing.cast(ChatbotProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IChatbot).__jsii_proxy_class__ = lambda : _IChatbotProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IChatbotFlow")
class IChatbotFlow(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ChatbotFlow``.'''

    @builtins.property
    @jsii.member(jsii_name="attrChatbotFlowId")
    def attr_chatbot_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotFlowId: The ID of the chatbot flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotFlowProps:
        ...


class _IChatbotFlowProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ChatbotFlow``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IChatbotFlow"

    @builtins.property
    @jsii.member(jsii_name="attrChatbotFlowId")
    def attr_chatbot_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotFlowId: The ID of the chatbot flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChatbotFlowId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotFlowProps:
        return typing.cast(ChatbotFlowProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IChatbotFlow).__jsii_proxy_class__ = lambda : _IChatbotFlowProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IChatbotModel")
class IChatbotModel(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ChatbotModel``.'''

    @builtins.property
    @jsii.member(jsii_name="attrChatbotModelId")
    def attr_chatbot_model_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotModelId: The ID of the chatbot model.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotModelProps:
        ...


class _IChatbotModelProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ChatbotModel``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IChatbotModel"

    @builtins.property
    @jsii.member(jsii_name="attrChatbotModelId")
    def attr_chatbot_model_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotModelId: The ID of the chatbot model.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChatbotModelId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotModelProps:
        return typing.cast(ChatbotModelProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IChatbotModel).__jsii_proxy_class__ = lambda : _IChatbotModelProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IFlow")
class IFlow(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Flow``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FlowId: The ID of the flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WebhookAddress: The webhook address of the flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FlowProps:
        ...


class _IFlowProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Flow``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IFlow"

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FlowId: The ID of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WebhookAddress: The webhook address of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWebhookAddress"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FlowProps:
        return typing.cast(FlowProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFlow).__jsii_proxy_class__ = lambda : _IFlowProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.IUserAuthConfig")
class IUserAuthConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserAuthConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfig: AuthConfig.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigId: The id of the config.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigProps":
        ...


class _IUserAuthConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserAuthConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.IUserAuthConfig"

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfig: AuthConfig.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigId: The id of the config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigProps":
        return typing.cast("UserAuthConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserAuthConfig).__jsii_proxy_class__ = lambda : _IUserAuthConfigProxy


class RosChatbot(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosChatbot",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::Chatbot``The , which resource is used to create a chatbot.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Chatbot`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosChatbotProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a32947d26797b87cc4ab282725ed3733ea0c5ffebb6ce0f70674b1c3848fdad2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d55757e46c3eca26bdbe78c1390c4015f5253319d861f7a9aac2ac43d75a1d01)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrChatbotId")
    def attr_chatbot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChatbotId: The ID of the chatbot.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChatbotId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chatbotName")
    def chatbot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chatbotName: The name of the chatbot.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chatbotName"))

    @chatbot_name.setter
    def chatbot_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23457748f8f4b285d12e75370bda4456fb71103284b35a07c9430d82f8b49578)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chatbotName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f38131d72091987e2d19c4b5d0216225edb38dbff1532267b59ef277983f1ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="chatbotConfig")
    def chatbot_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ChatbotConfigProperty"]]:
        '''
        :Property: chatbotConfig: AI assistant configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ChatbotConfigProperty"]], jsii.get(self, "chatbotConfig"))

    @chatbot_config.setter
    def chatbot_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ChatbotConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__579e63c8044db5a0d8a7eb20a6be554671857f2c7ab17f859dcc129f88ca9533)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chatbotConfig", value)

    @builtins.property
    @jsii.member(jsii_name="chatbotDesc")
    def chatbot_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chatbotDesc: The description of the chatbot.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chatbotDesc"))

    @chatbot_desc.setter
    def chatbot_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45610628a6bb65022b60961050997103598a9ae0ad9b0d151268f46f62c1555b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chatbotDesc", value)

    @builtins.property
    @jsii.member(jsii_name="chatbotIcon")
    def chatbot_icon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chatbotIcon: The icon of the chatbot.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chatbotIcon"))

    @chatbot_icon.setter
    def chatbot_icon(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__501c60d8831271874c860ce6d6a0aadebc427308191909733e1cb84769202e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chatbotIcon", value)

    @builtins.property
    @jsii.member(jsii_name="from")
    def from_(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: from: The source of the request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "from"))

    @from_.setter
    def from_(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3bf1deb16561c4819514a13e885b59e9440dc023b61f9300f04b701e38c1870)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "from", value)

    @builtins.property
    @jsii.member(jsii_name="templateId")
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the chatbot template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateId"))

    @template_id.setter
    def template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__519bfa682d6c7e547844b95a05e9f8ed2db4b81c974cc9b2f95cef1518a569ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-appflow.RosChatbot.ChatbotConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"config": "config", "welcome": "welcome"},
    )
    class ChatbotConfigProperty:
        def __init__(
            self,
            *,
            config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosChatbot.ConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            welcome: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param config: 
            :param welcome: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d0ca5faf32856973f71e443d3f39a59a524fc044ee916dcd3891b17f07cf834b)
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument welcome", value=welcome, expected_type=type_hints["welcome"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if config is not None:
                self._values["config"] = config
            if welcome is not None:
                self._values["welcome"] = welcome

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ConfigProperty"]]:
            '''
            :Property: config: AI assistant configuration.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.ConfigProperty"]], result)

        @builtins.property
        def welcome(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: welcome: Welcome message for the chatbot.
            '''
            result = self._values.get("welcome")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ChatbotConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-appflow.RosChatbot.ConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "history_count": "historyCount",
            "input": "input",
            "prompt": "prompt",
            "questions": "questions",
            "show_document_reference": "showDocumentReference",
            "sls_log_enabled": "slsLogEnabled",
            "sls_project_info": "slsProjectInfo",
        },
    )
    class ConfigProperty:
        def __init__(
            self,
            *,
            history_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            input: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            prompt: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            questions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            show_document_reference: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sls_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sls_project_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosChatbot.SlsProjectInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param history_count: 
            :param input: 
            :param prompt: 
            :param questions: 
            :param show_document_reference: 
            :param sls_log_enabled: 
            :param sls_project_info: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__53052b6708d2f19181ae3e82571ef1a88a92c594ff4d2fe218059390d7129567)
                check_type(argname="argument history_count", value=history_count, expected_type=type_hints["history_count"])
                check_type(argname="argument input", value=input, expected_type=type_hints["input"])
                check_type(argname="argument prompt", value=prompt, expected_type=type_hints["prompt"])
                check_type(argname="argument questions", value=questions, expected_type=type_hints["questions"])
                check_type(argname="argument show_document_reference", value=show_document_reference, expected_type=type_hints["show_document_reference"])
                check_type(argname="argument sls_log_enabled", value=sls_log_enabled, expected_type=type_hints["sls_log_enabled"])
                check_type(argname="argument sls_project_info", value=sls_project_info, expected_type=type_hints["sls_project_info"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if history_count is not None:
                self._values["history_count"] = history_count
            if input is not None:
                self._values["input"] = input
            if prompt is not None:
                self._values["prompt"] = prompt
            if questions is not None:
                self._values["questions"] = questions
            if show_document_reference is not None:
                self._values["show_document_reference"] = show_document_reference
            if sls_log_enabled is not None:
                self._values["sls_log_enabled"] = sls_log_enabled
            if sls_project_info is not None:
                self._values["sls_project_info"] = sls_project_info

        @builtins.property
        def history_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: historyCount: Number of context messages to retain.
            '''
            result = self._values.get("history_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def input(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: input: Placeholder text for the input box.
            '''
            result = self._values.get("input")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def prompt(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: prompt: Dialogue context or background prompt.
            '''
            result = self._values.get("prompt")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def questions(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: questions: Predefined questions for the chatbot.
            '''
            result = self._values.get("questions")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def show_document_reference(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: showDocumentReference: Whether to show document references.
            '''
            result = self._values.get("show_document_reference")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sls_log_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slsLogEnabled: Whether SLS logging is enabled.
            '''
            result = self._values.get("sls_log_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sls_project_info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.SlsProjectInfoProperty"]]:
            '''
            :Property: slsProjectInfo: SLS project configuration information.
            '''
            result = self._values.get("sls_project_info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosChatbot.SlsProjectInfoProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-appflow.RosChatbot.SlsProjectInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "log_store_name": "logStoreName",
            "project_name": "projectName",
            "region_id": "regionId",
        },
    )
    class SlsProjectInfoProperty:
        def __init__(
            self,
            *,
            log_store_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param log_store_name: 
            :param project_name: 
            :param region_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__15ad7c8b3c2724c39975dc1f48ed20f91bd8448ba2cc216eb4944d6b432acc6b)
                check_type(argname="argument log_store_name", value=log_store_name, expected_type=type_hints["log_store_name"])
                check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if log_store_name is not None:
                self._values["log_store_name"] = log_store_name
            if project_name is not None:
                self._values["project_name"] = project_name
            if region_id is not None:
                self._values["region_id"] = region_id

        @builtins.property
        def log_store_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logStoreName: SLS logstore name.
            '''
            result = self._values.get("log_store_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def project_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: projectName: SLS project name.
            '''
            result = self._values.get("project_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: regionId: Region ID for the SLS project.
            '''
            result = self._values.get("region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SlsProjectInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosChatbotFlow(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosChatbotFlow",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::ChatbotFlow``The , which type is used to create a chatbot flow.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ChatbotFlow`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosChatbotFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad89773a0e3dac0bb2318e27b3b8117daa7fcc75111c8b3cf2a7e5c5ffd847ae)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bbb5693e393f76ab629c1f572b7f6e553d0c328da6ce56cdef7ad5c0a4288c13)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrChatbotFlowId")
    def attr_chatbot_flow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChatbotFlowId: The ID of the chatbot flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChatbotFlowId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chatbotId")
    def chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chatbotId: The ID of the chatbot.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chatbotId"))

    @chatbot_id.setter
    def chatbot_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df7b6f50c72a0ff477c665eb2063f7bf48bbd7828f1c7602945eeaf12ab8184d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chatbotId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fafeb020d0560a098079b64c82753afc65cdcfba870d241a631760d4f3a21b9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowConfig")
    def flow_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: flowConfig: The config of the chatbot flow.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "flowConfig"))

    @flow_config.setter
    def flow_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1109b8126531319225bb374c39d007136ed1b17116e1c78319d255b676054f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowConfig", value)

    @builtins.property
    @jsii.member(jsii_name="flowName")
    def flow_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowName: The name of the chatbot flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowName"))

    @flow_name.setter
    def flow_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e16ed95feb55203763c0b747c300755b18ec27edd124b414f3d26cecc7fce64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowName", value)

    @builtins.property
    @jsii.member(jsii_name="flowType")
    def flow_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowType: The type of the chatbot flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowType"))

    @flow_type.setter
    def flow_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dd2ba6b289ad58e0df1ed80a2ff46ed011d1f5dc6fe0ac3d12054ae438ac533)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosChatbotFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "chatbot_id": "chatbotId",
        "flow_config": "flowConfig",
        "flow_name": "flowName",
        "flow_type": "flowType",
    },
)
class RosChatbotFlowProps:
    def __init__(
        self,
        *,
        chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        flow_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosChatbotFlow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow

        :param chatbot_id: 
        :param flow_config: 
        :param flow_name: 
        :param flow_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__667c3779e78bc078aea7f322b096cd867abd59fe3d362c1e392e4fedf87dea32)
            check_type(argname="argument chatbot_id", value=chatbot_id, expected_type=type_hints["chatbot_id"])
            check_type(argname="argument flow_config", value=flow_config, expected_type=type_hints["flow_config"])
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
            check_type(argname="argument flow_type", value=flow_type, expected_type=type_hints["flow_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chatbot_id": chatbot_id,
        }
        if flow_config is not None:
            self._values["flow_config"] = flow_config
        if flow_name is not None:
            self._values["flow_name"] = flow_name
        if flow_type is not None:
            self._values["flow_type"] = flow_type

    @builtins.property
    def chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chatbotId: The ID of the chatbot.
        '''
        result = self._values.get("chatbot_id")
        assert result is not None, "Required property 'chatbot_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: flowConfig: The config of the chatbot flow.
        '''
        result = self._values.get("flow_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowName: The name of the chatbot flow.
        '''
        result = self._values.get("flow_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowType: The type of the chatbot flow.
        '''
        result = self._values.get("flow_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosChatbotFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosChatbotModel(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosChatbotModel",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::ChatbotModel``The , which is used to create a chatbot model.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ChatbotModel`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosChatbotModelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8851e6cb4141ba46f7c199e7c75fd5ab0ca9548ea77054f85a488bd836de9ef5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b937916bb8d5cc9a8b4f570fbdf42a92ef985c54de7675cc289470091fc99cc7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrChatbotModelId")
    def attr_chatbot_model_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChatbotModelId: The ID of the chatbot model.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChatbotModelId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chatbotId")
    def chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chatbotId: The ID of the chatbot.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chatbotId"))

    @chatbot_id.setter
    def chatbot_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ddd5538eee326c6f0a37cd3e78821ab8159fe069060fd22ac67b741ac361eeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chatbotId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a256e37e3ceeeba235cfacf8269fac00aeaa46d6af97259545302e34eff13212)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="modelActionId")
    def model_action_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: modelActionId: The ID of the model action.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "modelActionId"))

    @model_action_id.setter
    def model_action_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__211e8114945badcd62b3736464340d01066816870ed056ec9c03424819fa84ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modelActionId", value)

    @builtins.property
    @jsii.member(jsii_name="modelId")
    def model_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: modelId: The ID of the model.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "modelId"))

    @model_id.setter
    def model_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__485464ed884b95614bc7511067e48efd06353d3663bf6133bbda2b56dcff607c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modelId", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters of the model.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__687e7daf4816e76a931bfaccbc2824addc1f873550e96e1e9a1383bbfcea1592)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of the model.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3f3f99efd82658e5bdb9eb4720d6dcf5cf8d44433c06a5ccf4954815a224eb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="userAuthConfigId")
    def user_auth_config_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userAuthConfigId: The ID of the user auth config.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userAuthConfigId"))

    @user_auth_config_id.setter
    def user_auth_config_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6444c98b05279cf582ad342a102d84c8371cb21f054bae38fafa07f1b866c726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userAuthConfigId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosChatbotModelProps",
    jsii_struct_bases=[],
    name_mapping={
        "chatbot_id": "chatbotId",
        "model_action_id": "modelActionId",
        "model_id": "modelId",
        "parameters": "parameters",
        "status": "status",
        "user_auth_config_id": "userAuthConfigId",
    },
)
class RosChatbotModelProps:
    def __init__(
        self,
        *,
        chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        model_action_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        model_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_auth_config_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosChatbotModel``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel

        :param chatbot_id: 
        :param model_action_id: 
        :param model_id: 
        :param parameters: 
        :param status: 
        :param user_auth_config_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9c9cba440c0bb3f0e68a7a2c1bb5d8dde30115ef1dd721e9cab30c5473c7571)
            check_type(argname="argument chatbot_id", value=chatbot_id, expected_type=type_hints["chatbot_id"])
            check_type(argname="argument model_action_id", value=model_action_id, expected_type=type_hints["model_action_id"])
            check_type(argname="argument model_id", value=model_id, expected_type=type_hints["model_id"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument user_auth_config_id", value=user_auth_config_id, expected_type=type_hints["user_auth_config_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chatbot_id": chatbot_id,
        }
        if model_action_id is not None:
            self._values["model_action_id"] = model_action_id
        if model_id is not None:
            self._values["model_id"] = model_id
        if parameters is not None:
            self._values["parameters"] = parameters
        if status is not None:
            self._values["status"] = status
        if user_auth_config_id is not None:
            self._values["user_auth_config_id"] = user_auth_config_id

    @builtins.property
    def chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chatbotId: The ID of the chatbot.
        '''
        result = self._values.get("chatbot_id")
        assert result is not None, "Required property 'chatbot_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def model_action_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: modelActionId: The ID of the model action.
        '''
        result = self._values.get("model_action_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def model_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: modelId: The ID of the model.
        '''
        result = self._values.get("model_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters of the model.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of the model.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_auth_config_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userAuthConfigId: The ID of the user auth config.
        '''
        result = self._values.get("user_auth_config_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosChatbotModelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosChatbotProps",
    jsii_struct_bases=[],
    name_mapping={
        "chatbot_name": "chatbotName",
        "chatbot_config": "chatbotConfig",
        "chatbot_desc": "chatbotDesc",
        "chatbot_icon": "chatbotIcon",
        "from_": "from",
        "template_id": "templateId",
    },
)
class RosChatbotProps:
    def __init__(
        self,
        *,
        chatbot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        chatbot_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosChatbot.ChatbotConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        chatbot_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        chatbot_icon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        from_: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosChatbot``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot

        :param chatbot_name: 
        :param chatbot_config: 
        :param chatbot_desc: 
        :param chatbot_icon: 
        :param from_: 
        :param template_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52235700358e9bc66b25d0eeeb9e74f8124174f514966d43b5997b8624db3c96)
            check_type(argname="argument chatbot_name", value=chatbot_name, expected_type=type_hints["chatbot_name"])
            check_type(argname="argument chatbot_config", value=chatbot_config, expected_type=type_hints["chatbot_config"])
            check_type(argname="argument chatbot_desc", value=chatbot_desc, expected_type=type_hints["chatbot_desc"])
            check_type(argname="argument chatbot_icon", value=chatbot_icon, expected_type=type_hints["chatbot_icon"])
            check_type(argname="argument from_", value=from_, expected_type=type_hints["from_"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chatbot_name": chatbot_name,
        }
        if chatbot_config is not None:
            self._values["chatbot_config"] = chatbot_config
        if chatbot_desc is not None:
            self._values["chatbot_desc"] = chatbot_desc
        if chatbot_icon is not None:
            self._values["chatbot_icon"] = chatbot_icon
        if from_ is not None:
            self._values["from_"] = from_
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def chatbot_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chatbotName: The name of the chatbot.
        '''
        result = self._values.get("chatbot_name")
        assert result is not None, "Required property 'chatbot_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def chatbot_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosChatbot.ChatbotConfigProperty]]:
        '''
        :Property: chatbotConfig: AI assistant configuration.
        '''
        result = self._values.get("chatbot_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosChatbot.ChatbotConfigProperty]], result)

    @builtins.property
    def chatbot_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chatbotDesc: The description of the chatbot.
        '''
        result = self._values.get("chatbot_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def chatbot_icon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chatbotIcon: The icon of the chatbot.
        '''
        result = self._values.get("chatbot_icon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def from_(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: from: The source of the request.
        '''
        result = self._values.get("from_")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the chatbot template.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosChatbotProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlow(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosFlow",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::Flow``, which is used to create a flow.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Flow`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcd5333a9fa6e20d553c18313bdc169aac29c033df792a0468e5e4bbd99d78a7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__651ce28a24b6f94576ce431f5bc0be42a2900b7b4e08217c81a4bce1f164d08d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowId: The ID of the flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WebhookAddress: The webhook address of the flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWebhookAddress"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8664815cfdd70d92c008c5819781cf479fa14c065bfd5ebf37671fda90e802da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowName")
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowName: The name of the flow.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "flowName"))

    @flow_name.setter
    def flow_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72428697193a9d015173be75b52f1aff86291ed0ccf3a2857d8b9a41569d02c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowName", value)

    @builtins.property
    @jsii.member(jsii_name="flowDesc")
    def flow_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowDesc: The description of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowDesc"))

    @flow_desc.setter
    def flow_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3e7136e35ecd7f0a2af2bd84782a1a6ed008d9730293bcbbe1c38760628397d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowDesc", value)

    @builtins.property
    @jsii.member(jsii_name="flowId")
    def flow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowId: The ID of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowId"))

    @flow_id.setter
    def flow_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79e67721d75385c46e5c3add62be32c8f4414a16fbf6a1a044714cf7b0f6b013)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowId", value)

    @builtins.property
    @jsii.member(jsii_name="flowStatus")
    def flow_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        flowStatus: The status of the flow. Allowed values:
        Enable: enable flow
        Disable: disable flow
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowStatus"))

    @flow_status.setter
    def flow_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fad93f058020a1c9bc24464ad91411a8e9276086accc6ca9463c995feda08b37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowStatus", value)

    @builtins.property
    @jsii.member(jsii_name="launchFlow")
    def launch_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: launchFlow: Whether to launch the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "launchFlow"))

    @launch_flow.setter
    def launch_flow(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a3b67e6a5af17c808201586fbce3cf955de429f3f28f18bf462fb60ceaad48e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "launchFlow", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8945f17a71bdd30b4278d5793c686b66bc4071338d255bacde51ac3e768fed51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="template")
    def template(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: template: The template of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "template"))

    @template.setter
    def template(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d758017e90d4e83d911f3e0eee862826a1e46b43e94e6687a49cd5ca8be58b2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "template", value)

    @builtins.property
    @jsii.member(jsii_name="templateId")
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateId"))

    @template_id.setter
    def template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d2d350b9421e52460931a243bd5fc57e81223ea34fdebd8328ffe321d3551fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "flow_name": "flowName",
        "flow_desc": "flowDesc",
        "flow_id": "flowId",
        "flow_status": "flowStatus",
        "launch_flow": "launchFlow",
        "parameters": "parameters",
        "template": "template",
        "template_id": "templateId",
    },
)
class RosFlowProps:
    def __init__(
        self,
        *,
        flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosFlow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow

        :param flow_name: 
        :param flow_desc: 
        :param flow_id: 
        :param flow_status: 
        :param launch_flow: 
        :param parameters: 
        :param template: 
        :param template_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98c0c3da326d201d04cdf1e4a4c3d457a6322f5a9ab19387c1f41c9983d4beca)
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
            check_type(argname="argument flow_desc", value=flow_desc, expected_type=type_hints["flow_desc"])
            check_type(argname="argument flow_id", value=flow_id, expected_type=type_hints["flow_id"])
            check_type(argname="argument flow_status", value=flow_status, expected_type=type_hints["flow_status"])
            check_type(argname="argument launch_flow", value=launch_flow, expected_type=type_hints["launch_flow"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_name": flow_name,
        }
        if flow_desc is not None:
            self._values["flow_desc"] = flow_desc
        if flow_id is not None:
            self._values["flow_id"] = flow_id
        if flow_status is not None:
            self._values["flow_status"] = flow_status
        if launch_flow is not None:
            self._values["launch_flow"] = launch_flow
        if parameters is not None:
            self._values["parameters"] = parameters
        if template is not None:
            self._values["template"] = template
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowName: The name of the flow.
        '''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowDesc: The description of the flow.
        '''
        result = self._values.get("flow_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowId: The ID of the flow.
        '''
        result = self._values.get("flow_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        flowStatus: The status of the flow. Allowed values:
        Enable: enable flow
        Disable: disable flow
        '''
        result = self._values.get("flow_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def launch_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: launchFlow: Whether to launch the flow.
        '''
        result = self._values.get("launch_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The parameters of the flow.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: template: The template of the flow.
        '''
        result = self._values.get("template")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the template.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserAuthConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.RosUserAuthConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::AppFlow::UserAuthConfig``, which is used to create configurations for a user credential.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserAuthConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserAuthConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c0c43c2700591a67e2b55928c7fe7ec4848687957aead2cc8c6894280fcef69)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6812231e4f4bc3d3c60f99c5d9935b241eaae8dbb20bc06454e4ab51cce5a326)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthConfig: AuthConfig
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthConfigId: The id of the config.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthConfigId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="authConfig")
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: authConfig: AuthConfig
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "authConfig"))

    @auth_config.setter
    def auth_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6485ece7ac65e1f7323d607489f17ef0f3f133974286bfa747d1a077e7a476e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authConfig", value)

    @builtins.property
    @jsii.member(jsii_name="authConfigName")
    def auth_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: authConfigName: The name of the config.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "authConfigName"))

    @auth_config_name.setter
    def auth_config_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce622a3b773b9138f2e1d396239df9a1f2a9939da6b290d041ef7d669ffa52bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authConfigName", value)

    @builtins.property
    @jsii.member(jsii_name="connectorId")
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectorId: The id of connector.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "connectorId"))

    @connector_id.setter
    def connector_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68d9d5f558e276e40462601db1ca0c570d892e312cf00d3ec1f6909239f4a313)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a2bd2ac881cb1cf2060f30d78f1ec8cbb00fcd08a714b4874104daf24f2a635)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.RosUserAuthConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "auth_config": "authConfig",
        "auth_config_name": "authConfigName",
        "connector_id": "connectorId",
    },
)
class RosUserAuthConfigProps:
    def __init__(
        self,
        *,
        auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosUserAuthConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig

        :param auth_config: 
        :param auth_config_name: 
        :param connector_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f38045db49f0abdaa5f44e9bd564b51f0117b8a9aa96d60a51a0fbcc21f9d0a)
            check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
            check_type(argname="argument auth_config_name", value=auth_config_name, expected_type=type_hints["auth_config_name"])
            check_type(argname="argument connector_id", value=connector_id, expected_type=type_hints["connector_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auth_config": auth_config,
            "auth_config_name": auth_config_name,
            "connector_id": connector_id,
        }

    @builtins.property
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: authConfig: AuthConfig
        '''
        result = self._values.get("auth_config")
        assert result is not None, "Required property 'auth_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def auth_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: authConfigName: The name of the config.
        '''
        result = self._values.get("auth_config_name")
        assert result is not None, "Required property 'auth_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectorId: The id of connector.
        '''
        result = self._values.get("connector_id")
        assert result is not None, "Required property 'connector_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserAuthConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserAuthConfig)
class UserAuthConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.UserAuthConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::UserAuthConfig``, which is used to create configurations for a user credential.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserAuthConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserAuthConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8b63f92d68cef999e463451c872d3d6e2bef9a96ed21ac2a115b3f09120c4b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfig")
    def attr_auth_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfig: AuthConfig.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigId")
    def attr_auth_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigId: The id of the config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigProps":
        return typing.cast("UserAuthConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__720732de9927047f1f01cf0612377c75abe6bc05da719c0da9a795eeac49e3fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4c55c5a8481755aafadd51a21ed87da7e11047542cc3a498b6d4aacbe020efe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7619ff89da479018e906ce8943f557480d593fac19dad5f619ed633a0059d1af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.UserAuthConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "auth_config": "authConfig",
        "auth_config_name": "authConfigName",
        "connector_id": "connectorId",
    },
)
class UserAuthConfigProps:
    def __init__(
        self,
        *,
        auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``UserAuthConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig

        :param auth_config: Property authConfig: AuthConfig.
        :param auth_config_name: Property authConfigName: The name of the config.
        :param connector_id: Property connectorId: The id of connector.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39ca36f67b521c4b761741147136393fee37d490608bb2df5371d5a3848755de)
            check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
            check_type(argname="argument auth_config_name", value=auth_config_name, expected_type=type_hints["auth_config_name"])
            check_type(argname="argument connector_id", value=connector_id, expected_type=type_hints["connector_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auth_config": auth_config,
            "auth_config_name": auth_config_name,
            "connector_id": connector_id,
        }

    @builtins.property
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property authConfig: AuthConfig.'''
        result = self._values.get("auth_config")
        assert result is not None, "Required property 'auth_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def auth_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property authConfigName: The name of the config.'''
        result = self._values.get("auth_config_name")
        assert result is not None, "Required property 'auth_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property connectorId: The id of connector.'''
        result = self._values.get("connector_id")
        assert result is not None, "Required property 'connector_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserAuthConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IChatbot)
class Chatbot(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.Chatbot",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::Chatbot``The , which resource is used to create a chatbot.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosChatbot``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ChatbotProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bdce29fff11ffb653546ccc3b241cffd9b5bff08b4afaddab679deb1939b21b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrChatbotId")
    def attr_chatbot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotId: The ID of the chatbot.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChatbotId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotProps:
        return typing.cast(ChatbotProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2c0b65e9e367fc9776922383d9c46d6d180b057adfae0da917321a1b62d8ea6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20967a013aa79abe37f43f688a6ed27e4839ac6a4fcace218a9f3aceb481e660)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89336338ada93919e7a504b559feb838420eb04dc7b05d96ac6fdf11542c25b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IChatbotFlow)
class ChatbotFlow(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.ChatbotFlow",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::ChatbotFlow``The , which type is used to create a chatbot flow.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosChatbotFlow``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ChatbotFlowProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80a78ca981d7f45dc7d690d8c01080e3812d2457990f349c2a57b3cfb9e730f8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrChatbotFlowId")
    def attr_chatbot_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotFlowId: The ID of the chatbot flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChatbotFlowId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotFlowProps:
        return typing.cast(ChatbotFlowProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64852a4ca7aca73f5defada878b80605595f8e312708a9bb2516c050f2efebbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__860e99cff7692f77fb128837577f6b2efe3ca638f4c05e6732a4b2b83f76f860)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8592b356c60759bcf0ae94bba08b73653098d7443a97f13de14035614653189d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IChatbotModel)
class ChatbotModel(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.ChatbotModel",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::ChatbotModel``The , which is used to create a chatbot model.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosChatbotModel``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ChatbotModelProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c4341369dd27096bcc42227249d9006e5c2ecee253cf78bf8f4a50f3f316e9d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrChatbotModelId")
    def attr_chatbot_model_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ChatbotModelId: The ID of the chatbot model.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrChatbotModelId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ChatbotModelProps:
        return typing.cast(ChatbotModelProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c4226bdcb9439777558a0724be17fc30188fca9639259c072d4a2215f7db6bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f80aa103ae33bf22a41c8ad53141ef5482116f8510cda3b94ec7aafbc9d1e83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b898c819c8d60b598b5f82cab05bf7b5c7b44ba01baa28c864402a56519756d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IFlow)
class Flow(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.Flow",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::AppFlow::Flow``, which is used to create a flow.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFlow``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[FlowProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a80fc969bbc367ba0486e1fe7c600010709648b686a33360731c9d018dd637a6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFlowId")
    def attr_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FlowId: The ID of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWebhookAddress")
    def attr_webhook_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WebhookAddress: The webhook address of the flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWebhookAddress"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FlowProps:
        return typing.cast(FlowProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89a4c16e8a56f543541fa9ee41d7710faffb145961c811288730007e03e6be9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d206d83ce2aade18f68edb30c48145d221a84b72c1da05e139209aaf3173f20d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0290c16b153c11940f44cbccf58e1cb97cf188f65045544f2c47f1fb9c434183)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Chatbot",
    "ChatbotFlow",
    "ChatbotFlowProps",
    "ChatbotModel",
    "ChatbotModelProps",
    "ChatbotProps",
    "Flow",
    "FlowProps",
    "IChatbot",
    "IChatbotFlow",
    "IChatbotModel",
    "IFlow",
    "IUserAuthConfig",
    "RosChatbot",
    "RosChatbotFlow",
    "RosChatbotFlowProps",
    "RosChatbotModel",
    "RosChatbotModelProps",
    "RosChatbotProps",
    "RosFlow",
    "RosFlowProps",
    "RosUserAuthConfig",
    "RosUserAuthConfigProps",
    "UserAuthConfig",
    "UserAuthConfigProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__8267be8dc56dac35aeaf4125c204f4e6741cf3ee42a5a69e4bdfe5a2074bdc24(
    *,
    chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    flow_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfb3f78aaa8e599f3aea3ec9c4eb16360d528a6c40556898603b241294b0bbf7(
    *,
    chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    model_action_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    model_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_auth_config_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07299a7e2cca8217cff79fb077ed920b8289f9790b30910f90ed26a700bf601f(
    *,
    chatbot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    chatbot_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosChatbot.ChatbotConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    chatbot_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    chatbot_icon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    from_: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bf8478ab424bf238e522a89500f2a35e0bb210265d3040ed7fad06d98ecb6d5(
    *,
    flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a32947d26797b87cc4ab282725ed3733ea0c5ffebb6ce0f70674b1c3848fdad2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosChatbotProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d55757e46c3eca26bdbe78c1390c4015f5253319d861f7a9aac2ac43d75a1d01(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23457748f8f4b285d12e75370bda4456fb71103284b35a07c9430d82f8b49578(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f38131d72091987e2d19c4b5d0216225edb38dbff1532267b59ef277983f1ca(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__579e63c8044db5a0d8a7eb20a6be554671857f2c7ab17f859dcc129f88ca9533(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosChatbot.ChatbotConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45610628a6bb65022b60961050997103598a9ae0ad9b0d151268f46f62c1555b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__501c60d8831271874c860ce6d6a0aadebc427308191909733e1cb84769202e72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3bf1deb16561c4819514a13e885b59e9440dc023b61f9300f04b701e38c1870(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__519bfa682d6c7e547844b95a05e9f8ed2db4b81c974cc9b2f95cef1518a569ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0ca5faf32856973f71e443d3f39a59a524fc044ee916dcd3891b17f07cf834b(
    *,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosChatbot.ConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    welcome: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53052b6708d2f19181ae3e82571ef1a88a92c594ff4d2fe218059390d7129567(
    *,
    history_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prompt: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    questions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    show_document_reference: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_project_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosChatbot.SlsProjectInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15ad7c8b3c2724c39975dc1f48ed20f91bd8448ba2cc216eb4944d6b432acc6b(
    *,
    log_store_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad89773a0e3dac0bb2318e27b3b8117daa7fcc75111c8b3cf2a7e5c5ffd847ae(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosChatbotFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbb5693e393f76ab629c1f572b7f6e553d0c328da6ce56cdef7ad5c0a4288c13(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df7b6f50c72a0ff477c665eb2063f7bf48bbd7828f1c7602945eeaf12ab8184d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fafeb020d0560a098079b64c82753afc65cdcfba870d241a631760d4f3a21b9c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1109b8126531319225bb374c39d007136ed1b17116e1c78319d255b676054f9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e16ed95feb55203763c0b747c300755b18ec27edd124b414f3d26cecc7fce64(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dd2ba6b289ad58e0df1ed80a2ff46ed011d1f5dc6fe0ac3d12054ae438ac533(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__667c3779e78bc078aea7f322b096cd867abd59fe3d362c1e392e4fedf87dea32(
    *,
    chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    flow_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8851e6cb4141ba46f7c199e7c75fd5ab0ca9548ea77054f85a488bd836de9ef5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosChatbotModelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b937916bb8d5cc9a8b4f570fbdf42a92ef985c54de7675cc289470091fc99cc7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ddd5538eee326c6f0a37cd3e78821ab8159fe069060fd22ac67b741ac361eeb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a256e37e3ceeeba235cfacf8269fac00aeaa46d6af97259545302e34eff13212(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__211e8114945badcd62b3736464340d01066816870ed056ec9c03424819fa84ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__485464ed884b95614bc7511067e48efd06353d3663bf6133bbda2b56dcff607c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__687e7daf4816e76a931bfaccbc2824addc1f873550e96e1e9a1383bbfcea1592(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3f3f99efd82658e5bdb9eb4720d6dcf5cf8d44433c06a5ccf4954815a224eb3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6444c98b05279cf582ad342a102d84c8371cb21f054bae38fafa07f1b866c726(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9c9cba440c0bb3f0e68a7a2c1bb5d8dde30115ef1dd721e9cab30c5473c7571(
    *,
    chatbot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    model_action_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    model_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_auth_config_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52235700358e9bc66b25d0eeeb9e74f8124174f514966d43b5997b8624db3c96(
    *,
    chatbot_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    chatbot_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosChatbot.ChatbotConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    chatbot_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    chatbot_icon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    from_: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcd5333a9fa6e20d553c18313bdc169aac29c033df792a0468e5e4bbd99d78a7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__651ce28a24b6f94576ce431f5bc0be42a2900b7b4e08217c81a4bce1f164d08d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8664815cfdd70d92c008c5819781cf479fa14c065bfd5ebf37671fda90e802da(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72428697193a9d015173be75b52f1aff86291ed0ccf3a2857d8b9a41569d02c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3e7136e35ecd7f0a2af2bd84782a1a6ed008d9730293bcbbe1c38760628397d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79e67721d75385c46e5c3add62be32c8f4414a16fbf6a1a044714cf7b0f6b013(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fad93f058020a1c9bc24464ad91411a8e9276086accc6ca9463c995feda08b37(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a3b67e6a5af17c808201586fbce3cf955de429f3f28f18bf462fb60ceaad48e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8945f17a71bdd30b4278d5793c686b66bc4071338d255bacde51ac3e768fed51(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d758017e90d4e83d911f3e0eee862826a1e46b43e94e6687a49cd5ca8be58b2a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d2d350b9421e52460931a243bd5fc57e81223ea34fdebd8328ffe321d3551fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c0c3da326d201d04cdf1e4a4c3d457a6322f5a9ab19387c1f41c9983d4beca(
    *,
    flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    launch_flow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c0c43c2700591a67e2b55928c7fe7ec4848687957aead2cc8c6894280fcef69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserAuthConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6812231e4f4bc3d3c60f99c5d9935b241eaae8dbb20bc06454e4ab51cce5a326(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6485ece7ac65e1f7323d607489f17ef0f3f133974286bfa747d1a077e7a476e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce622a3b773b9138f2e1d396239df9a1f2a9939da6b290d041ef7d669ffa52bf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68d9d5f558e276e40462601db1ca0c570d892e312cf00d3ec1f6909239f4a313(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a2bd2ac881cb1cf2060f30d78f1ec8cbb00fcd08a714b4874104daf24f2a635(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f38045db49f0abdaa5f44e9bd564b51f0117b8a9aa96d60a51a0fbcc21f9d0a(
    *,
    auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8b63f92d68cef999e463451c872d3d6e2bef9a96ed21ac2a115b3f09120c4b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserAuthConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__720732de9927047f1f01cf0612377c75abe6bc05da719c0da9a795eeac49e3fa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4c55c5a8481755aafadd51a21ed87da7e11047542cc3a498b6d4aacbe020efe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7619ff89da479018e906ce8943f557480d593fac19dad5f619ed633a0059d1af(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39ca36f67b521c4b761741147136393fee37d490608bb2df5371d5a3848755de(
    *,
    auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    auth_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bdce29fff11ffb653546ccc3b241cffd9b5bff08b4afaddab679deb1939b21b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ChatbotProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2c0b65e9e367fc9776922383d9c46d6d180b057adfae0da917321a1b62d8ea6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20967a013aa79abe37f43f688a6ed27e4839ac6a4fcace218a9f3aceb481e660(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89336338ada93919e7a504b559feb838420eb04dc7b05d96ac6fdf11542c25b6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80a78ca981d7f45dc7d690d8c01080e3812d2457990f349c2a57b3cfb9e730f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ChatbotFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64852a4ca7aca73f5defada878b80605595f8e312708a9bb2516c050f2efebbb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__860e99cff7692f77fb128837577f6b2efe3ca638f4c05e6732a4b2b83f76f860(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8592b356c60759bcf0ae94bba08b73653098d7443a97f13de14035614653189d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c4341369dd27096bcc42227249d9006e5c2ecee253cf78bf8f4a50f3f316e9d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ChatbotModelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c4226bdcb9439777558a0724be17fc30188fca9639259c072d4a2215f7db6bf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f80aa103ae33bf22a41c8ad53141ef5482116f8510cda3b94ec7aafbc9d1e83(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b898c819c8d60b598b5f82cab05bf7b5c7b44ba01baa28c864402a56519756d5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a80fc969bbc367ba0486e1fe7c600010709648b686a33360731c9d018dd637a6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89a4c16e8a56f543541fa9ee41d7710faffb145961c811288730007e03e6be9d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d206d83ce2aade18f68edb30c48145d221a84b72c1da05e139209aaf3173f20d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0290c16b153c11940f44cbccf58e1cb97cf188f65045544f2c47f1fb9c434183(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
