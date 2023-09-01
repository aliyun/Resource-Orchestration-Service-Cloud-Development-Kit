'''
## Aliyun ROS VOD Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as VOD from '@alicloud/ros-cdk-vod';
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


class EditingProject(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.EditingProject",
):
    '''A ROS resource type:  ``ALIYUN::VOD::EditingProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EditingProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::EditingProject``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30b7f74220d51fcefce567c396721c4d94e3a0c75fb654513d9994a53841069b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the online editing project was created.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectId")
    def attr_editing_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EditingProjectId: The ID of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectName")
    def attr_editing_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EditingProjectName: The name of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ModifiedTime: The last time when the online editing project was modified.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeline")
    def attr_timeline(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Timeline: The timeline of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeline"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Title: The title of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTitle"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.EditingProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "title": "title",
        "editing_project_name": "editingProjectName",
        "timeline": "timeline",
    },
)
class EditingProjectProps:
    def __init__(
        self,
        *,
        title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::EditingProject``.

        :param title: Property title: The title of the online editing project.
        :param editing_project_name: Property editingProjectName: The name of the online editing project.
        :param timeline: Property timeline: The timeline of the online editing project, in JSON format. If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99e72de491d07826d047b16c0c505c51dfbf3dd4106b5f6ba0ee7da74f5355e)
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument editing_project_name", value=editing_project_name, expected_type=type_hints["editing_project_name"])
            check_type(argname="argument timeline", value=timeline, expected_type=type_hints["timeline"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "title": title,
        }
        if editing_project_name is not None:
            self._values["editing_project_name"] = editing_project_name
        if timeline is not None:
            self._values["timeline"] = timeline

    @builtins.property
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property title: The title of the online editing project.'''
        result = self._values.get("title")
        assert result is not None, "Required property 'title' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def editing_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property editingProjectName: The name of the online editing project.'''
        result = self._values.get("editing_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeline(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeline: The timeline of the online editing project, in JSON format.

        If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        result = self._values.get("timeline")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EditingProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MessageCallback(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.MessageCallback",
):
    '''A ROS resource type:  ``ALIYUN::VOD::MessageCallback``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MessageCallbackProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::MessageCallback``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__501ab2f6d09cf638d7290fb5abacc2debc5ec5b36bb6497eb1574cd4e8ccf018)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppId: appid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthKey")
    def attr_auth_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AuthKey: auth key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthKey"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthSwitch")
    def attr_auth_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AuthSwitch: auth swith.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackType")
    def attr_callback_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CallbackType: callback type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackType"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackUrl")
    def attr_callback_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CallbackUrl: url.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrEventTypeList")
    def attr_event_type_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EventTypeList: event type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventTypeList"))

    @builtins.property
    @jsii.member(jsii_name="attrMnsEndpoint")
    def attr_mns_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MnsEndpoint: mns endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMnsEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrMnsQueueName")
    def attr_mns_queue_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MnsQueueName: queue name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMnsQueueName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.MessageCallbackProps",
    jsii_struct_bases=[],
    name_mapping={
        "callback_type": "callbackType",
        "app_id": "appId",
        "auth_key": "authKey",
        "auth_switch": "authSwitch",
        "callback_url": "callbackUrl",
        "event_type_list": "eventTypeList",
        "mns_endpoint": "mnsEndpoint",
        "mns_queue_name": "mnsQueueName",
    },
)
class MessageCallbackProps:
    def __init__(
        self,
        *,
        callback_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        callback_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event_type_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mns_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mns_queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::MessageCallback``.

        :param callback_type: Property callbackType: Callback method.
        :param app_id: Property appId: App ID. If it is not passed, it is the ID of the default application of the system, with a fixed value: app-1000000.
        :param auth_key: Property authKey: Authentication Key, up to 32 characters, must contain both uppercase and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
        :param auth_switch: Property authSwitch: The authentication switch of the HTTP callback, this parameter is valid when the callback method is set to HTTP.
        :param callback_url: Property callbackUrl: Callback address. When the callback method is HTTP, this parameter needs to be set. The length of the callback address URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
        :param event_type_list: Property eventTypeList: Callback event type. When the value is empty, all message notifications are turned off, and when the value is ALL, all message notifications are turned on. You can also specify to enable certain message notifications, and use a comma (,) to separate multiple event types.
        :param mns_endpoint: Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the message queue public network endpoint. You can log in to the message service console and click the Get Endpoint button in the upper right corner to get it.
        :param mns_queue_name: Property mnsQueueName: The name of the message queue, which can be viewed in the queue list by logging in to the message service console. When the callback method is MNS, this parameter needs to be set.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26c638d0d6673522e83bab65c7e4ef5ed87e62b83cfc0b7fc2ba3b8916718022)
            check_type(argname="argument callback_type", value=callback_type, expected_type=type_hints["callback_type"])
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument auth_key", value=auth_key, expected_type=type_hints["auth_key"])
            check_type(argname="argument auth_switch", value=auth_switch, expected_type=type_hints["auth_switch"])
            check_type(argname="argument callback_url", value=callback_url, expected_type=type_hints["callback_url"])
            check_type(argname="argument event_type_list", value=event_type_list, expected_type=type_hints["event_type_list"])
            check_type(argname="argument mns_endpoint", value=mns_endpoint, expected_type=type_hints["mns_endpoint"])
            check_type(argname="argument mns_queue_name", value=mns_queue_name, expected_type=type_hints["mns_queue_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "callback_type": callback_type,
        }
        if app_id is not None:
            self._values["app_id"] = app_id
        if auth_key is not None:
            self._values["auth_key"] = auth_key
        if auth_switch is not None:
            self._values["auth_switch"] = auth_switch
        if callback_url is not None:
            self._values["callback_url"] = callback_url
        if event_type_list is not None:
            self._values["event_type_list"] = event_type_list
        if mns_endpoint is not None:
            self._values["mns_endpoint"] = mns_endpoint
        if mns_queue_name is not None:
            self._values["mns_queue_name"] = mns_queue_name

    @builtins.property
    def callback_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property callbackType: Callback method.'''
        result = self._values.get("callback_type")
        assert result is not None, "Required property 'callback_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appId: App ID.

        If it is not passed, it is the ID of the default
        application of the system, with a fixed value: app-1000000.
        '''
        result = self._values.get("app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.

        This parameter can be set when the callback method is HTTP.
        '''
        result = self._values.get("auth_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.'''
        result = self._values.get("auth_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def callback_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property callbackUrl: Callback address.

        When the callback method is HTTP,
        this parameter needs to be set. The length of the callback address
        URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
        '''
        result = self._values.get("callback_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event_type_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eventTypeList: Callback event type.

        When the value is empty, all message notifications are turned off,
        and when the value is ALL, all message notifications are turned on.
        You can also specify to enable certain message notifications,
        and use a comma (,) to separate multiple event types.
        '''
        result = self._values.get("event_type_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mns_endpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.

        You can log in to the message service
        console and click the Get Endpoint button in the upper right corner to get it.
        '''
        result = self._values.get("mns_endpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mns_queue_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.

        When the callback method is MNS, this parameter needs to be set.
        '''
        result = self._values.get("mns_queue_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MessageCallbackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEditingProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.RosEditingProject",
):
    '''A ROS template type:  ``ALIYUN::VOD::EditingProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEditingProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::EditingProject``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a351947cf3f0f01edcdd8373f2db3008e418f645776c6aec08ed0a41e4d6211c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d6123df0b6e19e51a26f647b00dff7a12937fb825ceb069c026306b46a3ee4fd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        CreateTime: The time when the online editing project was created.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectId")
    def attr_editing_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EditingProjectId: The ID of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectName")
    def attr_editing_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EditingProjectName: The name of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ModifiedTime: The last time when the online editing project was modified.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeline")
    def attr_timeline(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Timeline: The timeline of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeline"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Title: The title of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTitle"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3ce6d4f4a1078ed3f3fb2e1de7df36c1821e1649d37ca2fcfc1b43edc471274c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="title")
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: title: The title of the online editing project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "title"))

    @title.setter
    def title(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15da52f83161e71e04b797ca2624e84686f67e2c9f57ffa980b4e1fd4c30cea2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "title", value)

    @builtins.property
    @jsii.member(jsii_name="editingProjectName")
    def editing_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: editingProjectName: The name of the online editing project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "editingProjectName"))

    @editing_project_name.setter
    def editing_project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__185859f14e725b4f87fcfbde5887f0083c4a0664a36f2f20979bc509f5ce812c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "editingProjectName", value)

    @builtins.property
    @jsii.member(jsii_name="timeline")
    def timeline(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        timeline: The timeline of the online editing project, in JSON format.
        If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeline"))

    @timeline.setter
    def timeline(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b640779a4e44fed0e5a1de0709578f4f15a7285aead96270692fb004c0d211a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeline", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.RosEditingProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "title": "title",
        "editing_project_name": "editingProjectName",
        "timeline": "timeline",
    },
)
class RosEditingProjectProps:
    def __init__(
        self,
        *,
        title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::EditingProject``.

        :param title: 
        :param editing_project_name: 
        :param timeline: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbb0cbda62c44105bfa4940abf7f44377ccdc5930fa3e3b8adc5138ae92fc5df)
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument editing_project_name", value=editing_project_name, expected_type=type_hints["editing_project_name"])
            check_type(argname="argument timeline", value=timeline, expected_type=type_hints["timeline"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "title": title,
        }
        if editing_project_name is not None:
            self._values["editing_project_name"] = editing_project_name
        if timeline is not None:
            self._values["timeline"] = timeline

    @builtins.property
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: title: The title of the online editing project.
        '''
        result = self._values.get("title")
        assert result is not None, "Required property 'title' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def editing_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: editingProjectName: The name of the online editing project.
        '''
        result = self._values.get("editing_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeline(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        timeline: The timeline of the online editing project, in JSON format.
        If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        result = self._values.get("timeline")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEditingProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMessageCallback(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.RosMessageCallback",
):
    '''A ROS template type:  ``ALIYUN::VOD::MessageCallback``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMessageCallbackProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::MessageCallback``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34f83fc7040a54f9198c4aeb1ed1cc83dd857d470200744bd317b0df44fffa2f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a3bd73f7018fa727559a35e977b90497edce4a5c44f8059924c4d19b176f9132)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppId: appid.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthKey")
    def attr_auth_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthKey: auth key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthKey"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthSwitch")
    def attr_auth_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthSwitch: auth swith.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackType")
    def attr_callback_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackType: callback type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackType"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackUrl")
    def attr_callback_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackUrl: url.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrEventTypeList")
    def attr_event_type_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventTypeList: event type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventTypeList"))

    @builtins.property
    @jsii.member(jsii_name="attrMnsEndpoint")
    def attr_mns_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MnsEndpoint: mns endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMnsEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrMnsQueueName")
    def attr_mns_queue_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MnsQueueName: queue name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMnsQueueName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="callbackType")
    def callback_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: callbackType: Callback method.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "callbackType"))

    @callback_type.setter
    def callback_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30d9ce8d15661fe9b1f794088a100caa45fe880d97f3847da1ef833d3454e177)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fedde39e9cd4617a134d166ae9ea7c5e2aea7b08cf4d4d4e1e65e31e03f81841)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="appId")
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        appId: App ID. If it is not passed, it is the ID of the default
        application of the system, with a fixed value: app-1000000.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__428c447bf2d9f4136545ce4c72d627a92abc0f51a6b80d7418413a0b85f113c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appId", value)

    @builtins.property
    @jsii.member(jsii_name="authKey")
    def auth_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        authKey: Authentication Key, up to 32 characters, must contain both uppercase
        and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authKey"))

    @auth_key.setter
    def auth_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4280999e5c8c9116e32d7f27e46e2f2eeeb7fa838754c2fc25982f13770abe53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authKey", value)

    @builtins.property
    @jsii.member(jsii_name="authSwitch")
    def auth_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        authSwitch: The authentication switch of the HTTP callback,
        this parameter is valid when the callback method is set to HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authSwitch"))

    @auth_switch.setter
    def auth_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d3e5a256dbb7c95b69129fab9f6b73ef065a8cd59a8910664227a19a09da4e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="callbackUrl")
    def callback_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        callbackUrl: Callback address. When the callback method is HTTP,
        this parameter needs to be set. The length of the callback address
        URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "callbackUrl"))

    @callback_url.setter
    def callback_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f3379291b8207a58da4edf5fd966725ddf564e307af99f86bb581d91efa0fd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackUrl", value)

    @builtins.property
    @jsii.member(jsii_name="eventTypeList")
    def event_type_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eventTypeList: Callback event type. When the value is empty, all message notifications are turned off,
        and when the value is ALL, all message notifications are turned on.
        You can also specify to enable certain message notifications,
        and use a comma (,) to separate multiple event types.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eventTypeList"))

    @event_type_list.setter
    def event_type_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2b2095ce9ee0fe767a75a931ac73ad0f3628d9d4744ff6f0fc1f5386b44acd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventTypeList", value)

    @builtins.property
    @jsii.member(jsii_name="mnsEndpoint")
    def mns_endpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mnsEndpoint: This parameter needs to be set when the callback method is MNS for the
        message queue public network endpoint. You can log in to the message service
        console and click the Get Endpoint button in the upper right corner to get it.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mnsEndpoint"))

    @mns_endpoint.setter
    def mns_endpoint(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cea58ff627aa345aa3c71c08caa6db7d019c00db348efd311e394216d75f9d5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mnsEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="mnsQueueName")
    def mns_queue_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mnsQueueName: The name of the message queue, which can be viewed in the queue
        list by logging in to the message service console.
        When the callback method is MNS, this parameter needs to be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mnsQueueName"))

    @mns_queue_name.setter
    def mns_queue_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f6e393053e0dcd7ef5ec6ebdebc797a2e96cb9a08813e05b0b52db68c9fc852)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mnsQueueName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.RosMessageCallbackProps",
    jsii_struct_bases=[],
    name_mapping={
        "callback_type": "callbackType",
        "app_id": "appId",
        "auth_key": "authKey",
        "auth_switch": "authSwitch",
        "callback_url": "callbackUrl",
        "event_type_list": "eventTypeList",
        "mns_endpoint": "mnsEndpoint",
        "mns_queue_name": "mnsQueueName",
    },
)
class RosMessageCallbackProps:
    def __init__(
        self,
        *,
        callback_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        callback_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event_type_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mns_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mns_queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::MessageCallback``.

        :param callback_type: 
        :param app_id: 
        :param auth_key: 
        :param auth_switch: 
        :param callback_url: 
        :param event_type_list: 
        :param mns_endpoint: 
        :param mns_queue_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67cb0b86925548ab815241eb3119c0b7faf877e039adf8558b0870b7a4e0dd57)
            check_type(argname="argument callback_type", value=callback_type, expected_type=type_hints["callback_type"])
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument auth_key", value=auth_key, expected_type=type_hints["auth_key"])
            check_type(argname="argument auth_switch", value=auth_switch, expected_type=type_hints["auth_switch"])
            check_type(argname="argument callback_url", value=callback_url, expected_type=type_hints["callback_url"])
            check_type(argname="argument event_type_list", value=event_type_list, expected_type=type_hints["event_type_list"])
            check_type(argname="argument mns_endpoint", value=mns_endpoint, expected_type=type_hints["mns_endpoint"])
            check_type(argname="argument mns_queue_name", value=mns_queue_name, expected_type=type_hints["mns_queue_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "callback_type": callback_type,
        }
        if app_id is not None:
            self._values["app_id"] = app_id
        if auth_key is not None:
            self._values["auth_key"] = auth_key
        if auth_switch is not None:
            self._values["auth_switch"] = auth_switch
        if callback_url is not None:
            self._values["callback_url"] = callback_url
        if event_type_list is not None:
            self._values["event_type_list"] = event_type_list
        if mns_endpoint is not None:
            self._values["mns_endpoint"] = mns_endpoint
        if mns_queue_name is not None:
            self._values["mns_queue_name"] = mns_queue_name

    @builtins.property
    def callback_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: callbackType: Callback method.
        '''
        result = self._values.get("callback_type")
        assert result is not None, "Required property 'callback_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        appId: App ID. If it is not passed, it is the ID of the default
        application of the system, with a fixed value: app-1000000.
        '''
        result = self._values.get("app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        authKey: Authentication Key, up to 32 characters, must contain both uppercase
        and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
        '''
        result = self._values.get("auth_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        authSwitch: The authentication switch of the HTTP callback,
        this parameter is valid when the callback method is set to HTTP.
        '''
        result = self._values.get("auth_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def callback_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        callbackUrl: Callback address. When the callback method is HTTP,
        this parameter needs to be set. The length of the callback address
        URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
        '''
        result = self._values.get("callback_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event_type_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eventTypeList: Callback event type. When the value is empty, all message notifications are turned off,
        and when the value is ALL, all message notifications are turned on.
        You can also specify to enable certain message notifications,
        and use a comma (,) to separate multiple event types.
        '''
        result = self._values.get("event_type_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mns_endpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mnsEndpoint: This parameter needs to be set when the callback method is MNS for the
        message queue public network endpoint. You can log in to the message service
        console and click the Get Endpoint button in the upper right corner to get it.
        '''
        result = self._values.get("mns_endpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mns_queue_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mnsQueueName: The name of the message queue, which can be viewed in the queue
        list by logging in to the message service console.
        When the callback method is MNS, this parameter needs to be set.
        '''
        result = self._values.get("mns_queue_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMessageCallbackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStorage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.RosStorage",
):
    '''A ROS template type:  ``ALIYUN::VOD::Storage``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosStorageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::Storage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1e450f20da7489075dde01f86732f0d0769c75a362c512d6575bb61bd886b05)
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
            type_hints = typing.get_type_hints(_typecheckingstub__29c6c570bed3e05884cee8cda5e7b7a2ea602a2d7a8840099eaa3c634ea7ecf9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the storage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUpload")
    def attr_default_upload(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultUpload: Whether to upload by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUpload"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModified")
    def attr_gmt_modified(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModified: Modification time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModified"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Group id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageAcl")
    def attr_storage_acl(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageAcl: Storage ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageAcl"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageLocation")
    def attr_storage_location(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageLocation: Storage address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageLocation"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageUsage")
    def attr_storage_usage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageUsage: Storage usage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageUsage"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: Storage type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e3e9cd7d29d761607b0afc15095be7c76df59daa5899745b79116fa45b168976)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="storageLocation")
    def storage_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageLocation: Storage address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageLocation"))

    @storage_location.setter
    def storage_location(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__380fb5753c65980c90c8e2823932d4ab3c3fc874ddb99b91fc3f05eb41d66d6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageLocation", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageType: Storage Type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7aee2e3f154af42176d8498d78b9163dbc8c5b629944256b54b360ca92be03e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="defaultUpload")
    def default_upload(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultUpload: Whether to upload by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultUpload"))

    @default_upload.setter
    def default_upload(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__621a7cc53a54c8dfe2e4839be73008087ef0963af73069467620de7aa9a12f01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultUpload", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.RosStorageProps",
    jsii_struct_bases=[],
    name_mapping={
        "storage_location": "storageLocation",
        "storage_type": "storageType",
        "default_upload": "defaultUpload",
    },
)
class RosStorageProps:
    def __init__(
        self,
        *,
        storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_upload: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::Storage``.

        :param storage_location: 
        :param storage_type: 
        :param default_upload: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06809e34d64c67cae406d955e7d2e0fd5ffc21e14b2cd126395cd7579df00b11)
            check_type(argname="argument storage_location", value=storage_location, expected_type=type_hints["storage_location"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument default_upload", value=default_upload, expected_type=type_hints["default_upload"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "storage_location": storage_location,
            "storage_type": storage_type,
        }
        if default_upload is not None:
            self._values["default_upload"] = default_upload

    @builtins.property
    def storage_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageLocation: Storage address.
        '''
        result = self._values.get("storage_location")
        assert result is not None, "Required property 'storage_location' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storageType: Storage Type.
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_upload(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultUpload: Whether to upload by default.
        '''
        result = self._values.get("default_upload")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStorageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Storage(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.Storage",
):
    '''A ROS resource type:  ``ALIYUN::VOD::Storage``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["StorageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::Storage``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97b888db19f52e71b09b38d2bd372a3b208e6f770701e81a5dfadf5d3b4707b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the storage.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUpload")
    def attr_default_upload(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultUpload: Whether to upload by default.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUpload"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModified")
    def attr_gmt_modified(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GmtModified: Modification time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModified"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: Group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageAcl")
    def attr_storage_acl(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StorageAcl: Storage ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageAcl"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageLocation")
    def attr_storage_location(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StorageLocation: Storage address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageLocation"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageUsage")
    def attr_storage_usage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StorageUsage: Storage usage.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageUsage"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Type: Storage type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.StorageProps",
    jsii_struct_bases=[],
    name_mapping={
        "storage_location": "storageLocation",
        "storage_type": "storageType",
        "default_upload": "defaultUpload",
    },
)
class StorageProps:
    def __init__(
        self,
        *,
        storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_upload: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::Storage``.

        :param storage_location: Property storageLocation: Storage address.
        :param storage_type: Property storageType: Storage Type.
        :param default_upload: Property defaultUpload: Whether to upload by default.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2b12853c6d6e9f13605b8f10d78383f568a2032db5e5bb840e918db8130880a)
            check_type(argname="argument storage_location", value=storage_location, expected_type=type_hints["storage_location"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument default_upload", value=default_upload, expected_type=type_hints["default_upload"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "storage_location": storage_location,
            "storage_type": storage_type,
        }
        if default_upload is not None:
            self._values["default_upload"] = default_upload

    @builtins.property
    def storage_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageLocation: Storage address.'''
        result = self._values.get("storage_location")
        assert result is not None, "Required property 'storage_location' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageType: Storage Type.'''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_upload(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultUpload: Whether to upload by default.'''
        result = self._values.get("default_upload")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StorageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "EditingProject",
    "EditingProjectProps",
    "MessageCallback",
    "MessageCallbackProps",
    "RosEditingProject",
    "RosEditingProjectProps",
    "RosMessageCallback",
    "RosMessageCallbackProps",
    "RosStorage",
    "RosStorageProps",
    "Storage",
    "StorageProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__30b7f74220d51fcefce567c396721c4d94e3a0c75fb654513d9994a53841069b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EditingProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99e72de491d07826d047b16c0c505c51dfbf3dd4106b5f6ba0ee7da74f5355e(
    *,
    title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__501ab2f6d09cf638d7290fb5abacc2debc5ec5b36bb6497eb1574cd4e8ccf018(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MessageCallbackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26c638d0d6673522e83bab65c7e4ef5ed87e62b83cfc0b7fc2ba3b8916718022(
    *,
    callback_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    callback_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event_type_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mns_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mns_queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a351947cf3f0f01edcdd8373f2db3008e418f645776c6aec08ed0a41e4d6211c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEditingProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6123df0b6e19e51a26f647b00dff7a12937fb825ceb069c026306b46a3ee4fd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ce6d4f4a1078ed3f3fb2e1de7df36c1821e1649d37ca2fcfc1b43edc471274c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15da52f83161e71e04b797ca2624e84686f67e2c9f57ffa980b4e1fd4c30cea2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__185859f14e725b4f87fcfbde5887f0083c4a0664a36f2f20979bc509f5ce812c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b640779a4e44fed0e5a1de0709578f4f15a7285aead96270692fb004c0d211a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbb0cbda62c44105bfa4940abf7f44377ccdc5930fa3e3b8adc5138ae92fc5df(
    *,
    title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34f83fc7040a54f9198c4aeb1ed1cc83dd857d470200744bd317b0df44fffa2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMessageCallbackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3bd73f7018fa727559a35e977b90497edce4a5c44f8059924c4d19b176f9132(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30d9ce8d15661fe9b1f794088a100caa45fe880d97f3847da1ef833d3454e177(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fedde39e9cd4617a134d166ae9ea7c5e2aea7b08cf4d4d4e1e65e31e03f81841(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__428c447bf2d9f4136545ce4c72d627a92abc0f51a6b80d7418413a0b85f113c2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4280999e5c8c9116e32d7f27e46e2f2eeeb7fa838754c2fc25982f13770abe53(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d3e5a256dbb7c95b69129fab9f6b73ef065a8cd59a8910664227a19a09da4e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f3379291b8207a58da4edf5fd966725ddf564e307af99f86bb581d91efa0fd2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2b2095ce9ee0fe767a75a931ac73ad0f3628d9d4744ff6f0fc1f5386b44acd5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cea58ff627aa345aa3c71c08caa6db7d019c00db348efd311e394216d75f9d5d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f6e393053e0dcd7ef5ec6ebdebc797a2e96cb9a08813e05b0b52db68c9fc852(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67cb0b86925548ab815241eb3119c0b7faf877e039adf8558b0870b7a4e0dd57(
    *,
    callback_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    callback_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event_type_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mns_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mns_queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1e450f20da7489075dde01f86732f0d0769c75a362c512d6575bb61bd886b05(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosStorageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29c6c570bed3e05884cee8cda5e7b7a2ea602a2d7a8840099eaa3c634ea7ecf9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3e9cd7d29d761607b0afc15095be7c76df59daa5899745b79116fa45b168976(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__380fb5753c65980c90c8e2823932d4ab3c3fc874ddb99b91fc3f05eb41d66d6a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7aee2e3f154af42176d8498d78b9163dbc8c5b629944256b54b360ca92be03e7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__621a7cc53a54c8dfe2e4839be73008087ef0963af73069467620de7aa9a12f01(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06809e34d64c67cae406d955e7d2e0fd5ffc21e14b2cd126395cd7579df00b11(
    *,
    storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_upload: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97b888db19f52e71b09b38d2bd372a3b208e6f770701e81a5dfadf5d3b4707b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[StorageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2b12853c6d6e9f13605b8f10d78383f568a2032db5e5bb840e918db8130880a(
    *,
    storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_upload: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
